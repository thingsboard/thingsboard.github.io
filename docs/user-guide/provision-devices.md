---
layout: docwithnav
title: Provision devices
description: IoT device management using ThingsBoard provision devices feature

---

* TOC
{:toc}

## Use Case description

As a Tenant, I would like to easily provision my devices in the system.
After the provision is finished, the device would receive the TB credentials to use them for the data upload.

## Provision Profile

Provision profile is an entity that is used to validate the provision request from the device.
In addition, it has important information about the device's future ownership, entity group relation, etc. See below for more details.

[Provision request](/docs/user-guide/provision-devices/#provision-request) is needed to be sent in order to provision the device in the system.
Consequentially, a Tenant needs to create a provision profile first to start device provisioning.

Provision profile contains:

- **provision credentials** - which includes provision **key** and **secret**;
- **tenant id** - it is used to provision device for the specific tenant;
- **customer id** - if present, it is used to provision device at the customer level;
- **group name** (available in PE version) - if present, it is used to automatically add the device to a specific group;
- **pre-provision allowed** - if true, allows to provision the device that is present in the DB.

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
  "preProvisionAllowed": false,
  "groupName": "string"
}
```

The system will generate the **provisionProfileKey** and **provisionProfileSecret** in case they are absent.
They will be in the form of 20 random alphanumeric symbols:

```text
rb5r4tb6Win6F6puGL5J
```

**Please note:** Each device could be provisioned only once.

As we mentioned before, the **preProvisionAllowed** field is used to allow to provision the device and to receive its credentials in case the device is already present in the DB.
Thus, a server-side **provisionState** attribute with the value **provisioned** will be created when the device is provisioned successfully. 
If the device already has such attribute with the above value, the provision will be failed and no device credentials will be returned.

Let's review an example:

A Tenant knows the device names and has created them in the system using UI or [bulk provisioning feature](/docs/user-guide/bulk-provisioning).
Since the devices are present in the DB, the **preProvisionAllowed** field is set to **true** in the provision profile that is used to provision those devices.
Afterward, the devices send the provision request and receive their credentials in case of success. 
The devices now have the server-side attribute **provisionState** set to **provisioned**.
The devices send another provision requests which are failed since the devices have been provisioned and attributes have already been persisted.

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