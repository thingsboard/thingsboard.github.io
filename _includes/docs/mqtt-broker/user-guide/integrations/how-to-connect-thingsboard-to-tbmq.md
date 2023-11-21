{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

**TBMQ** is an industry-ready MQTT broker developed and distributed under the ThingsBoard umbrella that facilitates MQTT client connectivity, message publishing, and distribution among subscribers.

In this guide, we integrate the TBMQ with the ThingsBoard using MQTT integration. 
We utilize TBMQ client credentials with the type **APPLICATION** to connect ThingsBoard integration as an APPLICATION client.
APPLICATION clients specialize in subscribing to topics with high message rates. 
The messages will be persisted when the client is offline and will be delivered once it goes online, ensuring the availability of crucial data. 
Read more about the APPLICATION client [here](https://thingsboard.io/docs/mqtt-broker/user-guide/mqtt-client-type/).

ThingsBoard MQTT Integration acts as an MQTT client. It subscribes to topics and converts the received data into telemetry and attribute updates. 
In case of a downlink message, MQTT integration converts it to the device-suitable format and pushes it to TBMQ. 
Pay attention: TBMQ should be either co-located with the ThingsBoard instance or deployed in the cloud and have a valid DNS name or static IP address. 
ThingsBoard instance that is running in the cloud can’t connect to the TBMQ deployed in the local area network with no internet connection.

### Prerequisites

In this tutorial, we will use:

 - The instance of [ThingsBoard Professional Edition](https://thingsboard.io/docs/user-guide/install/pe/installation-options/) installed locally;
 - [TBMQ](https://thingsboard.io/docs/mqtt-broker/install/installation-options/) installed locally and accessible by ThingsBoard PE instance;
 - mosquitto_pub MQTT client to send messages.

### TBMQ setup

First, we need to create TBMQ client credentials to use them for connecting ThingsBoard integration to TBMQ.

To do this, login to your TBMQ user interface and follow the next steps.

{% include images-gallery.html imageCollection="create-client-credentials" showListImageTitles="true" %}

{% capture difference %}
**Please note**:
<br>
The "SECURITY_MQTT_BASIC_ENABLED" environment variable must be set to "true".
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Now you can proceed to the next step - configuration of ThingsBoard integration.

### ThingsBoard setup

In this example, we will use the MQTT integration to connect the ThingsBoard to TBMQ.
Before setting up an MQTT integration, you need to create uplink converter.

#### Uplink Converter

The purpose of the decoder function is to parse the incoming data and metadata to a format that ThingsBoard can consume.

To create uplink converter, go to the "Integrations center" section -> "Data converters" page and click on the "plus" icon. Name it "TBMQ Uplink Converter" and select type "Uplink". Paste the decoder script below into the decoder functions section. Click "Add".

{% include images-gallery.html imageCollection="create-uplink-converter" %}

In our example, use the following script for the decoder function section:

{% include templates/tbel-vs-js.md %}

{% capture mqttuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/mqtt-broker/user-guide/integrations/mqtt/tbmq-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/mqtt-broker/user-guide/integrations/mqtt/tbmq-uplink-converter-config-javascript.md{% endcapture %}

{% include content-toggle.html content-toggle-id="mqttuplinkconverterconfig" toggle-spec=mqttuplinkconverterconfig %}

#### MQTT Integration Setup

Now create an integration.

{% include images-gallery.html imageCollection="create-integration" showListImageTitles="true" %}

Now go to the "Sessions" page in the TBMQ UI. Upon successful establishment of the connection between ThingsBoard and TBMQ, we will see a new session and its status - "Connected".

{% include images-gallery.html imageCollection="successful-connection-tbmq-to-thingsboard" %}

And on the "Topics" page of the "Kafka Management" menu section you will see a name of Kafka topic (which corresponds to the client ID specified in the MQTT integration), number of partitions, replication factor and size of the topic.

{% include images-gallery.html imageCollection="tbmq-home-page" %}

#### Send Uplink message

Now let's simulate the device sending a temperature reading to TBMQ. 

Open the terminal and execute the following command to send a message with temperature readings in a simple format: *`{"value":25.1}`* to the topic "tb/mqtt-integration-tutorial/sensors/SN-001/temperature":

```shell
mosquitto_pub -h $THINGSBOARD_MQTT_BROKER_HOST_NAME -p 1883 -q 1 -t "tb/mqtt-integration-tutorial/sensors/SN-001/temperature" -m '{"value":25.1}' -u "username" -P "password"
```
{: .copy-code}

Replace the `$THINGSBOARD_MQTT_BROKER_HOST_NAME` with the correct public IP address or DNS name of the broker, `username` and `password` values according to the specified ones in the provisioned credentials.

Use the following command for our example:

```shell
mosquitto_pub -h localhost -p 1883 -q 1 -t "tb/mqtt-integration-tutorial/sensors/SN-001/temperature" -m '{"value":25.1}' -u "tb-pe" -P "secret"
```
{: .copy-code}

![image](https://img.thingsboard.io/mqtt-broker/user-guide/integrations/how-to-connect-tbqm-to-thingsboard/tbmq-uplink-message-1.png)

After you sent uplink message, go to your integration in ThingsBoard UI and navigate to the "Events" tab. There you'll see the message consumed by the "MQTT Integration".

{% include images-gallery.html imageCollection="tbmq-integration-events" %}

Go to the "Entities" section -> "Devices" page. You should find a SN-001 device provisioned by the integration.
Click on the device, go to "Latest Telemetry" tab to see "temperature" key and its value (25.1) there.

{% include images-gallery.html imageCollection="tbmq-create-device" %}

### Next steps

{% assign currentGuide = "TBIntegrationGuide" %}{% include templates/mqtt-broker-guides-banner.md %}
