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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const categorias_service_1 = require("./categorias.service");
const passport_1 = require("@nestjs/passport");
const admin_guard_1 = require("../auth/guards/admin.guard");
const create_categoria_dto_1 = require("./dto/create-categoria.dto");
const update_categoria_dto_1 = require("./dto/update-categoria.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
let CategoriasController = class CategoriasController {
    service;
    constructor(service) {
        this.service = service;
    }
    async getCategorias(activo) {
        return this.service.findAll(activo);
    }
    async getCategoria(id) {
        return this.service.findById(id);
    }
    async getProductosCategoria(id, pagina = '1', limite = '20') {
        return this.service.findProductosByCategoria(id, parseInt(pagina, 10), parseInt(limite, 10));
    }
    async adminList(limite, pagina, buscar, activo) {
        const result = await this.service.adminList({
            limite: parseInt(limite || '20', 10),
            pagina: parseInt(pagina || '1', 10),
            buscar,
            activo: activo !== undefined ? activo === 'true' : undefined,
        });
        return { statusCode: result.status, ...result.body };
    }
    async adminGet(id) {
        const result = await this.service.adminGet(id);
        return { statusCode: result.status, ...result.body };
    }
    static getMulterOptions() {
        return {
            storage: (0, multer_1.diskStorage)({
                destination: (req, file, cb) => {
                    const uploadPath = path.join(process.cwd(), 'uploads', 'categorias');
                    if (!fs.existsSync(uploadPath)) {
                        fs.mkdirSync(uploadPath, { recursive: true });
                    }
                    cb(null, uploadPath);
                },
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = path.extname(file.originalname);
                    cb(null, 'categoria-' + uniqueSuffix + ext);
                },
            }),
            limits: { fileSize: parseInt(process.env.MAX_FILE_SIZE || '5242880') },
            fileFilter: (req, file, cb) => {
                const allowedTypes = /jpeg|jpg|png|gif|webp/;
                const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
                const mimetype = allowedTypes.test(file.mimetype);
                if (mimetype && extname)
                    return cb(null, true);
                cb(Object.assign(new Error('Solo se permiten imágenes (jpeg, jpg, png, gif, webp)'), { status: 400 }));
            },
        };
    }
    async adminCrear(body) {
        const result = await this.service.adminCrear(body);
        return { statusCode: result.status, ...result.body };
    }
    async adminActualizar(id, body) {
        const result = await this.service.adminActualizar(id, body);
        return { statusCode: result.status, ...result.body };
    }
    async adminActualizarImagen(id, file) {
        const result = await this.service.adminActualizarImagen(id, file);
        return { statusCode: result.status, ...result.body };
    }
    async adminEstado(id, body) {
        const result = await this.service.adminActualizarEstado(id, body.activo);
        return { statusCode: result.status, ...result.body };
    }
    async adminEliminar(id) {
        const result = await this.service.adminEliminar(id);
        return { statusCode: result.status, ...result.body };
    }
};
exports.CategoriasController = CategoriasController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('activo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "getCategorias", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "getCategoria", null);
__decorate([
    (0, common_1.Get)(':id/productos'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('pagina')),
    __param(2, (0, common_1.Query)('limite')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "getProductosCategoria", null);
__decorate([
    (0, common_1.Get)('admin/todos'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('limite')),
    __param(1, (0, common_1.Query)('pagina')),
    __param(2, (0, common_1.Query)('buscar')),
    __param(3, (0, common_1.Query)('activo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "adminList", null);
__decorate([
    (0, common_1.Get)('admin/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "adminGet", null);
__decorate([
    (0, common_1.Post)('admin'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_categoria_dto_1.CreateCategoriaDto]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "adminCrear", null);
__decorate([
    (0, common_1.Put)('admin/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_categoria_dto_1.UpdateCategoriaDto]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "adminActualizar", null);
__decorate([
    (0, common_1.Put)('admin/:id/imagen'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagen', CategoriasController.getMulterOptions())),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "adminActualizarImagen", null);
__decorate([
    (0, common_1.Patch)('admin/:id/estado'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "adminEstado", null);
__decorate([
    (0, common_1.Delete)('admin/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "adminEliminar", null);
exports.CategoriasController = CategoriasController = __decorate([
    (0, common_1.Controller)('categorias'),
    (0, swagger_1.ApiTags)('Categorias'),
    __metadata("design:paramtypes", [categorias_service_1.CategoriasService])
], CategoriasController);
//# sourceMappingURL=categorias.controller.js.map