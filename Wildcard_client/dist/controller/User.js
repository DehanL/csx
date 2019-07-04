'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _Helper = require('./Helper');

var _Helper2 = _interopRequireDefault(_Helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var User = {
  /**
   * Create A User
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
  register: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var hashPassword, createQuery, values, _ref2, rows, token;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!req.body.id || !req.body.password || !req.body.firstname || !req.body.lastname || !req.body.role)) {
                _context.next = 3;
                break;
              }

              console.log(req.body);
              return _context.abrupt('return', res.status(400).send({ message: 'Create method- Some values are missing' }));

            case 3:
              hashPassword = _Helper2.default.hashPassword(req.body.password);
              createQuery = 'INSERT INTO\n      public.account(id, firstname, lastname, role, password)\n      VALUES($1, $2, $3, $4, $5)\n      returning *';
              values = [
              // uuidv4(),
              req.body.id, req.body.firstname, req.body.lastname, req.body.role, hashPassword];
              _context.prev = 6;
              _context.next = 9;
              return _db2.default.query(createQuery, values);

            case 9:
              _ref2 = _context.sent;
              rows = _ref2.rows;
              token = _Helper2.default.generateToken(rows[0].id);
              return _context.abrupt('return', res.status(201).send({ token: token }));

            case 15:
              _context.prev = 15;
              _context.t0 = _context['catch'](6);

              if (!(_context.t0.routine === '_bt_check_unique')) {
                _context.next = 19;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ message: 'User with that ID already exist' }));

            case 19:
              return _context.abrupt('return', res.status(400).send(_context.t0));

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[6, 15]]);
    }));

    function register(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return register;
  }(),

  /**
   * Login
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
  login: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var text, _ref4, rows, token, id;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!req.body.id || !req.body.password)) {
                _context2.next = 3;
                break;
              }

              console.log(req.body);
              return _context2.abrupt('return', res.status(400).send({ message: 'Some values are missing' }));

            case 3:
              text = 'SELECT * FROM public.account WHERE id = $1';
              _context2.prev = 4;
              _context2.next = 7;
              return _db2.default.query(text, [req.body.id]);

            case 7:
              _ref4 = _context2.sent;
              rows = _ref4.rows;

              if (rows[0]) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ message: 'The credentials you provided is incorrect' }));

            case 11:
              if (_Helper2.default.comparePassword(rows[0].password, req.body.password)) {
                _context2.next = 13;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ message: 'The credentials you provided is incorrect' }));

            case 13:
              token = _Helper2.default.generateToken(rows[0].id);
              id = rows[0].id;
              return _context2.abrupt('return', res.status(200).send({ token: token, id: id }));

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2['catch'](4);
              return _context2.abrupt('return', res.status(400).send(_context2.t0));

            case 21:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[4, 18]]);
    }));

    function login(_x3, _x4) {
      return _ref3.apply(this, arguments);
    }

    return login;
  }()
};

exports.default = User;