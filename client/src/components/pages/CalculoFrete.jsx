import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Tabela de valores por peso
const tabelaPeso = [
  { limite: 1, valor: 3.00 },
  { limite: 3, valor: 5.00 },
  { limite: 8, valor: 9.00 },
  { limite: 12, valor: 12.00 },
  { limite: Infinity, valor: 15.00 },  // Preço máximo para pesos maiores que 12kg
];

// Funções auxiliares de validação
const validarCep = (cep) => {
  const regexCep = /^[0-9]{5}-[0-9]{3}$/;
  return regexCep.test(cep);
};

const validarPeso = (peso) => {
  const regexPeso = /^[0-9]+(\.[0-9]{1,2})?$/;
  return regexPeso.test(peso);
};

function CalculoFrete() {
  const navigate = useNavigate();  // Hook do React Router para navegação
  const [cepOrigem, setCepOrigem] = useState('');
  const [cepDestino, setCepDestino] = useState('');
  const [peso, setPeso] = useState('');
  const [valorFrete, setValorFrete] = useState(null);
  const [errorCepOrigem, setErrorCepOrigem] = useState('');
  const [errorCepDestino, setErrorCepDestino] = useState('');
  const [errorPeso, setErrorPeso] = useState('');
  const [distancia, setDistancia] = useState(null); // Variável de distância
  const [loading, setLoading] = useState(false);  // Estado de loading

  const calcularValorPeso = (peso) => {
    const pesoFloat = parseFloat(peso);
    for (let i = 0; i < tabelaPeso.length; i++) {
      if (pesoFloat <= tabelaPeso[i].limite) {
        return tabelaPeso[i].valor;
      }
    }
    return 0;
  };

  const calcularValorKm = (km) => {
    const precoPorKm = 0.50;
    return km * precoPorKm;
  };

  const obterCoordenadasPorCep = async (cep) => {
    const apiKey = '9f07e8b4fd844d11acf2aa0553860d7d';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${cep}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        return { lat, lng };
      } else {
        throw new Error('Não foi possível encontrar coordenadas para o CEP fornecido.');
      }
    } catch (error) {
      console.error('Erro ao obter coordenadas: ', error);
      alert('Erro ao obter coordenadas para o CEP.');
      return null;
    }
  };

  const calcularDistanciaEntreCoordenadas = (coord1, coord2) => {
    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const R = 6371; // Raio da Terra em km

    const dLat = toRadians(coord2.lat - coord1.lat);
    const dLng = toRadians(coord2.lng - coord1.lng);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(coord1.lat)) * Math.cos(toRadians(coord2.lat)) * 
              Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Retorna a distância em km
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;
    setErrorCepOrigem('');
    setErrorCepDestino('');
    setErrorPeso('');
    setLoading(true);  // Iniciar o carregamento

    if (!validarCep(cepOrigem)) {
      setErrorCepOrigem('CEP de origem inválido. Formato correto: XXXXX-XXX');
      isValid = false;
    }

    if (!validarCep(cepDestino)) {
      setErrorCepDestino('CEP de destino inválido. Formato correto: XXXXX-XXX');
      isValid = false;
    }

    if (!validarPeso(peso)) {
      setErrorPeso('Peso inválido. Formato correto: um número positivo com até duas casas decimais.');
      isValid = false;
    }

    if (isValid) {
      const coordenadasOrigem = await obterCoordenadasPorCep(cepOrigem);
      const coordenadasDestino = await obterCoordenadasPorCep(cepDestino);

      if (coordenadasOrigem && coordenadasDestino) {
        const distanciaEmKm = calcularDistanciaEntreCoordenadas(coordenadasOrigem, coordenadasDestino);
        setDistancia(distanciaEmKm);

        const valorPeso = calcularValorPeso(peso);
        if (valorPeso === 0) {
          alert('Peso inválido para transporte.');
          setValorFrete('Não é possível transportar');
          setLoading(false);  // Finalizar carregamento
          return;
        }

        const valorKm = calcularValorKm(distanciaEmKm);
        const valorTotal = valorPeso + valorKm;

        setValorFrete(`R$ ${valorTotal.toFixed(2).replace('.', ',')}`);
        alert('Cálculo do frete realizado com sucesso!');
      }
    }

    setLoading(false);  // Finalizar carregamento
  };

  const handleSolicitarFrete = () => {
    navigate('/solicitacao-frete'); // Redireciona para a página de solicitação de frete
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
          {errorCepOrigem && <div className="text-danger">{errorCepOrigem}</div>}
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
          {errorCepDestino && <div className="text-danger">{errorCepDestino}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="peso" className="form-label">Peso (kg)</label>
          <input
            type="text"
            className="form-control"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite o peso"
          />
          {errorPeso && <div className="text-danger">{errorPeso}</div>}
        </div>

        {loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Carregando...</span>
            </div>
          </div>
        )}

        {valorFrete && !loading && (
          <div className="alert alert-info">
            <strong>Valor do frete: </strong> {valorFrete}
          </div>
        )}

        {/* Exibir a distância calculada */}
        {distancia !== null && !loading && (
          <div className="alert alert-info mt-3">
            Distância entre os CEPs: {distancia.toFixed(2)} km
          </div>
        )}

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-danger" disabled={loading}>
            Calcular Frete
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleSolicitarFrete}>
            Solicitar Frete
          </button>
        </div>
      </form>
<<<<<<< HEAD
=======

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
          
        >
          Solicitar Frete
        </button>
      )}
>>>>>>> 65bd2915cc4e0389b07c5efe3188c58f43b50c79
    </div>
  );
}

export default CalculoFrete;
