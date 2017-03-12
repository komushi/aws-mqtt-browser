'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return {
    WebSocket: options.WebSocket || window.WebSocket,
    aws: {
      region: options.region,
      endpoint: options.endpoint,
      credentials: options.credentials
    },
    mqtt: {
      connectTimeout: options.connectTimeout || 5 * 1000,
      reconnectPeriod: options.reconnectPeriod || 10 * 1000,
      protocolId: options.protocolId || 'MQTT',
      clientId: options.clientId || 'mqtt-client-' + Math.floor(Math.random() * 100000 + 1),
      clean: options.clean || true // need to re-subscribe after offline/disconnect,
    }
  };
};