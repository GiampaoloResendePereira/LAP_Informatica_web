// /models/usuarioModel.js
const db = require('../config/db');

const Usuario = {
    findByEmail: (email, callback) => {
        const sql = `SELECT * FROM clientes WHERE email = ?`;
        db.query(sql, [email], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    findByCpf: (cpf, callback) => {
        const sql = `SELECT * FROM clientes WHERE cpf = ?`;
        db.query(sql, [cpf], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    // Outras funções podem ser adicionadas aqui
};

module.exports = Usuario;
