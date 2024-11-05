// /controllers/recuperacaoSenhaController.js
const Usuario = require('../models/usuarioModel');

const recuperacaoSenhaController = {
    recuperar: (req, res) => {
        const { email, novoSenha } = req.body;

        if (!email || !novoSenha) {
            return res.status(400).json({ message: 'Email e nova senha são obrigatórios.' });
        }

        Usuario.findByEmail(email, (err, usuario) => {
            if (err) return res.status(500).json({ message: 'Erro ao buscar usuário.' });
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            // Aqui, você deve atualizar a senha no banco de dados.
            const sql = `UPDATE clientes SET senha = ? WHERE email = ?`;
            db.query(sql, [novoSenha, email], (err, results) => {
                if (err) return res.status(500).json({ message: 'Erro ao atualizar senha.' });
                res.status(200).json({ message: 'Senha atualizada com sucesso!' });
            });
        });
    },
};

module.exports = recuperacaoSenhaController;
