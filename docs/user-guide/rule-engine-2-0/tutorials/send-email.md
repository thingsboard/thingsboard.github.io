---
layout: docwithnav
title: Send email on alarm
description: Send Email Workflow
---

This tutorial is to show you how to send an email to the user using the Rule Engine. 

* TOC
{:toc}

## Use case

In this tutorial we will implement the use case from the tutorial: [create & clear alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/#use-case):

Let's assume your device is using DHT22 sensor to collect and push temperature readings to ThingsBoard.
DHT22 sensor is good for -40 to 80°C temperature readings.We want to generate Alarms if temperature is out of good range and send the email when the alarm was created.

In this tutorial we will configure ThingsBoard Rule Engine to:

- Send an email to the user if the temperature was out of range, namely: less than -40 and more than 80 degrees.

- Add current temperature to the email body using Script Transform node for saving current temperature in the Message Metadata.


## Prerequisites

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
  * [Create & Clear alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms/) guide.

## Message flow

In this section, we explain the purpose of each node in this tutorial:

- Node A: [**Transform Script**](/docs/user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node) node.
  - This node will use for saving current temperature in the Message Metadata.
- Node B: [**To Email**](/docs/user-guide/rule-engine-2-0/transformation-nodes/#to-email-node) node.
  - this node builds actual email from the configured template.
- Node C: [**Send Email**](/docs/user-guide/rule-engine-2-0/external-nodes/#send-email-node) node.
  - this node will actually send email from the inbound message using system SMTP settings.

<br>

## Configure Rule Chains

In this tutorial, we used Rule Chains from [create & clear alarms](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms) tutorial.
We modified Rule Chain **Create & Clear Alarms** by adding nodes that was described above in the section [Message flow](/docs/user-guide/rule-engine-2-0/tutorials/send-email/#message-flow)<br>
 and renamed this rule chain to: **Create/Clear Alarm & Send Email**.

<br>The following screenshots show how the above Rule Chains should look like:

  - **Create/Clear Alarm & Send Email:**

![image](/images/user-guide/rule-engine-2-0/tutorials/email v2/send-email-chain.png)

 - **Root Rule Chain:**

![image](/images/user-guide/rule-engine-2-0/tutorials/email v2/root-rule-chain.png)

<br>

Download the attached json [**file**](/docs/user-guide/rule-engine-2-0/tutorials/resources/create_clear_alarm___send_email.json) for the **Create/Clear Alarm & Send Email** rule chain.

The following section shows you how to modify this rule chain from scratch.
<br>

## Modify **Create/Clear Alarm & Send Email**

### Adding the required nodes

In this rule chain, you will create 3 nodes as it will be explained in the following sections:

#### Node A: **Transform Script**

- Add the **Transform Script** node and place it after the **Filter Script** node with a relation type **True** and than connect it to **Create Alarm** node via relation **Success**.
 <br>This node will use for saving current temperature from Message Data to the Message Metadata using the following script:

 {% highlight javascript %}
 metadata.temperature = msg.temperature;
 return {msg: msg, metadata: metadata, msgType: msgType};{% endhighlight %}

- Enter the Name field as **Add temperature to metadata**.

![image](/images/user-guide/rule-engine-2-0/tutorials/email v2/transform-script.png)

#### Node B: **To Email**
- Add the **To Email** node and connect it to the **Create Alarm** node with a relation type **Created**.
  <br>This node does not send actual email it only construct email from configured template.
  <br>So you can use references to any fields that exist in Message Metadata.

- Fill in the fields with the input data shown in the following table:

  <table>
    <thead>
        <tr>
            <td><b>Field</b></td><td><b>Input Data</b></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Name</td>
            <td>Temperature Email</td>
        </tr>
        <tr>
            <td>From Template</td>
            <td>info@testmail.org</td>
        </tr>
        <tr>
            <td>To Template</td>
            <td>**Your Email**</td>
        </tr>
        <tr>
            <td>Subject Template</td>
            <td>Device ${deviceType} temperature unacceptable</td>
        </tr>
        <tr>
            <td>Body Template</td>
            <td>Device ${deviceName} has unacceptable temperature: ${temperature}</td>
        </tr>
     </tbody>
  </table>

![image](/images/user-guide/rule-engine-2-0/tutorials/email v2/to-email.png)

#### Node C: **Send Email**
- Add the **Send Email** node and connect it to the **To Email** node with a relation type **Success**. <br>
  This node will actually send email from the inbound message using the system SMTP settings.<br>

- Enter the Name field as **SendGrid SMTP**.

- If you don't have access the system administrator account you need make your own SMTP configuration for this node.

- otherwise, mark a field **Use system SMTP settings**.


 Please note that at Demo Server was already configured SendGrid provider as system SMTP. <br>

The instructions of how to configure these settings will be explained in the section below.

<br>

![image](/images/user-guide/rule-engine-2-0/tutorials/email v2/send-email.png)

<br>

Chain configuration is finished and we need to save it.

#### Configuring  system SMTP settings

In this section, we explain to you how  to configure system SMTP settings and try to send the test email:

- In the scope of this tutorial we will use **SendGrid** as SMTP provider and Thingsboard will send email using this provider. You can sign-up for trial using this [link](https://app.sendgrid.com/signup).

  Once logged in into SendGrid open SMTP relay [configuration page](https://app.sendgrid.com/guide/integrate/langs/smtp).

  ![image](/images/user-guide/rule-engine-2-0/tutorials/email v2/sendgrid-config.png)

If you have permission to log in to ThingsBoard, with using system administrator account you can customize SMTP settings and send Test Email.
 - For the default system administrator account:

   - login - **sysadmin@thingsboard.org**.
   - password - **sysadmin**.

- Go to **System Settings** -> **Outgoing Mail**  and configure **Outgoing Mail Settings** as described in the following screenshot:

![image](/images/user-guide/rule-engine-2-0/tutorials/email v2/test-email.png)

 - Verify that you configure SMTP, by press button **Send Test Email**<br>


If the System SMTP configure all right: you will see a pop-up message as shown in the screenshot above.<br>
System SMTP settings configuration is finished. Don’t forget to press button **Save**.

If you can't access to the account of the System administrator you could configured SMTP settings right in the node but you can't be checked that email was successfully sent.

<br>

## Post telemetry and verify
For posting device telemetry we will use the Rest APIs, [Telemetry upload APIs](/docs/reference/http-api/#telemetry-upload-api). For this we will need to
copy device access token from then device **Thermostat Home**.

![image](/images/user-guide/rule-engine-2-0/tutorials/email v2/copy-token.png)


Lets post temperature = 180. Alarm should be created:

{% highlight bash %}
curl -v -X POST -d '{"temperature":180}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"

**you need to replace $ACCESS_TOKEN with actual device token**
{% endhighlight %}

You should understand that message won't be sent to the email when the alarm was updated, only in the case when alarm will be created. 

Finally we can see that email was received with correct values. (Please check your spam folder if you did not receive any email) 


![image](/images/user-guide/rule-engine-2-0/tutorials/email v2/mail-received.png)


Also, you can see the more information about how to:

 -  Send an email to the Customer of the Device.

 -  Add additional data to the email body from the incoming message.

Please refer to the first link under the **See Also** section to see how to do this.

<br>
<br>

## See Also

- [Send email to customer](/docs/user-guide/rule-engine-2-0/tutorials/send-email-to-customer/) guide.

- [Create Alarm when the Device is offline](/docs/user-guide/rule-engine-2-0/tutorials/create-inactivity-alarm/) guide.

- [Create alarm with details](/docs/user-guide/rule-engine-2-0/tutorials/create-clear-alarms-with-details/) guide.

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}

