//====================================
// ARQUIVO PRINCIPAL - Configuração do Servidor
//====================================

const express = require('express');
const musicaRoutes = require('./src/routes/musicaRoutes');

const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(express.json());

// Registrar rotas
app.use('/musicas', musicaRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log('============================================================');
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`🎵 Acesse http://localhost:${PORT}/musicasy para ver a playlist`);
  console.log('=============================================================');
});