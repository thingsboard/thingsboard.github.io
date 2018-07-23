---
layout: docwithnav
title: Create alarm when device is offline for some time
description: Create device connectivity alarm using the rule engine.

---

* TOC
{:toc}


ThingsBoard Device State service is responsible for monitoring of the device connectivity state and triggering device connectivity events that are pushed to the Rule Engine.

For today exist four types of events:

 - Connect event - triggered when device connects to ThingsBoard; 

 - Disconnect event - triggered when device disconnects from ThingsBoard; 

 - Activity event - triggered when device pushes telemetry, attribute update or rpc command;

 - Inactivity event - triggered when device was inactive for a certain period of time. 
 


In this tutorial, we will explain in more detail about the Inactivity event and also how:

 - create Inactivity alarms using the rule engine;

 - configure parameter for inactivity timeout;
   

<br/> 
<br/> 

# Use Case

Let’s assume your device using a temperature sensor to collect and push telemetry was connected to ThingsBoard.
Also, suppose that the sensor may stop push the telemetry due to certain faults.

We want to generate inactivity alarms if the device inactive for the defined period.

In this tutorial we will configure ThingsBoard Rule Engine to:

 - Creating Alarm if the device inactive for the defined period that may set in two ways:
 
    - first way: change the global configuration parameter for inactivity timeout. This parameter is defined in **thingsboard.yml** (state.defaultInactivityTimeoutInSec) and by default it is set to 10 seconds.
    
    - second way: overwrite this parameter for the individual device by setting **“inactivityTimeout”** server-side attribute (value is set in milliseconds).
    
     The second way described below.
 
 - Clearing Alarm if the device is active.

# Model definition

The device is represented as Device with the name **Temperature device** and Device type **Temperature sensor**. 

![image](/images/user-guide/rule-engine-2-0/tutorials/inactivity alarms/add device.png)    

<br/>
<br/>

# Configure Device

 - Go to **Devices** -> **Temperature device** -> **Attributes** -> **Server attributes** and Press **Add** button;

 - Set **“inactivityTimeout”** attribute, for example, with value 60000 milliseconds.

![image](/images/user-guide/rule-engine-2-0/tutorials/inactivity alarms/add attribute.png)    

<br/>
<br/>

# Configure Rule Chain

Here is how **Tutorial of Inactivity Event** Rule Chain should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/inactivity alarms/chain.png)


- Download attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/tutorial_of_inactivity_event.json) with a rule chain from this tutorial and import it.

- Don't forget to mark new rule chain as "root".  

Also, you can create new Rule Chain from scratch. Below you can see how to do it.


#### Create new Rule Chain **Tutorial of RPC Call Request**

- Go to **Rule Chains** -> **Add new Rule Chain** 

Configuration:

- Name : **Tutorial of Inactivity Event**

![image](/images/user-guide/rule-engine-2-0/tutorials/inactivity alarms/add chain.png) 

New Rule Chain is created. Press **Edit** button and configure Chain.


###### Add **Message Type Switch** node
Add **Message Type Switch** node and connect it to the **Input** node.
 
This node will route incoming messages according to the message type, namely: 

- **POST_TELEMETRY_REQUEST**;

- **ACTIVITY_EVENT**;

- **INACTIVITY_EVENT**;

- **POST_ATTRIBUTES_REQUEST**.

Configuration:

- Name: **Message Type Switch**.


![image](/images/user-guide/rule-engine-2-0/tutorials/inactivity alarms/messageTypeSwitch.png)

###### Add **Save Timeseries** node 
Add **Save TimeSeries** node and connect it to the **Message Type Switch** node with relation type **Post telemetry**.

This node will store TimeSeries data from incoming Message payload to the database and associate them to the Device, that is identified by the Message Originator.

Configuration:

- Name: **Save Time Series**.


![image](/images/user-guide/rule-engine-2-0/tutorials/inactivity alarms/save ts.png)


###### Add **Save Server Attributes** node 
Add **Save Attributes** node and connect it to the **Message Type Switch** node with relation type **Post attributes**.

This node will store attributes from incoming Message payload to the database and associate them to the Entity, that is identified by the Message Originator. 
Configuration:

- Name: **Save Server Attributes**.


![image](/images/user-guide/rule-engine-2-0/tutorials/inactivity alarms/save attributes.png)


###### Add **Create Inactivity alarm** node 
Add **Create alarm** node and connect it to the **Message Type Switch** node with relation type **Inactivity Event**.

This node tries to load the latest Alarm with configured Alarm Type for Message Originator. If Uncleared Alarm exists, then this Alarm will be updated, otherwise, a new Alarm will be created.
Configuration:

- Name: **Create Inactivity Alarm**;

- Alarm type: **Inactivity TimeOut**.



![image](/images/user-guide/rule-engine-2-0/tutorials/inactivity alarms/create alarm.png)


###### Add **Clear Inactivity alarm** node 
Add **Clear alarm** node and connect it to the **Message Type Switch** node with relation type **Activity Event**.

This Node loads the latest Alarm with configured Alarm Type for Message Originator and Clear the Alarm if it exist.
Configuration:

- Name: **Clear Inactivity Alarm**;

- Alarm type: **Inactivity TimeOut**.


![image](/images/user-guide/rule-engine-2-0/tutorials/inactivity alarms/clear alarm.png)

<br/>

This Rule chain is ready and we should save it. 

<br/>
<br/>

# Verify Rule Chain and Post telemetry
Configuration is finished and we can verify that Rule Chain works as we expect.

- We will use Rest API ([link](/docs/reference/http-api/#telemetry-upload-api)) for posting device telemetry. For this we will need to
copy device access token from then device **Temperature device**. 

![image](/images/user-guide/rule-engine-2-0/tutorials/inactivity alarms/access token.png)

***you need to replace $ACCESS_TOKEN with actual device token**

Lets post temperature = 20. Alarm should be created a minute after the telemetry post:

{% highlight bash %}
curl -v -X POST -d '{"temperature":20}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/inactivity alarms/telemetry.png)

![image](/images/user-guide/rule-engine-2-0/tutorials/inactivity alarms/created alarm.png)

<br/>
<br/>


For more details about Device Connectivity state in the Thignsboard, please read [Device Connectivity Status](/docs/user-guide/device-connectivity-status/) Article. 
<br/>
<br/>