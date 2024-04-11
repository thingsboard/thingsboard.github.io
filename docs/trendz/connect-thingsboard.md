---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Connect To the ThingsBoard
description: Connect Trendz Analytics platform to the ThingsBoard
---

* TOC
{:toc}


## Connect to ThingsBoard
You can connect Trendz Analytics to the ThingsBoard Community Edition or ThingsBoard Professional Edition.

<br>

By default, Trendz expects that ThingsBoard is hosted on the same instance and accessible via an URL:
 
 - http://localhost:9090
    
If your ThingsBoard installation is hosted on another instance/port - you have to update config with correct value:

Open Trendz configuration file:

```
sudo nano /usr/share/trendz/conf/trendz.conf
```
    
And update this property to the correct value:

```yml
export TB_API_URL=http://localhost:9090
```    
    
For docker installations - update environment variable ``TB_API_URL`` with the correct value.   

## Authentication and Security
Trendz uses ThingsBoard as an authentication service. Any Tenant Administrator or Customer User can sign in into Trendz UI using their login\password that they use for authentication in the ThingsBoard.

Same security restrictions that are configured on the ThingsBoard works in the Trendz Analytics. 

- **Tenant Administrator** has access to all Devices/Assets
- **Customer user** has access only to those Devices/Assets that they have permissions to view


## Topology Discovery
Trendz Topology represents the business model of Devices/Assets that was created in ThingsBoard. 
Topology defines dimensions/fields that used for building visualizations and relation between Devices/Assets.
Here are the core components of Trendz Topology:


**Business Entity** - Definition of a group of Devices or Assets with same Device Type/Asset Type. Each Business Entity has:

- **Criteria** - General properties that define how Devices/Assets fetched from the ThingsBoard
- **Business Entity Field** - Represent field that is used during building visualizations. Field contains data type, label and query parameters used during fetching data from The thingsBoard.
Here is a list of supported fields:
    - Entity Name - the name of the Device or Asset
    - Owner - who own device (administrator/customer)
    - Attribute
    - Telemetry
- **Relations** - configured relations between Business Entities and their properties. Trendz Relations represent ThingsBoard relations between Devices and Assets

#### First Topology discovery


After the first sign-in user should perform initial Topology Discovery. During this process, Trendz will analyze all Devices/Assets available in the ThingsBoard, their attributes/telemetry and all relations between them.
As a result, Trendz will extract and save the collection of Business Entities. You can view and modify them on the `Settings` page.

![image](/images/trendz/first-discovery.png)

<br>

![image](/images/trendz/discover-results.png)
 
#### Manual Topology rediscovery
Business Entity does not represent a single Device or Asset, but the query that used for fetching Device/Asset from the ThingsBoard. It means that you do not need to update topology if new Devices Assets with the same type were added on the ThingsBoard.

When new Device/Asset types were added or attribute/telemetry with a new key was created in the ThingsBoard - you should update Topology. 


Manual Topology Rediscovery will scan ThingsBoard again, detect modifications and update collection of Business Entities with required settings. 
You can trigger this process on the `Settings` page by pressing `Refresh Topology`.

 
#### Manual Modification
Another option for updating topology is a manual modification of Business Entity properties. You can have as many Business Entities with similar properties as you want. 
It may be useful in case when the same devices/assets represent different aspects of business solution. For example, single devices can monitor the environment and submit debug events for troubleshooting.
By separating debug events from environment measurements into isolated Business Entities it becomes easier to build visualizations focused on a single aspect of your solution.


## Next Steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}
