module.exports = app => {
    const login = require("../controllers/login.controller.js");
  
    // Create a new user
    app.post("/api/login/register", login.register);

    app.post("/api/login", login.findOne);
    app.get("/api/login", login.findAll);

    // // Retrieve all ad
    // app.get("/api/advertissements", advertissements.findAll);
  
    // // Retrieve a single User with adId
    // app.get("/api/advertissements/:adId", advertissements.findOne);
  
    // // Update a User with adId
    // app.put("/api/advertissements/:adId", advertissements.update);
  
    // // Delete a User with adId
    // app.delete("/api/advertissements/:adId", advertissements.delete);
  
    // // Create a new Advertissement
    // app.delete("/api/advertissements", advertissements.deleteAll);

  };