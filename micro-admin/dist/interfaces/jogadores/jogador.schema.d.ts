import * as moongose from 'mongoose';
export declare const JogadorSchema: moongose.Schema<any, moongose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    telefoneCelular?: string;
    email?: string;
    nome?: string;
    ranking?: string;
    urlFotoJogador?: string;
}, moongose.Document<unknown, {}, moongose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    telefoneCelular?: string;
    email?: string;
    nome?: string;
    ranking?: string;
    urlFotoJogador?: string;
}>, {}, moongose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>> & moongose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    telefoneCelular?: string;
    email?: string;
    nome?: string;
    ranking?: string;
    urlFotoJogador?: string;
}> & {
    _id: moongose.Types.ObjectId;
} & {
    __v: number;
}>;
