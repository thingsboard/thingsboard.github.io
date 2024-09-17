
* TOC 
{:toc}

## Overview

This manual provides an overview of the alarm notification system functionalities available on the ThingsBoard **Edge** *Platform*. It includes detailed instructions on the fundamental concepts of configuring and utilizing alarms within ThingsBoard **Edge PE**. Key topics covered are the creation of processing rules, configuration of notifications, and event response mechanisms.

For more information, please refer to [working with alarms](/docs/pe/user-guide/alarms/#main-concepts) documentation.

## Prerequisites

- A ThingsBoard **Edge** instance is up and running.

If you have these prerequisites in place, let's go to the next steps.


## Step 1. Create Device

{% include images-gallery.html imageCollection="createDevice" %}

## Step 2. Create Device Profile

In this step, we will create a device profile and add rules (conditions) that will trigger alarm notifications. 

Configuring the device profile allows you to set the device's parameters and behavior within the system, while creating processing rules defines the conditions under which the corresponding notifications will be generated. These settings will help you effectively monitor the device's status and automatically respond to specific events.

{% include images-gallery.html imageCollection="createDeviceProfile" %}

## Step 3. Send Telemetry Message

Replace $THINGSBOARD_HOST_NAME, and $ACCESS_TOKEN with corresponding values.


```bash
curl -v -X POST http://$THINGSBOARD_HOST_NAME:8080/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:51}"
```
{: .copy-code}

![image](/images/edge/user-guide/alarms/send-telemetry-cli.png)

## Step 4. Confirm Alarm

{% include images-gallery.html imageCollection="verifyAlarm" %}

## Troubleshooting

- Ensure that device profiles are correctly associated with devices
- Verify that alarm conditions match the intended telemetry data.
