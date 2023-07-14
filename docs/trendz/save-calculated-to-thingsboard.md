---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Save calculated values as a telemetry into ThingsBoard
description: Save calculated values as a telemetry into ThingsBoard
---

Calculated fields in Trendz offer the ability to compute various metrics based on existing telemetry and attributes. 
These metrics can serve different purposes, from visualization in reports to triggering actions or reuse in other computations. 
What's more, Trendz allows you to save these calculated metrics as device or asset telemetry back to ThingsBoard, enhancing the functionality of your IoT application. 
Let's explore a few examples of how this feature can be utilized:

* By using the calculated metrics as input parameters for further calculations or predictions, you can enhance the accuracy and effectiveness of subsequent analyses. This empowers you to make more informed decisions based on reliable data.
* Creating alarms based on the calculated telemetry enables proactive monitoring and timely response. By setting thresholds or conditions, you can trigger alerts when the calculated values reach critical levels. This ensures that appropriate actions are taken promptly.
* Utilizing the calculated telemetry, you can set up notifications that provide real-time updates or alerts to relevant stakeholders. 
* Performance Optimization - Once the metrics are computed and saved as telemetry, you can optimize the performance of the Trendz server. Instead of loading raw telemetry and recomputing metrics each time when they are required, the pre-computed metrics can be loaded directly from ThingsBoard. This reduces the load on the server, resulting in faster and more efficient operations.


Simplified workflow for saving calculated metrics to ThingsBoard is the following:

* Create Trendz calculated field to compute required metric
* Visualize metric in Table view
* Configure background job that will run calculations for new incoming telemetry
* Save computed metrics as a new telemetry to ThingsBoard

**Detailed step-by-step tutorial how to do this you can find in this article - [Sync to ThingsBoard](/docs/trendz/save-telemetry-to-thingsboard/).**

## Next Steps

{% assign currentGuide = "CalculatedFields" %}{% include templates/trndz-guides-banner.md %}