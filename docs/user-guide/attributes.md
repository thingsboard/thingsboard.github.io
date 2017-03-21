---
layout: docwithnav
assignees:
- ashvayka
title: Working with IoT device attributes
description: IoT device management using Thingsboard attributes feature

---

* TOC
{:toc}

Thingsboard provides ability to assign custom attributes to your devices and manage them. 
Attributes are treated key-value pairs. Flexibility and simplicity of key-value format allows easy and seamless integration with almost any IoT device on the market.

All attributes may be used in [Rule Engine](/docs/user-guide/rule-engine) components: filters, processors and actions.
This guide provides overview of the features listed above and some useful links to get more details.  

## Attribute types

Attributes are separated into three main groups:
 
 - **client-side** - attributes are reported and managed by the device application. 
   For example: current software/firmware version, hardware specification, etc.     

   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/client-side-attributes.svg)
   {: refdef}  
      
 - **server-side** - attributes are reported and managed by the server-side application. Not visible to the device application.
   Some secret data that may be used by thingsboard rules but should not be available to the device.
   
   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/server-side-attributes.svg)
   {: refdef}  
  
 - **shared** - attributes are reported and managed by the server-side application. Visible to the device application.
   For example: customer subscription plan, target software/firmware version.
   
   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/shared-attributes.svg)
   {: refdef}  

## Device attributes API

Thingsboard provides following API to device applications:
 
 - upload *client-side* attributes to the server
 - request *client-side* and *shared* attributes from server.
 - subscribe to updates of *shared* attributes.

Attributes API is specific for each supported network protocol.
You can review API and examples in corresponding reference page:

 - [MQTT API reference](/docs/reference/mqtt-api/#attributes-api)
 - [CoAP API reference](/docs/reference/coap-api/#attributes-api)
 - [HTTP API reference](/docs/reference/http-api/#attributes-api)
  
## Telemetry plugin

Thingsboard consist of core services and plug-able modules called plugins. 
Telemetry plugin is responsible for persisting attributes data to internal data storage; 
provides server-side api to query and subscribe for attribute updates. 
Since Telemetry plugin functionality is critical for data visualization purposes in dashboards, it is configured on the system level by system administrator.
Advanced users or platform developers can customize telemetry plugin functionality.

### Internal data storage

Thingsboard uses Cassandra NoSQL database. This database is optimized for storage of timeseries data.
Cassandra takes care of data replication and provides scalable, reliable and fault-tolerant storage.

Attributes are stored in **attributes_kv_cf** column family.
  
Although you can query database directly, Thingsboard provide set of RESTful and Websocket API that simplify this process and apply certain security policies:
 
 - Tenant Administrator user is able to manage attributes for all unassigned devices that belong to corresponding tenant.
 - Customer user is able to manage attributes only for devices that are assigned to corresponding customer.
  
### Data Query API

Telemetry plugin provides following API to fetch device attributes:

#### Attribute keys API

You can fetch list of all *attribute keys* for particular *device id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{deviceId}/keys/attributes
```

{% capture tabspec %}get-attributes-keys
A,get-attributes-keys.sh,shell,resources/get-attributes-keys.sh,/docs/user-guide/resources/get-attributes-keys.sh
B,get-attributes-keys-result.json,json,resources/get-attributes-keys-result.json,/docs/user-guide/resources/get-attributes-keys-result.json{% endcapture %}
{% include tabs.html %}

#### Attribute values API

You can fetch list of latest values for particular *device id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{deviceId}/values/attributes?keys=key1,key2,key3
```

{% capture tabspec %}get-telemetry-values
A,get-attributes-values.sh,shell,resources/get-attributes-values.sh,/docs/user-guide/resources/get-attributes-values.sh
B,get-attributes-values-result.json,json,resources/get-attributes-values-result.json,/docs/user-guide/resources/get-attributes-values-result.json{% endcapture %}
{% include tabs.html %}

## Data visualization

Thingsboard provide ability to configure and customize dashboards for data visualization. 
This topic is covered in separate guide.    
<p><a href="/docs/user-guide/visualization" class="button">Data Visualization guide</a></p>

## Rule engine

Thingsboard provide ability to configure data processing rules.
Device attributes can be used inside rule filters. This allows to apply rules based on certain device properties.
You can find more details in a separate guide.
<p><a href="/docs/user-guide/rule-engine" class="button">Rule Engine guide</a></p>
    
