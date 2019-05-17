'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

require('babel-polyfill');

var _User = require('./controller/User');

var _User2 = _interopRequireDefault(_User);

var _Pricelist = require('./controller/Pricelist');

var _Pricelist2 = _interopRequireDefault(_Pricelist);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server.js
_dotenv2.default.config();
// const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;

// import Auth from './src/middleware/Auth';

// import ReflectionWithJsObject from './src/usingJSObject/controllers/Reflection';
// import Reflection from './src/controller/Reflection';
var app = (0, _express2.default)();

app.use(_express2.default.json());
app.use((0, _cors2.default)());

app.get('/', function (req, res) {
  return res.status(200).send({ message: 'Looks like the API is running!' });
});

// app.post('/api/v1/reflections', Auth.verifyToken, Reflection.create);
// app.get('/api/v1/reflections', Reflection.getAll);
// app.get('/api/v1/reflections/:id', Auth.verifyToken, Reflection.getOne);
// app.put('/api/v1/reflections/:id', Auth.verifyToken, Reflection.update);
// app.delete('/api/v1/reflections/:id', Auth.verifyToken, Reflection.delete);
app.post('/api/v1/user/register', _User2.default.register);
app.post('/api/v1/user/login', _User2.default.login);
// app.post('/api/v1/users/login', UserWithDb.login);
// app.delete('/api/v1/users/me', Auth.verifyToken, UserWithDb.delete);

app.get('/api/v1/pricelist', _Pricelist2.default.getAll);

app.listen(3000);
console.log('app running on port ', 3000);