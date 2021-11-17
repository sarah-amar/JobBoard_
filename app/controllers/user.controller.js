const User = require("../models/user.model.js");

//CREATE A USER
exports.create = (req, res) => {
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
      phone: req.body.phone
    });
  
    // Save User in the database
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    User.displayAll((err, data) => {
      if (err) {
        res.send({ message: err.message || "Fail to display all users."});
      }
      else 
      {
        //send type : JSON
        res.send(data);
      }
    });
  };

  exports.view = (req, res) => {
    User.viewByID(req.params.userId, (err, data) => {
      if (err) {
        res.send({ message: err.message || "Fail to found user with id."});
      } 
      else 
      {
        //DATA IN JSON
        res.send(data);
      }
    });
  };

  exports.update = (req, res) => {
    User.updateByID(
      req.params.userId,
      new User(req.body),
      (err, data) => {
        if (err) {
          res.send({ message: err.message || "Fail to update user with id."});
        } 
        else res.send(data);
      }
    );
  };

  exports.delete = (req, res) => {
    User.remove(req.params.userId, (err, data) => {
      if (err) {
        res.send({ message: err.message || "Fail to delete user with id."});
      } 
      else res.send({ message: `User was deleted successfully!` });
    });
  };

