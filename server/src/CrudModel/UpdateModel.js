import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function updateAula(aula, id) {
  console.log('AulaModel: updateAula');
  const conexao = mysql.createPool(db);
  const sql = `UPDATE aulas SET 
    data = ?, 
    data_hora_inicio = ?, 
    data_hora_fim = ?, 
    turma = ?, 
    instrutor = ?, 
    unidade_curricular = ?, 
    ambiente = ? 
    WHERE id = ?`;

  const params = [
    aula.data,
    aula.data_hora_inicio,
    aula.data_hora_fim,
    aula.turma,
    aula.instrutor,
    aula.unidade_curricular,
    aula.ambiente,
    id,
  ];

  try {
    const [retorno] = await conexao.query(sql, params);
    console.log('Atualizando Aula');
    if (retorno.affectedRows < 1) {
      return [404, { message: "Aula não encontrada" }];
    }
    return [200, { message: "Aula atualizada" }];
  } catch (error) {
    console.log(error);
    return [500, error];
  }
}
