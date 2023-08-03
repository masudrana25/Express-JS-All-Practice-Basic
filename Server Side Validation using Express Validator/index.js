const express = require('express');
const app = express();
const registrationRouter = require('./routes/registration.routes');
const loginRouter = require('./routes/login.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(registrationRouter);
app.use(loginRouter)

app.get('/test', (req, res) => {
  res.send(' Testing Server...')
});

app.listen(3000, () => {
  console.log('Server Running Successfully');
});





