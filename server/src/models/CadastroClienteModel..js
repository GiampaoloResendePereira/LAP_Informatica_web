//Importando pacote do mysql
import mysql from 'mysql2/promise';

//Importando configurações do banco
import db from '../conexao.js';

//Cadastrando Aula
export async function createCadastro(cadastro) {
  console.log('ClienteModel: Create');
  const conexao = mysql.createPool(db);
  const sql = `INSERT INTO cadastrocliente 
        (nome, cpf, email, telefone, datanacimentp, senha, chave)
        VALUES (?,?,?,?,?,?,?)`;

  const params = [
    cadastro.nome,
    cadastro.cpf,
    cadastro.email,
    cadastro.telefone,
    cadastro.dataNascimento,
    cadastro.senha,
    cadastro.chave,
  ];

  try {
    const [retorno] = await conexao.query(sql, params);
    console.log('Aula Cadastrada');
    return [201, 'Aula Cadastrada'];
  } catch (error) {
    console.log(error);
    return [500, error];
  }
}



