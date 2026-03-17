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
exports.RegisterUserDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class RegisterUserDto {
    nombre;
    apellido;
    email;
    password;
    telefono;
    direccion;
    distrito;
    numero_casa;
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: true, type: () => String, minLength: 2 }, apellido: { required: true, type: () => String, minLength: 2 }, email: { required: true, type: () => String, format: "email" }, password: { required: true, type: () => String, pattern: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{6,}$/" }, telefono: { required: false, type: () => String }, direccion: { required: false, type: () => String, minLength: 5 }, distrito: { required: false, type: () => String, minLength: 2 }, numero_casa: { required: false, type: () => String, minLength: 1 } };
    }
}
exports.RegisterUserDto = RegisterUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Juan' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pérez' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "apellido", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'juan.perez@example.com' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email inválido' }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Secreta123',
        description: 'Al menos una mayúscula, una minúscula y un número',
    }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/, {
        message: 'La contraseña debe contener al menos una mayúscula, una minúscula y un número',
    }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '600123456' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Calle Falsa 123, Ciudad' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Huancayo' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "distrito", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '350' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "numero_casa", void 0);
//# sourceMappingURL=register-user.dto.js.map