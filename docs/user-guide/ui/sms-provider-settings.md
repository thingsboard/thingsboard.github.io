---
layout: docwithnav
assignees:
- ashvayka
title: SMS Provider Settings
description: ThingsBoard IoT platform SMS provider settings
smsProviderSettings:
    0:
        image: /images/user-guide/ui/sms/sms-provider-settings-step-1.png 
        title: 'Step 1. Login to ThingsBoard UI as a system administrator. Open system settings.'
    1:
        image: /images/user-guide/ui/sms/sms-provider-settings-step-2.png
        title: 'Step 2. Open SMS provider settings and choose one of the available providers: AWS SNS or Twilio.'
    2:
        image: /images/user-guide/ui/sms/sms-provider-settings-step-3-aws.png
        title: 'Step 3 (AWS SNS). Populate AWS Access Key ID and Secret access key if you have chosen AWS SNS. Click "Save" button.'
    3:
        image: /images/user-guide/ui/sms/sms-provider-settings-step-3-twilio.png
        title: 'Step 3 (Twilio). Populate Twilio account SID and Token. Specify phone number that will be used as a "sender". Click "Save" button.'

---

ThingsBoard System Administrator is able to configure SMS provider that will be used to distribute SMS messages about alarms.
This configuration step is required in production environments if you plan to use SMS messages. 
  
Tenant administrator is able to setup [**sms rule node**](/docs/user-guide/rule-engine-2-0/external-nodes/#send-sms-node) to distribute alarms produced by [**rule engine**](/docs/user-guide/rule-engine-2-0/re-getting-started/).  

Following steps are required to configure system SMS provider settings.

{% include images-gallery.html imageCollection="smsProviderSettings" showListImageTitles="true" %}

**Note**: Please use [AWS SNS](https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html) or [Twilio](https://www.twilio.com/docs/sms) documentation to learn more how to use the corresponding system. 