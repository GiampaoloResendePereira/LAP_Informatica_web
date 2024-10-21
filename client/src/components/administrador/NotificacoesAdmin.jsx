// src/pages/NotificacoesAdmin.jsx
import React, { useState, useEffect } from 'react'; 
import '../../global.css'; // Importa o CSS para aplicar o estilo

function NotificacoesAdmin() {
  const [notificacoes, setNotificacoes] = useState([]);

  // Função simulada para buscar notificações (substitua pela chamada real à API)
  const buscarNotificacoes = () => {
    // Exemplo de dados que poderiam ser retornados de uma API
    const notificacoesExemplo = [
      { id: 1, mensagem: 'Motoboy 123 está a caminho da entrega 456.', data: '2024-10-19 09:00' },
      { id: 2, mensagem: 'Motoboy 789 completou a entrega 101.', data: '2024-10-19 08:45' },
      { id: 3, mensagem: 'Motoboy 456 iniciou a nova entrega.', data: '2024-10-19 08:30' },
    ];
    
    setNotificacoes(notificacoesExemplo);
  };

  useEffect(() => {
    // Chama a função para buscar notificações quando o componente é montado
    buscarNotificacoes();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Notificações</h1>
      {notificacoes.length === 0 ? (
        <p>Não há notificações no momento.</p>
      ) : (
        <ul className="list-group">
          {notificacoes.map((notificacao) => (
            <li key={notificacao.id} className="list-group-item">
              <strong>{notificacao.data}:</strong> {notificacao.mensagem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificacoesAdmin;
