// controllers/CalculoFreteController.js
const {
    isCepVitoria,
    calcularFrete,
    salvarCalculoFrete
  } = require("../models/CalculoFreteModel");
  
  const calcularFreteHandler = (req, res) => {
    const { cepOrigem, cepDestino, peso, altura, diametro, largura } = req.body;
  
    // Validação de CEPs de Vitória
    if (!isCepVitoria(cepOrigem) || !isCepVitoria(cepDestino)) {
      return res.status(400).json({
        message: "O cálculo de frete está disponível apenas para a cidade de Vitória - ES."
      });
    }
  
    // Verificar se todos os campos foram preenchidos
    if (!peso || !altura || !diametro || !largura) {
      return res.status(400).json({
        message: "Todos os campos de peso, altura, diâmetro e largura são obrigatórios."
      });
    }
  
    // Converter para número e calcular o frete
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);
    const diametroFloat = parseFloat(diametro);
    const larguraFloat = parseFloat(largura);
  
    const valorFrete = calcularFrete(pesoFloat, alturaFloat, diametroFloat, larguraFloat);
  
    // Preparar dados para salvar
    const data = {
      cepOrigem,
      cepDestino,
      peso: pesoFloat,
      altura: alturaFloat,
      diametro: diametroFloat,
      largura: larguraFloat,
      valorFrete
    };
  
    // Salvar no banco de dados
    salvarCalculoFrete(data, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Erro ao calcular e salvar o frete." });
      }
  
      res.json({
        message: "Cálculo de frete realizado com sucesso!",
        valorFrete: valorFrete.toFixed(2)
      });
    });
  };
  
  module.exports = {
    calcularFreteHandler
  };
  