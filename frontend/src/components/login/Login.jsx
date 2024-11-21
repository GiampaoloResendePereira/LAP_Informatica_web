import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import logo from './logo.svg'; // Caminho para o seu logo

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, senha });
      localStorage.setItem('token', response.data.token);
      if (response.data.role === 'admin') {
        history.push('/administrador');
      } else if (response.data.role === 'motoboy') {
        history.push('/motoboy');
      } else {
        history.push('/cliente');
      }
    } catch (error) {
      alert('Erro ao fazer login, verifique suas credenciais.');
    }
  };

  const handleCadastro = () => {
    history.push('/cadastro-cliente');
  };

  const handleRecuperacaoSenha = () => {
    history.push('/recuperacao-senha');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div
        className="login-container"
        style={{
          padding: '20px',
          width: '80%',
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
          background: '#f0f0f0',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}
      >
        <img src={logo} alt="Logo" className="login-logo" style={{ width: '250px', height: 'auto', marginBottom: '20px' }} />
        <form className="login-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="senha" className="form-label">Senha:</label>
            <input
              type="password"
              className="form-control"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              placeholder="Digite sua senha"
            />
          </div>
          <button type="submit" className="btn btn-danger" style={{ padding: '10px', marginTop: '10px' }}>
            Entrar
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCadastro} style={{ padding: '10px' }}>
            Cadastrar
          </button>
          <button type="button" className="btn btn-link" onClick={handleRecuperacaoSenha} style={{ marginTop: '10px', color: 'black', textDecoration: 'none' }}>
            Esqueceu a senha?
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
