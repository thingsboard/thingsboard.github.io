
* TOC
{:toc}
## Assigning custom attributes to entities and attributes managing


ThingsBoard provides the ability to assign custom attributes to your entities and manage these attributes.
Those attributes are stored in the database and may be used for data visualization and data processing.

Attributes are treated as key-value pairs. Flexibility and simplicity of the key-value format allow easy and seamless integration with almost any IoT device on the market.
Key is always a string and is basically an attribute name, while the attribute value can be either string, boolean, double, integer or JSON. 
For example:

```json
{
 "firmwareVersion":"v2.3.1", 
 "booleanParameter":true, 
 "doubleParameter":42.0, 
 "longParameter":73, 
 "configuration": {
    "someNumber": 42,
    "someArray": [1,2,3],
    "someNestedObject": {"key": "value"}
 }
}
```
{: .copy-code}

## Attribute names

As a platform user, you can define any attribute name. 
However, we recommend to use [camelCase](https://en.wikipedia.org/wiki/Camel_case).
This make it easy to write custom JS functions for data processing and visualization.

## Attribute types

There are three types of attributes. Let's review them with examples:

### Server-side attributes

This type of attribute is supported by almost any platform entity: Device, Asset, Customer, Tenant, User, etc.
Server-side attributes are the ones that you may configure via Administration UI or REST API.
The device firmware can't access the server-side attribute.

{:refdef: style="text-align: center;"}
![image](https://img.thingsboard.io/user-guide/server-side-attributes.svg)
{: refdef}

Let's assume you would like to build a building monitoring solution and review few examples:

1. The *latitude*, *longitude* and *address* are good examples of server-side attribute you may assign to assets that represent building or other real estate. You may use this attributes on the Map Widget in your dashboard to visualize location of the buildings.  
2. The *floorPlanImage* may contain a URL to the image. You may use this attribute to visualize floor plan on the Image Map Widget.
3. The *maxTemperatureThreshold* and *temperatureAlarmEnabled* may be used to configure and enable/disable alarms for a certain device or asset.

#### Administration UI

{% include images-gallery.html imageCollection="server-side-attrs-ui" showListImageTitles="true" %}


{% capture bulk_provisioning %}
[Bulk provisioning](/docs/{{docsPrefix}}user-guide/bulk-provisioning/) feature allows you to quickly create multiple devices and assets and their attributes from CSV file.
{% endcapture %}
{% include templates/info-banner.md content=bulk_provisioning %}

#### REST API

Use [REST API](/docs/{{docsPrefix}}reference/rest-api/) documentation to get the value of the JWT token. You will use it to populate the 'X-Authorization' header and authenticate your REST API call request.

Send POST request with JSON representation of the attribute to the following URL: 

```text
https://$YOUR_THINGSBOARD_HOST/api/plugins/telemetry/$ENTITY_TYPE/$ENTITY_ID/SERVER_SCOPE
```

The example below creates attribute with the name "newAttributeName" and value "newAttributeValue" for device with ID 'ad17c410-914c-11eb-af0c-d5862211a5f6' and ThingsBoard Cloud server:
```shell
curl -v 'https://thingsboard.cloud/api/plugins/telemetry/DEVICE/ad17c410-914c-11eb-af0c-d5862211a5f6/SERVER_SCOPE' \
-H 'x-authorization: Bearer $YOUR_JWT_TOKEN_HERE' \
-H 'content-type: application/json' \
--data-raw '{"newAttributeName":"newAttributeValue"}'
```
{: .copy-code}

Similar, you can fetch all server-side attributes using the following command:

```shell
curl -v -X GET 'https://thingsboard.cloud/api/plugins/telemetry/DEVICE/ad17c410-914c-11eb-af0c-d5862211a5f6/values/attributes/SERVER_SCOPE' \
  -H 'x-authorization: Bearer $YOUR_JWT_TOKEN_HERE' \
  -H 'content-type: application/json' 
```
{: .copy-code}


The output will include 'key', 'value' and timestamp of the last update:

```json
[
    {
        "lastUpdateTs": 1617633139380,
        "key": "newAttributeName",
        "value": "newAttributeValue"
    }
]
```
{: .copy-code}

As an alternative to curl, you may use [Java](/docs/{{docsPrefix}}reference/rest-client/) or [Python](/docs/{{docsPrefix}}reference/python-rest-client/) REST clients.

### Shared attributes

This type of attributes is available only for Devices. It is similar to the Server-side attributes but has one important difference. 
The device firmware/application may request the value of the shared attribute(s) or subscribe to the updates of the attribute(s).
The devices which communicate over MQTT or other bi-directional communication protocols may subscribe to attribute updates and receive notifications in real-time.
The devices which communicate over HTTP or other request-response communication protocols may periodically request the value of shared attribute.

{:refdef: style="text-align: center;"}
![image](https://img.thingsboard.io/user-guide/shared-attributes.svg)
{: refdef}

The most common use case of shared attributes is to store device settings.
Let's assume the same building monitoring solution and review few examples:

1. The *targetFirmwareVersion* attribute may be used to store the firmware version for particular Device.
2. The *maxTemperature* attribute may be used to automatically enable HVAC if it is too hot in the room. 

The user may change the attribute via UI. The script or other server-side application may change the attribute value via REST API.

#### Administration UI

{% include images-gallery.html imageCollection="shared-attrs-ui" %}

{% include templates/info-banner.md content=bulk_provisioning %}

#### REST API

Use [REST API](/docs/{{docsPrefix}}reference/rest-api/) documentation to get the value of the JWT token. You will use it to populate the 'X-Authorization' header and authenticate your REST API call request.

Send POST request with JSON representation of the attribute to the following URL:

```text
https://$YOUR_THINGSBOARD_HOST/api/plugins/telemetry/$ENTITY_TYPE/$ENTITY_ID/SHARED_SCOPE
```

The example below creates attribute with the name "newAttributeName" and value "newAttributeValue" for device with ID 'ad17c410-914c-11eb-af0c-d5862211a5f6' and ThingsBoard Cloud server:
```shell
curl -v 'https://thingsboard.cloud/api/plugins/telemetry/DEVICE/ad17c410-914c-11eb-af0c-d5862211a5f6/SHARED_SCOPE' \
-H 'x-authorization: Bearer $YOUR_JWT_TOKEN_HERE' \
-H 'content-type: application/json' \
--data-raw '{"newAttributeName":"newAttributeValue"}'
```
{: .copy-code}

Similar, you can fetch all shared attributes using the following command:

```shell
curl -v -X GET 'https://thingsboard.cloud/api/plugins/telemetry/DEVICE/ad17c410-914c-11eb-af0c-d5862211a5f6/values/attributes/SHARED_SCOPE' \
  -H 'x-authorization: Bearer $YOUR_JWT_TOKEN_HERE' \
  -H 'content-type: application/json' \
```
{: .copy-code}

The output will include 'key', 'value' and timestamp of the last update:

```json
[
    {
        "lastUpdateTs": 1617633139380,
        "key": "newAttributeName",
        "value": "newAttributeValue"
    }
]
```
{: .copy-code}

As an alternative to curl, you may use [Java](/docs/{{docsPrefix}}reference/rest-client/) or [Python](/docs/{{docsPrefix}}reference/python-rest-client/) REST clients.

#### API for device firmware or applications:

- request *shared* attributes from the server: [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/#request-attribute-values-from-the-server), [CoAP API](/docs/{{docsPrefix}}reference/coap-api/#request-attribute-values-from-the-server), [HTTP API](/docs/{{docsPrefix}}reference/http-api/#request-attribute-values-from-the-server), [LwM2M API](/docs/{{docsPrefix}}reference/lwm2m-api/#attributes-api);
- subscribe to *shared* attribute updates from the server: [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/#subscribe-to-attribute-updates-from-the-server), [CoAP API](/docs/{{docsPrefix}}reference/coap-api/#subscribe-to-attribute-updates-from-the-server), [HTTP API](/docs/{{docsPrefix}}reference/http-api/#subscribe-to-attribute-updates-from-the-server), [LwM2M API](/docs/{{docsPrefix}}reference/lwm2m-api/#attributes-api);.

{% capture missed_updates %}
If device went offline, it may miss the important attribute update notification. <br> We recommend to subscribe to attribute updates on application startup and request latest values of the attributes after each connect or reconnect.

{% endcapture %}
{% include templates/info-banner.md content=missed_updates %}

### Client-side attributes

This type of attributes is available only for Devices. It is used to report various semi-static data from Device (Client) to ThingsBoard (Server). 
It is similar to [shared attributes](/docs/{{docsPrefix}}user-guide/attributes/#shared-attributes), but has one important difference.
The device firmware/application may send the value of the attributes from device to the platform.

{:refdef: style="text-align: center;"}
![image](https://img.thingsboard.io/user-guide/client-side-attributes.svg)
{: refdef}

The most common use case of client attributes is to report device state.
Let's assume the same building monitoring solution and review few examples:

1. The *currentFirmwareVersion* attribute may be used to report the installed firmware/application version for the device to the platform.
2. The *currentConfiguration* attribute may be used to report current firmware/application configuration to the platform.
3. The *currentState* may be used to persist and restore current firmware/application state via network, if device does not have the persistent storage.

The user and server-side applications may browser the client-side attributes via UI/REST API but they are not able to change them. 
Basically, the value of the client-side attribute is read-only for the UI/REST API.

#### Fetch client-side attributes via REST API

Use [REST API](/docs/{{docsPrefix}}reference/rest-api/) documentation to get the value of the JWT token. You will use it to populate the 'X-Authorization' header and authenticate your REST API call request.

Send GET request to the following URL:

```text
https://$YOUR_THINGSBOARD_HOST/api/plugins/telemetry/$ENTITY_TYPE/$ENTITY_ID/CLIENT_SCOPE
```
{: .copy-code}

The example below gets all attributes for device with ID 'ad17c410-914c-11eb-af0c-d5862211a5f6' and ThingsBoard Cloud server:

```shell
curl -v -X GET 'https://thingsboard.cloud/api/plugins/telemetry/DEVICE/ad17c410-914c-11eb-af0c-d5862211a5f6/values/attributes/CLIENT_SCOPE' \
  -H 'x-authorization: Bearer $YOUR_JWT_TOKEN_HERE' \
  -H 'content-type: application/json' \
```
{: .copy-code}

The output will include 'key', 'value' and timestamp of the last update:

```json
[
    {
        "lastUpdateTs": 1617633139380,
        "key": "newAttributeName",
        "value": "newAttributeValue"
    }
]
```
{: .copy-code}

As an alternative to curl, you may use [Java](/docs/{{docsPrefix}}reference/rest-client/) or [Python](/docs/{{docsPrefix}}reference/python-rest-client/) REST clients.

#### API for device firmware or applications:

- publish *client-side* attributes to the server: [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/#publish-attribute-update-to-the-server), [CoAP API](/docs/{{docsPrefix}}reference/coap-api/#publish-attribute-update-to-the-server), [HTTP API](/docs/{{docsPrefix}}reference/http-api/#publish-attribute-update-to-the-server);
- request *client-side* attributes from the server: [MQTT API](/docs/{{docsPrefix}}reference/mqtt-api/#request-attribute-values-from-the-server), [CoAP API](/docs/{{docsPrefix}}reference/coap-api/#request-attribute-values-from-the-server), [HTTP API](/docs/{{docsPrefix}}reference/http-api/#request-attribute-values-from-the-server).

## Attributes persistence

ThingsBoard stores latest value of the attribute and last modification time in the SQL database. This enables use of [entity filters](/docs/{{docsPrefix}}user-guide/dashboards/#entity-filters) in the dashboards.
Changes to the attributes initiated by the user are recorded in the [audit logs](/docs/{{docsPrefix}}user-guide/audit-log/).
  
## Data Query API

Telemetry Controller provides the following REST API to fetch entity data:

![image](https://img.thingsboard.io/user-guide/telemetry-service/rest-api.png)

{% capture api_note %}
**NOTE:** The API listed above is available via Swagger UI. Please review the general [REST API](/docs/{{docsPrefix}}reference/rest-api/) documentation for more details.
The API is backward compatible with TB v1.0+ and this is the main reason why API call URLs contain "plugin".
{% endcapture %}
{% include templates/info-banner.md content=api_note %}

## Data visualization

We assume you have already provisioned device attributes. Now you may use them in your dashboards. We recommend [dashboards overview](/docs/{{docsPrefix}}user-guide/dashboards/) to get started.
Once you are familiar how to create dashboards and configure data sources, 
you may use [digital](/docs/{{docsPrefix}}user-guide/ui/widget-library/#digital-gauges) and [analog](/docs/{{docsPrefix}}user-guide/ui/widget-library/#analog-gauges) gauges to visualize 
temperature, speed, pressure or other numeric values. You may also use [cards](/docs/{{docsPrefix}}user-guide/ui/widget-library/#cards) to visualize multiple attributes using card or [entities table](/docs/{{docsPrefix}}user-guide/ui/entity-table-widget/).

You may also use [input widgets](/docs/{{docsPrefix}}user-guide/ui/widget-library/#input-widgets) to allow dashboard users to change the values of the attributes on the dashboards.

## Rule engine

The [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/) is responsible for processing all sorts of incoming data and event.
You may find most popular scenarios of using attributes within rule engine below:

**Generate alarms based on the logical expressions against attribute values**

Use [alarm rules](/docs/{{docsPrefix}}user-guide/device-profiles/#alarm-rules) to configure most common alarm conditions via UI 
or use [filter nodes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/filter-nodes/) to configure more specific use cases via custom JS functions.

**Modify incoming client-side attributes before they are stored in the database**

Use [message type switch](/docs/{{docsPrefix}}/user-guide/rule-engine-2-0/filter-nodes/#message-type-switch-node) rule node to filter messages that contain "Post attributes" request. 
Then, use [transformation rule nodes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/transformation-nodes/) to modify a particular message. 

**React on the change of server-side attribute**

Use [message type switch](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/filter-nodes/#message-type-switch-node) rule node to filter messages that contain "Attributes Updated" notification.
Then, use [action](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/) or [external](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/external-nodes/) to react on the incoming event.

**Fetch attribute values to analyze incoming telemetry from device**

Use [enrichment](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/enrichment-nodes/) rule nodes to enrich incoming telemetry message with attributes of the device, related asset, customer or tenant.
This is extremely powerful technique that allows to modify processing logic and parameters based on settings stored in the attributes. 

{% unless docsPrefix == "paas/" %}

## Performance enhancement

You can achieve higher performance with Attributes Cache enabled (see <b>cache.attributes.enabled</b> property of the [Configuration properties](/docs/user-guide/install/{{docsPrefix}}config/#thingsboard-core-settings)) 

Having attributes cache enabled ThingsBoard will load the specific attribute from the database only once, all subsequent requests to the attribute will be loaded from the faster cache connection.

**NOTE:** If you are using Redis cache, make sure that you change <b>maxmemory-policy</b> to <b>allkeys-random</b> to prevent Redis from filling up all available memory.

{% endunless %}

## Old video Tutorial

<div id="video">
  <div id="video_wrapper">
    <iframe src="https://www.youtube.com/embed/JCW_hShAp7I" frameborder="0" allowfullscreen=""></iframe>
  </div>
</div>
