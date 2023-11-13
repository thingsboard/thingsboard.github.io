---
layout: docwithnav
title: Alarms based on sensor readings
description: Triggering email alarms based on IoT sensor readings and configurable thresholds

---

{% include templates/old-guide-notice.md %}

* TOC
{:toc}

This tutorial will demonstrate how to configure Rule that will generate Alarm when certain device reports temperature or humidity that exceeds certain thresholds.

Let's assume that we have devices that are able to report humidity and temperature values. 
We have one device per room (zone) in the building or other facility and we want to specify different rules based on zone type.

## Assumptions

We assume you have already configured email plugin that will distribute generated alarms to recipients. You can follow previous [tutorial](/docs/samples/alarms/mail/) to do this. 

## How it works?

We will provision simple rule that filters incoming data using:
 
 - "Message type" filter to react on telemetry data.
 - "Device Attributes" filter to process data from a device that has certain room type as a server side attribute.
 - "Device Telemetry" filter to detect humidity and temperature values that are out of pre-configured range.

## Device provisioning

Let's create a Device and provision certain server-side attributes: ZoneId and ZoneType.

#### Step 1. Create Device

Navigate to [devices](https://demo.thingsboard.io/devices) page and click on big red "+" button. Populate device name and description and click "Add" button.

![image](/images/samples/alarms/add-device.png)

#### Step 2. Provision ZoneID and ZoneType attributes

Open device card that you have created. Navigate to "Attributes" tab and select "Server" attributes scope.

![image](/images/samples/alarms/server-attributes-table.png)

Click on the highlighted "+" button. Add two attributes "ZoneId" and "ZoneType" as shown below. We will use them later in the rule filters.

![image](/images/samples/alarms/zone-id.png)
![image](/images/samples/alarms/zone-type.png)

## Rule configuration

#### Step 3. Create "Server Room Monitoring" Rule

Navigate to [rules](https://demo.thingsboard.io/rules) page and click on big red "+" button. Populate rule name and description first.

![image](/images/samples/alarms/add-rule.png)

Our rule will contain three filters as described in "[how it works](#how-it-works)" section.

#### Step 4. Message type filter

Add filter based on message type (see image below).

![image](/images/samples/alarms/msg-filter.png)

#### Step 5. Attributes filter

Add filter based on the server-side attributes (see image below).

```javascript
typeof ss.ZoneType !== 'undefined' && ss.ZoneType === 'Server Room'
```

![image](/images/samples/alarms/attributes-filter.png)

#### Step 6. Telemetry filter

```javascript
(
    typeof temperature !== 'undefined' 
    && (temperature <= 10 || temperature >= 25)
)
|| 
(
    typeof humidity !== 'undefined' 
    && (humidity <= 40 || humidity >= 60)
)
```

Add filter based on the sensor reading (see image below).

![image](/images/samples/alarms/telemetry-filter.png)

#### Step 7. Alarm Processor

Let's add simple processor that will generate and save alarm to the database based on templates below.

Alarm ID:

```text
[$date.get('yyyy-MM-dd HH:mm')] $ss.get('ZoneId') HVAC malfunction detected!
```

Alarm Body:

```text
[$date.get('yyyy-MM-dd HH:mm:ss')] $ss.get('ZoneId') HVAC malfunction detected. 
Temperature - $temperature.valueAsString (°C). 
Humidity - $humidity.valueAsString (%)!
```

![image](/images/samples/alarms/add-processor.png)

**NOTE** Alarm Id is a unique identifier. If there will be multiple events that match filters, alarms will be de-duplicated based on the Alarm Id. 
An email will be sent once per alarm. 

In our case, we use a timestamp that is truncated to minutes to make sure that we will send an email once per minute or less frequently. 

#### Step 8. Rule Action

Select "SendGrid Email Plugin" from previous [tutorial](/docs/samples/alarms/mail/) and click on "Create" button.
Don't forget to replace "thingsboard@gmail.com" with your email address.

![image](/images/samples/alarms/add-action.png)

#### Step 9. Save and Activate Rule

Once a rule is saved successfully, don't forget to activate it by clicking on "Activate" button (see image below).

![image](/images/samples/alarms/activate-rule.png)

## Dry run

Let's check our configuration by publishing some telemetry data. We will use access token from the device that we have created in the [first step](#step1-create-device).
 
```shell
mosquitto_pub -d -h "demo.thingsboard.io" -t "v1/devices/me/telemetry" -u "$YOUR_ACCESS_TOKEN" -m "{'temperature':42, 'humidity':74}"
```

## Troubleshooting

If you have configured something wrong, you should see errors logged on the corresponding tab:

![image](/images/samples/alarms/rule-events.png)

If there is no error in the rule, but you can't see the email - check errors in the target plugin.
