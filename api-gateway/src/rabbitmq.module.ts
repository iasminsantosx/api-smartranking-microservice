import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { HttpModule } from '@nestjs/axios';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
    RabbitMQModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('RABBIT_CONEXION'),
        exchanges: [
          {
            name: 'default_exchange',
            type: 'direct',
            options: { durable: true },
          },
        ],
        connectionInitOptions: { wait: true },
        heartbeatIntervalInSeconds: 30,
        prefetchCount: 10,
        reconnectTimeInSeconds: 5,
      }),
    }),
  ],
  exports: [RabbitMQModule],
})
export class RabbitMqModule {}
