'use strict';

var _Client = require('./Client');

var _Client2 = _interopRequireDefault(_Client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Connect to broker, publish message to a topic and then disconnect
var publisher = function publisher(options) {
  return function (topic, message) {
    return new Promise(function (resolve, reject) {
      var client = new _Client2.default(options);

      client.once('connect', function () {
        client.publish(topic, message, {}, function (err) {
          if (err) {
            client.end();
            reject(err);
          } else {
            client.end();
            resolve();
          }
        });
      });
      client.once('error', function (err) {
        client.end();
        reject(err);
      });
      client.once('offline', function () {
        client.end();
        reject(new Error("MQTT went offline"));
      });
    });
  };
};

module.exports = publisher;