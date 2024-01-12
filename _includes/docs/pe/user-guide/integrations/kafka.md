{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Kafka Integration

[Apache Kafka](https://kafka.apache.org/) — is an open-source distributed software message broker under the Apache foundation. It is written in the Java and Scala programming languages.

Designed as a distributed, horizontally scalable system that provides capacity growth both with an increase in the number and load from the sources, and the number of subscriber systems. Subscribers can be combined into groups. Supports the ability to temporarily store data for subsequent batch processing.

In some scenarios, Kafka can be used instead of a message queue, in cases where there is no stable connection between the device and an instance.

![image](/images/user-guide/integrations/kafka/Kafka_main.png)

## Required environment
Before you start setting up the integration, you should already have a prepared Broker Kafka server. This is either a local installation or a cloud solution. If you haven't installed Kafka Broker yet, there is an example of basic installation of Kafka Broker locally on [our site](https://thingsboard.io/docs/user-guide/install/pe/ubuntu/?ubuntuThingsboardQueue=kafka#step-5-choose-thingsboard-queue-service). If you need to use a cloud solution, then you can consider [Kafka Confluent](https://www.confluent.io/), on the basis of which examples will be built in this guide.

## Create Uplink Converter

Before creating the integration, you need to create an Uplink converter in Data converters. Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard. Click on the **“plus”** and on **“Create new converter”**. To view the events, enable Debug. In the function decoder field, specify a script to parse and transform data.

{% capture kafka_please_note %}
**Note:** While debug mode is very useful for development and troubleshooting, leaving it enabled in production mode can significantly increase the disk space used by the database since all debug data is stored there. After debugging is complete, it is highly recommended turning off debug mode.
{% endcapture %}
{% include templates/info-banner.md content=kafka_please_note %}

Let’s review sample uplink message from Kafka:
```json
{
  "EUI"  : "43T1YH-REE",
  "ts"   : 1638876127000,
  "data"  : "3d1f0059",
  "port" : 10,
  "freq" : 24300,
  "rssi" : -130,
  "serial"  : "230165HRT"
}
```
**EUI** is responsible for the name of the device. The **"data"** is a telemetry concatenation by two characters, where the first value **"3d"** - temperature, **"1f"** - humidity, **"00"** - fan speed, **"59"** - pressure.

You can use the following code, copy it to the decoder function section:

```js
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object
/** Decoder **/
// decode payload to JSON
var payloadJson = decodeToJson(payload);
// Use EUI as unique device name.
var deviceName = payloadJson.EUI;
// Specify the device type. Use one data converter per device type or application.
var deviceType = 'Monitoring-sensor';
// Optionally, add the customer name and device group to automatically create them in ThingsBoard and assign new device to it.
// var customerName = 'customer';
// var groupName = 'thermostat devices';
// Result object with device/asset attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: deviceType,
//   customerName: customerName,
//   groupName: groupName,
   attributes: {},
   telemetry: {
        ts: payloadJson.ts,
        values: {
            Temperature:hexToInt(payloadJson.data.substring(0,2)),
            Humidity:   hexToInt(payloadJson.data.substring(2,4)),
            Fan:        hexToInt(payloadJson.data.substring(4,6)),
            Port:       payloadJson.port,
            Freq:       payloadJson.freq,
            Pressure:   hexToInt(payloadJson.data.substring(6,8)),
            rssi:       payloadJson.rssi,
            serial:     payloadJson.serial
       }
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

function hexToInt(value) {
    return parseInt('0x' + value.match(/../g).reverse().join(''));
}

return result;
```
{: .copy-code}

{% include images-gallery.html imageCollection="Create Uplink Converter" %}

You can change the parameters and decoder code when creating a converter or editing. If the converter has already been created, click the pencil icon to edit it. Copy the sample converter configuration (or use your own configuration) and paste it into the decoder function. Then save the changes by clicking the checkmark icon.

## Create Integration

After creating the Uplink converter, it is possible to create an integration. 
At this stage, you need to set the parameters to establish a connection between ThingsBoard and Kafka Broker. After the connection is established, the integration will be transmitting all received data to the Uplink converter for processing and subsequent transfer to Rule Chain according to the Device profile specified in the Device.

|**Field**|**Description**|
|:-|:-|-
| **Name**              | The name of your integration.|
| **Type**              | Choose Kafka type.|
| **'Enable' Checkbox**              | Enable / Disable Integration.|
| **'Debug Mode' Checkbox**              | Enable during integration debugging.|
| **Allow create devices or assets**              | If there was no device in ThingsBoard, the device will be created.|
| **Uplink data converter**              | Select the previously created converter.|
| **Downlink data converter**              | This option is not supported through the integration, More details about [Downlink](https://thingsboard.io/docs/user-guide/integrations/kafka/?installationType=common&integrationTypes=common&uplinkTypes=common#advanced-usage-kafka-producer-downlink) below in the guide.|
| **'Execute remotely' Checkbox**              | Activate if you want to execute integration remotely from main ThingsBoard instance. For more information on remote integration follow the [link (Remote Integrations)](https://thingsboard.io/docs/user-guide/integrations/remote-integrations/).|
| **Group ID**              | Specifies the name of the consumer group to which the Kafka consumer belongs.|
| **Client ID**              | An Kafka consumer identifier in a consumer group.|
| **Topics**              | Topics that ThingsBoard will subscribe to after connecting to the Kafka broker.|
| **Bootstrap servers**              | Host and port pair that is the address of the Kafka broker to which the Kafka client first connects for bootstrapping.|
| **Poll interval**              | Duration in milliseconds between polling of the messages if no new messages arrive.|
| **Auto create topics**              | Set **Enable** if need topics to be created automatically|
| **Other properties**              | Any other additional properties could be provided for kafka broker connection..|
| **Metadata**              | Metadata is a key-value map with some integration specific fields. For example, you can put device type.|
|---

{% capture integrationTypes %}
Kafka<br><small>Common/Docker </small>%,%common%,%templates/integration/kafka/kafka-common-and-docker-integration%br%
Confluent Cloud<br><small>Cloud solution</small>%,%confluent%,%/templates/integration/kafka/kafka-confluent-integration{% endcapture %}

{% include content-toggle.liquid content-toggle-id="integrationTypes" toggle-spec=integrationTypes %}

## Send test Uplink message from

{% capture uplinkTypes %}
Kafka<br><small>Common/Docker </small>%,%common%,%templates/integration/kafka/kafka-common-and-docker-send-msg%br%
Confluent Cloud<br><small>Cloud solution</small>%,%confluent%,%/templates/integration/kafka/kafka-confluent-send-msg{% endcapture %}

{% include content-toggle.liquid content-toggle-id="uplinkTypes" toggle-spec=uplinkTypes %}

## Advanced Usage: Kafka Producer (Downlink)

To get functionality such as Kafka Producer, you need to use the [Kafka Rule Node](https://thingsboard.io/docs/pe/user-guide/rule-engine-2-0/external-nodes/#kafka-node) in which you can specify Bootstrap servers, Topic and other parameters to connect to the Kafka broker, you can find more details in the corresponding [guide](https://thingsboard.io/docs/pe/user-guide/rule-engine-2-0/external-nodes/#kafka-node) .

If it is not possible to send commands directly to devices to manage from ThingsBoard, but only through a broker, then in this case you can use the Kafka Downlink Rule Node. Let's consider a small example with its Node, suppose the data came from the broker and passed the converter and, according to the config of Device Profile, were directed to the custom Rule Chain ("Monitoring-sensor") and at the end of all processing, we will send a response about success or failure back to the broker ( you can change the response to commands to control your device, etc.)

{% include images-gallery.html imageCollection="kafka_confluent_downlink" %}

Сheck whether the message has been transmitted, you can see in the Events tab of Kafka Rule Node with enable Debug Mode:

{% include images-gallery.html imageCollection="kafka_confluent_downlink_result" %}

{% capture kafka_note_downnlink %}
**Note**: Using the same broker topic for uplink and downlink connections can lead to data loops.
{% endcapture %}

{% include templates/info-banner.md content=kafka_note_downnlink %}

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
