---
layout: docwithnav
title: RPC Request to Related Device
description: RPC Request to Related Device

---

* TOC
{:toc}


In this tutorial, we will explain how to work with **RPC call request** Rule Nodes and also how to:

- Route incoming messages by Message Type with **Message Type Switch**
- Store Timeseries data from incoming Message payload to the database and associate them to the Entity with **Save Timeseries** node
- Store attributes from incoming Message payload to the database and associate them to the Entity with **Save Timeseries** node
- Fetch attributes of related entities with **Related Attributes** node
- Transform incoming messages with **Script** node
- Process submitted message as message from another entity with **Change originator** node
- Filter messages using **Script** node


# Intro
We have 2 devices  - Wind direction sensor and Rotating system, and 1 asset -  Wind Turbine. We want to initiate an RPC request to the Rotating system and change the direction of the wind turbine depending on the direction of the wind.
RPC call will have 2 properties:

- method: **spinLeft** or **spinRight**
- params: **value**

# Model definition
There is a Wind Turbine where 2 devices are installed: Wind direction sensor and Rotating system. 

- The Wind turbine is represented as Asset with the name **Wind Turbine** and Asset type **Wind turbine**. 
- The Wind direction sensor is represented as Device with the name **Wind direction sensor** and type **Direction sensor**. 
- The Rotating system is represented as Device with name **Rotating system** and  type **Rotating system**. 
- Create relation from **Wind Turbine** to **Wind direction sensor** and  **Rotating system** via relation **Contains**
- Create relation from **Rotating system** to **Wind direction sensor** via relation **Uses**.


    
We want to initiate an RPC request to the **Rotating system** and change the direction of the wind turbine, depending on the direction of the wind.
Directing the rotating system to the left or right, depending on which way is better and faster, so that the difference between the direction of the wind and the wind turbine was no more than 5 degrees.
<br/>
<br/>

# Configure Rule Chain

Here is how **Tutorial of RPC Call Request** Rule Chain should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/chain.png)

- Download attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/tutorial_of_rpc_call_request.json) with a rule chain from this tutorial and import it.
- Don't forget to mark new rule chain as "root".  

Also, you can create new Rule Chain from scratch. Below you can see how to do it.


#### Create new Rule Chain **Tutorial of RPC Call Request**

- Go to **Rule Chains** -> **Add new Rule Chain** 

Configuration:

- Name : **Tutorial of RPC Call Request**

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/create chain.png) 

New Rule Chain is created. Press **Edit** button and configure Chain.


###### Add **Message Type Switch** node
Add **Message Type Switch** node and connect it to the **Input** node.
 
This node will route incoming messages according to the message type, namely **POST_TELEMETRY_REQUEST**.

Configuration:

- Name: **Message Type Switch**.


![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/messageTypeSwitch.png)

###### Add **Save Timeseries** node 
Add **Save TimeSeries** node and connect it to the **Message Type Switch** node with relation type **Post telemetry**.

This node will store TimeSeries data from incoming Message payload to the database and associate them to the Device, that is identified by the Message Originator.

Configuration:

- Name: **Save Time Series**.


![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/save ts.png)

###### Add **Related attributes** node
Add **Related attributes** node and connect it to the **Save TimeSeries** node with relation type **Success**.
 
This node will load source telemetry **wind Direction** of related Wind direction sensor and save it in Message metadata with name **windDirection**.

Configuration:

- Name: **Fetch Wind Sensor Telemetry**.
- Direction: **From**.
- Max relation level: **1**.
- Relation type : **Uses**.
- Entity type : **Device**.
- Latest telemetry : **true**
- Source telemetry : **windDirection**.
- Target telemetry : **windDirection**.

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/get related.png)

###### Add **Change Orignator** node 
Add **Change Orignator** node and connect it to the **Save TimeSeries** node with relation type **Success**.

This node will change originator from Related Device to Asset and submit message be processed as a message from another entity.

Configuration:

- Name: **Create New Telemetry**.
- Originator source: **Related**.
- Direction: **To**.
- Max relation level: **1**.
- Relation type : **Contains**.
- Entity type : **Asset**.

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/change originator.png)

###### Add **Save Timeseries** node 
Add **Save TimeSeries** node and connect it to the **Change Orignator** node with relation type **Success**.

This node will store TimeSeries data from incoming Message payload to the database and associate them to the Asset, that is identified by the Message Originator.

Configuration:

- Name: **Save Time Series**.


![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/save ts.png)

###### Add **Transform Script** node 
Add **Transform Script** node and connect it to the **Related attributes** node with relation type **Success**.

This node will transform an original message into RPC request message. 
RPC call will have 2 properties:

- method: **spinLeft** or **spinRight**.
- params: **value**.


![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/rpc message.png)

Configuration:

- Name: **New RPC Message**.
- Script: {% highlight javascript %}
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

###### Add **Filter Script** node 
Add **Filter Script** node and connect it to the **Transform Script** node with relation type **Success**.

This node will check if msgType of incoming message is **RPC message**

Configuration:

- Name : Check RPC Message.
- Script: {% highlight javascript %} return msgType == 'RPC message'; {% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/check validity.png)


###### Add **RPC call request** node
Add **RPC call request** node and connect it to the **Filter Script** node with relation type **True**.

This node takes message payload and sends it as the response to the Message Originator.

Configuration:

- Name : **Rotating System**.
- Timeout in seconds : 60.

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/request.png)

<br/>

This Rule chain is ready and we should save it. 

<br/>
<br/>

# Verify Rule Chain
Configuration is finished and we can verify that Rule Chain works as we expect. 

- We will use javascript code for emulating **Wind direction sensor** device.
- [**WindDirectionEmulator.js**](/docs/user-guide/rule-engine-2-0/tutorials/resources/WindDirectionEmulator.js). 
- Also we will use  javascript code for emulating **Rotating system** device which contains method emulating changing turbine direction depending on the incoming RPC message.
- [**RotatingSystemEmulator.js**](/docs/user-guide/rule-engine-2-0/tutorials/resources/RotatingSystemEmulator.js).


For run scripts, we need to:

- Take **Wind direction sensor** device API token and **Rotating system** device API token, and paste they into script. We can copy token from Device page.
  In this tutorial it is **Z61K03FAGSziW9b0nKsm** and **jSuvzrURCbw7q4LGtygc** accordingly but they is unique and you need to copy yours devices tokens.

 ![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/wind token.png) ![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/rs token.png)

- open terminal, go to the folder which contains our scripts and run the commands:
- node WindDirectionEmulator.js
- node RotatingSystemEmulator.js


<br/>
<br/>

# Configure Dashboards

Here is how **Wind Turbine Dashboard**  should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/dashboard.png)

Download attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/wind_turbine_dashboard.json) with a dashboard from this tutorial and import it.

- Go to **Dashboards** -> **Add new Dashboard** -> **Import Dashboard** and drop a downloaded json file.

Next Step is configure the aliases used by imported dashboard:
 
![image](/images/user-guide/rule-engine-2-0/tutorials/rpc-request/aliases.png)

- alias with name **Wind Turbine**:<br/>
  you need to press **Edit alias** button then select Filter type **Single entity** ,Type **Asset** and Asset **Wind Turbine**.
- alias with name **Wind Direction sensor**:<br/>
  you need to press **Edit alias** button then select Filter type **Single entity** ,Type **Device** and Device **Wind direction sensor**.
- alias with name **Rotating system**:<br/>
  you need to press **Edit alias** button then select Filter type **Single entity** ,Type **Device** and Device **Rotating system**.
  
The configuration of the dashboard is finished and we can verify that it works as we expect.   

<br/>
<br/>

For more details how RPC works in the Thignsboard, please read [RPC capabilities](/docs/user-guide/rpc/#server-side-rpc-api) Article.
<br/>
<br/>