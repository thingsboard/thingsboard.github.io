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

We expect you to have a very basic knowledge about ThingsBoard, so we do recommend to complete the [Getting Started](/docs/getting-started-guides/helloworld/) guide.
 
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
           <td><b>Byte 0</b></td><td><b>Byte 1</b></td><td><b>Byte 2</b></td><td><b>Byte 3</b></td><td><b>Byte 4</b></td><td><b>Data Variable</b></td>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td>Type</td><td>Status</td><td>Battery</td><td>Temperature</td><td>Ack/opt</td><td>Information</td>
       </tr>
       <tr>
         </tbody>
        </table> 


"payload_hex": "**0500997d3040**"

 <table style="width: 22%">
   <thead>
       <tr>
           <td><b>Field</b></td><td><b>First Byte</b></td><td><b>Byte length</b></td><td><b>Value</b></td><td><b>Description</b></td>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td>Type</td><td>0</td><td>1</td><td>0x05</td><td>Heartbeat message</td>
       </tr>      
        <tr>
           <td>Status</td><td>1</td><td>1</td><td>0x00</td><td>Standby</td>
       </tr>
        <tr>
           <td>Battery</td><td>2</td><td>1</td><td>0x99</td><td>8.388</td>
       </tr>
        <tr>
           <td>Temperature</td><td>3</td><td>1</td><td>0x7d</td><td>18.5</td>
       </tr>
        <tr>
           <td>Ack/opt</td><td>4</td><td>1</td><td>0x30</td><td>3/Optional data (depending on message type. Currently used only for position messages)</td>
       </tr>
        <tr>
           <td>Data</td><td>5</td><td>1-22</td><td>0x40</td><td>last_reset_cause</td>
       </tr>
    </tbody>
 </table> 


![image](/images/samples/abeeway/uplink_decoder_output.png)



![image](/images/samples/abeeway/uplink_decoder.png)



## Step 4. Integration configuration

![image](/images/samples/abeeway/create_integration_1.png)

![image](/images/samples/abeeway/create_integration_2.png)


## Step 5. Creature  and  configuration Dashboard 

![image](/images/samples/abeeway/dashboard_create.png)

![image](/iimages/samples/abeeway/dashboard_config_01.png)

## Step 6: Post telemetry and verify the Integration configuration


![image](/images/samples/abeeway/integration_events.png)

![image](/images/samples/abeeway/integration_latest_telemetry.png)

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
          <td><b>Message type</b></td><td><b>ID</b></td><td><b>Description</b></td>
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
          <td><b>Mode</b></td><td><b>Value</b>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Standby</td><td>0</td>
      </tr>
      <tr>
          <td>Motion tracking</td><td>1</td>
      </tr>
      <tr>
          <td>Permanent tracking</td><td>2</td>
      </tr>
      <tr>
          <td>Motion start/end tracking</td><td>3</td>
      </tr>
      <tr>
          <td>Activity tracking</td><td>4</td>
      </tr>
      <tr>
          <td>Off mode</td><td>5</td>
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




// old
In order to create an [Integration](/docs/user-guide/integrations), we should create the [Uplink Data Converter](/docs/user-guide/integrations/#uplink-data-converter) first. 
The converter will decode incoming telemetry payload data from T-Mobile NB IoT that contains in encoded hex string to human readable, simplified ThingsBoard data format.

 - Input data from T-Mobile NB IoT Platform looks like this:

{% highlight bash %}
{
    "reports": [{
        "serialNumber": "IMEI:0123456789",
        "timestamp": 1547035621977,
        "subscriptionId": "43524b52-b924-40f0-91f0-e7fa71dca87b",
        "resourcePath": "uplinkMsg/0/data",
        "value": "010145292a2bfbfc0000000000000000e6e3355c751a879de31e6535d10306005600d00402"
    }]
}
{% endhighlight %}

 - After decoding output data will look like this:Creature UpLink and DownLink DATA Converters

{% highlight bash %}
{
    "deviceName": "0123456789",
    "deviceType": "tracker",
    "telemetry": [{
        "ts": 1547035622000,
        "values": {
            "batteryVoltage": 4.17,
            "temperature": 26,
            "latitude": 51.8233479,
            "longitude": 6.4042341,
            "altitude": 6,
            "speed": 86,
            "satellitesObserved": 208,
            "timetToFirstFix": 4
        }
    }]
}
{% endhighlight %}

Few things to notice:

 * The IMEI from the incoming message will become the Device Name in ThingsBoard;
 * ThingsBoard will automatically create device with type "tracker" and name equal to IMEI;
 * Timestamp and sensor readings are decoded from incoming hex string.
 
- The following table shows the first byte position and the number of bytes for each encoded field that includes in the incoming hex string:

<table style="width: 22%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>First Byte</b></td><td><b>Byte length</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>ts</td>
          <td>16</td>
          <td>4</td>
      </tr>
      <tr>
          <td>batteryVoltage</td>
          <td>20</td>
          <td>1</td>
      </tr>
      <tr>
          <td>temperature</td>
          <td>21</td>
          <td>1</td>
      </tr>
      <tr>
          <td>latitude</td>
          <td>22</td>
          <td>4</td>
      </tr>
      <tr>
          <td>longitude</td>
          <td>26</td>
          <td>4</td>
      </tr>
      <tr>
          <td>altitude</td>
          <td>30</td>
          <td>2</td>
      </tr>
      <tr>
          <td>speed</td>
          <td>32</td>
          <td>2</td>
      </tr>
      <tr>
          <td>satellitesObserved</td>
          <td>35</td>
          <td>1</td>
      </tr>
      <tr>
          <td>timetToFirstFix</td>
          <td>36</td>
          <td>1</td>
      </tr>
   </tbody>
</table> 

- Go to **Data Converters** -> **Add new Data Converter** -> **Import Converter** 

- Import following json file: [**SODAQ Uplink data converter**](/docs/user-guide/resources/sodaq/sodaq-uplink-data-converter.json) (left click on the link and then 'Ctrl+S' to download) 
as described on the following screencast: 

<img data-gifffer="/images/user-guide/integrations/sodaq/import-and-test-converter.gif" />
dashboard 
## Step 2. Integration configuration

- Create new integration and copy-paste the HTTP Endpoint URL from the integration window based on the screencast below: 

<img data-gifffer="/images/user-guide/integrations/sodaq/import-integration.gif" />

- Fill in the fields with the input data shown in the following table: 

<table style="width: 50%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Name</td>
          <td>SODAQ Integration</td>
      </tr>
      <tr>
          <td>Type</td>
          <td>T-Mobile – IoT CDP</td>
      </tr>
      <tr>
          <td>Debug mode</td>
          <td>True</td>
      </tr>
      <tr>
          <td>Uplink data converter</td>
          <td>SODAQ Uplink data converter</td>
      </tr>
      <tr>
          <td>Downlink data converter</td>
          <td>(empty)</td>
      </tr>
      <tr>
          <td>Base URL</td>
          <td>https://THINGSBOARD_URL</td>
      </tr>
      <tr>
          <td>HTTP endpoint URL</td>
          <td>https://THINGSBOARD_URL/api/v1/integrations/tmobile_iot_cdp/$ROUTING_KEY</td>
      </tr>
   </tbody>
</table> 

- After filling all fields click the **ADD** button. 

## Step 3: Post telemetry and verify the Integration configuration

Before we rush to T-Mobile IoT platform configuration, let's make sure ThingsBoard is properly configured using simple cURL command.
We will be simulating message from the T-Mobile IoT platform using command below. 
Please note that we will use the HTTP Endpoint URL from a Step 2.

For this we will need to copy HTTP endpoint URL from the **SODAQ** Integration.

![image](/images/user-guide/integrations/sodaq/http-endpoint-url.png)

Download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/telemetry-data.json) with telemetry data and execute the following command: 

{% highlight bash %}
curl -v -X POST -d @telemetry-data.json $HTTP_ENDPOINT_URL --header "Content-Type:application/json"

**you need to replace $HTTP_ENDPOINT_URL with actual HTTP endpoint URL**
{% endhighlight %}

Device should be created:

<img data-gifffer="/images/user-guide/integrations/sodaq/validate-integration.gif" />

Now you can delete this dummy device if needed.

## Step 4: T-Mobile NB-IoT Platform Callback configuration

Use HTTP endpoint URL from Step 2 to configure T-Mobile Platform to push data to this URL. See image below for reference.


![image](/images/user-guide/integrations/sodaq/tmobile-configration.png)


## Step 5: Check Integration Debug Events

Navigate to Integration Debug Events, similar to Step 3 and double check that data from real devices arrives and is processed successfully. 
Please note that it may take some time (up to 30 minutes based on our experience) for new message to start arriving.

## Step 6: Rule chain import

In this tutorial, we modified our **Root Rule Chain** and also created Rule Chain **Tracker Alarms**. 
The idea is to forward all incoming telemetry, once it is saved to the database, to **Tracker Alarms** rule chain. 
This rule chain lookup individual alarm threshold parameters for each tracker. User is able to configure those parameters in the dashboard.   

<br/> 
Download the attached json [**file**](/docs/user-guide/resources/sodaq/tracker-alarms.json) for the **Tracker Alarms** chain.
<br/>
<br/>The following screencast will show how to import and configure rule chains: 

<img data-gifffer="/images/user-guide/integrations/sodaq/configure-rule-chains.gif" />
<br/>

## Step 7: Demo dashboard import
 
Download and import attached json [**file**](/docs/user-guide/resources/sodaq/sodaq-dashboard.json) with a dashboard from this tutorial.

<br/>The following screencast will show how to import the dashboard: 

<img data-gifffer="/images/user-guide/integrations/sodaq/import-dashboard.gif" />
<br/>

After Dashboard creation navigate to Tracker details state to sets the limit values, namely:

 - Max Speed
 - Min Voltage
 - Min Temperature
 - Max Temperature 

Once Rule chains and Dashboard set up you can trigger device to post the real data and verify that Integration and Rule chains work as expected.
Advanced configuration guide below demonstrates step-by-step instruction how to configure the rule chains and how they actually work. 
This steps are optional and we recommend to navigate to [Next Steps](#next-steps) for beginners.  

## Advanced Configuration (Optional)

### Security

Note that you can add additional HTTP headers with some unique parameters for security. 
For example, you can add "MY-INTEGRATION-AUTH-HEADER" with some random string value to both Integration configuration (Step 2) and T-Mobile configuration (Step 4). 
Obviously, those headers should match for data flow to work properly.  

### Message flow  

In this section, we explain the purpose of each node in this tutorial:

 - Node A: [**Originator attributes**](/docs/user-guide/rule-engine-2-0/enrichment-nodes/#originator-attributes) node.
   - This node add Message Originator Attributes (client\shared\server scope) and Latest Telemetry value into Message Metadata.

 - Node **B, C, D, E**: [**Filter Script**](/docs/user-guide/rule-engine-2-0/filter-nodes/#script-filter-node) nodes.
   - These nodes with different threshold test scripts. The particular script will return ** true ** if the condition is executed, otherwise, it will return ** false ** ".- Node B: [**Create alarm**](/docs/user-guide/rule-engine-2-0/action-nodes/#create-alarm-node) node.
 - Node **F, H, G, L**: [**Create alarm**](/docs/user-guide/rule-engine-2-0/action-nodes/#create-alarm-node) nodes.
   - Creates or Updates an alarm if the specific published telemetry is not at expected range (filter script node returns True).     
 - Node **G, I, K, M**: [**Clear alarm**](/docs/user-guide/rule-engine-2-0/action-nodes/#clear-alarm-node) node.
   - Clears alarm if it exists in case if the specific published telemetry is in an expected range (filter script node returns False).      
 - Node **O**: **Rule Chain** node.
   - Forwards incoming Message to specified Rule Chain **Create & Clear Alarms**. 

<br/>

#### Configuring the Rule Chain

In this tutorial, we modified our **Root Rule Chain** and also created Rule Chain **Tracker Alarms**

<br/>The following screenshots show how the above Rule Chains should look like:
 
  - **Tracker Alarms:**

![image](/images/user-guide/integrations/sodaq/tracker-alarms.png)

 - **Root Rule Chain:**

![image](/images/user-guide/integrations/sodaq/root-rule-chain.png)

<br/> 

Download the attached json [**file**](/docs/user-guide/resources/sodaq/tracker-alarms.json) for the **Tracker Alarms** chain.
<br/>
<br/>

The following sections shows you how to create **Tracker Alarms** chain from scratch and modify **Root Rule Chain**.
 
##### Create new **Tracker Alarms** Rule Chain 

Go to **Rule Chains** -> **Add new Rule Chain** 

Configuration:

- Name : **Tracker Alarms**

![image](/images/user-guide/integrations/sodaq/add-chain.png)

New Rule Chain is created. Press **Edit** button and to configure it.

##### Adding the required nodes

In this rule chain, you will create 13 nodes as it will be explained in the following sections:

##### Node A: **Originator attributes**
- Add the **Originator attributes** node and connect it to **Input** node.<br>
  This node will be used for taking shared scope attributes of the message originator that will be setts directly from the Dashboard. 
  
 - Fill in the fields with the input data shown in the following table: 
 
 <table style="width: 30%">
   <thead>
       <tr>
        <td>Field</td>
        <td>Input Data </td>
       </tr>
   </thead>
   <tbody>
       <tr>
            <td>Name</td>
            <td>Fetch Limit telemetry</td>
       </tr>
       <tr>
            <td>Shared attributes</td>
            <td>maxTemperature</td>
       </tr>      
       <tr>
            <td>Shared attributes</td>
            <td>minTemperature</td>
       </tr>      
       <tr>
            <td>Shared attributes</td>
            <td>maxSpeed</td>
       </tr>      
       <tr>
            <td>Shared attributes</td>
            <td>minVoltage</td>
       </tr>      
   </tbody>
 </table>

##### Node B: **Filter Script**
- Add the **Filter Script** node and connect it to the **Originator attributes** node with a relation type **Success**.
 <br>This node will verify: "if the temperature less than max temperature value" using the following script:
  
   {% highlight javascript %}return msg.temperature > metadata.shared_maxTemperature{% endhighlight %}
  
If the temperature more than max value the script will return **true**, otherwise **false** will be returned.
    
- Enter the Name field as **Validate Max temperature**.  
  
![image](/images/user-guide/integrations/sodaq/validate-max-temperature.png)
 
Rule Nodes C, D, and E have the same configuration that has the above-mentioned rule node.
<br>Paste the JS script code shown in the following table to the corresponding Rule Nodes:

<table style="width: 60%">
   <thead>
       <tr>
        <td style="font-size: 15px;">Rule Node</td>
        <td style="font-size: 15px;">Script Code</td>
       </tr>
   </thead>
   <tbody>
       <tr>
            <td style="font-size: 15px;">C: Validate Min temperature</td>
            <td><code>return msg.temperature < metadata.shared_minTemperature;</code></td>
       </tr>      
       <tr>
            <td style="font-size: 15px;">D: Validate Max speed</td>
            <td><code>return msg.speed > metadata.shared_maxSpeed;</code></td>
       </tr>      
       <tr>
            <td style="font-size: 15px;">E: Validate Min voltage</td>
            <td><code>return msg.batteryVoltage < metadata.shared_minVoltage;</code></td>
       </tr>      
   </tbody>
 </table>
  
##### Node F: **Create alarm**
- Add the **Create alarm** node and connect it to the **Filter Script** node with a relation type **True**. <br>
  This node loads the latest Alarm with configured Alarm Type for Message Originator<br> if the published temperature more than **maxTemperature** value (filter script node returns True). 
  
 - Enter the Name field as **Max Temperature** and the Alarm type as **Max Temperature**.
 
 - **Alarm Details** function:
 
{% highlight bash %}var details = {};
details.value = msg.temperature;
if (metadata.prevAlarmDetails) {
    details = JSON.parse(metadata.prevAlarmDetails);
}
return details;{% endhighlight %}

![image](/images/user-guide/integrations/sodaq/create-alarm.png)

Rule Nodes H, J, and L have the same configuration that has the above-mentioned rule node.
<br>Paste the Alarm Type shown in the following table to the corresponding Rule Nodes:

<table style="width: 100%">
   <thead>
       <tr>
        <td style="font-size: 15px;">Rule Node</td>
        <td style="font-size: 15px;">Alarm Type</td>
        <td style="font-size: 15px;">Script Code</td>
       </tr>
   </thead>
   <tbody>
       <tr>
            <td style="font-size: 15px;">H: Min temperature</td>
            <td><code>Min temperature</code></td>
            <td><code>var details = {};
                      details.value = msg.temperature;
                      if (metadata.prevAlarmDetails) {
                          details = JSON.parse(metadata.prevAlarmDetails);
                      }
                      return details;</code></td>
       </tr>      
       <tr>
            <td style="font-size: 15px;">J: Max Speed</td>
            <td><code>Max Speed</code></td>
            <td><code>var details = {};
                      details.value = msg.speed;
                      if (metadata.prevAlarmDetails) {
                          details = JSON.parse(metadata.prevAlarmDetails);
                      }
                      return details;</code></td>
       </tr>      
       <tr>
            <td style="font-size: 15px;">L: Min Voltage</td>
            <td><code>Min Voltage</code></td>
            <td><code>var details = {};
                      details.value = msg.batteryVoltage;
                      if (metadata.prevAlarmDetails) {
                          details = JSON.parse(metadata.prevAlarmDetails);
                      }
                      return details;</code></td>
       </tr>      
   </tbody>
 </table>

##### Node H: **Clear Alarm**
- Add the **Clear Alarm** node and connect it to the **Filter Script** node with a relation type **False**. <br>
  This node loads the latest Alarm with configured Alarm Type for Message Originator<br> and Clears alarm if it exists in case if the published temperature less than **maxTemperature** value (script node returns False). 
  
- Enter the Name field as **Clear Alarm** and the Alarm type as **Max Temperature**.

 - **Alarm Details** function:
 
{% highlight javascript %}
var details = {};
if (metadata.prevAlarmDetails) {
    details = JSON.parse(metadata.prevAlarmDetails);
}
details.clearedValue = msg.temperature;
return details;
{% endhighlight %}

![image](/images/user-guide/integrations/sodaq/clear-alarm.png)

Rule Nodes I, K and M have the same configuration that has the above-mentioned rule node.
<br>Paste the Alarm Type shown in the following table to the corresponding Rule Nodes:

<table style="width: 80%">
   <thead>
       <tr>
        <td style="font-size: 15px;">Rule Node</td>
        <td style="font-size: 15px;">Alarm Type</td>
        <td style="font-size: 15px;">Script Code</td>
       </tr>
   </thead>
   <tbody>
       <tr>
            <td style="font-size: 15px;">G: Min temperature</td>
            <td><code>Min temperature</code></td>
            <td><code>var details = {};
                      if (metadata.prevAlarmDetails) {
                          details = JSON.parse(metadata.prevAlarmDetails);
                      }
                      details.clearedValue = msg.temperature;
                      return details;</code>
            </td>
       </tr>      
       <tr>
            <td style="font-size: 15px;">I: Max Speed</td>
            <td><code>Max Speed</code></td>
            <td><code>var details = {};
                      if (metadata.prevAlarmDetails) {
                          details = JSON.parse(metadata.prevAlarmDetails);
                      }
                      details.clearedValue = msg.speed;
                      return details;</code>
            </td>
       </tr>      
       <tr>
            <td style="font-size: 15px;">K: Min Voltage</td>
            <td><code>Min Voltage</code></td>
            <td><code>var details = {};
                      if (metadata.prevAlarmDetails) {
                          details = JSON.parse(metadata.prevAlarmDetails);
                      }
                      details.clearedValue = msg.batteryVoltage;
                      return details;</code>
            </td>
       </tr>      
   </tbody>
 </table>
 
 
#### Modify Root Rule Chain

The initial Root Rule Chain has been modified by adding the following node:

##### Node A: **Filter Script**
- Add the **Filter Script** node and connect it to the **Save Timeseries** node with a relation type **Success**.
 <br>This node will check that message originator type is correct using the following script:
  
   {% highlight javascript %}return metadata.deviceType === 'tracker';{% endhighlight %}
    
- Enter the Name field as **Tracker filter**.  
  
![image](/images/user-guide/integrations/sodaq/tracker-filter.png)
 
##### Node O: **Rule Chain**
- Add the **Rule Chain** node and connect it to the **Filter Script** node with a relation type **True**. <br>
  This node forwards incoming Message to specified Rule Chain **Tracker Alarms**.

- Enter the Name field as **Tracker Alarms**.

![image](/images/user-guide/integrations/sodaq/rule-chain-node.png)

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}


 



