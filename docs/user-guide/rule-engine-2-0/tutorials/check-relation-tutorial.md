---
layout: docwithnav
title: Check relation
description: Check relation

---

* TOC
{:toc}

## Use case

Let’s assume that we have 2 groups of devices wich using the sensors to collect and push temperature readings to ThingsBoard:

 - first group - devices with sensors that collect temperature readings in °F;  
 
 - second group - devices with sensors that collect temperature readings in °C;

In this tutorial we will explain how to:

 - check devices that collect data in °F;
 
 - transform incoming data from this devices to °C;
 

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  
  
# Model definition
There are 2 Assets in each of which there are two devices are installed: 

 - First Asset is represented as Asset with the name **Fahrenheit devices** and Asset type **Temperature sensors**;
 
    - Fahrenheit device A is represented as Device with the name **Fahrenheit device A** and type **Temperature sensor**;
  
    - Fahrenheit device B is represented as Device with the name **Fahrenheit device B** and type **Temperature sensor**.

 - Second Asset is represented as Asset with the name **Celsius devices** and Asset type **Temperature sensors**;

    - Celsius device A is represented as Device with the name **Celsius device A** and type **Temperature sensor**;
  
    - Celsius device B is represented as Device with the name **Celsius device B** and type **Temperature sensor**. 
    
 - Create relation from **Fahrenheit devices** to **Fahrenheit device A** and **Fahrenheit device B** via relation **Contains**;
   
 - Create relation from **Celsius devices** to **Celsius device A** and **Celsius device B** via relation **Contains**.      
     
# Configure Rule Chain

We will modify default rule chain and will add:

 - **Check Relation Filter** node that check the relation from the Asset **Fahrenheit devices** to originator of the message by type and direction. We will place this rule node next after **Message Type Switch** default rule node with relationship **Post telemtry**.
 
 - **Script Transformation** node with temperature transformation script. We will connect this rule node to **Check Relation Filter** node with a relationship type **True**  and then connected to **Save Timeseries** default rule node with a relationship type **Success** .
 
 - **Save Timeseries** node and connect it to the **Check Relation Filter** node with a relationship type **False**.
  
 Please note that we have removed irrelevant rule nodes from the root rule chain as well.

The following screenshot shows how the final Rule Chain should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/chain.png)

- Download attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/check_relation_tutorial.json) with a rule chain from this tutorial and import it.
- Don't forget to mark new rule chain as "root".  

Also, you can create the new Rule Chain from scratch. The following section shows you how to create it.

#### Creating a new Rule Chain (**Check Relation Tutorial**)
  
  - Go to **Rule Chains** -> **Add new Rule Chain** 
  	
 - Enter the Name field as **Check Relation Tutorial**, then click the **ADD** button.
 
  - The new Rule Chain is created. Don’t forget to mark it as “root”.
  
  ![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/add chain.png)  ![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/root chain.png) 

##### Adding the required nodes

In this tutorial, you will create 5 nodes as it will be explained in the following sections:

###### **Message Type Switch** node
Add the **Message Type Switch** node and connect it to the **Input** node.

This node will route the incoming messages according to the message type: **POST_TELEMETRY_REQUEST**;
  
Enter the Name field as **Message Type Switch**, then click the **ADD** button.
 
![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/messageTypeSwitch.png)
 
###### **Check Relation Filter** node 
Add the **Check Relation** node and connect it to the **Message Type Switch** node with a relationship type **Post telemetry**.  

This node will check the relation from the Asset **Fahrenheit devices** to the originator of the message by type and direction.

If the relation exists - Message is sent via True chain, otherwise, the False chain is used.

Enter the Name field as **Check Relation**.
  
![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/check relation.png)
  
 
###### **Script Transformation** node 
Add the **Script Transformation** node and connect it to **Check Relation Filter** node with a relationship type **True**. 

This node Changes Message payload using the configured JavaScript function namely transform, the temperature in Fahrenheit to temperature in Celsius degrees.
In order to do this we will use the following function:

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

Enter the Name field as **Transform From °F to °C**.
  
![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/transformation.png)  

###### **Save Timeseries** nodes
Add two **Save TimeSeries** node and connect it to the next nodes:

- **Script Transformation** node with a relationship type **Success**.  

- **Check Relation Filter** node with a relationship type **False**.  

These nodes will store the TimeSeries data from the incoming Message payload into the database and link it to the Device that is identified by the Message Originator.  

Enter the Name field as **Save Time Series**.
      
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

For more details about the Transform incoming telemetry in Thignsboard, please refer to [Transform incoming telemetry](/docs/user-guide/rule-engine-2-0/tutorials/transform-incoming-telemetry/) guide. 
<br/>
<br/>






