import conexao from '../conexao.js';

const obterCoordenadasCep = async (cep) => {
  const query = 'SELECT latitude, longitude FROM ceps WHERE cep = ?';
  const [rows] = await conexao.query(query, [cep]);
  return rows[0];
};

const calcularDistancia = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Raio da Terra em km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distancia = R * c;
  return distancia;
};

const obterParametros = async () => {
  const query = 'SELECT tipo, valor FROM parametros';
  const [rows] = await conexao.query(query);
  return rows;
};

export const calcularDistanciaEValor = async (cepOrigem, cepDestino, peso) => {
  const coordenadasOrigem = await obterCoordenadasCep(cepOrigem);
  const coordenadasDestino = await obterCoordenadasCep(cepDestino);

  if (!coordenadasOrigem || !coordenadasDestino) {
    throw new Error('CEP de origem ou destino não encontrado');
  }

  const distanciaEmKm = calcularDistancia(
    coordenadasOrigem.latitude, coordenadasOrigem.longitude,
    coordenadasDestino.latitude, coordenadasDestino.longitude
  );

  const parametros = await obterParametros();
  const valorPorPeso = parametros.find(param => param.tipo === 'peso').valor;
  const valorPorDistancia = parametros.find(param => param.tipo === 'distancia').valor;

  const valorFrete = (peso * valorPorPeso) + (distanciaEmKm * valorPorDistancia);

  return { distanciaEmKm, valorFrete };
};

export const inserirCalculoFrete = async (calculo) => {
  const query = `
    INSERT INTO calculo_frete (cepOrigem, cepDestino, peso, distanciaEmKm, valorFrete)
    VALUES (?, ?, ?, ?, ?)
  `;
  const values = [
    calculo.cepOrigem, calculo.cepDestino, calculo.peso,
    calculo.distanciaEmKm, calculo.valorFrete
  ];

  await conexao.query(query, values);
};

export const inserirSolicitacaoFrete = async (solicitacao) => {
  const query = `
    INSERT INTO solicitacoes_frete (remetente_nome, remetente_telefone, remetente_email, remetente_cep, destinatario_nome, destinatario_telefone, destinatario_email, destinatario_cep, valor_frete)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    solicitacao.remetente.nome, solicitacao.remetente.telefone, solicitacao.remetente.email, solicitacao.remetente.endereco.cep,
    solicitacao.destinatario.nome, solicitacao.destinatario.telefone, solicitacao.destinatario.email, solicitacao.destinatario.endereco.cep,
    solicitacao.frete
  ];

  await conexao.query(query, values);
};
