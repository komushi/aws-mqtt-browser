'use strict';

var _client = require('mqtt/lib/client');

var _client2 = _interopRequireDefault(_client);

var _processOptions2 = require('./processOptions');

var _processOptions3 = _interopRequireDefault(_processOptions2);

var _createWebSocketStream = require('./createWebSocketStream');

var _createWebSocketStream2 = _interopRequireDefault(_createWebSocketStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Client = function (_MqttClient) {
  _inherits(Client, _MqttClient);

  function Client(options) {
    _classCallCheck(this, Client);

    var _processOptions = (0, _processOptions3.default)(options),
        WebSocket = _processOptions.WebSocket,
        aws = _processOptions.aws,
        mqtt = _processOptions.mqtt;

    return _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, function () {
      return (0, _createWebSocketStream2.default)(WebSocket, aws);
    }, mqtt));
  }

  return Client;
}(_client2.default);

module.exports = Client;