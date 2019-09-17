---
layout: docwithnav
title: SODAQ Universal Tracker / Telemetry upload using UDP Integration
description: SODAQ Universal Tracker telemetry upload
hidetoc: "true"

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

This guide contains step-by-step instruction how to to connect your SODAQ NB-IoT boards to ThingsBoard Professional Edition (PE) through the T-Mobile NB IoT network. 
We will use free ThingsBoard PE demo server [cloud.thingsboard.io](https://cloud.thingsboard.io/signup) in this guide. 
This guide will be useful for anyone who wants to connect their SODAQ NB-IoT boards or other hardware to T-Mobile NB IoT network.   

* TOC
{:toc}

## Prerequisites 

We assume you have at least one of SODAQ NB-IoT Trackers in your lab that is already connected to your T-Mobile IoT network. 
We also assume you already have a ThingsBoard PE server or free demo account. 
Otherwise you can register for a 30-days free demo account here: [cloud.thingsboard.io](https://cloud.thingsboard.io/signup).

We expect you to have a very basic knowledge about ThingsBoard, so we do recommend to complete the [Getting Started](/docs/getting-started-guides/helloworld/) guide.
 
## Integration overview

ThingsBoard Platform Integrations feature allows to push data from various platforms and connectivity solutions to ThingsBoard. 
We will use "UDP" platform integration to consume data from T-Mobile NB IoT Network and automatically register devices in ThingsBoard.
Besides configuring the integration, we will also setup ThingsBoard to decode incoming data, store it in the database, visualize on the dashboard and generate alarms based on configurable thresholds.

## Step 1. Data Converter configuration

In order to create an [Integration](/docs/user-guide/integrations), we should create the [Uplink Data Converter](/docs/user-guide/integrations/#uplink-data-converter) first. 
The converter will decode incoming telemetry payload data from T-Mobile NB IoT that contains in encoded hex string to human readable, simplified ThingsBoard data format.

 - Input data from T-Mobile NB IoT Platform is a byte sequence and after converting them to a hexadecimal string-type look like this:

{% highlight bash %}
    "010145292a2bfbfc0000000000000000e6e3355c751a879de31e6535d10306005600d00402"
{% endhighlight %}

 - UDP integration passes the above hexadecimal string to JSON, to get the following payload:
{% highlight bash %}
{
    "reports": [{
        "value": "01014294292BE0E50000000000000000FBE61D5D56268710211F249E150319000100000901"
    }]
}
{% endhighlight %}

 - For this payload, the decoder has the following appearance:
 
```javascript
    /** Decoder **/
    
    // The field of input json
    var reports = decodeToJson(payload).reports;
    
    // Result object with device attributes/telemetry data
    var result = {
       deviceName: {},
       deviceType: "tracker",
       telemetry: []
    };
    
    for (var i = 0; i < reports.length; i++) {
      result.deviceName = parseInt(reports[i].value.substring(2, 16), 16);
      var telemetryObj = {
          ts: {},
          values: {}
      };
      timestamp = stringToInt(reports[i].value.substring(32,40))*1000;
      v = stringToInt(reports[i].value.substring(40,42))/100 + 3;
      t = stringToInt(reports[i].value.substring(42,44));
      lat = stringToInt(reports[i].value.substring(44,52))/10000000;
      lon = stringToInt(reports[i].value.substring(52,60))/10000000;
      alt = stringToInt(reports[i].value.substring(60, 64));
      speed = stringToInt(reports[i].value.substring(64, 68));
      sat = stringToInt(reports[i].value.substring(68, 70));
      ttf = stringToInt(reports[i].value.substring(70, 72));
       
      telemetryObj.ts = timestamp;
      telemetryObj.values.batteryVoltage = v;
      telemetryObj.values.temperature = t;
      if(lat !== 0) {
            telemetryObj.values.latitude = lat;      
      }
      if(lon !== 0) {
            telemetryObj.values.longitude = lon;      
      }
      if(alt !== 0) {
            telemetryObj.values.altitude = alt;      
      }
      telemetryObj.values.speed = speed;
      telemetryObj.values.satellitesObserved = sat;
      telemetryObj.values.timetToFirstFix = ttf;
      telemetryObj.values.imei = result.deviceName;
      result.telemetry.push(telemetryObj);
    }
    
    /** Helper functions **/
    
    function stringToInt(hex) {
        return parseInt('0x' + hex.match(/../g).reverse().join(''));
    }
    
    function decodeToString(payload) {
       return String.fromCharCode.apply(String, payload);
    }
    
    function decodeToJson(payload) {
      // convert payload to string.
      var str = decodeToString(payload);
    
      // parse string to JSON
      var data = JSON.parse(str);
      return data;
    }
    
    return result;

``` 

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
 * ThingsBoard will automatically create device with type "tracker" and name equal to IMEI;
 * Timestamp and sensor readings are decoded from incoming hex string.
 * The following table shows the first byte position and the number of bytes for each encoded field that includes in the incoming hex string:

<table style="width: 22%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>First Byte</b></td><td><b>Byte length</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>deviceName</td>
          <td>2</td>
          <td>7</td>
      </tr>
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

- Import following json file: [**SODAQ Uplink_udp data converter**](/docs/user-guide/resources/sodaq/sodaq_udp_data_uplink_converter.json) (left click on the link and then 'Ctrl+S' to download) 
as described on the following screencast: 

<img data-gifffer="/images/user-guide/integrations/sodaq/import-and-test-udp-converter.gif" />

## Step 2. Integration configuration

- Create new integration and copy-paste the HTTP Endpoint URL from the integration window based on the screencast below: 

<img data-gifffer="/images/user-guide/integrations/sodaq/create-udp-integration.gif" />

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
          <td>SODAQ UDP Integration</td>
      </tr>
      <tr>
          <td>Type</td>
          <td>UDP</td>
      </tr>
      <tr>
          <td>Debug mode</td>
          <td>True</td>
      </tr>
      <tr>
          <td>Uplink data converter</td>
          <td>SODAQ UDP Uplink data converter</td>
      </tr>
      <tr>
          <td>Downlink data converter</td>
          <td>(empty)</td>
      </tr>
      <tr>
          <td>Port</td>
          <td>12345</td>
      </tr>
      <tr>
          <td>So Broadcast option</td>
          <td>128</td>
      </tr>
      <tr>
          <td>Charset Name</td>
          <td>UTF-8</td>
      </tr>
      <tr>
          <td>Handler Configuration</td>
          <td>Handler Type | HEX</td>
      </tr>
   </tbody>
</table> 

- After filling all fields click the **ADD** button. 

## Step 3: Post telemetry and verify the Integration configuration

Before we rush to T-Mobile IoT platform configuration, let's make sure ThingsBoard is properly configured using simple **echo** command and **netcat** utility.
We will simulate messages from the T-Mobile IoT platform using the commands below and also take the value of the key named 'value' from json above
Let's execute the following command:

{% highlight bash %}
payload=01014294292BE0E50000000000000000FBE61D5D56268710211F249E150319000100000901

echo $payload | xxd -r -p | nc -u $URL_THINGSBOARD_CLOUD_HOST 12345
{% endhighlight %}
**you need to replace $URL_THINGSBOARD_CLOUD_HOST with actual cloud host URL**

Device with name '**13845261746254392**' should be created:

<img data-gifffer="/images/user-guide/integrations/sodaq/validate-udp-integration.gif" />

Now you can delete this dummy device if needed.

## Step 4: Check Integration Debug Events

Navigate to Integration Debug Events, similar to Step 3 and double check that data from real devices arrives and is processed successfully. 
Please note that it may take some time (up to 30 minutes based on our experience) for new message to start arriving.

<img data-gifffer="/images/user-guide/integrations/sodaq/debug-event-udp-integration.gif" />

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}


 



