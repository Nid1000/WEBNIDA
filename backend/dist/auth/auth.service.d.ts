import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export type UserTokenPayload = {
    id: number;
    email: string;
    tipo: 'usuario' | 'admin';
};
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    private generateToken;
    registerUsuario(data: {
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        telefono?: string | null;
        direccion?: string | null;
        distrito?: string | null;
        numero_casa?: string | null;
        ip?: string;
        userAgent?: string;
    }): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            user?: undefined;
            token?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            user: {
                id: number;
                email: string;
                nombre: string;
                apellido: string;
                telefono: string | null;
                direccion: string | null;
                distrito: string | null;
                numero_casa: string | null;
            };
            token: string;
            error?: undefined;
        };
    }>;
    loginUsuario(email: string, password: string, ip?: string, userAgent?: string): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            user?: undefined;
            token?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            user: {
                id: number;
                nombre: string;
                apellido: string;
                email: string;
                telefono: string | null;
                direccion: string | null;
                distrito: string | null;
                numero_casa: string | null;
            };
            token: string;
            error?: undefined;
        };
    }>;
    loginAdmin(email: string, password: string, ip?: string, userAgent?: string): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            admin?: undefined;
            token?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            admin: {
                id: number;
                nombre: string;
                email: string;
                rol: import("generated/prisma").$Enums.AdminRol;
            };
            token: string;
            error?: undefined;
        };
    }>;
    logLogin(userId: number | null, adminId: number | null, tipo: 'usuario' | 'admin', ip?: string, userAgent?: string, exitoso?: boolean): Promise<void>;
    verify(payload: {
        id: number;
        email: string;
        tipo: 'usuario' | 'admin';
    }): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            tipo?: undefined;
            admin?: undefined;
            user?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            tipo: string;
            admin: {
                id: number;
                nombre: string;
                email: string;
                rol: import("generated/prisma").$Enums.AdminRol;
            };
            error?: undefined;
            user?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            tipo: string;
            user: {
                id: number;
                nombre: string;
                apellido: string;
                email: string;
                telefono: string | null;
                direccion: string | null;
                distrito: string | null;
                numero_casa: string | null;
            };
            error?: undefined;
            admin?: undefined;
        };
    }>;
}
