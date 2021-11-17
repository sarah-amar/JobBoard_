const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', function(req, res) {
    const newCandidat = {
      firstName: req.body.firstName,
      lastName: req.body.lastName, 
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
      id: req.body.id
    }
      axios({
        method: "POST",
        url: "http://localhost:3000/api/candidats",
        headers: {
          "Content-Type": "application/json"
        },
        data : newCandidat
      })
  
      .then ((result) => {
        result.data;
        res.redirect('/');
       
        res.render('home', { alert: 'Thanks for your apply !' });
      })
  
      .catch((err) => {
        console.log(err)
      })
    });

module.exports = router;