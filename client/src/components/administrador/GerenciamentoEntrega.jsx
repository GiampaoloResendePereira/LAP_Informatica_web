// src/pages/GerenciamentoEntrega.jsx
import React, { useState } from 'react';
import '../../styles/GerenciamentoEntregas.css';

function Gerenciamento() {
  const [filters, setFilters] = useState({
    codigo: '',
    cliente: '',
    motoboy: '',
    status: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    console.log('Filtros aplicados:', filters);
  };

  return (
    <div className="container">
      <h4 className="title">Gerenciamento de Entregas</h4>

      {/* Filtros de Pesquisa */}
      <form onSubmit={handleFilterSubmit} className="filter-form">
        <input
          type="text"
          placeholder="Pesquisar Código"
          name="codigo"
          value={filters.codigo}
          onChange={handleFilterChange}
          className="filter-input"
        />
        <input
          type="text"
          placeholder="Pesquisar Cliente"
          name="cliente"
          value={filters.cliente}
          onChange={handleFilterChange}
          className="filter-input"
        />
        <input
          type="text"
          placeholder="Pesquisar Motoboy"
          name="motoboy"
          value={filters.motoboy}
          onChange={handleFilterChange}
          className="filter-input"
        />
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">Status</option>
          <option value="pendente">Pendente</option>
          <option value="em_andamento">Em andamento</option>
          <option value="concluido">Concluído</option>
          <option value="cancelado">Cancelado</option>
        </select>
        <button type="submit" className="filter-button">Pesquisar</button>
      </form>

      {/* Tabela de Entregas */}
      <table className="delivery-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Cliente</th>
            <th>Motoboy</th>
            <th>Status</th>
            <th>Data Agendamento</th>
            <th>Data Entrega</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* Exemplo de dados na tabela */}
          <tr>
            <td>001</td>
            <td>Cliente A</td>
            <td>Motoboy 1</td>
            <td>Pendente</td>
            <td>20/10/2024</td>
            <td>—</td>
            <td>
              <button className="action-button">Detalhes</button>
            </td>
          </tr>
          <tr>
            <td>002</td>
            <td>Cliente B</td>
            <td>Motoboy 2</td>
            <td>Em andamento</td>
            <td>19/10/2024</td>
            <td>—</td>
            <td>
              <button className="action-button">Detalhes</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Gerenciamento;
