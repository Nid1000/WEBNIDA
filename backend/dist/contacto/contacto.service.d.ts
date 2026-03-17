import { CreateContactoDto } from './dto/create-contacto.dto';
export declare class ContactoService {
    private readonly logger;
    create(dto: CreateContactoDto): Promise<string>;
}
