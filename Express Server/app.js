const express = require('express');
const app = express();


app.get('/',(req,res) => {
  res.send('<h1>Express get method</h1>');
  res.end();
})

app.post('/',(req,res) => {
  res.send('Express post method');
  res.end();
})

app.put('/',(req,res) => {
  res.send('Express put method');
  res.end();
})

app.delete('/',(req,res) => {
  res.send('Express delete method');
  res.end();
})
module.exports = app;