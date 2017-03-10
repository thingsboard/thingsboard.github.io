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

Feel free to grab the [code from this sample Thingsboard repository](https://github.com/thingsboard/samples/tree/master/spark-kafka-streaming-integration) and follow along.

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

## Sample Run

Once *Kafka Plugin* is configured, *'Average Temperature Device'* is provisioned and *Spark Streaming Application* is running please start sending **temperature** telemetry to set of particular devices and you'll be seeing update to 'Average Temperature Device' every *Spark Streaming window* duration.

For testing purposes you can use **mosquitto_pub** for example:

```bash
mosquitto_pub -d -h "localhost" -p 1883 -t "v1/devices/me/telemetry" -u "$DEVICE_TOKEN_1" -m '{"temperature":70.0}'
mosquitto_pub -d -h "localhost" -p 1883 -t "v1/devices/me/telemetry" -u "$DEVICE_TOKEN_2" -m '{"temperature":71.0}'
mosquitto_pub -d -h "localhost" -p 1883 -t "v1/devices/me/telemetry" -u "$DEVICE_TOKEN_3" -m '{"temperature":72.0}'
```