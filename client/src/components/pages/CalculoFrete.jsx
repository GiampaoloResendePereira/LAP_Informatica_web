import React, { useState } from 'react';
import axios from 'axios';

function CalculoFrete() {
  const [peso, setPeso] = useState(0);
  const [cepOrigem, setCepOrigem] = useState('');
  const [cepDestino, setCepDestino] = useState('');
  const [valorFrete, setValorFrete] = useState(null);
  const [erro, setErro] = useState('');
  const [remetente, setRemetente] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: {
      logradouro: '',
      bairro: '',
      numero: '',
      complemento: '',
      instrucoes: ''
    }
  });

  const [destinatario, setDestinatario] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: {
      logradouro: '',
      bairro: '',
      numero: '',
      complemento: '',
      instrucoes: ''
    }
  });

  // Função para buscar o endereço pelo CEP
  const buscarEndereco = (cep, tipo) => {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        const endereco = response.data;
        if (endereco.erro) {
          setErro('CEP não encontrado');
        } else {
          // Preencher os campos de endereço com a resposta da API
          if (tipo === 'origem') {
            setRemetente({
              ...remetente,
              endereco: {
                ...remetente.endereco,
                logradouro: endereco.logradouro,
                bairro: endereco.bairro,
                complemento: endereco.complemento || '',
              },
            });
          } else {
            setDestinatario({
              ...destinatario,
              endereco: {
                ...destinatario.endereco,
                logradouro: endereco.logradouro,
                bairro: endereco.bairro,
                complemento: endereco.complemento || '',
              },
            });
          }
        }
      })
      .catch(() => {
        setErro('Erro ao buscar o CEP');
      });
  };

  const calcularFrete = () => {
    // Limpar mensagem de erro
    setErro('');

    // Validação do peso
    let valorPeso = 0;
    if (peso < 1) {
      valorPeso = 3.00; // Menos de 1Kg
    } else if (peso >= 1 && peso <= 3) {
      valorPeso = 5.00; // Entre 1Kg e 3Kg
    } else if (peso > 3 && peso <= 8) {
      valorPeso = 9.00; // Entre 3Kg e 8Kg
    } else if (peso > 8 && peso <= 12) {
      valorPeso = 12.00; // Entre 8Kg e 12Kg
    } else {
      setErro('Não é possível transportar mercadorias acima de 12Kg');
      setValorFrete(null);
      return;
    }

    // Validação dos CEPs (simples)
    if (cepOrigem === '' || cepDestino === '') {
      setErro('Por favor, insira os CEPs de origem e destino.');
      setValorFrete(null);
      return;
    }

    // Calculando a distância entre os CEPs (simplificação, você pode integrar com uma API para calcular distância real)
    const distancia = Math.abs(parseInt(cepDestino) - parseInt(cepOrigem)); // Distância fictícia para exemplo
    const custoDistancia = distancia * 0.50; // Preço por km

    // Calculando o valor total do frete
    const totalFrete = valorPeso + custoDistancia;

    // Atualizando o estado com o valor do frete calculado
    setValorFrete(totalFrete.toFixed(2));
  };

  const imprimirInformacoes = () => {
    alert(`Frete calculado: R$ ${valorFrete} 
    \nRemetente: ${remetente.nome} 
    \nEndereço do Remetente: ${remetente.endereco.logradouro}, ${remetente.endereco.bairro}, ${remetente.endereco.numero} 
    \nTelefone: ${remetente.telefone} 
    \nE-mail: ${remetente.email}
    \nDestinatário: ${destinatario.nome} 
    \nEndereço do Destinatário: ${destinatario.endereco.logradouro}, ${destinatario.endereco.bairro}, ${destinatario.endereco.numero} 
    \nTelefone: ${destinatario.telefone} 
    \nE-mail: ${destinatario.email}`);
  };

  const confirmarFrete = () => {
    alert(`Frete confirmado: R$ ${valorFrete}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Cálculo de Frete</h2>

      {/* Campos para CEPs e peso */}
      <div>
        <label>CEP de Origem:</label>
        <input
          type="text"
          value={cepOrigem}
          onChange={(e) => setCepOrigem(e.target.value)}
          onBlur={() => buscarEndereco(cepOrigem, 'origem')}
        />
      </div>
      <div>
        <label>CEP de Destino:</label>
        <input
          type="text"
          value={cepDestino}
          onChange={(e) => setCepDestino(e.target.value)}
          onBlur={() => buscarEndereco(cepDestino, 'destino')}
        />
      </div>
      <div>
        <label>Peso (Kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(parseFloat(e.target.value))}
        />
      </div>

      {/* Exibição de erro */}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <button className="mb-2" onClick={calcularFrete}>Calcular Frete</button>

      {/* Exibindo o valor do frete após o cálculo */}
      {valorFrete && <h3 className="mb-5">Valor do Frete: R$ {valorFrete}</h3>}

      <br />

      {/* Formulário para dados do remetente */}
      {valorFrete && (
        <div>
          <h3>Dados do Remetente</h3>
          {/* Campos para dados do remetente */}
          <div>
            <label>Nome:</label>
            <input
              value={remetente.nome}
              onChange={(e) => setRemetente({ ...remetente, nome: e.target.value })}
            />
          </div>
          <div>
            <label>Telefone:</label>
            <input
              value={remetente.telefone}
              onChange={(e) => setRemetente({ ...remetente, telefone: e.target.value })}
            />
          </div>
          <div>
            <label>E-mail:</label>
            <input
              value={remetente.email}
              onChange={(e) => setRemetente({ ...remetente, email: e.target.value })}
            />
          </div>
          <div>
            <label>Logradouro:</label>
            <input
              value={remetente.endereco.logradouro}
              onChange={(e) => setRemetente({ ...remetente, endereco: { ...remetente.endereco, logradouro: e.target.value } })}
            />
          </div>
          <div>
            <label>Bairro:</label>
            <input
              value={remetente.endereco.bairro}
              onChange={(e) => setRemetente({ ...remetente, endereco: { ...remetente.endereco, bairro: e.target.value } })}
            />
          </div>
          <div>
            <label>Número:</label>
            <input
              value={remetente.endereco.numero}
              onChange={(e) => setRemetente({ ...remetente, endereco: { ...remetente.endereco, numero: e.target.value } })}
            />
          </div>
          <div>
            <label>Complemento:</label>
            <input
              value={remetente.endereco.complemento}
              onChange={(e) => setRemetente({ ...remetente, endereco: { ...remetente.endereco, complemento: e.target.value } })}
            />
          </div>

          {/* Formulário para dados do destinatário */}
          <h3>Dados do Destinatário</h3>
          <div>
            <label>Nome:</label>
            <input
              value={destinatario.nome}
              onChange={(e) => setDestinatario({ ...destinatario, nome: e.target.value })}
            />
          </div>
          <div>
            <label>Telefone:</label>
            <input
              value={destinatario.telefone}
              onChange={(e) => setDestinatario({ ...destinatario, telefone: e.target.value })}
            />
          </div>
          <div>
            <label>E-mail:</label>
            <input
              value={destinatario.email}
              onChange={(e) => setDestinatario({ ...destinatario, email: e.target.value })}
            />
          </div>
          <div>
            <label>Logradouro:</label>
            <input
              value={destinatario.endereco.logradouro}
              onChange={(e) => setDestinatario({ ...destinatario, endereco: { ...destinatario.endereco, logradouro: e.target.value } })}
            />
          </div>
          <div>
            <label>Bairro:</label>
            <input
              value={destinatario.endereco.bairro}
              onChange={(e) => setDestinatario({ ...destinatario, endereco: { ...destinatario.endereco, bairro: e.target.value } })}
            />
          </div>
          <div>
            <label>Número:</label>
            <input
              value={destinatario.endereco.numero}
              onChange={(e) => setDestinatario({ ...destinatario, endereco: { ...destinatario.endereco, numero: e.target.value } })}
            />
          </div>
          <div>
            <label>Complemento:</label>
            <input
              value={destinatario.endereco.complemento}
              onChange={(e) => setDestinatario({ ...destinatario, endereco: { ...destinatario.endereco, complemento: e.target.value } })}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={imprimirInformacoes}>Imprimir Informações</button>
          <button onClick={confirmarFrete}>Confirmar Frete</button>
          
          </div>

         
        </div>
      )}
    </div>
  );
}

export default CalculoFrete;
