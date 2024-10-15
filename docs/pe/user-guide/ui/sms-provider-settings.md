---
layout: docwithnav-pe
assignees:
- ashvayka
title: SMS Provider Settings
description: ThingsBoard IoT platform SMS provider settings
smsProviderSettings:
    0:
        image: /images/user-guide/ui/sms/sms-provider-settings-step-2-pe.png
        title: 'Login to ThingsBoard UI. Navigate to the "Settings" page. Now, go to the "Notificatons" tab. In this window, choose one of the available providers: AWS SNS Twilio or SMPP;'
    1:
        image: /images/user-guide/ui/sms/sms-provider-settings-step-3-pe.png
        title: 'If you have chosen AWS SNS, populate AWS Access Key ID and Secret access key. Click "Save" button;'
    2:
        image: /images/user-guide/ui/sms/sms-provider-settings-step-4-pe.png
        title: 'If you have chosen Twilio, populate the Twilio account SID and Token. Specify phone number that will be used as a "sender". Click "Save" button;'
    3:
        image: /images/user-guide/ui/sms/sms-provider-settings-step-5-pe.png
        title: 'If you have chosen SMPP, Populate System ID and Password. Specify SMPP version, SMPP host and port. Click "Save" button.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/ui/sms-provider-settings.md %}