---
layout: docwithnav
title: Claiming devices
description: IoT device management using ThingsBoard claiming devices feature

---

* TOC
{:toc}

## Feature Overview

The claiming devices feature allows a ThingsBoard (TB) customers to assign tenant's non-assigned device to themselves without tenant's involving.
In order to enable claiming devices feature a system parameter **security.claim.allowClaimingByDefault** (in the file **/etc/thingsboard/conf/thingsboard.yml**) should be set to **true**, otherwise a server-side **claimingAllowed** attribute with the value **true** is obligatory for provisioned devices.

The claiming flow consists of two steps:
- Sending a claiming initiation message using one of TB supported transport protocols (HTTP, MQTT, CoAP);
- Sending device claiming confirmation message via curl command.

Whenever claiming is succeed the device is being assigned to the specific customer. The **claimingAllowed** attribute is automatically deleted in case the system parameter **allowClaimingByDefault** is **false**.

In addition, there is a possibility to reclaim the device, which means the device will be unassigned from the customer. The **claimingAllowed** attribute will appear again in case the **allowClaimingByDefault** is **false**. 

See the following for more details regarding the above steps.

## Device Claiming

In order to send the claiming initiation message TB supported transport protocols are used. The message body have two parameters: **secretKey** and **durationMs**, which may be optionally specified. 
The **secretKey** parameter adds security in claiming process.
The **durationMs** parameter determines the expiration of claiming time. After receiving the message, the claiming info for particular device is saved in cache. 
In case the **secretKey** is not specified, the empty string as a default value is used.
In case the **durationMs** is not specified, the system parameter **device.claim.duration** is used (in the file **/etc/thingsboard/conf/thingsboard.yml**).

### Sending claiming message

Please see the Device API references to get the information about the message structure and topics/URLs to which to send the claiming messages.
You can use the MQTT Gateway API that allows to initiate claiming of multiple devices per time as well.

 - [MQTT Device API](/docs/reference/mqtt-api/#claiming-devices)
 - [CoAP Device API](/docs/reference/coap-api/#claiming-devices)
 - [HTTP Device API](/docs/reference/http-api/#claiming-devices)
 - [MQTT Gateway API](/docs/reference/gateway-mqtt-api/#claiming-devices-api)
 
### Device claiming confirmation

The second step is to confirm claiming by sending POST request to the following URL:

```shell
http(s)://host:port/api/customer/device/$DEVICE_NAME/claim
```

The supported data format is:

```json
{"secretKey":"value"}
```

**Please note** the message does not contain **duarationMs** parameter and the **secretKey** parameter is optional. 
However, its value must be equal to the **secretKey** value from the first step, i. e. in case the **secretKey** is empty in the first step, it should be empty at this step as well.

## Device reclaiming

In order to reclaim the device, you can send DELETE request to the following URL:

```shell
http(s)://host:port/api/customer/device/$DEVICE_NAME/claim
```

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}