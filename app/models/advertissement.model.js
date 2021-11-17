const sql = require('./db.js');

// Create a new class with all colomns of the database table
const Advertissement = function (advertissement) {
    this.title = advertissement.title;
    this.description = advertissement.description;
    this.intro = advertissement.intro;
    this.company = advertissement.company;
    this.city = advertissement.city;
    this.duration = advertissement.duration;
    this.sector = advertissement.sector;
    this.contractType = advertissement.contractType;
};

Advertissement.create = (advertissement, result) => {
    sql.query("INSERT INTO ad SET title = ?, description = ?, city = ?, duration = ?, company = ?, sector = ?, intro = ?, contractType = ?",
    [advertissement.title, advertissement.description, advertissement.intro, advertissement.company, advertissement.city,  advertissement.duration, advertissement.sector, advertissement.contractType], 
    (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Create advertissement : ", { ...advertissement });
        result(null, { ...advertissement });
    });
};

Advertissement.viewByID = (adId, result) => {
    sql.query('SELECT * FROM ad WHERE id = ?',
    [adId],
    (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        else if (res.length) {
            console.log("Advertissement : ", res[0]);
            result(null, res[0]);
            return;
        }
    });
};

Advertissement.displayAll = result => {
    sql.query("SELECT * FROM ad", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        else {
            console.log("All advertissements: ", res);
            result(null, res);
        }
    });
};

Advertissement.updateByID = (id, advertissement, result) => {
    sql.query(
        "UPDATE ad SET title = ?, description = ?, city = ?, duration = ?, company = ?, sector = ?, intro = ?, contractType = ? WHERE id = ?",
        [advertissement.title, advertissement.description, advertissement.city, advertissement.duration, advertissement.company, advertissement.sector, advertissement.intro, advertissement.contractType, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            else 
            {
                console.log("Advertissement is updated: ", {...advertissement });
                result(null, {...advertissement });
            }
        }
    );
};

Advertissement.remove = (id, result) => {
    sql.query("DELETE FROM ad WHERE id = ?", id, (err, res) => {
        if (err) 
        {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        else 
        {
            console.log("This advertissement has been deleted", id);
            result(null, res);
        }
    });
};

module.exports = Advertissement;