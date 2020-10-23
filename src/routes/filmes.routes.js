const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');

// RECUPERAR TODOS OS REGISTRO
router.get('/', async (req, res) => {
  try {
    const filmes = await Filme.find({});
    res.json({ error: false, filmes })
  } catch (err) {
    res.json({ error: true, message: err.message })
  }
  // res.json({ mensagem: 'PEGAR TODOS OS REGISTRO' });
});

//PEGAR SOMENTE O REGISTRO COM ID
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const filme = await Filme.findById(id);
    res.json({ error: false, filme })
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//CRIAR UM REGISTRO
router.post('/', async (req, res) => {
  try {
    const filme = req.body;
    const response = await new Filme(filme).save();
    res.json({ error: false, filme: response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }

})

//ATUALIZAR SOMENTE O REGISTRO COM ID
router.put('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const novo_filme = req.body;

    const filme = await Filme.findByIdAndUpdate(id, novo_filme);
    res.json({ error: false, filme })

  } catch (err) {
    res.json({ error: true, message: err.message });
  }
  
});

//DELETAR SOMENTE O REGISTRO COM ID
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Filme.findOneAndDelete(id);
    res.json({error: false});
  } catch (error) {
    res.json({ error: true, message: err.message });
  }

});

module.exports = router;
