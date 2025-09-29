import {
  Controller,
  Logger,
  UsePipes,
  ValidationPipe,
  Post,
  Body,
  Query,
  Get,
} from '@nestjs/common';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('api')
export class AppController {
  private readonly logger = new Logger(AppController.name);
  private clientAdminBackend: ClientProxy;

  constructor() {
    this.clientAdminBackend = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://smartranking:smartrank123@localhost:5672'],
        queue: 'admin-backend',
      },
    });
  }

  @Post('categorias')
  @UsePipes(ValidationPipe)
  criarCategoria(@Body() dto: CriarCategoriaDto) {
    this.logger.debug('criarCategoria called');
    this.clientAdminBackend.emit('criar-categoria', dto);
  }

  @Get('categorias')
  consultarCategoria(@Query('idCategoria') _id: string): Observable<any> {
    return this.clientAdminBackend.send('consultar-categorias', _id ? _id : '');
  }
}
