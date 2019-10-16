var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://iot.eclipse.org',
    {
        port: 1883
    });

var requestId,
    controlValue,
    realValue = 25;

client.on('connect', function () {
    console.log('connected');
    client.subscribe('devices/Thermostat-A/temperature/settings');
    console.log('Uploading temperature data once per second...');
    setInterval(publishTelemetry, 1000);
});

client.on('message', function (topic, message) {
    console.log('request.topic: ' + topic);
    console.log('request.body: ' + message.toString());
    requestId = topic.slice('devices/Thermostat-A/temperature/settings'.length);
    controlValue = parseFloat(message);
    console.log('Going to set new control value: ' + controlValue);
});

function publishTelemetry() {
    emulateTemperatureChanging();
    client.publish('devices/Thermostat-A/temperature/latest', JSON.stringify({
        temperature: realValue,
        deviceName: 'Thermostat-A',
        deviceType: 'thermostat',
        timestamp: new Date().getTime()
    }));
}

function emulateTemperatureChanging() {
    if (controlValue !== undefined) {
        if (controlValue >= realValue) {
            realValue += (Math.random() + (Math.abs(controlValue - realValue) / 30));
        } else {
            realValue -= (Math.random() + (Math.abs(controlValue - realValue) / 30));
        }
    }
}
