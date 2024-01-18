---
layout: docwithnav
title: Performance test tools
description: ThingsBoard IoT Platform data collection performance test tools

---

* TOC
{:toc}

The rapid growth of IoT market dramatically increased the popularity of MQTT protocol. MQTT is supported by the most popular IoT platforms and is used for data collection, push notifications, real-time messaging and other. 

We would like to share our experience with running performance tests against MQTT servers in this article. We are going to concentrate on the tools that we used to generate load on the server. The results of the performance tests for our platform will be published as a separate post.
 
## Gatling

We have chosen [**Gatling**](http://gatling.io/) as a framework to run our test due to a number of reasons:

 * Generates beautiful reports out-of-the-box.
 * High performance and low overhead.
 * Easy setup of load scenarios.
 * [**Scalability**](https://gatling.io/docs/gatling/guides/scaling_out/) of simulations.

Unfortunately Gatling.io framework doesn’t support MQTT protocol out-of-the-box. At the same time, Gatling is an open-source framework and we have found an unofficial MQTT plugin.

#### Gatling MQTT Plugin

[**Gatling-MQTT**](https://github.com/mnogu/gatling-mqtt) plugin was developed by [**Muneyuki Noguchi**](https://github.com/mnogu) and at the moment it is hosted on GitHub under Apache 2.0 License. We have started implementation of ThingsBoard performance testing project using Gatling and Gatling-MQTT plugin. Sometime later we have realized that plugin doesn’t support scenarios that we would like to verify and the behaviour of the default scenario is not something that we have expected.

The problem with the default scenario of the unofficial Gatling-MQTT plugin is that each time when some data is published, a client waits for reply from server and sends MQTT disconnect. So, the message sequence looks like this: 

![image](/images/reference/performance-tools/connect-publish-disconnect.png)

This approach is very resource consuming and gives minimal benefits comparing to HTTP or other protocols. This behaviour is normal for HTTP requests-response model, but not for MQTT. The typical MQTT session is maintained for certain time and multiple MQTT publish messages are sent and received between client and MQTT broker. Of course, there are other types of MQTT messages, but they were out of scope for our tests. In our scenario, load testing of the IOT platform must be done in the following way:

![image](/images/reference/performance-tools/connect-publish-publish-publish-disconnect.png)

So once we have connected a device to the IOT platform that acts as an MQTT broker, we will reuse session and publish MQTT messages using the same session. Sure, the session could be recreated at some point, but not every time we would like to publish a message to the server. 

In order to support this scenario, we have decided not to implement something new from the scratch, but rather to use Gatling-MQTT plugin as a base and considering fact that this is open-source we are free to modify the software as we wish to meet our needs.

#### Gatling MQTT Plugin Fork

We have done the fork of [**Gatling-MQTT**](https://github.com/mnogu/gatling-mqtt) plugin, spent some time on investigation how the plugin was constructed, modified it and added **Connect**, **Publish** and **Disconnect** actions as separate steps. 

Now we were able to support the expected scenario. The extended version of Gatling-MQTT plugin is located here [**Extended Gatling-MQTT**](https://github.com/thingsboard/gatling-mqtt).

Finally, we were able to implement the scenario that suits our needs. The Gatling simulation below will create separate MQTT session for 10 simulated devices and will send 100 publish messages for each session.

**MqttSimulation.scala**

```scala
class MqttSimulation extends Simulation {
    val mqttConfiguration = mqtt
        // MQTT broker
        .host("tcp://localhost:1883")
    
    val connect = exec(mqtt("connect")
        .connect())
    
    // send 100 publish MQTT messages
    val publish = repeat(100) {
        exec(mqtt("publish")
            // topic: "foo"
            // payload: "Hello"
            // QoS: AT_LEAST_ONCE (1)
            // retain: false
            .publish("foo", "Hello", QoS.AT_LEAST_ONCE, retain = false))
            // 1 seconds pause between sending messages
            .pause(1000 milliseconds)
        }
    
    val disconnect = exec(mqtt("disconnect")
      .disconnect())
    
    val scn = scenario("MQTT Test")
      .exec(connect, publish, disconnect)
    
    setUp(scn
        // linearly connect 10 devices over 1 second 
        // and send 100 publish messages
        .inject(rampUsers(10) over (1 seconds))
    ).protocols(mqttConfiguration)
}
```

## Performance tests project

Our performance test project is [**hosted on GitHub**](https://github.com/thingsboard/performance-tests). It is mainly written in Java and uses Maven as a build tool. Gatling and Gatling-MQTT plugin are written in Scala, and use SBT tool for building sources and running tests. But here, at ThingsBoard, we are more Java guys than Scala, that’s why we have implemented custom Java code that connects to the platform, creates a device, warms it up and provides the **credentials id** string back:

**MqttSimulation.scala**

```scala
// get the device credential ids of the created devices
val deviceCredentialsIds: Array[String] = MqttStressTestTool.createDevices(testParams).asScala.toArray
```

**MqttStressTestTool.java**

```java
RestClient restClient = new RestClient(params.getRestApiUrl());
// login to the ThingsBoard server
restClient.login(params.getUsername(), params.getPassword());
for (int i = 0; i < params.getDeviceCount(); i++) {
    // create device using REST API
    Device device = restClient.createDevice("Device " + UUID.randomUUID());
    // get credentials from the created device
    DeviceCredentials credentials = restClient.getCredentials(device.getId());
    // store in the array that eventually will be used by Simulation class    
    deviceCredentialsIds.add(credentials.getCredentialsId());
    String[] mqttUrls = params.getMqttUrls();
    String mqttURL = mqttUrls[i % mqttUrls.length];
    MqttStressTestClient client = new MqttStressTestClient(results, mqttURL, credentials.getCredentialsId());
    // connect to the server and do the warm up 
    client.connect().waitForCompletion();
    client.warmUp(data);
    client.disconnect();
}
Thread.sleep(1000);
```

The list of credential ids is used in **MqttSimulation.scala** file to do the stress test itself:

```scala
// get the device credential ids of the created devices
val deviceCredentialsIds: Array[String] = MqttStressTestTool.createDevices(testParams).asScala.toArray

// provide device credential id as username during the connection phase to the ThingsBoard server
val mqttConf = mqtt
    .host(testParams.getMqttUrls.head)
    .userName("${deviceCredentialsId}")

val connect = exec(mqtt("connect").connect())

val publish = repeat(testParams.getPublishTelemetryCount.toInt) {
    exec(mqtt("publish") 
        // publish single message and verify that it was delivered at least once
        .publish("v1/devices/me/telemetry", "{\"temp\":73.2}", QoS.AT_LEAST_ONCE, retain = false))
        .pause(testParams.getPublishTelemetryPause milliseconds)
}

val disconnect = exec(mqtt("disconnect").disconnect())
// create map of device credential ids of the connected devices  
// and use it as a feeder in the scenario
val deviceCredentialsIdsFeeder = deviceCredentialsIds.map( x => {Map("deviceCredentialsId" -> x)})

val scn = scenario("Scenario Name")
    // go over the map and take column deviceCredentialsId as username
    .feed(deviceCredentialsIdsFeeder)
    .exec(connect, publish, disconnect)

setUp(scn
    .inject(rampUsers(deviceCredentialsIds.length) over (1 seconds))
).protocols(mqttConf)
```

For the guys who prefer Java and Maven there is a maven plugin - **gatling-maven-plugin**:

```xml
<plugin>
    <groupId>io.gatling</groupId>
    <artifactId>gatling-maven-plugin</artifactId>
</plugin>
```

This plugin finds *Simulation* files in your project, compiles and runs them. Results will be stored inside of the target folder in a pretty format that you are able to inspect after the run:

![image](/images/reference/performance-tools/gatling-indicators.png)

![image](/images/reference/performance-tools/gatling-statistics.png)

![image](/images/reference/performance-tools/gatling-number-of-requests-per-second.png)

![image](/images/reference/performance-tools/gatling-number-of-responses-per-second.png)

To run the tests you simply can type: 

```bash
mvn clean install gatling:execute
```

## Summary

In general, we have described our approach how we have generated high load on our IoT platform and verified that it provides good results. 

We will share the results of ThingsBoard IoT platform performance tests in the next post.

Also, we’ll describe code changes, improvements and instances tuning that we have done to achieve processing of more than 1 million MQTT messages per minute. These are basically the first steps for us in the direction of performance testing of the platform, and any feedback regarding this approach is more than welcome. 

We hope that the experience provided will help you to verify your solutions against load specifications that you expect to see in the production. Stay tuned by subscribing to our twitter, blog or by starring our project on Github.
