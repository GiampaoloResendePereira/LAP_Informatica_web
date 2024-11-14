const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuração do pool de conexões com o banco de dados PostgreSQL
const pool = new Pool({
  user: 'lap',
  host: 'localhost',
  database: 'lap',
  password: '',
  port: 5000,
});

// Endpoint para buscar endereço por CEP
app.get('/getAddressByCEP/:cep', async (req, res) => {
  const { cep } = req.params;
  try {
    const result = await pool.query('SELECT * FROM enderecos WHERE cep = $1', [cep]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Endereço não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar o endereço' });
  }
});

// Endpoint para buscar CEPs por localização (bairro ou logradouro)
app.get('/getCEPsByLocation', async (req, res) => {
  const { bairro, logradouro } = req.query;
  try {
    const query = 'SELECT * FROM enderecos WHERE bairro = $1 OR logradouro ILIKE $2';
    const values = [bairro, `%${logradouro}%`];
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Nenhum CEP encontrado para a localização informada' });
    }
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar CEPs' });
  }
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
