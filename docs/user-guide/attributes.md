---
layout: docwithnav
assignees:
- ashvayka
title: Working with IoT device attributes
description: IoT device management using ThingsBoard attributes feature

---

* TOC
{:toc}

ThingsBoard provides the ability to assign custom attributes to your entities and manage these attributes.
Attributes are treated key-value pairs. Flexibility and simplicity of the key-value format allow easy and seamless integration with almost any IoT device on the market.


## Attribute types

Attributes are separated into three main groups:

 - **server-side** - attributes are reported and managed by the server-side application. Not visible to the device application.
   Some secret data that may be used by thingsboard rules but should not be available to the device.
   Any ThingsBoard entity supports server-side attributes: Device, Asset, Customer, Tenant, Rules, etc.
   
   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/server-side-attributes.svg)
   {: refdef}  

 - **client-side** - see device specific attributes 
 - **shared** - see device specific attributes


## Device specific Attribute types

All attributes may be used in [Rule Engine](/docs/user-guide/rule-engine) components: filters, processors, and actions.
This guide provides the overview of the features listed above and some useful links to get more details.  

Device specific attributes are separated into two main groups:
 
 - **client-side** - attributes are reported and managed by the device application. 
   For example current software/firmware version, hardware specification, etc.     

   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/client-side-attributes.svg)
   {: refdef}  
        
 - **shared** - attributes are reported and managed by the server-side application. Visible to the device application.
   For example customer subscription plan, target software/firmware version.
   
   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/shared-attributes.svg)
   {: refdef}  

## Device attributes API

ThingsBoard provides following API to device applications:
 
 - upload *client-side* attributes to the server
 - request *client-side* and *shared* attributes from the server.
 - subscribe to updates of *shared* attributes.

Attributes API is specific for each supported network protocol.
You can review API and examples in corresponding reference page:

 - [MQTT API reference](/docs/reference/mqtt-api/#attributes-api)
 - [CoAP API reference](/docs/reference/coap-api/#attributes-api)
 - [HTTP API reference](/docs/reference/http-api/#attributes-api)
  
## Telemetry plugin

ThingsBoard consists of core services and pluggable modules called plugins.
Telemetry plugin is responsible for persisting attributes data to internal data storage; 
provides server-side API to query and subscribe for attribute updates. 
Since Telemetry plugin functionality is critical for data visualization purposes in dashboards, it is configured on the system level by a system administrator.
Advanced users or platform developers can customize telemetry plugin functionality.

### Internal data storage

ThingsBoard uses either Cassandra NoSQL database or SQL database to store all data.
  
Although you can query the database directly, ThingsBoard provides a set of RESTful and Websocket API that simplify this process and apply certain security policies:
 
 - Tenant Administrator user is able to manage attributes for all entities that belong to the corresponding tenant.
 - Customer user is able to manage attributes only for entities that are assigned to the corresponding customer.
  
### Data Query API

Telemetry plugin provides following API to fetch device attributes:

#### Attribute keys API

You can fetch list of all *attribute keys* for particular *entity type* and *entity id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/keys/attributes
```

{% capture tabspec %}get-attributes-keys
A,get-attributes-keys.sh,shell,resources/get-attributes-keys.sh,/docs/user-guide/resources/get-attributes-keys.sh
B,get-attributes-keys-result.json,json,resources/get-attributes-keys-result.json,/docs/user-guide/resources/get-attributes-keys-result.json{% endcapture %}
{% include tabs.html %}

Supported entity types are: TENANT, CUSTOMER, USER, RULE, PLUGIN, DASHBOARD, ASSET, DEVICE, ALARM

#### Attribute values API

You can fetch list of latest values for particular *entity type* and *entity id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/values/attributes?keys=key1,key2,key3
```

{% capture tabspec %}get-telemetry-values
A,get-attributes-values.sh,shell,resources/get-attributes-values.sh,/docs/user-guide/resources/get-attributes-values.sh
B,get-attributes-values-result.json,json,resources/get-attributes-values-result.json,/docs/user-guide/resources/get-attributes-values-result.json{% endcapture %}
{% include tabs.html %}

Supported entity types are: TENANT, CUSTOMER, USER, RULE, PLUGIN, DASHBOARD, ASSET, DEVICE, ALARM

## Data visualization

ThingsBoard provides the ability to configure and customize dashboards for data visualization.
This topic is covered in a separate guide.    
<p><a href="/docs/user-guide/visualization" class="button">Data Visualization guide</a></p>

## Rule engine

ThingsBoard provides the ability to configure data processing rules.
Device attributes can be used inside rule filters. This allows applying rules based on certain device properties.
You can find more details in a separate guide.
<p><a href="/docs/user-guide/rule-engine" class="button">Rule Engine guide</a></p>
    
