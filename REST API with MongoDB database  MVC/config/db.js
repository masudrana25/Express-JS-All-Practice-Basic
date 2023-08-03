const mongoose = require('mongoose');
const config = require('./config');

const DbUrl = config.db.url;


mongoose.connect(DbUrl)
  .then(() => {
    console.log('mongo atlas connected successfully');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })