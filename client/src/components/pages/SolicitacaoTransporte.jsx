// src/pages/SolicitacaoFrete.jsx
import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import '../../styles/global.css'; // Importando o CSS global

const SolicitacaoFrete = () => {
  const [clienteNome, setClienteNome] = useState("");
  const [recebedorNome, setRecebedorNome] = useState("");
  const [cepOrigem, setCepOrigem] = useState("");
  const [cepDestino, setCepDestino] = useState("");
  const [telefoneCliente, setTelefoneCliente] = useState("");
  const [telefoneRecebedor, setTelefoneRecebedor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou processá-los
    alert("Solicitação de frete registrada com sucesso!");
    // Resetar os campos após o envio
    setClienteNome("");
    setRecebedorNome("");
    setCepOrigem("");
    setCepDestino("");
    setTelefoneCliente("");
    setTelefoneRecebedor("");
  };

  const handlePrint = () => {
    const printContent = `
      Nome do Cliente: ${clienteNome}\n
      Nome do Recebedor: ${recebedorNome}\n
      CEP de Origem: ${cepOrigem}\n
      CEP de Destino: ${cepDestino}\n
      Telefone do Cliente: ${telefoneCliente}\n
      Telefone do Recebedor: ${telefoneRecebedor}
    `;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`<pre>${printContent}</pre>`);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="solicitacao-frete-container d-flex justify-content-center align-items-center min-vh-100">
      <Card className="solicitacao-frete-form shadow p-4" style={{ width: '400px' }}>
       
        <h4 className="text-center">Cadastro de Entrega</h4>
        <Form onSubmit={handleSubmit} className="solicitacao-frete-inputs">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Nome do Cliente"
              value={clienteNome}
              onChange={(e) => setClienteNome(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Nome do Recebedor"
              value={recebedorNome}
              onChange={(e) => setRecebedorNome(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="CEP de Origem"
              value={cepOrigem}
              onChange={(e) => setCepOrigem(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="CEP de Destino"
              value={cepDestino}
              onChange={(e) => setCepDestino(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              placeholder="Telefone do Cliente"
              value={telefoneCliente}
              onChange={(e) => setTelefoneCliente(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              placeholder="Telefone do Recebedor"
              value={telefoneRecebedor}
              onChange={(e) => setTelefoneRecebedor(e.target.value)}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="primary" type="submit" className="mt-4">
              Registrar Entrega
            </Button>
            <Button variant="success" className="mt-4" onClick={handlePrint}>
              Imprimir Informações
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default SolicitacaoFrete;
