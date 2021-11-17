const Candidat = require("../models/apply.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a ad
    const candidat = new Candidat ({
        id_ad: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    });
  
    // Save ad in the database
    Candidat.create(candidat, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Candidat."
        });
      else res.send(data);
    });
  };

exports.findAll = (req, res) => {
    Candidat.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving all candidats."
        });
      else res.send(data);
    });
  };