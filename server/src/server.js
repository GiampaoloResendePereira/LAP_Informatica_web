const express = require('express'); 
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; // Porta para o servidor

app.use(cors());
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'lap'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ', err);
    return;
  }
  console.log('Conectado ao MySQL');
});

// Endpoint para cadastro
app.post('/cadastro', (req, res) => {
  const { nome, sobrenome, cpf, telefone, dataNascimento, cep, rua, numero, bairro, cidade, estado, email, senha } = req.body;

  const sql = `INSERT INTO clientes (nome, sobrenome, cpf, telefone, dataNascimento, cep, rua, numero, bairro, cidade, estado, email, senha)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(sql, [nome, sobrenome, cpf, telefone, dataNascimento, cep, rua, numero, bairro, cidade, estado, email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar cliente: ', err);
      res.status(500).send('Erro ao cadastrar cliente');
      return;
    }
    res.status(201).send('Cliente cadastrado com sucesso');
  });
});

// Endpoint para login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const sql = `SELECT * FROM usuarios WHERE email = ? AND senha = ?`;
  connection.query(sql, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao fazer login: ', err);
      res.status(500).send('Erro ao fazer login');
      return;
    }

    if (results.length > 0) {
      const user = results[0];
      const role = user.email === 'admin@gmail.com' ? 'admin' : 'cliente'; // Defina as regras de administrador
      res.status(200).json({ role });
    } else {
      res.status(401).send('Email ou senha incorretos');
    }
  });
});

// Endpoint para buscar dados do cliente logado
app.get('/cliente-dados', (req, res) => {
  const cpf = req.query.cpf;  // Exemplo de como pode ser obtido o CPF (usando query string)

  const sql = `SELECT * FROM clientes WHERE cpf = ?`;

  connection.query(sql, [cpf], (err, results) => {
    if (err || results.length === 0) {
      console.error('Erro ao buscar dados do cliente: ', err);
      res.status(401).send('Não autorizado');
      return;
    }

    const cliente = results[0];
    res.status(200).json({ 
      nome: cliente.nome, 
      sobrenome: cliente.sobrenome,
      cpf: cliente.cpf,
      telefone: cliente.telefone,
      dataNascimento: cliente.dataNascimento,
      endereco: {
        cep: cliente.cep,
        rua: cliente.rua,
        numero: cliente.numero,
        bairro: cliente.bairro,
        cidade: cliente.cidade,
        estado: cliente.estado
      },
      email: cliente.email
    });
  });
});

// Endpoint para calcular frete
app.post('/calcular-frete', (req, res) => {
  const { cepOrigem, cepDestino, peso } = req.body;

  const apiKey = '9f07e8b4fd844d11acf2aa0553860d7d';
  const urlOrigem = `https://api.opencagedata.com/geocode/v1/json?q=${cepOrigem}&key=${apiKey}`;
  const urlDestino = `https://api.opencagedata.com/geocode/v1/json?q=${cepDestino}&key=${apiKey}`;

  Promise.all([fetch(urlOrigem), fetch(urlDestino)])
    .then(async ([resOrigem, resDestino]) => {
      const dataOrigem = await resOrigem.json();
      const dataDestino = await resDestino.json();

      const coordOrigem = dataOrigem.results[0].geometry;
      const coordDestino = dataDestino.results[0].geometry;

      const distanciaEmKm = calcularDistanciaEntreCoordenadas(coordOrigem, coordDestino);

      const sqlPeso = `SELECT valor FROM tabelaParametrosFrete WHERE tipo='peso' AND limite >= ? ORDER BY limite ASC LIMIT 1`;
      const sqlKm = `SELECT valor FROM tabelaParametrosFrete WHERE tipo='km' AND limite >= ? ORDER BY limite ASC LIMIT 1`;

      connection.query(sqlPeso, [peso], (err, resultadoPeso) => {
        if (err) {
          console.error('Erro ao buscar valor por peso: ', err);
          res.status(500).send('Erro ao calcular frete');
          return;
        }

        connection.query(sqlKm, [distanciaEmKm], (err, resultadoKm) => {
          if (err) {
            console.error('Erro ao buscar valor por km: ', err);
            res.status(500).send('Erro ao calcular frete');
            return;
          }

          const valorPeso = resultadoPeso[0].valor;
          const valorKm = resultadoKm[0].valor;
          const valorTotal = valorPeso + valorKm * distanciaEmKm;

          res.status(200).json({ distanciaEmKm, valorFrete: valorTotal.toFixed(2) });
        });
      });
    })
    .catch((error) => {
      console.error('Erro ao obter coordenadas: ', error);
      res.status(500).send('Erro ao calcular frete');
    });
});

const calcularDistanciaEntreCoordenadas = (coord1, coord2) => {
  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const R = 6371; // Raio da Terra em km

  const dLat = toRadians(coord2.lat - coord1.lat);
  const dLng = toRadians(coord2.lng - coord1.lng);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(coord1.lat)) * Math.cos(toRadians(coord2.lat)) * 
            Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Retorna a distância em km
};

// Endpoint para obter parâmetros de frete
app.get('/parametros-frete', (req, res) => {
  const sql = 'SELECT * FROM tabelaParametrosFrete';

  connection.query(sql, (err, resultados) => {
    if (err) {
      console.error('Erro ao buscar parâmetros de frete: ', err);
      res.status(500).send('Erro ao buscar parâmetros de frete');
      return;
    }

    res.status(200).json({ tabelaPeso: resultados.filter(r => r.tipo === 'peso'), tabelaKm: resultados.filter(r => r.tipo === 'km') });
  });
});

// Endpoint para atualizar parâmetros de frete
app.put('/parametros-frete', (req, res) => {
  const { id, limite, valor, tipo } = req.body;

  const sql = `UPDATE tabelaParametrosFrete SET limite = ?, valor = ?, tipo = ? WHERE id = ?`;
  connection.query(sql, [limite, valor, tipo, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar parâmetro de frete: ', err);
      res.status(500).send('Erro ao atualizar parâmetro de frete');
      return;
    }
    res.status(200).send('Parâmetro de frete atualizado com sucesso');
  });
});

// Endpoint para salvar informações do cálculo
app.post('/salvar-calculo', (req, res) => {
  const { cepOrigem, cepDestino, peso, distancia, valorFrete } = req.body;

  const sql = `INSERT INTO calculosFrete (cepOrigem, cepDestino, peso, distancia, valorFrete) VALUES (?, ?, ?, ?, ?)`;
  connection.query(sql, [cepOrigem, cepDestino, peso, distancia, valorFrete], (err, result) => {
    if (err) {
      console.error('Erro ao salvar cálculo de frete: ', err);
      res.status(500).send('Erro ao salvar cálculo de frete');
      return;
    }
    res.status(201).send('Cálculo de frete salvo com sucesso');
  });
});

// Endpoint para salvar solicitação de frete
app.post('/solicitar-frete', (req, res) => {
  const { cepOrigem, cepDestino, peso, distancia, valorFrete } = req.body;

  const sql = `INSERT INTO solicitacoesFrete (cepOrigem, cepDestino, peso, distancia, valorFrete) VALUES (?, ?, ?, ?, ?)`;
  connection.query(sql, [cepOrigem, cepDestino, peso, distancia, valorFrete], (err, result) => {
    if (err) {
      console.error('Erro ao salvar solicitação de frete: ', err);
      res.status(500).send('Erro ao salvar solicitação de frete');
      return;
    }
    res.status(201).send('Solicitação de frete salva com sucesso');
  });
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Endpoint para buscar informações das entregas
app.get('/gerenciar-entregas', (req, res) => {
  const sql = `
    SELECT 
        c.id AS cliente_id,
        c.nome AS cliente_nome,
        c.cpf AS cliente_cpf,
        c.telefone AS cliente_telefone,
        c.email AS cliente_email,
        s.id AS solicitacao_id,
        s.cepOrigem,
        s.cepDestino,
        s.peso,
        s.distancia,
        s.valorFrete AS valorFreteSolicitacao,
        s.dataSolicitacao,
        f.id AS calculo_id,
        f.peso AS pesoCalculo,
        f.distancia AS distanciaCalculo,
        f.valorFrete AS valorFreteCalculo,
        f.dataCalculo
    FROM clientes c
    LEFT JOIN solicitacoesFrete s ON c.id = s.cliente_id
    LEFT JOIN calculosFrete f ON c.id = f.cliente_id
    ORDER BY s.dataSolicitacao DESC;
  `;

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar entregas: ', err);
      res.status(500).send('Erro ao buscar entregas');
      return;
    }

    // Enviar os resultados encontrados para o cliente
    res.status(200).json(results);
  });
});

