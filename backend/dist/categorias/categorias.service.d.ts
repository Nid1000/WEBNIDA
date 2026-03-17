import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriasService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(activo: string | undefined): Promise<{
        id: number;
        nombre: string;
        activo: boolean;
        created_at: Date;
        updated_at: Date;
        descripcion: string | null;
        imagen: string | null;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        nombre: string;
        activo: boolean;
        created_at: Date;
        updated_at: Date;
        descripcion: string | null;
        imagen: string | null;
    }>;
    findProductosByCategoria(id: number, pagina?: number, limite?: number): Promise<{
        categoria: {
            id: number;
            nombre: string;
            activo: boolean;
            created_at: Date;
            updated_at: Date;
            descripcion: string | null;
            imagen: string | null;
        };
        productos: {
            precio: number;
            categoria_nombre: string | null;
            categoria: {
                nombre: string;
            } | null;
            id: number;
            nombre: string;
            activo: boolean;
            created_at: Date;
            updated_at: Date;
            descripcion: string | null;
            imagen: string | null;
            categoria_id: number | null;
            stock: number;
            destacado: boolean;
        }[];
        pagination: {
            total: number;
            pagina: number;
            limite: number;
            totalPaginas: number;
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
            categorias: {
                id: number;
                nombre: string;
                activo: boolean;
                created_at: Date;
                updated_at: Date;
                descripcion: string | null;
                imagen: string | null;
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
            categoria?: undefined;
        };
    } | {
        status: number;
        body: {
            categoria: {
                id: number;
                nombre: string;
                activo: boolean;
                created_at: Date;
                updated_at: Date;
                descripcion: string | null;
                imagen: string | null;
            };
            error?: undefined;
        };
    }>;
    adminCrear(body: CreateCategoriaDto): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            categoria?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            categoria: {
                id: number;
                nombre: string;
                activo: boolean;
                created_at: Date;
                updated_at: Date;
                descripcion: string | null;
                imagen: string | null;
            };
            error?: undefined;
        };
    }>;
    adminActualizar(id: number, body: UpdateCategoriaDto): Promise<{
        status: number;
        body: {
            error: string;
            message?: undefined;
            categoria?: undefined;
        };
    } | {
        status: number;
        body: {
            error: string;
            message: string;
            categoria?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            categoria: {
                id: number;
                nombre: string;
                activo: boolean;
                created_at: Date;
                updated_at: Date;
                descripcion: string | null;
                imagen: string | null;
            };
            error?: undefined;
        };
    }>;
    adminActualizarImagen(id: number, file: Express.Multer.File): Promise<{
        status: number;
        body: {
            error: string;
            message?: undefined;
            categoria?: undefined;
        };
    } | {
        status: number;
        body: {
            error: string;
            message: string;
            categoria?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            categoria: {
                id: number;
                nombre: string;
                activo: boolean;
                created_at: Date;
                updated_at: Date;
                descripcion: string | null;
                imagen: string | null;
            };
            error?: undefined;
        };
    }>;
    adminActualizarEstado(id: number, activo: boolean): Promise<{
        status: number;
        body: {
            error: string;
            message?: undefined;
            categoria?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            categoria: {
                id: number;
                nombre: string;
                activo: boolean;
                created_at: Date;
                updated_at: Date;
                descripcion: string | null;
                imagen: string | null;
            };
            error?: undefined;
        };
    }>;
    adminEliminar(id: number): Promise<{
        status: number;
        body: {
            error: string;
            message?: undefined;
            categoria?: undefined;
        };
    } | {
        status: number;
        body: {
            message: string;
            categoria: {
                id: number;
                nombre: string;
                activo: boolean;
                created_at: Date;
                updated_at: Date;
                descripcion: string | null;
                imagen: string | null;
            };
            error?: undefined;
        };
    }>;
    private safeUnlink;
}
