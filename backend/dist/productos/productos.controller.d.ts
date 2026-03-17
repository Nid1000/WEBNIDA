import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosController {
    private service;
    constructor(service: ProductosService);
    getProductos(categoria?: string, destacado?: string, buscar?: string, limite?: string, pagina?: string): Promise<{
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
    getProducto(id: number): Promise<{
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
    }>;
    private static getMulterOptions;
    crearProducto(file: Express.Multer.File, body: CreateProductoDto): Promise<{
        error: string;
        message: string;
        producto?: undefined;
        statusCode: number;
    } | {
        message: string;
        producto: {
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
        };
        error?: undefined;
        statusCode: number;
    }>;
    actualizarProducto(id: number, file: Express.Multer.File, body: UpdateProductoDto): Promise<{
        error: string;
        message: string;
        producto?: undefined;
        statusCode: number;
    } | {
        message: string;
        producto: {
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
        };
        error?: undefined;
        statusCode: number;
    }>;
    eliminarProducto(id: number): Promise<{
        error: string;
        message: string;
        statusCode: number;
    } | {
        message: string;
        error?: undefined;
        statusCode: number;
    }>;
}
