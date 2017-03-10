---
layout: docwithnav
title: Spark integration with Thingsboard

---

## Spark integration with Thingsboard

This tutorial will demonstrate how you can push device telemetry data from Thingsboard to external Kafka instance and then process it in real time using Spark Engine.

This could be useful for different scenarios like Machine Learning, Predictive Analytics etc.

We'll show scenario where average temperature for set of different devices is calculated and appropriate 'Average Temp' device is updated.

Here is a scheme for this scenario:

![image](/images/samples/analytics/spark/spark-thingsboard-integration.png)

In this case 3 devices are pushing temperature telemetry data to Thingsboard every 1 second and every 10 seconds Spark Application will update 'Average Temp' Thingsboard device with average temperature from these devices.

## Configuration of Thingsboard

### Configuration of Kafka Plugin

First we need to configure Kafka Plugin so every telemetry message with temperature from devices will be pushed to Kafka topic as well.

Detail description how to configure Kafka Plugin you can find [here](/docs/reference/plugins/kafka/)

To filter only telemetry messages that contains temperature, please create appropriate filter while configuring Kafka Rule:

![image](/images/samples/analytics/spark/kafka-temperature-filter.png)

Topic name in our case is **'sensors-telemetry'**:

![image](/images/samples/analytics/spark/kafka-plugin-action.png)

### Configuration of 'Average Temperature Device'

Let's create device that we define 'Average Temperature Device' and we'll send average temperature from Spark Application to this device:

![image](/images/samples/analytics/spark/average-device.png)

![image](/images/samples/analytics/spark/average-device-details.png)

Please copy 'Access Token' from this device and store it somewhere. We'll use this toke later in Spark Application for sending update temperate messages and we'll refer to it as **$AVERAGE_DEVICE_ACCESS_TOKEN**.

## Spark Application example