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
exports.ChangePasswordDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class ChangePasswordDto {
    passwordActual;
    passwordNueva;
    confirmarPassword;
    static _OPENAPI_METADATA_FACTORY() {
        return { passwordActual: { required: true, type: () => String }, passwordNueva: { required: true, type: () => String, minLength: 6 }, confirmarPassword: { required: true, type: () => String } };
    }
}
exports.ChangePasswordDto = ChangePasswordDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Secreta123' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Contraseña actual requerida' }),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "passwordActual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NuevaSecreta123' }),
    (0, class_validator_1.MinLength)(6, {
        message: 'La nueva contraseña debe tener al menos 6 caracteres',
    }),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "passwordNueva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NuevaSecreta123' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Confirmar contraseña es requerido' }),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "confirmarPassword", void 0);
//# sourceMappingURL=change-password.dto.js.map