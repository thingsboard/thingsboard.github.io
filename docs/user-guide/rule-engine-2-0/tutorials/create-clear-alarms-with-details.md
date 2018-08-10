---
layout: docwithnav
title: Create and Clear Alarms with details
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
- Count number of critical temperature updates for each device and save this info in Alarm details.
- Save latest critical temperature value and timestamp in Alarm details

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).

## Step 1: Adding temperature threshold check node
Here is how our initial Root Rule Chain should look like. Please note that we have removed irrelevant rule nodes from the root rule chain.

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/initial root chain.png)

We will modify default rule chain and will add **script** filter node with temperature threshold check script. 
If **temperature** is in expected interval, script will return **False**, otherwise **True** will be returned.
{% highlight javascript %}
return msg.temperature < -40 || msg.temperature > 80;
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/script-threshold.png)

**Script** node should be connected with **Save timeseries** node with relation **Success**. 
After telemetry from device will be saved into the database, original message will be passed to our script node. 

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/script-added.png)
 
## Step 2: Create/Update Alarm
If published temperature **is not in** expected time range (**script** node returns **True**) we want to create an Alarm.
We want to add current **temperature** and **timestamp** into Alarm Details field.
Also we want to increment **count** field in Alarm Details if alarm already exist, otherwise set count to 1.
 
For making it we will add **Create Alarm** node.

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/add-create-alarm.png)


**Alarm Type** - **Critical Temperature**

**Alarm Details** function:
{% highlight javascript %}
var details = {};
details.temperature = msg.temperature;
details.ts = metadata.ts;

if (metadata.prevAlarmDetails) {
    var prevDetails = JSON.parse(metadata.prevAlarmDetails);
    details.count = prevDetails.count + 1;
} else {
    details.count = 1;
}

return details;
{% endhighlight %}

**Alarm Details** function create required **deatils** object with initial parameters. Then, in **if** statement, we verify is it a new Alarm or Alarm already exist.
If exist - take previous **count** field and increment it.

Connect it with **script** node using **True** relation.

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/create-added.png)

If new Alarm was created in **Create Alarm** node it is passed to other nodes via relation **Created** if they exist. 
If Alarm was updated - it is passed to other nodes via relation **Updated** if they exist. 

## Step 2: Clear Alarm
If published temperature **is in** expected time range (**script** node returns **False**) we want to clear an existing Alarm.
Also during clearing, we want to add latest **temperature** to the existing Alarm details.

For making it we will add **Create Alarm** node.

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/add-clear-alarm.png)

**Alarm Details** function:
{% highlight javascript %}
var details = {};
if (metadata.prevAlarmDetails) {
    details = JSON.parse(metadata.prevAlarmDetails);
}
details.clearedTemperature = msg.temperature;

return details;
{% endhighlight %}

Connect it with **script** node using **False** relation.

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/clear-added.png)

If **Clear Alarm** node could not find existing Alarm, nothing is changed and original message is passed to other nodes via relation **False** if they exist. 
If Alarm do exist - it is cleared and passed to other nodes via relation **Cleared**.

Chain configuration is finished and we need to **save it**.

## Step 3: Verify Results

### Configure Device and Dashboard 
We need to create Device **Thermostat Home**:

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/create-device.png)


Next we will create Dashboard for all **Thermostat** devices and add Alarm widget on it. Create new Dashboard:

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/add-dashboard.png)

Press **Edit** dashboard and **add alias** that will be resolved to all devices with type **Thermostat**:

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/add-alias.png)

Add **Alarm widget** to the Dashboard (Add new widget -> Alarm widget bundle -> Alarms). Select configured alias **entity alarm source**. 
Also add additional **alarm fields**:

- details.ts
- details.temperature
- details.count
- details.clearedTemperature

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/alarm-widget-config.png)

### Post telemetry and verify
For posting device telemetry we will use Rest API ([link](/docs/reference/http-api/#telemetry-upload-api)). For this we will need to
copy device access token from then device **Thermostat Home**. 

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/copy-access-token.png)

***you need to replace $ACCESS_TOKEN with actual device token**

Lets post temperature = 99. Alarm should be created:

{% highlight bash %}
curl -v -X POST -d '{"temperature":99}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/alarm-created.png)

Lets post temperature = 180. Alarm should be updated and count field incremented:

{% highlight bash %}
curl -v -X POST -d '{"temperature":180}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/alarm-updated.png)

Lets post temperature = 30. Alarm should be cleared and cleared temperature should be shown:

{% highlight bash %}
curl -v -X POST -d '{"temperature":30}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/alarms/alarm-cleared.png)

## TL;DR

Download and import attached [**rule chain json file**](/docs/user-guide/resources/temperature_alarm_chain.json) with a rule chain from this tutorial. Don't forget to mark new rule chain as "root".

![image](/images/user-guide/rule-engine-2-0/tutorials/make-root.png)

Also you can import attached [**thermostat dashboard**](/docs/user-guide/resources/thermostat_dashboard.json)

