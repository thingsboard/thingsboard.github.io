---
layout: docwithnav
title: Aggregate incoming data stream 
description: Aggregate data about water consumption in the building
hidetoc: "true"

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

We will create two devices that has names "Water Meter A1" and "Water Meter A2" and type "water-meter". We will add this devices to device group called "Water Meters".

![image](/images/user-guide/rule-engine-2-0/tutorials/aggregation/add-meters.png)

We must also create relations between the building asset and water meters. This relation will be used in the rule chain to associate water meters readings with the building itself. 
It is also convenient to use relations in the dashboards to provide drill-down capabilities. You may notice two outbound relations from the building asset to water meters on the screenshot below:

![image](/images/user-guide/rule-engine-2-0/tutorials/aggregation/add-relations.png)

**Note**: Please review the following [**documentation page**](/docs/user-guide/entities-and-relations/) to learn how to create assets and relations.

## Message Flow

In this section, we explain the purpose of each node in this tutorial. There will be three rule chains involved:

  * "Emulators" - optional rule chain to simulate data from two water meters; 
  * "Water consumption" - rule chain that actually aggregates the water consumption readings;
  * "Root Rule Chain" - main, default, rule chain that dispatches all messages. In our case Root Rule Chain consumes data produced by "Emulators", store them to the database and pushes to "Water consumption" rule chain for further processing. 


### Emulators rule chain

![image](/images/user-guide/rule-engine-2-0/tutorials/aggregation/emulator-rule-chain.png)

  * **Nodes A and B**: Generator nodes

    * Two similar nodes that periodically generate a very simple message with random water consumption.

    ![image](/images/user-guide/rule-engine-2-0/tutorials/aggregation/nodes-a-and-b.png)

  * **Node C**: Rule Chain node

    * Forwards all messages to default rule chain

### Root rule chain

![image](/images/user-guide/rule-engine-2-0/tutorials/aggregation/root-rule-chain.png)

  * **Node D**:  Rule Chain node

    * Forwards all telemetry messages to aggregation rule chain. 
    Please note that we intentionally do not introduce and filtering nodes to simplify the guide. 
    Typically you should filter incoming telemetry before you forward it to more complex nodes. 
    For example check that incoming telemetry contains water meter readings.


### Water consumption rule chain

![image](/images/user-guide/rule-engine-2-0/tutorials/aggregation/aggregation-rule-chain.png)

  * **Node E**: Change originator

    * Updates the entity id that is associated with the message. 
      Updates the entity id from particular water meter to the parent asset.

    ![image](/images/user-guide/rule-engine-2-0/tutorials/aggregation/node-e.png)

  * **Node F**: Aggregate stream node

    * Transforms aggregated incoming data stream of "waterConsumption" readings to "totalWaterConsumption" value once per 10 seconds.
    * Persists new telemetry after particular interval is over and on each new message that belongs to this interval afterwards. 
      This is useful if some telemetry readings may be delayed. 

    ![image](/images/user-guide/rule-engine-2-0/tutorials/aggregation/aggregate-stream.png)

  * **Node G**: Save telemetry node

    * Simple node that stores incoming message to the database and dispatches updates to the subscribers.


## Configuring the Rule Chains

Download and [**import**](/docs/user-guide/ui/rule-chains/#rule-chains-importexport) attached emulators rule chain [**file**](/docs/user-guide/rule-engine-2-0/pe/tutorials/aggregation_emulators.json) as a new "Emulators" rule chain and 
attached water consumption rule chain [**file**](/docs/user-guide/rule-engine-2-0/pe/tutorials/aggregation_water_consumption.json) as a new "Water Consumption" rule chain. 
Please note that some nodes have debug enabled. This affects performance. Create Node C and Node D as shown on the image above in the root rule chain to forward telemetry to new rule chain.

## Validating the flow

Download and [**import**](/docs/user-guide/ui/dashboards/#iot-dashboard-importexport) attached dashboard [**file**](/docs/user-guide/rule-engine-2-0/pe/tutorials/building_water_meters.json) as a new "Building Water Meters" dashboard.

![image](/images/user-guide/rule-engine-2-0/tutorials/aggregation/dashboard-part1.png)

Note that you can drill down to the chart for particular warehouse by clicking on the corresponding row.

![image](/images/user-guide/rule-engine-2-0/tutorials/aggregation/dashboard-part2.png)

## Next steps

{% assign currentGuide = "DataAnalytics" %}{% include templates/guides-banner.md %}











