const sql = require("./db.js");

const User = function (user) {
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.email = user.email;
  this.password = user.password;
  this.phone = user.phone;
};

User.create = (user, result) => {
  sql.query('INSERT INTO user SET firstName = ?, lastName = ?, email = ?, password = ?, phone = ?',
    [user.firstName, user.lastName, user.email, user.password, user.phone],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("Create user: ", { ...user });
      result(null, { ...user });
    });
};


User.viewByID = (userId, result) => {
  sql.query('SELECT * FROM ad WHERE id = ?',
  [userId],
  (err, res) => {
      if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }
      else if (res.length) {
          console.log("User : ", res[0]);
          result(null, res[0]);
          return;
      }
  });
};

User.displayAll = result => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

User.updateByID = (id, user, result) => {
  sql.query(
    "UPDATE user SET firstName = ?, lastName = ?, email = ?, password = ?, phone = ? WHERE id = ?",
    [user.firstName, user.lastName, user.email, user.password, user.phone, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      else 
      {
        console.log("updated user: ", {...user });
        result(null, {...user });
      }
    }
  );
};

User.remove = (id, result) => {
  sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
      if (err) 
      {
          console.log("error: ", err);
          result(null, err);
          return;
      }
      else 
      {
          console.log("This user has been deleted", id);
          result(null, res);
      }
  });
};

module.exports = User;