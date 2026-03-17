declare class ProductoItemDto {
    id: number;
    cantidad: number;
}
export declare class CreatePedidoDto {
    productos: ProductoItemDto[];
    fecha_entrega?: string;
    direccion_entrega?: string;
    distrito_entrega?: string;
    numero_casa_entrega?: string;
    direccion_id?: number;
    telefono_contacto?: string;
    notas?: string;
    pago?: {
        metodo?: 'card' | 'cash';
        tarjeta?: {
            numero: string;
            nombre: string;
            exp: string;
            cvv: string;
        };
    };
}
export {};
