import React, { useState, useEffect } from 'react';
import './SimuladorFrete.css';

const SimuladorFrete = () => {
  const [cepOrigem, setCepOrigem] = useState('');
  const [cepDestino, setCepDestino] = useState('');
  const [peso, setPeso] = useState('');
  const [valorFrete, setValorFrete] = useState(null);
  const [parametros, setParametros] = useState({});

  useEffect(() => {
    fetch('/parametros.json')
      .then((response) => response.json())
      .then((data) => setParametros(data))
      .catch((error) => console.error("Erro ao carregar parâmetros:", error));
  }, []);

  const calcularFrete = () => {
    let valorPeso = 0;
    const { valorPorPeso, valorPorKm, valorPorMinuto } = parametros;

    // Definindo o valor pelo peso
    if (peso < 1) {
      valorPeso = valorPorPeso[0];
    } else if (peso >= 1 && peso < 3) {
      valorPeso = valorPorPeso[1];
    } else if (peso >= 3 && peso < 8) {
      valorPeso = valorPorPeso[2];
    } else if (peso >= 8 && peso < 12) {
      valorPeso = valorPorPeso[3];
    } else {
      alert("Não é possível transportar mercadorias acima de 12Kg.");
      return;
    }

    // Valores simulados para distância e tempo
    const distanciaSimulada = 10; // em km
    const tempoSimulado = 20; // em minutos

    const valorDistancia = distanciaSimulada * valorPorKm;
    const valorTempo = tempoSimulado * valorPorMinuto;

    const totalFrete = valorPeso + valorDistancia + valorTempo;
    setValorFrete(totalFrete.toFixed(2));
  };

  return (
    <div className="container mt-5 simulador-container"> {/* Adiciona a classe para o fundo cinza */}
      <h4 className= "estilo" style={{ color: 'white' }}>Simulador de Frete</h4> {/* Adiciona a classe ao h2 */}
      <div className="mb-3">
        <label>CEP de Origem:</label>
        <input
          type="text"
          className="form-control"
          value={cepOrigem}
          onChange={(e) => setCepOrigem(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>CEP de Destino:</label>
        <input
          type="text"
          className="form-control"
          value={cepDestino}
          onChange={(e) => setCepDestino(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Peso (kg):</label>
        <input
          type="number"
          className="form-control"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
        />
      </div>

      <button className="btn btn-danger" onClick={calcularFrete}>Calcular Frete</button>

      {valorFrete !== null && (
        <div className="mt-4">
          <h3>Valor do Frete: R${valorFrete}</h3>
        </div>
      )}
    </div>
  );
};

export default SimuladorFrete;