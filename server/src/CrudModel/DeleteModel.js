import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function deleteAula(id) {
  console.log('AulaModel: deleteAula');
  const conexao = mysql.createPool(db);
  const sql = 'DELETE FROM aulas WHERE id = ?';
  const params = [id];

  try {
    const [retorno] = await conexao.query(sql, params);
    console.log('Deletando Aula');
    if (retorno.affectedRows < 1) {
      return [404, { message: "Aula não encontrada" }];
    }
    return [200, { message: "Aula deletada" }];
  } catch (error) {
    console.log(error);
    return [500, error];
  }
}
