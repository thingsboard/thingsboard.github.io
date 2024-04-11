---
layout: docwithnav
title: Check Relation between Entities
description: Check relationship

---
The purpose of this tutorial is to show how the [**Check Relation**](/docs/user-guide/rule-engine-2-0/filter-nodes/#check-relation-filter-node) node can be used to check the relation between Entities.

* TOC
{:toc}

## Use case

Let’s assume the following use case:

 - You have 2 devices:

   - **Smoke Detector** with the **Smoke Sensor** which sends data to ThingsBoard when it appears.

   - **Fire Alarm System** which provides a fire alarm, when the smoke is present.

However, there are different ways for the realization of this case, for example, it can be implemented using the **Switch** node that routes incoming Message to one or multiple output chains.<br>
For more information about how to use the **Switch** node, please check the link to **The article of Switch Node** in the  [**See Also**](/docs/user-guide/rule-engine-2-0/tutorials/check-relation-tutorial/#see-also) section.

## Prerequisites

You need to read the following guides before you start this tutorial:

  * [Getting Started](/docs/getting-started-guides/helloworld/).
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).

## Adding the devices and creating the relation between them

  Add two Device entity in ThingsBoard:

   - Smoke Detector is represented as a Device. Its name is **Smoke Detector** and its type is **Smoke Sensor**.

   - Fire Alarm System is represented as a Device. Its name is **Fire Alarm System** and its type is **Fire Alarm Device**.

  Create a relation of the type Uses:

   - from Smoke Detector to Fire Alarm System;

  The following screenshots show how to do this:

   ![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/smoke-sensor.png) ![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/fire-alarm-system.png) <br>
   ![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/add-relation.png)

<br>

## Message flow

In this section, we explain the purpose of each node in this tutorial:

- Node A: [**Check Relation**](/docs/user-guide/rule-engine-2-0/filter-nodes/#check-relation-filter-node) node.
  - Checks the relation from the Device, **Fire Alarm System**, to the originator of the message **Smoke Detector** using the type and direction of relation. 
- Node B: [**Change originator**](/docs/user-guide/rule-engine-2-0/transformation-nodes/#change-originator) node.
  - Change the originator from Devices **Smoke Detector** to the related Device **Fire Alarm System** and the submitted message will be processed as a message from Device **Fire Alarm System**.
- Node C: [**Transformation Script**](/docs/user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node).
  - Transform an original message into RPC request message. 
- Node D: [**RPC call request**](/docs/user-guide/rule-engine-2-0/action-nodes/#rpc-call-request-node) node.
  - Takes the message payload and sends it as a response to the **Fire Alarm System**.
- Node E: [**Filter Script**](/docs/user-guide/rule-engine-2-0/filter-nodes/#script-filter-node) node.
  - Checks if data of incoming message is **smoke**.
- Node F: [**Clear alarm**](/docs/user-guide/rule-engine-2-0/action-nodes/#clear-alarm-node) node.
  - Loads the latest Alarm with configured Alarm Type for Message Originator **Smoke Detector** and Clears the Alarm if it exists.  
- Node G: [**Create alarm**](/docs/user-guide/rule-engine-2-0/action-nodes/#create-alarm-node) node.
  - Tries to load the latest Alarm with configured Alarm Type for Message Originator, namely **Smoke Detector**.  
- Node H: [**Rule Chain**](/docs/user-guide/rule-engine-2-0/flow-nodes/#rule-chain-node) node.
  - Forwards incoming Message to specified Rule Chain **Related Fire Alarm System**. 

<br>

## Configure Rule Chains

In this tutorial, we modified our **Root Rule Chain** and also created Rule Chain **Related Fire Alarm System**

<br>The following screenshots show how the above Rule Chains should look like:

  - **Related Fire Alarm System:**

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/fire-alarm-chain.png)

 - **Root Rule Chain:**

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/chain.png)

<br>

Download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/check-relation-tutorial.json) for the **Root Rule Chain**. Don't forget to mark this rule chain as **root**.

<br>

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/root-chain.png)

Also, you need to create **Related Fire Alarm System** Rule Chain or you can download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/related_fire_alarm_system.json) for this Chain and import it.
<br>
<br>

 The following section shows you how to create it.

#### Create new Rule Chain (**Related Fire Alarm System**)

Go to **Rule Chains** -> **Add new Rule Chain**

Configuration:

- Name : **Related Fire Alarm System**

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/add-fire-alarm-chain.png)

New Rule Chain is created. Press **Edit** button and configure Chain.

###### Adding the required nodes

In this rule chain, you will create 4 nodes as it will be explained in the following sections:

###### Node A: **Check Relation**

 - Add the **Check Relation** node and connect it to the **Input** node.<br>

    This node will check the relation from the Device, **Fire Alarm System**, to the originator of the message **Smoke Detector** using the type and direction of relation.
    If the relation exists, the message will be sent through the True chain.

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

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/check-relation.png)

###### Node B: **Change Orignator**

- Add the **Change Orignator** node and connect it to the **Check Relation** node with a relation type **True**. <br>
  This node will change the originator from the Device **Smoke Detector** to the related Device **Fire Alarm System** and the submitted message will be processed as a message from another entity, namely **Fire Alarm System**.

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

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/change-originator.png)

###### Node C: **Script Transformation**
 - Add the **Script Transformation** node and connect it to the **Change Orignator** node with a relation type **Success**.

This node will transform an original message into RPC request message. 

- The RPC call will have 2 properties:

    <table style="width: 25%">
      <thead>
          <tr>
              <td><b>Property</b></td><td><b>Value</b></td>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>method</td>
              <td>ON</td>
          </tr>
          <tr>
              <td>params</td>
              <td>{}</td>
          </tr>
       </tbody>
    </table>

 - In order to do this, add the following Script:

  {% highlight javascript %}
    var newMsg = {};
    if(msg.smoke == 'true'){
        newMsg.method = 'ON';
    }
    newMsg.params={};
    return {msg: newMsg, metadata: metadata, msgType: msgType};{% endhighlight %}


 - Enter the Name field as **New RPC message**.

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/transformation-node.png)

###### Node D: **RPC call request** node
- Add the **RPC call request** node and connect it to the **Script Transformation** node with a relation type **Success**. <br>
  This node takes the message payload and sends it as a response to the Message Originator **Fire Alarm System**.
- Enter the Name field as **Fire Alarm System**.
- Enter the Timeout value as 60 seconds.

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/rpc-call-request.png)

This Rule chain is ready and we should save it.

#### Modify Root Rule Chain

The initial Rule Chain has been modified by adding the following nodes:

###### Node E: **Filter Script**
- Add the **Filter Script** node and connect it to the **Save Timeseries** node with a relation type **Success**. <br>
  This node will check if data of incoming message is **smoke** using the following script:

  {% highlight javascript %}return msg.smoke== 'true';{% endhighlight %}

- Enter the Name field as **Smoke Alarm Filter**.

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/alarm-filter.png)

###### Node F: **Clear Alarm**
- Add the **Clear Alarm** node and connect it to the **Filter Script** node with a relation type **False**. <br>
  This node loads the latest Alarm with configured Alarm Type for Message Originator **Smoke Detector** and Clears the Alarm if it exists.

- Enter the Name field as **Clear Smoke Alarm** and the Alarm type as **Smoke Alarm**.

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/clear-alarm.png)

###### Node G: **Create alarm**
- Add the **Create alarm** node and connect it to the **Filter Script** node with a relation type **True**. <br>
  This node tries to load the latest Alarm with configured Alarm Type for Message Originator, namely **Smoke Detector**.

 - Enter the Name field as **Create Smoke Alarm** and the Alarm type as **Smoke Alarm**.

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/create-alarm.png)

###### Node H: **Rule Chain**
- Add the **Rule Chain** node and connect it to the **Filter Script** node with a relation type **True**. <br>
  This node forwards incoming Message to specified Rule Chain **Related Fire Alarm System**.

- Enter the Name field as **Related Fire Alarm System**.

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/add-alarm-chain.png)

The following screenshot shows how the final **Root Rule Chain** should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/view-chain.png)

<br>
<br>

## How to verify the Rule Chain and Post telemetry

- Use the following javascript code to emulate the **Fire Alarm System** device.

  - [**FireAlarmEmulator.js**](/docs/user-guide/rule-engine-2-0/tutorials/resources/FireAlarmEmulator.js).

  - To run the script, you need to do the following steps:

  - Copy the **Fire Alarm System** device access token, then paste them in the script.  <br>
  You can copy the access token from the Device page. <br> <br>


- Use the Rest APIs, [Telemetry upload APIs](/docs/reference/http-api/#telemetry-upload-api), for posting telemetry from the device **Smoke Detector**. <br>

{% highlight bash %}
curl -v -X POST -d '{"smoke":"true"}' http://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"

**you need to replace $ACCESS_TOKEN with the actual device token**
{% endhighlight %}
<br>

  ![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/smoke-telemetry.png)![image](/images/user-guide/rule-engine-2-0/tutorials/check relation/fire-alarm-telemetry.png)

<br>
Also, you can:

  - configure the Dashboard by adding an alarm widget to visualize the alarms.

  - define an additional logic for alarm processing, for example, sending an email.

Please refer to the third and fourth links under the **See Also** section to see how to do this.

<br>

## See Also

- [Switch Node](/docs/user-guide/rule-engine-2-0/filter-nodes/#switch-node) guide - for more information about how to use Switch Node in Thignsboard.

- [Validate incoming telemetry](/docs/user-guide/rule-engine-2-0/tutorials/validate-incoming-telemetry/#step-1-adding-temperature-validation-node) tutorial - for more information about how to validate an incoming telemetry using the Script Filter node.

- [Create & Clear Alarms: configure dashboard](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/#configure-device-and-dashboard) guide - to learn how to add an Alarm widget to the dashboard.

- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) tutorial.

- [RPC capabilities](/docs/user-guide/rpc/#server-side-rpc-api) guide - for more information about how RPC works in Thignsboard, please refer to the RPC capabilities guide.

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}







