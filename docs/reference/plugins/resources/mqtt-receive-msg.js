var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1', {
    username: process.env.TOKEN
});

client.on('connect', function () {
    console.log('connected');
    client.subscribe('v1/devices/me/rpc/request/+');
});

client.on('message', function (topic, message) {
    console.log('response.topic: ' + topic);
    console.log('response.body: ' + message.toString());
    client.publish(topic.replace('request', 'response'), '{"status":"ok"}');
});