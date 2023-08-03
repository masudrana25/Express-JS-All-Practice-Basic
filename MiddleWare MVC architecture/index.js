const express = require('express');
const app = express();
app.use(express.urlencoded({ extends: true }));

const userRouter = require('./routes/users.routes');
const productRouter = require('./routes/product.routes');

app.use(userRouter);
app.use(productRouter)

app.listen(3000, () => {
  console.log('Running server Successfully');
});