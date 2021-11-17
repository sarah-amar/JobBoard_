const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', function (req, res) {
  //axios
  axios({
    method: "GET",
    url: "http://localhost:3000/api/advertissements",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      let array = [];
      response.data.map((advertissements) => {
        array.push(advertissements);
      });
      res.render('home', { advertissements: array, req: req.session });
    });
});



router.get('/advertissements', function (req, res) {
  //axios
  axios({
    method: "GET",
    url: "http://localhost:3000/api/advertissements",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      let array = [];
      response.data.map((advertissements) => {
        array.push(advertissements);
      });
      res.render('advertissements/all', { advertissements: array });
    });
});

router.get('/advertissements/create', function(req, res) {
  res.render('advertissements/create');
});

router.post('/advertissements/create', function(req, res) {
  const newAd = {
    title: req.body.title,
    description: req.body.description, 
    intro: req.body.intro,
    company: req.body.company,
    sector: req.body.sector,
    duration: req.body.duration,
    contractType: req.body.contractType,
    city: req.body.city
  }
    axios({
      method: "POST",
      url: "http://localhost:3000/api/advertissements",
      headers: {
        "Content-Type": "application/json"
      },
      data : newAd
    })

    .then ((result) => {
      // let data = newUser;
      result.data;
      res.render('advertissements/create', { alert: 'Advertissement added succesfully !' });
    })

    .catch((err) => {
      console.log(err)
    })
  });

router.get('/advertissements/view/:id', function (req, result) {
  const test = req.params.id;
  console.log(test);
  //axios
  axios({
    method: "GET",
    url: `http://localhost:3000/api/advertissements/${test}`,
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((response) => {
      var data = [];
      data = response.data;
      // console.log(data);
      // array = JSON.stringify(response.data);
      // console.log(data);
      // console.log(response.data);
      // console.log(array.title);
    
      // console.log(JSON.stringify(response.data))
      // console.log(array.title);
      result.render('advertissements/view', {data: [response.data]});
      // result.redirect([data], '/advertissements/view/:test');
    
    })    
    .catch((err) => {
      console.log(err)
    })
});

module.exports = router;