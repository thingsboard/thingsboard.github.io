---
layout: docwithnav
assignees:
- mp-loki
title: SNS Plugin

---

{% include templates/old-guide-notice.md %}

## Overview

SNS plugin is responsible for sending messages to Amazon Web Services Simple Notification Service topics triggered by specific rules

## Configuration

SNS Plugin has the following configuration parameters:

 - *Access Key ID*
 - *Secret Access Key*
 - *Region*

*Access Key ID* and *Secret Access Key* are the credentials of an AWS IAM User with programmatic access. More information on AWS access keys can be found [here](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) 

*Region* must correspond to the one in which the SNS Queue(s) are created. Current list of AWS Regions can be found [here](http://docs.aws.amazon.com/general/latest/gr/rande.html)
 
## Server-side API

This plugin does not provide any server-side API.

## Example

In this example, we are going to demonstrate how you can configure this extension to be able to send a message to an SNS Topic every time new telemetry message for the device arrives.

Prerequisites before contining Kafka extension configuration:

 - AWS IAM User is created and Access Key ID/Secret Access Key are obtained
 - SNS Topic is created
 - ThingsBoard is up and running

The information on how to create SNS Topic can be found [here](http://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html)
 
### SNS Plugin Configuration

Let's configure SNS plugin first. Go to *Plugins* menu and create new plugin:

![image](/images/reference/plugins/sns/sns-plugin-config-1.png)

![image](/images/reference/plugins/sns/sns-plugin-config-2.png)

Make sure to replace <$YOUR_ACCESS_KEY_ID> and <$YOUR_SECRET_ACCESS_KEY> placeholders with the actual values and set the right region. 

Click on *'Activate'* plugin button:

![image](/images/reference/plugins/sns/sns-activate-plugin.png)

### SNS Rule Configuration

In order to create SNS Rule, go to Rules screen and click 'Add New rule' button.

![image](/images/reference/plugins/sns/sns-rule.png)

Add filter for **POST_TELEMETRY** message type:

![image](/images/reference/plugins/post-telemetry-filter.png)

Click *'Add'* button to add filter.

Then select *'SNS Plugin'* in the drop-down box for the Plugin field:

![image](/images/reference/plugins/sns/sns-plugin-selection.png)

Add action that will send temperature telemetry of device to the particular SNS Topic:

![image](/images/reference/plugins/sns/sns-topic-action.png)

Click *'Add'* button and then activate Rule.

![image](/images/reference/plugins/sns/sns-activate-rule.png)

### Creating Email SNS Subscription

SNS is a push-based service, so we need to create a subscription in order to receive messages from it.
In AWS console under SNS Dashboard, go to **Topics**, select your topic, then click **Action -> Subscribe to topic**.
In the window that appears, select Protocol: Email  amd enter your email address:

![image](/images/reference/plugins/sns/sns-create-subscription.png)

### Sending Temperature Telemetry

Now you can send Telemetry message that contains *'temp'* telemetry for any of your devices:

```json
{"temp":88.2}
```

Here is an example of a command that publish single telemetry message to locally installed ThingsBoard:

```bash
mosquitto_pub -d -h "localhost" -p 1883 -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m "{'temp':88.2}"
```

Now you should receive an email with the telemetry data in your mailbox:

![image](/images/reference/plugins/sns/sns-email-delivery.png)