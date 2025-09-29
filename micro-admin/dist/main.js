"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger('Main');
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://smartranking:smartrank123@localhost:5672'],
            queue: 'admin-backend',
        },
    });
    await app.listen();
    logger.log('Microservice is listening');
}
bootstrap();
//# sourceMappingURL=main.js.map