import React, { useState } from 'react';

// Função para calcular a distância entre dois CEPs usando uma API externa
const calcularDistancia = (cepOrigem, cepDestino) => {
  // Aqui você pode integrar com uma API externa como ViaCEP ou Google Maps para calcular a distância
  // Para simplicidade, vamos assumir uma distância fixa entre os CEPs de 10 km
  return 10; // Exemplo de distância entre os CEPs em quilômetros
};

function SolicitacaoFrete() {
  // Estados para os campos iniciais
  const [cepOrigem, setCepOrigem] = useState('');
  const [cepDestino, setCepDestino] = useState('');
  const [largura, setLargura] = useState('');
  const [altura, setAltura] = useState('');
  const [comprimento, setComprimento] = useState('');
  const [peso, setPeso] = useState('');

  // Estados para cálculo e detalhes adicionais
  const [precoFrete, setPrecoFrete] = useState(null);
  const [confirmandoFrete, setConfirmandoFrete] = useState(false);
  const [solicitacaoEnviada, setSolicitacaoEnviada] = useState(false);

  // Função para calcular o frete
  const calcularFrete = () => {
    // Verificar se os CEPs são válidos da Grande Vitória
    if (!validarCep(cepOrigem) || !validarCep(cepDestino)) {
      alert('Os CEPs devem ser da Grande Vitória (ES).');
      return;
    }

    // Validar os campos
    if (!cepOrigem || !cepDestino || !largura || !altura || !comprimento || !peso) {
      alert('Preencha todos os campos para calcular o frete.');
      return;
    }

    // Calcular o volume do pacote (em cm³)
    const volumePacote = largura * altura * comprimento;

    // Definir taxas para cálculo
    const taxaBase = 10; // Taxa fixa
    const taxaPeso = 5; // Taxa por kg
    const taxaVolume = 0.002; // Taxa por cm³ (exemplo: R$ 2 a cada 1000 cm³)
    const taxaDistancia = 0.10; // Taxa por quilômetro

    // Calcular a distância entre os CEPs (exemplo fixo de 10km, substituir com a API de distâncias)
    const distancia = calcularDistancia(cepOrigem, cepDestino);

    // Cálculos
    const custoPeso = peso * taxaPeso;
    const custoVolume = volumePacote * taxaVolume;
    const custoDistancia = distancia * taxaDistancia;

    // Calcular o preço total do frete
    const precoTotalFrete = taxaBase + custoPeso + custoVolume + custoDistancia;

    // Exibir preço
    setPrecoFrete(precoTotalFrete);
    setConfirmandoFrete(true);
  };

  // Função para confirmar solicitação de frete
  const confirmarFrete = () => {
    // Lógica para confirmar e enviar a solicitação
    setSolicitacaoEnviada(true);
    setConfirmandoFrete(false);
  };

  // Função para validar CEPs da Grande Vitória (ES)
  const validarCep = (cep) => {
    const cepNumerico = cep.replace(/\D/g, '');
    const regexGrandeVitoria = /^(29[0-9]{3}|291[0-9]{3}|292[0-9]{3}|293[0-9]{3})$/;
    return regexGrandeVitoria.test(cepNumerico);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Solicitação de Frete</h2>

      {/* Formulário Inicial */}
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <div>
          <label>Digite CEP de origem:</label>
          <input type="text" value={cepOrigem} onChange={(e) => setCepOrigem(e.target.value)} />
        </div>
        <div>
          <label>Digite CEP do destinatário:</label>
          <input type="text" value={cepDestino} onChange={(e) => setCepDestino(e.target.value)} />
        </div>
        <div>
          <h4>Tamanho e peso do pacote</h4>
          <label>Largura (cm):</label>
          <input type="number" value={largura} onChange={(e) => setLargura(e.target.value)} />
          <label>Altura (cm):</label>
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
          <label>Comprimento (cm):</label>
          <input type="number" value={comprimento} onChange={(e) => setComprimento(e.target.value)} />
          <label>Peso (kg):</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <button onClick={calcularFrete}>Calcular Frete</button>
      </div>

      {/* Resultado do Cálculo do Frete */}
      {precoFrete && confirmandoFrete && (
        <div style={{ backgroundColor: 'red', color: 'white', padding: '20px', marginTop: '20px' }}>
          <p>Preço do Frete: R$ {precoFrete.toFixed(2)}</p>
          <p>Deseja solicitar frete?</p>
          <button onClick={confirmarFrete}>Sim, Solicitar Frete</button>
        </div>
      )}

      {/* Formulário Completo de Solicitação */}
      {solicitacaoEnviada && (
        <div style={{ marginTop: '20px' }}>
          <h3>Dados do Remetente</h3>
          {/* Dados do Remetente */}
          <button>Confirmar Frete</button>
          <button>Imprimir para Motoboy</button>
        </div>
      )}

      {/* Mensagem de Confirmação Final */}
      {solicitacaoEnviada && (
        <div style={{ marginTop: '20px', color: 'green' }}>
          <p>Solicitação enviada com sucesso!</p>
          <button onClick={() => window.location.reload()}>Voltar para o início</button>
        </div>
      )}
    </div>
  );
}

export default SolicitacaoFrete;
