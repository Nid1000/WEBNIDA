import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriasController {
    private service;
    constructor(service: CategoriasService);
    getCategorias(activo?: string): Promise<{
        id: number;
        nombre: string;
        activo: boolean;
        created_at: Date;
        updated_at: Date;
        descripcion: string | null;
        imagen: string | null;
    }[]>;
    getCategoria(id: number): Promise<{
        id: number;
        nombre: string;
        activo: boolean;
        created_at: Date;
        updated_at: Date;
        descripcion: string | null;
        imagen: string | null;
    }>;
    getProductosCategoria(id: number, pagina?: string, limite?: string): Promise<{
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
    adminList(limite?: string, pagina?: string, buscar?: string, activo?: string): Promise<{
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
        statusCode: number;
    }>;
    adminGet(id: number): Promise<{
        error: string;
        categoria?: undefined;
        statusCode: number;
    } | {
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
        statusCode: number;
    }>;
    private static getMulterOptions;
    adminCrear(body: CreateCategoriaDto): Promise<{
        error: string;
        message: string;
        categoria?: undefined;
        statusCode: number;
    } | {
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
        statusCode: number;
    }>;
    adminActualizar(id: number, body: UpdateCategoriaDto): Promise<{
        error: string;
        message?: undefined;
        categoria?: undefined;
        statusCode: number;
    } | {
        error: string;
        message: string;
        categoria?: undefined;
        statusCode: number;
    } | {
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
        statusCode: number;
    }>;
    adminActualizarImagen(id: number, file: Express.Multer.File): Promise<{
        error: string;
        message?: undefined;
        categoria?: undefined;
        statusCode: number;
    } | {
        error: string;
        message: string;
        categoria?: undefined;
        statusCode: number;
    } | {
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
        statusCode: number;
    }>;
    adminEstado(id: number, body: {
        activo: boolean;
    }): Promise<{
        error: string;
        message?: undefined;
        categoria?: undefined;
        statusCode: number;
    } | {
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
        statusCode: number;
    }>;
    adminEliminar(id: number): Promise<{
        error: string;
        message?: undefined;
        categoria?: undefined;
        statusCode: number;
    } | {
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
        statusCode: number;
    }>;
}
