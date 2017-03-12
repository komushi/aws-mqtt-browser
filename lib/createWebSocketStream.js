'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mqttWebsocketStream = require('mqtt-websocket-stream');

var _mqttWebsocketStream2 = _interopRequireDefault(_mqttWebsocketStream);

var _createUrlSigner = require('./createUrlSigner');

var _createUrlSigner2 = _interopRequireDefault(_createUrlSigner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (WebSocket, awsOptions) {
  var urlSigner = (0, _createUrlSigner2.default)(awsOptions);
  var createWebSocketWithCredentials = function createWebSocketWithCredentials(callback) {
    urlSigner.getAndSign({ expiration: 15 }, function (err, url) {
      if (err) return callback(err);
      console.log('Connecting to', url);
      callback(null, new WebSocket(url, ['mqttv3.1']));
    });
  };

  return new _mqttWebsocketStream2.default(createWebSocketWithCredentials);
};