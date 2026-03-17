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
exports.CreateProductoDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateProductoDto {
    nombre;
    descripcion;
    precio;
    categoria_id;
    stock;
    destacado;
    imagen_url;
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: true, type: () => String, minLength: 2, maxLength: 200 }, descripcion: { required: false, type: () => String, minLength: 0, maxLength: 2000 }, precio: { required: true, type: () => Number, minimum: 0 }, categoria_id: { required: true, type: () => Number, minimum: 1 }, stock: { required: false, type: () => Number, minimum: 0 }, destacado: { required: false, type: () => Boolean }, imagen_url: { required: false, type: () => String, format: "uri" } };
    }
}
exports.CreateProductoDto = CreateProductoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pan artesanal' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 200),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Pan horneado diariamente con masa madre' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 2000),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12.5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "categoria_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (typeof value === 'string') {
            return value.toLowerCase() === 'true';
        }
        return Boolean(value);
    }),
    __metadata("design:type", Boolean)
], CreateProductoDto.prototype, "destacado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://via.placeholder.com/300.png' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "imagen_url", void 0);
//# sourceMappingURL=create-producto.dto.js.map