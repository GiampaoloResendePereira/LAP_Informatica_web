import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Atualizando para useNavigate
import logo from '../../assets/img/logo.png';
import '../../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate(); // Hook para redirecionamento

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione a lógica de autenticação aqui
        console.log('Login:', { email, senha });
    };

    const handleCadastro = () => {
        navigate('/cadastrar-cliente'); // Usando useNavigate para redirecionar
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <div className="container">
  <img 
    src={logo} 
    alt="Logo" 
    className="login-logo" 
    style={{ width: '150px', height: 'auto' }} 
  />
</div>


            <form className= "login_form" onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button className="btn btn-danger mt-2">Entrar</button>

                <button className="btn btn-danger ms-2" onClick={handleCadastro} style={{ marginTop: '10px' }}>
                    Cadastrar
                </button>
                <div>
                    <a href="/recuperacao-senha">Esqueceu a senha?</a>
                </div>
                
            </form>
        </div>
    );
};

export default Login;
