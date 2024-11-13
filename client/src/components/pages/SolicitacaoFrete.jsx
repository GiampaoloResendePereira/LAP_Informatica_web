<<<<<<< HEAD
import React, { useState } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';

function SolicitacaoFrete() {
  const [remetente, setRemetente] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: {
      cep: '',
      logradouro: '',
      bairro: '',
      numero: '',
      complemento: '',
=======
import React, { useState } from "react";

function SolicitacaoFrete() {
  // Estados para dados do remetente e destinatário
  const [remetente, setRemetente] = useState({
    nome: "",
    telefone: "",
    email: "",
    endereco: {
      logradouro: "",
      bairro: "",
      numero: "",
      complemento: "",
>>>>>>> 65bd2915cc4e0389b07c5efe3188c58f43b50c79
    },
  });

  const [destinatario, setDestinatario] = useState({
<<<<<<< HEAD
    nome: '',
    telefone: '',
    email: '',
    endereco: {
      cep: '',
      logradouro: '',
      bairro: '',
      numero: '',
      complemento: '',
    },
  });

  const [frete, setFrete] = useState(null); // Estado para armazenar o valor do frete

  // Função para buscar endereço pelo CEP usando ViaCEP
  const fetchAddressByCep = async (cep, setAddress) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro } = response.data;
      setAddress((prev) => ({
        ...prev,
        endereco: { ...prev.endereco, logradouro, bairro },
      }));
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };

  // Função para calcular o frete (simulada)
  const calcularFrete = () => {
    if (!remetente.endereco.cep || !destinatario.endereco.cep) {
      alert('Por favor, preencha os CEPs para cálculo do frete.');
      return;
    }

    // Simulando um cálculo de frete baseado na distância (usando CEPs)
    const distancia = Math.abs(
      parseInt(remetente.endereco.cep.substring(0, 5)) -
      parseInt(destinatario.endereco.cep.substring(0, 5))
    );

    // Simulando o preço do frete (valor por quilômetro)
    const precoPorKm = 2.5; // Exemplo: R$2.50 por quilômetro
    const valorFrete = distancia * precoPorKm;

    // Definindo o valor do frete
    setFrete(valorFrete.toFixed(2)); // Armazena o valor formatado
  };

  // Função para gerar PDF
  const gerarPdf = () => {
    const doc = new jsPDF();
    doc.text('Folha de OS - Motoboy', 10, 10);
    doc.text(`Remetente: ${remetente.nome}`, 10, 20);
    doc.text(`Telefone: ${remetente.telefone}`, 10, 30);
    doc.text(`Email: ${remetente.email}`, 10, 40);
    doc.text(`Endereço: ${remetente.endereco.logradouro}, ${remetente.endereco.bairro}`, 10, 50);
    doc.text(`Destinatário: ${destinatario.nome}`, 10, 60);
    doc.text(`Telefone: ${destinatario.telefone}`, 10, 70);
    doc.text(`Email: ${destinatario.email}`, 10, 80);
    doc.text(`Endereço: ${destinatario.endereco.logradouro}, ${destinatario.endereco.bairro}`, 10, 90);
    doc.text(`Valor do Frete: R$ ${frete}`, 10, 100);

    // Gerando o PDF
    doc.save('folha_os_motoboy.pdf');
=======
    nome: "",
    telefone: "",
    email: "",
    endereco: {
      logradouro: "",
      bairro: "",
      numero: "",
      complemento: "",
    },
  });

  // Função para enviar a solicitação de frete
  const handleSolicitarFrete = () => {
    // Ações para processar o envio do frete
    console.log("Solicitação enviada:", { remetente, destinatario });
    alert("Solicitação de frete enviada!");
>>>>>>> 65bd2915cc4e0389b07c5efe3188c58f43b50c79
  };

  return (
    <div className="container bg-light p-5">
<<<<<<< HEAD
      <h3 className="bg-dark text-white rounded p-3 mb-4">Dados do Remetente</h3>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Nome:</label>
        <input
          className="form-control"
          value={remetente.nome}
          onChange={(e) => setRemetente({ ...remetente, nome: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Telefone:</label>
        <input
          className="form-control"
          value={remetente.telefone}
          onChange={(e) => setRemetente({ ...remetente, telefone: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">E-mail:</label>
        <input
          className="form-control"
          value={remetente.email}
          onChange={(e) => setRemetente({ ...remetente, email: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">CEP:</label>
        <input
          className="form-control"
          value={remetente.endereco.cep}
          onChange={(e) => {
            const newCep = e.target.value;
            setRemetente({ ...remetente, endereco: { ...remetente.endereco, cep: newCep } });
            if (newCep.length === 8) fetchAddressByCep(newCep, setRemetente);
          }}
        />
      </div>

      {/* Dados do Destinatário */}
      <h3 className="bg-dark text-white rounded p-3 mb-4">Dados do Destinatário</h3>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Nome:</label>
        <input
          className="form-control"
          value={destinatario.nome}
          onChange={(e) => setDestinatario({ ...destinatario, nome: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Telefone:</label>
        <input
          className="form-control"
          value={destinatario.telefone}
          onChange={(e) => setDestinatario({ ...destinatario, telefone: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">E-mail:</label>
        <input
          className="form-control"
          value={destinatario.email}
          onChange={(e) => setDestinatario({ ...destinatario, email: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">CEP:</label>
        <input
          className="form-control"
          value={destinatario.endereco.cep}
          onChange={(e) => {
            const newCep = e.target.value;
            setDestinatario({ ...destinatario, endereco: { ...destinatario.endereco, cep: newCep } });
            if (newCep.length === 8) fetchAddressByCep(newCep, setDestinatario);
          }}
        />
      </div>

      <br />

      {/* Botão para calcular o frete */}
      <button onClick={calcularFrete} className="btn btn-danger">Confirmar Frete</button>

      <br />

      {/* Exibição do valor do frete */}
      {frete !== null && (
        <div className="mb-3">
          <h4 className="bg-dark text-white rounded p-3 mb-4">Preço do Frete: R$ {frete}</h4>
        </div>
      )}

      {/* Botão para gerar o PDF */}
      {frete && (
        <button onClick={gerarPdf} className="btn btn-primary mt-4">
          Gerar Folha de OS (PDF)
        </button>
      )}
=======
      {/* Dados do Remetente */}
      <h3 className="bg-dark text-white rounded p-3 mb-4">Dados do Remetente</h3>
      {Object.entries(remetente).map(([key, value]) => (
        typeof value === 'object' ? (
          Object.entries(value).map(([subKey, subValue]) => (
            <div className="mb-3" key={`${key}.${subKey}`}>
              <label className="form-label">{subKey.charAt(0).toUpperCase() + subKey.slice(1)}:</label>
              <input
                className="form-control"
                value={subValue}
                onChange={(e) =>
                  setRemetente({
                    ...remetente,
                    [key]: { ...value, [subKey]: e.target.value },
                  })
                }
              />
            </div>
          ))
        ) : (
          <div className="mb-3" key={key}>
            <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <input
              className="form-control"
              value={value}
              onChange={(e) => setRemetente({ ...remetente, [key]: e.target.value })}
            />
          </div>
        )
      ))}

      {/* Dados do Destinatário */}
      <h3 className="bg-dark text-white rounded p-3 mb-4">Dados do Destinatário</h3>
      {Object.entries(destinatario).map(([key, value]) => (
        typeof value === 'object' ? (
          Object.entries(value).map(([subKey, subValue]) => (
            <div className="mb-3" key={`${key}.${subKey}`}>
              <label className="form-label">{subKey.charAt(0).toUpperCase() + subKey.slice(1)}:</label>
              <input
                className="form-control"
                value={subValue}
                onChange={(e) =>
                  setDestinatario({
                    ...destinatario,
                    [key]: { ...value, [subKey]: e.target.value },
                  })
                }
              />
            </div>
          ))
        ) : (
          <div className="mb-3" key={key}>
            <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <input
              className="form-control"
              value={value}
              onChange={(e) => setDestinatario({ ...destinatario, [key]: e.target.value })}
            />
          </div>
        )
      ))}

      {/* Botão de Solicitação */}
      <button onClick={handleSolicitarFrete} className="btn btn-secondary mt-4">
        Solicitar Frete
      </button>
>>>>>>> 65bd2915cc4e0389b07c5efe3188c58f43b50c79
    </div>
  );
}

export default SolicitacaoFrete;
