var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1', {
    username: process.env.TOKEN
});

client.on('connect', function () {
    console.log('connected');
    client.subscribe('v1/devices/me/rpc/response/+');
    var params = {
        "deviceId": "e4c51fb0-aa48-11e6-8381-4521c677ab81",
        "timeout": 2000,
        "oneway": false,
        "body": {
            "param1": "value1"
        }
    };
    client.publish('v1/devices/me/rpc/request/1', '{"method":"sendMsg", "params": ' + JSON.stringify(params) + '}');
});

client.on('message', function (topic, message) {
    console.log('response.topic: ' + topic);
    console.log('response.body: ' + message.toString());
    client.end()
});