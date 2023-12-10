import mongoose from 'mongoose';
const { Schema } = mongoose;


const usuario_schema = new Schema(
    {
        nome: {
            type: String
        },
        email: {
            type: String
        },
        senha: {
            type: String
        },
        data_nascimento: {
            type: String
        },
        ativo:{
            type: Boolean
        }
    },
    { timestamps: true }
)


const Usuario_model = mongoose.model('Usuario', usuario_schema);


export default Usuario_model;