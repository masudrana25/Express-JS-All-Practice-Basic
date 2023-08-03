const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const { id, name } = req.query;
  res.send(`Welcome to Home page of my Server name : ${name} , id : ${id}`);
  res.end();
});

app.listen(3000, () => {
  console.log('Run successfully');
})