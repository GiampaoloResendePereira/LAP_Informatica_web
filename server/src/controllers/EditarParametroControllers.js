import { updateParametro } from '../models/EditarParametroModel.js';
import { isNullOrEmpty, validateParametro } from '../Validation/EditarParametroValidation.js';

export async function atualizandoParametro(req, res) {
  console.log('EditarParametroController atualizandoParametro');
  const { id } = req.params;
  const parametro = req.body;

  if (validateParametro(parametro) || isNullOrEmpty(id)) {
    res.status(400).json({ message: 'Parametro não pode conter campos vazios' });
  } else {
    try {
      const [status, resposta] = await updateParametro(parametro, id);
      res.status(status).json(resposta);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}