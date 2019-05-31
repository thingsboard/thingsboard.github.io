---
layout: docwithnav
title: Claiming devices
description: IoT device management using ThingsBoard claiming devices feature

---

* TOC
{:toc}

## Feature Overview

The claiming devices feature allows a ThingsBoard(TB) customer to claim a tenant's device. In terms of TB, to claim the device means to assign specific device to specific customer.
In order to claim the device, the one needs to have a **claimingAllowed** attribute with the value **true** and has not to be assigned to any of the customers.
The process of claiming consists of two steps:

- Send a claiming message from the device using one of three TB transport protocols (HTTP, MQTT, CoAP).
- Confirm claiming device by sending the second message from the UI.

See the following for more details.

In addition, there is a possibility to reclaim the device. This means that the device will be unassigned from the customer and will have a **claimingAllowed** attribute saved again, thus the device
will be available for claiming once more.

## Device Claiming

As mentioned above, in order to send the claiming message from the device and execute the first step, you can use one of the three TB transport protocols. 
In case of MQTT you can also use the MQTT Gateway API that allows to claim multiple devices per time.
Please see the Device API references to get information about the messages structure and calls topics/urls to which to send the claiming messages.
After sending the first claiming message, the claiming info is saved in cache.
The message may have two optional fields - **secretKey** and **durationMs**. The secretKey is responsible for additional security in claiming process and is used as a part value
for a key to store in cache. The durationMs parameter is used to determine the expiration time during which the device can be claimed.

- [MQTT Device API](/docs/reference/mqtt-api/#claiming-devices)

- [CoAP Device API](/docs/reference/coap-api/#claiming-devices)

- [HTTP Device API](/docs/reference/http-api/#claiming-devices)

- [MQTT Gateway API](/docs/reference/gateway-mqtt-api/#claiming-devices-api)

The second step is to confirm claiming from the UI or executing POST curl command to the following URL:

```shell
http(s)://host:port/api/customer/device/$DEVICE_NAME/claim
```

The supported data format is:

```json
{"secretKey":"SECRET_KEY"}
```

**Please note** that the above message is also optional, but the **secretKey** value must equal the **secretKey** from the first step.
So, in case the **secretKey** is empty in the first step, it can be empty in the second.

In order to reclaim the device, you can execute DELETE curl command to the following URL:

```shell
http(s)://host:port/api/customer/device/$DEVICE_NAME/claim?secretKey
```

with the optional request parameter **secretKey**. 

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}