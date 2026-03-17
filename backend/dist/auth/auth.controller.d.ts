import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterUserDto } from './dto/register-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: RegisterUserDto, req: any): Promise<{
        error: string;
        message: string;
        user?: undefined;
        token?: undefined;
        statusCode: number;
    } | {
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
        statusCode: number;
    }>;
    login(body: LoginDto, req: any): Promise<{
        error: string;
        message: string;
        user?: undefined;
        token?: undefined;
        statusCode: number;
    } | {
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
        statusCode: number;
    }>;
    adminLogin(body: LoginDto, req: any): Promise<{
        error: string;
        message: string;
        admin?: undefined;
        token?: undefined;
        statusCode: number;
    } | {
        message: string;
        admin: {
            id: number;
            nombre: string;
            email: string;
            rol: import("generated/prisma").$Enums.AdminRol;
        };
        token: string;
        error?: undefined;
        statusCode: number;
    }>;
    verify(req: any): Promise<{
        error: string;
        message: string;
        tipo?: undefined;
        admin?: undefined;
        user?: undefined;
        statusCode: number;
    } | {
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
        statusCode: number;
    } | {
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
        statusCode: number;
    }>;
}
