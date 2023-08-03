const express = require('express');
const app = express();
const cors = require('cors');
const getAllUsers = require('./routes/users.route');
require('./config/db');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

//get all users
app.use(getAllUsers);

// Routes Error handle
app.use((req, res,next) => {
  res.status(404).send('<h1>404 Error! Routes Not Found.</h1>')
});

//Server Error Handle
app.use((err,req, res,next) => {
  res.status(500).send('<h1>Server Error</h1>')
});
module.exports = app;