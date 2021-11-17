const express = require('express');
const axios = require('axios');
const router = express.Router();

const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 20000,
  withCredentials: true,
});

router.get('/', function(req, res) {
 //axios
    axios({
        method: "GET",
        url: "http://localhost:3000/api/login",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
          let array = [];
          response.data.map((users) => {
			  array.push(users);
			});
          res.render('login', {users: array} );
      })
});

router.post('/', function(req, res) {
  const newUser = {
    email: req.body.email,
    password: req.body.password
  }
	  axios({
        method: "POST",
        url: "http://localhost:3000/api/login",
        headers: {
          "Content-Type": "application/json"
        },
        data : newUser,
        withCredentials: true
      })
      .then((result) => {
        result.data;
        if (result.data == "Email incorrect, try again")
        res.render('login', {error: result.test} );
        else{
          console.log("final = ", result.data)
          res.render('login', {test: result.data.data, req: result.data.session} );
        }
      });
  });

  router.post('/register', function(req, res) {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName, 
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      comments: req.body.comments
    }
      axios({
        method: "POST",
        url: "http://localhost:3000/api/login/register",
        headers: {
          "Content-Type": "application/json"
        },
        data : newUser
      })
  
      .then ((result) => {
        result.data;
        console.log("ugytctyciy = ", result.data)
        if (result.data == "Email already Used, try again")
          res.render('register', { alertError: result.data});
        else
        res.render('register', { alertSucess: 'Register succesfully !' });
      })
  
      .catch((err) => {
        console.log(err)
      })
    });

    router.get('/register', function(req, res) {
      res.render('register');
    });
  

module.exports = router;