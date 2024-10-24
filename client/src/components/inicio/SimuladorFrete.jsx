import React, { useState } from "react";
import '../../global.css';

const SimuladorFrete = () => {
  const [peso, setPeso] = useState(0);
  const [cepOrigem, setCepOrigem] = useState("");
  const [cepDestino, setCepDestino] = useState("");
  const [valorFrete, setValorFrete] = useState(null);
  const [valorPorPeso, setValorPorPeso] = useState(null);
  const [erro, setErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  // Lista de CEPs válidos para Vitória (exemplo)
  const cepsValidos = [
    ...Array.from({ length: 10000 }, (_, i) => `29000${i.toString().padStart(3, '0')}`),
    ...Array.from({ length: 10000 }, (_, i) => `29001${i.toString().padStart(3, '0')}`),
  ];

  const isCepValido = (cep) => {
    return cepsValidos.includes(cep);
  };

  const calcularFrete = () => {
    setErro("");
    setValorPorPeso(null); // Resetar valor por peso
    setMensagemSucesso(""); // Resetar mensagem de sucesso

    if (!isCepValido(cepOrigem) || !isCepValido(cepDestino)) {
      setErro("Os CEPs devem ser válidos para a Grande Vitória.");
      setValorFrete(null);
      return;
    }

    let valorPeso = 0;
    if (peso < 1) {
      valorPeso = 3.0;
    } else if (peso >= 1 && peso < 3) {
      valorPeso = 5.0;
    } else if (peso >= 3 && peso < 8) {
      valorPeso = 9.0;
    } else if (peso >= 8 && peso < 12) {
      valorPeso = 12.0;
    } else {
      setErro("Não é possível transportar mercadorias acima de 12Kg.");
      setValorFrete(null);
      return;
    }

    const totalFrete = valorPeso;
    setValorFrete(totalFrete);
    setValorPorPeso(valorPeso);
  };

  const solicitarFrete = () => {
    if (valorFrete !== null) {
      // Simulação de solicitação de frete
      setMensagemSucesso("Frete solicitado com sucesso!");
      // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    } else {
      setErro("Calcule o frete antes de solicitar.");
    }
  };

  return (
    <div class="container">
      <h1>Simulador de Frete</h1>
      <div class="container">
        <label htmlFor="peso">Peso da Mercadoria (Kg):</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          min="0"
          placeholder="Digite o peso em Kg"
        />
      </div>

      <div class="container">
        <label htmlFor="cepOrigem">CEP de Origem:</label>
        <input
          type="text"
          id="cepOrigem"
          value={cepOrigem}
          onChange={(e) => setCepOrigem(e.target.value)}
          placeholder="Digite o CEP de Origem"
          maxLength="8"
        />
      </div>

      <div class="container">
        <label htmlFor="cepDestino">CEP de Destino:</label>
        <input
          type="text"
          id="cepDestino"
          value={cepDestino}
          onChange={(e) => setCepDestino(e.target.value)}
          placeholder="Digite o CEP de Destino"
          maxLength="8"
        />
      </div>

      <button onClick={calcularFrete}>Calcular Frete</button>

      {valorFrete !== null && (
        <div class="container">
          <h2>Valor do Frete: R$ {valorFrete.toFixed(2)}</h2>
          {valorPorPeso !== null && (
            <p>Valor calculado com base no peso da mercadoria: R$ {valorPorPeso.toFixed(2)}</p>
          )}
          <p>O valor do frete é calculado com base no peso da mercadoria e é válido para entregas na Grande Vitória.</p>
        </div>
      )}

      {erro && <div className="erro-mensagem">{erro}</div>}
      {mensagemSucesso && <div className="sucesso-mensagem">{mensagemSucesso}</div>}

      <button onClick={solicitarFrete} className="btn btn-success" disabled={valorFrete === null}>
        Solicitar Frete
      </button>
    </div>
  );
};

export default SimuladorFrete;
