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

 ![image](/images/user-guide/rule-engine-2-0/tutorials/check%20relation/smoke-sensor.png) ![image](/images/user-guide/rule-engine-2-0/tutorials/check%20relation/fire-alarm-system.png) <br/>
 ![image](/images/user-guide/rule-engine-2-0/tutorials/check%20relation/add-relation.png)
 
<br/> 

# Configure Rule Chain

The default rule chain will be modified to add the following:

 - The [**Script Filter**](/docs/user-guide/rule-engine-2-0/filter-nodes/#script-filter-node) node that that evaluates incoming Message with configured JavaScript condition. This rule node will be added next after the **Save Timeseries** default rule node with a relation type **Success**.
   
   ```javascript
   return msg.Smoke== 'true';
   ```
  - Enter the Name field as **Smoke Alarm Filter**.
 
 - The [**Create alarm**](/docs/user-guide/rule-engine-2-0/action-nodes/#create-alarm-node  ) node that tries to load the latest Alarm with configured Alarm Type for Message Originator. This rule node will be connected to the **Script Filter** node with a relation type **True**;
  
 - The [**Create alarm**](/docs/user-guide/rule-engine-2-0/action-nodes/#clear-alarm-node) node that loads the latest Alarm with configured Alarm Type for Message Originator and Clears the Alarm if it exists. This rule node will be connected to the **Script Filter** node with a relation type **False**.
  
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

![image](/images/user-guide/rule-engine-2-0/tutorials/check%20relation/add-fire-alarm-chain.png)

New Rule Chain is created. Press **Edit** button and configure Chain.

##### Adding the required nodes

In this rule chain, you will create 4 nodes as it will be explained in the following sections:

###### **Check Relation** node

 - Add the **Check Relation** node and connect it to the **Input** node.

 - This node will check the relationship from the Device, **Fire Alarm System**, to the originator of the message - **Smoke Detector** using the type and direction.

  <br/>If the relation exists, the message will be sent through the True chain.

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
           <td>Check Relation</td>
       </tr>     
       <tr>
           <td>Direction</td>
           <td>To</td>
       </tr>
       <tr>
           <td>Type</td>
           <td>Device</td>
       </tr>
        <tr>
           <td>Device</td>
           <td>Fire Alarm System</td>
        </tr>
       <tr>
           <td>Relation type</td>
           <td>Uses</td>
       </tr>
    </tbody>
 </table>
  
![image](/images/user-guide/rule-engine-2-0/tutorials/check%20relation/check-relation.png)

###### **Change Orignator** node 

- Add the **Change Orignator** node and connect it to the **Check Relation** node with a relation type **True**. <br>
  This node will change the originator from the Related Device **Smoke Detector** to the Device **Fire Alarm System** and the submitted message will be processed as a message from another entity, namely **Fire Alarm System**.
  
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
          <td>Change Originator</td>
      </tr>
      <tr>
          <td>Originator source</td>
          <td>Related</td>
      </tr>
      <tr>
          <td>Direction</td>
          <td>From</td>
      </tr>
      <tr>
          <td>Max relationship level</td>
          <td>1</td>
      </tr>
      <tr>
          <td>Relation type</td>
          <td>Uses</td>
      </tr>
      <tr>
          <td>Entity type</td>
          <td>Device</td>
      </tr>
   </tbody>
</table>

![image](/images/user-guide/rule-engine-2-0/tutorials/check%20relation/change-originator.png)
 
###### **Script Transformation** node 
 - Add the **Script Transformation** node and connect it to the **Change Orignator** node with a relationship type **Success**.

This node will transform an original message into RPC request message. 

- The RPC call will have 2 properties:

	- method: **ON**.
	
	- params: **{}**.
	
 - In order to do this, add the following Script:

```javascript
var newMsg = {};
if(msg.Smoke == 'true'){
      newMsg.method = 'ON';  
} 
newMsg.params={};
return {msg: newMsg, metadata: metadata, msgType: msgType};
```

 - Enter the Name field as **New RPC message**.
  
![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/transformation-node.png)  

###### **RPC call request** node
- Add the **RPC call request** node and connect it to the **Script Transformation** node with a relation type **Success**. <br>
  This node takes the message payload and sends it as a response to the Message Originator.
- Enter the Name field as **Fire Alarm System**.
- Enter the Timeout value as 60 seconds.

![image](/images/user-guide/rule-engine-2-0/tutorials/check%20relation/rpc-call-request.png)

<br/>

This Rule chain is ready and we should save it. The following screenshots show how the **Fire Alarm System** Rule Chain should look like: 

![image](/images/user-guide/rule-engine-2-0/tutorials/check%20relation/fire-alarm-chain.png)

#### Connect Rule Chains
Now we will connect our new chain with the **Root Chain**. 

We want to route incoming message from **Script Filter** to our new rule chain (**Fire Alarm System**) via **true** relation.

Let's return to the **Root Rule Chain**, press **Edit** button and make required changes.

<br/>
<br/>

# How to verify the Rule Chain and Post telemetry

- Use the following javascript code to emulate the **Fire Alarm System** device.

  - [**FireAlarmEmulator.js**](/docs/user-guide/rule-engine-2-0/tutorials/resources/FireAlarmEmulator.js).
  
  - To run the script, you need to do the following steps:
  
  - Copy the **Fire Alarm System** device access token, then paste them in the script.  <br>
  You can copy the access token from the Device page. <br> <br>  
  

- Use the Rest APIs, [Telemetry upload APIs](/docs/reference/http-api/#telemetry-upload-api), for posting telemetry from the device **Smoke Detector**. <br>

{% highlight bash %}
curl -v -X POST -d '{"Smoke":"true"}' http://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"

***you need to replace $ACCESS_TOKEN with the actual device token**
{% endhighlight %}
<br/>

Also, you can:

  - configure the Dashboard by adding an alarm widget to visualize the alarms.
  
  - define an additional logic for alarm processing, for example, sending an email.

Please refer to the third and fourth links under the **See Also** section to see how to do this.
  
<br/>

# See Also

- [Switch Node](//docs/user-guide/rule-engine-2-0/filter-nodes/#switch-node) guide - for more information about how to use Switch Node in Thignsboard.

- [Validate incoming telemetry](/docs/user-guide/rule-engine-2-0/tutorials/validate-incoming-telemetry/#step-1-adding-temperature-validation-node) tutorial - for more information about how to validate an incoming telemetry using the Script Filter node.

- [Create & Clear Alarms: configure dashboard](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/#configure-device-and-dashboard) guide - to learn how to add an Alarm widget to the dashboard.

- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) tutorial.

- [RPC capabilities](/docs/user-guide/rpc/#server-side-rpc-api) guide - for more information about how RPC works in Thignsboard, please refer to the RPC capabilities guide.

<br/>
<br/>






