import { obterParametroPorId, editarParametroPorId } from '../models/ParametroModel.js';

export const obterParametro = async (req, res) => {
  try {
    const { id } = req.params;
    const parametro = await obterParametroPorId(id);
    res.json(parametro);
  } catch (error) {
    console.error('Erro ao obter parâmetro: ', error);
    res.status(500).send('Erro ao obter parâmetro.');
  }
};

export const editarParametro = async (req, res) => {
  try {
    const parametro = req.body;
    await editarParametroPorId(parametro.id, parametro);
    res.status(200).send('Parâmetro atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao editar parâmetro: ', error);
    res.status(500).send('Erro ao editar parâmetro.');
  }
};
