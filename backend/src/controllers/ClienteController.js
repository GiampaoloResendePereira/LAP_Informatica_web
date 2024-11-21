import { getClienteById } from '../models/ClienteModel.js';

export async function obterDadosCliente(req, res) {
  const clienteId = req.user.id; // Assumindo que o middleware de autenticação adiciona o `user` ao `req`

  try {
    const cliente = await getClienteById(clienteId);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar dados do cliente', error });
  }
}
