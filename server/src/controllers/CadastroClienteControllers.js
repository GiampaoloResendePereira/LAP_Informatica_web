import { createCliente } from '../models/CadastroClienteModel.js';
import { validateCliente } from '../Validation/CadastroClienteValidation.js';

export async function cadastrarCliente(req, res) {
  console.log('CadastroClienteController cadastroCliente');
  const cliente = req.body;

  if (validateCliente(cliente)) {
    res.status(400).json({ message: 'Cadastro não pode conter campos vazios' });
  } else {
    try {
      const [status, resposta] = await createCliente(cliente);
      res.status(status).json(resposta);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
