import { Injectable, Logger } from "@nestjs/common";
import { Categoria } from "./interfaces/categorias/categoria.interface";
import { Jogador } from "./interfaces/jogadores/jogador.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RpcException } from "@nestjs/microservices";

@Injectable()
export class AppService {
  constructor(
    @InjectModel("Categoria") private readonly categoriaModel: Model<Categoria>,
    @InjectModel("Jogador") private readonly jogadorModel: Model<Jogador>
  ) {}

  private readonly logger = new Logger(AppService.name);

  async criarCategoria(categoria: Categoria): Promise<Categoria> {
    try {
      this.logger.debug("criarCategoria called");
      const categoriaCriada = new this.categoriaModel(categoria);
      return await categoriaCriada.save();
    } catch (error) {
      this.logger.error(`Error: ${error.message}`);
      throw new RpcException(error.message);
    }
  }

  async consultarTodasCategorias(): Promise<Categoria[]> {
    try {
      this.logger.debug("consultarTodasCategorias called");
      return await this.categoriaModel.find().exec();
    } catch (error) {
      this.logger.error(`Error: ${error.message}`);
      throw new RpcException(error.message);
    }
  }

  async consultarCategoriaPeloId(_id: string): Promise<Categoria> {
    try {
      this.logger.debug(`consultarCategoriaPeloId called with id ${_id}`);
      const categoria = await this.categoriaModel.findOne({ _id }).exec();
      this.logger.debug(`categoria ${categoria}`);
      return categoria;
    } catch (error) {
      this.logger.error(`Error: ${error.message}`);
      throw new RpcException(error.message);
    }
  }
}
