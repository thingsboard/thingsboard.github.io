---
layout: docwithnav
title: Self-Provisioning of Devices
description: IoT device management using ThingsBoard provision devices feature

---

* TOC
{:toc}

## Use Case description

As a Tenant, I would like to easily provision my devices in the system.
After the provision request succeeded, the device would receive the TB credentials to use them for the data upload.

![image](/images/user-guide/provision-devices/provision-diagram.png)

## Provision Profile

Provision profile is an entity that is used to validate the provision request from the device.
In addition, it has important information about the device's future ownership, entity group relation, etc. See below for more details.

[Provision request](/docs/user-guide/provision-devices/#provision-request) is needed to be sent in order to provision the device in the system.
Consequentially, a Tenant needs to create a provision profile first to start device provisioning.

Provision profile contains:

- **provision credentials** - which includes provision **key** and **secret**;
- **tenant id** - it is used to provision device for the specific tenant;
- **customer id** - if present (optional parameter), it is used to provision device at the customer level;
- **group name** (available in PE version) - if present (optional parameter), it is used to automatically add the device to a specific group;
- **provision validation strategy** - allows to provision the device in different ways, see below for more details.

In order to create the provision profile, the following POST request is needed to be sent to the following URL:

```shell
http(s)://host:port/api/device/provision
```

The request body is optional. However, it is needed to be a valid JSON object if specified:

```json
{
  "createdTime": 0,
  "credentials": {
    "provisionProfileKey": "string",
    "provisionProfileSecret": "string"
  },
  "customerId": {
    "entityType": "CUSTOMER",
    "id": "string"
  },
  "id": {
    "entityType": "PROVISION_PROFILE",
    "id": "string"
  },
  "tenantId": {
    "entityType": "TENANT",
    "id": "string"
  },
  "strategy": {
    "validationStrategyType": "string"
  },
  "groupName": "string"
}
```

The system will generate the **provisionProfileKey** and **provisionProfileSecret** in case they are absent.
They will be in the form of 20 random alphanumeric symbols:

```text
rb5r4tb6Win6F6puGL5J
```

**Please note:** Each device could be provisioned only once.

## Provision Strategies

There are different strategies that would help cover different cases of device's self-provisioning. One of the two existed strategies can be chosen at the moment.

### Provision Strategy - CHECK_NEW_DEVICE

The given strategy named **CHECK_NEW_DEVICE** covers the next logic. The device sends the provision request.
The server validates the request, creates the device in the system if absent and returns the device credentials. 
It is considered now the device is provisioned successfully. In such a case, the device now has the server-side attribute **provisionState** set to **provisioned**.
In case the device already exists in the DB, the failure message is returned with no device credentials.

### Provision Strategy - CHECK_PRE_PROVISIONED_DEVICE

The strategy named **CHECK_PRE_PROVISIONED_DEVICE** allows to provision device that is already present in the DB. If the device is absent in the DB, the request will be failed.
For instance, Tenant knows the device name and has created it in the system using UI or [bulk provisioning feature](/docs/user-guide/bulk-provisioning).
Device sends provision requests. The server validates it, finds the device and checks whether the device was provisioned earlier.
It is done using the server-side attribute **provisionState**. If the value is **provisioned**, the failure message with no credentials is returned.
Otherwise, the **provisionState** attribute is saved and the device credentials are returned.

## Provision Request

Device may send the provision request to TB using all supported transport protocols. The message body has several parameters:
- **deviceName** - name of the device;
- **deviceType** - type of the device;
- **x509CertPubKey** - x.509 public key **optional** parameter, if present, the device will be provisioned using ***x.509 Certificate*** device credentials, otherwise the ***access token*** device credentials will be used;
- **provisionProfileKey** - provision key that must equal provision key from the [provision profile](/docs/user-guide/provision-devices/#provision-profile);
- **provisionProfileSecret** - provision secret that must equal provision secret from the [provision profile](/docs/user-guide/provision-devices/#provision-profile);

Please see the Device API references to get the information about the message structure and topics/URLs to which to send the provision requests.

 - [MQTT Device API](/docs/reference/mqtt-api/#device-provision)
 - [CoAP Device API](/docs/reference/coap-api/#device-provision)
 - [HTTP Device API](/docs/reference/http-api/#device-provision)
 - [MQTT Gateway API](/docs/reference/gateway-mqtt-api/#device-provision)

Once the provision request succeeds, the device credentials are returned to be able to start the data upload.
In case the request contains the provision key and secret pair that is absent in the DB, the appropriate message is returned.

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}