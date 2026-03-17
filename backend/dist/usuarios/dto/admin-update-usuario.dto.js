"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateUsuarioDto = void 0;
const openapi = require("@nestjs/swagger");
class AdminUpdateUsuarioDto {
    nombre;
    apellido;
    email;
    telefono;
    direccion;
    distrito;
    numero_casa;
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: false, type: () => String }, apellido: { required: false, type: () => String }, email: { required: false, type: () => String }, telefono: { required: false, type: () => String, nullable: true }, direccion: { required: false, type: () => String, nullable: true }, distrito: { required: false, type: () => String, nullable: true }, numero_casa: { required: false, type: () => String, nullable: true } };
    }
}
exports.AdminUpdateUsuarioDto = AdminUpdateUsuarioDto;
//# sourceMappingURL=admin-update-usuario.dto.js.map