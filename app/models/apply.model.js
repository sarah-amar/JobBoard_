const sql = require('./db.js');

const Candidat = function (candidat) {
    this.id_ad = candidat.id_ad;
    this.firstName = candidat.firstName;
    this.lastName = candidat.lastName;
    this.email = candidat.email;
    this.phone = candidat.phone;
    this.message = candidat.message;
};

Candidat.create = (newCandidat, result) => {
    sql.query("INSERT INTO applyToAd SET ?", newCandidat, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Create ad : ", { ...newCandidat });
        result(null, { ...newCandidat }, res);
    });
};

Candidat.getAll = result => {
    sql.query("SELECT * FROM applyToAd", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("all candidat: ", res);
        result(null, res);
    });
};

module.exports = Candidat;