var mqtt = require('mqtt');
console.log('Connecting to: %s using access token: %s', process.env.THINGSBOARD_HOST, process.env.ACCESS_TOKEN);
var client  = mqtt.connect('mqtt://'+ process.env.THINGSBOARD_HOST + ':' + process.env.THINGSBOARD_PORT,{
    username: process.env.ACCESS_TOKEN
});
client.on('connect', function () {
    console.log('Client connected!');
    var telemetry = {};
    telemetry.mpg = Math.round((Math.random() * 5 + 10) * 100) / 100;
    telemetry.CO = Math.round((Math.random() * 10 + 500) * 100) / 100;
    telemetry.NO = Math.round((Math.random() * 10 + 700) * 100) / 100;
    telemetry.HC = Math.round((Math.random() * 10 + 600) * 100) / 100;
    client.publish('v1/devices/me/telemetry', JSON.stringify(telemetry));
    client.end();
});