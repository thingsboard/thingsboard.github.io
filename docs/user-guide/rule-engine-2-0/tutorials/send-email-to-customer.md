---
layout: docwithnav
title: Send email to Customer
description: Send Email Workflow

---

This tutorial is to show you how to send an email to the customer using the Rule Engine.

* TOC
{:toc}

{% capture difference %}
**Note:** this tutorial is based on the [send email on alarm](/docs/user-guide/rule-engine-2-0/tutorials/send-email/#use-case) tutorial and it's use case. We will reuse the rule chains from the above-mentioned tutorial and will add a few more rule nodes to send email to the customer of the assigned device.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Use case

Let's assume your device is using DHT22 sensor to collect and push temperature readings to ThingsBoard.
DHT22 sensor is good for -40 to 80°C temperature readings.We want to generate Alarms if temperature is out of good range and send the email when the alarm was created.

In this tutorial we will configure ThingsBoard Rule Engine to:

- Send an email to the customer of the assigned device if the temperature was out of range, namely: less than -40 and more than 80 degrees.

- Add message originator attributes to the message.

- Add additional data to the email body using Script Transform node from the incoming message.

## Prerequisites

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  * [Create & Clear alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/) guide.
  * [Send email on alarm](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) guide.

## Create customer and assign device

First of all, we need to create Customer and assign device to customer. The following screenshots show you how to do this:

![image](/images/user-guide/rule-engine-2-0/tutorials/email/create-customer.png)

<br>

Customer created. Now we need to assign device **Thermostat Home**(the creation of which was described in the [Create & clear alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/#adding-the-device) tutorial) to the customer.<br> Go to **Manage devices** on Customer page and select our device

![image](/images/user-guide/rule-engine-2-0/tutorials/email/manage-devices.png)
<br>

![image](/images/user-guide/rule-engine-2-0/tutorials/email/assign-device.png)
<br>

Next our customer should have **server scope** attribute **email**. Note that email will be sent to this email, so write your email for testing.

![image](/images/user-guide/rule-engine-2-0/tutorials/email/customer-email.png)

<br>

Also we need add server scope attribute - **address** to our device **Thermostat Home**:
<br>

Go to **Devices** -> **Thermostat Home** -> **Attributes** -> **Server attributes** and press **+** button to add **address**

![image](/images/user-guide/rule-engine-2-0/tutorials/email/add-address.png)

<br>

## Message flow

In this section, we explain the purpose of each node that was added or modified to initial rule chains in this tutorial:

- Node A: [**Customer attributes**](/docs/user-guide/rule-engine-2-0/enrichment-nodes/#customer-attributes) node.
  - This node will be used for taking email attribute of the customer and save it in Message Metadata property customerEmail
- Node B: [**Originator attributes**](/docs/user-guide/rule-engine-2-0/enrichment-nodes/#originator-attributes) node.
  - This node will be used for taking address server scope attribute of the originator (device is an originator of the incoming message) and save it in the Message Metadata.
- Node C: [**To Email**](/docs/user-guide/rule-engine-2-0/transformation-nodes/#to-email-node) node.
  - This node builds actual email from the configured template.
- Node D: [**Rule Chain**](/docs/user-guide/rule-engine-2-0/flow-nodes/#rule-chain-node) node.
  - Forwards incoming Message to specified Rule Chain **Create/Clear Alarm & Send Email to Customer**.

<br>

## Configure Rule Chains

In this tutorial, we used Rule Chains from [send email on alarm](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) tutorial.
We modified Rule Chain **Create/Clear Alarm & Send Email** by adding nodes that was described above in the section [Message flow](/docs/user-guide/rule-engine-2-0/tutorials/send-email-to-customer/#message-flow)<br>
 and renamed this rule chain to: **Create/Clear Alarm & Send Email to Customer**.

<br>The following screenshots show how the above Rule Chains should look like:

  - **Create/Clear Alarm & Send Email to Customer:**

![image](/images/user-guide/rule-engine-2-0/tutorials/email/send-email-to-customer-chain.png)

 - **Root Rule Chain:**

![image](/images/user-guide/rule-engine-2-0/tutorials/email/root-rule-chain.png)

<br>

Download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/create_clear_alarm___send_email_to_customer.json) for the **Create/Clear Alarm & Send Email to Customer:** rule chain. 
Create Node **D** as shown on the image above in the root rule chain to forward telemetry to the imported rule chain.

The following section shows you how to modify this rule chain, specifically: add rule nodes [**A**](/docs/user-guide/rule-engine-2-0/tutorials/send-email-to-customer/#node-a-customer-attributes) and [**B**](/docs/user-guide/rule-engine-2-0/tutorials/send-email-to-customer/#node-b-originator-attributes) and modify node [**C**](/docs/user-guide/rule-engine-2-0/tutorials/send-email-to-customer/#node-c-to-email).
<br>

## Modify **Create & Clear Alarms with details:**

### Modify the required nodes

In this rule chain, you will add 2 nodes and modify 1 node as it will be explained in the following sections:

#### Node A: **Customer attributes**
- Add the **Customer attributes** node and connect it to the **Filter Script** node with a relation type **True**.<br>
  This node will be used for taking **email** attribute of the customer and save it in
  Message Metadata property **customerEmail**

 - Fill in the fields with the input data shown in the following table:

 <table style="width: 30%">
   <thead>
       <tr>
        <td>Field</td>
        <td>Input Data </td>
       </tr>
   </thead>
   <tbody>
       <tr>
            <td>Name</td>
            <td>Get Customer Email</td>
       </tr>
       <tr>
            <td>Source attribute</td>
            <td>email</td>
       </tr>
       <tr>
            <td>Target attribute</td>
            <td>customerEmail</td>
       </tr>
   </tbody>
 </table>


![image](/images/user-guide/rule-engine-2-0/tutorials/email/get-customer-email.png)

#### Node B: **Originator attributes**
- Add the **Originator attributes** node and pastes it between the nodes: **Customer attributes** and **Create alarm** with a relation type **Success**.<br>
  This node will be used for taking address server scope attribute of the originator **(Thermostat Home)**. This attribute will be saved in the Message Metadata property ss_address.

 - Fill in the fields with the input data shown in the following table:

 <table style="width: 30%">
   <thead>
       <tr>
        <td>Field</td>
        <td>Input Data </td>
       </tr>
   </thead>
   <tbody>
       <tr>
            <td>Name</td>
            <td>Get Device Address</td>
       </tr>
       <tr>
            <td>Server attributes</td>
            <td>address</td>
       </tr>
   </tbody>
 </table>


![image](/images/user-guide/rule-engine-2-0/tutorials/email/get-device-address.png)

#### Node C: **To Email**
- Modify the **To Email** node. For this, we need change some fields in details of this node, namely:

    - **To template**.

    - **Body tempalte**.

- Fill in the fields with the input data shown in the following table:

<table style="width: 30%">
   <thead>
       <tr>
        <td>Field</td>
        <td>Input Data </td>
       </tr>
   </thead>
   <tbody>
       <tr>
            <td>To template</td>
            <td>${customerEmail}</td>
       </tr>
       <tr>
            <td>Body tempalte</td>
            <td>Device ${deviceName} has unacceptable temperature: ${temperature}. Device address - ${ss_address}</td>
       </tr>
   </tbody>
 </table>

![image](/images/user-guide/rule-engine-2-0/tutorials/email/modify-to-email.png)


## Post telemetry and verify
For posting device telemetry we will use the Rest APIs, [Telemetry upload APIs](/docs/reference/http-api/#telemetry-upload-api). For this we will need to
copy device access token from then device **Thermostat Home**.

![image](/images/user-guide/rule-engine-2-0/tutorials/email v2/copy-token.png)


Lets post temperature = 99. Mail should be sent:

{% highlight bash %}
curl -v -X POST -d '{"temperature":99}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"

**you need to replace $ACCESS_TOKEN with actual device token**
{% endhighlight %}

You should understand that message won't be sent to the email when the alarm was updated, only in the case when alarm will be created.

Finally we can see that email was received with correct values. (Please check your spam folder if you did not receive any email)


![image](/images/user-guide/rule-engine-2-0/tutorials/email/mail-received.png)


Also, you can see the more information about how to:

- define other additional logic for alarm processing, for example, sending notification to Telegram App using Telegram Bot.

- configure Alarm Details function in the Create and Clear Alarm nodes and configure the Dashboard by adding an alarm widget to visualize the alarms..

- create alarm when device is offline.

Please refer to the links under the **See Also** section to see how to do this.

<br>
<br>

## See Also

- [Notifications and Alarms on your smartphone using Telegram Bot](/docs/iot-gateway/integration-with-telegram-bot/) guide

- [Create alarm with details](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms-with-details/) guide.

- [Create Alarm when the Device is offline](/docs/user-guide/rule-engine-2-0/tutorials/create-inactivity-alarm/) guide.

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}
