import { calcularDistancia, calcularValorFrete, inserirSolicitacaoFrete } from '../models/FreteModel.js';

export const calcularFrete = async (req, res) => {
  try {
    const { cepOrigem, cepDestino, peso } = req.body;
    const distancia = await calcularDistancia(cepOrigem, cepDestino);
    const valorFrete = calcularValorFrete(peso, distancia);
    res.json({ distancia, valorFrete });
  } catch (error) {
    console.error('Erro ao calcular frete: ', error);
    res.status(500).send('Erro ao calcular frete.');
  }
};

export const solicitarFrete = async (req, res) => {
  try {
    const solicitacao = req.body;
    await inserirSolicitacaoFrete(solicitacao);
    res.status(201).send('Solicitação de frete cadastrada com sucesso!');
  } catch (error) {
    console.error('Erro ao solicitar frete: ', error);
    res.status(500).send('Erro ao solicitar frete.');
  }
};
