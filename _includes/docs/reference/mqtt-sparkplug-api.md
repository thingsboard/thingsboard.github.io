
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

**NOTE:** ThingsBoard supports **Sparkplug™ B** payloads only. 

## Getting started

This guide will teach us how to: connect Sparkplug EoN node to ThingsBoard, 
collect device metrics and store them as ThingsBoard time-series data, 
and push commands back to devices.  

### Step 1. Create device profile

First you need to create MQTT [device profile](/docs/{{docsPrefix}}user-guide/device-profiles/) for Sparkplug devices:

1. Navigate to *Profiles->Device Profiles* and click on the "+" icon in the device profile table header to open the *Add device profile* dialog;
2. Use *MQTT EoN Node* as profile name or any other meaningful value;
3. Navigate to *Transport configuration* tab and select the *MQTT* transport type;
4. Make sure you have selected the "MQTT Sparkplug B Edge of Network (EoN) node" checkbox;
5. Input the names of Sparkplug metrics you would like to store as attributes instead of time-series data. 
   This list should also include metrics you may want to update from the server side and push to the device.
   Simple asterisk suffix is supported as a wildcard. For example: "Node Control/*", "Device Control/*", "Properties/*".  
   
### Step 2. Configure the EoN node credentials

1. Navigate to *Entities->Devices* and click on the "+" icon in the device table header to open the *Add new device* dialog;
2. Input your EoN node device name (e.g. *Node 1*) and select the existing device profile: *Sparkplug EoN Node*.
3. Create device and navigate to the device details. Copy the access token. We will use it in the next step. Note that you may use other types of [credentials](/docs/{{docsPrefix}}user-guide/device-credentials/) as well.

### Step 3. Launch the EoN node emulator

We have prepared sparkplug node [emulator](https://github.com/thingsboard/sparkplug-emulator) for the testing purposes.
Let's launch it and connect to our platform instance. We will use access token credentials from the previous step:

TODO: the demo.thingsboard.io should be relaced with thingsboard.cloud for PE and PAAS.

```bash
docker run -e SPARKPLUG_SERVER_URL='tcp://demo.thingsboard.io:1883' -e SPARKPLUG_CLIENT_MQTT_USERNAME='YOUR_THINGSBOARD_DEVICE_TOKEN' thingsboard/tb-sparkplug-emulator:latest
```

Don't forget to replace <code>YOUR_THINGSBOARD_DEVICE_TOKEN</code> with the actual value of the token. 
You may also replace <code>demo.thingsboard.io</code> with your server hostname. 
Please note that you can't use <code>localhost</code> inside the docker container.

Once the emulator will launch successfully, you should see the following messages:

```shell
2023-04-27 11:59:46,885 [pool-2-thread-1] INFO  o.t.sparkplug.SparkplugEmulation - Publishing [Sparkplug Node 1] NBIRTH
2023-04-27 11:59:46,898 [pool-2-thread-1] INFO  o.t.sparkplug.SparkplugEmulation - Publishing [Sparkplug Device 1] DBIRTH
2023-04-27 11:59:46,900 [pool-2-thread-1] INFO  o.t.sparkplug.SparkplugEmulation - Publishing [Sparkplug Device 2] DBIRTH
```

### Step 4. Observe device metrics as attributes and telemetry

Navigate to the details of the EoN node device and open the *Latest telemetry* tab. You should see the device metrics, for example *Current Grid Voltage*.
Navigate to the *Attributes* tab and select *Shared attributes* scope. You should see metrics that you have previously configured in the [Step 1](#step-1-create-device-profile).

**Note:** Use *Device Profile -> Transport configuration -> SparkPlug metrics to store as attributes* to configure Sparkplug metrics that should be stored as shared attributes instead of telemetry.

Navigate to the Devices table and note that two new Sparkplug devices are created by the emulator: "Sparkplug Device 1" and "Sparkplug Device 2". 
Both devices have their own attributes and telemetry values that are generated by the emulator.  

### Step 5. Push updates to Sparkplug metrics from Thingsboard server to MQTT EON and Device

You may push update to Sparkplug node/device metric from ThingsBoard via shared attribute update or RPC command. 

#### Update Metrics using shared attributes

ThingsBoard [Shared Attributes](docs/{{docsPrefix}}user-guide/attributes/#shared-attributes) are used to deliver metric value updates to the device.
You may change the shared attribute in multiple ways - via administration UI, dashboard widget, REST API, or rule engine node.

**Note:** To update particular metric you need to add it to the *Device Profile -> Transport configuration -> SparkPlug metrics to store as attributes* list.

TODO: replace LEDs and Current Grid Voltage with the *Node Control/Scan Rate* example.

{% include images-gallery.html imageCollection="sparkplug-node-device-change-shared-sttributes" showListImageTitles="true" %}

#### Update Metrics  using the ThingsBoard RPC command from server to MQTT EON/Device

ThingsBoard supports on-demand update to metrics of the Sparkplug EoN Node or Device using RPC(Remote Procedure Call) feature. We also use term "command" instead of RPC for simplicity.
You can send the command using REST API, dashboard widget, rule engine, or custom script.
See the structure of the command is documented [here](/docs/{{docsPrefix}}user-guide/rpc/#server-side-rpc).

Key properties of the command are *method* and *params*.
The *method* defines the Sparkplug operation and is one of the following:

 * NCMD - command to the EoN Node;
 * DCMD - command to the EoN Device;

The *params* is a JSON that defines the metric and the value.

For example, to reboot the Sparkplug EoN Node, you should send the following command:
  
  ```json
  {
    "method": "NCMD",
    "params": {"metricName": "Node Control/Reboot", "value": true}
  }
  ```
  {: .copy-code}

For example, to reboot the Sparkplug EoN Device, you should send the following command: 

  ```json
  {
    "method": "DCMD",
    "params": {"metricName": "Device Control/Reboot", "value": true}
  }
  ```
  {: .copy-code}

TODO: replace images below with the reboot Device/Node button example.

{% include images-gallery.html imageCollection="sparkplug-node-device-change-rpc" showListImageTitles="true" %}


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}