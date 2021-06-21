import express from 'express';

// @types/express
const app = express();

/**
 * GET=> busca informações
 * POST =>  inserir (criar) informações
 * PUT => altera informações ou uma informação de dados
 * DELETE => remove um dado
 * PATCH => altera informação especifica
 */

app.get('/test', (req, res) => {
    //request => tudo que entra 
    //esponse => tudo que sai 
    return res.send('access successful')
})

app.post('/test-post', (req, res) => {
    return res.send('access successful on test-post')
})

//http://localhost:3000/
app.listen(3000, () => console.log('Server is running'))