const express = require ('express');
const app = express();
const porta = 3000;


app.use(express.json());

// const bd = require('./bd');

const nota = require('./rotas/nota');
const usuario = require('./rotas/usuario');



app.use('/usuario', usuario);
app.use('/nota' , nota);


app.get('/', (req, res) =>
res.send("index.aqui")
);

app.listen(porta, () => {
console.log(' O tus tus ta é porta:',3000);
});

