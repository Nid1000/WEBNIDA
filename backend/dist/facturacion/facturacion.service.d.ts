import { PrismaService } from '../prisma/prisma.service';
export declare class FacturacionService {
    private prisma;
    constructor(prisma: PrismaService);
    private readonly decolectaBaseUrl;
    private ensureFolder;
    private toFloat;
    private fetchReniecDni;
    private fetchSunatRuc;
    private nextNumeroComprobante;
    consultaReniecDni(numero: string, decolectaToken?: string): Promise<{
        status: number;
        body: {
            message: string;
            dni?: undefined;
            data?: undefined;
        };
    } | {
        status: number;
        body: {
            dni: string;
            data: any;
            message?: undefined;
        };
    }>;
    consultaSunatRuc(numero: string, decolectaToken?: string): Promise<{
        status: number;
        body: {
            message: string;
            ruc?: undefined;
            data?: undefined;
        };
    } | {
        status: number;
        body: {
            ruc: string;
            data: any;
            message?: undefined;
        };
    }>;
    emitir(usuarioId: number, params: {
        pedido_id: number;
        comprobante_tipo: 'boleta' | 'factura';
        tipo_documento: 'DNI' | 'RUC';
        numero_documento: string;
    }, decolectaToken?: string): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            comprobante?: undefined;
            archivos?: undefined;
        };
    } | {
        status: number;
        body: {
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
        };
    } | {
        status: number;
        body: {
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
        };
    }>;
    misComprobantes(usuarioId: number): Promise<{
        status: number;
        body: {
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
        };
    }>;
    adminComprobantes(params: {
        pagina?: number;
        limite?: number;
        tipo?: 'boleta' | 'factura';
        estado?: string;
    }): Promise<{
        status: number;
        body: {
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
        };
    }>;
}
