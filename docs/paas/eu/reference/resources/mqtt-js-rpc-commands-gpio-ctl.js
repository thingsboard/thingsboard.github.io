var mqtt = require('mqtt');

var gpioCount = 3;

var gpioList = {};

for (var i = 0; i < gpioCount; i++) {
    var enabled = Math.random() >= 0.5 ? true : false;
    var pin = i+1;
    gpioList[pin] = enabled;
}

var client  = mqtt.connect('mqtt://127.0.0.1',{
    username: process.env.TOKEN
});

client.on('connect', function () {
    console.log('Connected');
    for (var pin in gpioList) {
        console.log('gpio pin: ' + pin + '; enabled: ' + gpioList[pin]);
    }
    client.subscribe('v1/devices/me/rpc/request/+')
    client.publish('v1/devices/me/attributes', JSON.stringify(gpioList));
});

function sendGpioStatus(requestId) {
   client.publish('v1/devices/me/rpc/response/' + requestId, JSON.stringify(gpioList));
}

function updateGpioStatus(pin, enabled, requestId) {
    var response = {};
    response[pin] = false;
    if (typeof gpioList[pin] !== 'undefined') {
        gpioList[pin] = enabled;
        response[pin] = enabled;
    }
    client.publish('v1/devices/me/rpc/response/' + requestId, JSON.stringify(response));
    client.publish('v1/devices/me/attributes', JSON.stringify(response));
}

client.on('message', function (topic, message) {
    var requestId = topic.slice('v1/devices/me/rpc/request/'.length);
    var messageData = JSON.parse(message.toString());
    if (messageData.method === 'getGpioStatus') {
	    sendGpioStatus(requestId);
    } else if (messageData.method === 'setGpioStatus') {
        var pin = messageData.params.pin;
        var enabled = messageData.params.enabled;
        updateGpioStatus(pin, enabled, requestId);
    } else {
        //client acts as an echo service
        client.publish('v1/devices/me/rpc/response/' + requestId, message);
    }
});