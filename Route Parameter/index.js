const express = require('express');
const app = express();

app.get('/userId/:id/userAge/:age', (req, res) => {
  //http://localhost:3000/userId/111/userAge/88
  const { id, age } = req.params;
  res.send(`Welcome to Home page of my Server id : ${id} , age : ${age}`);
  res.end();
});

app.listen(3000, () => {
  console.log('Run successfully');
})