import { Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Categoria } from './interfaces/categorias/categoria.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    logger: Logger;
    criarCategoria(categoria: Categoria): Promise<void>;
    consultarCategorias(_id: string): Promise<Categoria | Categoria[]>;
}
