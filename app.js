import express from 'express';
import fetch from 'node-fetch';
const app = express();

// 1 - Questão

app.get('/alunos/todos', (req, res) => {
  res.send([
    { Nome: 'Jose Alfredo', instituição: 'IFCE', matéria: 'projeto de sistema web 2' }
  ]);
}); 

// 2 - Questão

app.get('/moeda/:valor_real', async (req, res) => {
  const url = `https://economia.awesomeapi.com.br/USD-BRL`;
  const response = await fetch(url);
  const valor_dollar = await response.json();
  const real = Number(req.params.valor_real)
  const dollar = Number(valor_dollar[0].high)  
  const valor_convertido = real * dollar;
  res.json({
    "real": real,
    "dollar": dollar,
    "valor em dollar": valor_convertido 
  });
});

app.listen(3000, () => {
  console.log('Rodando na porta 3000');
});

// 3 - Questão

//https://github.com/JoseAlfredoAlencar/atividade5.git