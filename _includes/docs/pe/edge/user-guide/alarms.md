
* TOC 
{:toc}

## Overview

This manual provides an overview of the alarm notification system functionalities available on the ThingsBoard **PE Edge**. It includes detailed instructions on the fundamental concepts of configuring and utilizing alarms within ThingsBoard **PE Edge**. Key topics covered are the creation of processing rules, configuration of notifications, and event response mechanisms.

For more information, please refer to [working with alarms](/docs/pe/user-guide/alarms/#main-concepts) documentation.

## Prerequisites

- A ThingsBoard **PE Edge** instance is up and running.

If you have these prerequisites in place, let's go to the next steps.

## Step 1. Create Device

{% include images-gallery.html imageCollection="createDevice" showListImageTitles="true" %}

## Step 2. Create Device Profile

In this step, we will create a device profile and add rules (conditions) that will trigger alarm notifications. 

Configuring the device profile allows you to set the device's parameters and behavior within the system, while creating processing rules defines the conditions under which the corresponding notifications will be generated. These settings will help you effectively monitor the device's status and automatically respond to specific events.

{% include images-gallery.html imageCollection="createDeviceProfile" showListImageTitles="true" %}

## Step 3. Send Telemetry Message

In this step, we will send a telemetry message to the device you created earlier, simulating a temperature reading. This message will trigger the alarm based on the alarm rule you configured.

Replace $THINGSBOARD_HOST_NAME, and $ACCESS_TOKEN with corresponding values.

```bash
curl -v -X POST http://$THINGSBOARD_HOST_NAME:8080/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:51}"
```
{: .copy-code}

This command sends a telemetry message to your ThingsBoard PE Edge instance with a temperature value of 51, which will trigger the "High Temperature" alarm rule if the threshold condition is met.

![send telemetry cli](/images/pe/edge/user-guide/alarms/send-telemetry-cli.png)

## Step 4. Confirm Alarm

After sending the telemetry message in the previous step, you need to verify that the alarm has been triggered based on the conditions you configured in the device profile.

{% include images-gallery.html imageCollection="verifyAlarm" showListImageTitles="true" %}

## Troubleshooting

- The telemetry message was sent correctly (review the response from the curl command).
- The alarm rule conditions in the device profile match the incoming telemetry data.
- Ensure that device profiles are correctly associated with devices
- Verify that alarm conditions match the intended telemetry data.
