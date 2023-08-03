const RegistrationCollection = async (req, res) => {
  try {
    const { name, email, password, dob } = req.body;
    const newUser = {
      name,
      email,
      password,
      dob
    };
    return res.json({
      message: 'user Crested successfully ',
      newUser
    })
  } catch (error) {
    return res.send(' Error: ' + error);
  }
};

// export default RegistrationCollection;
module.exports = RegistrationCollection;