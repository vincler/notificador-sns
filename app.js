const express = require('express');
const bodyParser = require('body-parser');
const notificador = require('./service/notificador.service');
const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/notificar', notificador.send);

app.listen(port, function () {
    console.log(`Aplicação de Notificação executando na porta ${port}!`);
});