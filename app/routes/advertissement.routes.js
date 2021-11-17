module.exports = app => {
    const advertissements = require("../controllers/advertissement.controller.js");
  
    // CREATE AN ADVERTISSEMENT
    app.post("/api/advertissements", advertissements.create);
  
    // FIND ALL ADVERTISSEMENTS
    app.get("/api/advertissements", advertissements.findAll);
  
    // VIEW ONE ADVERTISSEMENT BY ID
    app.get("/api/advertissements/:adId", advertissements.view);
  
    // UPDATE AN ADVERTISSEMENT BY ID
    app.put("/api/advertissements/:adId", advertissements.update);
  
    // DELETE AN ADVERTITSSEMENT WITH ID
    app.delete("/api/advertissements/:adId", advertissements.delete);
  };