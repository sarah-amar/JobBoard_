module.exports = app => {
    const candidats = require("../controllers/apply.controller.js");
  
    // Create a new Ad
    app.post("/api/candidats", candidats.create);

    app.get("/api/candidats", candidats.findAll);
  
  };