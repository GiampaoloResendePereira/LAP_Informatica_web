import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Tabela de valores por peso
const tabelaPeso = [
  { limite: 1, valor: 3.00 },
  { limite: 3, valor: 5.00 },
  { limite: 8, valor: 9.00 },
  { limite: 12, valor: 12.00 },
  { limite: Infinity, valor: 'Não é possível transportar' },
];

function CalculoFrete() {
  // Estados para armazenar os valores dos campos
  const [cepOrigem, setCepOrigem] = useState('');
  const [cepDestino, setCepDestino] = useState('');
  const [peso, setPeso] = useState('');
  const [valorFrete, setValorFrete] = useState(null);
  const [errorCepOrigem, setErrorCepOrigem] = useState('');
  const [errorCepDestino, setErrorCepDestino] = useState('');
  const [errorPeso, setErrorPeso] = useState('');
  const [distancia, setDistancia] = useState(0);

  // Função para validar o formato do CEP
  const validarCep = (cep) => {
    const regexCep = /^[0-9]{5}-[0-9]{3}$/; // Validação de CEP no formato XXXXX-XXX
    return regexCep.test(cep);
  };

  // Função para validar o peso (número positivo)
  const validarPeso = (peso) => {
    const regexPeso = /^[0-9]+(\.[0-9]{1,2})?$/; // Valida números com até duas casas decimais
    return regexPeso.test(peso);
  };

  // Função para calcular o valor do frete com base no peso
  const calcularValorPeso = (peso) => {
    const pesoFloat = parseFloat(peso);
    for (let i = 0; i < tabelaPeso.length; i++) {
      if (pesoFloat <= tabelaPeso[i].limite) {
        return tabelaPeso[i].valor;
      }
    }
  };

  // Função para calcular o valor do frete por km rodado
  const calcularValorKm = (km) => {
    const precoPorKm = 0.50; // Preço base por km
    return km * precoPorKm;
  };

  // Função para calcular a distância entre dois pontos utilizando a API do Distance Matrix
  const calcularDistancia = async (cepOrigem, cepDestino) => {
    try {
      // Chave de API fornecida
      const key = 'fMPFKZjJhlioZjnswMy3YqzzYrorh30HfkeZuFT1Mwq93mtt9Q0KYPds8oEHIHYb';
      
      // Consultar a API DistanceMatrix para calcular a distância entre os pontos
      const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${cepOrigem}&destinations=${cepDestino}&key=${key}`;
      const response = await fetch(url);
      const data = await response.json();

      // Verificar se a resposta contém a distância e atualizar o estado
      if (data.status === 'OK') {
        const distanciaEmKm = data.rows[0].elements[0].distance.value / 1000; // A distância é retornada em metros
        setDistancia(distanciaEmKm);
      } else {
        alert('Erro ao calcular a distância entre os CEPs.');
      }
    } catch (error) {
      console.error('Erro ao calcular distância: ', error);
      alert('Erro ao calcular a distância entre os CEPs.');
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    setErrorCepOrigem('');
    setErrorCepDestino('');
    setErrorPeso('');

    // Validação do CEP de origem
    if (!validarCep(cepOrigem)) {
      setErrorCepOrigem('CEP de origem inválido. Formato correto: XXXXX-XXX');
      isValid = false;
    }

    // Validação do CEP de destino
    if (!validarCep(cepDestino)) {
      setErrorCepDestino('CEP de destino inválido. Formato correto: XXXXX-XXX');
      isValid = false;
    }

    // Validação do peso
    if (!validarPeso(peso)) {
      setErrorPeso('Peso inválido. Formato correto: um número positivo com até duas casas decimais.');
      isValid = false;
    }

    if (isValid) {
      // Calcular distância
      calcularDistancia(cepOrigem, cepDestino);

      // Calcular valor do frete
      const valorPeso = calcularValorPeso(peso);
      if (valorPeso === 'Não é possível transportar') {
        alert('Peso inválido para transporte.');
        setValorFrete(valorPeso);
        return;
      }

      const valorKm = calcularValorKm(distancia);
      const valorTotal = valorPeso === 'Não é possível transportar' ? valorPeso : valorPeso + valorKm;

      setValorFrete(valorTotal);
      alert('Cálculo do frete realizado com sucesso!');
    }
  };

  // Função para lidar com a solicitação do frete
  const handleSolicitarFrete = () => {
    alert('Frete solicitado com sucesso!');
  };

  return (
    <div className="container bg-light p-5">
      <h2 className="bg-dark text-white rounded p-3 mb-4">Cálculo de Frete</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cepOrigem" className="form-label">CEP de Origem</label>
          <input
            type="text"
            className="form-control"
            value={cepOrigem}
            onChange={(e) => setCepOrigem(e.target.value)}
            placeholder="Digite o CEP de origem"
          />
          {errorCepOrigem && <span style={{ color: 'red' }}>{errorCepOrigem}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="cepDestino" className="form-label">CEP de Destino</label>
          <input
            type="text"
            className="form-control"
            value={cepDestino}
            onChange={(e) => setCepDestino(e.target.value)}
            placeholder="Digite o CEP de destino"
          />
          {errorCepDestino && <span style={{ color: 'red' }}>{errorCepDestino}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="peso" className="form-label">Peso</label>
          <input
            type="text"
            className="form-control"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite o peso"
          />
          {errorPeso && <span style={{ color: 'red' }}>{errorPeso}</span>}
        </div>

        <button className="btn btn-danger">
          Calcular Frete
        </button>
      </form>

      {valorFrete !== null && (
        <div style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '15px',
          marginTop: '20px',
          fontSize: '18px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
          {valorFrete === 'Não é possível transportar' ? 'Valor do frete: Não é possível transportar' : `Valor do frete: R$ ${valorFrete.toFixed(2)}`}
        </div>
      )}
      <br />

      {valorFrete !== null && valorFrete !== 'Não é possível transportar' && (
        <button
          onClick={handleSolicitarFrete}
          className="btn btn-secondary"
          style={{ width: '100%' }}
        >
          Solicitar Frete
        </button>
      )}
    </div>
  );
}

export default CalculoFrete;
