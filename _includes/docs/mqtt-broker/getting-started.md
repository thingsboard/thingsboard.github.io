
* TOC
{:toc}

### Introduction

The goal of this tutorial is to showcase the fundamental usage of [TBMQ](/docs/mqtt-broker/getting-started-guides/what-is-thingsboard-mqtt-broker/). 
Through this tutorial, you will gain knowledge and proficiency in the following areas:

* Establishing connections between MQTT clients and the broker.
* Publishing MQTT messages.
* Subscribing to topics to receive published messages.
* Configuring authentication and authorization mechanisms for MQTT clients.

For more comprehensive information regarding the architecture of TBMQ, navigate to the following [document](/docs/mqtt-broker/architecture/).
This resource will provide you with detailed insights into the underlying structure and design principles of the broker,
allowing you to develop a deeper understanding of its inner functionalities.

### Installing TBMQ

To obtain detailed instructions on how to install TBMQ on different platforms, we recommend exploring the
[**Installation options**](/docs/mqtt-broker/install/installation-options) documentation. 
This resource will provide you with step-by-step guidance tailored to various deployment scenarios.

Follow the below instructions depending on your system for quick TBMQ installation.

{% capture contenttogglespec %}
Linux & Mac OS%,%linuxmacos%,%templates/mqtt-broker/install/linux-macos/linux-macos.md%br%
Windows%,%windows%,%templates/mqtt-broker/install/windows/windows.md{% endcapture %}

{% include content-toggle.html content-toggle-id="tbmqGettingStartedInstallation" toggle-spec=contenttogglespec %}

Once the installation process is complete for local deployment, you can access TBMQ UI by visiting the following URL: **http://localhost:8083**. 
Wait patiently until the services are up and running. To log in, utilize the following default credentials.

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

### Configure client authentication & authorization

In order to secure the connection to the broker we should enable Basic or TLS authentication.
In this tutorial, we will focus on the [Basic](/docs/mqtt-broker/security/#basic-authentication) authentication type.
For this, we have set `SECURITY_MQTT_BASIC_ENABLED` environment variable to `true` in the `docker-compose.yml` downloaded in the previous step.

Once Basic authentication is enabled, it is necessary to create MQTT Client Credentials of type `Basic` to authenticate and validate the connecting client.

* Navigate to "Credentials" tab, click "+" in the top right corner of the table.
* Input credentials name. For example, "Getting Started Credentials".
* Input "username" and "password" with chosen values. For example, use `username` and `password` values respectively.
* Authorization rules are set to allow publishing/subscribing to any topic by default.
* Click "Add" to save credentials.

{% include images-gallery.html imageCollection="broker-mqtt-creds-creation" %}

A wider range of authentication methods can be found within the [security guide](/docs/mqtt-broker/security/), offering enhanced options for ensuring secure access.

### Publishing and Subscribing to Topics

Now, let's proceed with publishing messages and subscribing to topics to observe the flow of messages. In this tutorial, 
we will utilize [Mosquitto](https://mosquitto.org/) clients for this purpose. 

Please refer to the following links to learn how to [publish messages](https://mosquitto.org/man/mosquitto_pub-1.html) to a topic and
[subscribe](https://mosquitto.org/man/mosquitto_sub-1.html) to topic filters in order to receive messages.

#### Subscribe to topic

To subscribe to the **sensors/temperature** topic and start receiving messages from TBMQ, you can utilize the following command:

```bash
mosquitto_sub -d -h $THINGSBOARD_MQTT_BROKER_HOST_NAME -p 1883 -t sensors/temperature -q 1 -u username -P password -i tbmq_dev
```
{: .copy-code}

**Note**, replace the **$THINGSBOARD_MQTT_BROKER_HOST_NAME** with the correct public IP address or DNS name of the broker, 
`username` and `password` values according to the specified ones in the provisioned credentials.
Kindly replicate the aforementioned process for publishing the message below.

Use the following command for local deployment:
```bash
mosquitto_sub -d -h localhost -p 1883 -t sensors/temperature -q 1 -u username -P password -i tbmq_dev
```
{: .copy-code}

Upon successful establishment of the connection, we can proceed to examine the session information within the UI.

{% include images-gallery.html imageCollection="broker-sessions" %}

#### Publish message

To publish a message to TBMQ for the topic **sensors/temperature**, you can utilize the following command:

```bash
mosquitto_pub -d -h $THINGSBOARD_MQTT_BROKER_HOST_NAME -p 1883 -t sensors/temperature -m 32 -q 1 -u username -P password
```
{: .copy-code}

Use the following command for local deployment:
```bash
mosquitto_pub -d -h localhost -p 1883 -t sensors/temperature -m 32 -q 1 -u username -P password
```
{: .copy-code}

#### Result

You should receive and observe the published message for the subscribed client.

![image](https://img.thingsboard.io/mqtt-broker/getting-started/broker-pub-sub.png)

### Next Steps

{% assign currentGuide = "GettingStartedGuide" %}{% include templates/mqtt-broker-guides-banner.md %}
