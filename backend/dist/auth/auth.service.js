"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcryptjs"));
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    prisma;
    jwt;
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    generateToken(payload) {
        return this.jwt.sign(payload);
    }
    async registerUsuario(data) {
        const existing = await this.prisma.usuario.findUnique({
            where: { email: data.email },
        });
        if (existing) {
            return {
                status: 400,
                body: {
                    error: 'Email ya registrado',
                    message: 'Ya existe una cuenta con este email',
                },
            };
        }
        const hashed = await bcrypt.hash(data.password, 10);
        const nuevo = await this.prisma.usuario.create({
            data: {
                nombre: data.nombre,
                apellido: data.apellido,
                email: data.email,
                password: hashed,
                telefono: data.telefono || null,
                direccion: data.direccion || null,
                distrito: data.distrito || null,
                numero_casa: data.numero_casa || null,
            },
            select: { id: true, nombre: true, apellido: true, email: true, telefono: true, direccion: true, distrito: true, numero_casa: true },
        });
        const token = this.generateToken({
            id: nuevo.id,
            email: nuevo.email,
            tipo: 'usuario',
        });
        return {
            status: 201,
            body: { message: 'Usuario registrado exitosamente', user: nuevo, token },
        };
    }
    async loginUsuario(email, password, ip, userAgent) {
        const user = await this.prisma.usuario.findUnique({ where: { email } });
        if (!user) {
            await this.logLogin(null, null, 'usuario', ip, userAgent, false);
            return {
                status: 401,
                body: {
                    error: 'Credenciales inválidas',
                    message: 'Email o contraseña incorrectos',
                },
            };
        }
        if (!user.activo) {
            await this.logLogin(user.id, null, 'usuario', ip, userAgent, false);
            return {
                status: 401,
                body: {
                    error: 'Cuenta inactiva',
                    message: 'Tu cuenta ha sido desactivada',
                },
            };
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            await this.logLogin(user.id, null, 'usuario', ip, userAgent, false);
            return {
                status: 401,
                body: {
                    error: 'Credenciales inválidas',
                    message: 'Email o contraseña incorrectos',
                },
            };
        }
        await this.logLogin(user.id, null, 'usuario', ip, userAgent, true);
        const token = this.generateToken({
            id: user.id,
            email: user.email,
            tipo: 'usuario',
        });
        return {
            status: 200,
            body: {
                message: 'Login exitoso',
                user: {
                    id: user.id,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    email: user.email,
                    telefono: user.telefono,
                    direccion: user.direccion,
                    distrito: user.distrito,
                    numero_casa: user.numero_casa,
                },
                token,
            },
        };
    }
    async loginAdmin(email, password, ip, userAgent) {
        const admin = await this.prisma.administrador.findUnique({
            where: { email },
        });
        if (!admin) {
            await this.logLogin(null, null, 'admin', ip, userAgent, false);
            return {
                status: 401,
                body: {
                    error: 'Credenciales inválidas',
                    message: 'Email o contraseña incorrectos',
                },
            };
        }
        if (!admin.activo) {
            await this.logLogin(null, admin.id, 'admin', ip, userAgent, false);
            return {
                status: 401,
                body: {
                    error: 'Cuenta inactiva',
                    message: 'Tu cuenta de administrador ha sido desactivada',
                },
            };
        }
        const valid = await bcrypt.compare(password, admin.password);
        if (!valid) {
            await this.logLogin(null, admin.id, 'admin', ip, userAgent, false);
            return {
                status: 401,
                body: {
                    error: 'Credenciales inválidas',
                    message: 'Email o contraseña incorrectos',
                },
            };
        }
        await this.logLogin(null, admin.id, 'admin', ip, userAgent, true);
        const token = this.generateToken({
            id: admin.id,
            email: admin.email,
            tipo: 'admin',
        });
        return {
            status: 200,
            body: {
                message: 'Login de administrador exitoso',
                admin: {
                    id: admin.id,
                    nombre: admin.nombre,
                    email: admin.email,
                    rol: admin.rol,
                },
                token,
            },
        };
    }
    async logLogin(userId, adminId, tipo, ip, userAgent, exitoso = true) {
        try {
            await this.prisma.loginLog.create({
                data: {
                    usuario_id: userId ?? null,
                    admin_id: adminId ?? null,
                    tipo_usuario: tipo,
                    ip_address: ip ?? null,
                    user_agent: userAgent ?? null,
                    exitoso,
                },
            });
        }
        catch (e) {
        }
    }
    async verify(payload) {
        if (payload.tipo === 'admin') {
            const admin = await this.prisma.administrador.findUnique({
                where: { id: payload.id },
                select: {
                    id: true,
                    nombre: true,
                    email: true,
                    rol: true,
                    activo: true,
                },
            });
            if (!admin || !admin.activo) {
                return {
                    status: 401,
                    body: {
                        error: 'Token inválido',
                        message: 'Administrador no encontrado o inactivo',
                    },
                };
            }
            return {
                status: 200,
                body: {
                    message: 'Token válido',
                    tipo: 'admin',
                    admin: {
                        id: admin.id,
                        nombre: admin.nombre,
                        email: admin.email,
                        rol: admin.rol,
                    },
                },
            };
        }
        else {
            const user = await this.prisma.usuario.findUnique({
                where: { id: payload.id },
                select: {
                    id: true,
                    nombre: true,
                    apellido: true,
                    email: true,
                    telefono: true,
                    direccion: true,
                    distrito: true,
                    numero_casa: true,
                    activo: true,
                },
            });
            if (!user || !user.activo) {
                return {
                    status: 401,
                    body: {
                        error: 'Token inválido',
                        message: 'Usuario no encontrado o inactivo',
                    },
                };
            }
            return {
                status: 200,
                body: {
                    message: 'Token válido',
                    tipo: 'usuario',
                    user: {
                        id: user.id,
                        nombre: user.nombre,
                        apellido: user.apellido,
                        email: user.email,
                        telefono: user.telefono,
                        direccion: user.direccion,
                        distrito: user.distrito,
                        numero_casa: user.numero_casa,
                    },
                },
            };
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map