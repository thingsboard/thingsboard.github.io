---
layout: docwithnav
title: Telemetry delta calculation
description: Delta validation
---

* TOC
{:toc}

## Use case

Let's assume we have a device that uses a temperature sensor to collect and read temperature readings in the ThingsBoard.
In addition, let's assume that we need to generate the alarm when the delta between the last five-minutes temperature readings and the latest temperature reading does exceed 5 degrees.
Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. You can use this tutorial as a basis for much more complex scenarios.

## Prerequisites

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  * [Create & clear alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/) guide.

## Adding the device

Add Device entity in ThingsBoard. Its name is **Thermometer** and its type is **temperature sensor**.

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/add-thermometer.png)

<br>

## Message flow

In this section, we explain the purpose of each node in this tutorial. There will be two rule chains involved:

  - **Root rule chain** - rule chain that actually saves telemetry from devices into the database, and redirect the messages to **Temperature delta validation** chain

  - **Temperature delta validation** - rule chain that actually calculates the delta between the last five-minutes temperature and latest temperature readings.
    <br> As a result, if delta value exceeds 5 degrees, the alarm will be created/updated, otherwise, the alarm will be cleared.

The following screenshots show how the above Rule Chains should look like:

  - **Temperature delta validation:**

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/temperature-delta-validation-chain.png)

 - **Root Rule Chain:**

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/root-rule-chain.png)

<br>

Download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/temperature_delta_validation.json) for the **Temperature delta validation** rule chain.

Create Node G as shown on the image above in the root rule chain to forward telemetry to the imported rule chain.
<br>
<br>

The following section shows you how to create this rule chain from scratch.

#### Create new Rule Chain (**Temperature delta validation**)

Go to **Rule Chains** -> **Add new Rule Chain**

Configuration:

- Name : **Temperature delta validation**

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/add-temperature-delta-validation-chain.png)

New Rule Chain is created. Press **Edit** button and configure Chain.

###### Adding the required nodes

In this rule chain, you will create 6 nodes as it will be explained in the following sections:

###### Node A: **Originator telemetry**
- Add the **Originator telemetry** node and connect it to the **Input** node with a relation type **Success**.
  This rule node adds selected telemetry of message originator into message metadata for the selected time range.

The rule node has three fetch modes:

 - **FIRST**: retrieves telemetry from the database that is closest to the beginning of the time range

 - **LAST**: retrieves telemetry from the database that is closest to the end of the time range

 - **ALL**: retrieves all telemetry from the database, which is in the specified time range.

We will use fetch mode: **LAST**  with the time range from 24 hours ago till 5 minutes.

 - Enter the Name field as **Latest five-minute old record**.

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/latest-five-minute-old-record.png)

###### Fetch Mode ALL

  Originator telemetry node also supports ability to fetch all telemetry from the particular time range.
  We will not use this ability in our tutorial, but it may be useful in the cases if you need to calculate variance for a particular key or to
  predict further change of telemetry depending on telemetry changes in the selected time range.

  In this case, you need to select the fetch mode **ALL**. It will force rule node to fetch all telemetry from the specified time range and add it to the message metadata as an array.
  This array will contain JSON objects with the timestamp and value.

  - Metadata of the outbound message would be JSON document with the following structure:

  {% highlight javascript %}
  {
    "temperature": "[{\"ts\":1540892498884,\"value\":22.4},{\"ts\":1540892528847,\"value\":20.45},{\"ts\":1540892558845,\"value\":22.3}]"
  }{% endhighlight %}

  - In order to convert the array to the valid JSON document you can use the following function:

  {% highlight javascript %}
  var temperatureArray = JSON.parse(metadata.temperature);{% endhighlight %}

  - The temperature array will look like introduced below:

  {% highlight javascript %}
  {
      "temperatureArray": [{
          "ts": 1540892498884,
          "value": 22.4
      }, {
          "ts": 1540892528847,
          "value": 20.45
      }, {
          "ts": 1540892558845,
          "value": 22.3
      }]
  }{% endhighlight %}


###### Node B: **Script Transformation**
 - Add the **Script Transformation** node and connect it to the **Change Orignator** node with a relation type **Success**.

 This node will calculate the delta between the temperature reading from message payload and the five-minute old temperature reading from the message metadata using the following script:

   {% highlight javascript %}
   var newMsg = {};

   newMsg.deltaTemperature = parseFloat(Math.abs(msg.temperature - JSON.parse(metadata.temperature)).toFixed(2));

   return {msg: newMsg, metadata: metadata, msgType: msgType};{% endhighlight %}

 - Enter the Name field as **Calculate delta**.

 ![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/calculate-delta.png)

###### Node C: **Save Timeseries**
 - Add the **Save TimeSeries** node and connect it to the **Script Transformation** node with a relationship type **Success**.
   This node will save the TimeSeries data from the incoming Message payload into the database and link it to the Device that is identified as the Message Originator.

 - Enter the Name field as **Save Time Series**.

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/save-timeseries.png)

###### Node D: **Filter Script**
 - Add the **Filter Script** node and connect it to the **Save TimeSeries** node with a relation type **Success**.
 <br>This node will validate that calculated delta value between the latest temperature reading and five-minutes ago temperature reading did not exceed 5 degrees using the following script:

   {% highlight javascript %}
   return msg.deltaTemperature > 5;{% endhighlight %}

 - Enter the Name field as **Validate delta**.

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/validate-delta.png)


###### Node E: **Create alarm**
 - Add the **Create alarm** node and connect it to the **Filter Script** node with a relation type **True**. <br>
  This node loads the latest Alarm with configured Alarm Type for Message Originator, namely **Thermometer**<br> if the published delta temperature is not at expected range (filter script node returns True).

 - Enter the Name field as **Create alarm** and the Alarm type as **General Alarm**.

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/create-alarm.png)

###### Node F: **Clear Alarm**
 - Add the **Clear Alarm** node and connect it to the **Filter Script** node with a relation type **False**. <br>
  This node loads the latest Alarm with configured Alarm Type for Message Originator **Thermometer**<br> and Clears alarm if it exists in case if the published temperature delta is in expected range (script node returns False).

 - Enter the Name field as **Clear Alarm** and the Alarm type as **General Alarm**.

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/clear-alarm.png)

#### Modify Root Rule Chain

The initial root Rule Chain has been modified by adding the following node:

###### Node G: **Rule Chain**
- Add the **Rule Chain** node and connect it to the **Save Timeseries** node with a relation type **Success**. <br>
  This node forwards incoming Message to specified Rule Chain **Temperature delta validation**.

- Select the Rule Chain field: **Temperature delta validation**.

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/add-rule-chain-node.png)

<br>

The following screenshot shows how the final **Root Rule Chain** should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/root-rule-chain.png)

- Download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/root_rule_chain_delta_calculation.json) for the rule chain indicated above and import it.
- Don't forget to mark the new rule chain as **root**.  

<br>
<br>

## How to verify the Rule Chain and Post telemetry

For posting device telemetry we will use the Rest APIs, [Telemetry upload APIs](/docs/reference/http-api/#telemetry-upload-api). For this we will need to
copy device access token from the device **Thermometer**. 

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/access-token.png)

{% highlight bash %}**you need to replace $ACCESS_TOKEN with actual device token**{% endhighlight %}

To validate that rule chains works as expected, we need to post telemetry twice for the same device, with an interval, not less than 5 minutes and not more than 24 hours.
<br> Also, let's pushed debug mode button in **Create Alarm** node to verify that alarm will be created after the second post telemetry request.

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/debug-mode-create-alarm.png)<br>

sent temperature = 20.

{% highlight bash %}
curl -v -X POST -d '{"temperature":20}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/first-post-telemetry.png)

After 5 minutes delay let's sent e.g temperature = 26

{% highlight bash %}
curl -v -X POST -d '{"temperature":26}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/second-post-telemetry.png)

Alarm should be created:

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/alarm-created.png)

<br>

Also, you can:

  - configure Alarm Details function in the Create and Clear Alarm nodes.

  - configure the Dashboard by adding  an alarm widget to visualize the alarms.

  - define an additional logic for alarm processing, for example, sending an email.

Please refer to the links from the second to the fourth under the **See Also** section to see how to do this.

<br>

## See Also

- [Validate incoming telemetry](/docs/user-guide/rule-engine-2-0/tutorials/validate-incoming-telemetry/) tutorial - for more information about how to validate an incoming telemetry using the Script Filter node.

- [Create & Clear Alarms: alarm details:](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms-with-details/#modify-the-required-nodes) guide - to learn how to configure Alarm Details function in Alarm nodes.

- [Create & Clear Alarms: configure dashboard](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms-with-details/#configure-dashboard) guide - to learn how to add an Alarm widget to the dashboard.

- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) tutorial.

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}
