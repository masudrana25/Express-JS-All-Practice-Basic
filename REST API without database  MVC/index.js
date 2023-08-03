require("dotenv").config();
const app = require('./app');
let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Running server Successfully');
});
