
* TOC
{:toc}

## Introduction

The goal of this tutorial is to demonstrate the basic usage of the ThingsBoard MQTT Broker. You will learn how to:
* Connect MQTT clients;
* Publish MQTT message;
* Subscribe to topics to receive published messages;
* Configure authentication and authorization of MQTT clients.

You can navigate to the following [document](/docs/mqtt-broker/architecture/) for more details about the broker architecture.

## Installing ThingsBoard MQTT Broker

Check out [**Installation options**](/docs/mqtt-broker/install/installation-options) for detailed instructions on installing ThingsBoard MQTT Broker on various platforms.

Once the installation is finished for the local deployment, ThingsBoard MQTT Broker UI will be available using the URL: [http://localhost:8083](http://localhost:8083). 
You may use username **sysadmin@thingsboard.org** and password **sysadmin**.

## Publishing and Subscribing to Topics

Now, let's try to publish messages and subscribe to topics to review the message flow. In this tutorial we will be using [Mosquitto](https://mosquitto.org/) clients.
Please review respectful links on how to [publish messages](https://mosquitto.org/man/mosquitto_pub-1.html) to the topic 
and [subscribe](https://mosquitto.org/man/mosquitto_sub-1.html) to topics to receive messages.

**Note,** by default ThingsBoard MQTT Broker does not require the authentication and authorization of clients.

### Subscribe to topic

Use the following command to subscribe to the **sensors/temperature** topic and receive messages from the ThingsBoard MQTT Broker.

```bash
mosquitto_sub -d -h $THINGSBOARD_MQTT_BROKER_HOST_NAME -p 1883 -t sensors/temperature -q 1
```
{: .copy-code}
**Note**, replace the $THINGSBOARD_MQTT_BROKER_HOST_NAME with the correct public IP address or DNS name of the broker. Do the same for publishing the message below.

Once the connection is established successfully we can review the session information on the UI.

{% include images-gallery.html imageCollection="broker-sessions" %}

### Publish message

Use the following command to publish message for the topic **sensors/temperature** to the ThingsBoard MQTT Broker.

```bash
mosquitto_pub -d -h $THINGSBOARD_MQTT_BROKER_HOST_NAME -p 1883 -t sensors/temperature -m 32 -q 1
```
{: .copy-code}

### Result

You should receive and see the published message for the subscribed client.
![image](/images/mqtt-broker/getting-started/broker-pub-sub.png)

## Configure client authentication & authorization

In order to secure the connection to the broker we should enable Basic or TLS authentication.
In this tutorial we will review the [Basic](/docs/mqtt-broker/security/) authentication type.
For this, we need to set `SECURITY_MQTT_BASIC_ENABLED` environment variable to `true`.
**Important**: the above change requires broker restart to apply the changes.

Now, we need to create MQTT Client Credentials of type `MQTT_BASIC` in order to validate the connecting client.

* Navigate to "Client Credentials" tab, click "+" in the top right corner of the table.
* Input credentials name. For example, "Getting Started Credentials". Choose "Device" client type and "MQTT Basic" credentials type.
* Input "username" and "password" with chosen values, add publish authorization pattern to be able to publish to certain topics. For example, "home/.*" will allow publishing to all topics starting with "home/".
* Click "Add" to save credentials.

{% include images-gallery.html imageCollection="broker-mqtt-creds-creation" %}

Once the credentials are provisioned, let's publish a message:

```bash
mosquitto_pub -d -h $THINGSBOARD_MQTT_BROKER_HOST_NAME -p 1883 -t home/temperature -m 32 -q 1 -u username -P password
```
{: .copy-code}

You should see similar output meaning the client was connected and published the message successfully:

![image](/images/mqtt-broker/getting-started/publish-with-auth.png)

## Next Steps

{% assign currentGuide = "GettingStartedGuide" %}{% include templates/mqtt-broker-guides-banner.md %}