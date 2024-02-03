// CRIANDO A API E UTILIZANDO NO FRONTEND
const cors = require('cors');
const express = require('express');
const app = express();

// Permite que a API seja usada por uma porta diferente
app.use(cors());

// API para ser consumida no frontend
app.get('/', (req, res) => {
  return res.json([
    { name: 'Elton'},
    { name: 'Ericson'}
  ]);
});

app.listen('4567');