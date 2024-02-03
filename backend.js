// CRIANDO A API E UTILIZANDO NO BACKEND
const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

// Permite que a API seja acessada por uma porta diferente
app.use(cors());

app.get("/", async (req, res) => {
  try {
    // response é a resposta do axios, porém desestruturo (tirar de dentro) a data do response
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    return res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen("4567");
