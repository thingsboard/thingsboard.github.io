{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC 
{:toc}

## Overview

LORIOT is LoRaWAN network designed for connecting your devices using LoRaWAN stack. After integrating LORIOT with the
ThingsBoard, you can connect, communicate, process and visualize data from devices in the ThingsBoard IoT platform.

## Create Loriot account

Choosing a package of services and server location. Then we register an account with Loriot. For example, select the
community public network server.

{% include images-gallery.html imageCollection="register" %}

*The LORIOT interface may change in the future.*

Fill in the registration fields. The registration confirmation letter will be sent to the specified email. Follow the
specified link. 

## Create Loriot integration

**1. Basic settings**.

- Go to the "**Integrations**" page of the "**Integrations center**" section. Click "plus" button to start adding new integration. 
- Select integration type "**Loriot**". To view the events, enable [debug mode](#debug-mode){:target="_blank"}.

{% assign feature = "integrations" %}{% include templates/debug-mode.md %}

- Click "**Next**".

![image](/images/user-guide/integrations/loriot/loriot-add-integration-1-pe.png)

<br>

**2. Uplink data converter**. 

Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard.

Starting from **ThingsBoard 4.0**, we have simplified the process of writing converters for Loriot integration. You can now easily choose where the message fields from the integration should go (attributes or telemetry) without manually defining this in the decoder function.

> **Note**: Converters created before the release of ThingsBoard 4.0 will still be available and will continue to function properly.

Let's review sample uplink message from Loriot:

```
{
     "cmd"  : "rx",
     "EUI"  : "BE7A000000000552",
     "ts"   : 1470850675433,
     "ack"  : false,
     "fcnt" : 1,
     "port" : 1,
     "data" : "2A3F",
     "freq" : 868500000,
     "dr"   : "SF12 BW125 4/5",
     "rssi" : -130,
     "snr"  : 1.2
 }
```
As you can see the unique device id arrives in the "**EUI**" field. We will use it as a device name in ThingsBoard. 

Device data is encoded in the "**data**" field. The encoded data here is:

```
"data": "2A3F"
```

Let's convert them into temperature and humidity values.

**2A** is the value for **temperature.** In decoded form it will be **42**

**3F** is the value for **humidity.** In decoded form it will be **63**

Let's return to configuring the integration:

- Enter a name for the converter. It must be unique.
- To view the events, enable [debug mode](#debug-mode){:target="_blank"}.
- In the "**Main decoding configuration**" section
  - Select the entity type (**Device** or **Asset**) that will be created as a result of the integration, and specify the entity name. The **$eui** pattern will dynamically fetch the device&#39;s unique identifier from the Loriot message.
  - Use the existing script for parsing and transforming data, or provide your own custom script.

![image](/images/user-guide/integrations/loriot/loriot-add-integration-2-1-pe.png)

- **Advanced decoding parameters**" section: 
  - The **Device profile**, **Device label**, **Customer name**, and **Device group name** fields are not mandatory, and you can also use the $ pattern to populate them dynamically.
  - In the **Attributes** and **Telemetry** sections specify the keys that should be interpreted as attributes and telemetry, respectively.
  - In the **Update only keys list** section, define keys whose values will be saved to the database only if they have changed from the previous incoming message.This applies to both Attributes and Telemetry, helping optimize data storage.
- Once the uplink converter is set up, click "**Next**".

![image](/images/user-guide/integrations/loriot/loriot-add-integration-2-2-pe.png)

**3. Downlink data converter**.

At the step of adding a downlink converter, you can also select a previously created or create a new downlink converter. But for now, leave the "**Downlink data converter**" field empty.   
Click "**Skip**".

![image](/images/user-guide/integrations/loriot/loriot-add-integration-3-pe.png)

**4. Connection**.

In order for data to be transferred from Loriot to ThingsBoard, you need to configure an **Output** for your Loriot application. You can do this manually (recommended) or ThingsBoard Integration can do this for you (you will need to specify login and password from your Loriot account for us to be able to automatically provision the output).

We can create Output with LORIOT or in integration by enabling the **Create Loriot Application output** option or specifying the “Basic” credential.

{% capture loriotAuthorizationTypes %}
Use Loriot account<br><small>Recommended</small>%,%loriot-account%,%templates/integration/loriot/loriot-account-authorization-type.md%br%
Create Loriot Application output<br><small></small>%,%basic-credential%,%templates/integration/loriot/thingsboard-basic-credentials.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="loriotAuthorizationTypes" toggle-spec=loriotAuthorizationTypes %}

**Enable security option**

If necessary, you can specify additional parameters, without which the data will not be included in the integration.

To do this, turn on the "Enable security" option. Click "Add" and enter an arbitrary value for the "Header" and "Value" fields.  Then, save the changes.

{% include images-gallery.html imageCollection="enable_security" %}

Also need to specify this in Loriot:

{% include images-gallery.html imageCollection="custom_authorization" %}

<br>
Once the Headers filter has been configured, it will also need to be specified in the uplink message in the format:

```
-H "$HEADER:$VALUE"
```
{: .copy-code}

Example:

```
-H "authorization:secret"
```

## Send Uplink message

It may be useful to "emulate" the message from device using console instead of the Loriot server. To send an uplink message, you need a **HTTP endpoint URL** from the integration. 

Use this command to send message. Replace **$HTTP_ENDPOINT_URL** with corresponding values. 

```bash
curl -v -X POST -d "{\"EUI\":\"BE7A000000000552\",\"data\":\"2A3F\",\"port\":1,\"cmd\":\"rx\",\"dr\":\"SF12 BW125 4/5\",\"snr\":1.2,\"ack\":\"false\",\"freq\":868500000,\"fcnt\":1,\"rssi\":-130,\"ts\":1613745998000}" $HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code}

With the **enable security** option: replace **$HTTP_ENDPOINT_URL** and **$SECURITY_VALUE** with corresponding values. 

```bash
curl -v -X POST -d "{\"EUI\":\"BE7A000000000552\",\"data\":\"2A3F\",\"port\":1,\"cmd\":\"rx\",\"dr\":\"SF12 BW125 4/5\",\"snr\":1.2,\"ack\":\"false\",\"freq\":868500000,\"fcnt\":1,\"rssi\":-130,\"ts\":1613745998000}" $HTTP_ENDPOINT_URL "Content-Type:application/json" -H "$SECURITY_VALUE"
```
{: .copy-code}

To find the "**HTTP endpoint URL**", go to the "Integrations" page in ThingsBoard and click on the integration to open its details. There, you will find the "HTTP endpoint URL.

{% include images-gallery.html imageCollection="endpoint-url" %}

<br>
The created device with data can be seen in the "**"Devices**" page of the "**Entities**" section.

{% include images-gallery.html imageCollection="device" %}

<br>
The data can be viewed in the Uplink converter. In the "**In**" and "**Metadata**" blocks of the "**Events**" tab:

{% include images-gallery.html imageCollection="uplink_events" %}

## Advanced usage: Create downlink converter

Create Downlink in **Data converters**. To see events - enable [debug mode](#debug-mode){:target="_blank"}.

{% include templates/tbel-vs-js.md %}

{% capture loriotdownlinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/loriot/loriot-downlink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/loriot/loriot-downlink-converter-config-java.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="loriotdownlinkconverterconfig" toggle-spec=loriotdownlinkconverterconfig %}

Get EUI in LORIOT in the Devices section, where the devices have already been created:

{% include images-gallery.html imageCollection="devices" %}

Add a converter to the integration.
You can do this at the stage of creating an integration or editing it.

To send Downlink, enable the **Send downlink** option in the integration.
Once we enable the “Send downlink” option, specify the Server, Application ID, Application Access Token in the fields:

{% include images-gallery.html imageCollection="send_downlink" %}

To get this data - go to your account in LORIOT.

Data to fill in the **Server** field:

{% include images-gallery.html imageCollection="downlink_server" %}

Data to fill in the **Application ID** field:

{% include images-gallery.html imageCollection="downlink_applications" %}

After that, go to Application and go to the **Access Tokens** section. Find the token that will be specified in the integration.

{% include images-gallery.html imageCollection="access_token" %}

We can send a message to the device from Rule chain using the rule node. For our example, we create the **integration downlink** node and set the ***“Attributes updated”*** link to it. When changes are made to the attribute, the downlink message will be sent to the integration.

{% include images-gallery.html imageCollection="rule_chain" %}

We go to the **Device group** section in the **All** folder, to see this with an example. We have indicated the firmware of the device in the **Shared attributes.** Now we edit it by clicking on the “pencil” icon. Then we make changes to the attribute (change the firmware from 01052020.v1.1 to 01052020.v1.2) and save the data.

{% include images-gallery.html imageCollection="shared_attributes" %}

Received data and data that was sent can be viewed in the downlink converter.In the **“In”** block of the **Events** tab, we see what data entered:

{% include images-gallery.html imageCollection="event_in" %}

The **“Out”** field displays messages to device:

{% include images-gallery.html imageCollection="event_out" %}

It is possible to check that messages have reached LORIOT on the **Devices -> LoRaWAN Parameters** page at the very bottom in the **Downlink Queue** field.

{% include images-gallery.html imageCollection="parameters" %}


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}



