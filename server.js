const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-hbs');
const exphbs = require('express-handlebars');
const expressValidator =  require('express-validator') ;
const session =  require('express-session') ;
const cookieParser =  require('cookie-parser');
const cors = require('cors');

const app = express();

//Body Parser (middleware to pass data in json)
app.use(bodyParser.urlencoded({ extended: true })); //Parse application / x-www-form-urlencoded
app.use(bodyParser.json()); //Parse application / json


//----------------VIEWS ROUTES-----------------------//
// HANDLEBARS CONFIG
// app.engine('hbs', exphbs({
//   defaultLayout: 'main',
//   extname: '.hbs'
// }));

// app.set('view engine', 'hbs');

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/app/views');

app.use(express.static(__dirname + '/app/public/css'));
app.use(express.static( __dirname + '/app/public/js'));


app.use(expressValidator());
app.use(session({secret: 'obydul', saveUninitialized: true, resave: false, cookie: {
  httpOnly: false,
  secure: false
}}));
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET'],
  credentials: true
}));

//----------------VIEWS ROUTES--------------------------//
//ROUTE HOME
const home = require('./app/routes/advertissement');
app.use("/", home);


const user = require('./app/routes/user');
app.use("/users", user);

const login = require('./app/routes/login');
app.use("/login", login);

const apply = require('./app/routes/apply');
app.use("/", apply);

//----------------API ROUTES--------------------------//
require("./app/routes/user.routes.js")(app); //API USERS
require("./app/routes/advertissement.routes.js")(app); //API ADVERTISSEMENTS
require("./app/routes/login.routes.js")(app); //API ADVERTISSEMENTS
require("./app/routes/apply.routes.js")(app); //API APPLY TO AN ADVERTISSEMENT

//---------------SERVER IS RUNNING---------------------//
app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000.");
});