"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadorSchema = void 0;
const moongose = require("mongoose");
exports.JogadorSchema = new moongose.Schema({
    telefoneCelular: { type: String, unique: true },
    email: { type: String, unique: true },
    nome: { type: String },
    ranking: { type: String },
    urlFotoJogador: { type: String },
}, { timestamps: true, collection: 'jogadores' });
//# sourceMappingURL=jogador.schema.js.map