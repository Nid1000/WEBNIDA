"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcryptjs"));
let UsuariosService = class UsuariosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    distritosHuancayo = [
        'Huancayo',
        'El Tambo',
        'Chilca',
        'Carhuacallanga',
        'Cullhuas',
        'Chacapampa',
        'Chicche',
        'Chilca',
        'Chongos Alto',
        'Chupuro',
        'Colca',
        'Huacrapuquio',
        'Hualhuas',
        'Huancán',
        'Huasicancha',
        'Huayucachi',
        'Ingenio',
        'Pariahuanca',
        'Pilcomayo',
        'Pucará',
        'Quichuay',
        'Quilcas',
        'Santo Domingo de Acobamba',
        'Saño',
        'Sapallanga',
        'Sicaya',
        'Viques',
        'San Agustín de Cajas',
    ];
    async listarDistritosHuancayo() {
        await this.prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS catalogo_distritos_huancayo (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(120) NOT NULL UNIQUE,
        orden_lista INT NOT NULL DEFAULT 0,
        activo TINYINT(1) NOT NULL DEFAULT 1,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
        for (const [idx, nombre] of this.distritosHuancayo.entries()) {
            const safeName = nombre.replace(/'/g, "''");
            await this.prisma.$executeRawUnsafe(`
        INSERT IGNORE INTO catalogo_distritos_huancayo (nombre, orden_lista, activo)
        VALUES ('${safeName}', ${idx + 1}, 1);
      `);
        }
        const rows = await this.prisma.$queryRawUnsafe(`
      SELECT id, nombre
      FROM catalogo_distritos_huancayo
      WHERE activo = 1
      ORDER BY orden_lista ASC, nombre ASC
    `);
        return {
            status: 200,
            body: { distritos: rows },
        };
    }
    async obtenerPerfil(usuarioId) {
        const usuario = await this.prisma.usuario.findFirst({
            where: { id: usuarioId, activo: true },
            select: {
                id: true,
                nombre: true,
                apellido: true,
                email: true,
                telefono: true,
                direccion: true,
                distrito: true,
                numero_casa: true,
                created_at: true,
            },
        });
        if (!usuario) {
            return {
                status: 404,
                body: {
                    error: 'Usuario no encontrado',
                    message: 'Tu perfil no fue encontrado',
                },
            };
        }
        return { status: 200, body: { usuario } };
    }
    async actualizarPerfil(usuarioId, data) {
        const fields = {};
        if (data.nombre !== undefined)
            fields.nombre = data.nombre;
        if (data.apellido !== undefined)
            fields.apellido = data.apellido;
        if (data.telefono !== undefined)
            fields.telefono = data.telefono;
        if (data.direccion !== undefined)
            fields.direccion = data.direccion;
        if (data.distrito !== undefined)
            fields.distrito = data.distrito;
        if (data.numero_casa !== undefined)
            fields.numero_casa = data.numero_casa;
        if (Object.keys(fields).length === 0) {
            return {
                status: 400,
                body: {
                    error: 'Sin cambios',
                    message: 'No se proporcionaron datos para actualizar',
                },
            };
        }
        await this.prisma.usuario.update({ where: { id: usuarioId }, data: fields });
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: usuarioId },
            select: {
                id: true,
                nombre: true,
                apellido: true,
                email: true,
                telefono: true,
                direccion: true,
                distrito: true,
                numero_casa: true,
                created_at: true,
            },
        });
        return {
            status: 200,
            body: { message: 'Perfil actualizado exitosamente', usuario },
        };
    }
    async cambiarPassword(usuarioId, passwordActual, passwordNueva) {
        const usuario = await this.prisma.usuario.findUnique({ where: { id: usuarioId } });
        if (!usuario || !usuario.activo) {
            return {
                status: 404,
                body: {
                    error: 'Usuario no encontrado',
                    message: 'Tu cuenta no fue encontrada',
                },
            };
        }
        const valid = await bcrypt.compare(passwordActual, usuario.password);
        if (!valid) {
            return {
                status: 400,
                body: {
                    error: 'Contraseña incorrecta',
                    message: 'La contraseña actual es incorrecta',
                },
            };
        }
        const hashed = await bcrypt.hash(passwordNueva, 10);
        await this.prisma.usuario.update({ where: { id: usuarioId }, data: { password: hashed } });
        return { status: 200, body: { message: 'Contraseña actualizada exitosamente' } };
    }
    async estadisticas(usuarioId) {
        const totalPedidos = await this.prisma.pedido.count({ where: { usuario_id: usuarioId } });
        const pedidosPorEstado = await this.prisma.pedido.groupBy({
            by: ['estado'],
            where: { usuario_id: usuarioId },
            _count: { _all: true },
        });
        const sumTotal = await this.prisma.pedido.aggregate({
            where: { usuario_id: usuarioId, estado: { not: 'cancelado' } },
            _sum: { total: true },
        });
        const ultimoPedido = await this.prisma.pedido.findFirst({
            where: { usuario_id: usuarioId },
            orderBy: { created_at: 'desc' },
        });
        return {
            status: 200,
            body: {
                estadisticas: {
                    total_pedidos: totalPedidos,
                    pedidos_por_estado: pedidosPorEstado.map((p) => ({ estado: p.estado, cantidad: p._count._all })),
                    total_gastado: parseFloat(sumTotal._sum.total?.toString() ?? '0'),
                    ultimo_pedido: ultimoPedido ?? null,
                },
            },
        };
    }
    async adminList(params) {
        const limite = params.limite ?? 20;
        const pagina = params.pagina ?? 1;
        const skip = (pagina - 1) * limite;
        const where = {};
        if (params.buscar) {
            where.OR = [
                { nombre: { contains: params.buscar } },
                { apellido: { contains: params.buscar } },
                { email: { contains: params.buscar } },
                { distrito: { contains: params.buscar } },
            ];
        }
        if (params.activo !== undefined)
            where.activo = params.activo;
        const [usuarios, total] = await this.prisma.$transaction([
            this.prisma.usuario.findMany({
                where,
                select: {
                    id: true,
                    nombre: true,
                    apellido: true,
                    email: true,
                    telefono: true,
                    direccion: true,
                    distrito: true,
                    numero_casa: true,
                    activo: true,
                    created_at: true,
                },
                orderBy: { created_at: 'desc' },
                take: limite,
                skip,
            }),
            this.prisma.usuario.count({ where }),
        ]);
        return {
            status: 200,
            body: {
                usuarios,
                pagination: {
                    total,
                    pagina,
                    limite,
                    totalPaginas: Math.ceil(total / limite),
                },
            },
        };
    }
    async adminActualizar(id, body) {
        const existente = await this.prisma.usuario.findUnique({ where: { id } });
        if (!existente)
            return { status: 404, body: { error: 'Usuario no encontrado' } };
        const data = {};
        if (body.nombre !== undefined) {
            const nombre = String(body.nombre).trim();
            if (!nombre || nombre.length < 2) {
                return {
                    status: 400,
                    body: {
                        error: 'Datos inválidos',
                        message: 'El nombre debe tener al menos 2 caracteres',
                    },
                };
            }
            data.nombre = nombre;
        }
        if (body.apellido !== undefined)
            data.apellido = String(body.apellido).trim();
        if (body.email !== undefined) {
            const email = String(body.email).trim();
            if (!email || !email.includes('@')) {
                return { status: 400, body: { error: 'Datos inválidos', message: 'Email inválido' } };
            }
            if (email !== existente.email) {
                const dup = await this.prisma.usuario.findUnique({ where: { email } });
                if (dup) {
                    return { status: 400, body: { error: 'Duplicado', message: 'Ya existe un usuario con ese email' } };
                }
            }
            data.email = email;
        }
        if (body.telefono !== undefined)
            data.telefono = body.telefono || null;
        if (body.direccion !== undefined)
            data.direccion = body.direccion || null;
        if (body.distrito !== undefined)
            data.distrito = body.distrito || null;
        if (body.numero_casa !== undefined)
            data.numero_casa = body.numero_casa || null;
        if (Object.keys(data).length === 0)
            return { status: 400, body: { error: 'Sin cambios' } };
        const actualizado = await this.prisma.usuario.update({ where: { id }, data });
        return { status: 200, body: { message: 'Usuario actualizado', usuario: actualizado } };
    }
    async adminGet(id) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id },
            select: {
                id: true,
                nombre: true,
                apellido: true,
                email: true,
                telefono: true,
                direccion: true,
                distrito: true,
                numero_casa: true,
                activo: true,
                created_at: true,
            },
        });
        if (!usuario) {
            return {
                status: 404,
                body: {
                    error: 'Usuario no encontrado',
                    message: 'El usuario solicitado no existe',
                },
            };
        }
        const [totalPedidos, sumGastado] = await this.prisma.$transaction([
            this.prisma.pedido.count({ where: { usuario_id: id } }),
            this.prisma.pedido.aggregate({
                where: { usuario_id: id, estado: { not: 'cancelado' } },
                _sum: { total: true },
            }),
        ]);
        return {
            status: 200,
            body: {
                usuario: {
                    ...usuario,
                    estadisticas: {
                        total_pedidos: totalPedidos,
                        total_gastado: parseFloat(sumGastado._sum.total?.toString() ?? '0'),
                    },
                },
            },
        };
    }
    async adminActualizarEstado(id, activo) {
        const existe = await this.prisma.usuario.findUnique({ where: { id }, select: { id: true } });
        if (!existe) {
            return { status: 404, body: { error: 'Usuario no encontrado', message: 'El usuario solicitado no existe' } };
        }
        const usuario = await this.prisma.usuario.update({
            where: { id },
            data: { activo },
            select: { id: true, activo: true },
        });
        return { status: 200, body: { message: 'Estado actualizado', usuario } };
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map