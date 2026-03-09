//====================================
// ROUTES - Define todas as rotas da API
//====================================

const express = require('express');
const router = express.Router();
const MusicaController = require('../controllers/musicaController');

//====================================
// ROTAS PRINCIPAIS
//====================================
router.get('/', MusicaController.listarTodos);
router.post('/', MusicaController.criar);

//====================================
// ROTAS COM PARÂMETROS
//====================================
router.get('/:id', MusicaController.buscarPorId);
router.put('/:id', MusicaController.atualizar);
router.delete('/:id', MusicaController.deletar);

//====================================
// ROTAS DE PESQUISA ESPECÍFICA
//====================================
router.get('/nome/:nomemusica', MusicaController.buscarPorNome);

module.exports = router;