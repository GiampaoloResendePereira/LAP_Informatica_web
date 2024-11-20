import { calcularDistanciaEValor, inserirCalculoFrete, inserirSolicitacaoFrete } from '../models/FreteModel.js';

export const calcularFrete = async (req, res) => {
  try {
    const { cepOrigem, cepDestino, peso } = req.body;
    const resultado = await calcularDistanciaEValor(cepOrigem, cepDestino, peso);
    await inserirCalculoFrete({
      cepOrigem,
      cepDestino,
      peso,
      distanciaEmKm: resultado.distanciaEmKm,
      valorFrete: resultado.valorFrete
    });
    res.json(resultado);
  } catch (error) {
    console.error('Erro ao calcular frete: ', error);
    res.status(500).send('Erro ao calcular frete');
  }
};

export const solicitarFrete = async (req, res) => {
  try {
    const solicitacao = req.body;
    await inserirSolicitacaoFrete(solicitacao);
    res.status(201).send('Solicitação de frete realizada com sucesso');
  } catch (error) {
    console.error('Erro ao solicitar frete: ', error);
    res.status(500).send('Erro ao solicitar frete');
  }
};
