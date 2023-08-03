const productsArray = require('../models/products.model');
const path = require('path');

exports.getProduct = (req, res) => {
  res.sendFile(path.join(__dirname+'/../views/products.html'));
};

exports.saveProduct = (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);
  const product = { name, price };
  productsArray.push(product);
  // res.send(usersArray);
  res.status(201).json({
    success: true,
    productsArray,
  })
};