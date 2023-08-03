const express = require('express');
const app = express();

app.get('/', (req, res) => {
  //http://localhost:3000
  // postman a giye header input diye send korty hby.
  const name = req.header('name');
  const id = req.header('id');
  res.send(`Welcome to Home page of my Server name : ${name} , id : ${id}`);
  res.end();
});

app.listen(3000, () => {
  console.log('Run successfully');
})