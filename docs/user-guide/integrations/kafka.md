---
layout: docwithnav
title: IoT data analytics using Kafka, Kafka Streams and ThingsBoard
description: IoT device data analytics sample using Kafka, Kafka Streams and ThingsBoard

---

{% include templates/old-guide-notice.md %}

* TOC
{:toc}

ThingsBoard rule engine supports basic analysis of incoming telemetry data, for example, threshold crossing.
The idea behind rule engine is to provide functionality to route data from IoT Devices to different plugins, based on device attributes or the data itself.   

However, most of the real-life use cases also require the support of advanced analytics: machine learning, predictive analytics, etc.
  
This tutorial will demonstrate how you can:

 - route telemetry device data from ThingsBoard to Kafka topic using the built-in plugin.
 - aggregate data from multiple devices using a simple Kafka Streams application.
 - push results of the analytics back to ThingsBoard for persistence and visualization using ThingsBoard Kafka Integration.

The analytics in this tutorial is, of course, quite simple, but our goal is to highlight the integration steps.

### Overview

![image]()

Let's assume we have a large number of solar panels which include a number of solar modules. 
ThingsBoard is used to collect, store and visualize anomaly telemetry from these solar modules in each panels.

We calculated anomaly by **deviation**

![image](/images/user-guide/integrations/kafka/deviation.png)

We will analyze real-time data from multiple devices using [Kafka Streams](https://kafka.apache.org/documentation/streams/) job with 10 seconds window.

In order to store and visualize the results of the analytics, we are going to create three virtual solar module devices for each solar panel. 

### Prerequisites

The following services must be up and running:

* ThingsBoard PE v2.4.2+ [instance](/docs/user-guide/install/pe/installation-options/)
* Kafka [start server](https://kafka.apache.org/23/documentation/streams/quickstart#quickstart_streams_download)

The [sample application](https://github.com/thingsboard/kafka-streams-example)

### Uplink Converter

Before setting up a kafka integration, you need to create an Uplink converter.

Let’s create uplink converter.

![image](/images/user-guide/integrations/kafka/kafka-converter.gif)

**NOTE**: Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. 
It is highly recommended to turn the Debug mode off when done debugging. 

See the following script that is pasted to the Decoder function section:

```javascript
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object

/** Decoder **/

// decode payload to string
var msg = decodeToJson(payload);

// decode payload to JSON
// var data = decodeToJson(payload);

var deviceName = msg.moduleName;
var deviceType = 'module';

// Result object with device attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: deviceType,
   attributes: {
       panel: msg.panelName
   },
   telemetry: {
       avgPower: msg.avgPower,
       sumPower: msg.sumPower,
       avgPowerFromPanel: msg.solarPanelAggregator.avgPower,
       deviance: msg.solarPanelAggregator.deviance
   }
};

/** Helper functions **/

function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
   // covert payload to string.
   var str = decodeToString(payload);

   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}

return result;
``` 
The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard can consume. 
**deviceName** and **deviceType** are required, while **attributes** and **telemetry** are optional.
**Attributes** and **telemetry** are flat key-value objects. Nested objects are not supported.

### Kafka Integration Setup
 
Let's create kafka integration. 

![image](/images/user-guide/integrations/kafka/kafka-integration.gif)

### Kafka Integration Application

#### Download the sample application

Feel free to grab the [code from the ThingsBoard repository](https://github.com/thingsboard/kafka-streams-example) and build the project with maven:

```bash
mvn clean install
```

Go ahead and add that maven project to your favorite IDE.

#### Dependencies review

Main dependencies that are used in the project:

```xml
<dependencies>
...
    <dependency>
        <groupId>org.apache.kafka</groupId>
        <artifactId>kafka-streams</artifactId>
        <version>${kafka.version}</version>
    </dependency>
...
</dependencies>
```

#### Source code review
The Kafka Streams Application logic is concentrated mainly in the SolarConsumer class.

```java
private static Properties getProperties() {
    final Properties props = new Properties();
    props.put(StreamsConfig.APPLICATION_ID_CONFIG, "streams");
    props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
    props.put(StreamsConfig.CACHE_MAX_BYTES_BUFFERING_CONFIG, 0);
    props.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass().getName());
    props.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.String().getClass().getName());
    props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "latest");
    return props;
}
```

```java
private static final String IN_TOPIC = "my-topic";

private static final TopicNameExtractor<String, SolarModuleAggregatorJoiner> OUT_TOPIC =
    new StaticTopicNameExtractor<>("my-topic-output");

// Time for windowing
private static final Duration DURATION = Duration.ofSeconds(10);

private static final TimeWindows TIME_WINDOWS = TimeWindows.of(DURATION);

private static final JoinWindows JOIN_WINDOWS = JoinWindows.of(DURATION);

private static final StreamsBuilder builder = new StreamsBuilder();


// serde - Serializer/Deserializer
// for custom classes should be custom Serializer/Deserializer
private static final Serde<SolarModuleData> SOLAR_MODULE_DATA_SERDE =
    Serdes.serdeFrom(new JsonPojoSerializer<>(), new JsonPojoDeserializer<>(SolarModuleData.class));

private static final Serde<SolarModuleAggregator> SOLAR_MODULE_AGGREGATOR_SERDE =
    Serdes.serdeFrom(new JsonPojoSerializer<>(), new JsonPojoDeserializer<>(SolarModuleAggregator.class));

private static final Serde<SolarPanelAggregator> SOLAR_PANEL_AGGREGATOR_SERDE =
    Serdes.serdeFrom(new JsonPojoSerializer<>(), new JsonPojoDeserializer<>(SolarPanelAggregator.class));

private static final Serde<SolarModuleKey> SOLAR_MODULE_KEY_SERDE =
    Serdes.serdeFrom(new JsonPojoSerializer<>(), new JsonPojoDeserializer<>(SolarModuleKey.class));

private static final Serde<SolarPanelAggregatorJoiner> SOLAR_PANEL_AGGREGATOR_JOINER_SERDE =
    Serdes.serdeFrom(new JsonPojoSerializer<>(), new JsonPojoDeserializer<>(SolarPanelAggregatorJoiner.class));

private static final Serde<SolarModuleAggregatorJoiner> SOLAR_MODULE_AGGREGATOR_JOINER_SERDE =
    Serdes.serdeFrom(new JsonPojoSerializer<>(), new JsonPojoDeserializer<>(SolarModuleAggregatorJoiner.class));

private static final Serde<String> STRING_SERDE = Serdes.String();

private static final Serde<Windowed<String>> WINDOWED_STRING_SERDE = Serdes.serdeFrom(
    new TimeWindowedSerializer<>(STRING_SERDE.serializer()),
    new TimeWindowedDeserializer<>(STRING_SERDE.deserializer(), TIME_WINDOWS.size()));

// 1 - sigma
private static final double Z = 1;
```

```java
// source stream from kafka
final KStream<SolarModuleKey, SolarModuleData> source =
    builder
        .stream(IN_TOPIC, Consumed.with(STRING_SERDE, SOLAR_MODULE_DATA_SERDE))
        .map((k, v) -> KeyValue.pair(new SolarModuleKey(v.getPanel(), v.getName()), v));


// calculating sum power and average power for modules
final KStream<Windowed<SolarModuleKey>, SolarModuleAggregator> aggPowerPerSolarModuleStream =
     source
        .groupByKey(Grouped.with(SOLAR_MODULE_KEY_SERDE, SOLAR_MODULE_DATA_SERDE))
        .windowedBy(TIME_WINDOWS)
        .aggregate(SolarModuleAggregator::new,
            (modelKey, value, aggregation) -> aggregation.updateFrom(value),
            Materialized.with(SOLAR_MODULE_KEY_SERDE, SOLAR_MODULE_AGGREGATOR_SERDE))
        .suppress(Suppressed.untilTimeLimit(DURATION, Suppressed.BufferConfig.unbounded()))
        .toStream();


// calculating sum power and average power for panels
final KStream<Windowed<String>, SolarPanelAggregator> aggPowerPerSolarPanelStream =
    aggPowerPerSolarModuleStream
        .map((k, v) -> KeyValue.pair(new Windowed<>(k.key().getPanelName(), k.window()), v))
        .groupByKey(Grouped.with(WINDOWED_STRING_SERDE, SOLAR_MODULE_AGGREGATOR_SERDE))
        .aggregate(SolarPanelAggregator::new,
            (panelKey, value, aggregation) -> aggregation.updateFrom(value),
            Materialized.with(WINDOWED_STRING_SERDE, SOLAR_PANEL_AGGREGATOR_SERDE))
        .suppress(Suppressed.untilTimeLimit(DURATION, Suppressed.BufferConfig.unbounded()))
        .toStream();


 // if used for join more than once, the exception "TopologyException: Invalid topology:" will be thrown
final KStream<Windowed<String>, SolarModuleAggregator> aggPowerPerSolarModuleForJoinStream =
    aggPowerPerSolarModuleStream
        .map((k, v) -> KeyValue.pair(new Windowed<>(k.key().getPanelName(), k.window()), v));


// joining aggregated panels with aggregated modules
// need for calculating sumSquare and deviance
final KStream<Windowed<String>, SolarPanelAggregatorJoiner> joinedAggPanelWithAggModule =
    aggPowerPerSolarPanelStream
        .join(
            aggPowerPerSolarModuleForJoinStream,
            SolarPanelAggregatorJoiner::new, JOIN_WINDOWS,
            Joined.with(WINDOWED_STRING_SERDE, SOLAR_PANEL_AGGREGATOR_SERDE, SOLAR_MODULE_AGGREGATOR_SERDE));


//calculating sumSquare and deviance
final KStream<Windowed<String>, SolarPanelAggregator> aggPowerPerSolarPanelFinalStream =
    joinedAggPanelWithAggModule
        .groupByKey(Grouped.with(WINDOWED_STRING_SERDE, SOLAR_PANEL_AGGREGATOR_JOINER_SERDE))
        .aggregate(SolarPanelAggregator::new,
            (key, value, aggregation) -> aggregation.updateFrom(value),
            Materialized.with(WINDOWED_STRING_SERDE, SOLAR_PANEL_AGGREGATOR_SERDE))
        .suppress(Suppressed.untilTimeLimit(DURATION, Suppressed.BufferConfig.unbounded()))
        .toStream();


// joining aggregated modules with aggregated panels in which calculated sumSquare and deviance
// need for check modules with anomaly power value
final KStream<Windowed<String>, SolarModuleAggregatorJoiner> joinedAggModuleWithAggPanel =
    aggPowerPerSolarModuleStream
        .map((k, v) -> KeyValue.pair(new Windowed<>(k.key().getPanelName(), k.window()), v))
        .join(
            aggPowerPerSolarPanelFinalStream,
            SolarModuleAggregatorJoiner::new, JOIN_WINDOWS,
            Joined.with(WINDOWED_STRING_SERDE, SOLAR_MODULE_AGGREGATOR_SERDE, SOLAR_PANEL_AGGREGATOR_SERDE));


// streaming result data (modules with anomaly power value)
joinedAggModuleWithAggPanel
    .filter((k, v) -> isAnomalyModule(v))
    .map((k, v) -> KeyValue.pair(k.key(), v))
    .to(OUT_TOPIC, Produced.valueSerde(SOLAR_MODULE_AGGREGATOR_JOINER_SERDE));


// starting streams
final KafkaStreams streams = new KafkaStreams(builder.build(), getProperties());
streams.cleanUp();
streams.start();
Runtime.getRuntime().addShutdownHook(new Thread(streams::close));
```


**Calculating anomaly data**

![image](/images/user-guide/integrations/kafka/latex.png)
 
```java
private static boolean isAnomalyModule(SolarModuleAggregatorJoiner module) {
    double currentZ = Math.abs(module.getSumPower() - module.getSolarPanelAggregator().getAvgPower()) / module.getSolarPanelAggregator().getDeviance();
    return currentZ > Z;
}
```

### Kafka rule chain

![image](/images/user-guide/integrations/kafka/rule_chain.png)

#### Generator Module 1

![image](/images/user-guide/integrations/kafka/module_1.png)

#### Generator Module 2

![image](/images/user-guide/integrations/kafka/module_2.png)

#### Generator Module 3

![image](/images/user-guide/integrations/kafka/module_3.png)

**Module 3 with anomaly data!!!**

#### External Kafka

![image](/images/user-guide/integrations/kafka/external_kafka.png)


### Anomaly detecting result

![image](/images/user-guide/integrations/kafka/modules_telemetry.gif)

**Module 3 has anomaly data!!!**

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}