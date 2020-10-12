---
layout: docwithnav
title: Data filtering and traffic reduce
description: ThingsBoard Edge use case #2

---

{% assign feature = "Analytics Rule Nodes" %}{% include templates/pe-feature-banner.md %}

You can have thousands of edge devices with sensors that constantly report data in realtime. It might be expensive enough to forward and process all messages to the cloud.
Probably much more efficient would be to **filter and process it on the edge** and send to the cloud only refined business-relevant data.

* TOC
{:toc}

### Use case
Let's assume you have a delivery van with mounted IoT devices:
 * A **fuel monitoring system** that tracks real-time fuel consumption
 * A **GPS tracker** that tracks car speed

Vehicle sensors gather data in realtime and transmit it to the edge computing service. Edge performs necessary processing/analysis, e.g. **calculates average fuel consumption** and **sends it periodically to the cloud**. While less important data flow temporarily stored on the edge.

Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. You can use this tutorial as a basis for much more complex scenarios.

### Prerequisites
We assume you have completed the following guides and reviewed the articles listed below:
  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Dashboard development](/docs/iot-video-tutorials/#dashboard-development-guide-part-1-of-3-visualizing-assets-data-using-maps-and-tables) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/) article.
  * [ThingsBoard Edge Getting Started](/docs/edge/) article.

In ThingsBoard Professional Edition we have:
 * created [edge entity](/docs/user-guide/ui/edges/#add-and-delete-edges) **Edge ThingsBoard** in group **All**.
 
![image](/images/edge/tutorial/alarm/add-edge.png) 
 
 * assigned edge to a [user](/docs/user-guide/ui/edges/#assign-entities-to-edge) with [permission]() to create devices.
 
![image](/images/edge/tutorial/alarm/assign-user.png) 
 
 * connected ThingsBoard Edge. Detailed step by step instructions on how to configure edge and cloud you can find in [installation guides](/docs/edge/install/installation-options/).
 
![image](/images/edge/tutorial/alarm/edge-status.png) 

### Create device group
Open ThingsBoard Professional Edition UI. Add new [device group](/docs/user-guide/groups/) **Vehicles**:

![image](/images/edge/tutorial/data-filtering/add-device-group.png) 

Create two devices with the following information:
 * device #1: name **Fuel monitoring system**, type **monitoring system**
 * device #2: name **GPS**, type **tracker**

<br>![image](/images/edge/tutorial/data-filtering/add-device.png) 
![image](/images/edge/tutorial/data-filtering/add-device-2.png) 

### Create dashboard group
Let's also create two dashboards in order to visualize data flow:
 * **Dashboard Edge** for visualizing real-time vehicle's fuel consumption and speed
 * **Dashboard Cloud** for visualizing on the chart average hourly fuel consumption and speed

Open ThingsBoard Professional Edition UI. Go to Dashboard groups -> Add new entity group and name it "Delivery van dashboards".

![image](/images/edge/tutorial/data-filtering/add-dashboard-group.png)

Please download the attached JSON files - [**dashboard Edge**](/docs/edge/use-cases/resources/data-filtering-traffic-reduce/edge.json) and [**dashboard Cloud**](/docs/edge/use-cases/resources/data-filtering-traffic-reduce/cloud.json) - for the dashboards indicated in this tutorial and import it.

Open dashboard group **Delivery van dashboards**. Click **Import Dashboard** and drop alternately downloaded JSON files.

![image](/images/edge/tutorial/data-filtering/dashboards.png)

### Assign device and dashboard groups to the edge
If you have created an entity group on the cloud and want to use it on the edge - you must assign it. Follow these steps in order to assign device group **Delivery van** and dashboard group **Delivery van dashboards** to the edge **Edge ThingsBoard**:
 * Open ThingsBoard Professional Edition UI
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

### Message flow
In this section we explain the purpose of two kind of nodes used in this tutorial:
- Node [**Filter Script**](/docs/user-guide/rule-engine-2-0/filter-nodes/#check-relation-filter-node): **Node A** and **Node B**.
  - This node will check the type of telemetry data. If the incoming message has type "mpg" - script will direct it to the node **Aggregate stream** to calculate average fuel consumption. If the message type is "mph" - it flows to similar **Aggregate node** to calculate average speed.
- Node [**Aggregate stream**](/docs/user-guide/rule-engine-2-0/pe/analytics-nodes/#aggregate-stream-node): **Node C** and **Node D**.
  - This node can set custom interval and calculate the MIN/MAX/SUM/AVG/COUNT/UNIQUE of the data stream.

![image](/images/edge/tutorial/data-filtering/rule-chain-root.png)

Download the attached [JSON file](/docs/edge/use-cases/resources/data-filtering-traffic-reduce/edge_root_rule_chain.json) for the **Edge Root Rule Chain** rule chain. 

Also, you can create such rule chain from scratch. The following section shows you how to modify Edge Root Rule Chain.

### Configure Rule Engine

In ThingsBoard Professional Edition UI go to **Rule Chains** -> **Edge Rule Chains** -> click on the **Edge Root Rule Chain**:

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
 * Connect **Save timeseries** node to the **Node A** and **Node B** with the relation **Success**
 * Connect **Node A** and **Node C** with relation **True**
 * Connect **Node B** and **Node D** with relation **True** 
 * Connect **Node C** and **Node D** to the **Push to cloud** node with relation types **Success**

### Generate telemetry

- Use the following scripts to connect the device **Fuel monitoring system** to the ThingsBoard server by MQTT protocol.  
    - [**mqtt-js.sh**](https://thingsboard.io/docs/edge/use-cases/resources/data-filtering-traffic-reduce/mqtt-js.sh).
    - [**generator.js**](https://thingsboard.io/docs/edge/use-cases/resources/data-filtering-traffic-reduce/generator.js).

The script will generate each second two telemetry readings:
- Fuel consumption in **miles per gallon (mpg)**
- Car speed in **miles per hour (mph)**

To run the scripts, you need to do the following steps:
 * In the mqtt-js.sh replace THINGSBOARD_HOST, ACCESS_TOKEN_GPS, ACCESS_TOKEN_FUEL with you real params
 * Access tokens for the **Fuel monitoring system** and **GPS** devices can be find from the device's page. <br>

![image](/images/edge/tutorial/data-filtering/copy-token.png)

- Open the terminal and go to the folder that contains these emulator scripts. 
 Make sure it is executable:
  
 ```shell
 chmod +x *.sh
 ```

Then run the following command:

{% highlight bash %}
sudo bash mqtt-js.sh
{% endhighlight %}

You should see the following screen:

![image](/images/edge/tutorial/data-filtering/script-generator.png)

## Validating the flow

Remember that we configured ThingsBoard Edge Rule Engine send to the cloud only aggregated data. This means the following:
 * from the **Cloud** dashboard you are able to see only charts with aggregated data
 
![image](/images/edge/tutorial/data-filtering/cloud-final.png)
 
 * from the **Edge** dashboard you are able to see only real-time fuel consumption and speed

![image](/images/edge/tutorial/data-filtering/edge-final.png)