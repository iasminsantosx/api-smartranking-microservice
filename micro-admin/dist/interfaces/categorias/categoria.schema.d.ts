import * as mongoose from 'mongoose';
export declare const CategoriaSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    eventos: mongoose.Types.DocumentArray<{
        nome?: string;
        operacao?: string;
        valor?: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        nome?: string;
        operacao?: string;
        valor?: number;
    }> & {
        nome?: string;
        operacao?: string;
        valor?: number;
    }>;
    jogadores: mongoose.Types.ObjectId[];
    categoria?: string;
    descricao?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    eventos: mongoose.Types.DocumentArray<{
        nome?: string;
        operacao?: string;
        valor?: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        nome?: string;
        operacao?: string;
        valor?: number;
    }> & {
        nome?: string;
        operacao?: string;
        valor?: number;
    }>;
    jogadores: mongoose.Types.ObjectId[];
    categoria?: string;
    descricao?: string;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    eventos: mongoose.Types.DocumentArray<{
        nome?: string;
        operacao?: string;
        valor?: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        nome?: string;
        operacao?: string;
        valor?: number;
    }> & {
        nome?: string;
        operacao?: string;
        valor?: number;
    }>;
    jogadores: mongoose.Types.ObjectId[];
    categoria?: string;
    descricao?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
