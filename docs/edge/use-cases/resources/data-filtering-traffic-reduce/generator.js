var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://'+ process.env.THINGSBOARD_HOST + ':' + process.env.THINGSBOARD_PORT,{
    username: process.env.ACCESS_TOKEN
});
client.on('connect', function () {
    var telemetry = {};
    telemetry.mpg = (Math.random() * 5 + 10).toFixed(0);
    telemetry.CO = (Math.random() * 5 + 40).toFixed(0);
    telemetry.NO = (Math.random() * 5/100).toFixed(4);
    telemetry.HC = (Math.random() * 5 + 250).toFixed(0);
    console.log('Fuel consumption: %s; CO: %s; NO: %s; HC: %s', telemetry.mpg, telemetry.CO, telemetry.NO, telemetry.HC);
    client.publish('v1/devices/me/telemetry', JSON.stringify(telemetry));
    client.end();
});