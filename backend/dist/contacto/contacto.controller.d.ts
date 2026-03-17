import { ContactoService } from './contacto.service';
import { CreateContactoDto } from './dto/create-contacto.dto';
export declare class ContactoController {
    private readonly contactoService;
    constructor(contactoService: ContactoService);
    create(dto: CreateContactoDto): Promise<{
        ok: boolean;
        id: string;
        message: string;
    }>;
}
