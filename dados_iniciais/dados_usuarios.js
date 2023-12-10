// generateUsers.js
import connection from '../db_connection/connection.js';
import mongoose from 'mongoose';
import UsuarioModel from '../models/usuario.js';


function gera_usuario_aleatorio(){
    const nomes = ['Fulano', 'Ciclano', 'Beltrano'];
    const nicknames = ['fulano123', 'ciclano456', 'beltrano789'];
    const emails = ['fulano@gmail.com', 'ciclano@gmail.com', 'beltrano@gmail.com'];
    const senhas = ['123', '456', '789'];
    const datas_nascimento = ['2001-09-19', '1980-03-13', '2006-12-17'];

    const usuarios = [];

    for(let i = 0; i < nomes.length; i++){
        const usuario = {
            nome: nomes[i],
            nickname: nicknames[i],
            email: emails[i],
            senha: senhas[i],
            data_nascimento: new Date(datas_nascimento[i])
        };
        usuarios.push(usuario);
    }
    return usuarios;
}


const dados_usuarios_iniciais = gera_usuario_aleatorio();


async function adicionar_dados_usuarios_iniciais() {
    let db_connection;
    try {
        db_connection = await connection;

        const usuariosExistentes = await UsuarioModel.find();

        if (usuariosExistentes.length === 0) {
            await UsuarioModel.insertMany(dados_usuarios_iniciais);
            console.log('Dados iniciais adicionados com sucesso.');
        } else {
            console.log('A coleção de usuários já contém dados. Nenhum dado inicial foi adicionado.');
        }
    } catch (error) {
        console.error(`Erro ao adicionar dados iniciais: ${error}`);
    }
}


export default adicionar_dados_usuarios_iniciais;
