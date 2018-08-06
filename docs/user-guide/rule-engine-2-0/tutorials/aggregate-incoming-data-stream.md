---
layout: docwithnav
title: Aggregate incoming data stream 
description: Aggregate data about water cosumption in the building

---

{% assign feature = "Analytics Rule Nodes" %}{% include templates/pe-feature-banner.md %}

This tutorial will show how to calculate total water consumption in the building based on incoming data from all water meter sensors in the building. 

* TOC
{:toc}

## Use case

Let's assume you have buildings with multiple water meter sensors inside each building. For example, one per each apartment or similar.  

In this tutorial we will configure ThingsBoard Rule Engine to automatically calculate total water consumption in the building based on readings from multiple water meters and within certain time intervals. 
We will use 1 building, 2 sensors and 10 seconds interval just for demo purposes.  
You can use this tutorial as a basis for much more complex scenarios.  

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  
## Model definition
  
We will create one asset that has name "Building A" and type "building". We will add this asset to an asset group called "Buildings".

![image](/images/user-guide/rule-engine-2-0/tutorials/aggregation/add-asset.png)

/home/ashvayka/git/thingsboard.github.io/images/user-guide/rule-engine-2-0/tutorials/aggregation/add-asset.png

We will create two devices that has names "Water Meter A1" and "Water Meter A2" and type "water-meter". We will add this devices to device group called "Water Meters".


## Message Flow

In this section, we explain the purpose of each node in this tutorial.

### Root rule chain

![image](/images/user-guide/rule-engine-2-0/tutorials/groups/root-rule-chain.png)

  * **Node A**: Rule Chain node
  
    * We modify the default root rule chain to forward all telemetry to new "Add device to group" rule chain

### New "Add device to group" rule chain

![image](/images/user-guide/rule-engine-2-0/tutorials/groups/rule-chain.png)

  * **Node B**: Script filter node
  
    * Checks that the incoming message from device contains temperature readings
    * If message from device contains temperature readings it is forwarded to Node C
    
![image](/images/user-guide/rule-engine-2-0/tutorials/groups/has-temperature-node.png)    
     
  * **Node C**: Script filter node
  
    * Checks that the incoming message temperature is > 50°C
    * If temperature > 50°C message is forwarded to Node D
    * If temperature <= 50°C message is forwarded to Node E
    
![image](/images/user-guide/rule-engine-2-0/tutorials/groups/high-temperature-node.png)    
    
  * **Node D**: Add to Group node
      
    * Adds device to the group
    * Constructs group name by substituting deviceType metadata value
    * Automatically creates device group if needed
    
![image](/images/user-guide/rule-engine-2-0/tutorials/groups/add-group-node.png)    
      
  * **Node E**: Remove from Group node
      
    * Removes device from the group
    * Constructs group name by substituting deviceType metadata value
    
![image](/images/user-guide/rule-engine-2-0/tutorials/groups/remove-group-node.png)    
     

## Configuring the Rule Chain

Download and [**import**](/docs/user-guide/ui/rule-chains/#rule-chains-importexport) attached json [**file**](/docs/user-guide/rule-engine-2-0/pe/tutorials/add_device_to_group.json) as a new "Add device to group" rule chain. 
Please note that all nodes have debug enabled. This affects performance. Create Node A as shown on the image above in the root rule chain to forward telemetry to new rule chain.

## Validating the flow

[Publish](/docs/getting-started-guides/helloworld/#pushing-data-from-the-device) temperature readings on behalf of the new device and observe new group automatically created: 

![image](/images/user-guide/rule-engine-2-0/tutorials/groups/results.png)   


 






