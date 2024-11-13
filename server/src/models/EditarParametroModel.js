import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function updateParametro(parametro, id) {
  console.log('EditarParametroModel: updateParametro');
  
  // Cria pool de conexões usando os dados de configuração do banco
  const conexao = mysql.createPool(db);
  
  // Verifica se todos os parâmetros necessários estão presentes
  if (!parametro || !id) {
    console.log("Parâmetro inválido ou ID ausente.");
    return [400, { message: "Dados inválidos para atualização" }];
  }
  
  // Declaração SQL para atualização dos parâmetros sem vírgula extra
  const sql = `UPDATE parametro SET 
    valorMenos1Kg = ?, 
    valor1a3Kg = ?, 
    valor3a8Kg = ?, 
    valor8a12Kg = ?, 
    valorPorKm = ? 
    WHERE id = ?`;

  const params = [
    parametro.valorMenos1Kg,
    parametro.valor1a3Kg,
    parametro.valor3a8Kg,
    parametro.valor8a12Kg,
    parametro.valorPorKm,
    id,
  ];

  try {
    const [retorno] = await conexao.query(sql, params);
    console.log('Atualizando Parâmetro');
    
    if (retorno.affectedRows < 1) {
      return [404, { message: "Edição não encontrada" }];
    }

    return [200, { message: "Parâmetro atualizado com sucesso" }];
  } catch (error) {
    console.error("Erro ao atualizar o parâmetro:", error);
    return [500, { message: "Erro interno no servidor", error }];
  } finally {
    // Encerra o pool de conexões
    await conexao.end();
  }
}
