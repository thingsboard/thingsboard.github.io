
* TOC
{:toc}

## Introduction

The goal of this tutorial is to showcase the fundamental usage of the ThingsBoard MQTT Broker. 
Through this tutorial, you will gain knowledge and proficiency in the following areas:

* Establishing connections between MQTT clients and the broker.
* Publishing MQTT messages.
* Subscribing to topics to receive published messages.
* Configuring authentication and authorization mechanisms for MQTT clients.

For more comprehensive information regarding the architecture of the ThingsBoard MQTT Broker, navigate to the following [document](/docs/mqtt-broker/architecture/).
This resource will provide you with detailed insights into the underlying structure and design principles of the broker,
allowing you to develop a deeper understanding of its inner functionalities.

## Installing ThingsBoard MQTT Broker

To obtain detailed instructions on how to install the ThingsBoard MQTT Broker on different platforms, we recommend exploring the
[**Installation options**](/docs/mqtt-broker/install/installation-options) documentation. 
This resource will provide you with step-by-step guidance tailored to various deployment scenarios.

Once the installation process is complete for local deployment, you can access the ThingsBoard MQTT Broker UI by visiting the following URL: [http://localhost:8083](http://localhost:8083). 
To log in, utilize the following default credentials.

**Username:**
```text
sysadmin@thingsboard.org
```
{: .copy-code}
**Password:**
```text
sysadmin
```
{: .copy-code}

## Publishing and Subscribing to Topics

Now, let's proceed with publishing messages and subscribing to topics to observe the flow of messages. In this tutorial, 
we will utilize [Mosquitto](https://mosquitto.org/) clients for this purpose. 
Please refer to the following links to learn how to [publish messages](https://mosquitto.org/man/mosquitto_pub-1.html) to a topic and
[subscribe](https://mosquitto.org/man/mosquitto_sub-1.html) to topics in order to receive messages.

**Please note** that by default, ThingsBoard MQTT Broker does not require authentication and authorization for clients.

### Subscribe to topic

To subscribe to the **sensors/temperature** topic and start receiving messages from the ThingsBoard MQTT Broker, you can utilize the following command:

```bash
mosquitto_sub -d -h $THINGSBOARD_MQTT_BROKER_HOST_NAME -p 1883 -t sensors/temperature -q 1
```
{: .copy-code}
**Note**, replace the $THINGSBOARD_MQTT_BROKER_HOST_NAME with the correct public IP address or DNS name of the broker. 
Kindly replicate the aforementioned process for publishing the message below.

Upon successful establishment of the connection, we can proceed to examine the session information within the UI.

{% include images-gallery.html imageCollection="broker-sessions" %}

### Publish message

To publish a message to the ThingsBoard MQTT Broker for the topic **sensors/temperature**, you can utilize the following command:

```bash
mosquitto_pub -d -h $THINGSBOARD_MQTT_BROKER_HOST_NAME -p 1883 -t sensors/temperature -m 32 -q 1
```
{: .copy-code}

### Result

You should receive and observe the published message for the subscribed client.
![image](/images/mqtt-broker/getting-started/broker-pub-sub.png)

## Configure client authentication & authorization

In order to secure the connection to the broker we should enable Basic or TLS authentication.
In this tutorial, we will focus on the [Basic](/docs/mqtt-broker/security/) authentication type.
For this, we need to set `SECURITY_MQTT_BASIC_ENABLED` environment variable to `true`.
It is **important** to note that implementing this change requires restarting the broker for the modifications to take effect.

Once Basic authentication is enabled, it is necessary to create MQTT Client Credentials of type `Basic` to authenticate and validate the connecting client. 

* Navigate to "Credentials" tab, click "+" in the top right corner of the table.
* Input credentials name. For example, "Getting Started Credentials".
* Input "username" and "password" with chosen values. For example, use `username` and `password` values respectively.
* Click "Add" to save credentials.

{% include images-gallery.html imageCollection="broker-mqtt-creds-creation" %}

Once the credentials are provisioned, we can proceed to publish the message:

```bash
mosquitto_pub -d -h $THINGSBOARD_MQTT_BROKER_HOST_NAME -p 1883 -t home/temperature -m 32 -q 1 -u username -P password
```
{: .copy-code}

**Note**, replace `username` and `password` values according to the specified ones in the provisioned credentials.

Upon successful execution of the steps, you should observe a similar output, indicating that the client has been connected and the message has been published successfully.

![image](/images/mqtt-broker/getting-started/publish-with-auth.png)

## Next Steps

{% assign currentGuide = "GettingStartedGuide" %}{% include templates/mqtt-broker-guides-banner.md %}