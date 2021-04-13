---
layout: docwithnav-paas
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

{% assign docsPrefix = "paas/" %}
{% include docs/user-guide/ui/sms-provider-settings.md %}