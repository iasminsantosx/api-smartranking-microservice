import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { RabbitMqModule } from './rabbitmq.module';
import { DiscoveryModule } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DiscoveryModule,
    RabbitMqModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
