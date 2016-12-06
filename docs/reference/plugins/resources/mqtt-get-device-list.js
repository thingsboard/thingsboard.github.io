var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1', {
    username: process.env.TOKEN
});

client.on('connect', function () {
    console.log('connected');
    client.subscribe('v1/devices/me/rpc/response/+');
    var requestId = 1;
    var request = {
        "method": "getDevices",
        "params": {}
    };
    client.publish('v1/devices/me/rpc/request/' + requestId, JSON.stringify(request));
});

client.on('message', function (topic, message) {
    console.log('response.topic: ' + topic);
    console.log('response.body: ' + message.toString());
});