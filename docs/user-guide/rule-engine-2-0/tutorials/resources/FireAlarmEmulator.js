var mqtt = require('mqtt');

// Don't forget to update accessToken constant with your device access token
const thingsboardHost = "demo.thingsboard.io";
const ACCESS_TOKEN = "$ACCESS_TOKEN";

// Initialization of mqtt client using Thingsboard host and device access token
console.log('Connecting to: %s using access token: %s', thingsboardHost, ACCESS_TOKEN);
var client  = mqtt.connect('mqtt://'+ thingsboardHost, { username: ACCESS_TOKEN });

var alarmSystem = {method: "undefined" , params:{} };

//RPC message handling sent to the client
client.on('message', function (topic, message) {
    console.log('request.topic: ' + topic);
    console.log('request.body: ' + message.toString());
    var tmp = JSON.parse(message.toString());
    if (tmp.method == "ON") {
        alarmSystem = tmp;
        // Uploads telemetry data using 'v1/devices/me/telemetry' MQTT topic
        client.publish('v1/devices/me/telemetry', JSON.stringify({alarmSystem: "Fire alarm: ON"}));
    }
    var requestId = topic.slice('v1/devices/me/rpc/request/'.length);
    //client acts as an echo service
    client.publish('v1/devices/me/rpc/response/' + requestId, message);
});

// Triggers when client is successfully connected to the Thingsboard server
client.on('connect', function () {
    console.log('Client connected!');
    client.subscribe('v1/devices/me/rpc/request/+');
});

//Catches ctrl+c event
process.on('SIGINT', function () {
    console.log();
    console.log('Disconnecting...');
    client.end();
    console.log('Exited!');
    process.exit(2);
});

//Catches uncaught exceptions
process.on('uncaughtException', function (e) {
    console.log('Uncaught Exception...');
    console.log(e.stack);
    process.exit(99);
});

