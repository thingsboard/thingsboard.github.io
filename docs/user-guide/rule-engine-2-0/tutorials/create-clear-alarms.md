---
layout: docwithnav
title: Create and Clear Alarms
description: Create and Clear Alarms

---

* TOC
{:toc}

## Use case

Let's assume your device is using DHT22 sensor to collect and push temperature readings to ThingsBoard. 
DHT22 sensor is good for -40 to 80°C temperature readings. We want generate Alarms if temperature is out of good range.

In this tutorial we will configure ThingsBoard Rule Engine to 

- Create or Update existing Alarm if temperature > 80°C or temperature < -40°C
- Clear Alarm if temperature > -40°C and < 80°C

## Prerequisites

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).

## Adding the device

Add Device entity in ThingsBoard. Its name is **Thermostat Home** and its type is **Thermostat**.

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/add-device.png)

<br>

## Message flow

In this section, we explain the purpose of each node in this tutorial:

- Node A: [**Filter Script**](/docs/user-guide/rule-engine-2-0/filter-nodes/#check-relation-filter-node) node.
  - This node with temperature threshold check script will verify: "if the temperature is in the expected interval, the script will return False, otherwise True will be returned".
- Node B: [**Create alarm**](/docs/user-guide/rule-engine-2-0/action-nodes/#create-alarm-node) node.
  - Creates or Updates an  alarm if the published temperature is not at expected time range (filter script node returns True).
- Node C: [**Clear alarm**](/docs/user-guide/rule-engine-2-0/action-nodes/#clear-alarm-node) node.
  - Clears alarm if it exists in case if the published temperature is in expected time range (script node returns False).
- Node D: [**Rule Chain**](/docs/user-guide/rule-engine-2-0/flow-nodes/#rule-chain-node) node.
  - Forwards incoming Message to specified Rule Chain **Create & Clear Alarms**.

<br>

## Configure Rule Chains

In this tutorial, we modified our **Root Rule Chain** and also created Rule Chain **Create & Clear Alarms**

<br>The following screenshots show how the above Rule Chains should look like:

  - **Create & Clear Alarms:**

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/create-clear-alarm-chain.png)

 - **Root Rule Chain:**

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/root-rule-chain.png)

<br>

Download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/create___clear_alarms.json) for the **Create & Clear Alarms** rule chain.
Create Node D as shown on the image above in the root rule chain to forward telemetry to the imported rule chain.
<br>
<br>

The following section shows you how to create this rule chain from scratch.

#### Create new Rule Chain (**Create & Clear Alarms**)

Go to **Rule Chains** -> **Add new Rule Chain**

Configuration:

- Name : **Create & Clear Alarms**

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/add-chain.png)

New Rule Chain is created. Press **Edit** button and configure Chain.

###### Adding the required nodes

In this rule chain, you will create 3 nodes as it will be explained in the following sections:

###### Node A: **Filter Script**
- Add the **Filter Script** node and connect it to the **Input** node with a relation type **Success**.
 <br>This node will verify: "if the temperature is in the expected interval" using the following script:

   {% highlight javascript %}return msg.temperature < -40 || msg.temperature > 80;{% endhighlight %}

If the temperature is in the expected interval the script will return False, otherwise True will be returned.

- Enter the Name field as **Under Threshold**.

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/filter-alarm.png)

###### Node B: **Create alarm**
- Add the **Create alarm** node and connect it to the **Filter Script** node with a relation type **True**. <br>
  This node loads the latest Alarm with configured Alarm Type for Message Originator, namely **Thermostat Home**<br> if the published temperature is not at expected range (filter script node returns True). 

 - Enter the Name field as **Create alarm** and the Alarm type as **Critical Temperature**.

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/create-alarm.png)

###### Node C: **Clear Alarm**
- Add the **Clear Alarm** node and connect it to the **Filter Script** node with a relation type **False**. <br>
  This node loads the latest Alarm with configured Alarm Type for Message Originator **Thermostat Home**<br> and Clears alarm if it exists in case if the published temperature is in expected range (script node returns False). 

- Enter the Name field as **Clear Alarm** and the Alarm type as **Critical Temperature**.

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/clear-alarm.png)


#### Modify Root Rule Chain

The following screenshot shows the initial Root Rule Chain.

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/initial-chain.png)

The initial Rule Chain has been modified by adding the following node:

###### Node D: **Rule Chain**
- Add the **Rule Chain** node and connect it to the **Filter Script** node with a relation type **True**. <br>
  This node forwards incoming Message to specified Rule Chain **Create & Clear Alarms**.

- Enter the Name field as **Create & Clear Alarms**.

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/add-chain-node.png)

<br>

The following screenshot shows how the final **Root Rule Chain** should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/root-rule-chain.png)

<br>
<br>

## How to verify the Rule Chain and Post telemetry

For posting device telemetry we will use the Rest APIs, [Telemetry upload APIs](/docs/reference/http-api/#telemetry-upload-api). For this we will need to
copy device access token from the device **Thermometer**.

![image](/images/user-guide/rule-engine-2-0/tutorials/delta-validation/access-token.png)

{% highlight bash %}**you need to replace $ACCESS_TOKEN with actual device token**{% endhighlight %}

Let's pushed debug mode button in Clear Alarm and Create Alarm node to verify the results.

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/debug-mode-clear-alarm.png)<br>
![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/debug-mode-create-alarm.png)

sent temperature = 99. Alarm should be created:

{% highlight bash %}
curl -v -X POST -d '{"temperature":99}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/alarm-created.png)

Lets post temperature = 180. Alarm should be updated:

{% highlight bash %}
curl -v -X POST -d '{"temperature":180}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/alarm-updated.png)

Lets post temperature = 30. Alarm should be cleared:

{% highlight bash %}
curl -v -X POST -d '{"temperature":30}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms v2/alarm-cleared.png)

<br>

Also, you can:

  - configure Alarm Details function in the Create and Clear Alarm nodes.

  - configure the Dashboard by adding an alarm widget to visualize the alarms.

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
