import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
export declare class PedidosService {
    private prisma;
    constructor(prisma: PrismaService);
    private toFloat;
    crearPedido(usuarioId: number, dto: CreatePedidoDto): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            pedido?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            pedido: {
                total: number;
                detalles: {
                    id: number;
                    producto_id: number | null;
                    cantidad: number;
                    precio_unitario: number;
                    subtotal: number;
                    producto_nombre: string | null;
                    producto_imagen: string | null;
                }[];
                id: number;
                created_at: Date;
                updated_at: Date;
                usuario_id: number | null;
                estado: import("generated/prisma").$Enums.PedidoEstado;
                fecha_entrega: Date | null;
                direccion_entrega: string | null;
                distrito_entrega: string | null;
                numero_casa_entrega: string | null;
                direccion_id: number | null;
                telefono_contacto: string | null;
                notas: string | null;
            };
            error?: undefined;
        };
    }>;
    misPedidos(usuarioId: number, params: {
        pagina?: number;
        limite?: number;
    }): Promise<{
        status: number;
        body: {
            pedidos: {
                id: number;
                total: number;
                estado: import("generated/prisma").$Enums.PedidoEstado;
                created_at: Date;
                fecha_pedido: Date;
                notas: string | undefined;
                total_productos: number;
            }[];
            total: number;
            totalPaginas: number;
            pagina: number;
            limite: number;
        };
    }>;
    obtenerPedido(usuarioId: number, pedidoId: number): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            pedido?: undefined;
            detalles?: undefined;
        };
    } | {
        status: number;
        body: {
            pedido: {
                id: number;
                total: number;
                estado: import("generated/prisma").$Enums.PedidoEstado;
                created_at: Date;
                notas: string | null;
                direccion_entrega: string | null;
                distrito_entrega: string | null;
                numero_casa_entrega: string | null;
                telefono_contacto: string | null;
                cliente_nombre: string | null;
                cliente_email: string | null;
                cliente_telefono: string | null;
                metodo_pago: string | null;
                comprobante_numero: string | null;
            };
            detalles: {
                producto_nombre: string | null;
                producto_imagen: string | null;
                cantidad: number;
                precio_unitario: number;
                subtotal: number;
            }[];
            error?: undefined;
            message?: undefined;
        };
    }>;
    cancelarPedido(usuarioId: number, pedidoId: number): Promise<{
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
    adminList(params: {
        pagina?: number;
        limite?: number;
        estado?: string;
        desde?: string;
        hasta?: string;
        buscar?: string;
    }): Promise<{
        status: number;
        body: {
            pedidos: {
                id: number;
                usuario: {
                    id: number;
                    nombre: string;
                    apellido: string;
                    email: string;
                } | null;
                total: number;
                estado: import("generated/prisma").$Enums.PedidoEstado;
                created_at: Date;
                fecha_entrega: Date | null;
                notas: string | null;
                direccion_entrega: any;
                telefono_contacto: any;
                total_productos: number;
            }[];
            pagination: {
                total: number;
                pagina: number;
                limite: number;
                totalPaginas: number;
            };
        };
    }>;
    adminGet(id: number): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            pedido?: undefined;
            detalles?: undefined;
        };
    } | {
        status: number;
        body: {
            pedido: {
                id: number;
                usuario: {
                    id: number;
                    nombre: string;
                    apellido: string;
                    email: string;
                    telefono: string | null;
                } | null;
                total: number;
                estado: import("generated/prisma").$Enums.PedidoEstado;
                created_at: Date;
                fecha_entrega: Date | null;
                notas: string | null;
                direccion_entrega: string | null;
                telefono_contacto: string | null;
            };
            detalles: {
                producto_nombre: string | null;
                producto_imagen: string | null;
                cantidad: number;
                precio_unitario: number;
                subtotal: number;
            }[];
            error?: undefined;
            message?: undefined;
        };
    }>;
    adminActualizarEstado(id: number, estado: 'pendiente' | 'listo' | 'entregado' | 'cancelado'): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            estado?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            estado: "pendiente" | "listo" | "entregado" | "cancelado";
            error?: undefined;
        };
    }>;
    adminActualizarFechaEntrega(id: number, fecha: string | null): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            fecha_entrega?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            fecha_entrega: Date | null;
            error?: undefined;
        };
    }>;
}
