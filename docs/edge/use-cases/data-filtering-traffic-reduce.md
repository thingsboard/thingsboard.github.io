---
layout: docwithnav
title: Data filtering and traffic reduce
description: ThingsBoard Edge use case #2

---

Coming soon…

You can have thousands of edge devices with sensors that constantly report data in realtime. It might be expensive enough to forward and process all messages to the cloud.
Probably much more efficient would be to **filter and process it on the edge** and send to the cloud only refined business-relevant data.

* TOC
{:toc}

## Use case
Let's assume you have a delivery van with mounted IoT devices:
 * A **fuel monitoring system** that tracks real-time fuel consumption
 * A **GPS tracker** that tracks car speed

Vehicle sensors gather data in realtime and transmit it to the edge computing service. Edge performs necessary processing/analysis, e.g. **calculates average fuel consumption** and **sends it periodically to the cloud**. While less important data flow temporarily stored on the edge.

Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. You can use this tutorial as a basis for much more complex scenarios.

## Prerequisites

{% include templates/edge/use-cases/ce-prerequisites.md %}

## Create device group
Open ThingsBoard Edge UI (default UI port is 8080) and login as tenant administrator.

{% capture local-deployment %}
If you have changed **HTTP_BIND_PORT** during installation process please use that instead of 8080 port
```bash
http://localhost:HTTP_BIND_PORT
``` 
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}
 
Add new [device group](/docs/user-guide/groups/) **Vehicles**:

![image](/images/edge/tutorial/data-filtering/add-device-group.png) 

Create two devices with the following information:
 * device #1: name **Fuel monitoring system**, type **monitoring system**
 * device #2: name **GPS**, type **tracker**

<br>![image](/images/edge/tutorial/data-filtering/add-device.png) 
![image](/images/edge/tutorial/data-filtering/add-device-2.png) 

## Create dashboard group
Let's also create two dashboards in order to visualize data flow:
 * **Dashboard Edge** for visualizing real-time vehicle's fuel consumption and speed
 * **Dashboard Cloud** for visualizing on the chart average hourly fuel consumption and speed

Open cloud UI. Go to Dashboard groups -> Add new entity group and name it "Delivery van dashboards".

![image](/images/edge/tutorial/data-filtering/add-dashboard-group.png)

Please download the attached JSON files - [**dashboard Edge**](/docs/edge/use-cases/resources/data-filtering-traffic-reduce/edge.json) and [**dashboard Cloud**](/docs/edge/use-cases/resources/data-filtering-traffic-reduce/cloud.json) - for the dashboards indicated in this tutorial and import it.

Open dashboard group **Delivery van dashboards**. Click **Import Dashboard** and drop alternately downloaded JSON files.

![image](/images/edge/tutorial/data-filtering/dashboards.png)

## Assign device and dashboard groups to the edge
If you have created an entity group on the cloud and want to use it on the edge - you must assign it. Follow these steps in order to assign device group **Delivery van** and dashboard group **Delivery van dashboards** to the edge **Edge ThingsBoard**:
 * Open cloud UI
 * Click **Menu -> Edge groups -> All -> Edge ThingsBoard -> Manage edge device groups**:
 
![image](/images/edge/tutorial/data-filtering/assign-device-group-1.png)

 * Click the button **Assign new entity group**, choose **Delivery van** in the list of available groups and click the button **Assign**:
 
![image](/images/edge/tutorial/data-filtering/assign-device-group-2.png) 

 * Click **Menu -> Edge groups -> All -> Edge ThingsBoard -> Manage edge dashboard groups**:
 
![image](/images/edge/tutorial/data-filtering/assign-dashboard-group-1.png)

 * Click the button **Assign new entity group**, choose **Delivery van dashobard** in the list of available groups and click the button **Assign**.

In the ThingsBoard Edge UI you should see assigned groups and entities:

![image](/images/edge/tutorial/data-filtering/assign-device-group-3.png)

![image](/images/edge/tutorial/data-filtering/assign-dashboard-group-3.png)

## Message flow
In this section we explain the purpose of two kind of nodes used in this tutorial:
- Node [**Filter Script**](/docs/user-guide/rule-engine-2-0/filter-nodes/#check-relation-filter-node): **Node A** and **Node B**.
  - This node will check the type of telemetry data. If the incoming message has type "mpg" - script will direct it to the node **Aggregate stream** to calculate average fuel consumption. If the message type is "mph" - it flows to similar **Aggregate node** to calculate average speed.
- Node [**Aggregate stream**](/docs/user-guide/rule-engine-2-0/pe/analytics-nodes/#aggregate-stream-node): **Node C** and **Node D**.
  - This node can set custom interval and calculate the MIN/MAX/SUM/AVG/COUNT/UNIQUE of the data stream.

![image](/images/edge/tutorial/data-filtering/rule-chain-root.png)

Download the attached [JSON file](/docs/edge/use-cases/resources/data-filtering-traffic-reduce/edge_root_rule_chain.json) for the **Edge Root Rule Chain** rule chain. 

Also, you can create such rule chain from scratch. The following section shows you how to modify Edge Root Rule Chain.

## Configure Rule Engine

Go to **Rule Chains** -> **Edge Rule Chains** on the cloud and click on the **Edge Root Rule Chain**:

- Add two nodes **Filter Script**. You can find it in the Filter node section:

![image](/images/edge/tutorial/data-filtering/node-script.png)

- Fill in the fields with the input data shown in the following tables: 

**Node A**:

<table style="width: 25%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Name</td>
          <td>mph exists?</td>
      </tr>
      <tr>
          <td>Filter</td>
          <td>return typeof msg.mph !== 'undefined';</td>
      </tr>
   </tbody>
</table>

**Node B**:

<table style="width: 25%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Name</td>
          <td>mpg exists?</td>
      </tr>
      <tr>
          <td>Filter</td>
          <td>return typeof msg.mpg !== 'undefined';</td>
      </tr>
   </tbody>
</table>

- Add two nodes **Aggregate stream**. You can find it in the Analytics node section:

![image](/images/edge/tutorial/data-filtering/node-aggregate.png)

- Fill in the fields with the input data shown in the following tables: 

**Node C**:

<table style="width: 25%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Name</td>
          <td>Average Speed</td>
      </tr>
      <tr>
          <td>Input value key</td>
          <td>mph</td>
      </tr>
      <tr>
          <td>Output value key</td>
          <td>avgHourlySpeed</td>
      </tr>
      <tr>
          <td>Aggregation interval type</td>
          <td>Hour</td>
      </tr>
   </tbody>
</table>

**Node D**:

<table style="width: 25%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Name</td>
          <td>Average Fuel Consumption</td>
      </tr>
      <tr>
          <td>Input value key</td>
          <td>mpg</td>
      </tr>
      <tr>
          <td>Output value key</td>
          <td>avgHourlyFuelConsumption</td>
      </tr>
      <tr>
          <td>Aggregation interval type</td>
          <td>Hour</td>
      </tr>
   </tbody>
</table>

Now let's create connections between nodes in the following way:
 * Remove the connection between **Save timeseries** and **Push to cloud** nodes
 * Connect **Save timeseries** node to the **Node A** and **Node B** with the relation type **Success**
 * Connect **Node A** and **Node C** with relation type **True**
 * Connect **Node B** and **Node D** with relation type **True** 
 * Connect **Node C** and **Node D** to the **Push to cloud** node with relation type **Success**

![image](/images/edge/tutorial/data-filtering/rule-chain-root.png)

## Generate telemetry

- Use the following scripts to connect the devices **GPS** and **Fuel monitoring system** to the ThingsBoard Edge by MQTT protocol.  
    - [**mqtt_generator_gps.py**](/docs/edge/use-cases/resources/data-filtering-traffic-reduce/mqtt_generator_gps.py): the script generates each second speed data (mph)
    - [**mqtt_generator_fuel.py**](/docs/edge/use-cases/resources/data-filtering-traffic-reduce/mqtt_generator_fuel.py): the script generates each second fuel consumption data (mpg)

To run the scripts, you need to do the following steps:
 * Replace THINGSBOARD_EDGE_HOST with your ThingsBoard Edge instance installation IP address or hostname 
 * Replace ACCESS_TOKEN. Access token can be find from the [device's page](/docs/user-guide/ui/devices/#manage-device-credentials): <br>

![image](/images/edge/tutorial/data-filtering/copy-token.png)

- Open the terminal and install MQTT Python library:

```bash
sudo pip install paho-mqtt
```

- Go to the folder that contains Python scripts and launch applications in separate terminal windows by these commands:

```bash
python mqtt_generator_gps.py
python mqtt_generator_fuel.py
```

## Validating the flow

Remember that we configured ThingsBoard Edge Rule Engine send to the cloud only aggregated data. This means the following:
 * from the **Cloud** dashboard you are able to see only charts with aggregated data
 
![image](/images/edge/tutorial/data-filtering/cloud-final.png)
 
 * from the **Edge** dashboard you are able to see only real-time fuel consumption and speed

![image](/images/edge/tutorial/data-filtering/edge-final.png)

## Next Steps

{% assign currentGuide = "DataFilteringAndTrafficReduce" %}{% include templates/edge/guides-banner-edge.md %}