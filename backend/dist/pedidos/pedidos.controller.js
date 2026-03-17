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
exports.PedidosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const usuario_guard_1 = require("../auth/guards/usuario.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
const pedidos_service_1 = require("./pedidos.service");
const create_pedido_dto_1 = require("./dto/create-pedido.dto");
let PedidosController = class PedidosController {
    service;
    constructor(service) {
        this.service = service;
    }
    async crear(body, req) {
        const result = await this.service.crearPedido(req.user.id, body);
        return { statusCode: result.status, ...result.body };
    }
    async misPedidos(pagina, limite, req) {
        const p = pagina ? parseInt(pagina, 10) : undefined;
        const l = limite ? parseInt(limite, 10) : undefined;
        const result = await this.service.misPedidos(req.user.id, {
            pagina: p,
            limite: l,
        });
        return { statusCode: result.status, ...result.body };
    }
    async obtener(id, req) {
        const result = await this.service.obtenerPedido(req.user.id, id);
        return { statusCode: result.status, ...result.body };
    }
    async cancelar(id, req) {
        const result = await this.service.cancelarPedido(req.user.id, id);
        return { statusCode: result.status, ...result.body };
    }
    async adminList(pagina, limite, estado, desde, hasta, buscar) {
        const p = pagina ? parseInt(pagina, 10) : undefined;
        const l = limite ? parseInt(limite, 10) : undefined;
        const result = await this.service.adminList({
            pagina: p,
            limite: l,
            estado,
            desde,
            hasta,
            buscar,
        });
        return { statusCode: result.status, ...result.body };
    }
    async adminGet(id) {
        const result = await this.service.adminGet(id);
        return { statusCode: result.status, ...result.body };
    }
    async adminEstado(id, body) {
        const result = await this.service.adminActualizarEstado(id, body.estado);
        return { statusCode: result.status, ...result.body };
    }
    async adminFechaEntrega(id, body) {
        const result = await this.service.adminActualizarFechaEntrega(id, body.fecha_entrega);
        return { statusCode: result.status, ...result.body };
    }
};
exports.PedidosController = PedidosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), usuario_guard_1.UsuarioGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pedido_dto_1.CreatePedidoDto, Object]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)('mis-pedidos'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), usuario_guard_1.UsuarioGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('pagina')),
    __param(1, (0, common_1.Query)('limite')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "misPedidos", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), usuario_guard_1.UsuarioGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "obtener", null);
__decorate([
    (0, common_1.Put)(':id/cancelar'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), usuario_guard_1.UsuarioGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "cancelar", null);
__decorate([
    (0, common_1.Get)('admin/todos'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('pagina')),
    __param(1, (0, common_1.Query)('limite')),
    __param(2, (0, common_1.Query)('estado')),
    __param(3, (0, common_1.Query)('desde')),
    __param(4, (0, common_1.Query)('hasta')),
    __param(5, (0, common_1.Query)('buscar')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "adminList", null);
__decorate([
    (0, common_1.Get)('admin/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "adminGet", null);
__decorate([
    (0, common_1.Patch)('admin/:id/estado'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "adminEstado", null);
__decorate([
    (0, common_1.Put)('admin/:id/fecha-entrega'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "adminFechaEntrega", null);
exports.PedidosController = PedidosController = __decorate([
    (0, common_1.Controller)('pedidos'),
    (0, swagger_1.ApiTags)('Pedidos'),
    __metadata("design:paramtypes", [pedidos_service_1.PedidosService])
], PedidosController);
//# sourceMappingURL=pedidos.controller.js.map