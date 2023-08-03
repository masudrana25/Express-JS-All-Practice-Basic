const notFoundController = (req, res, next) => {
  res.send('<h1> 404 error ! Route not found . </h1>')
};

module.exports = notFoundController;