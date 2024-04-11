{% assign peDocsPrefix = '' %}
{% if docsPrefix == 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% endif %}

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

### Overview

ThingsBoard Platform integrations feature was designed for two primary use cases / deployment options:

  - Connect existing NB IoT, LoRaWAN, SigFox and other devices with specific payload formats directly to ThingsBoard platform.
  - Stream data from devices connected to existing IoT Platforms to enable real-time interactive dashboards and efficient data processing.
  
Both use cases have few things in common. There is a server-side component in the deployment topology that prevents direct access to device and provides set of APIs to interact with the device in the field instead.
The payload format of the device is not well-defined. Often two devices that have similar sensors have different payload formats depending on a vendor or even software version.  

The job of ThingsBoard Integration is to provide secure and reliable API bridge between core platform features (telemetry collection, attributes and RPC calls) and specific third-party platform APIs.    

### How it works?

At the moment ThingsBoard supports various integration protocols. Most popular are HTTP, MQTT and OPC-UA. 
Platform also support integration with specific LoRaWAN Network servers, Sigfox backend, various NB IoT devices using raw UDP and TCP integrations. 
AWS IoT, IBM Watson and Azure Event Hub allows to subscribe to the data feed from devices via MQTT or AMQP.

![image](/images/user-guide/integrations/integration.png)

The list of platform integrations is constantly growing, however, the general integration concepts are the same and explained below.  

Once message arrives from External Platform to ThingsBoard it passes validation according to platform specific payload format and security rules. 
Once message is validated ThingsBoard Integration invokes assigned [**Uplink Data Converter**](/docs/{{peDocsPrefix}}user-guide/integrations/#uplink-data-converter) to extract sub-set of meaningful information out of the incoming message.
The message is basically transformed from device and platform specific payload to the format that ThingsBoard uses.

Since TB PE v2.0, Rule Engine is also able to push Downlink messages to the integrations. The example of such message may be:
 
 - notification about [shared attribute](/docs/{{docsPrefix}}user-guide/attributes/#device-specific-attribute-types) (configuration) update;
 - notification about [oneway RPC call](/docs/{{docsPrefix}}user-guide/rpc/#server-side-rpc-api) to trigger some action on the device;
 - any custom message from the rule engine.
 
The most common use cases are:
 
 - changing data upload frequency based on shared attribute value change
 - triggering firmware update procedure based on shared attribute value change
 - changing device state based on rpc call;    
 
Once message is pushed by the rule engine, ThingsBoard invokes assigned [**Downlink Data Converter**](/docs/{{peDocsPrefix}}user-guide/integrations/#downlink-data-converter) and transforms the rule engine message to the specific data format that is used by the Integration.

<br>

<object width="80%" data="/images/user-guide/integrations/integrations-overview.svg"></object>
 
 
### Deployment options
 
ThingsBoard Integration has two deployment options: embedded and remote. See details and architecture diagrams below.

#### Embedded integrations

Embedded integration is running in the main ThingsBoard server process. Basically it is part of a monolith deployment scenario.

Pros:
  * simplifies deployment of new integration (just few clicks on ThingsBoard UI);
  * minimize latency for message delivery;
  
Cons:
  * consume resources allocated to main ThingsBoard process: network connections, OS threads and CPU cycles;
  * low level of isolation;
  * can't access local MQTT brokers or OPC-UA servers if ThingsBoard is deployed in the cloud.
  
<object width="60%" data="/images/user-guide/integrations/embeded-integrations-overview.svg"></object> 
  
#### Remote integrations
 
Remote integration become available since ThingsBoard PE v2.4.1 and enables new deployment scenario. 
One can install remote integration in the local network and stream data to the cloud.   

Let's assume you have local MQTT broker or OPC-UA server deployed on-premises. 
Those brokers and/or servers don't have dedicated external IP address, so ThingsBoard instance in the cloud can't connect to them directly. 
However, you can install remote integration close to this server, in the same local network. 
This integration will connect to the broker/server, pull the data and store it in the local file system.
Remote integration will stream the data to the ThingsBoard instance deployed in the cloud once the internet connection is available.

Pros:
  * enables integration with servers deployed in the local network;
  * isolates the integration process from main ThingsBoard process;
  
Cons:
  * requires installation of a separate package;

Learn how to configure integration to run remotely using [this guide](/docs/{{peDocsPrefix}}user-guide/integrations/remote-integrations).

<object width="70%" data="/images/user-guide/integrations/remote-integrations-overview.svg"></object> 

### Data Converters

Data Converters is a part of the Platform Integrations feature. There are **Uplink** and **Downlink** data converters.
 
#### Uplink Data Converter

The main function of **Uplink Data Converter** is to parse payload of the incoming message and transform it to format that ThingsBoard uses.

To create an Uplink Converter go to Data Converters section and Click Add new data converter —> Create new converter. Enter converter name, select its type, specify a script to parse and transform data. Optional you can turn the Debug mode. Click “Add” to create converter.

![image](/images/user-guide/integrations/uplink-converter-add.png)

<br>
Uplink Converter is basically a user defined function with the following signature:

```javascript
function Decoder(payload, metadata);
```

##### Payload

Payload is one of the following content types: JSON, TEXT, Binary(Base64) and is specific to your Integration type.

Default Uplink Converter is dummy, but contains few helper functions to transform incoming payload:

```javascript
function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
   // covert payload to string.
   var str = decodeToString(payload);
   // parse string to JSON
   return JSON.parse(str);
}
```

There are also **btoa** and **atob** functions available to decode Binary(Base64) payload.  

##### Metadata

Metadata is a key-value map with some integration specific fields. You can configure additional metadata for each integration in the integration details.
For example, you can put device type as an additional Integration metadata parameter and use it to automatically assign corresponding device type to new devices.

##### Converter output
 
Converter output should be a valid JSON document with the following structure:

```json
{
    "deviceName": "Device A",
    "deviceType": "thermostat",
    "customerName": "Company Name",
    "groupName": "Thermostats",
    "attributes": {
        "model": "Model A",
        "serialNumber": "SN-111",
        "integrationName": "Test integration"
    },
    "telemetry": {
        "temperature": 42,
        "humidity": 80
    }
}
```

{% capture difference %}
**NOTE**:
<br>
The only mandatory parameters in the output JSON are **deviceName** and **deviceType**.
Starting version 2.4.2, ThingsBoard also supports **assetName** and **assetType** instead of deviceName and deviceType.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% capture difference %}
**NOTE**:
<br>
Starting version 2.4.2, ThingsBoard also support optional **customerName** and **groupName**.
Those parameters will cause ThingsBoard to automatically create customer and/or entity group and assign those entities to the customer and/or group.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Converter may also output array of device values and/or contain timestamps in the telemetry values. For example:

```json
[
    {
        "deviceName":"SN-111",
        "deviceType":"thermostat",
        "attributes":{
            "model":"Model A"
        },
        "telemetry":[
            {
                "ts":1527863043000,
                "values":{
                    "battery":3.99,
                    "temperature":27.05
                }
            },
            {
                "ts":1527863044000,
                "values":{
                    "battery":3.98,
                    "temperature":27.06
                }
            }
        ]
    },
    {
        "assetName":"OF-123",
        "assetType":"office",
        "attributes":{
            "model":"Model A"
        },
        "telemetry":{
            "ts":1527863041000,
            "values":{
                "battery":3.99,
                "temperature":27.05
            }
        }
    }
]
```

##### Update only keys field

To avoid constant updates for telemetry attributes or keys, you can use the "Update only keys list" field.  
Any keys provided in this field that exist in the telemetry or attribute arrays in the message after conversion will not be updated if the values associated with those keys have not changed from their previous values.

{% capture update-only-keys-cluster-mode %}
Please note that in a cluster setup, values, associated with keys specified in the "Update only keys list" field may be updated more than once if a message is received by a different integration executor nodes.  
The same behavior is expected if the converter configuration has been updated.  
{% endcapture %}
{% include templates/warn-banner.md content=update-only-keys-cluster-mode %}

##### Example

Let's assume a complex example where payload is encoded in hex "value" field and there is a timestamp associated with each record. 
First two bytes of "value" field contain battery and second two bytes contain temperature. See payload example and metadata on a screen shoot below.

{% include templates/tbel-vs-js.md %}

{% capture uplinkdataconverterexample1 %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/overview/uplink-data-converter-example-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/overview/uplink-data-converter-example-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="uplinkdataconverterexample1" toggle-spec=uplinkdataconverterexample1 %}




See video tutorial below for step-by-step instruction how to setup Uplink Data Converter.

<br>
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/CojStpYCTGI" frameborder="0" allowfullscreen></iframe>
    </div>
</div> 

#### Downlink Data Converter
 
The main function of **Downlink Data Converter** is to transform the incoming rule engine message and its metadata 
to the format that is used by corresponding Integration.

To create a Downlink Converter go to Data Converters section and Click Add new data converter —> Create new converter. Enter converter name, select its type, specify a script to parse and transform data. Optional you can turn the Debug mode. Click “Add” to create converter.

![image](/images/user-guide/integrations/downlink-converter-add.png)

<br>
Downlink Converter is basically a user defined function with the following signature:

```javascript
function Encoder(msg, metadata, msgType, integrationMetadata);
```

Where

 - **msg** - JSON with rule engine msg
 - **metadata** - list of key-value pairs with additional data about the message (produced by the rule engine)
 - **msgType** - Rule Engine message type. See [predefined message types](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types) for more details.
 - **integrationMetadata** - key-value map with some integration specific fields. You can configure additional metadata for each integration in the integration details.
  
##### Converter output

Converter output should be a valid JSON document with the following structure:

```json
{
    "contentType": "JSON",
    "data": "{\"tempFreq\":60,\"firmwareVersion\":\"1.2.3\"}",
    "metadata": {
        "topic": "temp-sensor/sensorA/upload"
    }
}
```

Where 

 - **contentType** - JSON, TEXT or BINARY (Base64 string) and is specific to your Integration type.
 - **data** - data string according to the content type
 - **metadata** - list of key-value pairs with additional data about the message. For example, topic to use for MQTT integration, etc.

##### Example

Let's assume an example where temperature and humidity upload frequency attributes are updated via ThingsBoard REST API and 
you would like to push this update to an external MQTT broker (TTN, Mosquitto, AWS IoT, etc). 
You may also want to include the "firmwareVersion" attribute value that was configured long time ago and is not present in this particular request.
The topic to push the update should contain the device name.

{% include templates/tbel-vs-js.md %}

{% capture downlinkdataconverterexample1 %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/overview/downlink-data-converter-example-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/overview/downlink-data-converter-example-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="downlinkdataconverterexample1" toggle-spec=downlinkdataconverterexample1 %}

In order to invoke the downlink processing by the integration, tenant administrator should configure the rule chain similar to the one below:

![image](/images/user-guide/integrations/downlink-rule-chain-example-pe.png)

The full rule chain configuration is available [**here**](/docs/user-guide/resources/downlink-example-rule-chain.json).

##### Synchronous vs Asynchronous Downlinks 

Most of the integrations are able to process downlink messages to devices asynchronously. 
For example, each message pushed by the rule engine to MQTT based integration is immediately pushed to the corresponding external MQTT broker.

However, some integrations, like SigFox or generic HTTP integration are not able to push message asynchroniously. 
These integrations, due to the nature of underlying HTTP protocol, are only able to push downlink information synchronously in reply to uplink message request. 
In this case, the last downlink message originated by rule engine will be stored in the queue until the new uplink message arrives for particular device.


### Debug mode

This feature allows to persis: 

  - incoming messages from thirdparty system;
  - metadata values;
  - the results of data converter;
  - results of the payload processing. 
  
It enables rapid development of converters and configuration of integrations. 
This feature allows to validate your configuration setup and should be used only for debug purposes, since it dramatically impacts performance.

### Platform Integrations vs IoT Gateway

Experienced ThingsBoard users may notice that functionality of Integrations feature partially overlap with functionality of [IoT Gateway](/docs/iot-gateway/what-is-iot-gateway/).
However, there are key differences between these two systems/features:

  - IoT Gateway is designed for local network deployments, Integrations are designed for server-to-server integrations.
  - IoT Gateway is designed to support < 1000 devices, while Integrations are designed for high throughput, scalability and cluster deployments as part of ThingsBoard server.
  - Gateway recompilation and restart is required to add custom payload decoder while Integration Converter is a JS function that may be modified in real time. 
  
As you can see, both systems are important and applicable in different use cases.

### Feature Roadmap

#### Usage statistics
 
We plan to log statistics for amount of messages processed by each integration with possible limitations of messages processed on a tenant / system levels.

#### More integrations and protocols

We plan to provide specific integrations for different platforms, and also for different communication protocols, like gRPC.

#### More data converters

We plan to collect and maintain data converters for most popular devices on the market to simplify integration path even more. 
Please note that you can share your converters with community and send them to us to make part of official ThingsBoard distributive.   

[Contact us](/docs/contact-us/) to suggest missing feature for your use case.

### See Also

Explore guides and video tutorials related to specific integrations:

 - [HTTP](/docs/{{peDocsPrefix}}user-guide/integrations/http/)
 - [MQTT](/docs/{{peDocsPrefix}}user-guide/integrations/mqtt/)
 - [AWS IoT](/docs/{{peDocsPrefix}}user-guide/integrations/aws-iot/)
 - [AWS Kinesis](/docs/{{peDocsPrefix}}user-guide/integrations/aws-kinesis/)
 - [IBM Watson IoT](/docs/{{peDocsPrefix}}user-guide/integrations/ibm-watson-iot/)
 - [Azure Event Hub](/docs/{{peDocsPrefix}}user-guide/integrations/azure-event-hub/)
 - [Azure IoT Hub](/docs/{{peDocsPrefix}}user-guide/integrations/azure-iot-hub/)
 - [Actility ThingPark](/docs/{{peDocsPrefix}}user-guide/integrations/thingpark/)
 - [TheThingsIndustries](/docs/{{peDocsPrefix}}user-guide/integrations/tti/)
 - [SigFox](/docs/{{peDocsPrefix}}user-guide/integrations/sigfox/)
 - [OceanConnect](/docs/{{peDocsPrefix}}user-guide/integrations/ocean-connect/)
 - [TheThingsStack](/docs/{{peDocsPrefix}}user-guide/integrations/ttn/)
 - [OPC-UA](/docs/{{peDocsPrefix}}user-guide/integrations/opc-ua/)
 - [TCP](/docs/{{peDocsPrefix}}user-guide/integrations/tcp/)
 - [UDP](/docs/{{peDocsPrefix}}user-guide/integrations/udp/)
 - [Custom](/docs/{{peDocsPrefix}}user-guide/integrations/custom/)
 - [LORIOT](/docs/{{peDocsPrefix}}user-guide/integrations/loriot/)
 - [Kafka](/docs/{{peDocsPrefix}}user-guide/integrations/kafka/)
 - [ChirpStack](/docs/{{peDocsPrefix}}user-guide/integrations/chirpstack/)
 - [CoAP](/docs/{{peDocsPrefix}}user-guide/integrations/coap/)



## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}




