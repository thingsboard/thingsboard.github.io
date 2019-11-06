---
layout: docwithnav
title: Abeeway Micro Tracker and Abeeway Industrial Tracker telemetry upload
description: Abeeway Micro Tracker and Abeeway Industrial Tracker upload
hidetoc: "true"

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

This guide provides step-by-step instructions for connecting the Abeeway Micro Track and Abeeway Industrial Tracker to ThingsBoard Professional Edition (PE).
The connection is through the IoT network in the new global standard LoRaWAN and ThingPark Wireless OSS intelligent logger (Actility).
In this guide, we will use the free ThingsBoard PE demo server [cloud.thingsboard.io](https://cloud.thingsboard.io/signup) in this guide. 
This guide will be useful to anyone who wants to connect their tracker`s manufactured by Abeeway or another industrial IoT application to the LoRaWAN network.

* TOC
{:toc}

## Prerequisites 

We assume you have at least one of Abeeway Micro Track and Abeeway Industrial Tracker  in your lab that is already connected  with ACTILITY THINGPARK IoT NETWORK. 
We also assume you already have a ThingsBoard PE server or free demo account. 
Otherwise you can register for a 30-days free demo account here: [cloud.thingsboard.io](https://cloud.thingsboard.io/signup).

We expect you to have a very basic knowledge about ThingsBoard, so we do recommend to complete the [Getting Started](/docs/getting-started-guides/helloworld) guide.
 
## Integration overview

ThingsBoard Platform Integrations feature allows to push data from various platforms and connectivity solutions to ThingsBoard. 
We will use platform ThingPark Wireless companies Actility to consume data fromLoRaWAN networks and automatically register devices in ThingsBoard.
Besides configuring the integration, we will also setup ThingsBoard to decode incoming data, store it in the database, visualize on the dashboard and generate alarms based on configurable thresholds.

![image](/images/samples/abeeway/dashboard_demo.png)

## Step 1. Add new divice
Few things to notice:

The <b>DevEUI</b> from the incoming message will become the Device <b>Name</b> in ThingsBoard;

ThingsBoard will automatically create device with type “tracker” and name equal to <b>DevEUI</b>;

Therefore, when creating a new device, in the <b>Name</b> field, enter the value <b>DevEUI</b>: from the Device Information (ThingPark Wireless OSS intelligent logger (Actility)) section

![image](/images/samples/abeeway/actility_device.png)

## Step 2. Creature UpLink and DownLink DATA Converters
In order to create an [Integration](/docs/user-guide/integrations), we should create the [Uplink Data Converter](/docs/user-guide/integrations/#uplink-data-converter) and the [Downlink Data Converter](/docs/user-guide/integrations/#downlink-data-converter) first. 
The converters will decode incoming telemetry payload data from global standard LoRaWAN that contains in encoded hex string to human readable, simplified ThingsBoard data format.

![image](/images/samples/abeeway/add_uplink_decoder.png)

![image](/images/samples/abeeway/add_downlink_decoder.png)


## Step 3. UpLink Data Converter configuration
When creating an Uplink Converter, a default decoder is added to the Decoder section

After creating the Uplink Converter to the Decoder section, you need to update the Decoder code to:
For this is it necessary:
- Open Uplink Converter, editor mode, click "test decoder function" and replace the default code with a new code:

[Decoder UpLink](/images/samples/abeeway/upLinkDecoder.txt)

### Uplink messages
    This section describes the payload messages supported by the tracker.
    Unless otherwise specified, all values are transmitted in network byte order (MSB first).
    Each message is composed by:
    ➢ A common header
    ➢ A specific data part

#### The tracker supports different types of uplink messages, that are described in following sections:

<table style="width: 22%">
  <thead>
      <tr>
          <td><b>Message type</b></td><td><b>Id</b></td><td><b>Content</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Frame pending</td>
          <td>0x00</td>
          <td>This uplink message is sent to trigger the sending. (and speed up the configuration of the tracker) if downlink messages are available on gateway and no other uplink message is on the queue</td>
      </tr>
      <tr>
          <td>Position message</td>
          <td>0x03</td>
          <td>GPS, low power GPS, WIFI or BLE position data</td>
      </tr>
      <tr>
          <td>Energy status message</td>
          <td>0x04</td>
          <td>Used by the server to estimate the battery level. Contain information related to the power consumption</td>
      </tr>
      <tr>
          <td>Heartbeat message</td>
          <td>0x05</td>
          <td>Notify the server the tracker is operational and under LoRa coverage</td>
      </tr>
      <tr>
          <td>Activity Status message (1)</td>
          <td>0x07</td>
          <td>Reports the activity counter. Used only by the activity tracking operating mode</td>
      </tr>
      <tr>
          <td>Configuration message (1)</td>
          <td>0x07</td>
          <td>Reports the partial or whole configuration of the trackers</td>
      </tr>
      <tr>
          <td>Shutdown message /td>
          <td>0x09</td>
          <td>Sent when the tracker is set off</td>
      </tr>
      <tr>
          <td>Geolocation start message (2)</td>
          <td>0x0A</td>
          <td>Sent when the tracker starts a geolocation</td>
      </tr>
      <tr>
          <td>Debug message</td>
          <td>0xFF</td>
          <td>Internal use only</td>
      </tr>
   </tbody>
</table> 

    Note:
    (1) Activity status message and configuration message share the same identifier. They are differentiated
    by another field.
    (2) Only available on FW 1.7-3. Configurable via the config_flag parameter


Input data from ThingPark Wireless OSS intelligent logger (Actility) Platform looks like this:

{% highlight bash %}
{
    "DevEUI_uplink": {
        "Time": "2019-11-06T09:54:46.342+01:00",
        "DevEUI": "20635F00C5000660",
        "FPort": 17,
        "FCntUp": 1796,
        "ADRbit": 1,
        "MType": 2,
        "FCntDn": 94,
        **"payload_hex": "0500997d3040",**
        "mic_hex": "304d48f9",
        "Lrcid": "00000211",
        "LrrRSSI": -63.0,
        "LrrSNR": 7.5,
        "SpFact": 7,
        "SubBand": "G1",
        "Channel": "LC2",
        "DevLrrCnt": 1,
        "Lrrid": "10000329",
        "Late": 0,
        "Lrrs": {
            "Lrr": [{
                "Lrrid": "10000329",
                "Chain": 0,
                "LrrRSSI": -63.0,
                "LrrSNR": 7.5,
                "LrrESP": -63.710819
            }]
        },
        "CustomerID": "100038328",
        "CustomerData": {
            "alr": {
                "pro": "ABEE/APY",
                "ver": "1"
            }
        },
        "ModelCfg": "0",
        "InstantPER": 0.0,
        "MeanPER": 0.001706,
        "DevAddr": "05C1704A",
        "TxPower": 9.5,
        "NbTrans": 1
    }
}
{% endhighlight %}

![image](/images/samples/abeeway/uplink_decoder_input.png)

* After decoding output data will look like this:

{% highlight bash %}
{
    "deviceName": "20635F00C5000660",
    "deviceType": "Abeeway Micro/Industrial Tracker",
    "telemetry": {
        "ts": 1573030486342,
        "values": {
            "batteryVoltage": 8.388,
            "temperature": 18.5,
            "ph_type": "Heartbeat message",
            "ph_status": "Standby",
            "ph_alert_SOS_bit4": 0,
            "ph_tracking/idle_state_bit3": 0,
            "ph_tracker_is_moving_bit2": 0,
            "ph_periodic_position_message_bit1": 0,
            "ph_POD_message_bit0": 0,
            "m_type": "Unconfirmed Data Up",
            "m_port": 17,
            "m_customerID": "100038328",
            "m_LrrRSSI": -63,
            "m_LrrSNR": 7.5,
            "m_Lrrid": "10000329",
            "ack": 3
        },
        "last_reset_cause": 64
    }
}
{% endhighlight %}

#### Common message header

 <table style="width: 22%">
   <thead>
       <tr>
           <td><b>Byte 0</b></td>
           <td><b>Byte 1</b></td>
           <td><b>Byte 2</b></td>
           <td><b>Byte 3</b></td>
           <td><b>Byte 4</b></td>
           <td><b>Data Variable</b></td>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td>Type</td>
           <td>Status</td>
           <td>Battery</td>
           <td>Temperature</td>
           <td>Ack/opt</td>
           <td>Data</td>
       </tr>
    </tbody>
 </table> 

"payload_hex": "**0500997d3040**"

 <table style="width: 22%">
   <thead>
       <tr>
           <td><b>Field</b></td>
           <td><b>First Byte</b></td>
           <td><b>Byte length</b></td>
           <td><b>Value</b></td>
           <td><b>Description</b></td>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td>Type</td>
           <td>0</td>
           <td>1</td>
           <td>0x05</td>
           <td>Heartbeat message</td>
       </tr>      
        <tr>
           <td>Status</td>
           <td>1</td>
           <td>1</td>
           <td>0x00</td>
           <td>Standby</td>
       </tr>
        <tr>
           <td>Battery</td>
           <td>2</td>
           <td>1</td>
           <td>0x99</td>
           <td>8.388</td>
       </tr>
        <tr>
           <td>Temperature</td>
           <td>3</td>
           <td>1</td>
           <td>0x7d</td>
           <td>18.5</td>
       </tr>
        <tr>
           <td>Ack/opt</td>
           <td>4</td>
           <td>1</td>
           <td>0x30</td>
           <td>3/Optional data (depending on message type. Currently used only for position messages)</td>
       </tr>
        <tr>
           <td>Data</td>
           <td>5</td>
           <td>1-22</td>
           <td>0x40</td>
           <td>last_reset_cause</td>
       </tr>
    </tbody>
 </table> 

![image](/images/samples/abeeway/uplink_decoder_output.png)

![image](/images/samples/abeeway/uplink_decoder.png)

## Step 4. Integration configuration

### Create new integration:

![image](/images/samples/abeeway/create_integration.png)

 * check of the base URL  
 * change downLink URL to:
 https://thingparkenterprise.eu.actility.com/thingpark/dx/core/latest/api/devices
 *  copy-paste the HTTP Endpoint URL from the integration window based on the screencast below to URL Application Actility.

![image](/images/samples/abeeway/actility_application.png)

## Step 5. Creature  and  configuration Dashboard 

![image](/images/samples/abeeway/dashboard_create.png)

![image](/images/samples/abeeway/dashboard_config_01.png)

## Step 6: Post telemetry and verify the Integration configuration

Integration settings change log see here

![image](/images/samples/abeeway/integration_latest_telemetry.png)

A log of incoming messages from from ThingPark Wireless OSS intelligent logger (Actility) Platform see here:

![image](/images/samples/abeeway/integration_events.png)

If your devices are active and you do everything correctly when you connect the ThingPark Wireless OSS intelligent logger (Actility) Platform, then you will see incoming messages to the dashboard you created

![image](/images/samples/abeeway/dashboard_demo.png)

## Step 7. DownLink Data Converter configuration

## Step 8 Configuring the Rule Chain

#### Downlink messages

These messages are sent from the server to the tracker through the LoRa network. They are used to either
configure or manage the tracker. Each message contains a header including:

➢ A message type

➢ An acknowledgement token

The remaining of the message depends on the message type described in the following table.

<table style="width: 22%">
  <thead>
      <tr>
          <td><b>Message type</b></td><td>
          <b>ID</b></td><td>
          <b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>POD/td>
          <td>0x01</td>
          <td>Position on demand</td>
      </tr>
      <tr>
          <td>Set Mode</td>
          <td>0x02</td>
          <td>hange the tracker operational mode</td>
      </tr>
      <tr>
          <td>Request configuration</td>
          <td>0x03</td>
          <td>Request the actual configuration of the tracker</td>
      </tr>
      <tr>
          <td>Start SOS mode</td>
          <td>0x04</td>
          <td>Turn on SOS mode</td>
      </tr>
      <tr>
          <td>Stop SOS mode</td>
          <td>0x05</td>
          <td>Turn off SOS mode</td>
      </tr>
      <tr>
          <td>Set Param</td>
          <td>0x0B</td>
          <td>Modify parameter(s)</td>
      </tr>
      <tr>
          <td>Debug command</td>
          <td>0xFF</td>
          <td>Remove BLE bonding. Reset the tracker</td>
      </tr>
    </tbody>
</table> 

###### Position on demand

Mode: operating modes. Acceptable values are:

<table style="width: 22%">
  <thead>
      <tr>
          <td><b>Mode</b></td>
          <td><b>Value</b>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Standby</td>
          <td>0</td>
      </tr>
      <tr>
          <td>Motion tracking</td>
          <td>1</td>
      </tr>
      <tr>
          <td>Permanent tracking</td>
          <td>2</td>
      </tr>
      <tr>
          <td>Motion start/end tracking</td>
          <td>3</td>
      </tr>
      <tr>
          <td>Activity tracking</td>
          <td>4</td>
      </tr>
      <tr>
          <td>Off mode</td>
          <td>5</td>
      </tr>
   </tbody>
</table> 

{% highlight bash %}
{
    "method": "POST",
    "header": [
        {
            "key": "Content-Type",
            "value": "application/json"
        },
        {
            "key": "Accept",
            "value": "application/json"
        },
        {
            "key": "Authorization",
            "value": "Bearer {{token_Actilty}}",
        }
    ],     
    body: {  
      "payloadHex": "0102",
      "targetPorts": "11",
        "securityParams": {
        "asId": "TWA_100038328.39972.AS",
        "creationTime": "2019-10-29T10:26:45+02:00",
        "asKey": "6c58202a09252d72093163fe4439f623"
      }
    }
}
{% endhighlight %}

###### Operational mode configuration

{% highlight bash %}
{... 
      "payloadHex": "0203", ...
}
{% endhighlight %}

###### Request device configuration

{% highlight bash %}
{... 
      "payloadHex": "030605090C01", ...
}
{% endhighlight %}

* "05" - "geoloc_sensor",
* "09" - "gps_timeout",
* "0C" - "gps_convergence", 
* "01" - "lora_period"

Special parameter Id:

* 0xFD: get the BLE version.
* 0xFE: get the firmware version.

###### Parameters configuration

{% highlight bash %}
{... 
      "payloadHex": "0B0A0C000000781100000E10", ...
}
{% endhighlight %}

* "0C00000078" - 0C - gps_convergence, 0x78 - value (sec), 
* "1100000E10" - 11 - gps_standby_timeout. 0xE10 - value (sec).

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}


 



