import { obterParametroPorId, atualizarParametro } from '../models/ParametroModel.js';

export const obterParametro = async (req, res) => {
  try {
    const { id } = req.params;
    const parametro = await obterParametroPorId(id);
    if (parametro) {
      res.json(parametro);
    } else {
      res.status(404).send('Parâmetro não encontrado');
    }
  } catch (error) {
    console.error('Erro ao obter parâmetro: ', error);
    res.status(500).send('Erro ao obter parâmetro');
  }
};

export const editarParametro = async (req, res) => {
  try {
    const parametro = req.body;
    await atualizarParametro(parametro);
    res.status(200).send('Parâmetro atualizado com sucesso');
  } catch (error) {
    console.error('Erro ao atualizar parâmetro: ', error);
    res.status(500).send('Erro ao atualizar parâmetro');
  }
};
