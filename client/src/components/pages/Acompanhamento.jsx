import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Acompanhamento() {
  const [status, setStatus] = useState('Aguardando processamento');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get('http://localhost:3001/status-frete');
        setStatus(response.data.status);
      } catch (error) {
        console.error('Erro ao buscar status:', error);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div className="container bg-light p-5">
      <h3 className="bg-dark text-white rounded p-3 mb-4">Acompanhamento da Solicitação</h3>
      <div>
        <p>Status da solicitação: {status}</p>
      </div>
    </div>
  );
}

export default Acompanhamento;
