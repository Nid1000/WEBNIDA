"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PedidosService = class PedidosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    toFloat(n) {
        try {
            return parseFloat(String(n));
        }
        catch {
            return 0;
        }
    }
    async crearPedido(usuarioId, dto) {
        if (!dto.productos || dto.productos.length === 0) {
            return {
                status: 400,
                body: {
                    error: 'Carrito vacío',
                    message: 'No se proporcionaron productos',
                },
            };
        }
        const productoIds = dto.productos.map((p) => p.id);
        const productos = await this.prisma.producto.findMany({
            where: { id: { in: productoIds }, activo: true },
        });
        if (productos.length !== productoIds.length) {
            return {
                status: 400,
                body: {
                    error: 'Producto inválido',
                    message: 'Uno o más productos no existen o están inactivos',
                },
            };
        }
        const detalles = dto.productos.map((item) => {
            const prod = productos.find((p) => p.id === item.id);
            const precioUnit = this.toFloat(prod.precio);
            const cantidad = parseInt(String(item.cantidad), 10) || 1;
            const subtotal = precioUnit * cantidad;
            return {
                producto_id: prod.id,
                cantidad,
                precio_unitario: String(precioUnit),
                subtotal: String(subtotal),
            };
        });
        const total = detalles.reduce((acc, d) => acc + this.toFloat(d.subtotal), 0);
        const fechaEntrega = dto.fecha_entrega ? new Date(dto.fecha_entrega) : null;
        const creado = await this.prisma.pedido.create({
            data: {
                usuario_id: usuarioId,
                total: String(total),
                estado: 'pendiente',
                fecha_entrega: fechaEntrega,
                direccion_entrega: dto.direccion_entrega || null,
                distrito_entrega: dto.distrito_entrega || null,
                numero_casa_entrega: dto.numero_casa_entrega || null,
                direccion_id: dto.direccion_id || null,
                telefono_contacto: dto.telefono_contacto || null,
                notas: dto.notas || null,
                detalles: { create: detalles },
            },
            include: {
                detalles: {
                    include: { producto: { select: { nombre: true, imagen: true } } },
                },
            },
        });
        return {
            status: 201,
            body: {
                message: 'Pedido creado exitosamente',
                pedido: {
                    ...creado,
                    total: this.toFloat(creado.total),
                    detalles: creado.detalles.map((d) => ({
                        id: d.id,
                        producto_id: d.producto_id,
                        cantidad: d.cantidad,
                        precio_unitario: this.toFloat(d.precio_unitario),
                        subtotal: this.toFloat(d.subtotal),
                        producto_nombre: d.producto?.nombre || null,
                        producto_imagen: d.producto?.imagen || null,
                    })),
                },
            },
        };
    }
    async misPedidos(usuarioId, params) {
        const pagina = params.pagina ?? 1;
        const limite = params.limite ?? 10;
        const skip = (pagina - 1) * limite;
        const [pedidos, totalCount] = await this.prisma.$transaction([
            this.prisma.pedido.findMany({
                where: { usuario_id: usuarioId },
                orderBy: { created_at: 'desc' },
                include: { detalles: true },
                skip,
                take: limite,
            }),
            this.prisma.pedido.count({ where: { usuario_id: usuarioId } }),
        ]);
        const mapped = pedidos.map((p) => ({
            id: p.id,
            total: this.toFloat(p.total),
            estado: p.estado,
            created_at: p.created_at,
            fecha_pedido: p.created_at,
            notas: p.notas || undefined,
            total_productos: p.detalles.reduce((acc, d) => acc + d.cantidad, 0),
        }));
        return {
            status: 200,
            body: {
                pedidos: mapped,
                total: totalCount,
                totalPaginas: Math.ceil(totalCount / limite),
                pagina,
                limite,
            },
        };
    }
    async obtenerPedido(usuarioId, pedidoId) {
        const pedido = await this.prisma.pedido.findFirst({
            where: { id: pedidoId, usuario_id: usuarioId },
            include: {
                usuario: {
                    select: {
                        id: true,
                        nombre: true,
                        apellido: true,
                        email: true,
                        telefono: true,
                        direccion: true,
                        distrito: true,
                    },
                },
                comprobantes: {
                    orderBy: { created_at: 'desc' },
                    take: 1,
                },
                detalles: {
                    include: {
                        producto: { select: { nombre: true, imagen: true, precio: true } },
                    },
                },
            },
        });
        if (!pedido) {
            return {
                status: 404,
                body: {
                    error: 'Pedido no encontrado',
                    message: 'El pedido solicitado no existe',
                },
            };
        }
        return {
            status: 200,
            body: {
                pedido: {
                    id: pedido.id,
                    total: this.toFloat(pedido.total),
                    estado: pedido.estado,
                    created_at: pedido.created_at,
                    notas: pedido.notas || null,
                    direccion_entrega: pedido.direccion_entrega || null,
                    distrito_entrega: pedido.distrito_entrega || null,
                    numero_casa_entrega: pedido.numero_casa_entrega || null,
                    telefono_contacto: pedido.telefono_contacto || null,
                    cliente_nombre: pedido.usuario
                        ? `${pedido.usuario.nombre} ${pedido.usuario.apellido}`.trim()
                        : null,
                    cliente_email: pedido.usuario?.email || null,
                    cliente_telefono: pedido.usuario?.telefono || null,
                    metodo_pago: pedido.comprobantes.length > 0
                        ? pedido.comprobantes[0].tipo
                        : null,
                    comprobante_numero: pedido.comprobantes.length > 0
                        ? pedido.comprobantes[0].numero_formateado
                        : null,
                },
                detalles: pedido.detalles.map((d) => ({
                    producto_nombre: d.producto?.nombre || null,
                    producto_imagen: d.producto?.imagen || null,
                    cantidad: d.cantidad,
                    precio_unitario: this.toFloat(d.precio_unitario),
                    subtotal: this.toFloat(d.subtotal),
                })),
            },
        };
    }
    async cancelarPedido(usuarioId, pedidoId) {
        const pedido = await this.prisma.pedido.findFirst({
            where: { id: pedidoId, usuario_id: usuarioId },
        });
        if (!pedido)
            return {
                status: 404,
                body: {
                    error: 'Pedido no encontrado',
                    message: 'El pedido solicitado no existe',
                },
            };
        if (pedido.estado === 'entregado' ||
            pedido.estado === 'cancelado' ||
            pedido.estado === 'listo') {
            return {
                status: 400,
                body: {
                    error: 'No cancelable',
                    message: 'El pedido no puede ser cancelado en su estado actual',
                },
            };
        }
        await this.prisma.pedido.update({
            where: { id: pedidoId },
            data: { estado: 'cancelado' },
        });
        return { status: 200, body: { message: 'Pedido cancelado exitosamente' } };
    }
    async adminList(params) {
        const pagina = params.pagina ?? 1;
        const limite = params.limite ?? 20;
        const skip = (pagina - 1) * limite;
        const where = {};
        if (params.estado) {
            where.estado = params.estado;
        }
        if (params.desde || params.hasta) {
            where.created_at = {};
            if (params.desde)
                where.created_at.gte = new Date(params.desde);
            if (params.hasta)
                where.created_at.lte = new Date(params.hasta);
        }
        if (params.buscar) {
            const num = parseInt(params.buscar, 10);
            const or = [
                { notas: { contains: params.buscar, mode: 'insensitive' } },
                { direccion_entrega: { contains: params.buscar, mode: 'insensitive' } },
                { telefono_contacto: { contains: params.buscar, mode: 'insensitive' } },
            ];
            if (!isNaN(num)) {
                or.push({ id: num });
            }
            where.OR = or;
        }
        const [pedidos, total] = await this.prisma.$transaction([
            this.prisma.pedido.findMany({
                where,
                orderBy: { created_at: 'desc' },
                include: {
                    detalles: true,
                    usuario: {
                        select: { id: true, nombre: true, apellido: true, email: true },
                    },
                },
                skip,
                take: limite,
            }),
            this.prisma.pedido.count({ where }),
        ]);
        const rows = pedidos.map((p) => ({
            id: p.id,
            usuario: p.usuario
                ? {
                    id: p.usuario.id,
                    nombre: p.usuario.nombre,
                    apellido: p.usuario.apellido,
                    email: p.usuario.email,
                }
                : null,
            total: this.toFloat(p.total),
            estado: p.estado,
            created_at: p.created_at,
            fecha_entrega: p.fecha_entrega ?? null,
            notas: p.notas ?? null,
            direccion_entrega: p.direccion_entrega ?? null,
            telefono_contacto: p.telefono_contacto ?? null,
            total_productos: p.detalles.reduce((acc, d) => acc + d.cantidad, 0),
        }));
        return {
            status: 200,
            body: {
                pedidos: rows,
                pagination: {
                    total,
                    pagina,
                    limite,
                    totalPaginas: Math.ceil(total / limite),
                },
            },
        };
    }
    async adminGet(id) {
        const p = await this.prisma.pedido.findUnique({
            where: { id },
            include: {
                detalles: {
                    include: {
                        producto: { select: { nombre: true, imagen: true, precio: true } },
                    },
                },
                usuario: {
                    select: {
                        id: true,
                        nombre: true,
                        apellido: true,
                        email: true,
                        telefono: true,
                    },
                },
            },
        });
        if (!p)
            return {
                status: 404,
                body: {
                    error: 'Pedido no encontrado',
                    message: 'El pedido solicitado no existe',
                },
            };
        return {
            status: 200,
            body: {
                pedido: {
                    id: p.id,
                    usuario: p.usuario
                        ? {
                            id: p.usuario.id,
                            nombre: p.usuario.nombre,
                            apellido: p.usuario.apellido,
                            email: p.usuario.email,
                            telefono: p.usuario.telefono,
                        }
                        : null,
                    total: this.toFloat(p.total),
                    estado: p.estado,
                    created_at: p.created_at,
                    fecha_entrega: p.fecha_entrega ?? null,
                    notas: p.notas ?? null,
                    direccion_entrega: p.direccion_entrega ?? null,
                    telefono_contacto: p.telefono_contacto ?? null,
                },
                detalles: p.detalles.map((d) => ({
                    producto_nombre: d.producto?.nombre || null,
                    producto_imagen: d.producto?.imagen || null,
                    cantidad: d.cantidad,
                    precio_unitario: this.toFloat(d.precio_unitario),
                    subtotal: this.toFloat(d.subtotal),
                })),
            },
        };
    }
    async adminActualizarEstado(id, estado) {
        const pedido = await this.prisma.pedido.findUnique({
            where: { id },
            select: { id: true, estado: true },
        });
        if (!pedido)
            return {
                status: 404,
                body: {
                    error: 'Pedido no encontrado',
                    message: 'El pedido solicitado no existe',
                },
            };
        if (!['pendiente', 'listo', 'entregado', 'cancelado'].includes(estado)) {
            return {
                status: 400,
                body: {
                    error: 'Estado inválido',
                    message: 'Estado de pedido no reconocido',
                },
            };
        }
        if (pedido.estado === 'entregado' || pedido.estado === 'cancelado') {
            return {
                status: 400,
                body: {
                    error: 'No modificable',
                    message: 'El pedido no puede cambiarse en su estado actual',
                },
            };
        }
        await this.prisma.pedido.update({ where: { id }, data: { estado } });
        return { status: 200, body: { message: 'Estado actualizado', estado } };
    }
    async adminActualizarFechaEntrega(id, fecha) {
        const pedido = await this.prisma.pedido.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!pedido)
            return {
                status: 404,
                body: {
                    error: 'Pedido no encontrado',
                    message: 'El pedido solicitado no existe',
                },
            };
        const fechaEntrega = fecha ? new Date(fecha) : null;
        await this.prisma.pedido.update({
            where: { id },
            data: { fecha_entrega: fechaEntrega },
        });
        return {
            status: 200,
            body: {
                message: 'Fecha de entrega actualizada',
                fecha_entrega: fechaEntrega,
            },
        };
    }
};
exports.PedidosService = PedidosService;
exports.PedidosService = PedidosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PedidosService);
//# sourceMappingURL=pedidos.service.js.map