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
exports.EmitirDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class EmitirDto {
    pedido_id;
    comprobante_tipo;
    tipo_documento;
    numero_documento;
    static _OPENAPI_METADATA_FACTORY() {
        return { pedido_id: { required: true, type: () => Number }, comprobante_tipo: { required: true, type: () => Object }, tipo_documento: { required: true, type: () => Object }, numero_documento: { required: true, type: () => String } };
    }
}
exports.EmitirDto = EmitirDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], EmitirDto.prototype, "pedido_id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['boleta', 'factura']),
    __metadata("design:type", String)
], EmitirDto.prototype, "comprobante_tipo", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['DNI', 'RUC']),
    __metadata("design:type", String)
], EmitirDto.prototype, "tipo_documento", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmitirDto.prototype, "numero_documento", void 0);
//# sourceMappingURL=emitir.dto.js.map