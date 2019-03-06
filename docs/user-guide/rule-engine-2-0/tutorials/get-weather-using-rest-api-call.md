---
layout: docwithnav
title: Weather reading using REST API calls
description: REST API weather guide

---



This tutorial will show how to get weather data using REST API.

* TOC
{:toc}

## Use case

Let's assume your building is located in a distant place and you would like to know weather there with the help of
 Thingsboard. 

In this tutorial we will configure ThingsBoard Rule Engine to automatically get weather information using REST API.
 You can use this tutorial as a basis for more complex tasks. 
 

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  * [External rule nodes](/docs/user-guide/rule-engine-2-0/external-nodes/).

## Adding the asset
  
Add Asset entity in ThingsBoard. Its name is **Building A** and its type is **building**.

![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/rest-api-weather-building.png)

## Registering on data-providing website

In order to get weather data you should register on a website which will provide it. In this case
 [OpenWeatherMap](https://openweathermap.org/) will be used.

After signing up there go to [this](https://home.openweathermap.org/api_keys) page to get your api key.

![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/openweathermap-apikey.png)

## Creating attributes

For REST API call server attributes should be created - api key, longitude, latitude and units of measurement. 
Attributes should look like this:

- Go to **Building A** -> **Attributes** -> **Add**

![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/add-new-attribute.png)

- Fill in the attributes with the input data shown in the following table: 

<table style="width: 50%">
  <thead>
      <tr>
          <td><b>Field</b></td><td><b>Data Type</b></td><td><b>Input Data</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>APPID</td>
          <td>String</td>
          <td>(an API key you got from OpenWeatherMap)</td>
      </tr>
      <tr>
          <td>latitude</td>
          <td>Double</td>
          <td>latitude of an asset</td>
      </tr>
      <tr>
          <td>longitude</td>
          <td>Double</td>
          <td>longitude of an asset</td>
      </tr>
      <tr>
          <td>units</td>
          <td>String</td>
          <td>"metric" for meters per second wind speed and Celsius temperature, "imperial" for miles per hour wind speed and
           Fahrenheit temperature, empty for meters per second wind speed and Kelvin temperature</td>
      </tr>
   </tbody>
</table> 


In this example the coordinates of New York City and metric units will be used.

## Message flow

In this section, we explain the purpose of each node in this tutorial. There will be one rule chain involved:

  - **Outside Temperature/Humidity** - rule chain sends API calls to OpenWeatherMap every 15 seconds and sends data about
  humidity and temperature to a chosen asset.

The following screenshot show how the above Rule Chain should look like:

![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-rule-chain.png)   
   
Download and [**import**](docs/user-guide/ui/rule-chains/#rule-import) attached
json [**file**](/docs/user-guide/resources/outside_temperature_humidity.json) with a rule chain for this tutorial.
Be aware that you need to set the asset you created in the beginning as an originator in the leftmost generator node.

The following section shows you how to create this rule chain from scratch.

#### Create new Rule Chain (**Outside Temperature/Humidity**)

Go to **Rule Chains** -> **Add new Rule Chain** 

Configuration:

- Name : **Outside Temperature/Humidity**

![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/add-weather-rest-api-chain.png) 

New Rule Chain is created. Press **Edit** button and configure Chain.

###### Adding the required nodes

In this rule chain, you will create 5 nodes as it will be explained in the following sections:

###### Node A: **Generator node**
   - Add the **Generator** node. This rule node Generates empty messages to trigger REST API calls.
   - Fill its fields the following way:
   <table style="width: 50%">
     <thead>
         <tr>
             <td><b>Field</b></td><td><b>Value</b></td>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>Name</td>
             <td>Generate requests</td>
         </tr>
         <tr>
             <td>Message count</td>
             <td>0</td>
         </tr>
         <tr>
             <td>Period in seconds</td>
             <td>15</td>
         </tr>
         <tr>
             <td>Originator type</td>
             <td>Asset</td>
         </tr>
         <tr>
             <td>Asset</td>
             <td>Building A</td>
         </tr>
         <tr>
             <td>Generate function</td>
             <td>return { msg: {}, metadata: {}, msgType: "POST_TELEMETRY_REQUEST" };</td>
         </tr>
      </tbody>
   </table>
    
   ![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-rule-chain-node-A.png) 
   
###### Node B: **Originator attributes enrichment node**
   - Add the **Originator attributes enrichment node** and connect it to **Generator** node with a relation type
   **Success**. This node will fetch server attributes atitude, longitude, APPID and units of the originator set up 
   in a **Generator** node into metadata
   - Fill its fields the following way:
       <table style="width: 50%">
         <thead>
             <tr>
                 <td><b>Field</b></td><td><b>Value</b></td>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Name</td>
                 <td>Latitude/Longitudes</td>
             </tr>
             <tr>
                 <td>Server attributes</td>
                 <td>latitude, longitude, APPID, units</td>
             </tr>
          </tbody>
       </table>  
   ![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-rule-chain-node-B.png)
  
###### Node C: **External REST API call node**
   - Add the **External REST API call node** and connect it to **Originator attributes enrichment node** with a relation 
   type **Success**. This node will perform REST API calls to OpenWeatherMap.
   - Fill its fields the following way:
      <table style="width: 50%">
             <thead>
                <tr>
                    <td><b>Field</b></td><td><b>Value</b></td>
                </tr>
             </thead>
             <tbody>
                <tr>
                    <td>Name</td>
                    <td>Get Weather Data</td>
                </tr>
                <tr>
                    <td>Endpoint URL pattern</td>
                    <td>http://api.openweathermap.org/data/2.5/weather?lat=${ss_latitude}&lon=${ss_longitude}&units=${ss_units}&APPID=${ss_APPID}</td>
                </tr>
                <tr>
                    <td>Request method</td>
                    <td>GET</td>
                </tr>
                <tr>
                    <td>Use simple client HTTP factory</td>
                    <td>False</td>
                </tr>
             </tbody>
      </table>  
   - ss_latitude, ss_longitude, ss_units, ss_APPID are server attributes fetched from metadata which were put there
   by **Originator attributes enrichment node**
   
   ![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-rule-chain-node-C.png)
    
###### Node D: **Script transformation node**
   - Add the **Script transformation node** and connect it to **External REST API call node** with a relation 
   type **Success**. This node will put outside temperature, maximal temperature, minimal temperature and humidity into
   the message.
   - Fill Transform function the following way:
     
     
  ```js
      var newMsg = {
          "outsideTemp": msg.main.temp,
          "outsideMaxTemp": msg.main.temp_max,
          "outsideMinTemp": msg.main.temp_min,
          "outsideHumidity": msg.main.humidity,
      };
      
      
      return {msg: newMsg, metadata: metadata, msgType: msgType};
```
   ![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-rule-chain-node-D.png)     
    
###### Node E: **Save timeseries node**
        
   - Add the **Script transformation node** and connect it to **External REST API call node** with a relation 
        type **Success**.
      
   ![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-rule-chain-node-E.png)     

## Setting up dashboard

Download and [**import**](/docs/user-guide/ui/dashboards/#dashboard-import) attached
json [**file**](/docs/user-guide/resources/weather_dashboard.json) with a dashboard for this tutorial.

The dashboard should look like this:
![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-dashboard.png)   


## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}