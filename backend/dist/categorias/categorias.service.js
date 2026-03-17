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
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
let CategoriasService = class CategoriasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(activo) {
        const onlyActive = activo === undefined ? true : activo === 'true';
        return this.prisma.categoria.findMany({
            where: onlyActive ? { activo: true } : undefined,
            orderBy: { nombre: 'asc' },
        });
    }
    async findById(id) {
        const categoria = await this.prisma.categoria.findFirst({
            where: { id, activo: true },
        });
        if (!categoria)
            throw new common_1.NotFoundException('Categoría no encontrada');
        return categoria;
    }
    async findProductosByCategoria(id, pagina = 1, limite = 20) {
        const categoria = await this.prisma.categoria.findFirst({
            where: { id, activo: true },
        });
        if (!categoria)
            throw new common_1.NotFoundException('Categoría no encontrada');
        const skip = (pagina - 1) * limite;
        const [productos, total] = await Promise.all([
            this.prisma.producto.findMany({
                where: { categoria_id: id, activo: true },
                include: { categoria: { select: { nombre: true } } },
                orderBy: { created_at: 'desc' },
                skip,
                take: limite,
            }),
            this.prisma.producto.count({ where: { categoria_id: id, activo: true } }),
        ]);
        const productosMap = productos.map((p) => ({
            ...p,
            precio: parseFloat(p.precio.toString()),
            categoria_nombre: p.categoria?.nombre ?? null,
        }));
        return {
            categoria,
            productos: productosMap,
            pagination: {
                total,
                pagina,
                limite,
                totalPaginas: Math.ceil(total / limite),
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
                { nombre: { contains: params.buscar, mode: 'insensitive' } },
                { descripcion: { contains: params.buscar, mode: 'insensitive' } },
            ];
        }
        if (params.activo !== undefined)
            where.activo = params.activo;
        const [categorias, total] = await Promise.all([
            this.prisma.categoria.findMany({
                where,
                orderBy: { nombre: 'asc' },
                skip,
                take: limite,
            }),
            this.prisma.categoria.count({ where }),
        ]);
        return {
            status: 200,
            body: {
                categorias,
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
        const categoria = await this.prisma.categoria.findUnique({ where: { id } });
        if (!categoria)
            return { status: 404, body: { error: 'Categoría no encontrada' } };
        return { status: 200, body: { categoria } };
    }
    async adminCrear(body) {
        const nombre = String(body.nombre || '').trim();
        if (!nombre || nombre.length < 2) {
            return {
                status: 400,
                body: {
                    error: 'Datos inválidos',
                    message: 'El nombre debe tener al menos 2 caracteres',
                },
            };
        }
        const existente = await this.prisma.categoria.findUnique({
            where: { nombre },
        });
        if (existente) {
            return {
                status: 400,
                body: {
                    error: 'Duplicado',
                    message: 'Ya existe una categoría con ese nombre',
                },
            };
        }
        const creada = await this.prisma.categoria.create({
            data: {
                nombre,
                descripcion: body.descripcion || null,
                imagen: body.imagen || null,
            },
        });
        return {
            status: 201,
            body: { message: 'Categoría creada', categoria: creada },
        };
    }
    async adminActualizar(id, body) {
        const existente = await this.prisma.categoria.findUnique({ where: { id } });
        if (!existente)
            return { status: 404, body: { error: 'Categoría no encontrada' } };
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
            if (nombre !== existente.nombre) {
                const dup = await this.prisma.categoria.findUnique({
                    where: { nombre },
                });
                if (dup)
                    return {
                        status: 400,
                        body: {
                            error: 'Duplicado',
                            message: 'Ya existe una categoría con ese nombre',
                        },
                    };
            }
            data.nombre = nombre;
        }
        if (body.descripcion !== undefined)
            data.descripcion = body.descripcion || null;
        if (body.imagen !== undefined)
            data.imagen = body.imagen || null;
        if (Object.keys(data).length === 0)
            return { status: 400, body: { error: 'Sin cambios' } };
        const actualizada = await this.prisma.categoria.update({
            where: { id },
            data,
        });
        return {
            status: 200,
            body: { message: 'Categoría actualizada', categoria: actualizada },
        };
    }
    async adminActualizarImagen(id, file) {
        try {
            const existente = await this.prisma.categoria.findUnique({
                where: { id },
            });
            if (!existente) {
                if (file?.path)
                    this.safeUnlink(file.path);
                return { status: 404, body: { error: 'Categoría no encontrada' } };
            }
            if (!file)
                return {
                    status: 400,
                    body: {
                        error: 'Archivo requerido',
                        message: 'Debe enviar una imagen',
                    },
                };
            const nuevaImagen = `categorias/${file.filename}`;
            if (existente.imagen && !String(existente.imagen).startsWith('http')) {
                const anterior = path.join(process.cwd(), 'uploads', String(existente.imagen));
                this.safeUnlink(anterior);
            }
            const actualizada = await this.prisma.categoria.update({
                where: { id },
                data: { imagen: nuevaImagen },
            });
            return {
                status: 200,
                body: { message: 'Imagen actualizada', categoria: actualizada },
            };
        }
        catch (e) {
            if (file?.path)
                this.safeUnlink(file.path);
            return {
                status: 500,
                body: {
                    error: 'Error interno',
                    message: 'No se pudo actualizar la imagen',
                },
            };
        }
    }
    async adminActualizarEstado(id, activo) {
        const existente = await this.prisma.categoria.findUnique({ where: { id } });
        if (!existente)
            return { status: 404, body: { error: 'Categoría no encontrada' } };
        const actualizada = await this.prisma.categoria.update({
            where: { id },
            data: { activo: Boolean(activo) },
        });
        return {
            status: 200,
            body: { message: 'Estado actualizado', categoria: actualizada },
        };
    }
    async adminEliminar(id) {
        const existente = await this.prisma.categoria.findUnique({ where: { id } });
        if (!existente)
            return { status: 404, body: { error: 'Categoría no encontrada' } };
        const actualizada = await this.prisma.categoria.update({
            where: { id },
            data: { activo: false },
        });
        return {
            status: 200,
            body: { message: 'Categoría eliminada', categoria: actualizada },
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
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map