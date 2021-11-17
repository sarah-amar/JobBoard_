module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    // CREAYE
    app.post("/api/users", users.create);
  
    // FIND ALL
    app.get("/api/users", users.findAll);
  
    // FIND BY ID
    app.get("/api/users/:userId", users.view);
  
    // UPDATE
    app.put("/api/users/:userId", users.update);
  
    // DELETE
    app.delete("/api/users/:userId", users.delete);
  
  };