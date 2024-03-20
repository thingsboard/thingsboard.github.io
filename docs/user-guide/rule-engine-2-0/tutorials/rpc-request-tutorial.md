---
layout: docwithnav
title: Send RPC Request to the Related Device
description: Send RPC Request to a Device

---

ThingsBoard allows you to send remote procedure calls [**RPC**](/docs/user-guide/rpc/#server-side-rpc-api) from server-side applications to devices and vice versa. <br>
This Tutorial is to show you how to send a remote request call to a Related Device using Rule Engine.

* TOC
{:toc}

## Use case
Let’s assume the following use case:

  - you have the following devices connected to ThingsBoard:
	- Wind Direction Sensor.
	- Rotating System.
  - also, you have one asset:
	- Wind Turbine.
 - You want to initiate an RPC request to the Rotating System and change the direction of the Wind Turbine according to the direction of the wind.
 - The RPC call will have two properties:
	- method: **spinLeft** or **spinRight**.
	- params: **value**.

<table  style="width: 60%">
   <thead>
     <tr>
	 <td><strong><em>Note:</em></strong></td>
     </tr>
   </thead>
   <tbody>
     <tr>
	<td>
	<p>Turning the Rotating System to the left or to the right is based on which way is better and faster so that the angle between the direction of the wind and the wind turbine has to be no more than 5 degrees.</p>
	</td>
     </tr>
   </tbody>
</table>

## Prerequisites

We assume you have completed the following guides and reviewed the articles listed below:

 * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
 * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).

## Model definition
The Wind Turbine has two devices installed: Wind Direction Sensor and Rotating System.

- The Wind turbine is represented as an Asset. Its name is **Wind Turbine** and its type is **Wind turbine**. 
- The Wind Direction Sensor is represented as a Device. Its name is **Wind Direction Sensor** and its type is **Direction Sensor**.
- The Rotating System is represented as a Device. Its name is **Rotating System** and its type is **Rotating System**.
- Create a relation of the type **Contains**:
	- from **Wind Turbine** to **Wind Direction Sensor**, and
	- from **Wind Turbine** to **Rotating System**.
- Create a relation of the type **Uses**:
	- from **Rotating System** to **Wind Direction Sensor**.


## Message flow
In this section, we explain the purpose of each node in this tutorial:

- Node A: [**Message Type Switch**](/docs/user-guide/rule-engine-2-0/filter-nodes/#message-type-switch-node) node.
  - Routes incoming messages based on the message type.
- Node B: [**Save Timeseries**](/docs/user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node) node.
  - Stores messages telemetry from **Wind Direction Sensor** and **Rotating System** into the database. 
- Node C: [**Related attributes**](/docs/user-guide/rule-engine-2-0/enrichment-nodes/#related-attributes).
  - Loads the source telemetry **windDirection** of the related **Wind Direction Sensor** and save it into the Message metadata with the name **windDirection**.
- Node D: [**Change originator**](/docs/user-guide/rule-engine-2-0/transformation-nodes/#change-originator) node.
  - Change the originator from Devices **Wind Direction Sensor** and **Rotating System** to the related Asset **Wind Turbine** and the submitted message will be processed as a message from Asset.
- Node E: [**Save Timeseries**](/docs/user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node) node.
  - Stores messages telemetry from Asset **Wind Turbine** into the database. 
- Node F: [**Transformation Script**](/docs/user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node).
  - Transform an original message into RPC request message. 
- Node G: [**Filter Script**](/docs/user-guide/rule-engine-2-0/filter-nodes/#script-filter-node) node.
  - Checks if msgType of incoming message is **RPC message**.
- Node H: [**RPC call request**](/docs/user-guide/rule-engine-2-0/action-nodes/#rpc-call-request-node) node.
  - Takes the message payload and sends it as a response to the **Rotating System**.

<br>
<br>

## Configuring the Rule Chain

The following screenshot shows how the **Tutorial of RPC Call Request** Rule Chain should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/chain.png)

- Download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/tutorial_of_rpc_call_request.json) for the rule chain indicated above and import it.
- Don't forget to mark the new rule chain as "root".

Also, you can create the new Rule Chain from scratch. The following section shows you how to create it.


#### Creating a new Rule Chain (**Tutorial of RPC Call Request**)

- Go to **Rule Chains** -> **Add new Rule Chain**
- Enter the Name field as **Tutorial of RPC Call Request**, then click the **ADD** button.

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/create-chain.png) ![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/root-chain.png)

- The new Rule Chain is now created. Don’t forget to mark it as “root”.

##### Adding the required nodes

In this tutorial, you will create 8 nodes as it will be explained in the following sections:

###### Node A: **Message Type Switch**
- Add the **Message Type Switch** node and connect it to the **Input** node. <br>
  This node will route the incoming messages according to the message type, namely **POST_TELEMETRY_REQUEST**.

- Enter the Name field as **Message Type Switch**.


![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/message-type-switch.png)

######  Node B: **Save TimeSeries**
- Add the **Save TimeSeries** node and connect it to the **Message Type Switch** node with a relation type **Post telemetry**. <br>
  This node will store TimeSeries data from incoming Message payload to the database and associate them to the Device, that is identified by the Message Originator, namely **Wind Direction Sensor** and **Rotating System**.

- Enter the Name field as **Save Time Series**.


![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/save-ts.png)

###### Node C: **Related attributes**
- Add the **Related attributes** node and connect it to the **Save TimeSeries** node with a relation type **Success**. <br>
  This node will load the source telemetry **windDirection** from the related **Wind Direction Sensor** to **Rotating System** and save it into the Message metadata with the name **windDirection**.
- Fill in the fields with the input data shown in the following table:

<table>
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Name</td>
          <td>Fetch Wind Sensor Telemetry</td>
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
          <td>Relationship type</td>
          <td>Uses</td>
      </tr>
      <tr>
          <td>Entity type</td>
          <td>Device</td>
      </tr>
      <tr>
          <td>Latest telemetry</td>
          <td>true</td>
      </tr>
      <tr>
          <td>Source telemetry</td>
          <td>windDirection</td>
      </tr>
      <tr>
          <td>Target telemetry</td>
          <td>windDirection</td>
      </tr>
   </tbody>
</table>



![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/get-related.png)

###### Node D: **Change Originator**
- Add the **Change Originator** node and connect it to the **Save TimeSeries** node with a relation type **Success**. <br>
  This node will change the originator from Devices **Wind Direction Sensor** and **Rotating System** to the Related Asset **Wind Turbine** that has a relation of the type **Contains** from each of them. 
  <br>As a result, the submitted message will be processed as a message from this Entity
- Fill in the fields with the input data shown in the following table: 

<table>
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Name</td>
          <td>Create New Telemetry</td>
      </tr>
      <tr>
          <td>Originator source</td>
          <td>Related</td>
      </tr>
      <tr>
          <td>Direction</td>
          <td>To</td>
      </tr>
      <tr>
          <td>Max relationship level</td>
          <td>1</td>
      </tr>
      <tr>
          <td>Relationship type</td>
          <td>Contains</td>
      </tr>
      <tr>
          <td>Entity type</td>
          <td>Asset</td>
      </tr>
   </tbody>
</table>

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/change-originator.png)

###### Node E: **Save TimeSeries**
- Add the **Save TimeSeries** node and connect it to the **Change Orignator** node with a relation type **Success**. <br>
  This node will store the TimeSeries data from the incoming Message payload into the database from the Asset **Wind Turbine** that is Message Originator.
- Enter the Name field as **Save Time Series**.


![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/save-ts.png)

###### Node F: **Transform Script**
- Add the **Transform Script** node and connect it to the **Related attributes** node with a relation type **Success**. <br>
This node will transform an original message into RPC request message. 
- The RPC call will have 2 properties:
	- method: **spinLeft** or **spinRight**.
	- params: **value**.


![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/rpc-message.png)

- Enter the Name field as **New RPC Message**.
- Add the following Script: {% highlight javascript %}
 var newMsg = {};
 var value = Math.abs(msg.turbineDirection - metadata.windDirection);
 if ((value < 180 && msg.turbineDirection < metadata.windDirection)||
     (value > 180 && msg.turbineDirection > metadata.windDirection)) {
     newMsg.method = 'spinLeft';
 }
 if ((value <= 180 && msg.turbineDirection > metadata.windDirection)||
     (value >= 180 && msg.turbineDirection < metadata.windDirection)) {
     newMsg.method = 'spinRight';
 }
 if(newMsg.method == 'spinLeft' || 'spinRight'){
     msgType = 'RPC message';
 }
 newMsg.params = Math.round(value * 100) / 100;
 return {msg: newMsg, metadata: metadata, msgType: msgType}; {% endhighlight %}


###### Node G: **Filter Script**

- Add the the **Filter Script** node and connect it to the **Transform Script** node with a relation type **Success**. <br> 
  This node will check if msgType of incoming message is **RPC message**.

- Enter the Name field as **Check RPC Message**.
- Add the following Script: {% highlight javascript %}: return msgType == 'RPC message'; {% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/check-validity.png)


###### Node H: **RPC call request**
- Add the **RPC call request** node and connect it to the **Filter Script** node with a relation type **True**. <br>
  This node takes the message payload and sends it as a response to the Message Originator.
- Enter the Name field as **Rotating System**.
- Enter the Timeout value as 60 seconds.

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/request.png)

<br>

This Rule chain is now ready and you need to save it.

<br>
<br>

## How to verify the Rule Chain

- Use the following javascript code to emulate the **Wind Direction Sensor** device.
    - [**WindDirectionEmulator.js**](/docs/user-guide/rule-engine-2-0/tutorials/resources/WindDirectionEmulator.js).
- Also, use the following javascript code to emulate the **Rotating System** device. <br>
  This code contains a method to emulate changing the turbine direction based on the incoming RPC message.
    - [**RotatingSystemEmulator.js**](/docs/user-guide/rule-engine-2-0/tutorials/resources/RotatingSystemEmulator.js).


To run the scripts, you need to do the following steps:

- Copy the **Wind Direction Sensor** device access token and the **Rotating System** device access token, then paste them in the script.  <br>
  You can copy the access token from the Device page. <br> <br>
  In this tutorial,
    - the **Wind Direction Sensor** device access token is **Z61K03FAGSziW9b0nKsm**
    - the **Rotating System** device access token is **jSuvzrURCbw7q4LGtygc**

  However, these access tokens are unique and you will need to copy the access tokens of your devices.

 ![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/wind-token.png) ![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/rs-token.png)

- Open the terminal and go to the folder that contains these emulator scripts, then run the following commands:
    - node WindDirectionEmulator.js
    - node RotatingSystemEmulator.js


<br>
<br>

## Configuring Dashboards
The following screenshot shows how the **Wind Turbine Dashboard** should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/dashboard.png)

Download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/wind_turbine_dashboard.json) for the dashboard indicated above and import it.

- Go to **Dashboards** -> **Add new Dashboard** -> **Import Dashboard** and drop the downloaded json file.

The next Step is to configure the aliases used by the imported dashboard.

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/aliases.png)

Click the **Edit alias** button and enter the input data shown in the following table:

<table>
  <thead>
      <tr>
       <td>Alias </td>
       <td>Field</td>
       <td>Input Data </td>
      </tr>
  </thead>
  <tbody>
      <tr>
           <td rowspan="3" >Wind Turbine
           </td>
           <td>Filter type
           </td>
           <td>Single entity
           </td>
      </tr>
      <tr>
           <td>Type
           </td>
           <td>Asset
           </td>
      </tr>
      <tr>
           <td>Asset
           </td>
           <td>Wind Turbine
           </td>
      </tr>
      <tr>
           <td rowspan="3" >Wind Direction Sensor
           </td>
           <td>Filter type
           </td>
           <td>Single entity
           </td>
      </tr>
      <tr>
           <td>Type
           </td>
           <td>Device
           </td>
      </tr>
      <tr>
           <td>Device
           </td>
           <td>Wind Direction Sensor
           </td>
          </tr>
      <tr>
           <td rowspan="3" >Rotating System
           </td>
           <td>Filter type
           </td>
           <td>Single entity
           </td>
      </tr>
      <tr>
           <td>Type
           </td>
           <td>Device
           </td>
      </tr>
      <tr>
           <td>Device
           </td>
           <td>Rotating System
           </td>
      </tr>
  </tbody>
</table>


The configuration of the dashboard is now completed and you can verify that it works as expected.

Also, you can see:

  - how to work with **RPC call reply** Rule Node

Please refer to the second link under the **See Also** section to see how to do this.

<br>
<br>

## See Also

 - For more details about how RPC works in Thignsboard, please refer to the [RPC capabilities](/docs/user-guide/rpc/#server-side-rpc-api) guide.

 - [RPC Reply With data from Related Device](/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/) guide.

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}

