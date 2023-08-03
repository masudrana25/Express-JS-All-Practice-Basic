// must use chalk v-4.1.2
// npm i chalk@^4.1.2s

const express = require('express');
const chalk = require('chalk');
const app = express();

app.get('/products', (req, res) => {
  res.send('<h1>Product section route</h1>');
});

console.log(chalk.red.underline("aayush"));
console.log(chalk.red.underline.bold("this is undelined bold sentence"));

const warning = chalk.red;
const welcome = chalk.green;
console.log(welcome("GFG"));
console.log(warning("Restricted Zone"));

app.listen(3000, () => {
  console.log(chalk.red('Server Running Successfully'));
})