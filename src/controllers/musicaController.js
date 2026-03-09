//====================================
// CONTROLLER - Processa as requisições
//====================================

const MusicaModel = require('../models/musicaModel');

//====================================
// GET - Listar todas as músicas
//====================================
function listarTodos(req, res) {
  try {
    const musicas = MusicaModel.listarTodos();
    res.status(200).json(musicas);
  } catch (erro) {
    res.status(500).json({
      mensagem: 'Erro ao listar músicas',
      erro: erro.message
    });
  }
}

//====================================
// GET - Buscar música por ID
//====================================
function buscarPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({
        mensagem: 'ID inválido - deve ser um número'
      });
    }
    
    const musica = MusicaModel.buscarPorId(id);
    
    if (musica) {
      res.status(200).json(musica);
    } else {
      res.status(404).json({ 
        erro: 'Música não encontrada' 
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: 'Erro ao buscar música',
      erro: erro.message
    });
  }
}

//====================================
// GET - Buscar música por nome
//====================================
function buscarPorNome(req, res) {
  try {
    const { nomemusica } = req.params;
    const musica = MusicaModel.buscarPorNome(nomemusica);
    
    if (musica) {
      res.status(200).json(musica);
    } else {
      res.status(404).json({ 
        erro: 'Música não encontrada' 
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: 'Erro ao buscar música por nome',
      erro: erro.message
    });
  }
}

//====================================
// POST - Criar nova música
//====================================
function criar(req, res) {
  try {
    const { nomemusica, autor, link } = req.body;
    
    if (!nomemusica || !autor || !link) {
      return res.status(400).json({
        mensagem: 'Todos os campos são obrigatórios: nomemusica, autor, link'
      });
    }
    
    const novaMusica = MusicaModel.criar({
      nomemusica,
      autor,
      link
    });
    
    res.status(201).json(novaMusica);
  } catch (erro) {
    res.status(500).json({
      mensagem: 'Erro ao criar música',
      erro: erro.message
    });
  }
}

//====================================
// PUT - Atualizar música
//====================================
function atualizar(req, res) {
  try {
    const id = parseInt(req.params.id);
    const { nomemusica, autor, link } = req.body;
    
    if (isNaN(id)) {
      return res.status(400).json({
        mensagem: 'ID inválido'
      });
    }
    
    const musicaAtualizada = MusicaModel.atualizar(id, {
      nomemusica,
      autor,
      link
    });
    
    if (musicaAtualizada) {
      res.status(200).json(musicaAtualizada);
    } else {
      res.status(404).json({ 
        erro: 'Música não encontrada' 
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: 'Erro ao atualizar música',
      erro: erro.message
    });
  }
}

//====================================
// DELETE - Remover música
//====================================
function deletar(req, res) {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({
        mensagem: 'ID inválido'
      });
    }
    
    const musicaRemovida = MusicaModel.deletar(id);
    
    if (musicaRemovida) {
      res.status(200).json(musicaRemovida);
    } else {
      res.status(404).json({ 
        erro: 'Música não encontrada' 
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: 'Erro ao deletar música',
      erro: erro.message
    });
  }
}

//====================================
// EXPORTAÇÃO DO CONTROLLER
//====================================
module.exports = {
  listarTodos,
  buscarPorId,
  buscarPorNome,
  criar,
  atualizar,
  deletar
};