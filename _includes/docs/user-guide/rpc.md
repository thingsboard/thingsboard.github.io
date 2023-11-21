* TOC
{:toc}

ThingsBoard allows you to send Remote Procedure Calls (RPC) from server-side applications to devices and vice versa.
Basically, this feature allows you to send commands to/from devices and receive results of commands execution. 
This guide covers ThingsBoard RPC capabilities. After reading this guide, you will get familiar with the following topics:

- RPC types;
- Basic RPC use-cases;
- RPC client-side and server-side APIs;
- RPC widgets.

ThingsBoard RPC feature may be divided into two types based on the originator of the remote procedure execution:device-originated and server-originated RPC.
In order to use more familiar names, we will name device-originated RPC calls as a **client-side** RPC and server-originated RPC as **server-side** RPC.

## Client-side RPC

Client-side RPC feature allows you to send the request **from the device to the platform** and get the response back to the device.

Let's review typical use cases of the client-side RPC calls:

* Irrigation system gets the weather forecast from the online service through the platform.
* Constrained device without system clock requests the current timestamp from the platform.
* Access Control card reader sends the request to third-party security system to make a decision to open the door and log access.

Under the hood, device sends a message to the platform, which is processed by the [Rule Engine](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/).
The Rule Engine may apply some calculations using device attributes, telemetry or any other data stored in the platform. 
Rule Engine may also invoke external system if needed. Once the message is processed, the result is sent back to the device. 
See the diagram below:

   {:refdef: style="text-align: center;"}
   ![image](https://img.thingsboard.io/user-guide/client-side-rpc.svg)
   {: refdef}

The client-side RPC request consists of two fields, both of them are mandatory:

* **method** - name of the method to distinct the RPC calls.
  For example, "getCurrentTime" or "getWeatherForecast". The value of the parameter is a string.
* **params** - additional parameters used for processing of the request. The value is a JSON. Leave empty JSON "{}" if no parameters needed.

Example of the RPC request:

```json
{
   "method": "getCurrentTime",
   "params": {}
}
```
{: .copy-code}

The RPC response may be any number, string or JSON. For example:

```text
1631881236974
```

#### Sending the client-side RPC from the device

ThingsBoard provides an API to send RPC commands from the device.
The API is specific for each supported network protocol.
You may review the API and examples on the corresponding reference page:

- [MQTT client-side RPC API reference](/docs/{{docsPrefix}}reference/mqtt-api/#client-side-rpc)
- [CoAP client-side RPC API reference](/docs/{{docsPrefix}}reference/coap-api/#client-side-rpc)
- [HTTP client-side RPC API reference](/docs/{{docsPrefix}}reference/http-api/#client-side-rpc)

LwM2M and SNMP protocols do not support the client-side RPC yet.

#### Processing the client-side RPC by the platform

The client-side RPC command is transformed to the Rule Engine 
message with the "TO_SERVER_RPC_REQUEST" [message type](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types). 
The message contains unique UUID based identifier that is stored in the "requestId" metadata field. 
You may design your [Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain) 
to process the incoming message using transformation, enrichment or any other 
rule node [type](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-types). 
Once the incoming message is transformed to the response message, 
one should use [RPC Call Reply](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#rpc-call-reply-node) node to send reply to the device.

For example, let's modify root Rule Chain to process "getCurrentTime" client-side RPC and reply with the current time in milliseconds.
We will use "Script" transformation node with the following JS code:

```javascript
var rpcResponse;
if (msg.method === "getCurrentTime"){
   rpcResponse = new Date().getTime();
} else {
   rpcResponse = "Unknown RPC request method: " + msg.method;  
}
return {msg: rpcResponse, metadata: metadata, msgType: msgType};
```
{: .copy-code}

{% include images-gallery.html imageCollection="client-side-rpc-rule-chain" %}

## Server-side RPC

Server-side RPC feature allows you to send the request **from the platform to the device** and optionally get the response back to the platform.

The typical use cases of the server-side RPC calls is all sorts of remote control: 
reboot, turn the engine on/off, change state of the gpio/actuators, change configuration parameters, etc.

Server-side RPC is divided into one-way and two-way:
 
 - One-way RPC request does not expect device to provide any reply.  
   
   {:refdef: style="text-align: center;"}
   ![image](https://img.thingsboard.io/user-guide/one-way-rpc.svg)
   {: refdef}
   
 - Two-way RPC request expects to receive a response from the device within configurable timeout.

   {:refdef: style="text-align: center;"}
   ![image](https://img.thingsboard.io/user-guide/two-way-rpc.svg)
   {: refdef}
   

Before version 3.3, ThingsBoard supported **lightweight** RPC only. 
The lightweight RPC calls are short-lived, typically within 30 seconds which is the default timeout of any REST API call to the platform.
Since they are short-lived, there was no reason for storing them to the database. 
They lived in memory of the server, assuming that if server dies, the dashboard widget will send the same request to other ThingsBoard server in the cluster.
The lightweight RPC consume low amount of resources since their processing does not invoke any input/output operations accept storing of the audit logs and rule engine messages.

Since version 3.3, ThingsBoard provides support of [**persistent**](#persistent-rpc) RPC calls.
Persistent RPC has a configurable lifetime and is stored in the database.
Persistent RPC is extremely useful when your device may not be reachable for long period of time. 
This typically happens in case of poor network connection or [Power-Saving Mode](/docs/{{docsPrefix}}user-guide/psm) (PSM).

#### Server-side RPC structure

The body of server-side RPC request consists of multiple fields:

* **method** - mandatory, name of the method to distinct the RPC calls.
  For example, "getCurrentTime" or "getWeatherForecast". The value of the parameter is a string.
* **params** - mandatory, parameters used for processing of the request. The value is a JSON. Leave empty JSON "{}" if no parameters needed.
* **timeout** - optional, value of the processing timeout in milliseconds. The default value is 10000 (10 seconds). The minimum value is 5000 (5 seconds).
* **expirationTime** - optional, value of the epoch time (in milliseconds, UTC timezone). Overrides **timeout** if present.
* **persistent** - optional, see [persistent] vs [lightweight] RPC. The default value is "false".
* **retries** - optional, defines how many times persistent RPC will be re-sent in case of failures on the network and/or device side.
* **additionalInfo** - optional, defines metadata for the persistent RPC that will be added to the [persistent RPC events].

Example of the RPC request:

```json
{
   "method": "setGPIO",
   "params": {
     "pin": 4,
     "value": 1
   },
  "timeout": 30000
}
```
{: .copy-code}

The RPC response may be any JSON. For example:

```json
{
   "pin": 4,
   "value": 1,
   "changed": true
}
```

#### Sending server-side RPC

The server-side RPC are typically sent using REST API or dashboard widgets. In fact, dashboard widgets use the same REST API. 
Once platform received the RPC, it validates the payload and runs permission checks.
Then, server-side RPC command is transformed to the Rule Engine message.
The Rule Engine may enrich the command with additional parameters and finally issues delivery of the command to the device.

Let's review how to send the command in details:

##### Using the REST API

In order to send an RPC request you need to execute an HTTP POST request to the following URL:

```shell
http(s)://host:port/api/plugins/rpc/{callType}/{deviceId}
```

where

- **http(s)://host:port** is your ThingsBoard server base URL. For example, [https://thingsboard.cloud](https://thingsboard.cloud)
- **callType** is either **oneway** or **twoway**;
- **deviceId** is your target [Device ID](/docs/{{docsPrefix}}user-guide/ui/devices/#get-device-id).

The request body should be a valid JSON with RPC request object we discussed [above](#server-side-rpc-structure).

For example:

{% capture tabspec %}mqtt-rpc-from-client
A,set-gpio-request.sh,shell,resources/set-gpio-request.sh,/docs/{{docsPrefix}}user-guide/resources/set-gpio-request.sh
B,set-gpio-request.json,json,resources/set-gpio-request.json,/docs/{{docsPrefix}}user-guide/resources/set-gpio-request.json{% endcapture %}  
{% include tabs.html %}

**Please note** that in order to execute this request, you will need to substitute **$JWT_TOKEN** with a valid [JWT](https://jwt.io/) access token.
This token should belong to the user with either **TENANT_ADMIN** or **CUSTOMER_USER** role that owns the device identified by **$DEVICE_ID**.
Use the following [guide](/docs/{{docsPrefix}}reference/rest-api/#rest-api-auth) to get the token.

When user sends the **lightweight** RPC via REST API, the API call contains reply from the device or the error code. For example:

```json
{
   "pin": 4,
   "value": 1,
   "changed": true
}
```


When user sends the **persistent** RPC via REST API, the response contains the unique identifier "rpcId". For example:

```json
{
   "rpcId": "b10bb1a0-0afd-11ec-a08f-1b3182194747"
}
```
You may use this identifier to track the state of the command. See persistent RPC [states](#persistent-rpc-states) for more details.


##### Using the Dashboard

The [Control Widgets](/docs/{{docsPrefix}}user-guide/ui/widget-library/#rpc-control-widget) are used to send RPC commands to the device.
The most popular widgets are "RPC Button", "Round Switch", "Switch Control" and "Knob Control". 
The advanced settings of those widgets allow you to define RPC method name and params.
You may also develop [custom widgets](/docs/{{docsPrefix}}user-guide/contribution/widgets-development) and use [control api](/docs/{{docsPrefix}}user-guide/contribution/widgets-development/#control-api) to send RPC commands.

##### Using the Rule Engine

All server-side RPC commands that are sent from the widgets or REST API are eventually transformed to the rule engine message 
with the "RPC_CALL_FROM_SERVER_TO_DEVICE" [message type](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#predefined-message-types).

The message contains unique UUID based identifier that is stored in the "requestUUID" metadata field.
You may design your [Rule Chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain)
to process the incoming message using transformation, enrichment or any other
rule node [type](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node-types).
Finally, one should use [RPC Call Request](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#rpc-call-request-node) node to send the message to the device.

You may also create the RPC using generator node:

```javascript
var msg = { method: "rpcCommand", params: {} };
var metadata = { 
    expirationTime: new Date().getTime() + 60000,
    oneway: true,
    persistent: false
};
var msgType = "RPC_CALL_FROM_SERVER_TO_DEVICE";

return { msg: msg, metadata: metadata, msgType: msgType };
```

{% include images-gallery.html imageCollection="server-side-rpc-rule-chain" %}

#### Processing server-side RPC on the device

ThingsBoard provides a convenient API to receive and process server-side RPC commands on the device.
This API is specific for each supported network protocol.
You can review API and examples on the corresponding reference page:

 - [MQTT RPC API reference](/docs/{{docsPrefix}}reference/mqtt-api/#rpc-api)
 - [CoAP RPC API reference](/docs/{{docsPrefix}}reference/coap-api/#rpc-api)
 - [HTTP RPC API reference](/docs/{{docsPrefix}}reference/http-api/#rpc-api) 


#### Persistent RPC

##### States

ThingsBoard tracks state of the persistent RPC. There are 7 available states:

{% if docsPrefix == 'paas/' %}

* **QUEUED** - RPC was created and saved to the database; 
  No attempt to send the RPC to device yet; 
  ThingsBoard will attempt to send the RPC immediately when device becomes online or if it is already online;
  The platform will attempt to send all pending RPC calls at once by default. 
  In rare cased of constrained devices and multiple messages in the queue this may lead to overload of the network or device.
* **SENT** - ThingsBoard performed attempt to send the RPC to device.
* **DELIVERED** - device confirmed that the RPC was delivered; This is the last step of processing for **one-way** RPC;   
* **SUCCESSFUL** - ThingsBoard received reply for the **two-way** RPC;  
* **TIMEOUT** - ThingsBoard transport layer (MQTT/CoAP/LwM2M, etc) detected timeout of the RPC delivery;
The timeout is controlled using one of the corresponding configuration parameters: 
MQTT_TIMEOUT (10 seconds by default), COAP_TIMEOUT (10 seconds by default), LWM2M_TIMEOUT (120 seconds by default)
By default, platform will not retry delivery of the RPC, and the state will change to FAILED.
You may configure number of retries in the RPC body. 
The maximum number of retries is 5 by default.
* **EXPIRED** - The RPC was not delivered or platform did not receive the reply from device within configured expiration time;
* **FAILED** - failed to deliver the RPC during configurable number of retries or device firmware does not support such a command.

{% else %}

* **QUEUED** - RPC was created and saved to the database;
  No attempt to send the RPC to device yet;
  ThingsBoard will attempt to send the RPC immediately when device becomes online or if it is already online;
  The platform will attempt to send all pending RPC calls at once by default.
  In rare cased of constrained devices and multiple messages in the queue this may lead to overload of the network or device.
  To avoid the overload, you may enable sequential delivery of RPC calls using "ACTORS_RPC_SEQUENTIAL" [configuration](/docs/user-guide/install/{{docsPrefix}}config/) parameter.
* **SENT** - ThingsBoard performed attempt to send the RPC to device.
* **DELIVERED** - device confirmed that the RPC was delivered; This is the last step of processing for **one-way** RPC;
* **SUCCESSFUL** - ThingsBoard received reply for the **two-way** RPC;
* **TIMEOUT** - ThingsBoard transport layer (MQTT/CoAP/LwM2M, etc) detected timeout of the RPC delivery;
  The timeout is controlled using one of the corresponding [configuration](/docs/user-guide/install/{{docsPrefix}}config/) parameters:
  MQTT_TIMEOUT (10 seconds by default), COAP_TIMEOUT (10 seconds by default), LWM2M_TIMEOUT (120 seconds by default)
  By default, platform will not retry delivery of the RPC, and the state will change to FAILED.
  You may configure number of retries in the RPC body.
  The maximum number of retries is controlled by "ACTORS_RPC_MAX_RETRIES" [configuration](/docs/user-guide/install/{{docsPrefix}}config/) parameter (5 by default).
* **EXPIRED** - The RPC was not delivered or platform did not receive the reply from device within configured expiration time;
* **FAILED** - failed to deliver the RPC during configurable number of retries or device firmware does not support such a command.

{% endif %}

{% capture sequential-rpc-deadlock-warning %}
Be careful while configuring sequential RPC delivery in combination with increased expiration time, delivery timeout and number of retries.
If sequential RPC delivery is enabled and your device will not be able to handle specific two-way RPC command, other commands will not be sent to this device.  
{% endcapture %}
{% include templates/info-banner.md content=sequential-rpc-deadlock-warning %} 

##### Rule chain events 

Changes to the [RPC states](/docs/{{docsPrefix}}user-guide/rpc/#rpc-states) are pushed to the Rule Engine as separate messages. 
Each RPC state has corresponding message type. See image below:

{% include images-gallery.html imageCollection="rule-chain" %}

The message contains exhaustive information about the RPC request, including entity ids and "additionalInfo" from the RPC request body. 
The "RPC Successful" message also contains reply from the device. 
These messages are useful if you would like to process the reply from the device in the external system.

See example of successful RPC message below:

```json
{
    "id": {
        "entityType": "RPC",
        "id": "bea26301-1aec-11ec-9441-73a37bbb7cd2"
    },
    "createdTime": 1632236465459,
    "tenantId": {
        "entityType": "TENANT",
        "id": "ab937a40-3f98-11eb-a8d6-f5a87f07d4be"
    },
    "deviceId": {
        "entityType": "DEVICE",
        "id": "3e46db70-e480-11eb-9d0e-1f8899a6f9b3"
    },
    "expirationTime": 1632236525354,
    "request": {
        "id": "bea26301-1aec-11ec-9441-73a37bbb7cd2",
        "tenantId": {
            "entityType": "TENANT",
            "id": "ab937a40-3f98-11eb-a8d6-f5a87f07d4be"
        },
        "deviceId": {
            "entityType": "DEVICE",
            "id": "3e46db70-e480-11eb-9d0e-1f8899a6f9b3"
        },
        "oneway": false,
        "expirationTime": 1632236525354,
        "body": {
            "method": "rpcCommand",
            "params": "{}"
        },
        "persisted": true,
        "retries": null
    },
    "response": {
        "test": "passed"
    },
    "status": "SUCCESSFUL",
    "additionalInfo": "{\"param1\":\"value1\",\"param2\":\"value2\"}"
}
```


##### TTL configuration

{% if docsPrefix == 'paas/' %}

The time-to-live of persistent RPC depends on the subscription plan. See 'RPC TTL' parameter in [Subscriptions](/products/paas/subscription/) for more details.

{% else %}
The time-to-live of persistent RPC is configured by the System Administrator in the [Tenant Profile](/docs/{{docsPrefix}}user-guide/tenant-profiles/) using **RPC TTL days configuration** parameter.
The System administrator may completely disable the cleanup of the persistent RPC from the database using **SQL_TTL_RPC_ENABLED** [configuration](/docs/user-guide/install/{{docsPrefix}}config/) parameter.
The frequency of RPC cleanup procedure is controlled using **SQL_RPC_TTL_CHECKING_INTERVAL** parameters which is set to 2 hours by default.

{% include images-gallery.html imageCollection="tenant-profile-rpc" %}
{% endif %}