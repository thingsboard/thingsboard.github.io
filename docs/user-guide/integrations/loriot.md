---
layout: docwithnav 
title: Loriot Integration 
description: Loriot Integration Guide 
register:
    0:
        image: /images/loriot/loriot_register.png 
    1:
        image: /images/loriot/loriot_server.png

server:
    0:
        image: /images/loriot/loriot_and_thingsboard_integration_server.png

applications:
    0:
        image: /images/loriot/loriot_applications.png

application_id:
    0:
        image: /images/loriot/loriot_and_thingsboard_integration_application_id.png 
    1:
        image: /images/loriot/loriot_access_tokens.png

tokens:
    0:
        image: /images/loriot/loriut_authentication_tokens.png 
    1:
        image: /images/loriot/loriot_and_thingsboard_integration_application_access_token.png

uplink:
    0:
        image: /images/loriot/uplink_loriot.png 
    1:
        image: /images/loriot/uplink_loriot_edit_mode.png 
    2:
        image: /images/loriot/uplink_loriot_save_changes.png

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
    1:
        image: /images/loriot/thingsboard_add_integration_2.png

enable_security:
    0:
        image: /images/loriot/integration_edit_mode.png
    1:
        image: /images/loriot/integration_enable_security.png
    2:
        image: /images/loriot/integration_enable_security_headers_filter_value.png

terminal:
    0:
        image: /images/loriot/terminal.png

device_groups:
    0:
        image: /images/loriot/thingsboard_devices_all_attributes.png

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC 
{:toc}

## Overview

Loriot is LoRaWAN network designed for connecting your devices using LoRaWAN stack. After integrating Loriot with the
Thingsboard, you can connect, communicate, process and visualize data from devices in the Thingsboard IoT platform.

## Create and configure Loriot account

Choosing a package of services and server location. Then we register an account with Loriot. For example, select the
community public network server.

{% include images-gallery.html imageCollection="register"  %}

*We are not responsible for changing the interface of other service.*

Fill in the registration fields. The registration confirmation letter will be sent to the specified email. Follow the
specified link. After that, the Loriot dashboard will open. The link contains the server that we selected at the
registration stage. It will need to be specified in the integration.

{% include images-gallery.html imageCollection="server"  %}

By default, Applications is already created. It will be used for our integration in the example. To get the value we
need, go to Аpplications.

{% include images-gallery.html imageCollection="applications"  %}

This value will be needed at the stage of creating the integration to fill in the **Application ID** field. Then go to
Application and go to the Access Tokens section.

{% include images-gallery.html imageCollection="application_id"  %}

Find the token that will be specified in the integration.

{% include images-gallery.html imageCollection="tokens"  %}

## Uplink Converter

Before creating the integration, you need to create an **Uplink** in **Data converters.** Click on the "plus" and on "
Create new converter". To view the events, enable **Debug.** In the function decoder field, specify a script to parse
and transform data. Example for the Uplink converter:

```javascript
/** Decoder **/
 
// decode payload to string
// var payloadStr = decodeToString(payload);

// decode payload to JSON
var data = decodeToJson(payload);

var deviceName = data.deviceName;
var deviceType = data.deviceType;

// Result object with device attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: deviceType,
   attributes: {
       port: data.port,
       EUI: data.EUI
   },
   telemetry: {
       temperature: data.temperature
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

return result;

``` 
{: .copy-code}

{% include images-gallery.html imageCollection="uplink"  %}

## Downlink Converter

Create Downlink in **Data converters.** To see events - enable **Debug.**

{% include images-gallery.html imageCollection="create_downlink"  %}

Add a converter to the integration. You can customize the downlink according to your configuration. Let's consider an
example where we send an attribute update message. So we should change code in the downlink encoder function under
line `//downlink data input`

```
data: JSON.stringify(msg)
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
    contentType: "JSON",
    // downlink data
    data: JSON.stringify(msg),
    // Optional metadata object presented in key/value format
    metadata: {
            "EUI": "BE7A000000000552",
            "port": 1
    }
};
return result;

``` 
{: .copy-code}

where **EUI** is device EUI and is taken from the device in Loriot. 
A **port** can be from 1 to 223

{% include images-gallery.html imageCollection="downlink"  %}

Get EUI in Loriot in the Devices section, where the devices have already been created:

{% include images-gallery.html imageCollection="devices"  %}

To send Downlink, enable the Send downlink option in the integration itself and create an Output.
Once we enable the “Send downlink” option, specify the server and Application ID in the fields:

{% include images-gallery.html imageCollection="send_downlink"  %}

<div style="font-size: 20px; margin-bottom: 8px;">Configuration the Output options</div>

We can create Output with Loriot or in integration by enabling the Create Loriot Application output option, specifying the credentials “Basic” or “Security token”.


{% capture authorizationTypes %}
Loriot Account<br/>%,%loriot-account%,%templates/integration/loriot/loriot-account-authorization-type.md%br%
Basic Credential<br/>%,%basic-credential%,%templates/integration/loriot/thingsboard-basic-credentials.md{% endcapture %}

{% include content-toggle.html content-toggle-id="loriotAuthorizationTypes" toggle-spec=authorizationTypes %}

We can send a message to the device from Rule chain using the rule node. For our example, we create the **integration downlink** node and set the ***“Attributes updated”*** link to it. When changes are made to the attribute, the downlink message will be sent to the integration.

{% include images-gallery.html imageCollection="rule_chain"  %}

We go to the **Device group** section in the **All** folder, to see this with an example. We have indicated the firmware of the device in the **Shared attributes.** Now we edit it by clicking on the “pencil” icon. Then we make changes to the attribute (change the firmware from 01052020.v1.1 to 01052020.v1.2) and save the data.

{% include images-gallery.html imageCollection="shared_attributes"  %}

Received data and data that was sent can be viewed in the downlink converter.In the **“In”** block of the **Events** tab, we see what data entered:

{% include images-gallery.html imageCollection="event_in"  %}

The **“Out”** field displays messages to device:

{% include images-gallery.html imageCollection="event_out"  %}

It is possible to check that messages have reached Loriot on the **Devices -> LoRaWAN Parameters** page at the very bottom in the **Downlink Queue** field.

{% include images-gallery.html imageCollection="parameters"  %}

## Create Integration

Now that the Uplink and Downlink converters have been created, it is possible to create an integration with them and with the parameters taken from the Loriot account.

{% include images-gallery.html imageCollection="integration"  %}

<div style="font-size: 20px; margin-bottom: 8px;">Enable security option</div>

If necessary, you can specify additional parameters, without which the data will not be included in the integration. To do this, check the Enable security checkbox and click on the Headers filter. Specify an arbitrary value and save the changes.

{% include images-gallery.html imageCollection="enable_security"  %}

Once the Headers filter has been configured, it will also need to be specified in the uplink message as follows:

```
-H “Authorization:$value”
```
## Send Uplink message

To send an uplink message, you need a link from the integration. 
For example, send a message from the console to ThingsBoard. Example of a sent message:

```bash
curl -v -X POST -d "{\"deviceName\":\"Sensor_A\",\"deviceType\":\"Sensores\",\"temperature\":33,\"port\":1,\"EUI\":\"BE7A000000000552\"}" https://thingsboard.cloud/api/v1/integrations/loriot/a6fbe547-0205-9123-fc07-9d781ad56825 -H "Content-Type:application/json"
```
{: .copy-code}

{% include images-gallery.html imageCollection="terminal"  %}

With the enable security option enabled:

```bash
curl -v -X POST -d "{\"deviceName\":\"Sensor_A\",\"deviceType\":\"Sensores\",\"temperature\":33,\"port\":1,\"EUI\":\"BE7A000000000552\"}" https://thingsboard.cloud/api/v1/integrations/loriot/a6fbe547-0205-9123-fc07-9d781ad56825 -H "Content-Type:application/json" -H “Authorization:$value”
```
{: .copy-code}


The created device with data can be seen in the section **Device groups -> All**

{% include images-gallery.html imageCollection="device_groups"  %}

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}



