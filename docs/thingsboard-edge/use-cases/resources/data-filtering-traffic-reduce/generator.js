var mqtt = require('mqtt');

console.log('Connecting to: %s using access token: %s', process.env.THINGSBOARD_EDGE_HOST, process.env.ACCESS_TOKEN);

var client  = mqtt.connect('mqtt://'+ process.env.THINGSBOARD_EDGE_HOST + ':' + process.env.THINGSBOARD_EDGE_PORT,{
    username: process.env.ACCESS_TOKEN
});

client.on('connect', function () {
    var telemetry = {};
    telemetry.mpg = (Math.random() * 5 + 10).toFixed(0);
    telemetry.mph = (Math.random() * 5 + 50).toFixed(0);
    console.log('Fuel consumption: %s mpg, current speed: %s mph', telemetry.mpg, telemetry.mph);
    client.publish('v1/devices/me/telemetry', JSON.stringify(telemetry));
    client.end();
});

//Catches ctrl+c event
process.on('SIGINT', function () {
    console.log();
    console.log('Disconnecting...');
    client.end();
    console.log('Exited!');
    process.exit(2);
});