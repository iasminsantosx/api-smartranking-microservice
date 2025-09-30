import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ConfigModule } from "@nestjs/config";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CategoriaSchema } from "./interfaces/categorias/categoria.schema";
import { JogadorSchema } from "./interfaces/jogadores/jogador.schema";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      "mongodb+srv://iasminsantoslucena:Tony210700@meu-primeiro-cluster.tryp4db.mongodb.net/adminbackend?retryWrites=true&w=majority&appName=Meu-primeiro-Cluster"
    ),
    MongooseModule.forFeature([
      { name: "Categoria", schema: CategoriaSchema },
      { name: "Jogador", schema: JogadorSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
