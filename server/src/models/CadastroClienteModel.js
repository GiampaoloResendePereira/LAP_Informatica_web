import mysql from 'mysql2/promise';
import db from '../conexao.js'; // Importa a conexão com o banco

// Função para cadastrar cliente no banco de dados
export async function createCliente(cliente) {
    console.log('CadastroClienteModel: Create');

    const conexao = mysql.createPool(db); // Cria a pool de conexão com o banco de dados

    const sql = `INSERT INTO clientes (nome, sobrenome, cpf, telefone, email, senha, data_nascimento)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const params = [
        cliente.nome,
        cliente.sobrenome,
        cliente.cpf,
        cliente.telefone,
        cliente.email,
        cliente.senha,
        cliente.dataNascimento,
    ];

    try {
        const [result] = await conexao.query(sql, params); // Executa o comando SQL com os parâmetros
        console.log('Cliente cadastrado com sucesso');
        return [201, 'Cliente cadastrado com sucesso'];
    } catch (error) {
        console.error('Erro ao cadastrar cliente:', error);
        return [500, 'Erro ao cadastrar cliente'];
    }
}
