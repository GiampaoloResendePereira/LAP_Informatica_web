import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroCliente = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const clienteData = {
            nome,
            sobrenome,
            cpf,
            telefone,
            email,
            senha,
            dataNascimento
        };

        try {
            const response = await fetch('http://localhost:5000/cadastrar-cliente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clienteData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Cadastro realizado com sucesso');
                navigate('/'); // Redireciona após o cadastro
            } else {
                console.error('Erro no cadastro:', data.message);
            }
        } catch (error) {
            console.error('Erro na conexão com o servidor:', error);
        }
    };

    const handleCancel = () => {
        navigate('/'); // Redireciona para a tela de login
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto'  }}>
            <h2>Cadastro de Cliente</h2>
            <form onSubmit={handleSubmit}>
                <div >
                    <label style={{ color: 'black' }}>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label style={{ color: 'black' }}>Sobrenome:</label>
                    <input
                        type="text"
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label style={{ color: 'black' }}>CPF:</label>
                    <input
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label style={{ color: 'black' }}>Telefone:</label>
                    <input
                        type="text"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label style={{ color: 'black' }}>Data de Nascimento:</label>
                    <input
                        type="date"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label style={{ color: 'black' }}>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label style={{ color: 'black' }}>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-danger ms-2" style={{ marginRight: '10px' }}>Cadastrar</button>
                <button type="button" className="btn btn-danger ms-2" onClick={handleCancel}>Cancelar</button>
            </form>
        </div>
    );
};

export default CadastroCliente;
