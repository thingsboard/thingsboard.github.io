* TOC
{:toc}


## Prerequisites

We assume you have completed the general [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide to get familiar with ThingsBoard.

## LwM2M basics

[LwM2M](https://en.wikipedia.org/wiki/OMA_LWM2M) is a device management protocol designed for constrained devices and the demands of a machine-to-machine (M2M) environment.
You can find more information about LwM2M [here](https://omaspecworks.org/what-is-oma-specworks/iot/lightweight-m2m-LWM2M/).
Key advantage of the LwM2M protocol is a rich library of data structures that is called [LwM2M Object and Resource Registry](http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html).
The up-to-date list of available objects is available inside [this](https://github.com/OpenMobileAlliance/lwm2m-registry) Github repository.

The registry allows efficient serialization/deserialization of telemetry.
LwM2M Protocol defines process of device registration, configuration, management and firmware/software updates.

ThingsBoard implements both LwM2M server and bootstrap server that supports plain UDP and DTLS (secure transport over UDP).
ThingsBoard allows you to provision own LwM2M models (objects and resources) and [map](/docs/{{docsPrefix}}reference/lwm2m-api/#step-2-define-lwm2m-device-profile) those objects to ThingsBoard telemetry and attributes.
The platform also supports typical [LwM2M commands](/docs/{{docsPrefix}}reference/lwm2m-api/#rpc-commands) using RPC calls.

## Getting started

This part of documentation covers provisioning of your first LwM2M device in ThingsBoard. We will use [Eclipse Wakaama](https://github.com/eclipse/wakaama#test-client-example) test client to simulate LwM2M device.

### Step 1. Upload LwM2M models

System administrator is able to upload LwM2M models using "Resource library" UI located in the "System settings" menu.
One may upload multiple files at once. We recommend you to download list of available models from official [github](https://github.com/OpenMobileAlliance/lwm2m-registry) repo and import all of them.

{% include images-gallery.html imageCollection="upload-models" showListImageTitles="true" %}

<p> Tenant administrator is able to use LwM2M models defined by system administrator or overwrite them for the specific tenant.</p>

{% include images-gallery.html imageCollection="upload-tenant" showListImageTitles="true" %}


### Step 2. Define LwM2M device profile

Once you upload the LwM2M models, you are ready to use them to define the device profile.
See general device profile [documentation](/docs/{{docsPrefix}}user-guide/device-profiles/) for more info about device profiles.
The important step is to chose LwM2M Transport type on the "Transport configuration" step.
The Transport Configuration allows us to define list of the LwM2M Objects that your devices supports.

{% include images-gallery.html imageCollection="device-profile" showListImageTitles="true" %}

Let's define a profile that supports Device Object (id: 3), Connectivity (id: 4), Firmware Update (id: 5) and Location monitoring (id: 6):

{% include images-gallery.html imageCollection="device-objects" showListImageTitles="true" %}

You may notice that Device Object supports Manufacturer, model, and serial numbers. Let’s configure ThingsBoard to fetch
those data when device connects and store it as ThingsBoard attributes.
Also we want to observe Radio Signal Strength, Link Quality and device location push it as ThingsBoard telemetry.
Observe is a powerful LwM2M feature that will instruct a device to report changes of those values.
You may also define conditions for reporting specific resource via LwM2M attributes. These settings are covered in the [advanced](#object-and-resource-attributes) documentation.

{% include images-gallery.html imageCollection="data-fetch" showListImageTitles="true" %}

Note: if you un-check all items from the Object(Telemetry, Attributes, Observe) - this object will not be displayed in the
device profile.

Transport Configuration also allows you to define [bootstrap](/docs/{{docsPrefix}}reference/lwm2m-api/#bootstrap) and [other](#other-settings) settings.

### Step 3. Define LwM2M device credentials

We assume you have already created LwM2M device profile using the previous step.

Now, let's create the device using our profile and configure LwM2M Credentials.
ThingsBoard supports 4 different types of credentials: Pre-Shared Key (PSK), Raw Public Ket (RPK), X.509 Certificates and "No Security" mode.

{% include images-gallery.html imageCollection="device-credentials" showListImageTitles="true" %}

For simplicity, we will connect device using plain UDP and "No Security" mode.
To connect such a device we just need to specify it's endpoint name in the device credentials.

{% include images-gallery.html imageCollection="nosecurity-credentials" showListImageTitles="true" %}

You may use other types of credentials with the DTLS mode enabled. See [DTLS configuration](#dtls-configuration) for more info.

### Step 4. Connect the device

We assume you have already provisioned LwM2M device credentials using the previous step and also built Eclipse Wakaama [test client](https://github.com/eclipse/wakaama#test-client-example).
Now you are ready to turn on the device and observe the incoming telemetry.

Let's launch the test client:

```ruby
./lwm2mclient -h lwm2m.thingsboard.cloud -n UniqueEndpointName -p 5685 -c
```
{: .copy-code}

Where
* 'lwm2m.thingsboard.cloud' is the host name of the LwM2M server;
* '5685' is the port of LwM2M server;
* 'UniqueEndpointName' is the unique name of your endpoint. Please replace this with IMEI or other unique ID.


The LwM2M transport implementation also stores the logs of communication with the device into telemetry. You should see the "transportLog" in the device telemetry tab.

{% include images-gallery.html imageCollection="wakaama-terminal" showListImageTitles="true" %}

## RPC Commands

LwM2M transport supports [RPC](/docs/{{docsPrefix}}user-guide/rpc/) commands that reflect subset of
[Device Management and Service Enablement Interface](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#6-3-0-63-Device-Management-and-Service-Enablement-Interface)
and
[Information Reporting interface](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#6-4-0-64-Information-Reporting-Interface).

The Device Management and Service Enablement Interface is used by the LwM2M Server to access Object Instances and Resources available from a registered LwM2M Client. The operations that a Resource supports are defined in the Object definition using the Object Template.

The Information Reporting Interface is used by a LwM2M Server to observe any changes in a Resource on a registered LwM2M Client, receiving notifications when new values are available. This observation relationship is initiated by sending an "Observe" or "Observe-Composite" operation to the L2M2M Client for an Object, an Object Instance or a Resource. An observation ends when a "Cancel Observation" or "Cancel Observation-Composite" operation is performed.

We will use the [Debug Terminal]([RPC](/docs/{{docsPrefix}}user-guide/rpc/) )  widget to send commands to the device.


To execute attribute - oriented commands there are two ways to specify the target resource: by Resource ID and by the Key.

Resource  ID is the combination of "/ObjectId/ObjectInstance/ResourceID" numbers,
Where:

* 'ObjectId' Indicates the Object number. Objects used to group resources on the device, related to a certain functionality.
* 'ObjectInstance' Indicates the Object Instance to read.
* 'ResourceID' Indicates the Resource to read.

Example:
```ruby
Read {"id":"/3/0/9"}
```
{: .copy-code}

Key is a custom user-friendly name, assigned to a certain attribute:

Example:
```ruby
Read {"key":"batteryLevel"}
```
{: .copy-code}

To be able to use the Key, you have to assign it to the attribute in the Device Profile configuration section:
* Go to the Device Profiles page;
* Click the Profile name;
* Click the “pencil” button on the top-right corner to edit profile;
* Go to Transport configuration tab;
* Switch to LWM2M Model tab;
* Select the target object and expand the Attributes list;
* Tick the “Attribute” checkbox on the desired attribute and type the Key name;
* Click save.

{% include images-gallery.html imageCollection="device-objects-ce" %}

Below you can find examples of usage for commands that are supported by the Thingsboard platform for LWM2M protocol. Please note that your target client may not support all of them, please refer to the client’s documentation for detailed information on supported commands.


### Read Operation

The "Read" operation is used to access the value of a Resource, a Resource Instance, an array of Resource Instances,
an Object Instance or all the Object Instances of an Object.

<b> Example: Read the value of the resource by ID</b>

```ruby
# Request:
Read {"id":"/3/0/9"}

# Response:
{"result":"CONTENT","value":"LwM2mSingleResource [id=9, value=100, type=INTEGER]"}
```
{: .copy-code}

<b> More examples:</b>
<br>

<details>
<summary>
<b>Read the value of the resource by ID and version</b>
</summary>
{% highlight ruby %}

# Request:
Read {"id":"/3_1.0/0/9"}

# Response:
{"result":"CONTENT","value":"LwM2mSingleResource [id=9, value=20, type=INTEGER]"}

{% endhighlight %}
</details>

<details>
<summary>
<b>Read the value of the resource by the key</b>
</summary>
{% highlight ruby %}
# Request:
Read {"key":"batteryLevel"}

# Response:
{"result":"CONTENT","value":"LwM2mSingleResource [id=9, value=27, type=INTEGER]"}
{% endhighlight %}
</details>

<details>
<summary>
<b>Read the object instance</b>
</summary>
{% highlight ruby %}
# Request:
Read {"id":"/3/0"}

# Response:
{"result":"CONTENT","value":"LwM2mObjectInstance [id=0, resources={0=LwM2mSingleResource [id=0, value=Thingsboard Test Device, 
type=STRING], 1=LwM2mSingleResource [id=1, value=Model 500, type=STRING], 2=LwM2mSingleResource [id=2, value=TH-500-000-0001, 
type=STRING], 3=LwM2mSingleResource [id=3, value=TestThingsboard@TestMore1024_2.04, type=STRING], 6=LwM2mSingleResource [id=6, 
value=1, type=INTEGER], 7=LwM2mSingleResource [id=7, value=96, type=INTEGER], 8=LwM2mSingleResource [id=8, value=37, type=INTEGER], 
9=LwM2mSingleResource [id=9, value=75, type=INTEGER], 10=LwM2mSingleResource [id=10, value=110673, type=INTEGER], 
11=LwM2mMultipleResource [id=11, values={0=LwM2mResourceInstance [id=0, value=1, type=INTEGER]}, type=INTEGER], 13=LwM2mSingleResource 
[id=13, value=Thu Jul 01 16:39:49 EEST 2021, type=TIME], 14=LwM2mSingleResource [id=14, value=+03, type=STRING], 15=LwM2mSingleResource 
[id=15, value=Europe/Kiev, type=STRING], 16=LwM2mSingleResource [id=16, value=U, type=STRING], 17=LwM2mSingleResource
[id=17, value=smart meters, type=STRING], 18=LwM2mSingleResource [id=18, value=1.01, type=STRING], 19=LwM2mSingleResource [id=19, 
value=1.02, type=STRING], 20=LwM2mSingleResource [id=20, value=2, type=INTEGER], 21=LwM2mSingleResource [id=21, value=256000, type=INTEGER]}]"}
{% endhighlight %}
</details>

### Discover Operation

The "Discover" operation is used to discover LwM2M Attributes attached to an Object, Object Instances, and Resources.
This operation can be used to discover which Resources are instantiated in a given Object Instance. The returned payload
is a list of application/link-format CoRE Links [RFC6690] for each targeted Object, Object Instance, or Resource, along
with their assigned or attached Attributes including the Object Version attribute if required.

<b> Example: Discover resources attached to an object </b>

```ruby
# Request:
Discover {"id":"/3"}

# Response:
{"result":"CONTENT","value":"</3>,</3/0/0>,</3/0/1>,</3/0/2>,</3/0/3>,</3/0/4>,</3/0/5>,</3/0/6>,</3/0/7>,</3/0/8>,</3/0/9>,</3/0/10>,</3/0/11>,</3/0/12>,</3/0/13>,</3/0/
14>,</3/0/15>,</3/0/16>"}
```
{: .copy-code}


<b> More examples:</b>
<br>

<details>
<summary>
<b>Discover all resources on the client</b>
</summary>
{% highlight ruby %}
# Request:
DiscoverAll

# Response:
{"result":"CONTENT","value":"[{\"url\":\"/\",\"attributes\":{\"ct\":\"110\",\"rt\":\"\\\"oma.lwm2m\\\"\"}},{\"url\":\"/1\",\"attributes\":{\"ver\":\"1.1\"}},{\"url\":\"/1
/0\",\"attributes\":{}},{\"url\":\"/2/0\",\"attributes\":{}},{\"url\":\"/3/0\",\"attributes\":{}},{\"url\":\"/4/0\",\"attributes\":{}},{\"url\":\"/5/0\",\"attributes\":{}
},{\"url\":\"/6/0\",\"attributes\":{}},{\"url\":\"/7/0\",\"attributes\":{}},{\"url\":\"/31024\",\"attributes\":{\"ver\":\"1.0\"}},{\"url\":\"/31024/10\",\"attributes\":{}
},{\"url\":\"/31024/11\",\"attributes\":{}},{\"url\":\"/31024/12\",\"attributes\":{}}]"}
{% endhighlight %}
</details>

<details>
<summary>
<b>Discover resources attached to the object instance</b>
</summary>
{% highlight ruby %}
# Request:
Discover {"id":"/3/0"}

# Response:
{"result":"CONTENT","value":"</3/0>,</3/0/0>,</3/0/1>,</3/0/2>,</3/0/3>,</3/0/4>,</3/0/5>,</3/0/6>,</3/0/7>,</3/0/8>,</3/0/9>,</3/0/10>,</3/0/11>,</3/0/12>,</3/0/13>,</3/
0/14>,</3/0/15>,</3/0/16>"}
{% endhighlight %}
</details>

<details>
<summary>
<b>Discover if the resource is instantiated by Id</b>
</summary>
{% highlight ruby %}
# Request:
Discover {"id":"/3/0/1"}

# Response:
{"result":"CONTENT","value":"</3/0/1>"}
{% endhighlight %}
</details>

<details>
<summary>
<b>Discover if the attribute is instantiated by the Key</b>
</summary>
{% highlight ruby %}
# Request:
Discover {"key":"batteryLevel"}

# Response:
{"result":"CONTENT","value":"</3/0/9>"}
{% endhighlight %}
</details>

### Write Operation

The "Write" operation is used to change the value of a Resource, the value of a Resource Instance, the values of an array
of Resources Instances or the values of multiple Resources from an Object Instance. The "Write" operation can also be
used to request the deletion or the allocation of specific Instances of a Multiple-Instance Resource.

The request includes the value to be written encoded in one of the data format defined in
[7.4. Data Formats for Transferring Resource Information](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#7-4-0-74-Data-Formats-for-Transferring-Resource-Information
): plain text, opaque, TLV, JSON, CoRE Link, CBOR, SenML JSON, and SenML CBOR.

There are two mechanisms to change multiple Resources or an array of Resource Instances:

Replace: replaces the Object Instance or the Resource(s) with the new value provided in the "Write" operation. When the Resource is a Multiple-Instance Resource, the existing array of Resource Instances is replaced to the condition the LwM2M Client authorizes that operation.

Partial Update: updates Resources provided in the new value and leaves other existing Resources unchanged. When the Resource is a Multiple-Instance Resource, the existing array of Resource Instances is updated meaning some Instances may be created or overwritten to the condition the LwM2M Client authorizes such operations. Deleting via Partial Update is not possible.

<b> Example: WriteUpdate Single ObjectInstance resource</b>

```ruby
# Request:
WriteUpdate  {"id":"/3/0","value":{"14":"+5","15":"Kiyv/Europe"}}

# Response:
{"result":"CHANGED"}
```
{: .copy-code}

<b> More examples:</b>
<br>
<details>
<summary>
<b>WriteUpdate Multiple ObjectInstance resource</b>
</summary>
{% highlight ruby %}
# Request:
WriteUpdate {"id": "/19/0","value": {"0":{"0":"00ad456756", "25":"25ad456756"}}}

# Response:
{"result":"CHANGED"}
{% endhighlight %}
</details>

<details>
<summary>
<b>WriteUpdate Multiple resources</b>
</summary>
{% highlight ruby %}
# Request:
WriteUpdate {"id": "/19/0/0","value": {"0":"00ad456756", "25":"25ad456756"}}

# Response:
{"result":"CHANGED"}
{% endhighlight %}
</details>

<details>
<summary>
<b>WriteReplace Single resource</b>
</summary>
{% highlight ruby %}
# Request:
WriteReplace {"id":"/19/0/0","value":"0081"}

# Response:
{"result":"CHANGED"}
{% endhighlight %}
</details>

<details>
<summary>
<b>WriteReplace Single resource by the Key</b>
</summary>
{% highlight ruby %}
# Request:
WriteReplace {"key":"timezone","value":"+10"}

# Response:
{"result":"CHANGED"}
{% endhighlight %}
</details>

<details>
<summary>
<b>WriteReplace Multiple resource</b>
</summary>
{% highlight ruby %}
# Request:
WriteReplace {"id": "/19_1.1/0/0","value": {"0":"00ad456797", "25":"25ad456700"}}

# Response:
{"result":"CHANGED"}
{% endhighlight %}
</details>

### Write-Attributes Operation

Only Attributes from the <NOTIFICATION> class MAY be changed in using the "Write-Attributes" operation.
The general rules for Attributes which are specified in Section 5.1.1. Attributes Definitions and Rules fully apply here.
Table: 5.1.2.-1 Class Attributes in Section 5.1.2. Attributes Classification provides explanation on the Attributes
supported by the "Write-Attributes" operation: Minimum Period, Maximum Period, Greater Than, Less Than, Step,
Minimum Evaluation Period and Maximum Evaluation Period.
The operation permits multiple Attributes to be modified within the same operation.

<b> Example: Write multiple attributes </b>

```ruby
# Request:
WriteAttributes {"id":"/19/0/0","attributes":{"pmax":120, "pmin":10}}

# Response:
{"result":"CHANGED"}
```
{: .copy-code}

### Read-Composite Operation
The LwM2M Client MAY support the "Read-Composite" operation.
The "Read-Composite" operation can be used by the LwM2M Server to selectively read any combination of Objects,
Object Instance(s), Resources, and/or Resource Instances of different or same Objects in a single request. The list of
elements to be read are provided as SenML Pack where the records contain Base Name and/or Name Fields, but no Value
fields. The Read-Composite operation is treated as non-atomic and handled as best effort by the client. That is, if any of
the requested resources do not have a valid value to return, they will not be included in the response. Section 7.4.5.
SenML JSON shows examples of Read-Composite use.

<b> Example: Read multiple Objects </b>

```ruby
# Request:
ReadComposite {"ids":["/3/0/9", "/1_1.2"]}

# Response:
{"result":"CONTENT","value":"{/3/0/9=LwM2mSingleResource [id=9, value=75, type=INTEGER], /1=LwM2mObject [id=1, instances={0=LwM2mObjectInstance [id=0, resources={0=LwM2mSingleResource [id=0, value=123, t
ype=INTEGER], 1=LwM2mSingleResource [id=1, value=300, type=INTEGER], 6=LwM2mSingleResource [id=6, value=false, type=BOOLEAN], 22=LwM2mSingleResource [id=22, value=U, type=STRING], 7=LwM2mSingleResource [
id=7, value=U, type=STRING]}]}]}"
```
{: .copy-code}

<b> More examples:</b>
<br>
<details>
<summary>
<b>Read-Composite Multiple resources by Keys </b>
</summary>
{% highlight ruby %}
# Request:
ReadComposite {"keys":["state", "updateResult", "pkgversion", "batteryLevel"]}

# Response:
{"result":"CONTENT","value":"{/5/0/7=LwM2mSingleResource [id=7, value=, type=STRING], /5/0/5=LwM2mSingleResource [id=5, value=0, 
type=INTEGER], /5/0/3=LwM2mSingleResource [id=3, value=0, type=INTEGER], /
3/0/9=LwM2mSingleResource [id=9, value=81, type=INTEGER]}"}
{% endhighlight %}
</details>

<details>
<summary>
<b>Read-Composite Multiple object instances</b>
</summary>
{% highlight ruby %}
# Request:
ReadComposite {"ids":["/3/0", "/1_1.2/0"]}

# Response:
{"result":"CONTENT","value":"{/3/0=LwM2mObjectInstance [id=0, resources={0=LwM2mSingleResource [id=0, value=Thingsboard Test Device, 
type=STRING], 1=LwM2mSingleResource [id=1, value=Model 500, type=STRING], 2=LwM2mSingleResource [id=2, value=TH-500-000-0001, type=STRING], 
3=LwM2mSingleResource [id=3, value=TestThingsboard@TestMore1024_2.04, type=STRING], 6=LwM2mSingleResource [id=6, value=1, type=INTEGE
R], 7=LwM2mSingleResource [id=7, value=2, type=INTEGER], 8=LwM2mSingleResource [id=8, value=61, type=INTEGER], 9=LwM2mSingleResource [id=9, 
value=25, type=INTEGER], 10=LwM2mSingleResource [id=10, value=102044, type=INTEGER], 11=LwM2mMultipleResource [id=11, 
values={0=LwM2mResourceInstance [id=0, value=1, type=INTEGER]}, type=INTEGER], 13=LwM2mSingleResource [id=13, 
value=Thu Jul 01 16:49:25 EEST 2021, type=TIME], 14=LwM2mSingleResource [id=14, value=+03, type=STRING], 15=LwM2mSingleResource [id=15, 
value=Europe/Kiev, type=STRING], 16=LwM2mSingleResource [id=16, value=U, type=STRING], 17=LwM2mSingleResource [id=17, value=smart meters, 
type=STRING], 18=LwM2mSingleResource [id=18, value=1.01, type=STRING], 19=LwM2mSingleResource [id=19, value=1.02, type=STRING], 
20=LwM2mSingleResource [id=20, value=1, type=INTEGER], 21=LwM2mSingleResource [id=21, value=256000, type=INTEGER]}], /1/0=LwM2mObjectInstance 
[id=0, resources={0=LwM2mSingleResource [id=0, value=123, type=INTEGER], 1=LwM2mSingleResource [id=1, value=300, type=INTEGER], 
6=LwM2mSingleResource [id=6, value=false, type=BOOLEAN], 22=LwM2mSingleResource [id=22, value=U, type=STRING], 7=LwM2mSingleResource [id=7, 
value=U, type=STRING]}]}"}

{% endhighlight %}
</details>

### Write Composite Operation

The LwM2M Client MAY support the "Write-Composite" operation.
In contrast to "Write" operation, the scope of which is limited to a Resource(s) of a single Instance of a single Object,
the "Write-Composite" operation can be used by the Server to update values of a number of different Resources across
different Instances of one or more Objects. The Write-Composite operation provides a list of
all resources to be updated, and their new values, using the SenML JSON/CBOR format. Unlike for Write operation, the
Resources that are not provided are not impacted by the operation. Examples are shown in Section 7.4.5. SenML JSON.

The "Write-Composite" operation is atomic and cannot have partial success. That is, if the client supports this
operation, it MUST reject a Server request where it cannot successfully write all the requested values to the requested
list of Resources. Therefore, before processing Write-Composite, the client MUST ensure that all addressed objects exist
and that the Server has write access to those Objects and Resources.

<b> Example: WriteComposite to multiple Objects </b>

```ruby
# Request:
WriteComposite {"nodes":{"/3/0/14":"+04", "/1/0/2":100, "/5/0/1":"coap://localhost:5685"}}

# Response:
{"result":"CHANGED"}
```
{: .copy-code}

<b> More examples:</b>
<br>
<details>
<summary>
<b>WriteComposite with multiple Keys</b>
</summary>
{% highlight ruby %}
# Request:
WriteComposite {"nodes":{"timezone":"+04", "defaultMinimumPeriod":100, "packageUri":"coap://localhost:5685"}}

# Response:
{"result":"CHANGED"}
{% endhighlight %}
</details>

### Execute Operation

The "Execute" operation is used by the LwM2M Server to initiate some action, and can only be performed on individual Resources.

<b> Example: Execute resource</b>

```ruby
# Request:
Execute {"id":"5/0/2"}

# Response:
{"result":"CHANGED"}
```
{: .copy-code}

### Delete Operation
The "Delete" operation is used for LwM2M Server to delete an Object Instance within the LwM2M Client.
The Object Instance that is deleted in the LwM2M Client by the LwM2M Server MUST be an Object Instance that is
announced by the LwM2M Client to the LwM2M Server using the "Register" and "Update" operations of the Client
Registration Interface.

The only exception concerns the single Instance of the mandatory Device Object (ID:3) which SHALL NOT be affected by
any Delete operation.

<b> Example: Delete an Object Instance</b>

```ruby
# Request:
Delete {"id":"/19/1"}

# Response:
{"result":"DELETE"}
```
{: .copy-code}

### Observe Operation
The LwM2M Server initiates an observation request for changes of a specific Resource, Resources within an Object
Instance or for all the Object Instances of an Object within the LwM2M Client.
Related parameters for "Observe" operation are described in Section 6.3.4. Write-Attributes Operation and those
parameters are configured by "Write-Attributes" operation.

<b> Example: Observe resource</b>

```ruby
# Request:
Observe {"id":"/3/0/9"}

# Response:
{"result":"CONTENT","value":"LwM2mSingleResource [id=9, value=28, type=INTEGER]"}
```
{: .copy-code}

<b> More examples:</b>
<br>
<details>
<summary>
<b>Observe Object Instance</b>
</summary>
{% highlight ruby %}
# Request:
Observe {"id":"/3/0"}
 
# Response:
{"result":"CONTENT","value":"LwM2mObjectInstance [id=0, resources={0=LwM2mSingleResource [id=0, value=Thingsboard 
Test Device, type=STRING], 1=LwM2mSingleResource [id=1, value=Model 500, type=STRING], 2=LwM2mSingleResource [id=2, 
value=TH-500-000-0001, type=STRING], 3=LwM2mSingleResource [id=3, value=TestThingsboard@TestMore1024_2.04, type=STRING], 
6=LwM2mSingleResource [id=6, value=1, type=INTEGER], 7=LwM2mSingleResource [id=7, value=90, type=INTEGER], 8=LwM2mSingleResource 
[id=8, value=29, type=INTEGER], 9=LwM2mSingleResource [id=9, value=19, type=INTEGER], 10=LwM2mSingleResource [id=10, value=76962, 
type=INTEGER], 11=LwM2mMultipleResource [id=11, values={0=LwM2mResourceInstance [id=0, value=1, type=INTEGER]}, type=INTEGER], 
13=LwM2mSingleResource [id=13, value=Wed Jul 31 22:49:45 EET 1940, type=TIME], 14=LwM2mSingleResource [id=14, value=+5, type=STRING], 
15=LwM2mSingleResource [id=15, value=Kiyv/Europe, type=STRING], 16=LwM2mSingleResource [id=16, value=U, type=STRING], 
17=LwM2mSingleResource [id=17, value=smart meters, type=STRING], 18=LwM2mSingleResource [id=18, value=1.01, type=STRING], 
19=LwM2mSingleResource [id=19, value=1.02, type=STRING], 20=LwM2mSingleResource [id=20, value=6, type=INTEGER], 21=LwM2mSingleResource 
[id=21, value=256000, type=INTEGER]}]"}
{% endhighlight %}
</details>

### Cancel Observation Operation
The "Cancel Observation" operation is sent from the LwM2M Server to the LwM2M Client to end an observation
relationship that was previously created with an "Observe" operation

<b> Example: Cancel Observation for resource by ID</b>

```ruby
# Request:
ObserveCancel {"id":"/5/0/7"}

# Response:
{"result":"CONTENT","value":"1"}
```
{: .copy-code}

<b> More examples:</b>
<br>
<details>
<summary>
<b>Example: Cancel Observation for resource by Key</b>
</summary>
{% highlight ruby %}
# Request:
ObserveCancel {"key":"updateResult"}

# Response:
{"result":"CONTENT","value":"1"}{% endhighlight %}
</details>

### Cancel All Observations Operation
The "Cancel All Observations" operation is Thingsboard-specific operation and allows to cancel all observations
on the device at once

<b> Example: Cancel All Observations</b>

```ruby
# Request:
ObserveCancelAll

# Response:
{"result":"CONTENT","value":"8"} // - cancelled 8 observations
```
{: .copy-code}


### Read All Observations Operation
The "Read All Observations" operation is Thingsboard-specific operation and allows to get all observations 
that are set on the device

<b> Example: Read All Observations</b>

```ruby
# Request:
ObserveReadAll

# Response:
{"result":"CONTENT","value":"[\"/5/0/7\",\"/3/0/3\",\"/5/0/3\",\"/5/0/5\"]"}
```
{: .copy-code}

## Firmware over-the-air updates

LwM2M protocol allows you to upload and distribute over-the-air(OTA) firmware updates to devices. Please read first the 
following article  [OTA updates](/docs/{{docsPrefix}}user-guide/ota-updates/) to learn about uploading and managing
firmware packages and the update process.

LwM2M defines [Object 5: Firmware Update Object](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#13-6-0-E6-LwM2M-Object-Firmware-Update)
for the OTA purpose, which enables management of firmware image and includes resources for installing a firmware package,
updating firmware, and performing actions after updating firmware.

Please note that Object 5 is an optional object, and may be not supported by some devices.

To be able to run the update using Object 5, you have to make sure that Object 5 is present in the [Device profile](/docs/{{docsPrefix}}reference/lwm2m-api/#step-2-define-lwm2m-device-profile/)
LwM2M model and set up observations of following attributes on the device, which are used by the server to get feedback from
the device on the status of the update process:

    "/3/0/3" - Firmware Version
    "/5/0/3" - State
    "/5/0/5" - Update Result
    "/5/0/7" - PkgVersion

Firmware update process is illustrated here: [Firmware Update Mechanisms ](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#Figure-E61-1-Firmware-Update-Mechanisms)
described as a UML 2.0 state diagram. The state diagram consists of states, drawn as rounded rectangles, and transitions,
drawn as arrows connecting the states.

There are several ways to run OTA firmware updates with LwM2M transport. You can choose the strategy in the device
profile, so it will be applied for all devices of the profile:

{% include images-gallery.html imageCollection="otafirmware-transport" %}

### Push firmware update as binary file using Object 5 and Resource 0.
The firmware package is pushed from the server directly to the device via the block-wise transfer to the Resource 0 of
the Object 5. After the downloading is finished, the update process should be triggered using the executable 
resource "/5/0/2". The full process is illustrated here: [Example of a LwM2M Server pushing a firmware image to a LwM2M client](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#Figure-E62-1-Example-of-a-LwM2M-Server-pushing-a-firmware-image-to-a-LwM2M-client).

### Auto-generate a unique CoAP URL to download the package and push the firmware package via Object 5 and Resource 1.
This option allows running the firmware update with the image file located on the 3rd party storage. In this case the
server generates a CoAP-URL and  sends it to the client, and the client downloads firmware image from the external
resource directly without transferring image to the server. After the downloading is finished, the update process should
be triggered using the executable resource "/5/0/2". The full process is illustrated here: [Example of a client fetching
a firmware image](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#Figure-E62-2-Example-of-a-client-fetching-a-firmware-image/)

## Software over-the-air updates

LwM2M protocol allows you to upload and distribute over-the-air(OTA) software updates to devices. Please read first the
following article  [OTA updates](/docs/{{docsPrefix}}user-guide/ota-updates/) to learn about uploading and managing
software packages and the update process.

Updating of the device software has some differences comparing to the firmware update process: the Software Management
process is split in 2 sub-processes: a Package Installation Process and a Software Activation Process.

LwM2M defines Object 9: Software Management Object  for the software management  purpose, which enables remote 
software management in M2M devices and includes resources for delivering, execution of installation and activating 
software packages, and reporting states.

Please note that Object 9 is an optional object, and not may be supported by some devices.

To be able to run the update using Object 9, you have to make sure that Object 9 is present in the Device profile 
LwM2M model and set up observations of following attributes on the device, which are used by the server to get 
feedback from the device on the status of the update process:

    "/3/0/19" - Software Version
    "/9/0/0" - PkgName
    "/9/0/1" - PkgVersion
    "/9/0/2" - Package ID
    "/9/0/3" - Package URI
    "/9/0/7" - Update State
    "/9/0/9" - Update result

There are several ways to run OTA software updates with LwM2M transport. You can choose the strategy in the device 
profile, so it will be applied for all devices of the profile:

{% include images-gallery.html imageCollection="sota" %}

### Push software update as binary file using Object 9 and Resource 2.
The software package is pushed from the server directly to the device via the block-wise transfer to the Resource 2 of 
the Object 9.

### Auto-generate a unique CoAP URL to download the package and push the software package via Object 9 and Resource 3.
This option allows running the software update with the image file located on the 3rd party storage. In this case 
the server generates a CoAP-URL and  sends it to the client, and the client downloads software image from the external 
resource directly without transferring image to the server.


## Advanced topics

### Object and Resource attributes

Attributes are metadata which can be attached to an Object, an Object Instance, or a Resource. These attributes can 
fulfil various roles, from carrying information only (e.g. Discover) to carrying parameters for setting up certain 
actions on the LwM2M Client (e.g. Notifications).

Attributes attached to Objects, Object Instances, Resources are respectively named O-Attribute, OI-Attribute, R-Attribute.

These Attributes MAY be carried in the message payload of Registration and Discover operations; they also MAY be
updated - when writable - through the "Write-Attributes" operation.

Regardless to the LwM2M entity a given Attribute is attached to, the value of such an Attribute can be assigned at
various levels: Object, Object Instance, Resource levels. Additionally, precedence rules apply when the same Attribute
receives a value at different levels.

Some Attributes MAY be exposed to the LwM2M Server in the payload response to a "Discover" operation.

The value of some Attributes MAY be changed by the LwM2M Server in using the "Write-Attributes" operation, which
Attribute are concerned are marked as "W" (writable).

Note: A payload response to a "Discover" operation is a list of application/link-format CoRE Links [RFC6690], which
will include the LwM2M Attributes.

There are two types of attributes:

* PROPERTIES Class Attributes: the role of these Attributes is to provide metadata which may communicate helpful 
information to the LwM2M Server for example easing data management. 
  The LwM2M Server and LwM2M Client SHOULD support following [PROPERTIES Class Attributes](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#Table-512-1-lessPROPERTIESgreater-Class-Attributes), 
  except when specifically mentioned as not required.

* NOTIFICATION Class Attributes: the role of these R-Attributes is to provide parameters to the "Notify" operation, which 
is used for the resource observation. Any readable Resource can have such R-attributes. 

Please find more detailed information about `LWM2M Attributes Definitions and Rules` [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#Table-512-1-lessPROPERTIESgreater-Class-Attributes).

Following NOTIFICATION attributes are available on the TB Platform to configure observation parameters:

* "pmin"  - Minimum period - indicates the minimum time in seconds the LwM2M Client MUST wait between two notifications.
  If a notification of an observed Resource is supposed to be generated but it is before pmin expiry,
  notification MUST be sent as soon as pmin expires. In the absence of this parameter, the Minimum Period is
  defined by the Default Minimum Period set in the LwM2M Server Account.

* "pmax"  - Maximum period -  indicates the maximum time in seconds the LwM2M Client MAY wait between two notifications.
  When this "Maximum Period" expires after the last notification, a new notification MUST be sent. In the absence
  of this parameter, the "Maximum Period" is defined by the Default Maximum Period when set in the LwM2M Server
  Account or considered as 0 otherwise. The value of 0, means pmax MUST be ignored. The maximum period parameter
  MUST be greater than the minimum period parameter otherwise pmax will be ignored for the Resource to which
  such inconsistent timing conditions are applied.

* "gt"    - Greater than - defines a threshold high value. When this Attribute is present, the LwM2M Client MUST notify
  the Server each time the Observed Resource value crosses this threshold with respect to pmin parameter and
  valid "Change Value Conditions" (see Notification Conditions above).

* "lt"    - Less than - defines a threshold low value. When this Attributes is present, the LwM2M Client MUST notify the
  Server each time the Observed Resource value crosses this threshold with respect to pmin parameter and valid
  "Change Value Conditions" (see Notification Conditions above).

* "st"    - Step - defines a threshold low value. When this Attributes is present, the LwM2M Client MUST notify the Server
  each time the Observed Resource value crosses this threshold with respect to pmin parameter and valid "Change
  Value Conditions" (see Notification Conditions above).

Notification attributes can be configured in the Device Profile, please follow the guide:

{% include images-gallery.html imageCollection="object-attributes" %}




### DTLS configuration

The Thingsboard platform supports secured connection using DTLS. DTLS, which stands for Datagram Transport Layer
Security, is based on the Transport Layer Security (TLS) protocol and built on top of the User Datagram Protocol (UDP).
Thingsboard allows the use of DTLS  with the LwM2M transport connection for devices.

Detailed information about `LWM2M DTLS-based Security` [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=19).

There are three authentication methods available on the Thingsboard for LwM2M DTLS: using the Pre-Shared Key(PSK), using
the Raw Public Key(RPK) and using the X.509 certificate.

To use DTLS, the end-user device has to connect to the ThingsBoard server using secured port 5686, and configure device
credentials on the UI.

We will use Leshan Demo Client, please refer to the link for downloading and configuration: [here](https://github.com/eclipse/leshan)

#### 1. Pre-shared Key mode (PSK).
The pre-shared key profile offers the most efficient solution for integration of DTLS into LwM2M since pre-shared
ciphersuites recommended in [RFC7925] require a minimum amount of flash space as well as RAM size in your device.

Symmetric cryptographic algorithms require only a minimal computational overhead. The size of the exchanged messages
is also kept at a minimum. There is, however, a downside as well: symmetric keys need to be preconfigured to both
communication endpoints.

You need only three strings to configure the connection:

* Endpoint client name: which is used to identify the device and can be any text string.
* Client identity (PSK identity) key: any text string.
* PSK key (security key): should be a random sequence in HexDec format and 32, 64 or 128 characters long.

PSK mode requires the following resources of the Security Object to be populated:
* The "Security Mode" Resource MUST contain the value 0.
* The "Public Key or Identity" Resource must be used to store the PSK identity.
* The "Secret Key" Resource MUST be used to store the PSK.
* The "Server Public Key" Resource MUST NOT be used in the Pre-Shared Key mode.

Example of using  Leshan Demo Client:

    Endpoint client name= "ClientPsk";
    Client identity (PSK identity) = "ClientPskIdentity";
    Client key (PSK key or PSK security key) = "0123456789ABCDEF0123456789ABCDEF";

Example command for start "Leshan client demo" in mode PSK:

```ruby
java -jar leshan-client-demo.jar -u localhost:5686 -lh 0.0.0.0 -lp 10004 -n ClientPsk -i ClientPskIdentity -p 0123456789ABCDEF0123456789ABCDEF
    
Leshan Client Demo Interactive Console :
...
DefaultRegistrationEngine 2021-09-30 19:09:52,789 [INFO] Trying to register to coaps://192.168.1.81:5686 ...
LeshanClientDemo 2021-09-30 19:09:52,830 [INFO] DTLS Full Handshake initiated by client : STARTED ...
LeshanClientDemo 2021-09-30 19:09:52,949 [INFO] DTLS Full Handshake initiated by client : SUCCEED
DefaultRegistrationEngine 2021-09-30 19:09:52,990 [INFO] Registered with location '/rd/vXMGfVFgQi'.
...
```
{: .copy-code}


#### 2. Raw Public Key(RPK) mode.

The raw public key profile offers features that sit between the pre-shared key and the certificate-based profile and
combines the benefits of these two profiles. The use of asymmetric cryptography offers improved security but avoids
the overhead associated with certificates and the public key infrastructure.

This mode requires the following resources of the Security Object of the device to be populated:
* The "Security Mode" Resource MUST contain the value 1.
* The "Public Key or Identity" Resource MUST store the raw public key.
* The "Secret Key" Resource MUST be used to store the client private key.
* The "Server Public Key" Resource MUST be used to store the server public key.

To configure the connection, you need to generate keys first.
We will use OpenSSl tool and follow the guide from Leshan:  [here](https://github.com/eclipse/leshan/wiki/Credential-files-format)

#### 3. X.509 Certificate mode

The certificate-based profile re-uses widely deployed X.509 certificates. This allows both tools as well as existing
infrastructure, such as Certification Authorities (CAs) and the Public Key Infrastructure (PKI), to be re-used. Unlike
the typical web browser use of certificates, [RFC7925] specifies the use of certificates for mutual authentication
between clients and servers. The use of certificates comes at a price: The use of asymmetric cryptography is more
complex to implement, requires more bandwidth for the exchanged messages, is computationally more demanding, and
requires a larger code size as well as more RAM. The benefits are, in addition to the re-use of existing technologies,
the need to only share the certificates with other communication partners in an authentic fashion and to keep the
private key local to each party (at least in the case where EST is used). This property of asymmetric cryptography
reduces the risk of exposing private keying material.

This mode requires the following resources of the Security Object to be populated:
* The "Security Mode" Resource MUST contain the value 2.
* The "Public Key or Identity" Resource MUST be used to store the X.509 certificate of the TLS/DTLS client.
* The "Secret Key" Resource MUST be used to store the private key of the TLS/DTLS client as a DER encoded asymmetric key
  package.
* The "Server Public Key" Resource MUST be used to store either a trust anchor certificate suitable for path validation
  of the certificate of the TLS/DTLS server, or directly the certificate of the TLS/DTLS server ("domain-issued
  certificate mode").

To launch the conenction, we need to get following data:

* Endpoint name = "ClientX509", identifies our client;
*


### Bootstrap

* You can find more information about  `LWM2M Bootstrap` [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=41).


The Bootstrap Interface is used to optionally configure a LwM2M Client so that it can successfully register with a LwM2M
Server. The Client Bootstrap operation is initiated by the LwM2M Client itself. In addition, this operation can be requested by an
authorized LwM2M Server executing the "Bootstrap-Request Trigger" Resource of a Server Object Instance, or even by a
proprietary mechanism (e.g. based on SMS). Note: the execution of a "Bootstrap-Request Trigger" Resource by a
LwM2M Server in a LwM2M Client is performed through an already established registration and is therefore covered by
the access rights mechanism