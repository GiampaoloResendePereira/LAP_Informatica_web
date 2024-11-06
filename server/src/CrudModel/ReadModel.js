import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function readAulas() {
  console.log('AulaModel: readAulas');
  const conexao = mysql.createPool(db);
  const sql = 'SELECT * FROM aulas';

  try {
    const [retorno] = await conexao.query(sql);
    console.log('Mostrando Aulas');
    return [200, retorno];
  } catch (error) {
    console.log(error);
    return [500, error];
  }
}

export async function getOneAula(id) {
  console.log('AulaModel: getOneAula');
  const conexao = mysql.createPool(db);
  const sql = 'SELECT * FROM aulas WHERE id = ?';
  const params = [id];

  try {
    const [retorno] = await conexao.query(sql, params);
    console.log('Mostrando Aula');
    if (retorno.length < 1) {
      return [404, { message: "Aula não encontrada" }];
    }
    return [200, retorno[0]];
  } catch (error) {
    console.log(error);
    return [500, error];
  }
}
