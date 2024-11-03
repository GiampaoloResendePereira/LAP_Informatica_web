// models/CalculoFreteModel.js
const db = require("../config/conexao");

// Função de verificação de CEPs de Vitória (CEP de Vitória geralmente começa com "290")
const isCepVitoria = (cep) => {
  return cep.startsWith("290");
};

// Função para calcular o valor do frete
const calcularFrete = (peso, altura, diametro, largura) => {
  const volume = altura * diametro * largura;
  return peso * 0.5 + volume * 0.2;
};

// Função para salvar o cálculo de frete no banco de dados
const salvarCalculoFrete = (data, callback) => {
  const query = `
    INSERT INTO calculos_frete (cep_origem, cep_destino, peso, altura, diametro, largura, valor_frete)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.cepOrigem,
    data.cepDestino,
    data.peso,
    data.altura,
    data.diametro,
    data.largura,
    data.valorFrete
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Erro ao salvar o cálculo no banco de dados:", err);
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = {
  isCepVitoria,
  calcularFrete,
  salvarCalculoFrete
};
