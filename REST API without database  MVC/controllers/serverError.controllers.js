const serverErrorController = (err, req, res, next) => {
  res.status(500).json({ message: 'server error' })
};

module.exports = serverErrorController;