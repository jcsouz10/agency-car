const express = require('express');
const bodyParser = require('body-parser');
const _ = require("lodash");

const app = express();

const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'tasmanianDevil';

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  console.log('payload received', jwt_payload);
  var user = users[_.findIndex(users, { id: jwt_payload.id })];
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

var users = [
  {
    id: 1,
    name: 'jonathanmh',
    password: '%2yx4'
  },
  {
    id: 2,
    name: 'test',
    password: 'test'
  }
];

app.post("/login", function (req, res) {
  if (req.body.name && req.body.password) {
    var name = req.body.name;
    var password = req.body.password;
  }
  var user = users[_.findIndex(users, { name: name })];
  if (!user) {
    res.status(401).json({ message: "no such user found" });
  }

  if (password === user.password) {
    var payload = { id: req.body.id };
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.send({ message: "ok", token: token });
  } else {
    res.status(401).json({ message: "passwords did not match" });
  }
});

app.get('/secret', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.redirect('/testingWorked')
});

require('./server/routes')(app);
require('./server/cors')(app);

module.exports = app;