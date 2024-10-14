---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Predict remaining time
description: Guide how to predict remaining time to specific event
---

* TOC
{:toc}

The Trendz functionality offers a powerful feature that allows us to predict the behavior of time series data. For example, we can forecast how engine vibration will change over time and visualize this information on a dashboard.
However, we can obtain even more valuable insights from this feature. Let's imagine a situation where we know that the vibration energy should always be below 87. If it exceeds this threshold, there is a high risk of engine failure. 
In such cases, it becomes crucial to determine how much time we have before the vibration energy reaches this critical level.
This article will guide you through the process of configuring Trendz to predict the remaining time until a specific event occurs. In our case, the event is the vibration energy reaching the critical level.  


## Create table in Trendz

First we need to create a Table view in Trendz to show results of our computations. We assume that we have `Engine` device registered in ThingsBoard and we have `vibration` telemetry on this device. 

* Create Table view
* Add **Engine** field into **Columns** section.
* Add **vibration** telemetry field into **Columns** section. Select aggregation `LATEST` for this field - this field will show latest vibration level reported by device.
* Add **Engine** field into **Filters** section and select required Engine that we should focus on.

## Predict vibration level

Let's predict vibration level for next 7 days for each Engine that we have. We will enable prediction on calculated field because latter we will need to perform additional computations based on predicted data.

* Add **Calculated** field into **Columns** section.
* Set field label to `Predicted vibration`.
* Enable batch calculation checkbox.
* Enable checkbox Prediction
  * Prediction method - Fourier transformation
  * Prediction range - 7
  * Prediction unit - days
* Write following function `return none(Engine.vibration);`
* Set `MAX` aggregation for batch calculated field.

After pressing **Build report** button we will see maximum vibration level for each Engine for next 7 days. We are ready to predict remaining time.

## Predict remaining time

Once the prediction for the batch calculated field is enabled in Trendz, the platform will build a forecast for the raw vibration telemetry data obtained from the engine. This forecast is then utilized as an input parameter for the calculation function.
In that function we need to find when threshold, in our case it is 87, would be reached and return remaining time to that point in hours. If threshold would not be reached then we need to return -1. 
It would mean that we do not expect critical vibration level in next 7 days. 

We need to change calculation function to the following:

```javascript 
var remainingHours = -1;
var threshold = 87;
var vibrationForecast = none(Engine.vibration);

for(var i = 0; i < vibrationForecast.length; i++) {
  var point = vibrationForecast[i];
  if(point.value >= threshold) {
    var timeDeltaMillis = point.ts - Date.now();
    remainingHours = timeDeltaMillis / 1000 / 60 / 60;
    break;
  }
}

return [{ts: endTs, value: remainingHours}];
```

In this formula we iterate over predicted vibration values and find first value that is greater or equal to threshold. Then we calculate time delta between this point and current time and return it in hours.

We can use calculated metric on any visualization in Trendz. Alse we can save it back to ThingsBoard as a new telemetry of the `Engine` device or create an alarm based on this metric.

## Next Steps

{% assign currentGuide = "Prediction" %}{% include templates/trndz-guides-banner.md %}
