const express = require('express');
const axios = require('axios');
const router = express.Router();

//Display all users in the home view
router.get('/', function(req, res) {
    //axios
    axios({
        method: "GET",
        url: "http://localhost:3000/api/users",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then ((response) => {
          let array = [];
          response.data.map((users) => {
              array.push(users);
          });
          console.log("array = ", array);
          res.render('users', {users: array, req: req.session} );
      })
      .catch((err) => {
        console.log(err)
      })
});

// View : form create an user
router.get('/create', function(req, res) {
  res.render('users/createUser');
});

// Display form create an user
router.post('/create', function(req, res) {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName, 
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone
  }
    axios({
      method: "POST",
      url: "http://localhost:3000/api/users",
      headers: {
        "Content-Type": "application/json"
      },
      data : newUser
    })

    .then ((result) => {
      // let data = newUser;
      result.data;
      res.render('users/createUser', { alert: 'User added succesfully !' });
    })

    .catch((err) => {
      console.log(err)
    })
  });

//View : one user A REVOIR CA NE MARCHE PAS 
router.get('/view/:id', function (req, res) {
  // res.render('users/viewUser');
  let userId = req.params.userid;
  //axios
  axios({
    method: "GET",
    url: "http://localhost:3000/api/users/" + req.params.userId,
    headers: {
      "Content-Type": "application/json"
    },
  })
  .then ((result) => {
      result.data;
      res.render('users/viewUser', {result});
  })
  .catch((err) => {
    console.log(err)
  })

});
// router.get('/view/', function(req, res) {

//   axios({
//     method: "GET",
//     url: "http://localhost:3000/api/users/" + req.params.userId,
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })

//   .then ((result) => {
//       result.data;
//       res.render('users/viewUser', {data} );
//   })

//   .catch((err) => {
//     console.log(err)
//   })
//     res.render('users/viewUser')
// });

module.exports = router;