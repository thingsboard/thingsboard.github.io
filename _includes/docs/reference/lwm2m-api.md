* TOC
{:toc}

> Before proceeding, we recommend reviewing the general [Getting Started guide](/docs/{{docsPrefix}}getting-started-guides/helloworld/){:target="_blank"} to become familiar with ThingsBoard basics. Additionally, it is advisable to explore the [Device profiles](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"} documentation.

## LwM2M basics

[LwM2M (Lightweight M2M)](https://en.wikipedia.org/wiki/OMA_LWM2M){:target="_blank"} is a device management protocol designed for constrained devices and the demands of a machine-to-machine (M2M) environments.
You can find more information about LwM2M [here](https://www.openmobilealliance.org/specifications/lwm2m/introduction){:target="_blank"}.

One of the key advantages of LwM2M is its rich library of data structures, known as the [LwM2M Object and Resource Registry](https://www.openmobilealliance.org/specifications){:target="_blank"}.
The most up-to-date list of available objects can be found in [this GitHub repository](https://github.com/OpenMobileAlliance/lwm2m-registry){:target="_blank"}.

The registry enables efficient serialization/deserialization of telemetry data. The LwM2M protocol defines the processes for:
- Device registration
- Configuration and management
- Firmware/software updates

**LwM2M object structure**

When an LwM2M device registers with the server, it provides a list of supported LwM2M Objects. Each object has:
- An **object** ID
- A **version**
- One or multiple **instances**

Each LwM2M object instance contains multiple **resources**.

**What is an LwM2M resource?**

An LwM2M resource represents a piece of data that you can read from or write to the device.

For example, the resource "3.0.2" always represents the **device serial number**:
- **3** – object ID
- **0** – object instance
- **2** – resource ID

Each **resource** has the following main properties:
- **Name** - human-readable name of the resource
- **Type** - data type: String, Integer, etc.
- **Operations** - R (read), RW (read-write), E (execute), etc.

## Getting started

This section covers how to provision your first LwM2M device in ThingsBoard. We will use [Eclipse Wakaama](https://github.com/eclipse/wakaama#test-client-example){:target="_blank"} test client to simulate LwM2M device.

### Step 1. Upload LwM2M models

To begin, the {% if docsPrefix == "pe/" or docsPrefix == null %}System administrator or {% endif %}Tenant administrator must upload the LwM2M models.

> **Tip**: We recommend downloading the latest list of LwM2M models from the [official GitHub repo](https://github.com/OpenMobileAlliance/lwm2m-registry){:target="_blank"} and importing all of them.

> **Make sure** that the versions of the LwM2M models you upload match the versions of the LwM2M objects used by your actual devices.

- Log in to your ThingsBoard instance as a System administrator.
- Navigate to the "Resources library" page under the "Resources" section.
- Click the "+" (Add resource) button in the top-right corner of the window.
- Upload one or more LwM2M model files.
- Click "Add" to complete the upload.

Once uploaded, you should see the new models listed in the Resources library.

{% include images-gallery.html imageCollection="upload-models" %}

<b>The Tenant administrator has the ability to:</b>

- Use LwM2M models uploaded by the System administrator.
- Override existing models or upload custom ones.

> ⚠️ **Important**: A Tenant administrator cannot delete files uploaded by the System Administrator. They can only delete models that were uploaded by themselves.

### Step 2. Define LwM2M device profile

Once you&#39;ve uploaded the LwM2M models, you can use them to configure a device profile for LwM2M devices.
For general information about device profiles, [read here](/docs/{{docsPrefix}}user-guide/device-profiles/){:target="_blank"}.

#### Step 2.1 Create the LwM2M profile.

The key step here is to select the LwM2M transport type during the *Transport configuration* stage.
This configuration allows you to define the list of LwM2M Objects that your devices will support.

- Go to the "Device profiles" page under the "Profiles" section.
- Click the "+" (Add device profile) button in the top-right corner of the window, and in the pop-up menu, select "Create new device profile".
- Enter a name for the profile.
- Navigate to the "Transport configuration" tab.
- Select "LwM2M" as the transport type from the dropdown menu.
- Click "Add" to create the device profile.

The new profile has been successfully created.

{% include images-gallery.html imageCollection="create-lwm2m-device-profile" %}

#### Step 2.2 Choose LwM2M objects.

Let&#39;s define the following LwM2M objects in the device profile:
- **Device object** - **Device #3_1.2**
- **Connectivity** - **Connectivity Monitoring #4_1.3**
- **Firmware update** - **Firmware Update #5_1.1**
- **Location monitoring** - **Location #6_1.0**

To do this, follow these steps:
- Select the previously created **LwM2M profile**.
- Go to the "**Transport configuration**" tab.
- Click the "**Edit**" button.
- **Add objects** from the drop-down list.

> ⚠️ **Note**: These objects must be preloaded into the **Resource library** in advance.

{% include images-gallery.html imageCollection="device-objects"  %}

#### Step 2.3 Configure the mapping

Now let&#39;s configure how ThingsBoard should process LwM2M object data:
- The **device object** provides **manufacturer**, **model number**, and **serial number**. Let&#39;s configure ThingsBoard to receive this data as **attributes**.
- We will observe and collect data such as **radio signal strength**, **link quality**, and **device location**, and store it as **telemetry** in ThingsBoard.

> The **Observe** feature in LwM2M allows the server to receive data only when the values change.

>️ You can also configure conditions for reporting specific resources via LwM2M attributes (covered in the [advanced](#object-and-resource-attributes) section).

To do this, follow these steps:
- For each selected object:
    - Check the "**Attributes**" box for any data you want to retrieve when the device connects and store it as ThingsBoard **attributes**.
    - Check the "**Telemetry**" and/or "**Observe**" boxes if you want the Server to monitor those values, fetch updates, and store them as ThingsBoard **telemetry**.
- Click "Save" to apply the changes.

{% include images-gallery.html imageCollection="configure-mapping" %}

> ⚠️ **Note**: If you uncheck all items (Attributes, Telemetry, Observe) for an object, it **will not appear** in the device profile configuration.

Additionally, the "**Transport configuration**" tab also allows you to configure **bootstrap settings** and other settings.

### Step 3. Define LwM2M device credentials

We assume you have successfully created a device profile for LwM2M devices in the previous steps.
Now let&#39;s create a new device, assign it the previously created LwM2M profile, and configure its credentials.

ThingsBoard supports four types of credentials:
- **Pre-Shared Key (PSK)**
- **Raw Public Key (RPK)**
- **X.509 Certificate**
- **No Security** (default)

{% include images-gallery.html imageCollection="device-credentials" %}

For simplicity, we&#39;ll connect the device over **plain UDP** using the "**No Security**" mode:
- Start [creating a new device](/docs/{{docsPrefix}}user-guide/ui/devices/#adding-a-new-device){:target="_blank"} and assign it the [previously created LwM2M device profile](#step-21-create-the-lwm2m-profile).
- Go to the "**Credentials**" tab.
- Choose "**No Security**" as the credential type.
- Enter the **Endpoint Client Name** — this will be used to identify the device on the network.

> 🔐 With **No Security** mode, only the **Endpoint Client Name** is required for device identification.

- Click "Add".

The device has been added.

{% include images-gallery.html imageCollection="no-security-credentials" %}

To enhance security, use alternative credential types by enabling DTLS mode.
Refer to the [DTLS configuration](#dtls-configuration) guide for more information on how to set up this mode.

### Step 4. Connect the device

At this point, you should have:
- Provisioned the LwM2M device and its credentials (as described in the previous step).
- Built the Eclipse Wakaama [test client](https://github.com/eclipse/wakaama#test-client-example){:target="_blank"}.

Now you are ready to start the client and observe incoming telemetry in ThingsBoard.

<b><font size="4">Launch the test client</font></b>

Run the following command from your terminal:

```bash
./lwm2mclient -h {{lwm2mHostName}} -n $UNIQUE_ENDPOINT_NAME -p 5685 -c
```
{: .copy-code}

**where:**
* **{{lwm2mHostName}}** - the **hostname** of your LwM2M server
* **5685** - the **port** of LwM2M server;
* **$UNIQUE_ENDPOINT_NAME** - is the unique name of your endpoint.(e.g., IMEI or any other unique ID)

> ⚠️ Be sure to replace **$UNIQUE_ENDPOINT_NAME** with your actual device identifier.

<b><font size="4">Monitoring telemetry</font></b>

Once the client connects:
- The device will register with the ThingsBoard LwM2M transport.
- You will begin to receive telemetry data.

The LwM2M transport implementation also stores the logs of communication with the device into telemetry.
You can view these logs under the "**transportLog**" event of the "**Latest telemetry**" tab.

{% include images-gallery.html imageCollection="wakaama-terminal" %}

## ThingsBoard LwM2M support

ThingsBoard provides full support for both an LwM2M Server and a Bootstrap Server, with communication over:
- **Plain UDP**
- **DTLS** (secure transport over UDP)

As a platform user, you are able to provision LwM2M devices and define the mapping between the LwM2M resources and ThingsBoard device [attributes](/docs/{{docsPrefix}}user-guide/attributes/){:target="_blank"} and [telemetry](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} (time series data).
These mappings are configured within the corresponding **LwM2M device profile**.

> For step-by-step instructions on creating a device profile, refer to the [getting started guide](#getting-started).

In the following sections, we will use screenshots of the LwM2M device profile UI to illustrate key features and configuration steps.

### Reading LwM2M resources into ThingsBoard attributes

You may configure a device profile to read and/or observe specific LwM2M resources. When configured, the values of these resources will be stored as device attributes in ThingsBoard.

To store resource as the attribute:
- Navigate to the "**Transport configuration**" tab of your LwM2M device profile.
- Locate the desired **LwM2M resource**.
- Select the "**Attribute**" checkbox to store its value as a ThingsBoard attribute.
- Optionally, modify the auto-generated key to define a custom **attribute name**.

> ThingsBoard will read the attribute value during device registration (LwM2M "Register" operation) or during registration update (LwM2M "Update" operation).

**Example:** Let&#39;s configure the platform to read the **LwM2M resource** */3/0/2* (Device Serial Number) and store it in ThingsBoard as an attribute named "*serialNumber*".

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/lwm2m/read-lwm2m-resources-attributes-ce.png)
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
![image](https://img.thingsboard.io/lwm2m/read-lwm2m-resources-attributes-pe.png)
{% endif %}

#### Observing attributes for real-time updates

In addition to reading the value at registration time, you may choose to **observe** the LwM2M resource to keep the attribute up-to-date as the value changes.
To do this, check the "**Observe**" box for the desired resource. This will subscribe the server to real-time updates for that resource.

**Example:** Let&#39;s monitor the LwM2M Resource */3/0/15* (Timezone) and store its value as the "*timezone*" attribute.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/lwm2m/observe-lwm2m-resources-ce.png)
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
![image](https://img.thingsboard.io/lwm2m/observe-lwm2m-resources-pe.png)
{% endif %}

With this setup, the *timezone* attribute in ThingsBoard will always contain the latest value of the *Timezone* resource.

### Write LwM2M resource via ThingsBoard attributes update

ThingsBoard enables configuration updates to be pushed to LwM2M devices using [Shared attributes](/docs/{{docsPrefix}}user-guide/attributes/#shared-attributes){:target="_blank"}. 
These updates can be initiated from various sources, such as:
- The administration UI
- A dashboard [widget](/docs/{{docsPrefix}}user-guide/widgets/){:target="_blank"}
- [The REST API](/docs/{{docsPrefix}}reference/rest-api/){:target="_blank"}
- [A Rule Engine node](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node){:target="_blank"}

Once you change the shared attribute, ThingsBoard will search for the mapping between the attribute key and LwM2M resource in the device profile.
If the resource is marked as an attribute, platform will send the LwM2M Write operation to the LwM2M client device.

> See the *Timezone* example in the [reading attributes](#reading-lwm2m-resources-into-thingsboard-attributes) section.

### Read LwM2M resources to time series data

You may configure the device profile to read and observe specific LwM2M resources and store their values as telemetry [time series data](/docs/{{docsPrefix}}user-guide/telemetry/){:target="_blank"} data in ThingsBoard.

To store resource as the telemetry:
- Navigate to the "**Transport configuration**" tab of your LwM2M device profile.
- Find the desired **LwM2M resource**.
- Select the "**Telemetry**" checkbox.
- Optionally, customize the telemetry key name by changing the auto-generated key.

**For example**, let&#39;s configure the platform to read the LwM2M Resources: */3/0/7* (Power Source Voltage), */3/0/8* (Power Source Current), */3/0/9* (Battery Level), and */3/0/10* (Memory Free), and to store them as time series data in ThingsBoard:

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/lwm2m/read-lwm2m-resources-time-series-ce.png)
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
![image](https://img.thingsboard.io/lwm2m/read-lwm2m-resources-time-series-pe.png)
{% endif %}

### Execute LwM2M operation using the ThingsBoard RPC command

ThingsBoard supports **on-demand execution of LwM2M operations** using its **Remote Procedure Call (RPC)** feature. For simplicity, we often refer to RPCs as "**commands**".

You can send these commands using:
- The **REST API**
- A dashboard [widget](/docs/{{docsPrefix}}user-guide/widgets/){:target="_blank"}
- [A Rule Engine node](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node){:target="_blank"}
- A **custom script**

> ⚠️ **Note**: The structure and format of RPC commands for LwM2M devices are well-defined and standardized within the platform. Refer to [this documentation](/docs/{{docsPrefix}}user-guide/rpc/#server-side-rpc){:target="_blank"} for full details.

**Command structure**

Each RPC command contains two main properties:
- "**method**" – the type of LwM2M operation to execute
- "**params**" – a JSON that defines the resource id or multiple resources IDs.

**Supported method values:**

* [Execute](#execute-operation) - used by the LwM2M Server to initiate some action (e.g., reboot);
* [Read](#read-operation) - reads the current value of a specific resource;
* [Discover](#discover-operation) - discovers available LwM2M resources on an object or object instance;
* [WriteUpdate](#write-operation) - updates the value of a resource;
* [WriteAttributes](#write-attributes-operation) - change attributes related to a resource;
* [ReadComposite](#read-composite-operation) - selectively read any combination of Objects;
* [WriteComposite](#write-composite-operation) - change the values of a number of different Resources across different Instances of one or more Objects;
* [Delete](#delete-operation) - delete an Object Instance within the LwM2M Client;
* [Observe](#observe-operation) - initiates an observation request for changes of a specific Resource;
* [ObserveCancel](#cancel-observation-operation) - ends an observation relationship that was previously created with an “Observe” operation;
* [ObserveCancelAll](#cancel-all-observations-operation) - Thingsboard-specific operation and allows to cancel all observations on the device at once;
* [ObserveReadAll](#read-all-observations-operation) - Thingsboard-specific operation and allows to get all observations that are set on the device;
* [DiscoverAll](#discover-all-operation) - Thingsboard-specific operation and allows to get the object and resources hierarchy, instantiated on the client.

**Example: Reboot the device**

To trigger a **reboot** on the device using resource */3/0/4*, send the following RPC command to ThingsBoard:

```json
{
   "method": "Execute",
   "params": {
     "id": "/3/0/4"
   }
}
```
{: .copy-code}

We&#39;ve prepared a simple dashboard that demonstrates how to:
- **Reboot the device** via /3/0/4
- **Update attributes** such as /3/0/15 (Timezone)

You can [import the dashboard from a Gist](https://gist.github.com/ashvayka/2374b1b6ebd8be5dca3d5252dee4c212#file-lwm2m_operations-json){:target="_blank"} after completing the [getting started guide](#getting-started).

> ⚠️ Don&#39;t forget to adjust the [dashboard alias](/docs/{{docsPrefix}}user-guide/dashboards/#entity-aliases){:target="_blank"} to match your device or asset.

## RPC Commands

LwM2M transport supports [RPC](/docs/{{docsPrefix}}user-guide/rpc/){:target="_blank"} commands that reflect subset of
[Device Management and Service Enablement Interface](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#6-3-0-63-Device-Management-and-Service-Enablement-Interface){:target="_blank"}
and
[Information Reporting interface](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#6-4-0-64-Information-Reporting-Interface){:target="_blank"}.

The Device Management and Service Enablement Interface is used by the LwM2M Server to access Object Instances and Resources available from a registered LwM2M Client. The operations that a Resource supports are defined in the Object definition using the Object Template.

The Information Reporting Interface is used by a LwM2M Server to observe any changes in a Resource on a registered LwM2M Client, receiving notifications when new values are available. This observation relationship is initiated by sending an "Observe" or "Observe-Composite" operation to the L2M2M Client for an Object, an Object Instance or a Resource. An observation ends when a "Cancel Observation" or "Cancel Observation-Composite" operation is performed.

We will use the Debug Terminal widget to send commands to the device.

To execute attribute - oriented commands there are two ways to specify the target resource: by Resource ID and by the Key.

Resource  ID is the combination of "/ObjectId/ObjectInstance/ResourceID" numbers,
Where:

* "**ObjectId**" indicates the Object number. Objects used to group resources on the device, related to a certain functionality.
* "**ObjectInstance**" indicates the Object Instance to read.
* "**ResourceID**" indicates the Resource to read.

Example of plain RPC call example for REST API: 

```json
{
   "method": "Read",
   "params": {"id": "/3/0/9"}
}
```
{: .copy-code}

or

```json
{
   "method": "Read",
   "params": {"key": "batteryLevel"}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

```ruby
Read {"id":"/3/0/9"}
```
{: .copy-code}

Key is a custom user-friendly name, assigned to a certain attribute:

Example for RPC debug terminal:

```ruby
Read {"key":"batteryLevel"}
```
{: .copy-code}

To be able to use the Key, you have to assign it to the attribute in the Device profile configuration section:
- Go to the "Device profiles" page.
- Click the Profile name to open its details.
- Navigate to the "Transport configuration" tab.
- Click the "pencil" button on the top-right corner to edit profile.
- On the "LWM2M Model" tab select the target object and expand the "Attributes" list.
- Tick the "Attribute" checkbox on the desired attribute and input the custom name for the key.
- Save changes.

{% include images-gallery.html imageCollection="change-attribute-key-name" %}

Below you can find examples of usage for commands that are supported by the Thingsboard platform for LWM2M protocol. Please note that your target client may not support all of them, please refer to the client’s documentation for detailed information on supported commands.


### Read Operation

The "Read" operation is used to access the value of a Resource, a Resource Instance, an array of Resource Instances,
an Object Instance or all the Object Instances of an Object.

<b> Example: Read the value of the resource by ID</b>

Example of plain RPC call example for REST API: 

```json
{
   "method": "Read",
   "params": {"id": "/3/0/9"}
}
```
{: .copy-code}

Example of corresponding input in the debug terminal:

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

The "Discover" operation is used to discover LwM2M Resources available on an Objects or Object Instances.
This operation can be used to discover which Resources are instantiated in a given Object Instance. The returned payload
is a list of application/link-format CoRE Links [RFC6690](https://datatracker.ietf.org/doc/html/rfc6690){:target="_blank"} for each targeted Object, Object Instance, or Resource, along
with their assigned or attached Attributes including the Object Version attribute if required.

Example of corresponding input in the debug terminal:

RPC call example for REST API: 

```json
{
   "method": "Discover",
   "params": {"id": "/3"}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

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
[7.4. Data Formats for Transferring Resource Information](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#7-4-0-74-Data-Formats-for-Transferring-Resource-Information){:target="_blank"}: plain text, opaque, TLV, JSON, CoRE Link, CBOR, SenML JSON, and SenML CBOR.

There are two mechanisms to change multiple Resources or an array of Resource Instances:

Replace: replaces the Object Instance or the Resource(s) with the new value provided in the "Write" operation. When the Resource is a Multiple-Instance Resource, the existing array of Resource Instances is replaced to the condition the LwM2M Client authorizes that operation.

Partial Update: updates Resources provided in the new value and leaves other existing Resources unchanged. When the Resource is a Multiple-Instance Resource, the existing array of Resource Instances is updated meaning some Instances may be created or overwritten to the condition the LwM2M Client authorizes such operations. Deleting via Partial Update is not possible.

<b> Example: WriteUpdate Single ObjectInstance resource</b>

RPC call example for REST API: 

```json
{
   "method": "WriteUpdate",
   "params": {"id":"/3/0","value":{"14":"+5","15":"Kiyv/Europe"}}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

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

Only Attributes from the NOTIFICATION class MAY be changed in using the "Write-Attributes" operation.
[Object and Resource attributes](/docs/{{docsPrefix}}reference/lwm2m-api/#object-and-resource-attributes){:target="_blank"} section provides explanation on the Attributes supported by the "Write-Attributes" operation: 
Minimum Period, Maximum Period, Greater Than, Less Than, Step.
The operation permits multiple Attributes to be modified within the same operation.

<b> Example: Write multiple attributes </b>

RPC call example for REST API: 

```json
{
   "method": "WriteAttributes",
   "params": {"id":"/19/0/0","attributes":{"pmax":120, "pmin":10}}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

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
fields. The Read-Composite operation is treated as non-atomic and handled as best effort by the client. That is, if any 
of the requested resources do not have a valid value to return, they will not be included in the response. 

<b> Example: Read multiple Objects </b>

RPC call example for REST API: 

```json
{
   "method": "ReadComposite",
   "params": {"ids":["/3/0/9", "/1_1.2"]}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

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
Resources that are not provided are not impacted by the operation.

The "Write-Composite" operation is atomic and cannot have partial success. That is, if the client supports this
operation, it MUST reject a Server request where it cannot successfully write all the requested values to the requested
list of Resources. Therefore, before processing Write-Composite, the client MUST ensure that all addressed objects exist
and that the Server has write access to those Objects and Resources.

<b> Example: WriteComposite to multiple Objects </b>

RPC call example for REST API: 

```json
{
   "method": "WriteComposite",
   "params": {"nodes":{"/3/0/14":"+04", "/1/0/2":100, "/5/0/1":"coap://localhost:5685"}}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

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

RPC call example for REST API: 

```json
{
   "method": "Execute",
   "params": {"id":"5/0/2"}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

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

RPC call example for REST API: 

```json
{
   "method": "Delete",
   "params": {"id":"/19/1"}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

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
Related parameters for "Observe" operation are described in [Notification attributes](/docs/{{docsPrefix}}reference/lwm2m-api/#object-and-resource-attributes){:target="_blank"} Write-Attributes Operation and those
parameters are configured by "Write-Attributes" operation.

<b> Example: Observe resource</b>

RPC call example for REST API: 

```json
{
   "method": "Observe",
   "params": {"id":"/3/0/9"}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

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

RPC call example for REST API: 

```json
{
   "method": "ObserveCancel",
   "params": {"id":"/5/0/7"}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

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

RPC call example for REST API: 

```json
{
   "method": "ObserveCancelAll",
   "params": {}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

```ruby
# Request:
ObserveCancelAll

# Response:
{"result":"CONTENT","value":"8"} // - cancelled 8 observations
```
{: .copy-code}


### Read All Observations Operation

The "Read All Observations" operation is Thingsboard-specific operation and allows to get all observations 
that are set on the device.

<b> Example: Read All Observations</b>

RPC call example for REST API: 

```json
{
   "method": "ObserveReadAll",
   "params": {}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

```ruby
# Request:
ObserveReadAll

# Response:
{"result":"CONTENT","value":"[\"/5/0/7\",\"/3/0/3\",\"/5/0/3\",\"/5/0/5\"]"}
```
{: .copy-code}

### Discover All Operation

The "Discover All Observations" operation is Thingsboard-specific operation and allows to get the object and resources hierarchy,
instantiated on the client. When DiscoverAll is executed, it doesn&#39;t send any request to the client device, instead it 
returns LwM2M model of the client device, which was created during the device connection to the server.
This command is very useful for device setting up and troubleshooting, as it allows to see available objects and their 
versions.

<b> Example: Discover all resources </b>


RPC call example for REST API: 

```json
{
   "method": "DiscoverAll",
   "params": {}
}
```
{: .copy-code}


Example of corresponding input in the debug terminal:

```ruby
# Request:
DiscoverAll

# Response:
{"result":"CONTENT","value":"[{\"url\":\"/\",\"attributes\":{\"ct\":\"110\",\"rt\":\"\\\"oma.lwm2m\\\"\"}},
{\"url\":\"/1\",\"attributes\":{\"ver\":\"1.1\"}},{\"url\":\"/1/0\",\"attributes\":{}},{\"url\":\"/2/0\",
\"attributes\":{}},{\"url\":\"/3/0\",\"attributes\":{}},{\"url\":\"/4/0\",\"attributes\":{}},{\"url\":\"/5/0\",
\"attributes\":{}},{\"url\":\"/6/0\",\"attributes\":{}},{\"url\":\"/7/0\",\"attributes\":{}},{\"url\":\"/31024\",
\"attributes\":{\"ver\":\"1.0\"}},{\"url\":\"/31024/10\",\"attributes\":{}},{\"url\":\"/31024/11\",\"attributes\":{}},
{\"url\":\"/31024/12\",\"attributes\":{}}]"}
```
{: .copy-code}

## Firmware over-the-air updates

LwM2M protocol allows you to upload and distribute over-the-air(OTA) firmware updates to devices. Please read first the 
following article  [OTA updates](/docs/{{docsPrefix}}user-guide/ota-updates/){:target="_blank"} to learn about uploading and managing
firmware packages and the update process.

LwM2M defines [Object 5: Firmware Update Object](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#13-6-0-E6-LwM2M-Object-Firmware-Update){:target="_blank"}
for the OTA purpose, which enables management of firmware image and includes resources for installing a firmware package, updating firmware, and performing actions after updating firmware.

Please note that Object 5 is an optional object, and may be not supported by some devices.

To be able to run the update using Object 5, you have to make sure that Object 5 is present in the [Device profile](/docs/{{docsPrefix}}reference/lwm2m-api/#step-2-define-lwm2m-device-profile/){:target="_blank"}
LwM2M model and set up observations of following attributes on the device, which are used by the server to get feedback from the device on the status of the update process:

    "/3/0/3" - Firmware Version
    "/5/0/3" - State
    "/5/0/5" - Update Result
    "/5/0/7" - PkgVersion

Firmware update process is illustrated here: [Firmware Update Mechanisms ](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#Figure-E61-1-Firmware-Update-Mechanisms){:target="_blank"}
described as a UML 2.0 state diagram. The state diagram consists of states, drawn as rounded rectangles, and transitions,
drawn as arrows connecting the states.

There are several ways to run OTA firmware updates with LwM2M transport. You can choose the strategy in the device
profile, so it will be applied for all devices of the profile:

{% include images-gallery.html imageCollection="ota-firmware-update-strategy" %}

### Push firmware update as binary file using Object 5 and Resource 0.
The firmware package is pushed from the server directly to the device via the block-wise transfer to the Resource 0 of
the Object 5. After the downloading is finished, the update process should be triggered using the executable 
resource "/5/0/2". The full process is illustrated here: [Example of a LwM2M Server pushing a firmware image to a LwM2M client](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#Figure-E62-1-Example-of-a-LwM2M-Server-pushing-a-firmware-image-to-a-LwM2M-client){:target="_blank"}.

### Auto-generate a unique CoAP URL to download the package and push the firmware package via Object 5 and Resource 1.
This option allows running the firmware update with the image file located on the 3rd party storage. In this case the
server generates a CoAP-URL and  sends it to the client, and the client downloads firmware image from the external
resource directly without transferring image to the server. After the downloading is finished, the update process should
be triggered using the executable resource "/5/0/2". The full process is illustrated here: [Example of a client fetching a firmware image](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#Figure-E62-2-Example-of-a-client-fetching-a-firmware-image/){:target="_blank"}.

## Software over-the-air updates

LwM2M protocol allows you to upload and distribute over-the-air(OTA) software updates to devices. Please read first the
following article [OTA updates](/docs/{{docsPrefix}}user-guide/ota-updates/){:target="_blank"} to learn about uploading and managing
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

{% include images-gallery.html imageCollection="software-update-strategy" %}

### Push software update as binary file using Object 9 and Resource 2.
The software package is pushed from the server directly to the device via the block-wise transfer to the Resource 2 of 
the Object 9.

### Auto-generate a unique CoAP URL to download the package and push the software package via Object 9 and Resource 3.
This option allows running the software update with the image file located on the 3rd party storage. In this case 
the server generates a CoAP-URL and  sends it to the client, and the client downloads software image from the external 
resource directly without transferring image to the server.

## Advanced topics

### Object and Resource attributes

Please note that attributes in LwM2M context are different and not related to Server, Client or Shared attributes on 
the Thingsboard platform.

In LwM2M protocol, attributes are metadata which can be attached to an Object, an Object Instance, or a Resource. These 
attributes can fulfil various roles, from carrying information only to carrying parameters for setting up certain
actions on the LwM2M Client (e.g., Notifications).

Attributes attached to Objects, Object Instances, Resources are respectively named O-Attribute, OI-Attribute, R-Attribute.

These Attributes MAY be carried in the message payload of Registration and Discover operations; they also MAY be
updated - when writable - through the [Write-Attributes](/docs/{{docsPrefix}}reference/lwm2m-api/#write-attributes-operation){:target="_blank"} operation.

There are two types of attributes:

<b> PROPERTIES Class Attributes, or Object Attributes </b> 

The role of these Attributes is to provide metadata which may communicate helpful information to the LwM2M Server, for 
example easing data management. Thingsboard supports Object Version attribute, which indicates the version of the 
associated Object and is displayed in the results of [DiscoverAll](/docs/{{docsPrefix}}reference/lwm2m-api/#discover-all-operation){:target="_blank"} command.

You can find more details about all available in LwM2M Object attributes here: [PROPERTIES Class Attributes](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#Table-512-1-lessPROPERTIESgreater-Class-Attributes){:target="_blank"}

<b> NOTIFICATION Class Attributes, or Resource Attributes </b> 

The role of these R-Attributes is to provide parameters to the "Notify" operation, which is used for the resource 
observation. Any readable Resource can have such R-attributes.

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

Please find more details about all available in LwM2M NOTIFICATION attributes [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/HTML-Version/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.html#Table-512-2-lessNOTIFICATIONgreater-class-Attributes){:target="_blank"}.

Notification attributes can be configured in the Device Profile, please follow the guide:

{% include images-gallery.html imageCollection="object-attributes" %}

### DTLS configuration

The Thingsboard platform supports secured connection using DTLS. DTLS, which stands for Datagram Transport Layer
Security, is based on the Transport Layer Security (TLS) protocol and built on top of the User Datagram Protocol (UDP).
Thingsboard allows the use of DTLS  with the LwM2M transport connection for devices.

You can find detailed information about `LWM2M DTLS-based Security` [here](http://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf#page=19){:target="_blank"}.

There are three authentication methods available on the Thingsboard for LwM2M DTLS: using the Pre-Shared Key(PSK), using
the Raw Public Key(RPK) and using the X.509 certificate.

To use DTLS, the end-user device has to connect to the ThingsBoard server using secured port 5686.

For the demonstration purpose we will use Leshan Demo Client, please refer to the link for downloading and configuration: [here](https://github.com/eclipse/leshan){:target="_blank"}.

#### 1. Pre-shared Key mode (PSK).

The pre-shared key profile offers the most resource-efficient solution for integration of DTLS into LwM2M since pre-shared
ciphersuites recommended in [RFC7925] require a minimum amount of flash space as well as RAM in your device.

Symmetric cryptographic algorithms require only a minimal computational overhead. The size of the exchanged messages
is also kept at a minimum. There is, however, a downside as well: symmetric keys need to be preconfigured to both
communication endpoints.

You need only three strings to configure the connection in the Device profile:

* Endpoint client name: which is used to identify the device and can be any text string.
* Client identity (PSK identity) key: any text string.
* PSK key (security key): should be a random sequence in HexDec format and 32, 64 or 128 characters long.

Example of using  Leshan Demo Client:

    Endpoint client name= "ClientPsk";
    Client identity (PSK identity) = "ClientPskIdentity";
    Client key (PSK key or PSK security key) = "0123456789ABCDEF0123456789ABCDEF";

Example command for start "Leshan client demo" in mode PSK:

```ruby
java -jar leshan-client-demo.jar -u localhost:5686 -lh 0.0.0.0 -lp 10004 -n ClientPsk -i ClientPskIdentity 
-p 0123456789ABCDEF0123456789ABCDEF
    
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

The raw public key profile offers features that sit between the pre-shared key and the certificate-based mode and
combines the benefits of these two profiles. The use of asymmetric cryptography offers improved security but avoids
the overhead associated with certificates and the public key infrastructure.

To configure the connection, you need to do following steps:

   * Generate Client keys and copy-paste the Client Public key to the Device Credentials - Client Key on the Thingsboard platform.
   * Generate Server keys and add them to the Server key-storage file lwm2mserver.jks, copy the file back to the server installation folder.
   * Configure your client’s connection.

We will use OpenSSl tool and follow the guide from Leshan: [here](https://github.com/eclipse/leshan/wiki/Credential-files-format){:target="_blank"}.

<b>Note:</b> This step requires Linux-based OS with Java installed.

1. Create a separate folder where we will keep all generated keys.
2. Thingsboard keeps server keys in the key-storage file "lwm2mserver.jks", please find and copy this file to our folder.
   Default key file location is:

```ruby
/common/transport/lwm2m/src/main/resources/credentials/lwm2mserver.jks
```
{: .copy-code}

{:start="3"}
3. We will use the script below to generate all necessary keys. Just create a text file with any text editor, copy the 
script into it and save the file with *.sh extention, for example 'generate-rpk.sh'

<b> generate-rpk.sh </b>

```ruby
#!/bin/bash
#
# Copyright © 2016-2021 The Thingsboard Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# RPK. Generation of the keys.
echo "====START RPK ========"
echo "Generating client keys..."

# Create EC key pair (private and public) using default openssl pem encoding:
openssl ecparam -out keysClient.pem -name prime256v1 -genkey

# Convert Client Private Key to PKCS#8 format (DER encoding):
openssl pkcs8 -topk8 -inform PEM -outform DER -in keysClient.pem -out cprik.der -nocrypt

# Output Client Public Key portion in SubjectPublicKeyInfo format (DER encoding):
openssl ec -in keysClient.pem -pubout -outform DER -out cpubk.der

echo "Client public key in base64 format. Copy this key to the Thingsboard - Client Key field in Device Credentials"
base64 cpubk.der

# get server keys

# Importing keystore lwm2mserver.jks alias="server" to scertServer.p12
keytool -importkeystore -srckeystore lwm2mserver.jks -alias server -destkeystore scertServer.p12 -deststoretype PKCS12

# Importing keystore lwm2mserver.jks to scert.p12...
# Enter destination keystore password:  server_ks_password
# Re-enter new password: server_ks_password
# Enter source keystore password:  server_ks_password

# Generating scertServer.pem:
openssl pkcs12 -in scertServer.p12  -nodes -nocerts -out scertServer.pem
echo Enter Import Password: server_ks_password

# Server public key in base64 format  (spubk.pem):
openssl ec -in scertServer.pem -pubout -outform DER -out spubk.der
```
{: .copy-code}

Please note that script us using the default password for "lwm2mserver.jks" file. If you are going to use another password,
please also update it in ["thingsboard.yml"](https://thingsboard.io/docs/user-guide/install/config/){:target="_blank"} configuration file:

```ruby
...
lwm2m:
    ...
    server:
      ...
      security:
        ...
        key_alias: "${LWM2M_SERVER_KEY_ALIAS:server}"
        key_password: "${LWM2M_SERVER_KEY_PASSWORD:server_ks_password}"
        ...

```

{:start="4"}
4. To run the script, use following commands:

```ruby
chmod +x generate-rpk.sh
sudo ./generate-rpk.sh
```
This script will run keytool and ssh utilities. It will generate the following output files:

* lwm2mserver.jks - Server keystore file. 
* keysClient.pem - Client Public \ Private Key pair 
* cprik.der - Client Private Key in DER format with Base64 encryption
* cpubk.der - Client Public Key in DER format
* spubk.der - Server public key in DER format
* scertServer.pem - Server public key with no encryption 
  
{:start="5"}
5. Configure Device on the Thingsboard platform:

* Endpoint name: input unique text string used to identify the client device
* Client key:
In terminal, Open the cprik.der file using Base64 command and copy the code to Client key field:
  
```ruby
#command:
$ Base64 cpubk.der

#Output:
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEdvBZZ2vQRK9wgDhctj6B1c7bxR3Z0wYg1+YdoYFnVUKWb+rIfTTyYK9tmQJx5Vlb5fxdLnVv1RJOPiwsLIQbAA==
```

{:start="6"}
6. Example command to launch  "Leshan demo client" in RPK mode:

```ruby
#command:
$ java -jar leshan-client-demo.jar -u localhost:5686 -lh 0.0.0.0 -lp 10004 -n ClientRpk -cpubk cpubk.der -cprik cprik.der -spubk spubk.der

#Output:
Leshan Client Demo Interactive Console :
 
Commands:
  help	Displays help information about the specified command
  create  Enable a new Object
  delete  Disable a new object
  update  Trigger a registration update.
  send	Send data to server
  move	Simulate client mouvement.
 
Press Ctl-C to exit.
 
              	LeshanClient 2021-10-27 10:37:21,196 [INFO] Starting Leshan client ...
   CaliforniumEndpointsManager 2021-10-27 10:37:21,470 [INFO] New endpoint created for server coaps://18.184.200.162:5686 at coaps://[0:0:0:0:0:0:0:0]:10004
              	LeshanClient 2021-10-27 10:37:21,472 [INFO] Leshan client[endpoint:leshan-rpkz] started.
 	DefaultRegistrationEngine 2021-10-27 10:37:21,474 [INFO] Trying to register to coaps://18.184.200.162:5686 ...
          	LeshanClientDemo 2021-10-27 10:37:21,549 [INFO] DTLS Full Handshake initiated by client : STARTED ...
          	LeshanClientDemo 2021-10-27 10:37:21,729 [INFO] DTLS Full Handshake initiated by client : SUCCEED
 	DefaultRegistrationEngine 2021-10-27 10:37:21,771 [INFO] Registered with location '/rd/yyIIQFyg6H'.
 	DefaultRegistrationEngine 2021-10-27 10:37:21,773 [INFO] Next registration update to coaps://18.184.200.162:5686 in 53s...
```

