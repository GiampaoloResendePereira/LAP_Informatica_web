import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import '../../global.css';

function EditarCadastroCliente() {
  const [cpfPesquisa, setCpfPesquisa] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('danger');

  const buscarClientePorCpf = (cpf) => {
    const clienteExemplo = {
      nome: 'João Silva',
      cpf: '12345678901',
      email: 'joao@email.com',
      telefone: '123456789',
      dataNascimento: '1990-01-01',
    };

    if (cpf === clienteExemplo.cpf) {
      setNome(clienteExemplo.nome);
      setCpf(clienteExemplo.cpf);
      setEmail(clienteExemplo.email);
      setTelefone(clienteExemplo.telefone);
      setDataNascimento(clienteExemplo.dataNascimento);
      setShowAlert(true);
      setAlertMessage('Cliente encontrado com sucesso!');
      setAlertVariant('success');
    } else {
      setShowAlert(true);
      setAlertMessage('Cliente não encontrado!');
      setAlertVariant('danger');
    }
  };

  const validateForm = () => {
    if (!nome || !email || !telefone || !dataNascimento) {
      setAlertMessage('Por favor, preencha todos os campos obrigatórios.');
      setAlertVariant('danger');
      setShowAlert(true);
      return false;
    }
    if (senha !== confirmarSenha) {
      setAlertMessage('As senhas não coincidem.');
      setAlertVariant('danger');
      setShowAlert(true);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log('Dados do cliente:', { nome, cpf, email, telefone, dataNascimento, senha });
  };

  const handleDelete = () => {
    if (cpf) {
      if (window.confirm(`Tem certeza que deseja deletar o cliente com CPF: ${cpf}?`)) {
        console.log('Deletando cliente com CPF:', cpf);
        resetFields();
        setShowAlert(true);
        setAlertMessage('Cliente deletado com sucesso.');
        setAlertVariant('success');
      }
    } else {
      setShowAlert(true);
      setAlertMessage('Nenhum cliente selecionado para deletar.');
      setAlertVariant('danger');
    }
  };

  const resetFields = () => {
    setNome('');
    setCpf('');
    setEmail('');
    setTelefone('');
    setDataNascimento('');
    setSenha('');
    setConfirmarSenha('');
  };

  return (
    <div className="container mt-5">
      <h4 className= "estilo" style={{ color: 'white' }}>Editar Cadastro de Cliente</h4>

      {showAlert && <Alert variant={alertVariant}>{alertMessage}</Alert>}

      <Form.Group>
        <Form.Label>Pesquisar por CPF:</Form.Label>
        <Form.Control
          type="text"
          value={cpfPesquisa}
          onChange={(e) => setCpfPesquisa(e.target.value)}
          placeholder="Digite o CPF"
          maxLength="11"
        />
        <Button variant="danger" onClick={buscarClientePorCpf} className="mb-4" >
        Pesquisar
      </Button>
      </Form.Group>

      <h4 className= "estilo" style={{ color: 'white' }}>Cadastro de Cliente</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome completo"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>CPF:</Form.Label>
          <Form.Control
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite o CPF"
            maxLength="11"
            readOnly
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Telefone:</Form.Label>
          <Form.Control
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite o telefone"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Data de Nascimento:</Form.Label>
          <Form.Control
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Senha:</Form.Label>
          <Form.Control
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a senha"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirmar Senha:</Form.Label>
          <Form.Control
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme a senha"
            required
          />
        </Form.Group>

        <div className="button-group mt-4">
          <Button variant="danger" type="submit" style={{ marginRight: '15px' }}>
            Salvar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Deletar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default EditarCadastroCliente;
