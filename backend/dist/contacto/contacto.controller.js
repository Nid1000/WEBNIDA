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
exports.ContactoController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const contacto_service_1 = require("./contacto.service");
const create_contacto_dto_1 = require("./dto/create-contacto.dto");
let ContactoController = class ContactoController {
    contactoService;
    constructor(contactoService) {
        this.contactoService = contactoService;
    }
    async create(dto) {
        const id = await this.contactoService.create(dto);
        return {
            ok: true,
            id,
            message: 'Mensaje recibido. ¡Gracias por contactarnos!',
        };
    }
};
exports.ContactoController = ContactoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiOperation)({ summary: 'Enviar mensaje de contacto' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Mensaje de contacto recibido' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contacto_dto_1.CreateContactoDto]),
    __metadata("design:returntype", Promise)
], ContactoController.prototype, "create", null);
exports.ContactoController = ContactoController = __decorate([
    (0, swagger_1.ApiTags)('contacto'),
    (0, common_1.Controller)('contacto'),
    __metadata("design:paramtypes", [contacto_service_1.ContactoService])
], ContactoController);
//# sourceMappingURL=contacto.controller.js.map