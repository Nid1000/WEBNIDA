import { PrismaService } from '../prisma/prisma.service';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    private readonly distritosHuancayo;
    listarDistritosHuancayo(): Promise<{
        status: number;
        body: {
            distritos: {
                id: number;
                nombre: string;
            }[];
        };
    }>;
    obtenerPerfil(usuarioId: number): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            usuario?: undefined;
        };
    } | {
        status: number;
        body: {
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
        };
    }>;
    actualizarPerfil(usuarioId: number, data: Partial<{
        nombre: string;
        apellido: string;
        telefono?: string;
        direccion?: string;
        distrito?: string;
        numero_casa?: string;
    }>): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            usuario?: undefined;
        };
    } | {
        status: number;
        body: {
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
        };
    }>;
    cambiarPassword(usuarioId: number, passwordActual: string, passwordNueva: string): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
        };
    } | {
        status: number;
        body: {
            message: string;
            error?: undefined;
        };
    }>;
    estadisticas(usuarioId: number): Promise<{
        status: number;
        body: {
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
        };
    }>;
    adminList(params: {
        limite?: number;
        pagina?: number;
        buscar?: string;
        activo?: boolean | undefined;
    }): Promise<{
        status: number;
        body: {
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
        };
    }>;
    adminActualizar(id: number, body: {
        nombre?: string;
        apellido?: string;
        email?: string;
        telefono?: string | null;
        direccion?: string | null;
        distrito?: string | null;
        numero_casa?: string | null;
    }): Promise<{
        status: number;
        body: {
            error: string;
            message?: undefined;
            usuario?: undefined;
        };
    } | {
        status: number;
        body: {
            error: string;
            message: string;
            usuario?: undefined;
        };
    } | {
        status: number;
        body: {
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
        };
    }>;
    adminGet(id: number): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            usuario?: undefined;
        };
    } | {
        status: number;
        body: {
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
        };
    }>;
    adminActualizarEstado(id: number, activo: boolean): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            usuario?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            usuario: {
                id: number;
                activo: boolean;
            };
            error?: undefined;
        };
    }>;
}
