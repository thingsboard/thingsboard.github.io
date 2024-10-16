---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Save predicted telemetry to ThingsBoard
description: Save predicted telemetry to ThingsBoard
---

While Trendz provides the ability to visualize predicted time series data in various views, real-life scenarios often require additional actions and computations based on this forecasted dataset. 
In such cases, leveraging the capabilities of ThingsBoard, the primary data storage for telemetry data, becomes highly convenient. 
Saving the predicted data as new telemetry for a device or asset in ThingsBoard opens up several valuable use cases. Here are few examples:

* The predicted telemetry is valuable data that can be used as input parameters for other calculations or predictions. By utilizing this data, you can improve the accuracy and effectiveness of further analyses and predictions.
* Creating alarms based on predicted telemetry enables proactive monitoring and response. By setting thresholds or conditions, you can trigger alerts when predicted values reach critical levels, ensuring timely action.
* By utilizing the predicted telemetry, you can set up notifications that provide real-time updates or alerts to relevant stakeholders. This functionality enhances communication and enables prompt decision-making based on forecasted trends.
* Track accuracy of predictions by comparing predicted telemetry with historical data.
* Performance optimization - by saving predicted telemetry to ThingsBoard, you can reduce the load on the Trendz server so it will not need to calculate the same predictions again and again.

Simplified workflow for saving predicted telemetry to ThingsBoard is the following:

* Create telemetry prediction with Trendz
* Visualize predicted data in Table view
* Configure background job that will run prediction model for new incoming telemetry
* Save predicted dataset as a new telemetry to ThingsBoard

## Next Steps

{% assign currentGuide = "Prediction" %}{% include templates/trndz-guides-banner.md %}
