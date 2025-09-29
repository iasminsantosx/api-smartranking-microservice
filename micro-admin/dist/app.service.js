"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AppService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const microservices_1 = require("@nestjs/microservices");
let AppService = AppService_1 = class AppService {
    constructor(categoriaModel, jogadorModel) {
        this.categoriaModel = categoriaModel;
        this.jogadorModel = jogadorModel;
        this.logger = new common_1.Logger(AppService_1.name);
    }
    async criarCategoria(categoria) {
        try {
            this.logger.debug('criarCategoria called');
            const categoriaCriada = new this.categoriaModel(categoria);
            return await categoriaCriada.save();
        }
        catch (error) {
            this.logger.error(`Error: ${error.message}`);
            throw new microservices_1.RpcException(error.message);
        }
    }
    async consultarTodasCategorias() {
        try {
            this.logger.debug('consultarTodasCategorias called');
            return await this.categoriaModel.find().exec();
        }
        catch (error) {
            this.logger.error(`Error: ${error.message}`);
            throw new microservices_1.RpcException(error.message);
        }
    }
    async consultarCategoriaPeloId(_id) {
        try {
            this.logger.debug(`consultarCategoriaPeloId called with id ${_id}`);
            const categoria = await this.categoriaModel.findOne({ _id }).exec();
            this.logger.debug(`categoria ${categoria}`);
            return categoria;
        }
        catch (error) {
            this.logger.error(`Error: ${error.message}`);
            throw new microservices_1.RpcException(error.message);
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = AppService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Categoria')),
    __param(1, (0, mongoose_1.InjectModel)('Jogador')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], AppService);
//# sourceMappingURL=app.service.js.map