// /controllers/loginController.js
const Usuario = require('../models/usuarioModel');

const loginController = {
    login: (req, res) => {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
        }

        Usuario.findByEmail(email, (err, usuario) => {
            if (err) return res.status(500).json({ message: 'Erro ao buscar usuário.' });
            if (!usuario || usuario.senha !== senha) {
                return res.status(401).json({ message: 'Email ou senha incorretos.' });
            }
            res.status(200).json({ message: 'Login bem-sucedido!', usuario });
        });
    },
};

module.exports = loginController;
