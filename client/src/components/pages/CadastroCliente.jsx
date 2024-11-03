// src/components/CadastroCliente.jsx
import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import axios from "axios";

function CadastroCliente() {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const cadastrarCliente = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/clientes", {
        cpf,
        nome,
        email,
        telefone,
        dataNascimento,
        senha,
      });
      if (response.status === 201) {
        setShowSuccess(true);
      }
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  };

  return (
    <Container className="p-4">
      <h2>Cadastro de Cliente</h2>
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          Cliente cadastrado com sucesso!
        </Alert>
      )}
      <Form>
        <Form.Group controlId="cpf" className="mb-3">
          <Form.Label>CPF:</Form.Label>
          <Form.Control
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite o CPF"
          />
        </Form.Group>
        <Form.Group controlId="nome" className="mb-3">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
          />
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o email"
          />
        </Form.Group>
        <Form.Group controlId="telefone" className="mb-3">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite o telefone"
          />
        </Form.Group>
        <Form.Group controlId="dataNascimento" className="mb-3">
          <Form.Label>Data de Nascimento:</Form.Label>
          <Form.Control
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="senha" className="mb-3">
          <Form.Label>Senha:</Form.Label>
          <Form.Control
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite uma senha"
          />
        </Form.Group>
        <Button variant="primary" onClick={cadastrarCliente}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default CadastroCliente;
