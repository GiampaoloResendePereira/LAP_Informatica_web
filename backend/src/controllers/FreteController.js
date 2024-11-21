import { calcularFreteDb, solicitarFreteDb } from '../models/FreteModel.js';

export async function calcularFrete(req, res) {
  const { cepOrigem, cepDestino, peso } = req.body;
  
  try {
    const [status, resposta] = await calcularFreteDb(cepOrigem, cepDestino, peso);
    res.status(status).json(resposta);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao calcular frete', error });
  }
}

export async function solicitarFrete(req, res) {
  const { remetente, destinatario, cepOrigem, cepDestino, peso, distancia, valorFrete } = req.body;

  try {
    const [status, resposta] = await solicitarFreteDb(remetente, destinatario, peso, distancia, valorFrete);
    res.status(status).json(resposta);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao solicitar frete', error });
  }
}
