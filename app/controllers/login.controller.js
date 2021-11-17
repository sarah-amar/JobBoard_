const UserLogin = require("../models/login.model.js");
const User = require("../models/register.model.js");



exports.register = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    comments: req.body.comments
  });

  // Save User in the database
  User.register(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else{
      res.send(data);
      console.log("here = ", data);
    } 
  });
};

exports.findOne = (req, res) => {
    UserLogin.findById(req.params.userId, new UserLogin(req.body), (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Userwith id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving User with id " + req.params.userId
          });
        }
      } 
      else {
        req.session.firstname = data.firstName;
        req.session.lastname = data.lastName;
        req.session.phone = data.phone;
        req.session.email = data.email;
        req.session.password = data.password;
        req.session.success = true;
        const test = {data : data, session : req.session};
		    res.send(test);
	}
    });
  };

  exports.findAll = (req, res) => {
    UserLogin.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else res.send(data);
    });
  };