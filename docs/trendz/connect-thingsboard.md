---
layout: docwithnav
assignees:
- vparomskiy
title: Connect To the Thingsboard
description: Connect Trendz Analytics platform to the Thingsboard
---

* TOC
{:toc}


## Connect to the ThingsBoard
You can connect Trendz Analytics to the Thingsboard Community Edition or ThingsBoard Professional Edition.

<br/>

By default, Trendz expect that Thingsboard is hosted on the same instance and accessible via an URL:
 
 - http://localhost:9090
    
If your ThingsBoard installation is hosted on another instance/port - you have to update config with correct value:

Open Trendz configuration file:

```
Windows: C:\Program Files (x86)\trendz\conf\trendz.yml
Linux: /usr/share/trandz/conf/trandz.yml
```
    
And update this property to correct value:

```yml
tb.api.url: "${TB_API_URL:http://localhost:9090}"
```    
    
For docker installations - update environment variable ``TB_API_URL`` with the correct value.
   

## Configuration properties

<table>
  <thead>
      <tr>
          <td><b>Property</b></td><td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">HTTP server parameters</span></td>
      </tr>  
      <tr>
          <td>server.address</td>
          <td>HTTP_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>HTTP Server bind address</td>
      </tr>
      <tr>
          <td>server.port</td>
          <td>HTTP_BIND_PORT</td>
          <td>8888</td>
          <td>HTTP Server bind port</td>
      </tr>
      <tr>
            <td>tb.api.url</td>
            <td>TB_API_URL</td>
            <td>http://localhost:9090</td>
            <td>ThingsBoard Cluster REST API url</td>
        </tr>
      <tr>
          <td>ratelimit.duration.sec</td>
          <td>RATELIMIT_DURATION_SEC</td>
          <td>1</td>
          <td>Control amount of api calls per duration</td>
      </tr>
      <tr>
          <td>ratelimit.max_reqeusts_per_duration</td>
          <td>RATELIMIT_MAX_REQUESTS</td>
          <td>5000</td>
          <td>Max number of allowed API calls per configured duration</td>
      </tr>
      <tr>
          <td>ratelimit.max_concurent_requests</td>
          <td>RATELIMIT_CONCURRENT_REQUESTS</td>
          <td>8</td>
          <td>Max number of concurrent API calls. Overrides RATELIMIT_MAX_REQUESTS limit</td>
      </tr>                    
  </tbody>
</table>

## Authentication and Security
Trendz use ThingsBoard as authentication service. Any Tenant Administrator or Customer User can sign in into Trendz UI using their login\password that they use for authentication in the ThingsBoard.

Same security restrictions that are configured on the ThingsBoard works in the Trendz Analytics. 

- **Tenant Administrator** has access to all Devices/Assets
- **Customer user** has access only to those Devices/Assets that he has permissions to view


## Topology Discovery
Trendz Topology represent business model of Devices/Assets that was created in the ThingsBoard. 
Topology defins dimensions/fields that used for building visualizations and relation between Devices/Assets.
Here are core components of Trendz Topology:


**Business Entity** - Definition of group of Devices or Assets with same Device Type/Asset Type. Each Business Entity has:

- **Criteria** - General properties that defines how Devices/Assets fetched from the ThingsBoard
- **Business Entity Field** - Represent field that is used during building visualizations. Field contains data type, label and query parameters that used during fetching data from The thingsBoard.
Here is a list of supported fields:
    - Entity Name - name of the Device or Asset
    - Owner - who own device (administrator/customer)
    - Attribute
    - Telemetry
- **Relations** - configured relations between Business Entities and their properties. Trendz Relations represent ThingsBoard relations between Devices and Assets

#### First Topology discovery


After first sign-in user should perform initial Topology Discovery. During this process, Trendz will analise all Devices/Assets available in the ThingsBoard, their attributes/telemetry and all relations between them.
As the result, Trendz will extract and save collection of Business Entities. You can view and modify them on the `Settings` page.

![image](/images/trendz/first-discovery.png)

<br/>

![image](/images/trendz/discover-results.png)
 
#### Manual Topology rediscovery
Business Entity do not represent single Device or Asset, but query that used for fetching Device/Asset from the ThingsBoard. It means that you do not need to update topology if new Devices Assets with the same type were added on the ThingsBoard.

In case, when new Device/Asset types were added or attribute/telemetry with new key was created in the ThingsBoard - you should update Topology. 


Manual Topology Rediscovery will scan ThingsBoard again, detect modifications and update collection of Business Entities with required settings. 
You can trigger this process on the `Settings` page by pressing `Refresh Topology`.

 
#### Manual Modification
Other option for updating topology is manual modification of Business Entity properties. You can have as many Business Entities with similar properties as you want. 
It may be useful in case when same devices/assets represent different aspects of business solution. For example single devices can monitor environment and submit debug events for troubleshooting.
By separating debug events from environment measurements into isolated Business Entities it becomes easier to build visualizations focused on single aspect of your solution.

