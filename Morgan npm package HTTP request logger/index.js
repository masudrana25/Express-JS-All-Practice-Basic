// morgan is not working

const express = require('express');
const morgan = require("morgan");
const app = express();

app.get('/products', (req, res) => {
  res.send('Product section route');
});

app.use(morgan('div'));

app.listen(3000, () => {
  console.log('Server Running Successfully');
})