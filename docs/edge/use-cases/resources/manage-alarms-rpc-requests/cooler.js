var mqtt = require('mqtt');

console.log('Connecting to: %s:%s using access token: %s', process.env.TB_EDGE_HOST, process.env.TB_EDGE_MQTT_PORT, process.env.ACCESS_TOKEN);

var client  = mqtt.connect('mqtt://'+ process.env.TB_EDGE_HOST + ":" + process.env.TB_EDGE_MQTT_PORT,{
    username: process.env.ACCESS_TOKEN
});

client.on('connect', function () {
    client.subscribe('v1/devices/me/rpc/request/+');
    console.log('Cooler is connected!');
});

//RPC message handling sent to the client
client.on('message', function (topic, message) {
    var tmp = JSON.parse(message.toString());
    console.log('Received RPC command from edge!')
    console.log('Method:', tmp.method);
    console.log('Speed params:', tmp.params.speed);
});

//Catches ctrl+c event
process.on('SIGINT', function () {
    console.log();
    console.log('Disconnecting...');
    client.end();
    console.log('Exited!');
    process.exit(2);
});
