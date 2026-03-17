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
exports.CreatePedidoDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ProductoItemDto {
    id;
    cantidad;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, cantidad: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ProductoItemDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ProductoItemDto.prototype, "cantidad", void 0);
class CreatePedidoDto {
    productos;
    fecha_entrega;
    direccion_entrega;
    distrito_entrega;
    numero_casa_entrega;
    direccion_id;
    telefono_contacto;
    notas;
    pago;
    static _OPENAPI_METADATA_FACTORY() {
        return { productos: { required: true, type: () => [ProductoItemDto] }, fecha_entrega: { required: false, type: () => String }, direccion_entrega: { required: false, type: () => String }, distrito_entrega: { required: false, type: () => String }, numero_casa_entrega: { required: false, type: () => String }, direccion_id: { required: false, type: () => Number }, telefono_contacto: { required: false, type: () => String }, notas: { required: false, type: () => String }, pago: { required: false, type: () => ({ metodo: { required: false, type: () => Object }, tarjeta: { required: false, type: () => ({ numero: { required: true, type: () => String }, nombre: { required: true, type: () => String }, exp: { required: true, type: () => String }, cvv: { required: true, type: () => String } }) } }) } };
    }
}
exports.CreatePedidoDto = CreatePedidoDto;
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Los productos deben llegar en un arreglo' }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ProductoItemDto),
    __metadata("design:type", Array)
], CreatePedidoDto.prototype, "productos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: 'La fecha de entrega debe tener formato ISO (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "fecha_entrega", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'La dirección debe ser un texto' }),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "direccion_entrega", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El distrito debe ser un texto' }),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "distrito_entrega", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El número de casa debe ser un texto' }),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "numero_casa_entrega", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreatePedidoDto.prototype, "direccion_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El teléfono de contacto debe ser un texto' }),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "telefono_contacto", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Las notas deben ser un texto' }),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "notas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePedidoDto.prototype, "pago", void 0);
//# sourceMappingURL=create-pedido.dto.js.map