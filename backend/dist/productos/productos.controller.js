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
exports.ProductosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const productos_service_1 = require("./productos.service");
const passport_1 = require("@nestjs/passport");
const admin_guard_1 = require("../auth/guards/admin.guard");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const create_producto_dto_1 = require("./dto/create-producto.dto");
const update_producto_dto_1 = require("./dto/update-producto.dto");
let ProductosController = class ProductosController {
    service;
    constructor(service) {
        this.service = service;
    }
    async getProductos(categoria, destacado, buscar, limite, pagina) {
        return this.service.listarProductos({
            categoria,
            destacado,
            buscar,
            limite,
            pagina,
        });
    }
    async getProducto(id) {
        return this.service.obtenerProducto(id);
    }
    static getMulterOptions() {
        return {
            storage: (0, multer_1.diskStorage)({
                destination: (req, file, cb) => {
                    const uploadPath = path.join(process.cwd(), 'uploads', 'productos');
                    if (!fs.existsSync(uploadPath)) {
                        fs.mkdirSync(uploadPath, { recursive: true });
                    }
                    cb(null, uploadPath);
                },
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = path.extname(file.originalname);
                    cb(null, 'producto-' + uniqueSuffix + ext);
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
    async crearProducto(file, body) {
        const result = await this.service.crearProducto({ file, body });
        return { statusCode: result.status, ...result.body };
    }
    async actualizarProducto(id, file, body) {
        const result = await this.service.actualizarProducto(id, { file, body });
        return { statusCode: result.status, ...result.body };
    }
    async eliminarProducto(id) {
        const result = await this.service.eliminarProducto(id);
        return { statusCode: result.status, ...result.body };
    }
};
exports.ProductosController = ProductosController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('categoria')),
    __param(1, (0, common_1.Query)('destacado')),
    __param(2, (0, common_1.Query)('buscar')),
    __param(3, (0, common_1.Query)('limite')),
    __param(4, (0, common_1.Query)('pagina')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "getProductos", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "getProducto", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagen', ProductosController.getMulterOptions())),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_producto_dto_1.CreateProductoDto]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "crearProducto", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagen', ProductosController.getMulterOptions())),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, update_producto_dto_1.UpdateProductoDto]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "actualizarProducto", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "eliminarProducto", null);
exports.ProductosController = ProductosController = __decorate([
    (0, common_1.Controller)('productos'),
    (0, swagger_1.ApiTags)('Productos'),
    __metadata("design:paramtypes", [productos_service_1.ProductosService])
], ProductosController);
//# sourceMappingURL=productos.controller.js.map