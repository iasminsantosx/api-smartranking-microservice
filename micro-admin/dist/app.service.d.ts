import { Categoria } from './interfaces/categorias/categoria.interface';
import { Jogador } from './interfaces/jogadores/jogardor.interface';
import { Model } from 'mongoose';
export declare class AppService {
    private readonly categoriaModel;
    private readonly jogadorModel;
    constructor(categoriaModel: Model<Categoria>, jogadorModel: Model<Jogador>);
    private readonly logger;
    criarCategoria(categoria: Categoria): Promise<Categoria>;
    consultarTodasCategorias(): Promise<Categoria[]>;
    consultarCategoriaPeloId(_id: string): Promise<Categoria>;
}
