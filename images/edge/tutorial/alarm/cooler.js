var mqtt = require('mqtt');

console.log('Connecting to: %s using access token: %s', process.env.THINGSBOARD_HOST, process.env.ACCESS_TOKEN);

var client  = mqtt.connect('mqtt://'+ process.env.THINGSBOARD_HOST,{
    username: process.env.ACCESS_TOKEN
});

client.on('connect', function () {
    client.subscribe('v1/devices/me/rpc/request/+');
    console.log('Cooler connected!');
});

//RPC message handling sent to the client
client.on('message', function (topic, message) {
    var tmp = JSON.parse(message.toString());
    console.log('Current temperature:', tmp.params.temperature);
    console.log('Method:', tmp.method);
    if (tmp.params.temperature > 50) {
        console.log('Cooler is turned ON');
    } else {
        console.log('Cooler is turned OFF');
    }
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