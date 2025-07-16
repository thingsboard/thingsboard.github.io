---
layout: docwithnav
title: Add & remove devices to group dynamically
description: Add & remove devices to group

---
{% assign hostName = "thingsboard.cloud" %}

{% assign feature = "Device & Asset Groups" %}{% include templates/pe-feature-banner.md %}

This tutorial will show how to dynamically add & remove device from the device group based on incoming data from device. 

* TOC
{:toc}

## Use case

Let's assume your device is reporting temperature readings to ThingsBoard and you would like to visualize devices that have reported temperature > 50°C. 

In this tutorial we will configure ThingsBoard Rule Engine to automatically update "High temperature devices" group members based on incoming temperature readings from the device.
You can use this tutorial as a basis for much more complex filtering.

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).

## Model definition

We will operate with Temperature sensor device that has name "Sensor A" and type "DHT22".

![image](/images/user-guide/rule-engine-2-0/tutorials/groups/add-device.png)

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

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}


 






