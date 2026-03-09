//====================================
// MODEL - Gerencia os dados das músicas
//====================================

let musicas = [
  {
    id: 1,
    nomemusica: "Tennessee Whiskey",
    autor: "Chris Stapleton",
    link: "https://www.youtube.com/watch?v=4zAThXFOy2c",
  },
  {
    id: 2,
    nomemusica: "The Weary Kind",
    autor: "Ryan Bingham",
    link: "https://www.youtube.com/watch?v=Yhu9iLPbc44",
  },
  {
    id: 3,
    nomemusica: "Caroline",
    autor: "Colter Wall",
    link: "https://www.youtube.com/watch?v=SlB92-6VfIg",
  },
];

let proximoId = 4;

//====================================
// FUNÇÕES DO MODEL
//====================================

function listarTodos() {
  return musicas;
}

function buscarPorId(id) {
  return musicas.find(m => m.id === id);
}

function buscarPorNome(nome) {
  return musicas.find(m => m.nomemusica.toLowerCase() === nome.toLowerCase());
}

function criar(dadosMusica) {
  const novaMusica = {
    id: proximoId++,
    ...dadosMusica
  };
  musicas.push(novaMusica);
  return novaMusica;
}

function atualizar(id, dadosAtualizados) {
  const index = musicas.findIndex(m => m.id === id);
  
  if (index === -1) {
    return null;
  }
  
  musicas[index] = {
    ...musicas[index],
    nomemusica: dadosAtualizados.nomemusica || musicas[index].nomemusica,
    autor: dadosAtualizados.autor || musicas[index].autor,
    link: dadosAtualizados.link || musicas[index].link
  };
  
  return musicas[index];
}

function deletar(id) {
  const index = musicas.findIndex(m => m.id === id);
  
  if (index === -1) {
    return null;
  }
  
  const musicaRemovida = musicas.splice(index, 1);
  return musicaRemovida[0];
}

//====================================
// EXPORTAÇÃO DO MODEL
//====================================
module.exports = {
  listarTodos,
  buscarPorId,
  buscarPorNome,
  criar,
  atualizar,
  deletar
};