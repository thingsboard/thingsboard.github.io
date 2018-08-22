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

Attributes are treated as key-value pairs. Flexibility and simplicity of the key-value format allow easy and seamless integration with almost any IoT device in the market.


## Attribute types

Attributes are categorized into three main groups:

 - **server-side** - attributes reported and managed by the server-side application.

   These attributes are not visible to the device application and store some secret data that may be used by thingsboard rules and should not be available to the device.

   Any ThingsBoard entity supports server-side attributes: Device, Asset, Customer, Tenant, Rules, etc.
   
   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/server-side-attributes.svg)
   {: refdef}  

 - **client-side** - see the device-specific attributes in the next section
 - **shared** - see the device-specific attributes in the next section


## Device-specific attribute types

All attributes may be used in [Rule Engine](/docs/user-guide/rule-engine) components: filters, processors, and actions.

This guide provides an overview of the features listed above and some useful links to get more details.

Device-specific attributes are categorized into two main groups:
 
 - **client-side** - attributes reported and managed by the device application.

   For example the current software/firmware version, hardware specification, etc.

   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/client-side-attributes.svg)
   {: refdef}  
        
 - **shared** - attributes reported and managed by the server-side application and visible to the device application.

   For example customer subscription plan, target software/firmware version.
   
   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/shared-attributes.svg)
   {: refdef}  

## Device attributes API

ThingsBoard provides the following API to the device applications:
 
 - upload *client-side* attributes to the server
 - request *client-side* and *shared* attributes from the server.
 - subscribe to updates of *shared* attributes.

Attributes API is specific for each supported network protocol.
You can review API and examples in the corresponding reference page:

 - [MQTT API reference](/docs/reference/mqtt-api/#attributes-api)
 - [CoAP API reference](/docs/reference/coap-api/#attributes-api)
 - [HTTP API reference](/docs/reference/http-api/#attributes-api)
  
## Telemetry service

Telemetry Service is responsible for persisting attributes data into the internal data storage.

It provides server-side API to query and subscribe for attribute updates.

### Internal data storage

ThingsBoard uses either Cassandra NoSQL database or SQL database to store all data.
  
Although you can query the database directly, ThingsBoard provides a set of RESTful and Websocket API that simplify this process and apply certain security policies:
 
 - Tenant Administrator user is able to manage attributes for all entities that belong to the corresponding tenant.
 - Customer user is able to manage attributes only for the entities that are assigned to the corresponding customer.
  
### Data query API

Telemetry Service provides the following REST API to fetch entity data:

![image](/images/user-guide/telemetry-service/rest-api.png)

**NOTE:** The API listed above is available via Swagger UI, please review the general [REST API](/docs/reference/rest-api/) documentation for more details.

The API is backward compatible with TB v1.0+ and this is the main reason that API call URLs contain "plugin".

#### Attribute keys API

You can fetch a list of all *attribute keys* for a particular *entity type* and *entity id* using GET request to the following URL
 
```shell
http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/keys/attributes
```

{% capture tabspec %}get-attributes-keys
A,get-attributes-keys.sh,shell,resources/get-attributes-keys.sh,/docs/user-guide/resources/get-attributes-keys.sh
B,get-attributes-keys-result.json,json,resources/get-attributes-keys-result.json,/docs/user-guide/resources/get-attributes-keys-result.json{% endcapture %}
{% include tabs.html %}

Supported entity types are: TENANT, CUSTOMER, USER, RULE, DASHBOARD, ASSET, DEVICE, ALARM

#### Attribute values API

You can fetch list of latest values for particular *entity type* and *entity id* using GET request to the following URL  
 
```shell
http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/values/attributes?keys=key1,key2,key3
```

{% capture tabspec %}get-telemetry-values
A,get-attributes-values.sh,shell,resources/get-attributes-values.sh,/docs/user-guide/resources/get-attributes-values.sh
B,get-attributes-values-result.json,json,resources/get-attributes-values-result.json,/docs/user-guide/resources/get-attributes-values-result.json{% endcapture %}
{% include tabs.html %}

Supported entity types are: TENANT, CUSTOMER, USER, RULE, DASHBOARD, ASSET, DEVICE, ALARM

### Telemetry Rule Node

There are Rule Nodes in the Rule Engine that allow you to work with Telemetry Service. Please, find more details in the node description:

- [**Enrichment Nodes - load latest telemetry for entity**](/docs/user-guide/rule-engine-2-0/enrichment-nodes/)
- [**Save Timeseries**](/docs/user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node)
- [**Save Attributes**](/docs/user-guide/rule-engine-2-0/action-nodes/#save-attributes-node)

## Data visualization

ThingsBoard provides the ability to configure and customize dashboards for data visualization.

This topic is covered in the [**Data Visualization**](/docs/user-guide/visualization) guide.

## Rule Engine

ThingsBoard provides the ability to configure data processing rules.

Device attributes can be used inside rule filters, which allows you to apply rules based on certain device properties.

You can find more details in the [**Rule Engine**](/docs/user-guide/rule-engine) guide.

    
