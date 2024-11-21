import mysql from 'mysql2/promise';
import db from '../conexao.js';

export async function calcularFreteDb(cepOrigem, cepDestino, peso) {
  // Lógica de cálculo de distância e valor do frete
  const distanciaEmKm = 15; // Exemplo estático, você pode substituir pela lógica real
  const valorFrete = (peso * 0.5) + (distanciaEmKm * 0.3); // Exemplo de cálculo

  return [200, { distanciaEmKm, valorFrete }];
}

export async function solicitarFreteDb(remetente, destinatario, peso, distancia, valorFrete) {
  const conexao = mysql.createPool(db);
  const sql = `INSERT INTO fretes (remetente_nome, remetente_telefone, remetente_email, remetente_cep, 
                                   destinatario_nome, destinatario_telefone, destinatario_email, destinatario_cep, 
                                   peso, distancia, valorFrete) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    remetente.nome,
    remetente.telefone,
    remetente.email,
    remetente.endereco.cep,
    destinatario.nome,
    destinatario.telefone,
    destinatario.email,
    destinatario.endereco.cep,
    peso,
    distancia,
    valorFrete
  ];

  try {
    const [result] = await conexao.query(sql, params);
    return [201, { message: 'Frete solicitado com sucesso', freteId: result.insertId }];
  } catch (error) {
    return [500, error];
  }
}
