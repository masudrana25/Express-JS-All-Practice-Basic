const express = require("express");
const app = express();
const userRouter = require("./Routes/users.route")

app.use('/api/user',userRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Home page of my Server');
  res.end()
});

app.get('/contact', (req, res) => {
  res.redirect('/api/user/login');
});

app.use('/masud', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use((req, res) => {
  res.send('<h1>404 Error !!! Page Not Found</h1>')
  res.end()
});

module.exports = app;