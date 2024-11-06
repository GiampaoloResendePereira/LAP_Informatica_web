import { readAulas, getOneAula } from '../models/AulaModel.js';
import { isNullOrEmpty } from '../validations/AulaValidation.js';

export async function mostrandoAulas(req, res) {
  console.log('AulaController mostrandoAulas');
  try {
    const [status, resposta] = await readAulas();
    res.status(status).json(resposta);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function mostrandoUmaAula(req, res) {
  console.log('AulaController mostrandoUmaAula');
  const { id } = req.params;

  if (isNullOrEmpty(id)) {
    res.status(400).json({ message: 'O id deve ser preenchido' });
  } else {
    try {
      const [status, resposta] = await getOneAula(id);
      res.status(status).json(resposta);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
