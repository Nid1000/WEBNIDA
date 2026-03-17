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
exports.ReportesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const reportes_service_1 = require("./reportes.service");
const admin_guard_1 = require("../auth/guards/admin.guard");
let ReportesController = class ReportesController {
    service;
    constructor(service) {
        this.service = service;
    }
    async ventasDiarias(desde, hasta) {
        const result = await this.service.ventasDiarias({ desde, hasta });
        return result.body;
    }
    async ventasSemanales(desde, hasta) {
        const result = await this.service.ventasSemanales({ desde, hasta });
        return result.body;
    }
    async ventasMensuales(desde, hasta) {
        const result = await this.service.ventasMensuales({ desde, hasta });
        return result.body;
    }
    async topProductos(desde, hasta, limite) {
        const result = await this.service.topProductos({
            desde,
            hasta,
            limite: limite ? parseInt(limite, 10) : undefined,
        });
        return result.body;
    }
    async topCategorias(desde, hasta, limite) {
        const result = await this.service.topCategorias({
            desde,
            hasta,
            limite: limite ? parseInt(limite, 10) : undefined,
        });
        return result.body;
    }
};
exports.ReportesController = ReportesController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, common_1.Get)('admin/ventas-diarias'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('desde')),
    __param(1, (0, common_1.Query)('hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "ventasDiarias", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, common_1.Get)('admin/ventas-semanales'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('desde')),
    __param(1, (0, common_1.Query)('hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "ventasSemanales", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, common_1.Get)('admin/ventas-mensuales'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('desde')),
    __param(1, (0, common_1.Query)('hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "ventasMensuales", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, common_1.Get)('admin/top-productos'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('desde')),
    __param(1, (0, common_1.Query)('hasta')),
    __param(2, (0, common_1.Query)('limite')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "topProductos", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, common_1.Get)('admin/top-categorias'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('desde')),
    __param(1, (0, common_1.Query)('hasta')),
    __param(2, (0, common_1.Query)('limite')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "topCategorias", null);
exports.ReportesController = ReportesController = __decorate([
    (0, common_1.Controller)('reportes'),
    __metadata("design:paramtypes", [reportes_service_1.ReportesService])
], ReportesController);
//# sourceMappingURL=reportes.controller.js.map