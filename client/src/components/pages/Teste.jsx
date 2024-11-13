import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { jsPDF } from 'jspdf';

// Tabela de valores por peso
const tabelaPeso = [
  { limite: 1, valor: 3.00 },
  { limite: 3, valor: 5.00 },
  { limite: 8, valor: 9.00 },
  { limite: 12, valor: 12.00 },
  { limite: Infinity, valor: 15.00 },
];

const CalculoFreteESolicitacao = () => {
  const navigate = useNavigate();
  const [cepOrigem, setCepOrigem] = useState('');
  const [cepDestino, setCepDestino] = useState('');
  const [peso, setPeso] = useState('');
  const [valorFrete, setValorFrete] = useState(null);
  const [distancia, setDistancia] = useState(null);
  const [remetente, setRemetente] = useState({ nome: '', telefone: '', email: '', endereco: { cep: '', logradouro: '', bairro: '', cidade: '' } });
  const [destinatario, setDestinatario] = useState({ nome: '', telefone: '', email: '', endereco: { cep: '', logradouro: '', bairro: '', cidade: '' } });
  const [loading, setLoading] = useState(false);
  const [errorCepOrigem, setErrorCepOrigem] = useState('');
  const [errorCepDestino, setErrorCepDestino] = useState('');
  const [errorPeso, setErrorPeso] = useState('');

  // Funções auxiliares de validação
  const validarCep = (cep) => /^[0-9]{5}-[0-9]{3}$/.test(cep);
  const validarPeso = (peso) => /^[0-9]+(\.[0-9]{1,2})?$/.test(peso);

  // Função para calcular o valor do peso
  const calcularValorPeso = (peso) => {
    const pesoFloat = parseFloat(peso);
    for (let i = 0; i < tabelaPeso.length; i++) {
      if (pesoFloat <= tabelaPeso[i].limite) {
        return tabelaPeso[i].valor;
      }
    }
    return 0;
  };

  const calcularValorKm = (km) => km * 0.50; // Preço por km

  // Função para obter os dados de endereço via API de geolocalização
  const obterEnderecoPorCep = async (cep) => {
    const apiKey = '9f07e8b4fd844d11acf2aa0553860d7d';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${cep}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const endereco = data.results[0].components;
        return {
          logradouro: endereco.road || '',
          bairro: endereco.suburb || '',
          cidade: endereco.city || endereco.town || endereco.village || '',
        };
      }
      return null;
    } catch (error) {
      alert('Erro ao obter dados do endereço.');
      return null;
    }
  };

  const calcularDistanciaEntreCoordenadas = (coord1, coord2) => {
    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const R = 6371;
    const dLat = toRadians(coord2.lat - coord1.lat);
    const dLng = toRadians(coord2.lng - coord1.lng);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(coord1.lat)) * Math.cos(toRadians(coord2.lat)) * 
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleCepOrigemChange = async (e) => {
    const novoCep = e.target.value;
    setCepOrigem(novoCep);

    if (validarCep(novoCep)) {
      const endereco = await obterEnderecoPorCep(novoCep);
      if (endereco) {
        setRemetente((prev) => ({
          ...prev,
          endereco: { ...prev.endereco, ...endereco },
        }));
      }
    }
  };

  const handleCepDestinoChange = async (e) => {
    const novoCep = e.target.value;
    setCepDestino(novoCep);

    if (validarCep(novoCep)) {
      const endereco = await obterEnderecoPorCep(novoCep);
      if (endereco) {
        setDestinatario((prev) => ({
          ...prev,
          endereco: { ...prev.endereco, ...endereco },
        }));
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;
    setErrorCepOrigem('');
    setErrorCepDestino('');
    setErrorPeso('');
    setLoading(true);

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
        const valorKm = calcularValorKm(distanciaEmKm);
        const valorTotal = valorPeso + valorKm;

        setValorFrete(`R$ ${valorTotal.toFixed(2).replace('.', ',')}`);
      }
    }
    setLoading(false);
  };

  const handleSolicitarFrete = () => {
    // Gerar PDF da solicitação de frete
    const doc = new jsPDF();
    doc.text(`Solicitação de Frete`, 20, 20);
    doc.text(`Remetente: ${remetente.nome}`, 20, 30);
    doc.text(`Endereço Remetente: ${remetente.endereco.logradouro}, ${remetente.endereco.bairro} - ${remetente.endereco.cidade}`, 20, 40);
    doc.text(`Destinatário: ${destinatario.nome}`, 20, 50);
    doc.text(`Endereço Destinatário: ${destinatario.endereco.logradouro}, ${destinatario.endereco.bairro} - ${destinatario.endereco.cidade}`, 20, 60);
    doc.text(`Valor do Frete: ${valorFrete}`, 20, 70);
    doc.save('solicitacao_frete.pdf');
    navigate('/'); // Redireciona para a página inicial ou outra rota
  };

  return (
    <div className="container bg-light p-5">
      <h2 className="bg-dark text-white rounded p-3 mb-4">Cálculo e Solicitação de Frete</h2>

      <form onSubmit={handleSubmit}>
        {/* Dados do Remetente */}
        <h5>Remetente</h5>
        <div className="mb-3">
          <label htmlFor="remetenteNome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            value={remetente.nome}
            onChange={(e) => setRemetente({ ...remetente, nome: e.target.value })}
            placeholder="Digite o nome do remetente"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="remetenteTelefone" className="form-label">Telefone</label>
          <input
            type="text"
            className="form-control"
            value={remetente.telefone}
            onChange={(e) => setRemetente({ ...remetente, telefone: e.target.value })}
            placeholder="Digite o telefone do remetente"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="remetenteEmail" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={remetente.email}
            onChange={(e) => setRemetente({ ...remetente, email: e.target.value })}
            placeholder="Digite o email do remetente"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cepOrigem" className="form-label">CEP de Origem</label>
          <input
            type="text"
            className="form-control"
            value={cepOrigem}
            onChange={handleCepOrigemChange}
            placeholder="Digite o CEP de origem"
          />
          {errorCepOrigem && <small className="text-danger">{errorCepOrigem}</small>}
        </div>

        {/* Dados do Destinatário */}
        <h5>Destinatário</h5>
        <div className="mb-3">
          <label htmlFor="destinatarioNome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            value={destinatario.nome}
            onChange={(e) => setDestinatario({ ...destinatario, nome: e.target.value })}
            placeholder="Digite o nome do destinatário"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="destinatarioTelefone" className="form-label">Telefone</label>
          <input
            type="text"
            className="form-control"
            value={destinatario.telefone}
            onChange={(e) => setDestinatario({ ...destinatario, telefone: e.target.value })}
            placeholder="Digite o telefone do destinatário"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="destinatarioEmail" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={destinatario.email}
            onChange={(e) => setDestinatario({ ...destinatario, email: e.target.value })}
            placeholder="Digite o email do destinatário"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cepDestino" className="form-label">CEP de Destino</label>
          <input
            type="text"
            className="form-control"
            value={cepDestino}
            onChange={handleCepDestinoChange}
            placeholder="Digite o CEP de destino"
          />
          {errorCepDestino && <small className="text-danger">{errorCepDestino}</small>}
        </div>

        {/* Peso */}
        <div className="mb-3">
          <label htmlFor="peso" className="form-label">Peso (kg)</label>
          <input
            type="number"
            className="form-control"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite o peso"
          />
          {errorPeso && <small className="text-danger">{errorPeso}</small>}
        </div>

        {/* Cálculo de Frete */}
        <div className="mb-3">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Calculando...' : 'Calcular Frete'}
          </button>
        </div>

        {valorFrete && (
          <div className="mb-3">
            <h5>Valor do Frete: {valorFrete}</h5>
            <button type="button" className="btn btn-success" onClick={handleSolicitarFrete}>Solicitar Frete</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CalculoFreteESolicitacao;
