import { FacturacionService } from './facturacion.service';
import { EmitirDto } from './dto/emitir.dto';
export declare class FacturacionController {
    private service;
    constructor(service: FacturacionService);
    emitir(body: EmitirDto, req: any): Promise<{
        error: string;
        message: string;
        comprobante?: undefined;
        archivos?: undefined;
        statusCode: number;
    } | {
        message: string;
        comprobante: {
            id: number;
            tipo: string;
            serie: string;
            numero: number;
            numero_formateado: string;
            estado: string;
            pedido_id: number;
            total: number;
            created_at: Date;
        };
        archivos: {
            pdf: string;
            xml: string;
            img: string;
        };
        error?: undefined;
        statusCode: number;
    } | {
        message: string;
        comprobante: {
            id: number;
            tipo: "boleta" | "factura";
            serie: string;
            numero: number;
            numero_formateado: string;
            estado: string;
            pedido_id: number;
            total: number;
            cliente: {
                nombre: string;
                dni: string;
                razon_social?: undefined;
                ruc?: undefined;
            } | {
                razon_social: any;
                ruc: string;
                nombre?: undefined;
                dni?: undefined;
            };
            created_at: Date;
        };
        archivos: {
            pdf: string;
            xml: string;
            img: string;
        };
        error?: undefined;
        statusCode: number;
    }>;
    misComprobantes(req: any): Promise<{
        comprobantes: {
            id: number;
            tipo: string;
            serie: string;
            numero: string;
            numero_formateado: string;
            estado: string;
            total: number;
            created_at: Date;
            archivos: {
                pdf: string;
                xml: string;
                img: string;
            };
            cliente: {
                nombre: string;
            };
        }[];
        statusCode: number;
    }>;
    adminComprobantes(pagina?: string, limite?: string, tipo?: 'boleta' | 'factura', estado?: string): Promise<{
        comprobantes: {
            id: number;
            tipo: string;
            serie: string;
            numero: string;
            numero_formateado: string;
            estado: string;
            total: number;
            created_at: Date;
            archivos: {
                pdf: string;
                xml: string;
                img: string;
            };
            cliente: {
                nombre: string;
                razon_social: null;
                dni: null;
                ruc: null;
            };
        }[];
        total: number;
        pagina: number;
        totalPaginas: number;
        statusCode: number;
    }>;
    consultaDni(numero: string, req: any): Promise<{
        message: string;
        dni?: undefined;
        data?: undefined;
        statusCode: number;
    } | {
        dni: string;
        data: any;
        message?: undefined;
        statusCode: number;
    }>;
    consultaRuc(numero: string, req: any): Promise<{
        message: string;
        ruc?: undefined;
        data?: undefined;
        statusCode: number;
    } | {
        ruc: string;
        data: any;
        message?: undefined;
        statusCode: number;
    }>;
}
