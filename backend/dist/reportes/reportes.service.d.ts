import { PrismaService } from '../prisma/prisma.service';
export declare class ReportesService {
    private prisma;
    constructor(prisma: PrismaService);
    private toFloat;
    ventasDiarias(params: {
        desde?: string;
        hasta?: string;
    }): Promise<{
        status: number;
        body: {
            data: {
                fecha: string;
                total: number;
            }[];
        };
    }>;
    ventasSemanales(params: {
        desde?: string;
        hasta?: string;
    }): Promise<{
        status: number;
        body: {
            data: {
                semana: string;
                total: number;
            }[];
        };
    }>;
    ventasMensuales(params: {
        desde?: string;
        hasta?: string;
    }): Promise<{
        status: number;
        body: {
            data: {
                mes: string;
                total: number;
            }[];
        };
    }>;
    topProductos(params: {
        desde?: string;
        hasta?: string;
        limite?: number;
    }): Promise<{
        status: number;
        body: {
            data: {
                producto_id: number;
                nombre: string;
                imagen?: string | null;
                cantidad: number;
                subtotal: number;
            }[];
        };
    }>;
    topCategorias(params: {
        desde?: string;
        hasta?: string;
        limite?: number;
    }): Promise<{
        status: number;
        body: {
            data: {
                categoria_id: number;
                nombre: string;
                cantidad: number;
                subtotal: number;
            }[];
        };
    }>;
}
