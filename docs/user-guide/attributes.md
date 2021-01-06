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
Attributes are treated as key-value pairs. Flexibility and simplicity of the key-value format allow easy and seamless integration with almost any IoT device on the market.


## Video Tutorial

<div id="video">
  <div id="video_wrapper">
    <iframe src="https://www.youtube.com/embed/JCW_hShAp7I" frameborder="0" allowfullscreen=""></iframe>
  </div>
</div>


## Attribute types

Attributes are separated into three main groups:

 - **Server-side** - attributes are reported and managed by the server-side application. Not visible to the device application.
   Some secret data could be used by ThingsBoard rules, but should not be available to the device.
   Any ThingsBoard entity supports server-side attributes: Device, Asset, Customer, Tenant, Rules, etc.
   
   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/server-side-attributes.svg)
   {: refdef}  

 - **Client-side** - see device specific attributes below.
 - **Shared** - see device specific attributes below.


## Device specific Attribute types

All attributes can be used in [Rule Engine](/docs/user-guide/rule-engine) components: filters, processors, and actions.
This guide provides the overview of the features listed above, and some useful links to get more details.  

Device-specific attributes are separated into two main groups:
 
 - **Client-side** - these attributes are reported and managed by the device application. 
   For example, current software/firmware version, hardware specification, etc.     

   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/client-side-attributes.svg)
   {: refdef}  
        
 - **Shared** - these attributes are reported and managed by the server-side application. Visible to the device application.
   For example, customer subscription plan, target software/firmware version.
   
   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/shared-attributes.svg)
   {: refdef}  

## Device attributes API

ThingsBoard provides the following API to device applications:
 
 - upload *client-side* attributes to the server.
 - request *client-side* and *shared* attributes from the server.
 - subscribe to update of *shared* attributes.

Attributes API is specific for each supported network protocol.
The API and examples can be reviewed on the corresponding reference page:

 - [MQTT API reference](/docs/reference/mqtt-api/#attributes-api);
 - [CoAP API reference](/docs/reference/coap-api/#attributes-api);
 - [HTTP API reference](/docs/reference/http-api/#attributes-api).
  
## Telemetry Service

Telemetry Service is responsible for persisting attributes data to internal data storage. 
Also, it provides a server-side API to query and subscribe to attribute updates. 

### Internal data storage

ThingsBoard uses either Cassandra NoSQL database or SQL database to store all data.
  
Although you can query the database directly, ThingsBoard provides a set of RESTful and a Websocket API that simplify this process and apply certain security policies:
 
 - the Tenant Administrator user is able to manage attributes for all entities that belong to the corresponding tenant.
 - the Customer user is able to manage attributes only for entities that are assigned to the corresponding customer.
  
### Data Query API

Telemetry Service provides the following REST API to fetch entity data:

![image](/images/user-guide/telemetry-service/rest-api.png)

**NOTE:** The API listed above is available via Swagger UI, please review general [REST API](/docs/reference/rest-api/) documentation for more details.
The API is backward compatible with TB v1.0+ and this is the main reason why API call URLs contain "plugin".

#### Attribute keys API

You can fetch the list of all *attribute keys* for a particular *entity type* and *entity id* using a GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/keys/attributes
```

{% capture tabspec %}get-attributes-keys
A,get-attributes-keys.sh,shell,resources/get-attributes-keys.sh,/docs/user-guide/resources/get-attributes-keys.sh
B,get-attributes-keys-result.json,json,resources/get-attributes-keys-result.json,/docs/user-guide/resources/get-attributes-keys-result.json{% endcapture %}
{% include tabs.html %}

Supported entity types are: TENANT, CUSTOMER, USER, RULE, DASHBOARD, ASSET, DEVICE, ALARM

#### Attribute values API

You can fetch list of the latest values for particular *entity type* and *entity id* using a GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/values/attributes?keys=key1,key2,key3
```

{% capture tabspec %}get-telemetry-values
A,get-attributes-values.sh,shell,resources/get-attributes-values.sh,/docs/user-guide/resources/get-attributes-values.sh
B,get-attributes-values-result.json,json,resources/get-attributes-values-result.json,/docs/user-guide/resources/get-attributes-values-result.json{% endcapture %}
{% include tabs.html %}

Supported entity types are: TENANT, CUSTOMER, USER, RULE, DASHBOARD, ASSET, DEVICE, ALARM

### Telemetry Rule Node

There are Rule Nodes in the Rule Engine that allows to work with Telemetry Service. Please find more details in node description:

- [**Enrichment Nodes - load latest telemetry for entity**](/docs/user-guide/rule-engine-2-0/enrichment-nodes/)
- [**Save Timeseries**](/docs/user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node)
- [**Save Attributes**](/docs/user-guide/rule-engine-2-0/action-nodes/#save-attributes-node)

## Data visualization

ThingsBoard provides the ability to configure and customize dashboards for data visualization.
This topic is covered in a separate guide.    
<p><a href="/docs/user-guide/visualization" class="button">Data Visualization guide</a></p>

## Rule engine

ThingsBoard provides the ability to configure data processing rules.
Device attributes can be used inside rule filters. This allows applying rules based on certain device properties.
You can find more details in a separate guide.
<p><a href="/docs/user-guide/rule-engine" class="button">Rule Engine guide</a></p>
    
