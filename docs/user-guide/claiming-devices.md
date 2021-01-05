---
layout: docwithnav
title: Claiming devices
description: IoT device management using ThingsBoard claiming devices feature

---

* TOC
{:toc}

## Use Case description

As a Tenant, I would like to pre-provision my devices via script or UI. My customers purchase devices directly from me or through the distributors.
I would like my customers to claim their devices based on the QR code or similar technique, once they get physical access to the device.

Once device is claimed, the customer becomes its owner and customer users may access device data as well as control the device.   

## Device Claiming scenarios
 
ThingsBoard User can claim the device if they "know" the device Name and Secret Key. 
The Secret Key is optional, always has an expiration time, and may also change over time. 

The Secret Key may be provisioned in two different ways. 
Either reported by the device (device-side key) or using a server-side device attribute (server-side key).
See below for more details.

### Claiming using Device-side key

This procedure requires a device to generate the Secret Key based on some trigger event. 
For example, once the device is booted or when some physical button is pressed. 
Once the Secret Key is generated, it is valid for a certain period of time. 
The device sends Claiming Information to the server which contains both the Secret Key and the duration of the validity of the key.  
ThingsBoard server stores Claiming Information for the duration of the validity of the key. See the diagram below.

![image](/images/user-guide/claiming-devices/device-side-key-diagram.png)

A Device can send Claiming Information to TB using all supported transport protocols. The message body has two parameters: **secretKey** and **durationMs**, which can be optionally specified. 
The **secretKey** parameter adds security to the claiming process.
The **durationMs** parameter determines the expiration of claiming time.
In case the **secretKey** is not specified, the empty string is used as a default value.
In case the **durationMs** is not specified, the system parameter **device.claim.duration** is used (in the file **/etc/thingsboard/conf/thingsboard.yml**).

In order to enable claiming devices feature a system parameter **security.claim.allowClaimingByDefault** (see [configuration guide](/docs/user-guide/install/config/)) 
should be set to **true**, otherwise, a server-side **claimingAllowed** attribute with the value **true** is obligatory for provisioned devices.

Please see the Device API references to get the information about the message structure and topics/URLs to which to send the claiming messages.
You can use the MQTT Gateway API that allows initiating claiming of multiple devices per time as well.

 - [MQTT Device API](/docs/reference/mqtt-api/#claiming-devices)
 - [CoAP Device API](/docs/reference/coap-api/#claiming-devices)
 - [HTTP Device API](/docs/reference/http-api/#claiming-devices)
 - [MQTT Gateway API](/docs/reference/gateway-mqtt-api/#claiming-devices-api)
 

Once the Claiming Info is sent, the device can display the Secret Key either in plain text or using the QR code. A user should scan this key and use it to send the Claiming Request.
Claiming Request consists of the device Name and Secret Key. You may use MAC address or other unique property as the device Name. 
See instructions on how to send the Claiming Request [here](/docs/user-guide/claiming-devices/#device-claiming-api-request).   

**Note:** The Secret Key may also be an empty string. This is useful if your device does not have any way to display the Secret Key. 
For example, you may allow claiming the device within 30 seconds after the claim button is pressed on the device. In this case, a user needs to know the device Name (MAC address, etc) only.

The server validates the Claiming Request and replies with the Claiming Response. Claiming Response contains the status of the Claiming operation and Device ID if the operation was successful.

Once Claiming Information is provisioned, Customer User can use [Claim Device](/docs/user-guide/claiming-devices/#device-claiming-widget) widget.        

### Claiming using Server-side key

Let's assume you have thousands of NB IoT/LoRaWAN/Sigfox devices connected using one of ThingsBoard [Integrations](/docs/user-guide/integrations/).
The integration layer will automatically provision them in ThingsBoard. 
Assuming Tenant Admin knows the list of DevEUIs (LoRaWAN) or any other device identifiers, 
it is possible to generate a random Secret Key per device and upload this key to ThingsBoard as a server-side attribute using [REST API](https://thingsboard.io/docs/reference/rest-api/) or UI.
Once this is done, the tenant admin can email those keys to the Customer, or put them inside the device package box. 

![image](/images/user-guide/claiming-devices/server-side-key-diagram.png)

In order to provision device Secret Key, the Tenant Administrator should set server-side attribute "claimingData" with the following value:

```json
{"secretKey": "YOUR_SECRET_KEY", "expirationTime": "1640995200000"}
``` 

where 1577836800000 is an expiration time of the device Secret Key that is 01/01/2022 as a unix timestamp with milliseconds precision.

Once server-side attribute is provisioned, the Customer User may use the [Claim Device](/docs/user-guide/claiming-devices/#device-claiming-widget) widget.  

## Device Claiming Permissions in PE

It is important to know that in the case of the PE version the user that is trying to claim the specific device must have the necessary permissions to do so.
In this case, the needed permission is the following:

- **Resource: Device**
- **Operation: Claim devices**

Let's add the above permission for a custom claiming user group.

First, we need to create a generic role:

![image](/images/user-guide/claiming-devices/claiming-generic-role.png)

And then assign that role for a user group:

![image](/images/user-guide/claiming-devices/assign-claiming-role.png)

## Device Claiming Widget

To claim a device widget is quite simple and allows the input of a device name and Secret Key. 

![image](/images/user-guide/claiming-devices/claim-device-widget.png)

It is possible to "hide" Secret Key input field and change the labels in "General settings".

![image](/images/user-guide/claiming-devices/claim-device-widget-advanced-settings.png)

It is also possible to configure all sorts of messages to the user in "Message settings".

![image](/images/user-guide/claiming-devices/claim-device-widget-message-settings.png)

Last, but not least, you can relate the claimed device to the current state entity of the dashboard. 
This is useful if you have multiple assets and would like to relate your device to one of them. 

![image](/images/user-guide/claiming-devices/claim-device-widget-relation-settings.png)


## Device Claiming API Request

The Claiming Request is sent as a POST request to the following URL:

```shell
http(s)://host:port/api/customer/device/$DEVICE_NAME/claim
```

The supported data format is:

```json
{"secretKey":"value"}
```

**Note:** the message does not contain **duarationMs** parameter and the **secretKey** parameter is optional.

Whenever claiming is succeed the device is being assigned to the specific customer. The **claimingAllowed** attribute is automatically deleted in case the system parameter **allowClaimingByDefault** is **false**.

In addition, there is a possibility to reclaim the device, which means the device will be unassigned from the customer. The **claimingAllowed** attribute will appear again in case the **allowClaimingByDefault** is **false**. 

See the following for more details regarding the above steps. 

## Device Reclaiming API Request

In order to reclaim the device, you can send DELETE request to the following URL:

```shell
http(s)://host:port/api/customer/device/$DEVICE_NAME/claim
```

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}