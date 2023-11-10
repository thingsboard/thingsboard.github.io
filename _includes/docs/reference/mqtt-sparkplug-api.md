
* TOC
{:toc}

## Prerequisites

We assume you have completed the general [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide
to get familiar with ThingsBoard. We also recommend to review the [Device Profiles](/docs/{{docsPrefix}}user-guide/device-profiles/) documentation first.

## Sparkplug basics

[Sparkplug](https://sparkplug.eclipse.org/) is an open source software specification that provides MQTT clients the framework 
to seamlessly integrate data from their applications, sensors, devices, and gateways within the MQTT Infrastructure.

ThingsBoard acts as an MQTT Server which support the SparkPlug payload and topic structure and allows connections from the 
MQTT Edge of Network (EoN) Node.

The EoN Node is any V3.1.1 compliant MQTT Client application that manages an MQTT Session and provides the physical and/or 
logical gateway functions. The EoN node is responsible for any local protocol interface to existing legacy devices 
(PLCs, RTUs, Flow Computers, Sensors, etc.) and/or any local discrete I/O, and/or any logical internal process variables(PVs).

The protocol [specification](https://sparkplug.eclipse.org/specification/version/2.2/documents/sparkplug-specification-2.2.pdf) 
defines both MQTT topic and message structure for the EoN Nodes to communicate with the MQTT Server.
Single EoN Node may represent multiple physical devices and sensors and upload device metrics for each of those devices.
ThingsBoard decodes the device metrics from the Sparkplug payload and stores it as a corresponding device 
[attributes](/docs/{{docsPrefix}}user-guide/attributes/) or [time-series](/docs/{{docsPrefix}}user-guide/telemetry/) data. 
You may also issue an update to the Sparkplug device using 
[shared attributes update](#update-metrics-from-shared-attributes-to-mqtt-eondevice) or 
[rpc command](#update-metrics--using-the-thingsboard-rpc-command-from-server-to-mqtt-eondevice).

{% capture difference %}
**NOTE:**
<br>
ThingsBoard supports **Sparkplug™ B** payloads only.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Getting started

This guide will teach us how to: connect Sparkplug EoN node to ThingsBoard,
collect device metrics and store them as ThingsBoard time-series data,
and push commands back to devices.

### Step 1. Create device profile

First you need to create MQTT [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/) for Sparkplug devices:

1. Navigate to *Profiles -> Device profiles* page and click on the "+" icon in the device profile table header to open the *Add device profile* dialog;
2. Use *MQTT EoN Node* as profile name or any other meaningful value;
3. Navigate to *Transport configuration* tab and select the *MQTT* transport type;
4. Make sure you have selected the "MQTT Sparkplug B Edge of Network (EoN) node" checkbox;
5. Input the names of Sparkplug metrics you would like to store as attributes instead of time-series data. 
   This list should also include metrics you may want to update from the server side and push to the device.
   Simple asterisk suffix is supported as a wildcard. For example: "Node Control/\*\", "Device Control/\*\", "Properties/\*\".

{% include images-gallery.html imageCollection="sparkplug-create-device-profile" %}

### Step 2. Configure the EoN node credentials

1. Navigate to *Entities -> Devices* page and click on the "+" icon in the device table header to open the *Add new device* dialog;
2. Input your EoN node device name (e.g. *Node 1*) and select the existing device profile: *MQTT EoN Node*.
3. Create device and navigate to the device details. Copy the access token. We will use it in the next step. Note that you may use other types of [credentials](/docs/{{docsPrefix}}user-guide/device-credentials/) as well.

{% include images-gallery.html imageCollection="sparkplug-create-device" %}

### Step 3. Launch the EoN node emulator

We have prepared sparkplug node [emulator](https://github.com/thingsboard/sparkplug-emulator) for the testing purposes.
Let's launch it and connect to our platform instance. We will use access token credentials from the previous step:

{% if docsPrefix == null %}
```bash
docker run -e SPARKPLUG_SERVER_URL='tcp://demo.thingsboard.io:1883' -e SPARKPLUG_CLIENT_MQTT_USERNAME='YOUR_THINGSBOARD_DEVICE_TOKEN' thingsboard/tb-sparkplug-emulator:latest
```
{: .copy-code}

Don't forget to replace <code>YOUR_THINGSBOARD_DEVICE_TOKEN</code> with the actual value of the token.
You should also replace <code>demo.thingsboard.io</code> with your server hostname.
{% endif %}
{% if docsPrefix == "pe/" %}
```bash
docker run -e SPARKPLUG_SERVER_URL='tcp://YOUR_SERVER_HOSTNAME:1883' -e SPARKPLUG_CLIENT_MQTT_USERNAME='YOUR_THINGSBOARD_DEVICE_TOKEN' thingsboard/tb-sparkplug-emulator:latest
```
{: .copy-code}

Don't forget to replace <code>YOUR_THINGSBOARD_DEVICE_TOKEN</code> with the actual value of the token.
You should also replace <code>YOUR_SERVER_HOSTNAME</code> with your server hostname.
{% endif %}
{% if docsPrefix == "paas/" %}
```bash
docker run -e SPARKPLUG_SERVER_URL='tcp://thingsboard.cloud:1883' -e SPARKPLUG_CLIENT_MQTT_USERNAME='YOUR_THINGSBOARD_DEVICE_TOKEN' thingsboard/tb-sparkplug-emulator:latest
```
{: .copy-code}

Don't forget to replace <code>YOUR_THINGSBOARD_DEVICE_TOKEN</code> with the actual value of the token.
You should also replace <code>thingsboard.cloud</code> with your server hostname.
{% endif %}

{% capture difference %}
**Please note**
<br>
You can't use <code>localhost</code> as a <code>SPARKPLUG_SERVER_URL</code> inside the docker container.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/reference/sparkplug/sparkplug-emulator-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](https://img.thingsboard.io/reference/sparkplug/sparkplug-emulator-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](https://img.thingsboard.io/reference/sparkplug/sparkplug-emulator-pe.png)
{% endif %}

Once the emulator will launch successfully, you should see the following messages:

```shell
2023-05-04 13:40:42,787 [pool-2-thread-1] INFO  o.t.sparkplug.SparkplugEmulation - Publishing [Sparkplug Node 1] NBIRTH
2023-05-04 13:40:42,815 [pool-2-thread-1] INFO  o.t.sparkplug.SparkplugEmulation - Publishing [Sparkplug Device 1] DBIRTH
2023-05-04 13:40:42,816 [pool-2-thread-1] INFO  o.t.sparkplug.SparkplugEmulation - Publishing [Sparkplug Device 2] DBIRTH
```

### Step 4. Observe device metrics as attributes and telemetry

Navigate to the details of the EoN node device (e.g. *Node 1*) and open the *Latest telemetry* tab. You should see the device metrics, for example *Current Grid Voltage*.
Navigate to the *Attributes* tab and select *Shared attributes* scope. You will see metrics that you have previously configured in the [Step 1](#step-1-create-device-profile) (item 5).

{% include images-gallery.html imageCollection="sparkplug-create-device-telemetry-and-attributes" %}

Refresh the *Devices* page and note that two new Sparkplug devices are created by the emulator: "Sparkplug Device 1" and "Sparkplug Device 2". 
Both devices have their own attributes and telemetry values that are generated by the emulator.  

Additionally, a separate device profile is created for the two new devices with a name consisting of your Sparkplug node's name + "device".

{% include images-gallery.html imageCollection="sparkplug-create-two-devices" %}

### Step 5. Push updates to Sparkplug metrics from Thingsboard server to MQTT EON and Device

You may push update to Sparkplug node/device metric from ThingsBoard via shared attribute update or RPC command. 

#### Update Metrics using shared attributes

ThingsBoard [Shared Attributes](/docs/{{docsPrefix}}user-guide/attributes/#shared-attributes) are used to deliver metric value updates to the device.
You may change the shared attribute in multiple ways - via administration UI, dashboard widget, REST API, or rule engine node.

<br>
Let's manually change the values of the attributes "*Outputs/LEDs/Green*" and "*Device Control/Scan Rate*".

To change the value of the attribute "Outputs/LEDs/Green", you first need to add a particular metric to the *MQTT EoN Node* device profile to store it as a shared attribute instead of telemetry.
In the *Transport сonfiguration* tab, add a new Sparkplug metric name — *"Outputs/\*\"*.

{% include images-gallery.html imageCollection="sparkplug-update-metrics-using-shared-attributes-1" %}

Go back to the *Devices* page and select the *Sparkplug Device 1*.
On the *Shared attributes* tab, you will see two new attributes: "*Outputs/LEDs/Green*" with the value "*true*" and "*Outputs/LEDs/Yellow*" with the value "*false*".
These are metrics that are stored as attributes, and we can modify and send their values to the device.

{% include images-gallery.html imageCollection="sparkplug-update-metrics-using-shared-attributes-2" %}

Click on the "pencil" icon and change the value of the attribute "*Outputs/LEDs/Green*" from "true" to "false" by unchecking the corresponding box. Then, click Update. An attribute with the name "*Outputs/LEDs/Green*" and the value "*false*" is sent from the server to the device "*Sparkplug Device 1*".

In the *Terminal* where the emulator is running, you should see the following messages:

```shell
2023-05-04 14:09:00,417 [MQTT Call: Sparkplug Node 1] INFO  o.t.sparkplug.SparkplugMqttCallback - Message Arrived on topic spBv1.0/Sparkplug Group 1/DCMD/Sparkplug Node 1/Sparkplug Device 1
2023-05-04 14:09:00,417 [MQTT Call: Sparkplug Node 1] INFO  o.t.sparkplug.SparkplugMqttCallback - Command: [DCMD]  nodeDeviceId: [Sparkplug Device 1]
2023-05-04 14:09:00,417 [MQTT Call: Sparkplug Node 1] INFO  o.t.sparkplug.SparkplugMqttCallback - Metric [Outputs/LEDs/Green] value [false]
```

As you can see, the new attribute value for "*Outputs/LEDs/Green*" has been successfully sent to the device.

{% include images-gallery.html imageCollection="sparkplug-update-metrics-using-shared-attributes-3" %}

Now let's change the value of the "*Device Control/Scan Rate*" attribute. Click on the "pencil" icon and change the value from "*60000*" to "*30000*". Click Update.

When the new value for the "*Device Control/Scan Rate*" attribute is sent to the "*Sparkplug Device 1*" device, you will see the following messages in the *Terminal*:

```shell
2023-05-04 14:16:51,715 [MQTT Call: Sparkplug Node 1] INFO  o.t.sparkplug.SparkplugMqttCallback - Message Arrived on topic spBv1.0/Sparkplug Group 1/DCMD/Sparkplug Node 1/Sparkplug Device 1
2023-05-04 14:16:51,715 [MQTT Call: Sparkplug Node 1] INFO  o.t.sparkplug.SparkplugMqttCallback - Command: [DCMD]  nodeDeviceId: [Sparkplug Device 1]
2023-05-04 14:16:51,715 [MQTT Call: Sparkplug Node 1] INFO  o.t.sparkplug.SparkplugMqttCallback - Metric [Device Control/Scan Rate] value [30000]
```

{% include images-gallery.html imageCollection="sparkplug-update-metrics-using-shared-attributes-4" %}

The attribute values for "*Outputs/LEDs/Green*" and "*Device Control/Scan Rate*" have been changed and sent to the "*Sparkplug Device 1*" device.

{% include images-gallery.html imageCollection="sparkplug-update-metrics-using-shared-attributes-5" %}

#### Update Metrics  using the ThingsBoard RPC command from server to MQTT EON/Device

ThingsBoard supports on-demand update to metrics of the Sparkplug EoN Node or Device using RPC(Remote Procedure Call) feature. We also use term "command" instead of RPC for simplicity.
You can send the command using REST API, dashboard widget, rule engine, or custom script.
See the structure of the command is documented [here](/docs/{{docsPrefix}}user-guide/rpc/#server-side-rpc).

Key properties of the command are *method* and *params*.
The *method* defines the Sparkplug operation and is one of the following:

 * NCMD - command to the EoN Node;
 * DCMD - command to the EoN Device;

The *params* is a JSON that defines the metric and the value.

For example, to reboot the Sparkplug EoN *Node*, you should send the following command:

  ```json
  {
    "method": "NCMD",
    "params": {"metricName": "Node Control/Reboot", "value": true}
  }
  ```
  {: .copy-code}

To reboot the Sparkplug EoN *Device*, you should send the following command: 

  ```json
  {
    "method": "DCMD",
    "params": {"metricName": "Device Control/Reboot", "value": true}
  }
  ```
  {: .copy-code}

In this example, we will use the "*RPC Button*" widget to reboot *Sparkplug EoN Node*. See the step-by-step guide with screenshots below.

Go to the *Dashboards* page and create a new dashboard named *Sparkplug*. Open the dashboard and add new alias by clicking on *Entity aliases* icon.
Name the alias (*EoN Node*, for example), select filter type "*Single Entity*", type "*Device*" and choose *Node 1*. Press Add and then Save.

{% include images-gallery.html imageCollection="sparkplug-update-metrics-using-the-thingsboard-rpc-command-1" %}

Now create a new widget. Click "Add new widget", select the *Control widgets* bundle from the drop-down menu and select the *RPC Button* widget. On the *Data* field select created alias (EoN Node). 
Go to *Advanced* tab and enter *button label* - REBOOT NODE. In the *RPC settings* enter *RPC method* - "NCMD" (command to the EoN Node) and *RPC method params* - "*{"metricName": "Node Control/Reboot", "value": true}*". Click Add and save changes.

{% include images-gallery.html imageCollection="sparkplug-update-metrics-using-the-thingsboard-rpc-command-2" %}

Now click "*REBOOT NODE*" button on the widget. RPC command with name "Node Control/Reboot" and value "true" is sent from the server to the node "*Sparkplug Node 1*".

{% include images-gallery.html imageCollection="sparkplug-update-metrics-using-the-thingsboard-rpc-command-3" %}

In the *Terminal* where the emulator is running, you should see the following messages:

```shell
2023-05-04 14:27:02,215 [MQTT Call: Sparkplug Node 1] INFO  o.t.sparkplug.SparkplugMqttCallback - Message Arrived on topic spBv1.0/Sparkplug Group 1/NCMD/Sparkplug Node 1
2023-05-04 14:27:02,215 [MQTT Call: Sparkplug Node 1] INFO  o.t.sparkplug.SparkplugMqttCallback - Command: [NCMD]  nodeDeviceId: [Sparkplug Node 1]
2023-05-04 14:27:02,215 [MQTT Call: Sparkplug Node 1] INFO  o.t.sparkplug.SparkplugMqttCallback - Metric [Node Control/Reboot] value [true]
```

The *Sparkplug EoN Node 1* has been rebooted.

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
