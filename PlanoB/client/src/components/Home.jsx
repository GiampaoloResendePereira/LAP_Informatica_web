import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedUser');
    navigate('/');
  };

  return (
    <div>
      <h2>Bem-vindo(a)!</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Home;
