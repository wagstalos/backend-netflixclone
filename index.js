const express = require ('express');
const morgan = require ('morgan');
const app = express();

app.use(morgan('dev'));

// RECUPERAR TODOS OS REGISTRO
app.get('/', (req, res) =>{
    res.json({ mensagem: 'PEGAR TODOS OS REGISTRO'});
});

//PEGAR SOMENTE O REGISTRO COM ID
app.get('/:id', (req, res) =>{
    const id = req.params.id;
    res.json({ mensagem: `PEGAR SOMENTE O REGISTRO COM ID: ${id}`});
});

//CRIAR UM REGISTRO
app.post('/', (req, res) => {
    const body = req.body;
    res.json({mensagem: 'Criar usuário'});
})

//ATUALIZAR SOMENTE O REGISTRO COM ID
app.put('/:id', (req, res) =>{
    const id = req.params.id;
    res.json({ mensagem: `ATUALZAR SOMENTE O REGISTRO COM O ID: ${id}`});
});

//DELETAR SOMENTE O REGISTRO COM ID
app.delete('/:id', (req, res) =>{
    const id = req.params.id;
    res.json({ mensagem: `DELETAR SOMENTE O REGISTRO COM O ID: ${id}`});
});


app.listen(3000, () =>{
    console.log('Meu servidor está funcionando');
})