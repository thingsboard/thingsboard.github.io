---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Batch Calculated Fields
description: Batch Calculated Fields
---

* TOC
{:toc}


When batch calculation option is disabled - you write a function that works with 1 value at a time. But when a batch 
calculation is enabled you work with the whole raw telemetry array. With the enabled `Batch calculation` checkbox, you 
receive more control over how raw telemetry is converted into the required metric. For example you can write a function that 
has access to the previous telemetry value, you can filter or exclude telemetry value from calculation if needed, you can group telemetries by timestamp and apply transformation on group.

Once raw telemetry array was transformed and returned from the calculation function, system will apply required aggregation on that array.

## Basic syntax

Let's assume that you create following variable for telemetry data:

```javascript
var temperatureReadings = none(thermostat.temperature);
```

In this case `temperatureReadings` variable would be an array of telemetry objects:

```json
[
	{
		"ts": 1622505600000,
		"value": 17
	},
	{
		"ts": 1622592000000,
		"value": 21
	},
	{
		"ts": 1622678400000,
		"value": 35
	}
]
```

In case of attributes you also has an array with 1 object that represent an attribute. Here is an example how to use attributes insude your script:

```javascript
var unit = uniq(thermostat.measureUnit);
if(unit.length) {
    unit = unit[0].value;
}
```

## Examples

#### Filter raw telemetry 

You can exclude some telemetry values from metric calculation. In this example we will exclude all temperature values that bigger than 40:

```javascript
var temperatureReadings = none(thermostat.temperature);

var filteredReadings = [];

for (var i = 0; i < temperatureReadings.length; i++) {
    var tsValue = temperatureReadings[i];
    if(tsValue.value <= 40) {
        filteredReadings.push(tsValue);
    }
}

return filteredReadings;
```

#### Modify raw telemetry

Here is an example how to transform raw telemetry array based on attribute value: 

```javascript
var temperatureReadings = none(thermostat.temperature);

var unit = uniq(thermostat.measureUnit);
if(unit.length) {
    unit = unit[0].value;
}

for (var i = 0; i < temperatureReadings.length; i++) {
    var tsValue = temperatureReadings[i];
    if(unit === 'Fahrenheit') {
        tsValue.value = 5 / 9 * (tsValue.value - 32);
    }
}

return temperatureReadings;
```

#### Group multiple telemetries by timestamp

```javascript
var voltageTelemetry = none(energyMeter.voltage);
var temperatureTelemetry = none(energyMeter.temperature);
var pressureTelemetry = none(energyMeter.pressure);

var groupedTelemetry = {};

groupTelemetryByTime(voltageTelemetry, groupedTelemetry, 'voltage');
groupTelemetryByTime(temperatureTelemetry, groupedTelemetry, 'temperature');
groupTelemetryByTime(pressureTelemetry, groupedTelemetry, 'pressure');

// ... execute transformation

groupTelemetryByTime = function (telemetry, groupedTelemetry, keyName) {
    for (var i = 0; i < telemetry.length; i++) {
        var ts = telemetry[i].ts;
        if(!groupedTelemetry[ts]) {
            groupedTelemetry[ts] = {ts: ts};
        }
        groupedTelemetry[ts][keyName] = telemetry[i].value;
    }
};

```
 
#### Fill gaps in telemetry stream

In this example we demonstrate how to detect gaps im time series stream and fill it with `0` values:

```javascript
var temperatureReadings = none(thermostat.temperature);

var timeGap = 30 * 60 * 1000; // 30 minutes
for (var i = 1; i < temperatureReadings.length; i++) {
    var tsDelta = temperatureReadings[i].ts - temperatureReadings[i - 1].ts;
    if (tsDelta > timeGap) {
        var newTs = (temperatureReadings[i].ts + temperatureReadings[i - 1].ts) / 2;
        temperatureReadings.splice(i, 0, {ts: newTs, value: 0})
    }
}

return temperatureReadings;
``` 

## Next Steps

{% assign currentGuide = "CalculatedFields" %}{% include templates/trndz-guides-banner.md %}