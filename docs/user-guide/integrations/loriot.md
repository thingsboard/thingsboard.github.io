---
layout: docwithnav 
title: LORIOT Integration 
description: LORIOT Integration Guide 
register:
    0:
        image: /images/loriot/loriot_register.png 
    1:
        image: /images/loriot/loriot_server.png

server:
    0:
        image: /images/loriot/loriot_and_thingsboard_integration_server_1.png

downlink_server:
    0:
        image: /images/loriot/loriot_and_thingsboard_integration_server.png

applications:
    0:
        image: /images/loriot/loriot_applications.png

application_id:
    0:
        image: /images/loriot/loriot_and_thingsboard_integration_application_id_1.png 

downlink_applications:
    0:
        image: /images/loriot/loriot_applications.png
    1:
        image: /images/loriot/loriot_and_thingsboard_integration_application_id.png

access_token:
    0:
        image: /images/loriot/loriot_access_tokens.png
    1:
        image: /images/loriot/loriut_authentication_tokens.png 
    2:
        image: /images/loriot/loriot_and_thingsboard_integration_application_access_token.png

uplink:
    0:
        image: /images/loriot/uplink_loriot.png 

uplink_edit:
    0:
        image: /images/loriot/uplink_loriot_edit_mode.png 
    1:
        image: /images/loriot/uplink_loriot_save_changes.png
    2:
        image: /images/loriot/uplink_convertor.png

create_downlink:
    0:
        image: /images/loriot/downlink_loriot.png

downlink:
    0:
        image: /images/loriot/downlink_loriot_edit_mode.png
    1:
        image: /images/loriot/downlink_loriot_save_changes.png

devices:
    0:
        image: /images/loriot/loriot_devices.png
    1:
        image: /images/loriot/loriot_device_eui.png

send_downlink:
    0:
        image: /images/loriot/thingsboard_add_integration_send_downlink.png

loriot_output:
    0:
        image: /images/loriot/loriot_output.png

endpoint:
    0:
        image: /images/loriot/loriot_output_http_push.png

basic:
    0:
        image: /images/loriot/thingsboard_add_integration_output_basic.png
    1:
        image: /images/loriot/thingsboard_add_integration_output_basic_email_and_password.png

security_token:
    0:
        image: /images/loriot/thingsboard_add_integration_output_security_token.png
    1:
        image: /images/loriot/loriot_and_thingsboard_output_security_token_session.png

rule_chain:
    0:
        image: /images/loriot/thingsboard_rule_chain_integration_downlink.png

shared_attributes:
    0:
        image: /images/loriot/thingsboard_devices_all_shared_attributes.png
    1:
        image: /images/loriot/thingsboard_devices_all_shared_attributes_update.png

event_in:
    0:
        image: /images/loriot/thingsboard_downlink_converter_events_in.png

event_out:
    0:
        image: /images/loriot/thingsboard_downlink_converter_events_out.png

parameters:
    0:
        image: /images/loriot/loriot_devices_downlink_queue.png

integration:
    0:
        image: /images/loriot/thingsboard_add_integration_1.png

enable_security:
    0:
        image: /images/loriot/integration_edit_mode.png
    1:
        image: /images/loriot/integration_enable_security.png
    2:
        image: /images/loriot/integration_enable_security_headers_filter_value.png

custom_authorization:
    0:
        image: /images/loriot/custom_authorization.png

terminal:
    0:
        image: /images/loriot/terminal.png

terminal_1:
    0:
        image: /images/loriot/terminal_1.png

device_groups:
    0:
        image: /images/loriot/thingsboard_devices_all_attributes.png

uplink_events:
    0:
        image: /images/loriot/thingsboard_uplink_converter_events_in.png
    1:
        image: /images/loriot/thingsboard_uplink_converter_events_out.png

endpoint_url:
    0:
        image: /images/loriot/endpoint_url.png

solution_templates:
    0:
        image: /images/loriot/solution_templates.png

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC 
{:toc}

## Overview

LORIOT is LoRaWAN network designed for connecting your devices using LoRaWAN stack. After integrating LORIOT with the
ThingsBoard, you can connect, communicate, process and visualize data from devices in the ThingsBoard IoT platform.

## Create LORIOT account

Choosing a package of services and server location. Then we register an account with LORIOT. For example, select the
community public network server.

{% include images-gallery.html imageCollection="register" %}

*The LORIOT interface may change in the future.*

Fill in the registration fields. The registration confirmation letter will be sent to the specified email. Follow the
specified link. 

## Create Uplink Converter

Before creating the integration, you need to create an **Uplink converter** in **Data converters.**
Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard.
Click on the **"plus"** and on **"Create new converter".** 
To view the events, enable **Debug.** In the function decoder field, specify a script to parse
and transform data. 

**NOTE** Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging.

{% include images-gallery.html imageCollection="uplink" %}

Let's review sample uplink message from LORIOT:

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
As you can see the unique device id arrives in the "EUI" field. We will use it as a device name in ThingsBoard. Device data is encoded in the "data" field.
The encoded data here is:
```
"data": "2A3F"
```
Let's convert them into temperature and humidity values.

**2A** is the value for **temperature.** In decoded form it will be **42**

**3F** is the value for **humidity.** In decoded form it will be **63**

In the converter it will be indicated like this:

```
temperature: stringToInt(payloadJson.data.substring(0,2)),
humidity: stringToInt(payloadJson.data.substring(2,4))
```



**Example for the Uplink converter:**

```javascript
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object
/** Decoder **/
// decode payload to JSON
var payloadJson = decodeToJson(payload);
// Use EUI as unique device name.
var deviceName = payloadJson.EUI;
// Specify the device type. Use one data converter per device type or application.
var deviceType = 'temperature-sensor';
// Optionally, add the customer name and device group to automatically create them in ThingsBoard and assign new device to it.
// var customerName = 'customer';
// var groupName = 'thermostat devices';
// Result object with device/asset attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: deviceType,
//   customerName: customerName,
//   groupName: groupName,
   attributes: {},
   telemetry: {
        ts: payloadJson.ts,
        values: {
            temperature: stringToInt(payloadJson.data.substring(0,2)),
            humidity: stringToInt(payloadJson.data.substring(2,4)),
            fcnt: payloadJson.fcnt,
            port: payloadJson.port,
            freq: payloadJson.freq,
            dr: payloadJson.dr,
            rssi: payloadJson.rssi,
            snr: payloadJson.snr,
            rawData: payloadJson.data
       }
   }
};
/** Helper functions **/
function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}
function decodeToJson(payload) {
   // covert payload to string.
   var str = decodeToString(payload);
   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}
function stringToInt(hex) {
    return parseInt('0x' + hex.match(/../g).reverse().join(''));
}
return result;

``` 
{: .copy-code}

You can change the decoder function while creating the converter or after creating it. If the converter has already been created, then click on the "pencil" icon to edit it.
Copy the configuration example for the converter (or your own configuration) and insert it into the decoder function. Save changes by clicking on the "checkmark" icon.

{% include images-gallery.html imageCollection="uplink_edit" %}


## Create Integration

Now that the Uplink converter has been created, it is possible to create an integration.

{% include images-gallery.html imageCollection="integration" %}

In order for data to be transferred from LORIOT to ThingsBoard, you need to configure an **Output** for your LORIOT application. You can do this manually (recommended) or ThingsBoard Integration can do this for you (you will need to specify login and password from your LORIOT account for us to be able to automatically provision the output).  
<br>

<div style="font-size: 20px; margin-bottom: 8px; font-weight: bold;">Configuration the Output options</div>


We can create Output with LORIOT or in integration by enabling the **Create Loriot Application output** option or specifying the “Basic” credential.

{% capture authorizationTypes %}
LORIOT Account<br/><small>Recommended</small>%,%loriot-account%,%templates/integration/loriot/loriot-account-authorization-type.md%br%
Basic Credential<br/>%,%basic-credential%,%templates/integration/loriot/thingsboard-basic-credentials.md{% endcapture %}

{% include content-toggle.html content-toggle-id="loriotAuthorizationTypes" toggle-spec=authorizationTypes %}

<div style="font-size: 20px; margin-bottom: 8px; font-weight: bold;">Enable security option</div>

If necessary, you can specify additional parameters, without which the data will not be included in the integration. To do this, check the Enable security checkbox and click on the Headers filter. Specify an arbitrary value and save the changes.

{% include images-gallery.html imageCollection="enable_security" %}

Also need to specify this in LORIOT:

{% include images-gallery.html imageCollection="custom_authorization" %}

Once the Headers filter has been configured, it will also need to be specified in the uplink message as follows. Replace $VALUE with corresponding value.

```
-H “Authorization:$VALUE”
```

## Send test Uplink message

It may be useful to "emulate" the message from device using console instead of the LORIOT server. To send an uplink message, you need a **HTTP endpoint URL** from the integration, **port** and **EUI** from LORIOT. 

Let`s go to the **Integrations** tab in ThingsBoard. Find your LORIOT integration and click on it. There you can find the HTTP endpoint URL. Click on the icon to copy the url.

{% include images-gallery.html imageCollection="endpoint_url" %}

A **port** can be from 1 to 223. **EUI** is device EUI and is taken from the device in LORIOT. 

Get **EUI** in LORIOT in the Devices section, where the devices have already been created:

{% include images-gallery.html imageCollection="devices" %}

Use this command to send message. Replace $YOUR_EUI_DEVICE and $YOUR_HTTP_ENDPOINT_URL with corresponding values. 

```bash
curl -v -X POST -d "{\"EUI\":\"$YOUR_EUI_DEVICE\",\"deviceType\":\"temperature-sensor\",\"data\":\"2A3F\",\"port\":1,\"cmd\":\"rx\",\"dr\":\"SF12 BW125 4/5\",\"snr\":1.2,\"ack\":\"false\",\"freq\":868500000,\"fcnt\":1,\"rssi\":-130,\"ts\":1613745998000}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code}

{% include images-gallery.html imageCollection="terminal" %}

With the **enable security** option: replace $YOUR_EUI_DEVICE, $YOUR_HTTP_ENDPOINT_URL and $VALUE with corresponding values. 

```bash
curl -v -X POST -d "{\"EUI\":\"$YOUR_EUI_DEVICE\",\"deviceType\":\"temperature-sensor\",\"data\":\"2A3F\",\"port\":1,\"cmd\":\"rx\",\"dr\":\"SF12 BW125 4/5\",\"snr\":1.2,\"ack\":\"false\",\"freq\":868500000,\"fcnt\":1,\"rssi\":-130,\"ts\":1613745998000}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json" -H “Authorization:$VALUE”
```
{: .copy-code}

{% include images-gallery.html imageCollection="terminal_1" %}

The created device with data can be seen in the section **Device groups -> All**

{% include images-gallery.html imageCollection="device_groups" %}

Received data can be viewed in the Uplink converter. In the **“In”** and **"Out"** blocks of the **Events** tab:

{% include images-gallery.html imageCollection="uplink_events" %}

Use the Dashboards to work with data. Dashboards are a modern format for collecting and visualizing data sets. Visibility of data presentation is achieved through a variety of widgets. 

ThingsBoard has examples of several types of dashboards that you can use. You can find them in **Solution templates** tab.

{% include images-gallery.html imageCollection="solution_templates" %}

How to work with dashboards [read here](/docs/user-guide/dashboards/)



## Advanced Usage: Create Downlink Converter

Create Downlink in **Data converters.** To see events - enable **Debug.**

{% include images-gallery.html imageCollection="create_downlink" %}


You can customize the downlink according to your configuration. Let's consider an example where we send an attribute update message. So we should change code in the downlink encoder function under
line `//downlink data input`

```
data: msg.firmware
```

Also, indicate the required parameters in the metadata:

```
metadata: {
  "EUI": "$Device_EUI",
  "port": 1
}
```
Example for downlink converter:

```javascript
// Encode downlink data from incoming Rule Engine message
// msg - JSON message payload downlink message json
// msgType - type of message, for ex. 'ATTRIBUTES_UPDATED', 'POST_TELEMETRY_REQUEST', etc.
// metadata - list of key-value pairs with additional data about the message
// integrationMetadata - list of key-value pairs with additional data defined in Integration executing this converter
// Result object with encoded downlink payload
var result = {
    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "TEXT",
    // downlink data
    data: msg.firmware,
    // Optional metadata object presented in key/value format
    metadata: {
            "EUI": "BE7A000000000552",
            "port": 1
    }
};
return result;

``` 
{: .copy-code}

where **EUI** is device EUI and is taken from the device in LORIOT. 
A **port** can be from 1 to 223

{% include images-gallery.html imageCollection="downlink" %}

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

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}



