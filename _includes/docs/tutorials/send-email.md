
* TOC
{:toc}

This guide explains how to configure ThingsBoard to automatically send email notifications to users when an alarm is created.   
It extends the [Create and Clear Alarms](/docs/tutorials/create-clear-alarms){:target="_blank"} use case by using the Notification Center to deliver alarm-based email notifications.

<hr>

## Use case

Assume your refrigeration equipment periodically reports temperature telemetry to ThingsBoard.
- Normal operating temperature range: 2 °C to 5 °C
- Any value outside this range is considered an abnormal condition.

When such a condition occurs:
- An alarm is created by the alarm rules.
- An email notification is sent to the responsible users.

This setup ensures timely awareness and faster response to critical equipment issues.

<hr>

## Prerequisites

Before proceeding, make sure that you have completed the following steps:
1. Completed the [Create and Clear Alarms](/docs/tutorials/create-clear-alarms){:target="_blank"} tutorial and already configured alarm creation and clearing rules. 
2. Added at least one [Customer User](/docs/{{docsPrefix}}user-guide/ui/customers/#create-customer-user){:target="_blank"} who will receive alarm notifications.
3. [Configured a mail server](/docs/{{docsPrefix}}user-guide/ui/mail-settings/){:target="_blank"}, which is required for delivering email notifications.

It is also recommended to review the following ThingsBoard documentation:
- [Notification center](/docs/{{docsPrefix}}user-guide/notifications/){:target="_blank"} - learn how to configure notification delivery and recipients
- [Alarm rules](/docs/{{docsPrefix}}user-guide/alarm-rules){:target="_blank"} - learn how to define alarm trigger conditions

These concepts are essential for understanding and correctly configuring the solution described below.

<hr>

## Configure Notification Center

The Notification Center is responsible for delivering notifications to users.

It consists of three core components:
- **Recipients** – define who will receive notifications.
- **Templates** – define the notification content and delivery method.
- **Rules** – define the conditions under which notifications are sent.

All three components must be configured to enable alarm-based notifications.

<hr>

### Step 1: Configure notification recipients

The **Recipients** section defines the target users who will receive notifications.
1. Navigate to **Notification Center &#8702; Recipients**. 
2. Click **&#43; Add recipient**. 
3. Configure the recipient group:   
   &#8194;&#8226;&#8194;**Name**: Refrigeration operators   
   &#8194;&#8226;&#8194;**Type**: Platform users   
   &#8194;&#8226;&#8194;**User filter**: Customer users   
   &#8194;&#8226;&#8194;**Customer**: Customer A (specify your customer)
4. Click **Add**.

**Customer A** represents all customer users responsible for monitoring the refrigeration equipment.

{% include images-gallery.html imageCollection="add-recipients" %}

<hr>

### Step 2: Create notification template

**Templates** define the notification content and delivery method.
1. Navigate to **Notification Center &#8702; Templates**. 
2. Click **&#43; Add template**. 
3. Configure general settings:   
   &#8194;&#8226;&#8194;**Name**: Device temperature notification   
   &#8194;&#8226;&#8194;**Type**: Alarm   
   &#8194;&#8226;&#8194;**Delivery methods**: Email   
4. Click **Next**. 
5. Define the email content:   
   &#8194;&#8226;&#8194;**Subject**
   ```text
   ${alarmType} on ${alarmOriginatorName} device
   ```
   {:.copy-code}
   &#8194;&#8226;&#8194;**Message**   
   ```text
   A ${alarmType} has been detected on the ${alarmOriginatorName} device: ${details.data} °C.
   ```
   {:.copy-code}
   Template variables:   
   &#8194;&#8226;&#8194;${alarmOriginatorName} – name of the device that triggered the alarm.   
   &#8194;&#8226;&#8194;${details.data} – alarm details populated by the alarm rule.
 6. Click **Add** to save the template.

{% include images-gallery.html imageCollection="add-template" %}

<hr>

### Step 3: Create notification rule

Notification **rules** define when notifications are sent and which components are used.
1. Navigate to **Notification Center &#8702; Rules**. 
2. Click **&#43; Add rule**. 
3. Configure rule parameters:   
   &#8194;&#8226;&#8194;**Rule name**: Unacceptable device temperature   
   &#8194;&#8226;&#8194;**Trigger**: Alarm   
   &#8194;&#8226;&#8194;**Template**: Device temperature notification   
   &#8194;&#8226;&#8194;**Recipients**: Refrigeration operators
4. Click **Next**.
5. Configure trigger conditions:   
   &#8194;&#8226;&#8194;**Alarm type list**: Any type   
   &#8194;&#8226;&#8194;**Alarm severity list**: Any severity   
   &#8194;&#8226;&#8194;**Notify on**: Alarm created
6. Click **Add**.

This rule ensures that an email is sent only when a new alarm is created.

{% include images-gallery.html imageCollection="add-rule" %}

<hr>

## Verification

To verify the configuration, publish telemetry that exceeds the defined temperature threshold.

**Publish test telemetry**   
Example: publish a temperature value of **7 °C**, which should trigger a high temperature alarm.
{% if docsPrefix == null or docsPrefix == "pe/" %}
   ```bash
curl -v -X POST http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:7}"
   ```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
   ```bash
curl -v -X POST https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:7}"
   ```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/eu/" %}
   ```bash
curl -v -X POST https://eu.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:7}"
   ```
{: .copy-code}
{% endif %}

⚠️ Replace {% unless docsPrefix contains "paas/" %}   
&#8194;&#8226;&#8194;**$THINGSBOARD_HOST_NAME** with your ThingsBoard hostname or IP address.   
&#8194;&#8226;&#8194;{% endunless %}**$ACCESS_TOKEN** with the device access token.

**Expected result**
- A new alarm is created for the device.
- The email notification is sent to all users of Customer A.
- The email contains the device name and reported temperature value.

{% include images-gallery.html imageCollection="verification" %}

If no email is received, check the Spam folder and verify mail server settings.

> Email notifications are sent only when an alarm is created, not when an existing alarm is updated.

<hr>

## See Also

- [Send email to customer](/docs/user-guide/rule-engine-2-0/tutorials/send-email-to-customer/) guide.
- [Create Alarm when the Device is offline](/docs/user-guide/rule-engine-2-0/tutorials/create-inactivity-alarm/) guide.
- [Create alarm with details](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms-with-details/) guide.

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}
