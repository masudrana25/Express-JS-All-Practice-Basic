const LoginCollection = async (req, res) => {
  try {
    const { email, password } = req.body;
     if (email === 'masud11@gmail.com' && password === 'masud11@gmail') {
      return res.json({
      message: 'user login successfully '
      })
    }else{
      return res.json({
        message: 'invalid email and password combination'
      })
    }
  } catch (error) {
    return res.send(' Error: ' + error);
  }
};

module.exports = LoginCollection;