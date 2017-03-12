'use strict';

var _Client = require('./Client');

var _Client2 = _interopRequireDefault(_Client);

var _createWebSocketStream = require('./createWebSocketStream');

var _createWebSocketStream2 = _interopRequireDefault(_createWebSocketStream);

var _publisher = require('./publisher');

var _publisher2 = _interopRequireDefault(_publisher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connect = function connect(options) {
  return new _Client2.default(options);
};

module.exports = {
  Client: _Client2.default,
  connect: connect,
  publisher: _publisher2.default,
  createWebSocketStream: _createWebSocketStream2.default
};