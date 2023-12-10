import Usuario_model from '../models/modelo.js';


/* db.usuario.insertOne({
    nome: "Nome",
    nickname: "Nickname",
    email: "email@example.com",
    senha: "senha123",
    data: new Date()
})
*/
export const createUsuario = async(request, response) => {
    try{
        const usuario = {
            nome: request.body.nome,
            nickname: request.body.nickname,
            email: request.body.email,
            senha: request.body.senha,
            data_nascimento: new Date(request.body.data_nascimento)
        };

        const novo_usuario = await Usuario_model.create(usuario);
        response.status(201).json({ message: 'Registro criado com sucesso', usuario: novo_usuario });
    }catch(error){
        console.error('Erro ao inserir registro:', error);
        console.log('Corpo da Requisição:', request.body);
        response.status(400).json({ error: 'Erro ao inserir registro' });
    }
}


// db.usuario.find()
export const getAllUsuarios = async(request, response) => {
    try{
        const usuarios = await Usuario_model.find();
        response.status(200).json(usuarios);
    }catch(error){
        console.log(error);
        response.status(500).json({ error: 'Erro ao ler registros' });
    }
}


// db.usuario.findOne({ _id: ObjectId("id_do_usuario") })
export const getUsuariobyId = async(request, response) => {
    try{
        const id = request.params.id;
        const buscar_usuario = await Usuario_model.findOne({ _id: id });

        if(!buscar_usuario){
            return response.status(404).json({ error: 'Registro não encontrado' })
        }

        response.status(200).json(buscar_usuario);
    }catch(error){
        console.log(error);
        response.status(500).json({ error: 'Erro ao buscar registro' });
    }
}


/* 
db.usuario.updateOne(
    { _id: ObjectId("id_do_usuario") },
    {
        $set: {
            nome: "Novo Nome",
            nickname: "Novo Nickname",
            email: "novo_email@example.com",
            senha: "nova_senha123",
            data: new Date()
        }
    }
)
*/
export const updateUsuario = async(request, response) => {
        try{
            const id = request.params.id;

            const usuario = {
                nome: request.body.nome,
                nickname: request.body.nickname,
                email: request.body.email,
                senha: request.body.senha,
                data_nascimento: new Date(request.body.data_nascimento)
            };

            const atualizar_usuario = await Usuario_model.findByIdAndUpdate({ _id: id }, usuario, { new: true });

            if(!atualizar_usuario){
                return response.status(404).json({ error: 'Registro não encontrado' });
            }

            response.status(200).json({ message: 'Registro atualizado com sucesso', usuario: atualizar_usuario });
        }catch(error){
            console.log(error);
            response.status(500).json({ error: 'Erro ao atualizar registro' });
        }
}


// db.usuario.deleteOne({ _id: ObjectId("id_do_usuario") })
export const deleteUsuario = async(request, response) => {
    try{
        const id = request.params.id;
        const usuario = await Usuario_model.findById({ _id: id });

        if(!usuario){
            return response.status(404).json({ error: 'Registro não encontrado' });
        }

        const deletar_usuario = await Usuario_model.deleteOne({ _id: id });
        response.status(200).json({ message: 'Registro deletado com sucesso', usuario: deletar_usuario });
    }catch(error){
        console.log(error);
        response.status(500).json({ error: 'Erro ao deletar registro' });
    }
}