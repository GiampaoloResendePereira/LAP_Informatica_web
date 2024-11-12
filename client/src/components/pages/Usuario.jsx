import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Lógica de autenticação simplificada
        if (email === 'admin@gmail.com' && senha === 'admin123') {
            // Redireciona para o perfil do administrador
            navigate('/administrador');
        } else if (email === 'cliente@gmail.com' && senha === 'cliente123') {
            // Redireciona para o perfil do cliente
            navigate('/cliente');
        } else {
            // Exibe uma mensagem de erro para login inválido
            alert('Email ou senha incorretos');
        }
    };

    const handleCadastro = () => {
        navigate('/cadastrar-cliente');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', // para ocupar a altura total da tela
            backgroundColor: '#f5f5f5' // opcional, para uma cor de fundo suave
          }}>

<div
  className="login-container"
  style={{
    padding: '20px',
    width: '80%',        // Define a largura como 80% da tela
    maxWidth: '600px',   // Limita a largura máxima a 600px
    margin: '0 auto',
    textAlign: 'center',
    background: '#f0f0f0' // Cinza clarinho
  }}
>
            <img src={logo} alt="Logo" className="login-logo" style={{ width: '250px', height: 'auto', marginBottom: '20px' }} />

            <form className="login-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Email:</label>
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
                    <label htmlFor="nome" className="form-label">Senha:</label>
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
                <button type="button" className="btn btn-danger" onClick={handleCadastro} style={{ padding: '10px' }}>
                    Cadastrar
                </button>
                <a href="/recuperacao-senha" style={{ marginTop: '10px', color: 'black' }}>
                    Esqueceu a senha?
                </a>
            </form>
        </div>

        </div>
    );
};

export default Login;
