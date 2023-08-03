const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//just number
app.get('/users/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`<h2>ID : ${id}</h2>`);
});
//just text ab,AB
app.get('/users/:title([a-zA-Z]+)', (req, res) => {
  const title = req.params.title;
  res.send(`<h2>title : ${title}</h2>`);
});
//  Mixed text, number aksathy
app.get('/users/:mixed([a-zA-Z0-9]+)', (req, res) => {
  const mixed = req.params.mixed;
  res.send(`<h2>mixed : ${mixed}</h2>`);
});
//  Limited word Use
app.get('/users/:limited_word([0-9]{3})', (req, res) => {
  const limited_word = req.params.limited_word;
  res.send(`<h2>limited_word : ${limited_word}</h2>`);
});

//error er jonno
app.get('*', (req, res) => {
  res.status(404).send(`Sorry! 404 Not Found. Invalid URL. `);
});


app.listen(3000, () => {
  console.log('Run successfully');
})