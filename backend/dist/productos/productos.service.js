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
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
let ProductosService = class ProductosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listarProductos(params) {
        const categoriaId = params.categoria
            ? parseInt(params.categoria, 10)
            : undefined;
        const destacado = params.destacado === 'true' ? true : undefined;
        const buscar = params.buscar?.trim();
        const limite = params.limite ? parseInt(params.limite, 10) : 50;
        const pagina = params.pagina ? parseInt(params.pagina, 10) : 1;
        const skip = (pagina - 1) * limite;
        const where = { activo: true };
        if (categoriaId)
            where.categoria_id = categoriaId;
        if (destacado !== undefined)
            where.destacado = true;
        if (buscar) {
            where.OR = [
                { nombre: { contains: buscar, mode: 'insensitive' } },
                { descripcion: { contains: buscar, mode: 'insensitive' } },
            ];
        }
        const [productos, total] = await Promise.all([
            this.prisma.producto.findMany({
                where,
                include: { categoria: { select: { nombre: true } } },
                orderBy: { created_at: 'desc' },
                skip,
                take: limite,
            }),
            this.prisma.producto.count({ where }),
        ]);
        const productosMap = productos.map((p) => ({
            ...p,
            precio: parseFloat(p.precio.toString()),
            categoria_nombre: p.categoria?.nombre ?? null,
        }));
        return {
            productos: productosMap,
            pagination: {
                total,
                pagina,
                limite,
                totalPaginas: Math.ceil(total / limite),
            },
        };
    }
    async obtenerProducto(id) {
        const p = await this.prisma.producto.findFirst({
            where: { id, activo: true },
            include: { categoria: { select: { nombre: true } } },
        });
        if (!p)
            throw new common_1.NotFoundException('Producto no encontrado');
        return {
            ...p,
            precio: parseFloat(p.precio.toString()),
            categoria_nombre: p.categoria?.nombre ?? null,
        };
    }
    async crearProducto(params) {
        const { file, body } = params;
        try {
            const { nombre, descripcion, precio, categoria_id, stock = 0, destacado = false, imagen_url, } = body;
            if (!nombre || nombre.trim().length < 2) {
                if (file)
                    this.safeUnlink(file.path);
                return {
                    status: 400,
                    body: {
                        error: 'Datos inválidos',
                        message: 'El nombre debe tener al menos 2 caracteres',
                    },
                };
            }
            if (precio === undefined ||
                isNaN(parseFloat(String(precio))) ||
                parseFloat(String(precio)) < 0) {
                if (file)
                    this.safeUnlink(file.path);
                return {
                    status: 400,
                    body: {
                        error: 'Datos inválidos',
                        message: 'El precio debe ser un número positivo',
                    },
                };
            }
            const categoriaId = parseInt(String(categoria_id), 10);
            if (!categoriaId || categoriaId < 1) {
                if (file)
                    this.safeUnlink(file.path);
                return {
                    status: 400,
                    body: {
                        error: 'Categoría inválida',
                        message: 'La categoría seleccionada no existe',
                    },
                };
            }
            const categoria = await this.prisma.categoria.findFirst({
                where: { id: categoriaId, activo: true },
                select: { id: true },
            });
            if (!categoria) {
                if (file)
                    this.safeUnlink(file.path);
                return {
                    status: 400,
                    body: {
                        error: 'Categoría inválida',
                        message: 'La categoría seleccionada no existe',
                    },
                };
            }
            let imagen = null;
            if (file) {
                imagen = `productos/${file.filename}`;
            }
            else if (imagen_url &&
                (String(imagen_url).startsWith('http://') ||
                    String(imagen_url).startsWith('https://'))) {
                imagen = imagen_url;
            }
            const creado = await this.prisma.producto.create({
                data: {
                    nombre: nombre.trim(),
                    descripcion: descripcion || null,
                    precio: String(precio),
                    categoria_id: categoriaId,
                    imagen,
                    stock: parseInt(String(stock || 0), 10) || 0,
                    destacado: Boolean(destacado),
                },
                include: { categoria: { select: { nombre: true } } },
            });
            return {
                status: 201,
                body: {
                    message: 'Producto creado exitosamente',
                    producto: {
                        ...creado,
                        precio: parseFloat(creado.precio.toString()),
                        categoria_nombre: creado.categoria?.nombre ?? null,
                    },
                },
            };
        }
        catch (error) {
            if (params.file)
                this.safeUnlink(params.file.path);
            return {
                status: 500,
                body: { error: 'Error interno', message: 'Error al crear producto' },
            };
        }
    }
    async actualizarProducto(id, params) {
        const { file, body } = params;
        try {
            const existente = await this.prisma.producto.findUnique({
                where: { id },
            });
            if (!existente) {
                if (file)
                    this.safeUnlink(file.path);
                return {
                    status: 404,
                    body: {
                        error: 'Producto no encontrado',
                        message: 'El producto a actualizar no existe',
                    },
                };
            }
            const updateData = {};
            const { nombre, descripcion, precio, categoria_id, stock, destacado, imagen_url, } = body;
            if (nombre !== undefined) {
                if (String(nombre).trim().length < 2) {
                    if (file)
                        this.safeUnlink(file.path);
                    return {
                        status: 400,
                        body: {
                            error: 'Datos inválidos',
                            message: 'El nombre debe tener al menos 2 caracteres',
                        },
                    };
                }
                updateData.nombre = String(nombre).trim();
            }
            if (descripcion !== undefined)
                updateData.descripcion = descripcion;
            if (precio !== undefined) {
                if (isNaN(parseFloat(String(precio))) ||
                    parseFloat(String(precio)) < 0) {
                    if (file)
                        this.safeUnlink(file.path);
                    return {
                        status: 400,
                        body: {
                            error: 'Datos inválidos',
                            message: 'El precio debe ser un número positivo',
                        },
                    };
                }
                updateData.precio = String(precio);
            }
            if (categoria_id !== undefined) {
                const categoriaId = parseInt(String(categoria_id), 10);
                if (!categoriaId || categoriaId < 1) {
                    if (file)
                        this.safeUnlink(file.path);
                    return {
                        status: 400,
                        body: {
                            error: 'Categoría inválida',
                            message: 'La categoría seleccionada no existe',
                        },
                    };
                }
                const categoria = await this.prisma.categoria.findFirst({
                    where: { id: categoriaId, activo: true },
                    select: { id: true },
                });
                if (!categoria) {
                    if (file)
                        this.safeUnlink(file.path);
                    return {
                        status: 400,
                        body: {
                            error: 'Categoría inválida',
                            message: 'La categoría seleccionada no existe',
                        },
                    };
                }
                updateData.categoria_id = categoriaId;
            }
            if (stock !== undefined)
                updateData.stock = parseInt(String(stock), 10);
            if (destacado !== undefined)
                updateData.destacado = Boolean(destacado);
            if (file) {
                const nuevaImagen = `productos/${file.filename}`;
                updateData.imagen = nuevaImagen;
                if (existente.imagen && !String(existente.imagen).startsWith('http')) {
                    const rutaAnterior = path.join(process.cwd(), 'uploads', String(existente.imagen));
                    this.safeUnlink(rutaAnterior);
                }
            }
            else if (imagen_url !== undefined) {
                const nuevaImagen = imagen_url || null;
                updateData.imagen = nuevaImagen;
                if (existente.imagen && !String(existente.imagen).startsWith('http')) {
                    const rutaAnterior = path.join(process.cwd(), 'uploads', String(existente.imagen));
                    this.safeUnlink(rutaAnterior);
                }
            }
            if (Object.keys(updateData).length === 0) {
                if (file)
                    this.safeUnlink(file.path);
                return {
                    status: 400,
                    body: {
                        error: 'Sin cambios',
                        message: 'No se proporcionaron datos para actualizar',
                    },
                };
            }
            const actualizado = await this.prisma.producto.update({
                where: { id },
                data: updateData,
                include: { categoria: { select: { nombre: true } } },
            });
            return {
                status: 200,
                body: {
                    message: 'Producto actualizado exitosamente',
                    producto: {
                        ...actualizado,
                        precio: parseFloat(actualizado.precio.toString()),
                        categoria_nombre: actualizado.categoria?.nombre ?? null,
                    },
                },
            };
        }
        catch (error) {
            if (params.file)
                this.safeUnlink(params.file.path);
            return {
                status: 500,
                body: {
                    error: 'Error interno',
                    message: 'Error al actualizar producto',
                },
            };
        }
    }
    async eliminarProducto(id) {
        const existente = await this.prisma.producto.findUnique({ where: { id } });
        if (!existente) {
            return {
                status: 404,
                body: {
                    error: 'Producto no encontrado',
                    message: 'El producto a eliminar no existe',
                },
            };
        }
        await this.prisma.producto.update({
            where: { id },
            data: { activo: false },
        });
        return {
            status: 200,
            body: { message: 'Producto eliminado exitosamente' },
        };
    }
    safeUnlink(p) {
        try {
            if (p && fs.existsSync(p))
                fs.unlinkSync(p);
        }
        catch (e) { }
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductosService);
//# sourceMappingURL=productos.service.js.map