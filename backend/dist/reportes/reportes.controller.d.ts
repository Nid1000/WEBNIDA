import { ReportesService } from './reportes.service';
export declare class ReportesController {
    private readonly service;
    constructor(service: ReportesService);
    ventasDiarias(desde?: string, hasta?: string): Promise<{
        data: {
            fecha: string;
            total: number;
        }[];
    }>;
    ventasSemanales(desde?: string, hasta?: string): Promise<{
        data: {
            semana: string;
            total: number;
        }[];
    }>;
    ventasMensuales(desde?: string, hasta?: string): Promise<{
        data: {
            mes: string;
            total: number;
        }[];
    }>;
    topProductos(desde?: string, hasta?: string, limite?: string): Promise<{
        data: {
            producto_id: number;
            nombre: string;
            imagen?: string | null;
            cantidad: number;
            subtotal: number;
        }[];
    }>;
    topCategorias(desde?: string, hasta?: string, limite?: string): Promise<{
        data: {
            categoria_id: number;
            nombre: string;
            cantidad: number;
            subtotal: number;
        }[];
    }>;
}
