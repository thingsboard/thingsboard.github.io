---
layout: docwithnav
title: Data function based on telemetry from 2 devices
description: Data function based on telemetry from 2 devices

---

This tutorial will show how to calculate temperature delta based on readings from the indoor warehouse thermometer and outdoor warehouse thermometer. 

* TOC
{:toc}

## Use case

Let's assume you have a warehouse with two thermometers: indoor and outdoor. In this tutorial, we will configure ThingsBoard Rule Engine to automatically calculate the delta of temperatures inside and outside the warehouse based on the latest readings from temperature sensors.
Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. You can use this tutorial as a basis for much more complex scenarios.
 
## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  
## Model definition
  
We will create one asset that has name "Warehouse A" and type "warehouse".

![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/add-asset.png)

We will create two devices that have names "Inside Thermometer" and "Outside Thermometer" and accordingly with types "inside thermometer" and "outside thermometer". 

![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/add-inside-thermometer.png)
![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/add-outside-thermometer.png)

We must also create the relation between asset "Warehouse A" and device "Inside Thermometer".
This relation will be used in the rule chain to change originator of the messages from the thermometer to the warehouse itself
and also the relation from device "Inside Thermometer" to device "Outside Thermometer" to fetch the latest temperature from "Outside Thermometer".

 
![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/add-relation-from-asset.png)
![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/add-relation-from-device.png)

<br>

**Note**: Please review the following [**documentation page**](/docs/user-guide/entities-and-relations/) to learn how to create assets and relations.

## Message Flow

In this section, we explain the purpose of each node in this tutorial. There will be three rule chains involved:

  - "Thermometer Emulators" - optional rule chain to simulate data from two temperature sensors; 

  - "Root rule chain" - rule chain that actually saves telemetry from devices into the database, and filters messages by device type before redirecting it to "Delta Temperature" chain
   
  - "Delta Temperature" - rule chain that actually calculates delta temperature between thermometers in the warehouse and outside;


### Thermometer Emulators rule chain

![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/thermostats-emulators-chain.png)

  * **Nodes A and B**: Generator nodes
  
    * Two similar nodes that periodically generate a very simple message with random temperature reading.
    
    ![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/inside-generator.png)
    
    ![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/outside-generator.png)
    
  * **Node C**: Rule Chain node

    * Forwards all messages to default rule chain.
    
   
### Root rule chain

![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/root-rule-chain.png)


   - **Nodes D**: Filter script node
  
     - Filter node that checks incoming messages device type. If the device type is "inside thermometer" messages are routing via "true" chain.
     

![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/validate-incoming-devices-node.png)
    
   - **Nodes E**: Rule Chain node
    
     - Forwards incoming Message to specified rule chain "Delta Temperature". 
      
### Delta Temperature rule chain

![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/delta-temperature-chain.png)

  - **Node F**: Related attributes node.
  
    -  Fetches the latest outside temperature reading from device related to the "Inside Thermometer" device using "Contains" relation.

![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/fetch-latest-outside-temperature.png)   
    
  - **Node G**: Temperature delta
  
    -  Calculates delta between fetched inside temperature from message payload and outside temperature from message metadata
  
    - Creates a new outbound message in which it puts the calculated delta. 
    
     {% highlight javascript %}
     
     var newMsg = {};    
     
     function delta(inside, outside) {
     	if (inside >= outside) {
     		return parseFloat((inside - outside).toFixed(2));
     	} else {
     		return parseFloat((outside - inside).toFixed(2));
     	}
     }
     
     newMsg.deltaTemperature = delta(msg.insideTemperature, metadata.outsideTemperature);
     
     return {
     	msg: newMsg,
     	metadata: {},
     	msgType: msgType
     };{% endhighlight %}
   
![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/temperature-delta.png)   

 - **Node H**: Change originator node.
  
    -  Changes the originator from "Inside Thermometer" to the related Asset "Warehouse A" and the submitted message will be processed as a message from the Asset.
        
![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/change-originator-to-asset.png) 
    
 - **Node I**: Save Timeseries node.
  
    -  Saves the TimeSeries data from the incoming Message payload into the database.
         
    

## Configuring the Rule Chains

Download and [**import**](/docs/user-guide/ui/rule-chains/#rule-chains-importexport) attached emulators rule chain [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/thermometer_emulators.json) as a new "Thermometer Emulators" rule chain, 
root rule chain [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/root_rule_chain_function_from_two_devices.json) as a new  "Root rule chain" and "Delta Temperature" [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/delta_temperature.json).
Please note that some nodes have debug enabled.

## Validating the flow

Download and [**import**](/docs/user-guide/ui/dashboards/#iot-dashboard-importexport) attached dashboard [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/warehouse_dashboard.json) as a new "Warehouse dashboard".

![image](/images/user-guide/rule-engine-2-0/tutorials/data-function/dashboard.png) 

## Next steps

{% assign currentGuide = "DataAnalytics" %}{% include templates/guides-banner.md %}

 






