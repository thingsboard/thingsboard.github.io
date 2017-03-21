---
layout: docwithnav
assignees:
- ashvayka
title: Devices
description: Thingsboard IoT Device management

---

Thingsboard support following device management features using Web UI and [REST API](/docs/reference/rest-api/).

* TOC
{:toc}

## Add and delete devices

Tenant administrator is able to register new devices or delete them from Thingsboard.

![image](/images/user-guide/ui/devices.png)

## Manage device credentials

Tenant administrator is able to manage device credentials. 
Current release supports Access Token and X.509 Certificates based credentials.

![image](/images/user-guide/ui/manage-device-credentials.png)

## Get Device Id
  
Tenant administrator and customer users are able to copy device id to clipboard using "Copy Device Id" button.

 ![image](/images/user-guide/ui/device-id.png)

## Assign devices to customers

Tenant administrator is able to assign devices to certain [customer](/docs/user-guide/ui/customers/).
This will allow Customer users to fetch device data using REST APIs or web ui.
 
 ![image](/images/user-guide/ui/assign-device-to-customer.png)

## Browse device attributes

Tenant administrator and customer users are able to browse device [attributes](/docs/user-guide/attributes).

 ![image](/images/user-guide/ui/device-attributes.png)

## Browse device telemetry

Tenant administrator and customer users are able to browse device [telemetry data](/docs/user-guide/telemetry).

 ![image](/images/user-guide/ui/device-telemetry.png)

## Browse device events
  
Tenant administrator and customer users are able to browse alarms related to particular device using "Events" tab.
Lifecycle events and statistics are coming soon.
