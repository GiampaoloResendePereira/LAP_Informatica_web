import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecuperacaoSenha = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione a lógica de recuperação de senha aqui
        console.log('Recuperação de senha para:', email);
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
        }}
      >
            <h2>Recuperação de Senha</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button className="btn btn-danger ms-2">Enviar Link de Recuperação</button>
            </form>
        </div>
        </div>
    );
};

export default RecuperacaoSenha;
