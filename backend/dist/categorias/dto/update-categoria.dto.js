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
exports.UpdateCategoriaDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateCategoriaDto {
    nombre;
    descripcion;
    imagen;
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: false, type: () => String, minLength: 2, maxLength: 200 }, descripcion: { required: false, type: () => String, nullable: true, minLength: 0, maxLength: 2000 }, imagen: { required: false, type: () => String, nullable: true } };
    }
}
exports.UpdateCategoriaDto = UpdateCategoriaDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Galletas' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 200),
    __metadata("design:type", String)
], UpdateCategoriaDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Deliciosas galletas caseras' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 2000),
    __metadata("design:type", Object)
], UpdateCategoriaDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'categorias/categoria-12345.png',
        description: 'Ruta local en uploads o URL completa',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UpdateCategoriaDto.prototype, "imagen", void 0);
//# sourceMappingURL=update-categoria.dto.js.map