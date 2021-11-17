const sql = require('./db.js');

const UserLogin = function(user) {
	this.email = user.email;
	this.password = user.password;
  };

UserLogin.findById = (userID, user, result) => {
	console.log("user = ", user);
    sql.query(`SELECT * FROM user WHERE email = "${user.email}" AND password = "${user.password}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (!res.length) {
            console.log("NOT found advertissement: ", res[0]);
            result(null, "Email incorrect, try again");
            return;
        }
        if (res.length) {
            console.log("found advertissement: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found advertissement with the id
        result({ kind: "not_found" }, null);
    });
};

UserLogin.getAll = result => {
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

module.exports = UserLogin;
