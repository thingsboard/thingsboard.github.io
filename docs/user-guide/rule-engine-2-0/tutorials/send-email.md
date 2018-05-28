---
layout: docwithnav
title: Send Email Workflow
description: Send Email Workflow

---

* TOC
{:toc}

## Use case

Let's assume your device is using DHT22 sensor to collect and push temperature readings to ThingsBoard.
Sometimes temperature in the server room is to high and want to send emails to your customer if temperature > 60 °C.

In this tutorial we will configure ThingsBoard Rule Engine to 

- Send email to the Customer of the Device if temperature > 60°C
- Add message originator attributes to the message
- Add additional data to the email body from the incoming message 

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).

## Step 1: Adding temperature threshold check field
Here is how our initial Root Rule Chain should look like. Please note that we have removed irrelevant rule nodes from the root rule chain.

![image](/images/user-guide/rule-engine-2-0/tutorials/email/initial-root-chain.png)

We will modify default rule chain and will add **script** filter node with temperature threshold check script. 
If **temperature** is higher then 60 °C, script will return **True**, otherwise **False** will be returned.
{% highlight javascript %}
return msg.temperature > 60;
{% endhighlight %}

![image](/images/user-guide/rule-engine-2-0/tutorials/email/add-script.png)

**Script** node should be connected with **Save timeseries** node with relation **Success**. 
After telemetry from device will be saved into the database, original message will be passed to our script node. 

![image](/images/user-guide/rule-engine-2-0/tutorials/email/script-added.png)

## Step 2: Find email of the Customer
If published temperature is high (**script** node returns **True**) we want to create send an email to the customer of the device.
For making it, we will need to find email of the customer.
 
We will add **customer attributes** enrichment node. And configure it to take **email** attribute of the customer and save it in 
Message Metadata property **customerEmail**

![image](/images/user-guide/rule-engine-2-0/tutorials/email/add-customer-node.png)

**Customer attributes** node should be connected with **script** node with relation **True**.  

![image](/images/user-guide/rule-engine-2-0/tutorials/email/customer-node-added.png)

## Step 3: Find Device Location
Also we want to add device address to the email body. It is a **server scope** attribute of the device.  
 
We will add **originator attributes** enrichment node. And configure it to take **address** **server scope** attribute 
of the originator (device is an originator of the incoming message). This attribute will be saved  in the Message Metadata 
property **ss_address**.

![image](/images/user-guide/rule-engine-2-0/tutorials/email/address-node.png)

**Originator attributes** node should be connected with **Customer attributes** node with relation **Success**.  

![image](/images/user-guide/rule-engine-2-0/tutorials/email/address-added.png)

## Step 4: Put Message payload into Metadata
All **email** nodes works with properties that are defined in the Message Metadata. There is no direct access to the Message payload.
If we want to add something into email from the Message payload, first we need to put it in Message Metadata.

We want to add current temperature to the email body. So we will use **Script Transform** node for saving current temperature in the 
Message Metadata.  

{% highlight javascript %}
metadata.temperature = msg.temperature
return {msg: msg, metadata: metadata, msgType: msgType};
{% endhighlight %}
 
![image](/images/user-guide/rule-engine-2-0/tutorials/email/put-metadata-node.png)

**Script Transform** node should be connected with **Customer attributes** node with relation **Success**.  

![image](/images/user-guide/rule-engine-2-0/tutorials/email/metadata-added.png)

## Step 5: Build Email Message
Now we are ready to define Email template. We should use **To email** node that builds actual email from configured template.

Configuration notes:

- **From email** - we use static email **info@testmail.org**. Please change it to something meaningful for your company.
- **To template** - **${customerEmail}** : node will take value of this property from Message metadata. We have saved thif field in step 2.
- **Subject template** - **Device ${deviceType} temperature high** : deviceType property is stored in the Message Metadata for all messages from devices.
- **Body tempalte** - **Device ${deviceName} has high temperature ${temperature}. Device address is ${ss_address}.**. Temperature field was saved in step 4
and ss_address field was saved in step 3 

![image](/images/user-guide/rule-engine-2-0/tutorials/email/to-email-node.png)


**To email** node should be connected with **Script Transform** node with relation **Success**.  

![image](/images/user-guide/rule-engine-2-0/tutorials/email/to-email-added.png)

**Note 1** - you can use references to any fields that exists in Message Metadata
**Note 2** - this node does not send actual email. Only construct email from configured template.

## Step 5: Add Send message node
Final configuration step as adding **Send email** node that will actual send email from inbound message.
In node configuration we will not choose **Use system SMTP settings** option and make our own SMTP configuration for this node.

In the scope of this tutorial we will use **SendGrid** as SMTP provider and Thingsboard will send email using this provider. You can sign-up for trial using this [link](https://app.sendgrid.com/signup).

Once logged in into SendGrid open SMTP relay [configuration page](https://app.sendgrid.com/guide/integrate/langs/smtp).
 
![image](/images/user-guide/rule-engine-2-0/tutorials/email/sendgrid-config.png)

Here is how **Send Email** node should be configured for working with SendGrid

![image](/images/user-guide/rule-engine-2-0/tutorials/email/sendgrid-smtp-config.png)


**Send email** node should be connected with **To email** node with relation **Success**.  

![image](/images/user-guide/rule-engine-2-0/tutorials/email/final-chain.png)


Chain configuration is finished and we need to **save it**.

## Step 6: Verify results

### Create device and assign it to customer
We need to create Device **Thermostat Server Room**:

![image](/images/user-guide/rule-engine-2-0/tutorials/email/create-device.png)

Then our device should have **server scope** attribute **address**. Let's add it:

![image](/images/user-guide/rule-engine-2-0/tutorials/email/device-address.png)

Next we create Customer for our device:
 
![image](/images/user-guide/rule-engine-2-0/tutorials/email/create-customer.png)

Then our device should have **server scope** attribute **email**. Note that email ill be sent to this email, so write your email for testing.

![image](/images/user-guide/rule-engine-2-0/tutorials/email/customer-email.png)

Now we need to assign our thermostat to the customer. Go to **Manage devices** on Customer page and select our device

![image](/images/user-guide/rule-engine-2-0/tutorials/email/manage-devices.png)

![image](/images/user-guide/rule-engine-2-0/tutorials/email/assign-device.png)




### Post telemetry and verify
For posting device telemetry we will use Rest API ([link](/docs/reference/http-api/#telemetry-upload-api)). For this we will need to
copy device access token from then device **Thermostat Server Room**. 

![image](/images/user-guide/rule-engine-2-0/tutorials/email/device-token.png)

***you need to replace $ACCESS_TOKEN with actual device token**

Lets post temperature = 99. Alarm should be created:

{% highlight bash %}
curl -v -X POST -d '{"temperature":99}' http://localhost:8080/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"
{% endhighlight %}


Finally we can see that email was received with correct values. (Please check your spam folder if you did not receive any email) 


![image](/images/user-guide/rule-engine-2-0/tutorials/email/mail-received.png)

<br/>

## TL;DR

Download and import attached [**rule chain json file**](/docs/user-guide/resources/send_email_rule_chain.json) with a rule chain from this tutorial. Don't forget to mark new rule chain as "root".

![image](/images/user-guide/rule-engine-2-0/tutorials/make-root.png)

