'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _awsSignatureV = require('aws-signature-v4');

var _awsSignatureV2 = _interopRequireDefault(_awsSignatureV);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var region = _ref.region,
      endpoint = _ref.endpoint,
      credentials = _ref.credentials;

  var sign = function sign(_ref2) {
    var credentials = _ref2.credentials,
        expiration = _ref2.expiration;

    var url = _awsSignatureV2.default.createPresignedURL('GET', endpoint, '/mqtt', 'iotdevicegateway', _crypto2.default.createHash('sha256').update('', 'utf8').digest('hex'), {
      key: credentials.accessKeyId,
      secret: credentials.secretAccessKey,
      region: region,
      expiration: expiration,
      protocol: 'wss'
    });
    if (credentials.sessionToken) {
      url += '&X-Amz-Security-Token=' + encodeURIComponent(credentials.sessionToken);
    }
    return url;
  };

  return {
    getAndSign: function getAndSign(_ref3, callback) {
      var _ref3$expiration = _ref3.expiration,
          expiration = _ref3$expiration === undefined ? 15 : _ref3$expiration;

      credentials.get(function (err) {
        if (err) return callback(err);
        var url = sign({ credentials: credentials, expiration: expiration });
        callback(null, url);
      });
    }
  };
};