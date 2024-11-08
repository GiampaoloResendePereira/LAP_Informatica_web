import React, { useState } from 'react';
import '../../styles/SolicitacaoFrete.css';

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
  const [erroCep, setErroCep] = useState('');
  const [erroPeso, setErroPeso] = useState('');
  const [freteConfirmado, setFreteConfirmado] = useState(false); // Novo estado para controlar a confirmação de frete

  // Função para validar CEP (formato #####-###)
  const validarCep = (cep) => {
    const regexCep = /^[0-9]{5}-[0-9]{3}$/;
    return regexCep.test(cep);
  };

  // Função para validar o peso
  const validarPeso = (peso) => {
    if (peso <= 0 || peso > 12) {
      setErroPeso('O peso deve ser entre 0 e 12 kg.');
      return false;
    }
    setErroPeso('');
    return true;
  };

  // Função para calcular frete
  const calcularFrete = () => {
    // Validação dos CEPs
    if (!validarCep(cepOrigem)) {
      setErroCep('CEP de origem inválido. Formato correto: #####-###.');
      return;
    }

    if (!validarCep(cepDestino)) {
      setErroCep('CEP de destino inválido. Formato correto: #####-###.');
      return;
    }

    // Validação do peso
    if (!validarPeso(peso)) return;

    // Verificação dos outros campos
    if (largura && altura && comprimento && peso) {
      // Cálculo do valor baseado no peso
      let valorPeso = 0;
      if (peso <= 1) valorPeso = 3;
      else if (peso <= 3) valorPeso = 5;
      else if (peso <= 8) valorPeso = 9;
      else if (peso <= 12) valorPeso = 12;

      // Calculando o valor do frete com base na distância (simplificação usando um valor fixo)
      const distancia = calcularDistancia(cepOrigem, cepDestino);
      const tempoDeslocamento = calcularTempo(distancia);

      // Fórmula simples para o cálculo de frete com base no peso e distância
      const valorFrete = valorPeso + (distancia * 0.1) + (tempoDeslocamento * 0.05);
      setPrecoFrete(valorFrete.toFixed(2)); // Formatar para 2 casas decimais
      setConfirmandoFrete(true);
      setErroCep(''); // Limpa a mensagem de erro, se houver
    } else {
      alert('Preencha todos os campos para calcular o frete.');
    }
  };

  // Função para simular o cálculo de distância entre os CEPs
  const calcularDistancia = (cepOrigem, cepDestino) => {
    // Exemplo simplificado de cálculo de distância entre dois CEPs
    return Math.abs(parseInt(cepDestino.replace('-', '')) - parseInt(cepOrigem.replace('-', ''))) % 100; // Distância em km
  };

  // Função para simular o cálculo do tempo de deslocamento (em horas)
  const calcularTempo = (distancia) => {
    return (distancia / 60).toFixed(2); // Tempo de deslocamento (em horas) para cada 60km de distância
  };

  // Função para confirmar solicitação de frete
  const confirmarFrete = () => {
    setSolicitacaoEnviada(true);
    setConfirmandoFrete(false);
    setFreteConfirmado(true); // Atualiza o estado indicando que o frete foi confirmado
  };

  // Função para imprimir a solicitação para o motoboy
  const imprimirParaMotoboy = () => {
    window.print(); // Essa função chama o comando de impressão no navegador
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Solicitação de Frete</h2>

      {/* Formulário Inicial */}
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', backgroundColor: 'black', color: 'white' }}>
        <div>
          <label>Digite CEP de origem:</label>
          <input
            type="text"
            value={cepOrigem}
            onChange={(e) => setCepOrigem(e.target.value)}
            placeholder="Ex: 12345-678"
          />
        </div>
        
        <div>
          <label>Digite CEP do destinatário:</label>
          <input
            type="text"
            value={cepDestino}
            onChange={(e) => setCepDestino(e.target.value)}
            placeholder="Ex: 12345-678"
          />
        </div>
        {erroCep && <p style={{ color: 'red' }}>{erroCep}</p>}
        {erroPeso && <p style={{ color: 'red' }}>{erroPeso}</p>}
        
        <div>
          <h4>Tamanho e peso do pacote</h4>
          <p>O pacote pode ter até 30 kg e até 100 cm em cada lado. A soma dos lados não deve ultrapassar 200 cm.</p>
          <label>Largura (cm):</label>
          <input type="number" value={largura} onChange={(e) => setLargura(e.target.value)} />
          <label>Altura (cm):</label>
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
          <label>Comprimento (cm):</label>
          <input type="number" value={comprimento} onChange={(e) => setComprimento(e.target.value)} />
          <label>Peso (kg):</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <br />
        <button onClick={calcularFrete} className='btn'>Calcular Frete</button>
      </div>

      {/* Resultado do Cálculo do Frete */}
      {precoFrete && confirmandoFrete && (
        <div style={{ backgroundColor: '', color: 'white', padding: '0px', marginTop: '0px', textAlign: 'center' }}>
          <p>Preço do Frete: R$ {precoFrete}</p>
          <p>Deseja solicitar frete?</p>
          <button onClick={confirmarFrete} className='btn2'>Sim, Solicitar Frete</button>
        </div>
      )}

      {/* Botões após a confirmação do frete */}
      {freteConfirmado && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>Frete confirmado! Dados prontos para motoboy.</p>
          <button onClick={imprimirParaMotoboy} className='btn3'>Imprimir para Motoboy</button>
        </div>
      )}

      {/* Formulário Completo de Solicitação */}
      {solicitacaoEnviada && (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', backgroundColor: 'black', color: 'white' }}>
          <h3>Dados do Remetente</h3>
          <label>Logradouro:</label>
          <input type="text" />
          <label>Bairro:</label>
          <input type="text" />
          <label>Número (opcional):</label>
          <input type="text" />
          <label>Complemento (opcional):</label>
          <input type="text" />
          <label>Nome do Remetente:</label>
          <input type="text" />
          <label>Celular:</label>
          <input type="text" />
          <label>CPF ou CNPJ:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />

          <h3>Dados do Destinatário</h3>
          <label>Logradouro:</label>
          <input type="text" />
          <label>Bairro:</label>
          <input type="text" />
          <label>Número (opcional):</label>
          <input type="text" />
          <label>Complemento (opcional):</label>
          <input type="text" />
          <label>Instruções (opcional):</label>
          <input type="text" />
        </div>
      )}
    </div>
  );
}

export default SolicitacaoFrete;
