---
layout: docwithnav
title: Manage alarms and RPC requests on edge devices
description: ThingsBoard Edge use case #1

configureAlarmRules:
    0:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-1.png
        title: 'Login to your ThingsBoard <b>CE</b> instance and open Device profiles page.'
    1:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-2.png
        title: 'Click "+" to add new device profile.'
    2:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-3.png
        title: 'Input device profile name. For example, type "edge thermostat". Click "Transport configuration" to proceed.'
    3:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-4.png
        title: 'For this example we will use default transport configuration. Click "Alarm rules" to proceed.'        
    4:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-5.png
        title: 'Click "Add alarm rule" button.'
    5:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-6.png
        title: 'Specify alarm type. For example, "High temperature". Click "+" icon to add new alarm condition.'
    6:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-7.png
        title: 'Click "Add key filter" button.'
    7:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-8.png
        title: 'Select key type, input key name, select value type and click "Add".'
    8:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-9.png
        title: 'Select operation and input threshold value. Click "Add".'
    9:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-10.png
        title: 'Click "Save" button.'
    10:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-11.png
        title: 'Click "Add" button.'
    11:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-12.png
        title: 'Newly create device profile will be show first in the list, because default sort order is by created time.'
    12:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-13.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Device profiles page.'
    13:
        image: /images/edge/use-cases/manage-alarms-configure-rules-item-14.png
        title: 'Verify that "edge thermostat" was provisioned to edge as well.'

provisionDevices:
    0:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-1.png
        title: 'Login to your ThingsBoard <b>Edge</b> instance and open Device groups page.'
    1:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-2.png
        title: 'Open "All" device group.'
    2:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-3.png
        title: 'Click on the "Add Device"("+") icon in the top right corner of the table.'
    3:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-4.png
        title: 'Input device name. For example, "DHT22". Select "edge thermostat" from device profiles list. No other changes required at this time. Click "Add" to add the device.'
    4:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-5.png
        title: 'Now your "DHT22" device should be listed first, since table sort devices using created time by default. Click "Add" to add one more device.'
    5:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-6.png
        title: 'Input device name. For example, "Air Conditioner". No other changes required at this time. Click "Add" to add the device.'
    6:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-7.png
        title: 'Now your "Air Conditioner" device should be listed first, since table sort devices using created time by default.'
    7:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-8.png
        title: 'Click on "DHT22" device row to open device details and navigate to "Relations" tab. Click "+" icon to add new relation.'
    8:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-9.png
        title: 'Specify relation type "Manages" and select "Air Conditioner" device from the list. Click "Add" to add this relation. Now we verify that devices were provisioned to cloud.'
    9:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-10.png
        title: 'Login to your ThingsBoard <b>CE</b> instance and open Devices page.'
    10:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-11.png
        title: 'Make sure that "DHT22" and "Air Conditioner" devices are in the devices list.'
    11:
        image: /images/edge/use-cases/manage-alarms-provision-devices-item-12.png
        title: 'Verify that relation from "DHT22" to "Air Conditioner" was provisioned as well.'

---
* TOC
{:toc}

## Use case
Let's assume you have a warehouse with two devices connected to ThingsBoard **Edge**: 
* DHT22 temperature sensor
* Air Conditioner 

ThingsBoard Edge has the following responsibilities:
 * **Collects temperature readings** from the DHT22 sensor
 * **Creates and updates alarms** if the temperature in the warehouse is higher than 50 °C
 * In case if the temperature becomes critical, ThingsBoard Edge turns on the cooler system by **sending RPC call requests** to Air Conditioner device
 * **Pushes telemetry to the cloud**

Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. 
You can use this tutorial as a basis for much more complex scenarios.

## Prerequisites

{% include templates/edge/use-cases/ce-prerequisites.md %}

## Configure Alarm Rules

We will use [alarm rules](/docs/user-guide/device-profiles/#alarm-rules) feature to raise alarm when temperature reading is greater than 50 degrees.
For this purpose, we should create new device profile and add new alarm rule. We recommend creating dedicated [device profiles](/docs/user-guide/device-profiles/) for each corresponding device type. Let's create new device profile "edge thermostat".

{% include images-gallery.html imageCollection="configureAlarmRules" showListImageTitles="true" %}

## Provision devices

For simplicity, we will provision device manually using the UI.

Let's first create **DHT22 temperature sensor** and **Air Conditioner** devices on the edge and add relation between these devices. This relation will be used to find related **Air Conditioner** device once **DHT22 temperature sensor** will send critical temperature value.

We are going to provision device on the Edge. Please open ThingsBoard **Edge** UI using the URL: [http://localhost:18080](http://localhost:18080).

{% include templates/edge/bind-port-changed-banner.md %}

{% include images-gallery.html imageCollection="provisionDevices" showListImageTitles="true" %}

## Message flow
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

## Configure Edge Rule Chains

On the cloud we should modify the default **Edge Root Rule Chain** and create new rule chain **Manage Alarms and RPC**.

<br/>The following screenshots show how the above rule chains should look like:
 
  - **Manage Alarms and RPC:**

![image](/images/edge/tutorial/alarm/rule-chain-create-alarm.png)

Download the attached [JSON file](/docs/edge/use-cases/resources/manage-alarms-rpc-requests/manage_alarms_and_rpc.json) for the **Manage Alarms and RPC** rule chain.

 - **Edge Root Rule Chain:**

![image](/images/edge/tutorial/alarm/rule-chain-root.png)
 
<br>Create **Node I** as shown on the image above in the **Edge Root Rule Chain** to forward telemetry to the imported rule chain **Manage Alarms and RPC**. Download the attached [JSON file](/docs/edge/use-cases/resources/manage-alarms-rpc-requests/edge_root_rule_chain.json) for the **Edge Root Rule Chain** rule chain.

Also, you can create the new Rule Chain from scratch. The following section shows you how to create it.

### Create new Edge Rule Chain (**Manage Alarms and RPC**)

Go to **Rule Chains** -> **Edge Rule Chains** -> **Add new Rule Chain** 

Configuration:

- Name: **Manage Alarms and RPC**

![image](/images/edge/tutorial/alarm/create-rule-chain-alarm.png)

Press the **Edit** button and configure Chain.

#### Adding nodes for creating and clearing alarms

The nodes from **Node A** to **Node D** will create and clear alarms in **both edge and cloud instances**.
 
##### Node A: **Filter Script**
- Add the **Filter Script** node and connect it to the **Input** node. This node will verify 
"if the temperature is above threshold" using the following script:
  
   {% highlight javascript %}return msg.temperature > 50;{% endhighlight %}
  
If the temperature is below 50°C the script will return False, otherwise True will be returned.
    
- Enter the Name field as **Above Threshold**.  
  
![image](/images/edge/tutorial/alarm/node-script.png)
   
##### Node B: **Create Alarm**
- Add the **Create alarm** node and connect it to the **Filter Script** node with a relation type **True**.
<br> This node tries to load the latest Alarm with the configured Alarm Type for the Message Originator. If Uncleared Alarm exists, then this Alarm will be updated, otherwise, a new Alarm will be created. 
  
 - Enter the Name field as **Create Alarm** and the Alarm type as **Critical Temperature**.

![image](/images/edge/tutorial/alarm/node-create-alarm.png)

##### Node C: **Clear Alarm**
- Add the **Clear Alarm** node and connect it to the **Filter Script** node with a relation type **False**. <br>
  This Node loads the latest Alarm with the configured Alarm Type for the Message Originator and Clear the Alarm if it exists.
- Enter the Name field as **Clear Alarm** and the Alarm type as **Critical Temperature**.

![image](/images/edge/tutorial/alarm/node-clear-alarm.png)

##### Node D: **Push to cloud**
- Add the **Push to cloud** node and connect it to the **Create alarm** node with a relation type **Created**.
 Also, connect this node to the **Clear alarm** node with a relation type **Cleared**.<br>
  This node will create and clear alarm on the Cloud.
 
- Enter the Name field as **Push Alarm to Cloud**.

![image](/images/edge/tutorial/alarm/node-push-to-cloud.png)

#### Adding nodes for RPC call requests

The nodes from **Node E** to **Node H** will switch originator from **DHT22** to **Air Conditioner** and send an RPC message to the edge device **Air Conditioner**:

##### Node E: **Change Originator**
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

##### Node F: **Transform Script** 
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

##### Node G: **Filter Script**

- Add the **Filter Script** node and connect it to the **Transform Script** node with a relation type **Success**. <br> 
  This node will check if msgType of the incoming message is an **RPC message**.

- Enter the Name field as **Check RPC Message**.
- Add the following Script: {% highlight javascript %} return msgType == 'RPC message'; {% endhighlight %}

![image](/images/edge/tutorial/alarm/node-check-rpc-request.png)

##### Node H: **RPC call request**
- Add the **RPC call request** node and connect it to the **Filter Script** node with a relation type **True**. <br>
  This node takes the message payload and sends it as a response to the Message Originator.
- Enter the Name field as **Air Conditioner**.
- Enter the Timeout value as 60 seconds.

![image](/images/edge/tutorial/alarm/node-rpc-request.png)

<br/>This Edge Rule Chain is ready, and you need to save it.

<br/>


### Modify Edge Root Rule Chain

The following screenshot shows how the final **Edge Root Rule Chain** should look like:

![image](/images/edge/tutorial/alarm/rule-chain-root.png)

##### Node I: **Rule Chain**
- Add the **Rule Chain** node and connect it to the **Save timeseries** node with a relation type **Success**. <br>
  This node forwards incoming telemetry to specified Edge Rule Chain **Manage Alarms and RPC**.

![image](/images/edge/tutorial/alarm/create-rule-node-rule-chain.png)

<br/>

## Assign Edge Rule Chains to Edge
Tenant administrator is able to assign entity groups (Users, Assets, Devices, Entity Views, Dashboards) 
and entities (rule chains, scheduler events) to a certain edge. Cloud will send assigned entities and groups to edge.

Follow these steps to assign rule chains to edge:

Open edge **Edge #1** on the cloud and click **Manage edge rule chains**.  
  
![image](/images/edge/tutorial/alarm/manage-rule-chains-icon.png)

- Click **Assign new rulechain** and choose **Manage Alarms and RPC**. Note that **Edge Root Rule Chain** is assigned by default to the edge:

![image](/images/edge/tutorial/alarm/assign-rule-chain.png)

## Connect device by MQTT

- Use the following scripts to connect the device **Air Conditioner** to the ThingsBoard Edge by MQTT protocol.  
The script will emulate turning on/off cooler based on temperature readings: "If the temperature is > 50°C - turn cooler on, otherwise - turn off".
    - [**mqtt-js.sh**](/docs/edge/use-cases/resources/manage-alarms-rpc-requests/mqtt-js.sh)
    - [**cooler.js**](/docs/edge/use-cases/resources/manage-alarms-rpc-requests/cooler.js)
    
To run the scripts, you need to modify **mqtt-js.sh** file. Please do the following steps:

- Replace **YOUR_ACCESS_TOKEN** with **Air Conditioner device access token**. You can find device access token [on the Device page](/docs/user-guide/ui/devices/#manage-device-credentials). <br>

![image](/images/edge/tutorial/alarm/copy-cooler-token.png)

- Replace **YOUR_THINGSBOARD_HOST** with your ThingsBoard Edge host. For example, **127.0.0.1**. 

- Open the terminal and go to the folder that contains these emulator scripts. 
 Make sure it is executable:
  
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

**Note** Please open a new terminal tab to push temperature telemetry to device and leave this running in the background until end of the guide.

## Post telemetry and verify alarms

Now let's post temperature telemetry for **DHT22** sensor. For this, we need to **copy the DHT22 device access token**. Let's post the temperature 51°C using the following [Rest API](/docs/reference/http-api/#telemetry-upload-api) call. Do not forget to **replace $ACCESS_TOKEN with actual DHT22 device token**:

![image](/images/edge/tutorial/alarm/copy-device-token.png)

{% highlight bash %}
curl -v -X POST -d '{"temperature":51}' http://THINGSBOARD_EDGE_HOST:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

{% capture local-deployment %}
 * Please replace **THINGSBOARD_EDGE_HOST** with the IP address of your edge or **localhost** if you are running edge locally.
 * Please replace **8080** with the port of your edge if you have changed it during configuration process.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

Once you'll post this telemetry please notify that alarm created in *ALARMS* tab on the device **on both edge and cloud instances** according to rule engine logic:

![image](/images/edge/tutorial/alarm/alarm-created.png)

Now let's post new temperature = 49°C. Alarm should be cleared:

{% highlight bash %}
curl -v -X POST -d '{"temperature":49}' http://THINGSBOARD_EDGE_HOST:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}

![image](/images/edge/tutorial/alarm/alarm-cleared.png)

## Verify RPC request

Open the terminal where **mqtt-js.sh** script is running. 
You should see similar messages on the screen:

![image](/images/edge/tutorial/alarm/terminal-rpc-message.png)

## Next Steps

{% assign currentGuide = "ManageAlarmsAndRpcRequestsOnEdgeDevices" %}{% include templates/edge/guides-banner-edge.md %}