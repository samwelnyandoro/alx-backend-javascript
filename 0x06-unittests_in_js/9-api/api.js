const express = require('express');

const port = 7865;
const hostname = '127.0.0.1';
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system')
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(port, hostname, () => {
  console.log('API available on localhost port 7865');
});
