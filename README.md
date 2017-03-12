# AWS Websocket Pub/Sub client - browserified and babelified version

## Build from ES2016 and node.js module to browser-enabled ES5 module
```
$ npm run compile
$ npm run build
```


## Basic usage

```
<html>
  <body>
    <script src="./aws-mqtt-browser.js"></script>

    <script type="text/javascript">
    const client = AWSMqtt.connect({
      WebSocket: window.WebSocket, 
      region: 'ap-northeast-1',
      credentials: {
        accessKeyId: 'AKIAI5C4S123243243', 
        secretAccessKey: 'dsfdsfdsf342+g0NYDqowUICmHVa;;Syjgb2323zDkCa',
        get: (callback) =>  {
          callback();
        }
      },
      endpoint: 'a2sdpyfw66qrvw.iot.ap-northeast-1.amazonaws.com', // NOTE: get this value with `aws iot describe-endpoint`
      clientId: 'mqtt-client-' + (Math.floor((Math.random() * 100000) + 1)), // clientId to register with MQTT broker. Need to be unique per client
    });

    client.on('connect', (packet) => {
      console.log('connected', packet); 
      client.subscribe('iotbutton/001')
    });
    client.on('message', (topic, message) => {
      console.log(topic, message.toString('utf-8'));
      
    });

    </script> 
  </body>
</html>
```

## Installing it from bower

````
$ bower install aws-mqtt-browser
````

### Complete [MQTT.js API](https://github.com/mqttjs/MQTT.js#api)

## Credits
Based on [AWS Websocket Pub/Sub client](https://github.com/kmamykin/aws-mqtt).