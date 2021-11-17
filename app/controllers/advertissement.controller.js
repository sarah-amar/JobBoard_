const Advertissement = require("../models/advertissement.model.js");

//CREATE A ADVERTISSEMENT
exports.create = (req, res) => {
    const advertissement = new Advertissement({
      title: req.body.title,
      description: req.body.description,
      intro: req.body.intro,
      city: req.body.city,
      duration: req.body.duration,
      contractType: req.body.contractType,
      company: req.body.company,
      sector: req.body.sector
    });
  
    // Save ad in the database
    Advertissement.create(advertissement, (err, data) => {
      if (err)
        {
          res.send({ message: err.message || "Error to creating the advertissement."});
        }
      else 
        {
          // REPONSE IN JSON
          res.send(data);
        }
    });
  };

exports.findAll = (req, res) => {
    Advertissement.displayAll((err, data) => {
      if (err) {
        res.send({ message: err.message || "Fail to display all advertissements."});
      }
      else 
      {
        //send type : JSON
        res.send(data);
      }
    });
  };

exports.view = (req, res) => {
    Advertissement.viewByID(req.params.adId, (err, data) => {
      if (err) {
        res.send({ message: err.message || "Fail to found advertissement with id."});
      } 
      else 
      {
        //DATA IN JSON
        res.send(data);
      }
    });
  };

exports.update = (req, res) => {
  Advertissement.updateByID(
    req.params.adId,
    new Advertissement(req.body),
    (err, data) => {
      if (err) {
        res.send({ message: err.message || "Fail to update advertissement with id."});
      } 
      else res.send(data);
    }
  );
  };

exports.delete = (req, res) => {
    Advertissement.remove(req.params.adId, (err, data) => {
      if (err) {
        res.send({ message: err.message || "Fail to delete advertissement with id."});
      } 
      else res.send({ message: `Advertissement was deleted successfully!` });
    });
  };