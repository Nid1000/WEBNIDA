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
exports.CreateContactoDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateContactoDto {
    nombre;
    email;
    telefono;
    mensaje;
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: true, type: () => String, minLength: 2, maxLength: 80 }, email: { required: true, type: () => String, format: "email" }, telefono: { required: false, type: () => String, minLength: 6, maxLength: 20 }, mensaje: { required: true, type: () => String, minLength: 5, maxLength: 1000 } };
    }
}
exports.CreateContactoDto = CreateContactoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Juan Pérez' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 80),
    __metadata("design:type", String)
], CreateContactoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'juan@example.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateContactoDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '993560096', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 20),
    __metadata("design:type", String)
], CreateContactoDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Quiero cotizar una torta personalizada' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 1000),
    __metadata("design:type", String)
], CreateContactoDto.prototype, "mensaje", void 0);
//# sourceMappingURL=create-contacto.dto.js.map