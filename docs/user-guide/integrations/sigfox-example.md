---
layout: docwithnav
title: Get device parameters using SigFox integration
description: SigFox integration guide

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

This tutorial will show how to get attribute value of a device using SigFox integration.


 
## Use case

In this tutorial we will get a shared attribute of specified device using SigFox integration.
SigFox backend will be simulated using Postman.

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  * [SigFox Integration](/docs/user-guide/integrations/sigfox/).
  * [Data converters](/docs/user-guide/integrations/index/#data-converters). 

## Model definition
  
We will operate with device that has name "12345" which will be
automatically created in the process of integration work.

![image](/images/user-guide/integrations/sigfox/sigfox-device.png)

## Getting started

### Creating converters

In order for integration to work, downlink and uplink converters should be created.

- Go to **Data Converters** -> **Add new Data Converter** -> **Import Converter** 

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/import_new_converter.png)

- Import following files: [**uplink converter**](/docs/user-guide/resources/sigfox/uplink-sigfox-converter.json),
 [**downlink converter**](/docs/user-guide/resources/sigfox/downlink-sigfox-converter.json).

Uplink converter should look like this:

![image](/images/user-guide/integrations/sigfox/sigfox-uplink-converter.png) 

Downlink converter should look like this:

![image](/images/user-guide/integrations/sigfox/sigfox-uplink-converter.png)

### Creating integration

Integration should look like this:

- Go to **Integrations** -> **Add new Integration**

![image](/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/add-new-integration.png)

- Fill in the fields with the input data shown in the following table: 

<table style="width: 25%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Name</td>
          <td>SigFox Integration</td>
      </tr>
      <tr>
          <td>Type</td>
          <td>SigFox</td>
      </tr>
      <tr>
          <td>Debug mode</td>
          <td>False</td>
      </tr>
      <tr>
          <td>Uplink data converter</td>
          <td>Sensor Uplink Converter</td>
      </tr>
      <tr>
          <td>Downlink data converter</td>
          <td>Sensor Downlink Converter</td>
      </tr>
      <tr>
          <td>Host</td>
          <td>iot.eclipse.org</td>
      </tr>
   </tbody>
</table> 



## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}
