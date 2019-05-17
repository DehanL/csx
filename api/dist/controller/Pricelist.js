'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Pricelist = {
  /**
   * Get Pricelist
   * @param {object} req
   * @param {object} res
   * @returns {object} pricelist array
   */
  getAll: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var findAllQuery, _ref2, rows, rowCount;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              findAllQuery = 'SELECT * FROM pricelist';
              _context.prev = 1;
              _context.next = 4;
              return _db2.default.query(findAllQuery);

            case 4:
              _ref2 = _context.sent;
              rows = _ref2.rows;
              rowCount = _ref2.rowCount;
              return _context.abrupt('return', res.status(200).send({ rows: rows, rowCount: rowCount }));

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](1);
              return _context.abrupt('return', res.status(400).send(_context.t0));

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 10]]);
    }));

    function getAll(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return getAll;
  }(),

  /**
   * Get Some
   * @param {object} req
   * @param {object} res
   * @returns {object} pricelist array
   */
  getSome: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var findSomeQuery, _ref4, rows, rowCount;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              findSomeQuery = 'SELECT * FROM pricelist WHERE price < 10';
              _context2.prev = 1;
              _context2.next = 4;
              return _db2.default.query(findSomeQuery, [req.params.amount]);

            case 4:
              _ref4 = _context2.sent;
              rows = _ref4.rows;
              rowCount = _ref4.rowCount;
              return _context2.abrupt('return', res.status(200).send({ rows: rows, rowCount: rowCount }));

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](1);
              return _context2.abrupt('return', res.status(400).send(_context2.t0));

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 10]]);
    }));

    function getSome(_x3, _x4) {
      return _ref3.apply(this, arguments);
    }

    return getSome;
  }()
};

exports.default = Pricelist;