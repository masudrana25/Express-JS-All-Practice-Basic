const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`Welcome ${name}! and You are ${age} years old.`);
});

app.listen(3000, () => {
  console.log('Run successfully');
})