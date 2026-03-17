import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
export declare class PedidosController {
    private service;
    constructor(service: PedidosService);
    crear(body: CreatePedidoDto, req: any): Promise<{
        error: string;
        message: string;
        pedido?: undefined;
        statusCode: number;
    } | {
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
        statusCode: number;
    }>;
    misPedidos(pagina?: string, limite?: string, req?: any): Promise<{
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
        statusCode: number;
    }>;
    obtener(id: number, req: any): Promise<{
        error: string;
        message: string;
        pedido?: undefined;
        detalles?: undefined;
        statusCode: number;
    } | {
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
        statusCode: number;
    }>;
    cancelar(id: number, req: any): Promise<{
        error: string;
        message: string;
        statusCode: number;
    } | {
        message: string;
        error?: undefined;
        statusCode: number;
    }>;
    adminList(pagina?: string, limite?: string, estado?: string, desde?: string, hasta?: string, buscar?: string): Promise<{
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
        statusCode: number;
    }>;
    adminGet(id: number): Promise<{
        error: string;
        message: string;
        pedido?: undefined;
        detalles?: undefined;
        statusCode: number;
    } | {
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
        statusCode: number;
    }>;
    adminEstado(id: number, body: {
        estado: 'pendiente' | 'listo' | 'entregado' | 'cancelado';
    }): Promise<{
        error: string;
        message: string;
        estado?: undefined;
        statusCode: number;
    } | {
        message: string;
        estado: "pendiente" | "listo" | "entregado" | "cancelado";
        error?: undefined;
        statusCode: number;
    }>;
    adminFechaEntrega(id: number, body: {
        fecha_entrega: string | null;
    }): Promise<{
        error: string;
        message: string;
        fecha_entrega?: undefined;
        statusCode: number;
    } | {
        message: string;
        fecha_entrega: Date | null;
        error?: undefined;
        statusCode: number;
    }>;
}
