var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://127.0.0.1',{
    username: process.env.TOKEN
})

client.on('connect', function () {
    console.log('connected')
    client.subscribe('v1/devices/me/provision/response')
    client.publish('v1/devices/me/provision', '{"deviceName": "name", "deviceType": "type", "provisionProfileKey": $PROFILE_KEY, "provisionProfileSecret": $PROFILE_SECRET}')
})

client.on('message', function (topic, message) {
    console.log('response.topic: ' + topic)
    console.log('response.body: ' + message.toString())
    client.end()
})