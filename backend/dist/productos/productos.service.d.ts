import { PrismaService } from '../prisma/prisma.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosService {
    private prisma;
    constructor(prisma: PrismaService);
    listarProductos(params: {
        categoria?: string;
        destacado?: string;
        buscar?: string;
        limite?: string;
        pagina?: string;
    }): Promise<{
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
    obtenerProducto(id: number): Promise<{
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
    crearProducto(params: {
        file?: Express.Multer.File | null;
        body: CreateProductoDto;
    }): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            producto?: undefined;
        };
    } | {
        status: number;
        body: {
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
        };
    }>;
    actualizarProducto(id: number, params: {
        file?: Express.Multer.File | null;
        body: UpdateProductoDto;
    }): Promise<{
        status: number;
        body: {
            error: string;
            message: string;
            producto?: undefined;
        };
    } | {
        status: number;
        body: {
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
        };
    }>;
    eliminarProducto(id: number): Promise<{
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
    private safeUnlink;
}
