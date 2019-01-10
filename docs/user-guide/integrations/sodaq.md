---
layout: docwithnav
title: SODAQ Universal Tracker telemetry upload
description: SODAQ Universal Tracker telemetry upload

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

This tutorial will explain the steps required to connect your SODAQ Tracker to ThingsBoard.

* TOC
{:toc}

## Use case

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/)
  * [ Overview](/docs/user-guide/rule-engine-2-0/overview/)
  * [Data converters](/docs/user-guide/integrations/index/#data-converters)

## Model definition
  
We will operate with SODAQ Universal Tracker which will be automatically created via Integration T-Mobile – IoT CDP.

![image](/images/user-guide/integrations/sodaq/model-definition.png)

## Getting started

In order to create Integration, we should create the Uplink Converter first. Please, refer to the next section to download the attached file for the uplink converter and import it.

### Creating converter

The converter, that will be described in this article, will decode specific telemetry payload data that contains in encoded hex string.

 - Input data should look like this:

{% highlight bash %}
{
    "reports": [{
        "serialNumber": "IMEI:0123456789",
        "timestamp": 1547035621977,
        "subscriptionId": "43524b52-b924-40f0-91f0-e7fa71dca87b",
        "resourcePath": "uplinkMsg/0/data",
        "value": "010145292a2bfbfc0000000000000000e6e3355c751a879de31e6535d10306005600d00402"
    }],
    "registrations": [],
    "deregistrations": [],
    "updates": [],
    "expirations": [],
    "responses": []
}
{% endhighlight %}

 - After decoding output data should look like this:

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

- The following table shows the first byte position and the number of bytes for each encoded field that includes in the incoming hex string:

<table style="width: 20%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Byte</b></td><td><b>Byte length</b></td>
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

- Import following json file: [**uplink data converter**](/docs/user-guide/resources/sodaq-uplink-data-converter.json)  as described on the following screenshot: 

![image](/images/user-guide/integrations/sodaq/import-converter.png)

 - Converter should look like this:

![image](/images/user-guide/integrations/sodaq/converter-view.png)

Once, the converter would be created, we could start Integration creation that described in the section below.

### Creating integration

- Go to **Integrations** -> **Add new Integration**

![image](/images/user-guide/integrations/sodaq/add-integration.png)

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

## Setting up dashboard

Download and [**import**](docs/user-guide/ui/dashboards/#dashboard-import) attached
json [**file**](/docs/user-guide/resources/temperature_control_dashboard.json) with a dashboard for this tutorial.

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}


    


 



