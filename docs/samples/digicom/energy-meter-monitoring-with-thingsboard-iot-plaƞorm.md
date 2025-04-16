---
layout: docwithnav
assignees:
- stitenko
title: Energy Meter monitoring with ThingsBoard IoT Platform
description: Energy Meter monitoring with ThingsBoard IoT Platform
hidetoc: "true"

---

* TOC
{:toc}

![image](/images/samples/digicom/head1.png)

Digicom devices are designed to interoperate with ThingsBoard IoT platforms by providing the necessary settings and functionalities to be easily integrated, allowing you to create dashboards where data and telemetry can be displayed and monitored.

This tutorial is intended to be an integration guide focused on setting up a professional monitoring application, covering the basic aspects of your Digicom device and the corresponding ThingsBoard configuration using the MQTT protocol integration

![image](/images/samples/digicom/scenario1.png)

The described scenario includes your Digicom device being connected to an MQTT broker and ThingsBoard being subscribed to those data streams through an MQTT integration, thus converting the payloads into its message format through a specific Data Converter.

Before you start: To make this tutorial work, you need:
- A Digicom device like DRN500 or DRN3000 Multifunction Routers with firmware release 1.10 or newer
- A ThingsBoard instance on Cloud or Premise with a publicly reachable address

## ThingsBoard setup

First of all, activate your ThingsBoard account, whether it is on Cloud or Premise. You can find detailed instructions on how to install and set up your personal ThingsBoard instance in the More References and Guides chapter. 

Log in and get ready for your configuration!

## Create the MQTT integration

We will start by defining the data ingress section. [MQTT Integration](/docs/{{docsPrefix}}user-guide/integrations/mqtt/){:target="_blank"} allows to connect to external MQTT brokers, subscribe to data streams from those brokers and convert any type of payload from your devices to ThingsBoard message format. Its typical use is whenever your devices are already connected to external MQTT broker or any other IoT platform or connectivity provider with MQTT based back-end.

Go to the "**Integrations center**" section -> "**Integrations**" page and click "**plus**" button to create new integration. Select type "**MQTT**". Click "**Next**";

![image](/images/samples/digicom/integ-mqtt-1.png)

<br>
At the next step, give a name to the [Uplink data converter](/docs/{{docsPrefix}}user-guide/integrations/#uplink-data-converter){:target="_blank"}, select "**TBEL**", delete the whole content of the function Decoder.

{% capture difference %}
**Notes:** [ThingsBoard Expression Language (TBEL)](/docs/{{docsPrefix}}user-guide/tbel/){:target="_blank"} is an optimized and super-efficient alternative to the original programming language for the UDF, which is JavaScript. TBEL is preferred although JavaScript is and will remain supported.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Paste the following TBEL code inside the function Decoder. Then, click "**Next**".

```js
// *** Digicom Data Converter ***

var variableNamesMap = {
  "Volts": "voltage",
  "Ampere": "current",
  "Frequency": "hertz",
  "kVA": "power"
};

var payload = decodeToJson(payload);
if (payload.modbus == null) {
  return;}
  
var telemetry = [];
var telemetries = payload.modbus.data[0].samples;
foreach(sample: telemetries) {
  var values = {};
  var varName = variableNamesMap[sample.reg];
  if (varName != null) {
    values[varName] = sample.value;
    telemetry.push({
      ts: Long.parseLong(sample
        .timestamp) * 1000,
      values: values
    });
  }}

var result = {
  deviceName: payload.serialnum,
  deviceType: payload.type,
  attributes: {
    model: payload.model,
    integrationName: metadata['integrationName'],
  },
  telemetry: telemetry};
        
/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

return result;
```
{:.copy-code.expandable-10}

![image](/images/samples/digicom/integ-mqtt-2.png)

<br>
Click "**Skip**" in the [Downlink data converter](/docs/{{docsPrefix}}user-guide/integrations/#downlink-data-converter){:target="_blank"} tab.

![image](/images/samples/digicom/integ-mqtt-3.png)

<br>
Fill in the "**Connection**" tab:

- Set the external MQTT broker "**Host**" address and "**Port**";
- Select "**Basic**" for **Credentials type**, enter "**Username**" and "**Password**" (to be used for authenticating on the External MQTT broker);
- Set the following **Topic**:

```
digicom/+/data/modbus
```
{: .copy-code}

- Select **QoS 1**;

Click on "**Check connection**" if you want to test it first.

![image](/images/samples/digicom/integ-mqtt-4.png)

<br>
Click "**Add**" to finish the integration setup.

![image](/images/samples/digicom/integ-mqtt-5.png)

<br>
If the connection is successful, the status of your MQTT integration will be "**Active**". Otherwise, it will remain "Inactive" until the first connection with the external broker takes place.   
If the connection does not succeed, double-check the address, port, and credentials later.

![image](/images/samples/digicom/integ-mqtt-6.png)

## Check and test the data converter

The [Data converter](/docs/{{docsPrefix}}user-guide/integrations/#data-converters){:target="_blank"} is responsible for elaborating and transforming the data structure coming from the device into the telemetry and attribute data format suitable for ThingsBoard.   
From here, we can simulate and test the conversion process even before receiving real data from the device.

Go to the "**Data converters**" page of the "**Integration center**" section. Click on the "**Modbus Data**" conveter, and then enter edit mode.

![image](/images/samples/digicom/test-data-converter-1.png)

<br>
Once edit mode is active, the "**Test decoder function**" button will become available. Click on it to access the Test environment.

![image](/images/samples/digicom/test-data-converter-2.png)

<br>
Copy the JSON packet code from the below table into the "**Payload content**" tab, then click on "**Test**" button, and check the "**Output**" tab.

```json
{
    "timestamp": "1741688471",
    "serialnum": "50012345",
    "type": "Router500",
    "model": "8D5913",
    "method": "event",
    "msg_cnt": "1494",
    "done": "true",
    "modbus": {
        "data": [{
            "device": "Energy_Meter",
            "event": "read",
            "samples": [{
                "timestamp": "1741869373",
                "reg": "Volts",
                "unit": "V",
                "value": "228.800000",
                "deferred": "false"
            }, {
                "timestamp": "1741869374",
                "reg": "Ampere",
                "unit": "A",
                "value": "0.868000",
                "deferred": "false"
            }, {
                "timestamp": "17418693735",
                "reg": "Frequency",
                "unit": "Hz",
                "value": "50",
                "deferred": "false"
            }, {
                "timestamp": "1741869376",
                "reg": "kVA",
                "unit": "kVA",
                "value": "1.491000",
                "deferred": "false"
            }]
        }]
    }
}
```
{:.copy-code.expandable-10}


![image](/images/samples/digicom/test-data-converter-3.png)

<br>
If everything has been correctly set up until now, you will see the result of the transformation process:

```json
{
  "deviceName": "50012345",
  "deviceType": "Router500",
  "attributes": {
    "model": "8D5913",
    "integrationName": "MQTT integration"
  },
  "telemetry": [{
    "ts": 1741869373000,
    "values": {
      "voltage": "228.800000"
    }
  }, {
    "ts": 1741869374000,
    "values": {
      "current": "0.868000"
    }
  }, {
    "ts": 17418693735000,
    "values": {
      "hertz": "50"
    }
  }, {
    "ts": 1741869376000,
    "values": {
      "power": "1.491000"
    }
  }]
}
```

Fine! The data ingress phase is done and working. Click on "**Cancel**" and then on the "**X**" icon to exit edit mode.   
Let's switch to the device setup.

## Device setup

Log in into your device. Enter **Username** and **Password**. Then, click "**Login**" button.

![image](/images/samples/digicom/log1.png)

<br>
This guide will use the Modbus functionalities to read from an Electric Energy Meter and transmit that data to ThingsBoard through the MQTT protocol.
We will concentrate on the Modbus and MQTT setup sections, assuming that the device is already correctly configured for Internet access and that the Modbus physical connections are correctly carried out.   
Select "**Modbus**" – "**COM Configuration**" from the drop-down menu.

![image](/images/samples/digicom/modbus_serial1.png)

<br>
Set the Modbus serial interface **enabled**, set **type**, **speed** and **data format** as for the Energy Meter operating parameters.   
Click on "**Save**" button.

![image](/images/samples/digicom/Immagine-11.png)

<br>
Go to the "**Modbus**" –> "**Modbus Master**" from the drop-down menu.   
Click on "**Add**" button.

![image](/images/samples/digicom/Immagine-13.png)

<br>
Set the Modbus Master profile to **enabled**, set **Name**, **ID**, **Connection type**, **COM type** and **settings**, **rates** and **register formats**. Set the **Data Destination** to **MQTT**, then click "**Save**" button.

![image](/images/samples/digicom/Immagine-14.png)

<br>
Now we will define 4 sample sets of data values (Voltage, Current, Frequency and kVA) be read from the Energy Meter and sent to ThingsBoard as timeseries, for later representation and dashboarding.   
Click on "**Requests**" button.

![image](/images/samples/digicom/slave1.png)

<br>
We fill in the needed parameters for the Voltage (**Volts**) values and click "**Save**" button.

![image](/images/samples/digicom/Immagine-16.png)

<br>
Repeat the previous steps for Current (**Ampere**), Frequency (**Hertz**) and Power (**kVA**) by clicking on "**Add**" button.   
The final result will look as below.

![image](/images/samples/digicom/Immagine-17.png)

<br>
If everything is correct the **Value** column will show coherent measurement data being updated at the given Scan rate.
By clicking on "**Test**" an immediate data value read can be issued. 

<br>
Select **Modbus** – **MQTT Configuration** from the drop-down menu.

![image](/images/samples/digicom/modqtt1.png)

<br>
Fill in the MQTT destination parameters for our external Broker, like **Server Address** and **Port Number**, **Username** and **Password** (in this example our MQTT Broker is set for using **MQTT Basic Authentication**).   
Set the **Publishing topic** to which the device will send the data to. By default, the device does publish to the following topic structure for its Modbus data: 

```
digicom/<device SN>/data/modbus
```
{:.copy-code}

Click on "**Save**" button.

![image](/images/samples/digicom/modqtt2.png)

<br>
In order to start the newly configured processes it is needed to restart the device.   
Select **Device** – "**Reboot**" from the drop-down menu.   

![image](/images/samples/digicom/reb1.png)

<br>
Click on "**Reboot**" and **confirm**.

![image](/images/samples/digicom/reb2.png)

Wait for the device to become operational again, then go back to ThingsBoard account and check the device appearing in the "**Devices**" page.

## Check the device

Go to the "**Devices**" page of the "**Entities**" section from menu bar on the left.
A new [device](/docs/{{docsPrefix}}user-guide/ui/devices/){:target="_blank"} should appear as soon as it has published the first data to the external MQTT broker on which ThingsBoard is connected too.

![image](/images/samples/digicom/check-device-1.png)

<br>
Check data telemetries and attributes.
Click on the device row (not on the checkbox) and go to the "**Last telemetry**" tab.
This panel shows the latest values of the measurements the Data converter has extracted from the data stream.

Navigate to the "**Attributes**" tab.
This panel shows the latest Client and Server attributes the Data converter has extracted from the data stream.

![image](/images/samples/digicom/check-device-2.png)

<br>
So, with those data in the system we can now proceed and create a simple Dashboard.

## Create a Dashboard

ThingsBoard offers a powerful feature – the ability to create and customize interactive visualizations, also known as [Dashboards](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"}. These dashboards are instruments for monitoring and managing your data and devices efficiently.

Navigate to the "**Dashboards**" page through the main menu on the left of the screen. Click the "**+**" sign in the upper right corner of the screen, and select "**Create new dashboard**" from the drop-down menu.
In the opened dialog, it is necessary to enter a dashboard title, description is optional. Click "**Add**".

![image](/images/samples/digicom/dashboard-energy-meter-1.png)

<br>
After creating the dashboard, it will open automatically, and you can immediately start adding widgets to it.   
Click the "**Add widget**" button at the top of the screen or click the large "**Add new widget**" icon in the center of the screen (if this is your first widget on this dashboard).

![image](/images/samples/digicom/dashboard-energy-meter-2.png)

<br>
Find the "**Analogue gauges**" widget bundle and click on it.

![image](/images/samples/digicom/dashboard-energy-meter-3.png)

<br>
Select the "**Radial gauge**" widget.

![image](/images/samples/digicom/dashboard-energy-meter-4.png)

<br>
The "Add Widget" window will appear. Specify the device "**50012345**" as the data source in the "**Device**" field. 
Specify the telemetry key "**power**" as **Data key**.   
Scroll down and set other details as you prefer, like the title, units, minimum and maximum ranges for the gauge scale.

If you want to customize further, go to the "**Advanced**" and go deeper in the widget appearance and styling.

Click on "**Add**".

![image](/images/samples/digicom/dashboard-energy-meter-5.png)

<br>
You have added a widget that displays the current power readings.

![image](/images/samples/digicom/dashboard-energy-meter-6.png)

<br>
Similarly, add additional widgets for the three other available telemetry values (data keys) and position them appropriately on the dashboard.   
Once you have completed the configuration, click "**Save**" to save the dashboard.

![image](/images/samples/digicom/dashboard-energy-meter-7.png)

## More references and guides

You may find more online documentation and guides on how to work with ThingsBoard, create [customers](/docs/{{docsPrefix}}user-guide/ui/customers/){:target="_blank"}, [users](/docs/{{docsPrefix}}user-guide/ui/users/){:target="_blank"}, and [assets](/docs/{{docsPrefix}}user-guide/ui/assets/){:target="_blank"}, and make your [dashboards](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} even more powerful and professional!

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}