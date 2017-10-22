---
layout: docwithnav
title: IoT data analytics using Apache Spark, Kafka and ThingsBoard
description: IoT device data analytics sample using Apache Spark, Kafka and ThingsBoard

---

* TOC
{:toc}


ThingsBoard rule engine supports basic analysis of incoming telemetry data, for example, threshold crossing.
The idea behind rule engine is to provide functionality to route data from IoT Devices to different plugins, based on device attributes or the data itself.   

However, most of the real-life use cases also require the support of advanced analytics: machine learning, predictive analytics, etc.
  
This tutorial will demonstrate how you can:

 - route telemetry device data from ThingsBoard to Kafka topic using the built-in plugin.
 - aggregate data from multiple devices using a simple Apache Spark application.
 - push results of the analytics back to ThingsBoard for persistence and visualization.

The analytics in this tutorial is, of course, quite simple, but our goal is to highlight the integration steps.

### Overview

![image](/images/samples/analytics/spark/spark-thingsboard-integration.svg)

Let's assume we have a large number of weather stations that are located in different geo-location zones. 
ThingsBoard is used to collect, store and visualize wind speed from these stations, but we are also interested in average wind speed in each geo-location zone.
Once again, this is a completely fake scenario just to demonstrate the integration of all components.

In this scenario we are going to upload wind speed as a telemetry reading, however, the geo-location zone will be a static attribute of the weather station device.
This makes sense, since telemetry readings are going to change often, and the geo-location is static.

We will analyze real-time data from multiple devices using [Spark Streaming](http://spark.apache.org/docs/latest/streaming-programming-guide.html) job with 10 seconds batch window.

In order to store and visualize the results of the analytics, we are going to create one virtual device for each geo-location zone. 
This is possible using special ThingsBoard MQTT Gateway [API](/docs/reference/gateway-mqtt-api/). This API allows to efficiently stream data from multiple devices using single MQTT session.
So, in our case, the Spark Job itself acts as a gateway that publishes data on behalf of several virtual devices. Let's name this gateway as an **Analytics Gateway**. 

### Prerequisites

The following services must be up and running:

* ThingsBoard [instance](/docs/user-guide/install/installation-options/)
* Kafka. This guide assumes that you have it running on localhost on port 9092

We also assume that you are familiar with Kafka and Spark and have also prepared those environments for this tutorial.

### ThingsBoard configuration steps

### Step 1. Kafka Plugin Configuration

We need to configure Kafka Plugin that will be used to push telemetry data to Kafka. 
You can find the detailed description of Kafka Plugin [here](/docs/reference/plugins/kafka/).

[**Download**](/docs/samples/analytics/resources/kafka_plugin_for_spark_streaming_sample.json) the json with plugin descriptor 
and use these [**instructions**](/docs/user-guide/ui/plugins/#plugin-import) to import it to your instance.

![image](/images/samples/analytics/spark/kafka-plugin-configuration.png)

Don't forget to **activate** your new plugin instance by clicking on the corresponding button in plugin details!

### Step 2. Configuration of Telemetry Forwarding Rule

Now we need to configure the Rule that will be used to push wind speed data from the weather stations to Kafka.

[**Download**](/docs/samples/analytics/resources/windspeed_telemetry_rule.json) the json with plugin descriptor 
and use these [**instructions**](/docs/user-guide/ui/rules/#rule-import) to import it to your instance.

Don't forget to **activate** your new rule instance by clicking on the corresponding button in plugin details!

Let's review the main rule configuration below.

##### Attributes filter

ThingsBoard may process data from completely different devices. We will use filter by device attributes in order to filter out data that belongs to Weather Station devices.

The filter expression below validates that two attributes are set for a particular device: **deviceType** and **geoZone**. 
You may notice that we check that **deviceType** is equal to "WeatherStation". The **cs** variable is a map that contains all client-side attributes. 
See corresponding [**filter**](/docs/reference/filters/device-attributes-filter/) documentation for more details.  
 
![image](/images/samples/analytics/spark/kafka-rule-attributes.png)


##### Timeseries data filter

Each device connected to ThingsBoard may upload multiple telemetry keys simultaneously or independently.
In some use cases, you may need to process only a certain sub-set of data. We will use telemetry data filter to achieve this.  

The filter expression below validates that **windSpeed** telemetry is present in the processed message.

![image](/images/samples/analytics/spark/kafka-rule-timeseries.png)
 
See corresponding [**filter**](/docs/reference/filters/device-telemetry-filter/) documentation for more details.  

##### Kafka plugin action

Topic name in our case is **'weather-stations-data'** and the message is a valid JSON that uses client-side attribute **geoZone** and **windSpeed** telemetry value:
 
![image](/images/samples/analytics/spark/kafka-rule-action.png)

### Step 3. Wind Turbine Device Configuration

Let's create a device that we define as 'Wind Turbine 1' and we will send the telemetry data from this device via MQTT:

![image](/images/samples/analytics/spark/wind-turbine-device.png)

Once added, open the 'Wind Turbine 1' device card and click on 'Copy Access Token' from this device and store it somewhere.
We'll use this token later in Spark Application for sending analytics results back to ThingsBoard and will refer to it as **$GATEWAY_ACCESS_TOKEN**.
 
![image](/images/samples/analytics/spark/wind-turbine-device-details.png)

### Step 4: Asset Configuration

Now we have to create an Asset which will receive the aggregated data from Sparkk Application.
Add new asset on the Assets screen:

![image](/images/samples/analytics/spark/create-asset.png)

When asset is created, click on the asset card and copy the asset ID - we will need it in Spark Application:

![image](/images/samples/analytics/spark/copy-asset-id.png)

## Spark Application

### Step 5. Download the sample application source code

Feel free to grab the [code from this sample ThingsBoard repository](https://github.com/thingsboard/samples/tree/master/spark-kafka-streaming-integration) and follow along.

### Step 6. Dependencies review

The sample application was developed using Spark version **2.1.0**. Please consider this if you use a different version of Spark because in this case you may need to use a different version of Kafka Streaming API as well.

Dependencies that are used in the sample project:

```xml
<!-- Spark, Spark Streaming and Kafka Dependencies -->
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-core_2.11</artifactId>
    <version>${spark-version}</version>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-streaming_2.11</artifactId>
    <version>${spark-version}</version>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-streaming-kafka-0-10_2.11</artifactId>
    <version>${spark-version}</version>
</dependency>
<!-- HTTP Client to to send messages to ThingsBoard through REST API-->
<dependency>
	<groupId>org.springframework</groupId>
	<artifactId>spring-web</artifactId>
	<version>${spring.version}</version>
</dependency>
```

### Step 7. Source code review

Here is a description of particular code snippet from **SparkKafkaAssetStreamingDemoMain** class.
Main constants are listed below: 

```java
// Kafka brokers URL for Spark Streaming to connect and fetched messages from.
private static final String KAFKA_BROKER_LIST = "localhost:9092";
// URL of ThingsBoard REST endpoint
private static final String THINGSBOARD_REST_ENDPOINT = "http://localhost:8080";
// ThingsBoard User login
private static final String USERNAME = "tenant@thingsboard.org";
// ThingsBoard User password
private static final String PASSWORD = "tenant";
// Asset ID to post the aggregated data inot
private static final String ASSET_ID = "$ASSET_ID";
```

Main processing logic is listed below:    

```java    

try (JavaStreamingContext ssc = new JavaStreamingContext(conf, new Duration(STREAM_WINDOW_MILLISECONDS))) {

	loginRestTemplate();

	JavaInputDStream<ConsumerRecord<String, String>> stream =
			KafkaUtils.createDirectStream(
					ssc,
					LocationStrategies.PreferConsistent(),
					ConsumerStrategies.<String, String>Subscribe(TOPICS, getKafkaParams())
			);

	stream.foreachRDD(rdd ->
	{
		// Map incoming JSON to WindSpeedData objects

		JavaRDD<WindSpeedData> windRdd = rdd.map(new WeatherStationDataMapper());
		// Map WindSpeedData objects by GeoZone
		JavaPairRDD<String, AvgWindSpeedData> windByZoneRdd = windRdd.mapToPair(d -> new Tuple2<>(d.getGeoZone(), new AvgWindSpeedData(d.getWindSpeed())));
		// Reduce all data volume by GeoZone key
		windByZoneRdd = windByZoneRdd.reduceByKey((a, b) -> AvgWindSpeedData.sum(a, b));
		// Map <GeoZone, AvgWindSpeedData> back to WindSpeedData
		List<WindSpeedData> aggData = windByZoneRdd.map(t -> new WindSpeedData(t._1, t._2.getAvgValue())).collect();
		// Push aggregated data to ThingsBoard using Gateway MQTT API
		publishTelemetryToThingsBoardAsset(aggData);
	});

	ssc.start();
	ssc.awaitTermination();
}
```

The following method is responsbile for publishing the telemetry data:

```java
private void publishTelemetryToThingsBoardAsset(List<WindSpeedData> aggData) throws Exception {
	HttpHeaders requestHeaders = new HttpHeaders();
	requestHeaders.add("X-Authorization", "Bearer " + token);

	if (!aggData.isEmpty()) {
		for (WindSpeedData d : aggData) {
			HttpEntity<?> httpEntity = new HttpEntity<Object>(d, requestHeaders);
			ResponseEntity<Void> result = restTemplate.postForEntity(ASSET_PUBLISH_TELEMETRY_ENDPOINT,
					httpEntity, Void.class);
		}
	}
}
```

Now let's run **SparkKafkaAssetStreamingDemoMain** class from the IDE or submit it to a Spark cluster. Sample app will be fetching all the messages from Kafka topic and send average wind speed telemetry to the appropriate **'Zone A Asset'** in *ThingsBoard*.

## Dry Run

Once *Kafka Plugin* is configured, *'Analytics Gateway device'* is provisioned and *Spark Streaming Application* is running please start sending **windSpeed** telemetry from different devices.

The following command will provision **deviceType** and **geoZone** attributes. You may change zone to different values for different devices.

```bash
mosquitto_pub -d -h "localhost" -p 1883 -t "v1/devices/me/attributes" -u "$YOUR_DEVICE_ACCESS_TOKEN" -m '{"deviceType":"WeatherStation", "geoZone":"Zone A"}'
```

The following [**send-randomized-windspeed.py**](/docs/samples/analytics/resources/send-randomized-windspeed.py) script will send 100 randomized windSpeed values to the device:

``` python
import paho.mqtt.client as mqtt
from time import sleep
import random

broker="test.mosquitto.org"
topic_pub='v1/devices/me/telemetry'


client = mqtt.Client()

client.username_pw_set("$YOUR_DEVICE_ACCESS_TOKEN")
client.connect('127.0.0.1', 1883, 1)

for i in range(100):
    x = random.randrange(20, 100)
    print x
    msg = '{"windSpeed":"'+ str(x) + '"}'
    client.publish(topic_pub, msg)
    sleep(0.1)
```

Once you have sent the telemetry data to ThingsBoard, wait a couple of seconds and then open up the telemetry tab on the asset:
 
![image](/images/samples/analytics/spark/asset-telemetry.png)
