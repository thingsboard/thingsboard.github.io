* TOC
{:toc}

ThingsBoard allows you to send Remote Procedure Calls (RPC) from server-side applications to devices and vice versa.
Basically, this feature allows you to send commands to devices and receive results of commands execution. 
Similarly, you can execute a request from the device, apply some calculations or other server-side logic on the back-end and send the response back to the device.
This guide covers ThingsBoard RPC capabilities. After reading this guide, you will get familiar with the following topics:

- RPC types;
- Basic RPC use-cases;
- RPC client-side and server-side APIs;
- RPC widgets.

## RPC call types

Thinsboard RPC feature can be divided into two types based on a originator: device-originated and server-originated RPC.
In order to use more familiar names, we will name device-originated RPC calls as a **client-side** RPC 
and server-originated RPC as **server-side** RPC.
  
   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/client-side-rpc.svg)
   {: refdef}  

Server-side RPC can be divided into one-way and two-way:
 
 - One-way RPC request is sent to the device without delivery confirmation and obviously does not provide any response from the device. 
   RPC may fail only if there is no active connection with the target device within a configurable timeout period.
   
   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/one-way-rpc.svg)
   {: refdef}
   
 - Two-way RPC request is sent to the device and expects to receive a response from the device within a certain timeout. 
   The Server-side request is blocked until the target device replies to the request.

   {:refdef: style="text-align: center;"}
   ![image](/images/user-guide/two-way-rpc.svg)
   {: refdef}


## Device RPC API

ThingsBoard provides a convenient API to send and receive RPC commands from applications running on the device.
This API is specific for each supported network protocol.
You can review API and examples on the corresponding reference page:

 - [MQTT RPC API reference](/docs/{{docsPrefix}}reference/mqtt-api/#rpc-api)
 - [CoAP RPC API reference](/docs/{{docsPrefix}}reference/coap-api/#rpc-api)
 - [HTTP RPC API reference](/docs/{{docsPrefix}}reference/http-api/#rpc-api) 

## Server-side RPC API

ThingsBoard provides **System RPC Service** that allows you to send RPC calls from server-side applications to the device.
In order to send an RPC request you need to execute an HTTP POST request to the following URL:

```shell
http(s)://host:port/api/plugins/rpc/{callType}/{deviceId}
```

where 

 - **callType** is either **oneway** or **twoway**;
 - **deviceId** is your target [Device ID](/docs/{{docsPrefix}}user-guide/ui/devices/#get-device-id).

The request body should be a valid JSON object with two elements: 
 
 - **method** - method name, JSON string;
 - **params** - method parameters, JSON object.

For example:

{% capture tabspec %}mqtt-rpc-from-client
A,set-gpio-request.sh,shell,resources/set-gpio-request.sh,/docs/{{docsPrefix}}user-guide/resources/set-gpio-request.sh
B,set-gpio-request.json,json,resources/set-gpio-request.json,/docs/{{docsPrefix}}user-guide/resources/set-gpio-request.json{% endcapture %}  
{% include tabs.html %}

**Please note** that in order to execute this request, you will need to substitute **$JWT_TOKEN** with a valid JWT token.
This token should belong to either 

 - user with **TENANT_ADMIN** role;
 - user with **CUSTOMER_USER** role that owns the device identified by **$DEVICE_ID**.
 
You can use the following [guide](/docs/{{docsPrefix}}reference/rest-api/#rest-api-auth) to get the token.

## Persistent RPC

Since version 3.3, ThingsBoard provides the new feature **Persistent RPC**.
Unlike basic RPC, Persistent RPC has an increased timeout and the request ID is stored in the database for configurable amount of time.
In addition, every time you send the Persistent RPC, the response will contain RPC ID. 
Whenever you need to find a specific RPC request and view its states and responses, you can do it using that ID through the database.

If you use [Debug Terminal widget](/docs/{{docsPrefix}}user-guide/rpc/#usage-of-persistent-rpc), you should check the box to enable "RPC Request Persistent" in the Advanced settings.
However, if you send request using the Rule Chain, you need to add "persistent" : "true" to the metadata of RPC request.

#### RPC Rule chain events 

In the Rule chain, you are able to configure events that will be dispatched every time you send an RPC request: RPC queued, RPC sent, RPC delivered, RPC successful, RPC timeout, RPC expired, RPC failed and RPC deleted.
Configured RPC events reflect [RPC states](/docs/{{docsPrefix}}user-guide/rpc/#rpc-states).

{% include images-gallery.html imageCollection="rule-chain" %}

#### Adding RPC debug terminal widget

To send persistent RPC request through ThingsBoard, first, you need to add the RPC Debug Terminal widget to your dashboard. 
So let's add this widget and then test it:

{% include images-gallery.html imageCollection="add-debug" showListImageTitles="true" %}

#### Usage of Persistent RPC

Let's follow these steps to test the Persistent RPC:

{% include images-gallery.html imageCollection="rpc-test" showListImageTitles="true" %}

#### Persistent RPC States

Once you send an RPC request, you can observe what exactly happened to it in the Rule node events tab.
RPC states determine steps that happen when you send RPC request. There are five possible states that can occur when the request is sent:

**QUEUED** - RPC was saved to the database; 
**SENT** - RPC was sent to the device;
**DELIVERED** - RPC was delivered to the device (for two-way RPC);  
**SUCCESSFUL** - if RPC is one-way, SUCCESSFUL means that RPC was delivered to the device. If RPC is two-way, SUCCESSFUL means that we've already received response from the device;  
**TIMEOUT** - RPC was not delivered to the device;  
**EXPIRED** - configured expiration time ran out, the response from the device wasn't received;
**FAILED** - an error occurred either while sending RPC, or during one of the steps;
**DELETED** - the request ID was deleted from the queue, and the database.

#### Persistent RPC TTL

In case, you wouldn't like to store the outdated RPC requests, you are able to configure their deletion.
To do this, you should edit the ThingsBoard configuration file:

```
sudo nano /etc/thingsboard/conf/thingsboard.conf
```
{: .copy-code}

And add the following parameters:

```
export SQL_TTL_RPC_ENABLED=true
export SQL_RPC_TTL_CHECKING_INTERVAL=7200000
```
{: .copy-code}

Where:

1. **SQL_TTL_RPC_ENABLED** <br>parameter is for configuring whether Persistent RPC data will be deleted from the database in case it's outdated.

2. **SQL_RPC_TTL_CHECKING_INTERVAL** <br>parameter is for configuring how often Persistent RPC will be checked whether it's outdated. By default, this parameter is set to two hours (in milliseconds).

The system administrator can configure the default parameter for the tenants through the Tenant Profiles. This is **RPC TTL days configuration** parameter.
Configuring this parameter will change the number of days when RPC will be deleted from the database.

{% include images-gallery.html imageCollection="tenant-profile-rpc" %}

#### Power-saving mode (PSM)

Persistent RPC is extremely useful when your device is in power-saving mode.
Power-saving mode (or PSM) is when the device temporarily is turning off to conserve the battery power.
This feature only works for CoAP and LWM2M transport types.
You can set the PSM in the device profile or in the device configuration. To do this, you should:

{% include images-gallery.html imageCollection="psm-deviceprofile" showListImageTitles="true" %}

For clarity, let's create a new device with the same device profile and configure PSM using the device settings:

{% include images-gallery.html imageCollection="device-psm" showListImageTitles="true" %}

After you've sent the RPC request to the device, the request will be saved in the database for the time that you configured.
The device will then receive a request and send a response when it is turned on again.

## RPC Rule Nodes
It is possible to integrate RPC actions into processing workflow. There are 2 Rule Nodes for working with RPC requests. 

-  [RPC reply](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#rpc-call-reply-node) 
-  [RPC request](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#rpc-call-request-node) 

## RPC widgets

See [widgets library](/docs/{{docsPrefix}}user-guide/ui/widget-library/#gpio-widgets) for more details.