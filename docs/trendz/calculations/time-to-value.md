---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Calculate time to value
description: Calculate time to value based on predicted telemetry

calc-time-to-value-chart:
  0:
    image: /images/trendz/calculations/calc-time-to-value-1.png

calc-time-to-value-script:
  0:
    image: /images/trendz/calculations/calc-time-to-value-2.png

calc-time-to-value-output:
  0: 
    image: /images/trendz/calculations/calc-time-to-value-3.png

calc-time-to-value-job:
  0:
    image: /images/trendz/calculations/calc-time-to-value-4.png

calc-time-to-value-table:
  0:
    image: /images/trendz/calculations/calc-time-to-value-5.png

calc-time-to-value-alarm:
  0:
    image: /images/trendz/calculations/calc-time-to-value-6.png
  1:
    image: /images/trendz/calculations/calc-time-to-value-7.png
---

* TOC
{:toc}

The most common use case for predicted telemetry is estimating the time remaining until a specific event occurs. For example, predicting when fuel will run out in a tank or when a battery will be fully discharged. 
These events can typically be defined as conditions based on telemetry values. For instance, fuel running out can be represented by the condition: fuel_in_tank <= minimal_fuel_threshold. The same logic applies to battery levels or similar cases.

The key aspect of such tasks is that the telemetry value we evaluate must be predicted, meaning it is a future value. Once we have the prediction, we can determine when the value meets the threshold and calculate how much time remains until the event occurs.

We can also create an alarm rule to trigger notifications or alerts if the critical value is expected to be reached soon. To achieve this, we need to generate "countdown telemetry," which can be implemented using **Calculation Fields**.

**Steps to Calculate Time to Event**

1. Create a prediction model for the required telemetry.
2. Define a logical condition based on the telemetry value.
3. Create a Calculated Field to generate countdown telemetry for the event.
4. Configure alarm rules based on the countdown telemetry.

**Example: Predicting Energy Consumption Threshold**

Let’s consider an example of the usage of the feature. Today is the 1st of January 2025, you have an Energy Meter device, and it measures “Energy Consumption” telemetry in kWh. We have historical telemetry for the whole 2024 year. 

## Build prediction model 

Start with creating a prediction model with the following parameters:

  * **Name:** Energy Consumption Prediction
  * **Business entity:** Energy Meter
  * **ThingsBoard key:** energy_consumption_prediction
  * **Training range:** 01/01/2024 - 31/12/2024
  * **Prediction range:** 30 days

After successfully training the model, you see predictions for the next 30 days. You also build a view to display these predictions (as shown in the screenshot). Configure automated forecast generation task with the required frequency.

{% include images-gallery.html imageCollection="calc-time-to-value-chart" %}

## Define a logical condition based on the telemetry value 

You know that energy consumption higher than 15 kWh is too much for the meter (for example) and you want to react right before it will happen, let it be 3 days. So, we have 15 kWh as a telemetry threshold and 3 days as the time threshold. So, your condition is “Energy Consumption Prediction” >= 15000.

## Compute time to event

Next, you need to create a **Calculated Field**:
  * **Name:** Energy Consumption Prediction Countdown
  * **ThingsBoard key:** energy_consumption_prediction_countdown

In this Calculated Field, you will load all predicted telemetry points and find the first point that meets your threshold condition. Use the following settings:
* **Field type:** BATCH
* **Aggregation:** AVG
* **Grouping interval:** days (for the countdown calculation).
* **Time strategy:** FIXED (to specify a future time range for loading prediction telemetry).

I will use This Year to load all prediction points for the 2025 year (we have points only in January anyway). For the script, you can use this universal configurable template attached below - there are some parameters you need to change to make it work:
* **inputTelemetry** - specify prediction telemetry of the created prediction model
* **limit** - specify the value threshold of your event condition
* **up** - specify “true” if it is the top limit, “false” - if it is the bottom limit.
* **timeUnit** - specify the time-unit you want to use for the countdown, left “groupBy” if you want to make it dependent on the context (time unit of calculation field)
* **timeUnitDefault** - specify the time-unit you want to use when the calculation field depends on the context, but the context does not provide value - it will be default value.

The template with need parameters :

```js
/// Inputs
var inputTelemetry = none(EM energy meter.Energy Consumption Prediction); // List of (ts, value), internal function

var limit = 15000;              // Options: Any number
var up = true;                  // Options: is true, check the actual value higher then limit. False - lower then limit
var timeUnit = groupBy;         // Options: "null", groupBy, "minute", "hour", "day", "week", "month"
var timeUnitDefault = "hour";   // Options: "minute", "hour", "day", "week", "month"

/// Code
var now = Date.now();

inputTelemetry = inputTelemetry
    .filter(function(point) {
        return point.ts > now;
    })
    .sort(function(a, b) {
        return a.ts - b.ts;
    });
    
var referencePoint = null;
for (var i = 0; i < inputTelemetry.length; i++) {
    if (up) {
        if (inputTelemetry[i].value >= limit) {
            referencePoint = inputTelemetry[i];
            console.log('Found top limit: ' + new Date(referencePoint.ts) + ' - ' + referencePoint.value);
            break;
        }
    } else {
        if (inputTelemetry[i].value <= limit) {
            referencePoint = inputTelemetry[i];
            console.log('Found bottom limit: ' + new Date(referencePoint.ts) + ' - ' + referencePoint.value);
            break;
        } 
    }
}

if (!referencePoint) {
    console.log('The limit is not Found!');
    return [];
}

var referenceTime = referencePoint.ts;
console.log('Reference Time: ' + new Date(referenceTime));

var timeUnits = {
    "minute": 1000 * 60,
    "hour": 1000 * 60 * 60,
    "day": 1000 * 60 * 60 * 24,
    "week": 1000 * 60 * 60 * 24 * 7,
    "month": 1000 * 60 * 60 * 24 * 30,
};

if (groupBy === 'null') {
    console.log('Aggregation is not provided by context, use simple value as result');
    
    if (typeof timeUnits[timeUnit] === 'undefined') {
        timeUnit = timeUnitDefault;
        console.log('Timeunit is not provided, use default');
    }
    if (timeUnit === null) {
        return 'Error during calculation Time To Value, you need to specify correct default time unit, actual: ' + timeUnit;
    }
    var distance = (referenceTime - now) / timeUnits[timeUnit];
    var resultPoint = {
        ts: now,
        value: distance
    };
    
    console.log("The distance is " + distance + " " + timeUnit + "s");
    return [resultPoint];
} else {
    console.log('Aggregation is provided by context: ' + groupBy);
    console.log('Used time unit: ' + timeUnit);
    
    if (typeof timeUnits[timeUnit] === 'undefined') {
        return 'Error during calculation Time To Value, unknown time unit: ' + timeUnit;
    }
    
    inputTelemetry = inputTelemetry
        .filter(function(point) {
            return point.ts <= referenceTime;
        })
        .map(function(point) {
            var timeDifference = referenceTime - point.ts;
            var unitDifference = Math.round(timeDifference / timeUnits[timeUnit]);
            return { ts: point.ts, value: unitDifference };
        })
        .sort(function(a, b) {
            return a.ts - b.ts;
        });
        
    return inputTelemetry;
}

return 'Error during calculation Time To Value'; 
```

In the end, you will have the calculation field that looks like the next one on the screenshot below.

{% include images-gallery.html imageCollection="calc-time-to-value-script" %}

Also, you can use the test feature of the calculation field and see the result

{% include images-gallery.html imageCollection="calc-time-to-value-output" %}

Now you need to enable the calculation field to make the countdown telemetry available in the ThingsBoard and keep it actual for each new day.

{% include images-gallery.html imageCollection="calc-time-to-value-job" %}

Now you can return to your visualization and add the new telemetry with the prediction. You may change the view template to Table to make it simpler for end users to analyze time to event. 

**WARNING:** pay attention that the countdown telemetry will exist only for future time for the first launch and since time only future values will be updated.

{% include images-gallery.html imageCollection="calc-time-to-value-table" %}

## Configure alert generation 

Now when we have countdown telemetry, and it is available on the ThingsBoard we can create an alarm rule to ask the system to notify us about the problem in the future. For this purpose, we need to find the device/asset profile of the needed device.

After that, we need to go to the Edit mode, go to the “Alarm Rules” tab, and click the “Add alarm rule” button, and you will see a template of the new alarm rule.

{% include images-gallery.html imageCollection="calc-time-to-value-alarm" %}
