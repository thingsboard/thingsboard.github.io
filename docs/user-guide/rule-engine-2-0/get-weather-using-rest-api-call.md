---
layout: docwithnav
title: Get weather using REST API
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
  * [REST API](/docs/reference/rest-api/).

## Model definition
  
We will operate with asset that has name "Building A" and type "building" which has to be created.

![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/rest-api-weather-building.png)

## Getting started

### Registering on data-providing website

In order to get weather data you should register on a website which will provide it. In this case
 [OpenWeatherMap](https://openweathermap.org/) will be used.

After signing up there go to [this](https://home.openweathermap.org/api_keys) page to get your api key.

![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/openweathermap-apikey.png)

### Creating attributes

For node to work server attributes should be created - api key, longitude, latitude and units of measurement. 
Attributes should look like this:

- Go to **Building A** -> **Attributes** -> **Add**

![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/add-new-attribute.png)

- Fill in the attributes with the input data shown in the following table: 

<table style="width: 25%">
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

### Setting up rule chain

Download and [**import**](docs/user-guide/ui/rule-chains/#rule-import) attached
json [**file**](/docs/user-guide/resources/outside_temperature_humidity.json) with a rule chain for this tutorial.

![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-rule-chain.png) 

 * **Node A**: Generator node
      
    * Generates empty messages to trigger REST API calls
    
   ![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-rule-chain-node-A.png) 
   
 * **Node B**: Originator attributes enrichment node
        
     * Puts server attributes latitude, longitude, APPID and units into metadata
      
    ![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-rule-chain-node-B.png)
  
 * **Node C**: External REST API call node
        
     * Performs REST API calls to OpenWeatherMap
     * Endpoint is http://api.openweathermap.org/data/2.5/weather?lat=${ss_latitude}&lon=${ss_longitude}&units=${ss_units}&APPID=${ss_APPID}
      
    ![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-rule-chain-node-C.png)
    
 * **Node D**: Script transformation node
        
     * Fetches data about outside temperature, outside minimal temperature, outside maximal temperature and outside humidity into a message.
      
    ![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-rule-chain-node-D.png)     
    
 * **Node E**: Save timeseries node
        
     * Puts data into the latest telemetry of asset "Building A".
      
    ![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-rule-chain-node-E.png)       
   

### Setting up dashboard

Download and [**import**](/docs/user-guide/ui/dashboards/#dashboard-import) attached
json [**file**](/docs/user-guide/resources/weather_dashboard.json) with a dashboard for this tutorial.

The dashboard should look like this:
![image](/images/user-guide/rule-engine-2-0/tutorials/rest-api-weather/weather-dashboard.png)   


## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}