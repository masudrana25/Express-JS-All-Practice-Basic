const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/register', (req, res) => {
  res.sendFile(__dirname+'/register.html')
})

app.post('/register', (req, res) => {
  res.send(`Hello! ${req.body.fullName}. You are ${req.body.age} years old.`);
});

app.listen(3000, () => {
  console.log('Run successfully');
})