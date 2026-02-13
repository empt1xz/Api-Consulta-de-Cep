const express = require("express");
const axios = require("axios");
const PORT = 2906;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

app.get("/api/cep/:cep", async (req, res) => {
  const { cep } = req.params;

  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (data.erro) {
      res.send("Deu erro aqui");
    }
    return res.json(data);
  } catch (error) {
    return res.send("Deu erro dnv");
  }
});

app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT))