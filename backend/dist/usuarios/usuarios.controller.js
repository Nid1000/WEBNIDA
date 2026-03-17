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
exports.UsuariosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const usuarios_service_1 = require("./usuarios.service");
const passport_1 = require("@nestjs/passport");
const usuario_guard_1 = require("../auth/guards/usuario.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
const update_perfil_dto_1 = require("./dto/update-perfil.dto");
const change_password_dto_1 = require("./dto/change-password.dto");
const estado_usuario_dto_1 = require("./dto/estado-usuario.dto");
const admin_update_usuario_dto_1 = require("./dto/admin-update-usuario.dto");
let UsuariosController = class UsuariosController {
    usuariosService;
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    async distritosHuancayo() {
        const result = await this.usuariosService.listarDistritosHuancayo();
        return { statusCode: result.status, ...result.body };
    }
    async perfil(req) {
        const result = await this.usuariosService.obtenerPerfil(req.user.id);
        return { statusCode: result.status, ...result.body };
    }
    async actualizarPerfil(req, body) {
        const result = await this.usuariosService.actualizarPerfil(req.user.id, body);
        return { statusCode: result.status, ...result.body };
    }
    async cambiarPassword(req, body) {
        if (body.confirmarPassword !== body.passwordNueva) {
            return {
                statusCode: 400,
                error: 'Datos inválidos',
                message: 'Las contraseñas no coinciden',
            };
        }
        const result = await this.usuariosService.cambiarPassword(req.user.id, body.passwordActual, body.passwordNueva);
        return { statusCode: result.status, ...result.body };
    }
    async estadisticas(req) {
        const result = await this.usuariosService.estadisticas(req.user.id);
        return { statusCode: result.status, ...result.body };
    }
    async adminList(limite, pagina, buscar, activo) {
        const result = await this.usuariosService.adminList({
            limite: parseInt(limite || '20'),
            pagina: parseInt(pagina || '1'),
            buscar,
            activo: activo !== undefined ? activo === 'true' : undefined,
        });
        return { statusCode: result.status, ...result.body };
    }
    async adminGet(id) {
        const result = await this.usuariosService.adminGet(parseInt(id));
        return { statusCode: result.status, ...result.body };
    }
    async adminEstado(id, body) {
        const result = await this.usuariosService.adminActualizarEstado(parseInt(id), body.activo);
        return { statusCode: result.status, ...result.body };
    }
    async adminActualizar(id, body) {
        const result = await this.usuariosService.adminActualizar(parseInt(id), body);
        return { statusCode: result.status, ...result.body };
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Get)('distritos-huancayo'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "distritosHuancayo", null);
__decorate([
    (0, common_1.Get)('perfil'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), usuario_guard_1.UsuarioGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "perfil", null);
__decorate([
    (0, common_1.Put)('perfil'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), usuario_guard_1.UsuarioGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_perfil_dto_1.UpdatePerfilDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "actualizarPerfil", null);
__decorate([
    (0, common_1.Put)('cambiar-password'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), usuario_guard_1.UsuarioGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "cambiarPassword", null);
__decorate([
    (0, common_1.Get)('estadisticas'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), usuario_guard_1.UsuarioGuard),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "estadisticas", null);
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
], UsuariosController.prototype, "adminList", null);
__decorate([
    (0, common_1.Get)('admin/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "adminGet", null);
__decorate([
    (0, common_1.Patch)('admin/:id/estado'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, estado_usuario_dto_1.EstadoUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "adminEstado", null);
__decorate([
    (0, common_1.Put)('admin/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), admin_guard_1.AdminGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, admin_update_usuario_dto_1.AdminUpdateUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "adminActualizar", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, common_1.Controller)('usuarios'),
    (0, swagger_1.ApiTags)('Usuarios'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map