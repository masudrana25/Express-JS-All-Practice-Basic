const express = require('express');
const app = express();

const myMiddleWare = (req,res,next) => {
  console.log('This is from middleWare');
  next();
}

app.use(myMiddleWare);
// app.get('/', myMiddleWare, (req, res) => {
//   res.send('<h1>Welcome</h1>')
// });

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Home</h1>')
});
app.get('/about', (req, res) => {
  res.send('<h1>Welcome to About section </h1>')
});

// different url use korly nicher response dekhaby
app.use((req, res, next) => {
  res.send("<h1>404 Error. Server not Found</h1>")
})

app.listen(3000, () => {
  console.log('Running Successfully');
})