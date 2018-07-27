---
layout: docwithnav
title: Check relationship
description: Check relationship

---

* TOC
{:toc}

## Use case

Let’s assume the following use case:

 - You have 2 groups of devices that uses sensors to collect and push temperature readings to ThingsBoard:

    - The first group - devices with sensors collecting temperature readings in °F.
    - The second group - devices with sensors collecting temperature readings in °C.


This tutorial will explain how to:

 - check the devices that collect data in °F.
 - transform the incoming data from these devices to °C.


## Prerequisites

You need to read the following guides before you start this tutorial:

  * [Getting Started](/docs/getting-started-guides/helloworld/).
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  
  
# Model definition
There are 2 Assets, in each of which there are two devices are installed:

 - The first Asset is represented as an Asset. Its name is **Fahrenheit devices** and its type is **Temperature sensors**:
 
    - Fahrenheit device A is represented as a Device. Its name is **Fahrenheit device A** and its type is **Temperature sensor**.
  
    - Fahrenheit device B is represented as a Device. Its name is **Fahrenheit device B** and its type is **Temperature sensor**.

 - The second Asset is represented as an Asset. Its name is **Celsius devices** and its type is **Temperature sensors**:

    - Celsius device A is represented as a Device. Its name is **Celsius device A** and its type is **Temperature sensor**.
  
    - Celsius device B is represented as a Device. Its name is **Celsius device B** and its type is **Temperature sensor**.
    
- Create a relationship of the type **Contains**:
   - from **Fahrenheit devices** to **Fahrenheit device A**;
   - from **Fahrenheit devices** to **Fahrenheit device B**.

- Create a relationship of the type **Contains**
	- from **Celsius devices** to **Celsius device A**;
	- from **Celsius devices** to **Celsius device B**.
     
# Configure the Rule Chain

The default rule chain will be modified to add the following:

 - The **Check Relationship Filter** node that checks the relationship from the Asset **Fahrenheit devices** to the originator of the message by type and direction. This rule node will be added next after the **Message Type Switch** default rule node with a relationship type **Post telemtry**.
 
 - The **Script Transformation** node with a temperature transformation script. This rule node will be connected to the **Check Relationship Filter** node with a relationship type **True**  and then it will be connected to the **Save Timeseries** default rule node with a relationship type **Success** .
 
 - The **Save Timeseries** node and it will be connected to the **Check Relation Filter** node with a relationship type **False**.
  
 Please, note that the irrelevant rule nodes have been removed from the root rule chain.

The following screenshot shows how the final Rule Chain should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/chain.png)

- Download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/check_relation_tutorial.json) for the rule chain from indicated above.
- Don't forget to mark new rule chain as "root".  

Also, you can create the new Rule Chain from scratch. The following section shows you how to create it.

#### Creating a new Rule Chain (**Check Relationship Tutorial**)
  
  - Go to **Rule Chains** -> **Add new Rule Chain** 
  	
 - Enter the Name field as **Check Relationship Tutorial**, then click the **ADD** button.
 
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

[Transform incoming telemetry](/docs/user-guide/rule-engine-2-0/tutorials/transform-incoming-telemetry/) - for more information about how to transform an incoming telemetry in Thignsboard.
<br/>
<br/>






