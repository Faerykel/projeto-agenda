require('dotenv').config();  // Chamada correta da função config
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('Servidor rodando com Express!');
});

// Iniciar um servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;  // Corrigido para module.exports
