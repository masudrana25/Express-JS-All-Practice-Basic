const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/triangle', (req, res) => {
  res.sendFile(__dirname + '/triangle.html');
});
app.get('/circle', (req, res) => {
  res.sendFile(__dirname + '/circle.html');
});

app.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const area = base * height;
  res.send(`Area of The Traingle is ${area.toFixed(2)} square meter.`);
})
app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  res.send(`Area of The Circle is ${area.toFixed(2)} square meter.`)
})

app.listen(3000, () => {
  console.log('Your app is listening at http://localhost/3000');
})