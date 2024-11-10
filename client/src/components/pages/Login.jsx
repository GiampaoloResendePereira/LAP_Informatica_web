import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';


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
        <div className="login-container" style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
            <img src={logo} alt="Logo" className="login-logo" style={{ width: '150px', height: 'auto', marginBottom: '20px' }} />

            <form className="login-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                    <label style={{ color: 'black' }}>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Digite seu email"
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                <div>
                    <label style={{ color: 'black' }}>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        placeholder="Digite sua senha"
                        style={{ width: '100%', padding: '8px' }}
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
    );
};

export default Login;
