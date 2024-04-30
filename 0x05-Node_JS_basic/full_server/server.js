const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;
const hostname = '127.0.0.1';

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(port, hostname);

module.exports = app;
