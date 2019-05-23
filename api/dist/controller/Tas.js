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
      var query, resp;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = 'SELECT DISTINCT ctc FROM station';
              _context.prev = 1;
              _context.next = 4;
              return _db2.default.query(query);

            case 4:
              resp = _context.sent;
              return _context.abrupt('return', res.status(200).send(resp.rows));

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
  }()
};

exports.default = Tas;