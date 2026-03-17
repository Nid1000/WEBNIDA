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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturacionController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const usuario_guard_1 = require("../auth/guards/usuario.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
const facturacion_service_1 = require("./facturacion.service");
const emitir_dto_1 = require("./dto/emitir.dto");
let FacturacionController = class FacturacionController {
    service;
    constructor(service) {
        this.service = service;
    }
    async emitir(body, req) {
        const decolectaToken = req.headers['x-decolecta-token'] ||
            process.env.DECOLECTA_TOKEN ||
            undefined;
        const result = await this.service.emitir(req.user.id, body, decolectaToken);
        return { statusCode: result.status, ...result.body };
    }
    async misComprobantes(req) {
        const result = await this.service.misComprobantes(req.user.id);
        return { statusCode: result.status, ...result.body };
    }
    async adminComprobantes(pagina, limite, tipo, estado) {
        const p = pagina ? parseInt(pagina, 10) : undefined;
        const l = limite ? parseInt(limite, 10) : undefined;
        const result = await this.service.adminComprobantes({
            pagina: p,
            limite: l,
            tipo,
            estado,
        });
        return { statusCode: result.status, ...result.body };
    }
    async consultaDni(numero, req) {
        const decolectaToken = req.headers['x-decolecta-token'] ||
            process.env.DECOLECTA_TOKEN ||
            undefined;
        const result = await this.service.consultaReniecDni(numero, decolectaToken);
        return { statusCode: result.status, ...result.body };
    }
    async consultaRuc(numero, req) {
        const decolectaToken = req.headers['x-decolecta-token'] ||
            process.env.DECOLECTA_TOKEN ||
            undefined;
        const result = await this.service.consultaSunatRuc(numero, decolectaToken);
        return { statusCode: result.status, ...result.body };
    }
};
exports.FacturacionController = FacturacionController;
__decorate([
    (0, common_1.Post)('emitir'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), usuario_guard_1.UsuarioGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [emitir_dto_1.EmitirDto, Object]),
    __metadata("design:returntype", Promise)
], FacturacionController.prototype, "emitir", null);
__decorate([
    (0, common_1.Get)('mis-comprobantes'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), usuario_guard_1.UsuarioGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FacturacionController.prototype, "misComprobantes", null);
__decorate([
    (0, common_1.Get)('admin/comprobantes'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('pagina')),
    __param(1, (0, common_1.Query)('limite')),
    __param(2, (0, common_1.Query)('tipo')),
    __param(3, (0, common_1.Query)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], FacturacionController.prototype, "adminComprobantes", null);
__decorate([
    (0, common_1.Get)('consulta-dni'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), usuario_guard_1.UsuarioGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)('numero')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FacturacionController.prototype, "consultaDni", null);
__decorate([
    (0, common_1.Get)('consulta-ruc'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), usuario_guard_1.UsuarioGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)('numero')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FacturacionController.prototype, "consultaRuc", null);
exports.FacturacionController = FacturacionController = __decorate([
    (0, common_1.Controller)('facturacion'),
    (0, swagger_1.ApiTags)('Facturación'),
    __metadata("design:paramtypes", [facturacion_service_1.FacturacionService])
], FacturacionController);
//# sourceMappingURL=facturacion.controller.js.map