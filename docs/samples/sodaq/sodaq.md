---
layout: docwithnav-pe
title: SODAQ Universal Tracker telemetry upload
description: SODAQ Universal Tracker telemetry upload
hidetoc: "true"

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

This guide contains step-by-step instruction how to connect your SODAQ NB-IoT boards to ThingsBoard Professional Edition (PE) through the T-Mobile NB IoT network.
We will use free ThingsBoard PE demo server [thingsboard.cloud](https://thingsboard.cloud/signup) in this guide.
This guide will be useful for anyone who wants to connect their SODAQ NB-IoT boards or other hardware to T-Mobile NB IoT network.

* TOC
{:toc}

## Prerequisites

We assume you have at least one of SODAQ NB-IoT Trackers in your lab that is already connected to your T-Mobile IoT network.
We also assume you already have a ThingsBoard PE server or free demo account.
Otherwise, you can register for a 30-days free demo account here: [thingsboard.cloud](https://thingsboard.cloud/signup).

We expect you to have a very basic knowledge about ThingsBoard, so we do recommend to complete the [Getting Started](/docs/getting-started-guides/helloworld/) guide.

## Integration overview

ThingsBoard Platform Integrations feature allows pushing data from various platforms and connectivity solutions to ThingsBoard.
We will use "T-Mobile IoT CDP" platform integration to consume data from T-Mobile NB IoT Network and automatically register devices in ThingsBoard.
Besides configuring the integration, we will also set up ThingsBoard to decode incoming data, store it in the database, visualize on the dashboard and generate alarms based on configurable thresholds.

<img data-gifffer="/images/samples/sodaq/demo-dashboard.gif" alt="demo dashboard">

## Step 1. Data Converter configuration

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

 - After decoding output data will look like this:

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
 * ThingsBoard will automatically create a device with type "tracker" and name equal to IMEI;
 * Timestamp and sensor readings are decoded from incoming hex string.

- The following table shows the first byte position, and the number of bytes for each encoded field that includes in the incoming hex string:

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

<img data-gifffer="/images/samples/sodaq/import-and-test-converter.gif" alt="Import and test converter">

## Step 2. Integration configuration

- Create new integration and copy-paste the HTTP Endpoint URL from the integration window based on the screencast below:

<img data-gifffer="/images/samples/sodaq/import-integration.gif" alt="Import integration">

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

![image](/images/samples/sodaq/http-endpoint-url.png)

Download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/telemetry-data.json) with telemetry data and execute the following command:

{% highlight bash %}
curl -v -X POST -d @telemetry-data.json $HTTP_ENDPOINT_URL --header "Content-Type:application/json"

**you need to replace $HTTP_ENDPOINT_URL with actual HTTP endpoint URL**
{% endhighlight %}

Device should be created:

<img data-gifffer="/images/samples/sodaq/validate-integration.gif" alt="validate integration">

Now you can delete this dummy device if needed.

## Step 4: T-Mobile NB-IoT Platform Callback configuration

Use HTTP endpoint URL from Step 2 to configure T-Mobile Platform to push data to this URL. See image below for reference.


![image](/images/samples/sodaq/tmobile-configration.png)


## Step 5: Check Integration Debug Events

Navigate to Integration Debug Events, similar to Step 3 and double check that data from real devices arrives and is processed successfully.
Please note that it may take some time (up to 30 minutes based on our experience) for new message to start arriving.

## Step 6: Rule chain import

In this tutorial, we modified our **Root Rule Chain** and also created Rule Chain **Tracker Alarms**.
The idea is to forward all incoming telemetry, once it is saved to the database, to **Tracker Alarms** rule chain.
This rule chain lookup individual alarm threshold parameters for each tracker. User is able to configure those parameters in the dashboard.

<br>
Download the attached json [**file**](/docs/user-guide/resources/sodaq/tracker-alarms.json) for the **Tracker Alarms** chain.
<br>
<br>The following screencast will show how to import and configure rule chains:

<img data-gifffer="/images/samples/sodaq/configure-rule-chains.gif" alt="Configure rule chains">
<br>

## Step 7: Demo dashboard import

Download and import attached json [**file**](/docs/user-guide/resources/sodaq/sodaq-dashboard.json) with a dashboard from this tutorial.

<br>The following screencast will show how to import the dashboard:

<img data-gifffer="/images/samples/sodaq/import-dashboard.gif" alt="Import dashboard">
<br>

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
 - Node **O**: [**Rule Chain**](/docs/user-guide/rule-engine-2-0/flow-nodes/#rule-chain-node) node.
   - Forwards incoming Message to specified Rule Chain **Create & Clear Alarms**.

<br>

#### Configuring the Rule Chain

In this tutorial, we modified our **Root Rule Chain** and also created Rule Chain **Tracker Alarms**

<br>The following screenshots show how the above Rule Chains should look like:

  - **Tracker Alarms:**

![image](/images/samples/sodaq/tracker-alarms.png)

 - **Root Rule Chain:**

![image](/images/samples/sodaq/root-rule-chain.png)

<br>

Download the attached json [**file**](/docs/user-guide/resources/sodaq/tracker-alarms.json) for the **Tracker Alarms** chain.
<br>
<br>

The following sections shows you how to create **Tracker Alarms** chain from scratch and modify **Root Rule Chain**.

##### Create new **Tracker Alarms** Rule Chain

Go to **Rule Chains** -> **Add new Rule Chain**

Configuration:

- Name : **Tracker Alarms**

![image](/images/samples/sodaq/add-chain.png)

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

![image](/images/samples/sodaq/validate-max-temperature.png)

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

![image](/images/samples/sodaq/create-alarm.png)

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

![image](/images/samples/sodaq/clear-alarm.png)

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

![image](/images/samples/sodaq/tracker-filter.png)

##### Node O: **Rule Chain**
- Add the **Rule Chain** node and connect it to the **Filter Script** node with a relation type **True**. <br>
  This node forwards incoming Message to specified Rule Chain **Tracker Alarms**.

- Enter the Name field as **Tracker Alarms**.

![image](/images/samples/sodaq/rule-chain-node.png)

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}

