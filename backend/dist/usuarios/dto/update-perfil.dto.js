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
exports.UpdatePerfilDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdatePerfilDto {
    nombre;
    apellido;
    telefono;
    direccion;
    distrito;
    numero_casa;
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: false, type: () => String, minLength: 2 }, apellido: { required: false, type: () => String, minLength: 2 }, telefono: { required: false, type: () => String, pattern: "/^9\\d{8}$/" }, direccion: { required: false, type: () => String, minLength: 5 }, distrito: { required: false, type: () => String, minLength: 2 }, numero_casa: { required: false, type: () => String, minLength: 1 } };
    }
}
exports.UpdatePerfilDto = UpdatePerfilDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Luis' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
    __metadata("design:type", String)
], UpdatePerfilDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'García' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2, { message: 'El apellido debe tener al menos 2 caracteres' }),
    __metadata("design:type", String)
], UpdatePerfilDto.prototype, "apellido", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '987654321' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^9\d{8}$/, {
        message: 'El teléfono debe tener 9 dígitos y empezar con 9',
    }),
    __metadata("design:type", String)
], UpdatePerfilDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Av. Siempre Viva 742' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5, { message: 'La dirección debe tener al menos 5 caracteres' }),
    __metadata("design:type", String)
], UpdatePerfilDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'El Tambo' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2, { message: 'El distrito debe tener al menos 2 caracteres' }),
    __metadata("design:type", String)
], UpdatePerfilDto.prototype, "distrito", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '350' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1, { message: 'El número de casa es obligatorio' }),
    __metadata("design:type", String)
], UpdatePerfilDto.prototype, "numero_casa", void 0);
//# sourceMappingURL=update-perfil.dto.js.map