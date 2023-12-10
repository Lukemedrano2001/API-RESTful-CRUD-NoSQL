import express from 'express';
import mongoose from './db_connection/connection.js';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/rotas.js';
import dados_iniciais from './dados_iniciais/dados_usuarios.js';


dotenv.config();


const app = express();
const port = process.env.PORT;


app.use(cors());


app.use(express.json());


app.use(express.urlencoded({
    extended: true
}))


app.use('/', routes);


mongoose
    .then(async () => {
        console.log('Collection Usuario sincronizada com sucesso no banco de dados.');

        await dados_iniciais();
    })
    .catch((error) =>{
        console.error('Erro ao sincronizar com a collection Usuario.', error);
    })

    app.listen(port, () => {
    console.log('Servidor rodando na porta', port);
    });