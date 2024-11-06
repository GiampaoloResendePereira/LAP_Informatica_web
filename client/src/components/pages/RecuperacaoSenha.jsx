import React, { useState } from 'react';

const RecuperacaoSenha = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione a lógica de recuperação de senha aqui
        console.log('Recuperação de senha para:', email);
    };

    return (
        <div className="recuperacao-container">
            <h2>Recuperação de Senha</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button className="btn btn-danger ms-2">Enviar Link de Recuperação</button>
            </form>
        </div>
    );
};

export default RecuperacaoSenha;
