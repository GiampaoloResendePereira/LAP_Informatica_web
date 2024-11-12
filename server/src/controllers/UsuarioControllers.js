import {createUsurio, readUsuario, showOneUsuario, updateUsuario, getUserByLoginPassword, deleteUsuario} from '../models/UsuarioModel.js';

export async function criarUsuario(req, res) {
    console.log('UsuarioControlers :: criarUsuario')
    const {login, senha} = req.body;

    if (!login || !senha){
        res.status(400).json({message: 'login e senha devem ser criador'});

    }else{
        try{
            const[status, resposta] = await createUsuario(login, senha);
            res.status(status).json(resposta);
        }catch (error){
            console.log(error);
            res.status(500).json({message: 'UsuarioControllers :; erro ao mostrarUsuario'});

        }
    }
    
}

