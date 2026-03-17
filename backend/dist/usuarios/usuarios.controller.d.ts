import { UsuariosService } from './usuarios.service';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { EstadoUsuarioDto } from './dto/estado-usuario.dto';
import { AdminUpdateUsuarioDto } from './dto/admin-update-usuario.dto';
export declare class UsuariosController {
    private usuariosService;
    constructor(usuariosService: UsuariosService);
    distritosHuancayo(): Promise<{
        distritos: {
            id: number;
            nombre: string;
        }[];
        statusCode: number;
    }>;
    perfil(req: any): Promise<{
        error: string;
        message: string;
        usuario?: undefined;
        statusCode: number;
    } | {
        usuario: {
            id: number;
            email: string;
            nombre: string;
            apellido: string;
            telefono: string | null;
            direccion: string | null;
            distrito: string | null;
            numero_casa: string | null;
            created_at: Date;
        };
        error?: undefined;
        message?: undefined;
        statusCode: number;
    }>;
    actualizarPerfil(req: any, body: UpdatePerfilDto): Promise<{
        error: string;
        message: string;
        usuario?: undefined;
        statusCode: number;
    } | {
        message: string;
        usuario: {
            id: number;
            email: string;
            nombre: string;
            apellido: string;
            telefono: string | null;
            direccion: string | null;
            distrito: string | null;
            numero_casa: string | null;
            created_at: Date;
        } | null;
        error?: undefined;
        statusCode: number;
    }>;
    cambiarPassword(req: any, body: ChangePasswordDto): Promise<{
        statusCode: number;
        error: string;
        message: string;
    } | {
        message: string;
        error?: undefined;
        statusCode: number;
    }>;
    estadisticas(req: any): Promise<{
        estadisticas: {
            total_pedidos: number;
            pedidos_por_estado: {
                estado: import("generated/prisma").$Enums.PedidoEstado;
                cantidad: number;
            }[];
            total_gastado: number;
            ultimo_pedido: {
                id: number;
                created_at: Date;
                updated_at: Date;
                usuario_id: number | null;
                total: import("generated/prisma/runtime/library").Decimal;
                estado: import("generated/prisma").$Enums.PedidoEstado;
                fecha_entrega: Date | null;
                direccion_entrega: string | null;
                distrito_entrega: string | null;
                numero_casa_entrega: string | null;
                direccion_id: number | null;
                telefono_contacto: string | null;
                notas: string | null;
            } | null;
        };
        statusCode: number;
    }>;
    adminList(limite?: string, pagina?: string, buscar?: string, activo?: string): Promise<{
        usuarios: {
            id: number;
            email: string;
            nombre: string;
            apellido: string;
            telefono: string | null;
            direccion: string | null;
            distrito: string | null;
            numero_casa: string | null;
            activo: boolean;
            created_at: Date;
        }[];
        pagination: {
            total: number;
            pagina: number;
            limite: number;
            totalPaginas: number;
        };
        statusCode: number;
    }>;
    adminGet(id: string): Promise<{
        error: string;
        message: string;
        usuario?: undefined;
        statusCode: number;
    } | {
        usuario: {
            estadisticas: {
                total_pedidos: number;
                total_gastado: number;
            };
            id: number;
            email: string;
            nombre: string;
            apellido: string;
            telefono: string | null;
            direccion: string | null;
            distrito: string | null;
            numero_casa: string | null;
            activo: boolean;
            created_at: Date;
        };
        error?: undefined;
        message?: undefined;
        statusCode: number;
    }>;
    adminEstado(id: string, body: EstadoUsuarioDto): Promise<{
        error: string;
        message: string;
        usuario?: undefined;
        statusCode: number;
    } | {
        message: string;
        usuario: {
            id: number;
            activo: boolean;
        };
        error?: undefined;
        statusCode: number;
    }>;
    adminActualizar(id: string, body: AdminUpdateUsuarioDto): Promise<{
        error: string;
        message?: undefined;
        usuario?: undefined;
        statusCode: number;
    } | {
        error: string;
        message: string;
        usuario?: undefined;
        statusCode: number;
    } | {
        message: string;
        usuario: {
            id: number;
            email: string;
            nombre: string;
            apellido: string;
            password: string;
            telefono: string | null;
            direccion: string | null;
            distrito: string | null;
            numero_casa: string | null;
            activo: boolean;
            created_at: Date;
            updated_at: Date;
        };
        error?: undefined;
        statusCode: number;
    }>;
}
