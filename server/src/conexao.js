import mysql from 'mysql2/promise';

const conexao = mysql.createPool({
  host: 'localhost', // Endereço do servidor MySQL
  user: 'root',      // Usuário do MySQL
  password: '',  // Senha do MySQL
  database: 'lap',  // Nome do banco de dados
});

export default conexao;
