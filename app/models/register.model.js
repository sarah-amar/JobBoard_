const sql = require('./db.js');

  const User = function(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
    this.phone = user.phone;
  };

  User.register = (newUser, result) => {
    sql.query(`SELECT * FROM user WHERE email = "${newUser.email}" AND password = "${newUser.password}"`, (err, res) => {
      if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }

      if (res.length != 0) {
          console.log("first = Email already Used, try again");
          result(null, "Email already Used, try again");
          return;
      }
      else if (res.length == 0){
        sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, null);
            return;
          }
      
          console.log("Create user: ", { id: res.insertId, ...newUser });
          result(null, { id: res.insertId, ...newUser });
        });   
      }
  });
  };

module.exports = User;
