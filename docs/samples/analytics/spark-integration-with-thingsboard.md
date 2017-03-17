---
layout: docwithnav
title: IoT data analytics using Apache Spark, Kafka and Thingsboard

---


Thingsboard rule engine supports basic analysis of incoming telemetry data, for example, threshold crossing. 
The idea behind rule engine is to provide functionality to route data from IoT Devices to different plugins, based on device attributes or the data itself.   

However, most of the real-life use cases also require support of advanced analytics: machine learning, predictive analytics, etc.
  
This tutorial will demonstrate how you can:

 - route telemetry device data from Thingsboard to Kafka topic using built-in plugin.
 - aggregate data from multiple devices using simple Apache Spark application.
 - push results of the analytics back to Thingsboard for persistence and visualization. 

Of course, analytics in this tutorial is quite simple, our goal is to highlight the integration steps.

### Overview

![image](/images/samples/analytics/spark/spark-thingsboard-integration.png)

Let's assume we have big amount of weather stations that are located in different geo-location zones. 
Thingsboard is used to collect, store and visualize wind speed from this stations, but we are also interested in average wind speed in each geo-location zone.
Once again, this is completely fake scenario just to demonstrate the integration of all components.

In this scenario we are going to upload wind speed as a telemetry reading, however, the geo-location zone will be a static attribute of the weather station device.
This is logical, since telemetry readings are going to change often, and the geo-location is static.

We will analyze real-time data from multiple devices using [Spark Streaming](http://spark.apache.org/docs/latest/streaming-programming-guide.html) job with 10 seconds batch window.

In order to store and visualize results of the analytics we are going to create one virtual device for each geo-location zone. 
This is possible using special Thingsboard MQTT Gateway [API](/docs/reference/gateway-mqtt-api/). This API allows to efficiently stream data from multiple devices using single MQTT session.
So, in our case, the Spark Job itself acts as a gateway that publish data on behalf of several virtual devices. Let's name this gateway as an **Analytics Gateway**. 

### Prerequisites

We assume you have Thingsboard [instance](/docs/user-guide/install/installation-options/) is up and running.
We also assume you are familiar with Kafka and Spark and have also prepared those environments for this tutorial.

### Thingsboard configuration steps

### Step 1. Configuration of Kafka Plugin

We need to configure Kafka Plugin that will be used to push telemetry data to Kafka. 
You can find detail description of Kafka Plugin [here](/docs/reference/plugins/kafka/).

[**Download**](/docs/samples/analytics/resources/kafka_plugin_for_spark_streaming_sample.json) the json with plugin descriptor 
and use this [**instructions**](/docs/user-guide/ui/plugins/#plugin-import) to import it to your instance.

Please note that the plugin configuration expects Kafka to be running on the localhost with port 9092.

![image](/images/samples/analytics/spark/kafka-plugin-configuration.png)

Don't forget to **activate** your new plugin instance by clicking on corresponding button in plugin details!

### Step 2. Configuration of Telemetry Forwarding Rule

Now we need to configure the Rule that will be used to push wind speed data from the weather stations to Kafka.

[**Download**](/docs/samples/analytics/resources/windspeed_telemetry_rule.json) the json with plugin descriptor 
and use this [**instructions**](/docs/user-guide/ui/rules/#rule-import) to import it to your instance.

Let's review main rule configuration below.

##### Attributes filter

Thingsboard may process data from completely different devices. We will use filter by device attributes in order to filter out data that belongs to Weather Station devices.

The filter expression below validates that two attributes are set for particular device: **deviceType** and **geoZone**. 
You may notice that we check that **deviceType** is equal to "WeatherStation". The **cs** variable is a map that contains all client-side attributes. 
See corresponding [**filter**](/docs/reference/filters/device-attributes-filter/) documentation for more details.  
 
![image](/images/samples/analytics/spark/kafka-rule-attributes.png)


##### Timeseries data filter

Each device connected to Thingsboard may upload multiple telemetry keys simultaneously on independently. 
In some use cases you may need to process only certain sub-set of the data. We will use telemetry data filter to achieve this.  

The filter expression below validates that **windSpeed** telemetry is present in the processed message.

![image](/images/samples/analytics/spark/kafka-rule-timeseries.png)
 
See corresponding [**filter**](/docs/reference/filters/device-telemetry-filter/) documentation for more details.  
 

##### Kafka plugin action

 
Topic name in our case is **'sensors-telemetry'**:
 
![image](/images/samples/analytics/spark/kafka-plugin-action.png)


To filter only telemetry messages that contains temperature, please create appropriate filter while configuring Kafka Rule:

![image](/images/samples/analytics/spark/kafka-temperature-filter.png)


### Step 3. Configuration of the Analytics Gateway device

Let's create device that we define 'Average Temperature Device' and we'll send average temperature from Spark Application to this device:

![image](/images/samples/analytics/spark/average-device.png)

![image](/images/samples/analytics/spark/average-device-details.png)

Please copy 'Access Token' from this device and store it somewhere. We'll use this toke later in Spark Application for sending update temperate messages and we'll refer to it as **$AVERAGE_DEVICE_ACCESS_TOKEN**.

## Spark Application

### Step 4. Download the sample application source code

Feel free to grab the [code from this sample Thingsboard repository](https://github.com/thingsboard/samples/tree/master/spark-kafka-streaming-integration) and follow along.

### Step 5. Dependencies review

Sample application was developed using Spark version **2.1.0**. Please consider this if you'll use different version of Spark because in this case you may need to use different version of Kafka Streaming API.

Dependencies that are used in sample project:

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
    <!-- MQTT client dependency to send messages to Thingsboard with average temperature -->
    <dependency>
        <groupId>org.eclipse.paho</groupId>
        <artifactId>org.eclipse.paho.client.mqttv3</artifactId>
        <version>${paho.client.version}</version>
    </dependency>
```

### Step 5. Source code review

Here is a description of particular code snippet from **SparkKafkaStreamingDemoMain** class:

```java
    // Access token of appropriate 'Average Temperature Device'
    private static final String AVERAGE_DEVICE_ACCESS_TOKEN = "$AVERAGE_DEVICE_ACCESS_TOKEN";

    // Kafka brokers URL where Spark Streaming will be fetched messages from topic
    private static final String KAFKA_BROKER_LIST = "localhost:9092";

    // URL of Thingsboard MQTT endpoint
    private static final String THINGSBOARD_MQTT_ENDPOINT = "tcp://localhost:1883";

    // Time interval in milliseconds of Spark Streaming Job, 10 seconds by default
    private static final int STREAM_WINDOW_MILLISECONDS = 10000;

    // Kafka telemetry topic to subscribe to
    private Collection<String> topics = Arrays.asList("sensors-telemetry");

    void start() throws Exception {
        SparkConf conf = new SparkConf().setAppName("Kafka Streaming App").setMaster("local[2]");

        try (JavaStreamingContext ssc = new JavaStreamingContext(conf, new Duration(STREAM_WINDOW_MILLISECONDS))) {

            connectToThingsboard();

            // Declaration of Kafka Stream
            JavaInputDStream<ConsumerRecord<String, String>> stream =
                    KafkaUtils.createDirectStream(
                            ssc,
                            LocationStrategies.PreferConsistent(),
                            ConsumerStrategies.<String, String>Subscribe(topics, getKafkaParams())
                    );

            stream.foreachRDD(rdd ->
            {
                // Fetch temperature from Kafka topic and convert to Double value
                // Wrap in Tuple - <temperature, 1>. '1' means temperature for 1 device
                JavaRDD<Tuple2<Double, Integer>> doubleValues =
                        rdd.map(n -> new Tuple2<>(Double.valueOf(n.value()), 1));

                if (!doubleValues.isEmpty()) {
                    // Reduce tuples to get sum of temperature for all the devices and count of devices
                    // Tuple - <sum of temperature, devices count>
                    Tuple2<Double, Integer> sumTuple = doubleValues
                            .reduce((accum, n) -> new Tuple2<>(accum._1 + n._1, accum._2 + n._2));

                    // Calculate average - sum of temperature/devices count
                    Double averageTemp = sumTuple._1 / sumTuple._2;

                    // Send average temperature to 'Average Temperature Device'
                    String mqttMsg = "{\"temperature\":" + averageTemp + "}";
                    publishTelemetryToThingsboard(mqttMsg);
                }
            });

            // Start of Spark Streaming Process
            ssc.start();
            ssc.awaitTermination();
        }
    }
```

Now let's run **SparkKafkaStreamingDemoMain** class from the IDE or submit it to Spark cluster. Sample app will be fetching all the messages from Kafka topic and send average temperature telemetry to appropriate **'Average Temperature Device'** in *Thingsboard*.

## Dry Run

Once *Kafka Plugin* is configured, *'Average Temperature Device'* is provisioned and *Spark Streaming Application* is running please start sending **temperature** telemetry to set of particular devices and you'll be seeing update to 'Average Temperature Device' every *Spark Streaming window* duration.

For testing purposes you can use **mosquitto_pub** for example:

```bash
mosquitto_pub -d -h "localhost" -p 1883 -t "v1/devices/me/attributes" -u "E3xOohX92WVe2tnEPtG2" -m '{"deviceType":"WeatherStation", "geoZone":"A"}'
mosquitto_pub -d -h "localhost" -p 1883 -t "v1/devices/me/telemetry" -u "E3xOohX92WVe2tnEPtG2" -m '{"windSpeed":42}'
```