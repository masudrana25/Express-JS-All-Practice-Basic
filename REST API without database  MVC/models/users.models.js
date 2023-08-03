const { v4: uuidv4 } = require('uuid');

const Users = [
  {
    id: uuidv4(),
    userName: 'John',
    email: 'test@example.com',
  },
  {
    id: uuidv4(),
    userName: 'John 2',
    email: 'test2@example.com',
  },
];

module.exports = Users;