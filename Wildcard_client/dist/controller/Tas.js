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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Tas = {
  /**
   * Get all ctcs
   * @param {object} req
   * @param {object} res
   * @returns {object} ctc array
   */
  getCtcs: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var query, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = 'SELECT DISTINCT ctc FROM station';
              _context.prev = 1;
              _context.next = 4;
              return _db2.default.query(query);

            case 4:
              result = _context.sent;
              return _context.abrupt('return', res.status(200).send(result.rows));

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);
              return _context.abrupt('return', res.status(400).send(_context.t0));

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 8]]);
    }));

    function getCtcs(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return getCtcs;
  }(),
  getSystems: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var query, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (req.body.ctc) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ message: 'Provide a CTC to view systems' }));

            case 2:
              query = 'SELECT DISTINCT system FROM station WHERE ctc = $1 ORDER BY system';
              _context2.prev = 3;
              _context2.next = 6;
              return _db2.default.query(query, [req.body.ctc]);

            case 6:
              result = _context2.sent;
              return _context2.abrupt('return', res.status(200).send(result.rows));

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](3);
              return _context2.abrupt('return', res.status(400).send(_context2.t0));

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[3, 10]]);
    }));

    function getSystems(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return getSystems;
  }(),
  getStations: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var query, result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!req.body.ctc || !req.body.system)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt('return', res.status(400).send({ message: 'Provide a CTC to view systems' }));

            case 2:
              query = 'SELECT code FROM station WHERE ctc = $1 AND system = $2';
              _context3.prev = 3;
              _context3.next = 6;
              return _db2.default.query(query, [req.body.ctc, req.body.system]);

            case 6:
              result = _context3.sent;
              return _context3.abrupt('return', res.status(200).send(result.rows));

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3['catch'](3);
              return _context3.abrupt('return', res.status(400).send(_context3.t0));

            case 13:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[3, 10]]);
    }));

    function getStations(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return getStations;
  }(),
  getObjects: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
      var query, result;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!req.body.ctc || !req.body.system || !req.body.station)) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt('return', res.status(400).send({ message: 'Incomplete information supplied' }));

            case 2:
              query = 'SELECT * from object WHERE station = $1';
              _context4.prev = 3;
              _context4.next = 6;
              return _db2.default.query(query, [req.body.station]);

            case 6:
              result = _context4.sent;
              return _context4.abrupt('return', res.status(200).send(result.rows));

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4['catch'](3);
              return _context4.abrupt('return', res.status(400).send(_context4.t0));

            case 13:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this, [[3, 10]]);
    }));

    function getObjects(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return getObjects;
  }(),
  connect: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
      var query, result;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!req.body.ctc || !req.body.system || !req.body.station)) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt('return', res.status(400).send({ message: 'Incomplete information supplied' }));

            case 2:
              query = 'SELECT count(*) from object WHERE station = $1';
              _context5.prev = 3;
              _context5.next = 6;
              return _db2.default.query(query, [req.body.station]);

            case 6:
              result = _context5.sent;
              return _context5.abrupt('return', res.status(200).send(result.rows[0]));

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5['catch'](3);
              return _context5.abrupt('return', res.status(400).send(_context5.t0));

            case 13:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this, [[3, 10]]);
    }));

    function connect(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return connect;
  }()
};

exports.default = Tas;