import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function updateParametro(parametro, id) {
  console.log('EditarParametroModel: updateParametro');
  const conexao = mysql.createPool(db);
  const sql = `UPDATE editar_parametro SET 
    valorMenos1Kg = ?, 
    valor1a3Kg = ?, 
    valor3a8Kg = ?, 
    valor8a12Kg = ?, 
    valorPorKm = ?,  
    WHERE id = ?`;

  const params = [
    aula.valorMenos1Kg,
    aula.valor1a3Kg,
    aula.valor3a8Kg,
    aula.valor8a12Kg,
    aula.valorPorKm,
    id,
  ];

  try {
    const [retorno] = await conexao.query(sql, params);
    console.log('Atualizando Parametro');
    if (retorno.affectedRows < 1) {
      return [404, { message: "Edição não encontrada" }];
    }
    return [200, { message: "Parametro atualizado" }];
  } catch (error) {
    console.log(error);
    return [500, error];
  }
}
