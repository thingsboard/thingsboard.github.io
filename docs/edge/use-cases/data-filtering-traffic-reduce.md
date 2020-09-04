---
layout: docwithnav
title: Data filtering and traffic reduce
description: ThingsBoard Edge use case #2

---

{% assign feature = "Analytics Rule Nodes" %}{% include templates/pe-feature-banner.md %}

You can have thousands of edge devices with multiple sensors that continuously report telemetry data. 
It would be inefficient and expensive to forward all messages to the cloud. 
The better solution - **filter data from devices on the edge and publish data only related to business logic**.

* TOC
{:toc}

### Use case    
Let's assume you have truck vehicle with mounted **fuel monitoring system**. 
Sensors **each second** send multiple data: fuel consumption and gases emission (e.g. nitrogen oxides, carbon monoxide, hydrocarbon). 
You want to track only **average fuel consumption per minute**, while other device data store on edge service locally.

In this tutorial we will configure ThingsBoard Rule Engine to automatically calculate average fuel consumption of the truck based on latest sensor readings.

Please note that this is just a simple theoretical use case to demonstrate the capabilities of the platform. You can use this tutorial as a basis for much more complex scenarios.

### Prerequisites
We assume you have completed the following guides and reviewed the articles listed below:
  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Dashboard development](/docs/iot-video-tutorials/#dashboard-development-guide-part-1-of-3-visualizing-assets-data-using-maps-and-tables) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/) article.
  * [ThingsBoard Edge Getting Started](/docs/edge/) article.

In ThingsBoard Professional Edition we have created edge entity **Edge Truck** in group **All**, assigned edge to **Tenant users**.

Edge **secret** and **key** we pasted in ThingsBoard Edge [configuration file](/docs/edge/install/deb-installation/#step-6-configure-thingsboard-edge) in order to connect **edge server** with **cloud server**.

### Model definition

Open ThingsBoard Professional Edition UI. Add new [device group](/docs/user-guide/groups/) **Truck**:

<br>![image](/images/edge/tutorial/data-filtering/add-device-group.png) 

<br>Create device with name **Fuel monitoring system** and type **monitoring system**:

<br>![image](/images/edge/tutorial/data-filtering/add-device.png) 

<br/>

### Message flow
In this section we explain the purpose of one node in this tutorial:

- Node [**Aggreagte stream**](/docs/user-guide/rule-engine-2-0/pe/analytics-nodes/#aggregate-stream-node)
  - This node aggregates the average fuel consumption
  
### Configure Rule Engine
In ThingsBoard Professional Edition we modified default **Edge Root Rule Chain** in the following way:

![image](/images/edge/tutorial/data-filtering/rule-chain-root.png)

Go to **Rule Chains** -> **Edge Rule Chains** -> **Edge Root Rule Chain**:

- Remove connection between **Save timeseries** and **Push to cloud** nodes
- Add the node **Aggregate stream** between above mentioned nodes and add relation types **Success**.

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
          <td>Average Fuel Consumption</td>
      </tr>
      <tr>
          <td>Input value key</td>
          <td>mpg</td>
      </tr>
      <tr>
          <td>Output value key</td>
          <td>avgMinuteMpg</td>
      </tr>
      <tr>
          <td>Aggregation interval type</td>
          <td>Custom</td>
      </tr>
      <tr>
          <td>Aggregation interval time unit</td>
          <td>Minutes</td>
      </tr>
   </tbody>
</table>

![image](/images/edge/tutorial/data-filtering/node-aggregate.png)

### Generate telemetry

- Use the following scripts to connect device **Fuel monitoring system** to ThingsBoard server by MQTT protocol.  
    - [**mqtt-js.sh**](https://thingsboard.io/docs/edge/use-cases/resources/data-filtering-traffic-reduce/mqtt-js.sh).
    - [**generator.js**](https://thingsboard.io/docs/edge/use-cases/resources/data-filtering-traffic-reduce/generator.js).

Script will generate each second four telemetry readings:
- Fuel consumption in **miles per gallon (mpg)**
- Gases emissions in **part per million (ppm)**: 
    - nitrogen oxides (NO)
    - carbon monoxide (CO) 
    - hydrocarbon (HC)

To run the scripts, you need to do the following steps:

- Copy the **Fuel monitoring system** device access token and paste in the script mqtt-js.sh  <br>
  You can copy the access token from the Device page. <br>

![image](/images/edge/tutorial/data-filtering/copy-token.png)

- Open the terminal and go to the folder that contains these emulator scripts. 
 Make sure that it is executable:
  
 ```shell
 chmod +x *.sh
 ```

Then run the following command:

{% highlight bash %}
node bash mqtt-js.sh
{% endhighlight %}

You should see following screen with your host and device token:

![image](/images/edge/tutorial/data-filtering/script-generator.png)

## Validating the flow

Download and [**import**](/docs/user-guide/ui/dashboards/#iot-dashboard-importexport) attached dashboard [**file**](/docs/edge/use-cases/resources/data-filtering-traffic-reduce/fuel___emissions.json) as a new "Fuel & Emissions" dashboard.

![image](/images/edge/tutorial/data-filtering/dashboard-cloud.png)

Note that you can drill down to the chart for device **Fuel monitoring system** by clicking on the row in widget **Entities**.

Remember that we configured ThingsBoard Edge Rule Engine send to cloud only aggregated data. Thus from the cloud dashbaord you will be able to see only average fuel consumption **miles per gallon**.
And vice versa, from edge dashboard - you are able to see only telemetry of gases emissions **part per million**.

![image](/images/edge/tutorial/data-filtering/dashboard-edge.png)
