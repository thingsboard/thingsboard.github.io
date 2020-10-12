---
layout: docwithnav
title: Manage alarms and RPC requests on edge devices
description: ThingsBoard Edge use case #1

---

{% assign feature = "Edge Groups" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

### Use case
Let's assume you have a warehouse with two **edge computing devices** connected to ThingsBoard Edge: 
* DHT22 temperature sensor
* Air Conditioner 

ThingsBoard Edge has the following responsibilities:
 * **Collects temperature readings** from the DHT22 sensor
 * **Creates and updates alarms** if the temperature in the warehouse is higher than 50°C
 * In case if the temperature becomes critical, ThingsBoard Edge turns on the cooler system by **sending RPC call requests**
 * **Pushes telemetry to the cloud** (ThingsBoard Professional Edition)

Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. 
You can use this tutorial as a basis for much more complex scenarios.

### Prerequisites
We assume you have completed the following guides and reviewed the articles listed below:
  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/) article.
  * [ThingsBoard Edge Getting Started](/docs/edge/) article.

In ThingsBoard Professional Edition we have:
 * created [edge entity](/docs/user-guide/ui/edges/#add-and-delete-edges) **Edge ThingsBoard** in group **All**.
 
![image](/images/edge/tutorial/alarm/add-edge.png) 
 
 * assigned edge to a [user](/docs/user-guide/ui/edges/#assign-entities-to-edge) with [permission]() to create devices.
 
![image](/images/edge/tutorial/alarm/assign-user.png) 
 
 * connected ThingsBoard Edge. Detailed step by step instructions on how to configure edge and cloud you can find in [installation guides](/docs/edge/install/installation-options/).
 
![image](/images/edge/tutorial/alarm/edge-status.png) 

### Model definition
Open ThingsBoard Edge UI (default installation port is 8080). [Add two devices](/docs/user-guide/ui/devices/#add-and-delete-devices) in the group "All" (**Device Groups -> All -> Add device**):
* Thermometer's name is **DHT22** and its type is **temperature sensor**.
* Cooler's name is **Air Conditioner** and its type is **cooler system**.

![image](/images/edge/tutorial/alarm/add-device-thermometer.png) 

<br/>

[Create relation](/docs/user-guide/entities-and-relations/) from DHT22 to Air Conditioner with:
 * direction - **From**
 * type - **Uses**
 
![image](/images/edge/tutorial/alarm/add-relation-2.png)

![image](/images/edge/tutorial/alarm/add-relation.png)

**Note** that devices created on ThingsBoard Edge automatically appears in the cloud device group. Such group has a special pattern name **[Edge] *${edge name}* All** - a associated with particular edge.

![image](/images/edge/tutorial/alarm/device-group.png)

### Message flow
In this section we explain the purpose of each node in this tutorial:

- Node A: [**Filter Script**](/docs/user-guide/rule-engine-2-0/filter-nodes/#check-relation-filter-node) node.
  - This node with temperature threshold check script will verify: "if the temperature is in the expected interval, the script will return False, otherwise True will be returned".
- Node B: [**Create alarm**](/docs/user-guide/rule-engine-2-0/action-nodes/#create-alarm-node) node.
  - Creates or Updates an  alarm if the published temperature is not at the expected time range (filter script node returns True).    
- Node C: [**Clear alarm**](/docs/user-guide/rule-engine-2-0/action-nodes/#clear-alarm-node) node.
  - Clears alarm if it exists in case if the published temperature is in the expected time range (script node returns False).   
- Node D: [**Push to Cloud**](/docs/user-guide/rule-engine-2-0/action-nodes/#push-to-cloud) node.
  - Forwards incoming Message to **Cloud server**. 
- Node E: [**Change originator**](/docs/user-guide/rule-engine-2-0/transformation-nodes/#change-originator) node.
    - Changes the originator from **DHT22** to the related device **Air Conditioner** and the submitted message will be processed as a message from the **Air Conditioner**.
- Node F: [**Transform Script**](/docs/user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node) node. 
    - Transform an original message into RPC reply message with customized data.
- Node G: [**Filter Script**](/docs/user-guide/rule-engine-2-0/filter-nodes/#script-filter-node) node.
    - This node will check if msgType of the incoming message is an **RPC message**.  
- Node H: [**RPC call request**](/docs/user-guide/rule-engine-2-0/action-nodes/#rpc-call-request-node) node
    - This node takes the message payload and sends it as a response to the Message Originator.
- Node I: **Rule Chain** node.
    - This node forwards incoming telemetry to Edge Rule Chain **Manage Alarms and RPC**.

### Configure Edge Rule Chains

In ThingsBoard Professional Edition we modified the default **Edge Root Rule Chain** and created rule chain **Manage Alarms and RPC**.

<br/>The following screenshots show how the above rule chains should look like:
 
  - **Manage Alarms and RPC:**

![image](/images/edge/tutorial/alarm/rule-chain-create-alarm.png)

Download the attached [JSON file](/docs/edge/use-cases/resources/manage-alarms-rpc-requests/manage_alarms_and_rpc.json) for the **Manage Alarms and RPC** rule chain.

 - **Edge Root Rule Chain:**

![image](/images/edge/tutorial/alarm/rule-chain-root.png)
 
<br>Create **Node I** as shown on the image above in the **Edge Root Rule Chain** to forward telemetry to the imported rule chain **Manage Alarms and RPC**. Download the attached [JSON file](/docs/edge/use-cases/resources/manage-alarms-rpc-requests/edge_root_rule_chain.json) for the **Edge Root Rule Chain** rule chain.

Also, you can create the new Rule Chain from scratch. The following section shows you how to create it.

#### Create new Edge Rule Chain (**Manage Alarms and RPC**)

Go to **Rule Chains** -> **Edge Rule Chains** -> **Add new Rule Chain** 

Configuration:

- Name: **Manage Alarms and RPC**

![image](/images/edge/tutorial/alarm/create-rule-chain-alarm.png)

Press the **Edit** button and configure Chain.

##### Adding nodes for creating and clearing alarms

The next 4 nodes will create and clear alarms in **both edge and cloud servers**:
 
###### Node A: **Filter Script**
- Add the **Filter Script** node and connect it to the **Input** node. This node will verify 
"if the temperature is above threshold" using the following script:
  
   {% highlight javascript %}return msg.temperature > 50;{% endhighlight %}
  
If the temperature is below 50°C the script will return False, otherwise True will be returned.
    
- Enter the Name field as **Above Threshold**.  
  
![image](/images/edge/tutorial/alarm/node-script.png)
   
###### Node B: **Create Alarm**
- Add the **Create alarm** node and connect it to the **Filter Script** node with a relation type **True**.
<br> This node tries to load the latest Alarm with the configured Alarm Type for the Message Originator. If Uncleared Alarm exists, then this Alarm will be updated, otherwise, a new Alarm will be created. 
  
 - Enter the Name field as **Create Alarm** and the Alarm type as **Critical Temperature**.

![image](/images/edge/tutorial/alarm/node-create-alarm.png)

###### Node C: **Clear Alarm**
- Add the **Clear Alarm** node and connect it to the **Filter Script** node with a relation type **False**. <br>
  This Node loads the latest Alarm with the configured Alarm Type for the Message Originator and Clear the Alarm if it exists.
- Enter the Name field as **Clear Alarm** and the Alarm type as **Critical Temperature**.

![image](/images/edge/tutorial/alarm/node-clear-alarm.png)

###### Node D: **Push to cloud**
- Add the **Push to cloud** node and connect it to the **Create alarm** node with a relation type **Created**.
 Also, connect this node to the **Clear alarm** node with a relation type **Cleared**.<br>
  This node will create and clear alarm on the Cloud.
 
- Enter the Name field as **Push Alarm to Cloud**.

![image](/images/edge/tutorial/alarm/node-push-to-cloud.png)

##### Adding nodes for RPC call requests

The next 4 nodes will switch originator from **DHT22** to **Air Conditioner** and send an RPC message to the edge device **Air Conditioner**:

###### Node E: **Change Originator**
- Add the **Change Originator** node and connect it to the **Filter Script** node with a relation types **True** and **False**. <br>
  This node will change the originator from Device **DHT22** to **Air Conditioner** that has a relation of the type **Uses**. 
  <br/>As a result, the RPC call requests will be processed as a message to **Air Conditioner**
  
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
          <td>Change originator</td>
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
          <td>Relationship type</td>
          <td>Uses</td>
      </tr>
      <tr>
          <td>Entity type</td>
          <td>Device</td>
      </tr>
   </tbody>
</table>

![image](/images/edge/tutorial/alarm/node-change-originator.png)

###### Node F: **Transform Script** 
Add **Transform Script** node and connect it to the **Input** node.

This node will transform an original message into RPC reply message with params depends on temperature readings.

Configuration:

- Name: **RPC Message**
- Script: {% highlight javascript %} 
var newMsg = {};
if (msg.temperature > 50) {
    newMsg.method = "turnOn";
} else {
    newMsg.method = "turnOff";
}
newMsg.params = {};
newMsg.params.temperature = msg.temperature;
msgType = 'RPC message';
return {msg: newMsg, metadata: metadata, msgType: msgType};
{% endhighlight %}

![image](/images/edge/tutorial/alarm/node-transform.png)

###### Node G: **Filter Script**

- Add the **Filter Script** node and connect it to the **Transform Script** node with a relation type **Success**. <br> 
  This node will check if msgType of the incoming message is an **RPC message**.

- Enter the Name field as **Check RPC Message**.
- Add the following Script: {% highlight javascript %} return msgType == 'RPC message'; {% endhighlight %}

![image](/images/edge/tutorial/alarm/node-check-rpc-request.png)

###### Node H: **RPC call request**
- Add the **RPC call request** node and connect it to the **Filter Script** node with a relation type **True**. <br>
  This node takes the message payload and sends it as a response to the Message Originator.
- Enter the Name field as **Air Conditioner**.
- Enter the Timeout value as 60 seconds.

![image](/images/edge/tutorial/alarm/node-rpc-request.png)

<br/>This Edge Rule Chain is ready and you need to save it.

<br/>


#### Modify Edge Root Rule Chain

The following screenshot shows how the final **Edge Root Rule Chain** should look like:

![image](/images/edge/tutorial/alarm/rule-chain-root.png)

###### Node I: **Rule Chain**
- Add the **Rule Chain** node and connect it to the **Save timeseries** node with a relation type **Success**. <br>
  This node forwards incoming telemetry to specified Edge Rule Chain **Manage Alarms and RPC**.

![image](/images/edge/tutorial/alarm/create-rule-node-rule-chain.png)

<br/>

### Assign Edge Rule Chains to Edge
Tenant administrator is able to assign entity groups (Users, Assets, Devices, Entity Views, Dashboards) 
and entities (rule chains, scheduler events) to a certain edge. Cloud will send assigned entities and groups to edge.

Follow these steps to assign rule chains to edge:

In ThingsBoard Professional Edition open edge **Edge #1** and click **Manage edge rule chains**.  
  
![image](/images/edge/tutorial/alarm/manage-rule-chains-icon.png)

- Click **Assign new rulechain** and choose **Manage Alarms and RPC**. Note that **Edge Root Rule Chain** is assigned by default to the edge:

![image](/images/edge/tutorial/alarm/assign-rule-chain.png)

### Connect device by MQTT

- Use the following scripts to connect the device **Air Conditioner** to the ThingsBoard server by MQTT protocol.  
The script will emulate turning on/off cooler based on temperature readings: "If the temperature is > 50°C - turn cooler on, otherwise - turn off".
    - [**mqtt-js.sh**](/docs/edge/use-cases/resources/manage-alarms-rpc-requests/mqtt-js.sh)
    - [**cooler.js**](/docs/edge/use-cases/resources/manage-alarms-rpc-requests/cooler.js)
    
To run the scripts, you need to modify **mqtt-js.sh** file. Please do the following steps:

- Replace **YOUR_ACCESS_TOKEN** with **Air Conditioner device access token**. You can find device access token [on the Device page](/docs/user-guide/ui/devices/#manage-device-credentials). <br>
- Replace **YOUR_THINGSBOARD_HOST** with your ThingsBoard Edge host. For example, **127.0.0.1**. 

![image](/images/edge/tutorial/alarm/copy-cooler-token.png)

- Open the terminal and go to the folder that contains these emulator scripts. 
 Make sure that it is executable:
  
 ```shell
 chmod +x *.sh
 ```

Then run the following command:

{% highlight bash %}
bash mqtt-js.sh
{% endhighlight %}

<br/>

You should see the following screen with your host and device token:

![image](/images/edge/tutorial/alarm/terminal-run-sh.png)

### Post telemetry and verify alarms

For posting device telemetry. For this, we need to **copy the DHT22 device access token**. Let's post the temperature 51°C using the following [Rest API](/docs/reference/http-api/#telemetry-upload-api) call. Do not forget to **replace $ACCESS_TOKEN with actual DHT22 device token**:

![image](/images/edge/tutorial/alarm/copy-device-token.png)

{% highlight bash %}
curl -v -X POST -d '{"temperature":51}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

**Note** that alarm should be created in the device **on both edge and cloud servers** according to rule engine logic:

![image](/images/edge/tutorial/alarm/alarm-created.png)

Now let's post new temperature = 49°C. Alarm should be cleared:

{% highlight bash %}
curl -v -X POST -d '{"temperature":49}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

![image](/images/edge/tutorial/alarm/alarm-cleared.png)

### Verify RPC request

Open the terminal where you run **mqtt-js.sh** script. 
You should see on the screen such messages:

![image](/images/edge/tutorial/alarm/terminal-rpc-message.png)