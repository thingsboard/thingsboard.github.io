---
layout: docwithnav
title: Check Relation between Entities
description: Check relationship

---
The purpose of this tutorial is to show how the **Check Relation** node can be used to check the relation between Entities.

However, there are different ways to check the relationship, for example, the relationship can be checked using the **Switch** node that routes incoming Message to one or multiple output chains.

For more information about how to use the **Switch** node, please check the link to **The article of Switch Node** in the  [**See Also**](/docs/user-guide/rule-engine-2-0/tutorials/check-relation-tutorial/#see-also) section.

* TOC
{:toc}

## Use case

Let’s assume the following use case:

 - You have 2 devices:
 
   - The first device - is the device with the smoke sensor which sends data to ThingsBoard when it appears.
   
   - The second device - is the device which provides a fire alarm, when the smoke is present.
 
<br/>
   
This tutorial will explain how to check the relation between Entities using Rule Engine, and also how to:

 - Create and connect different Rule Chains using **Rule Chain** node;

 - Implement transform the incoming data from a device  using the **Script** node;
 
 - Store attributes from the incoming Message payload into the database and link them to the Entity using the **Save Timeseries** node;
 
 - Filter messages using the **Script Filter** node.
 
 - Process the submitted message as a message from another entity using the **Change originator** node;
 
 - Creating and Clearing Alarms using **Create Alarm** and **Clear Alarm**  nodes.

## Prerequisites

You need to read the following guides before you start this tutorial:

  * [Getting Started](/docs/getting-started-guides/helloworld/).
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  
  
# Adding the Devices and Creating the Relation between Them

Add two Device entity in ThingsBoard:

 - Smoke Detector is represented as a Device. Its name is **Smoke Detector** and its type is **Smoke Sensor**.

 - Fire Alarm System is represented as a Device. Its name is **Fire Alarm System** and its type is **Fire Alarm Device**.

Create a relation of the type Uses:

 - from Smoke Detector to Fire Alarm System;

The following screenshots show how to do this:

 ![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/smoke sensor.png) ![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/fire alarm system.png) <br/>
 ![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/add relation.png)
 
<br/> 

# Configure Rule Chain

The default rule chain will be modified to add the following:

 - The **Script Filter** node that that evaluates incoming Message with configured JavaScript condition. This rule node will be added next after the **Save Timeseries** default rule node with a relation type **Success**.
 
 - The **Create alarm** node that tries to load the latest Alarm with configured Alarm Type for Message Originator. This rule node will be connected to the **Script Filter** node with a relation type **True**;
  
 - The **Create alarm** node that loads the latest Alarm with configured Alarm Type for Message Originator and Clears the Alarm if it exists. This rule node will be connected to the **Script Filter** node with a relation type **False**.
  
 - The **Rule Chain** node that forwards incoming Message to specified Rule Chain **Fire Alarm System**. This rule node will be connected to the **Script Filter** node with a relation type **True**.
  
 Please, note that the irrelevant rule nodes have been removed from the root rule chain.

The following screenshot shows how the final Root Rule Chain should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/chain.png)

- Download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/check_relation_tutorial.json) for the rule chain from indicated above.
- Don't forget to mark new rule chain as "root".  

Also, you need to create another one Rule Chain or you can download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/fire_alarm_system.json) for this chain and import it.
<br/>
<br/>
 The following section shows you how to create it.

#### Create new Rule Chain (**Fire Alarm System**)

Go to **Rule Chains** -> **Add new Rule Chain** 

Configuration:

- Name : **Fire Alarm System**

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/add fire alarm chain.png)

New Rule Chain is created. Press **Edit** button and configure Chain.

##### Adding the required nodes

In this rule chain, you will create 4 nodes as it will be explained in the following sections:

###### **Check Relation** node

 - Add the **Check Relation** node and connect it to the **Input** node.

 - This node will check the relationship from the Device, **Fire Alarm System**, to the originator of the message - **Smoke Detector** using the type and direction.

 - If the relation exists, the message will be sent through the True chain.

 - Enter the Name field as **Check Relation**.
  
![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/check relation.png)


#### Creating a new Rule Chain (**Check Relation Tutorial**)
  
  - Go to **Rule Chains** -> **Add new Rule Chain** 
  	
 - Enter the Name field as **Check Relation Tutorial**, then click the **ADD** button.
 
  - The new Rule Chain is created. Don’t forget to mark it as “root”.
  
  ![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/add chain.png)  ![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/root chain.png) 

##### Adding the required nodes

In this tutorial, you will create 4 nodes as it will be explained in the following sections:

###### **Message Type Switch** node
 - Add the **Message Type Switch** node and connect it to the **Input** node.

 - This node will route the incoming messages according to the message type: **POST_TELEMETRY_REQUEST**;
  
 - Enter the Name field as **Message Type Switch**, then click the **ADD** button.
 
![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/messageTypeSwitch.png)
 
###### **Check Relationship Filter** node
 - Add the **Check Relationship** node and connect it to the **Message Type Switch** node with a relationship type **Post telemetry**.

 - This node will check the relationship from the Asset, **Fahrenheit devices**, to the originator of the message using the type and direction.

 - If the relationship exists, the message will be sent through the True chain, otherwise, the False chain will be used.

 - Enter the Name field as **Check Relationship**.
  
![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/check relation.png)
  
 
###### **Script Transformation** node 
 - Add the **Script Transformation** node and connect it to the **Check Relationship Filter** node with a relationship type **True**.

 - This node changes the message payload using the configured JavaScript function to transform the temperature degree from Fahrenheit to its equivalent in Celsius.
 - In order to do this, use the following function:

```javascript
function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

if (typeof msg.temperature !== 'undefined'){
    msg.temperature = precisionRound((msg.temperature -32) * 5 / 9, 2);
}

return {msg: msg, metadata: metadata, msgType: msgType};
```

 - Enter the Name field as **Transform From °F to °C**.
  
![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/transformation.png)  

###### **Save Timeseries** node
 - Add two **Save TimeSeries** node and connect it to the next nodes:

    - the **Script Transformation** node with a relationship type **Success**.

    - the **Check Relationship Filter** node with a relationship type **False**.

 - These nodes will store the TimeSeries data from the incoming Message payload into the database and link it to the Device that is identified by the Message Originator.

 - Enter the Name field as **Save Time Series**.
      
![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/save ts.png)
  
<br/>

This Rule chain is now ready and you need to save it. 

<br/>
<br/>

# How to verify the Rule Chain and Post telemetry

- Use the Rest APIs, [Telemetry upload APIs](/docs/reference/http-api/#telemetry-upload-api), for posting the devices telemetry. <br>

Please, note that you will need to copy the devices access token from the devices, for example, **Fahrenheit device A** and **Celsius device B** as shown in the following screenshot. 

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/fahrenheit access token.png) ![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/celsius access token.png)



Try to post temperature = 68 for **Fahrenheit device A** and temperature = 20 for **Celsius device B**. <br/> The temperature from **Fahrenheit device A** should be converted from 68 ° F to 20 ° C and the temperature from **Celsius device B** will remain unchanged.

{% highlight bash %}

curl -v -X POST -d '{"temperature":68}' http://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"

curl -v -X POST -d '{"temperature":20}' http://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"

***you need to replace $ACCESS_TOKEN with the actual devices tokens**
{% endhighlight %}




![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/telemetry A.png)

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/telemetry B.png)

<br/>

Also, you can configure the Dashboard by adding a Digital or Analogue gauges widgets to visualize changes in temperature;
  
<br/>

# See Also

[**Switch Node**](//docs/user-guide/rule-engine-2-0/filter-nodes/#switch-node) - for more information about how to use  Switch Node in Thignsboard.

[Validate incoming telemetry](/docs/user-guide/rule-engine-2-0/tutorials/validate-incoming-telemetry/#step-1-adding-temperature-validation-node) - for more information about how to validate an incoming telemetry using the Script Filter node.

<br/>
<br/>






