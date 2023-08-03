const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users.route');
const homeRouter = require('./routes/home.route');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// home route set
app.use(homeRouter);

//users route set
app.use(userRouter)

//route not found error
app.use((req, res, next) => {
  res.send('<h1> 404 error ! Route not found . </h1>')
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'server error' })
});


module.exports = app;

