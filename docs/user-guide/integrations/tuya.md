---
layout: docwithnav-pe
title: Tuya Integration
description: Tuya Integration Guide

tuya-application-add-device:
    0:
        image: /images/user-guide/integrations/tuya/tuya-add-device-1.png
    1:
        image: /images/user-guide/integrations/tuya/tuya-add-device-2.png
    2:
        image: /images/user-guide/integrations/tuya/tuya-add-device-3.png
    3:
        image: /images/user-guide/integrations/tuya/tuya-add-device-4.png
    4:
        image: /images/user-guide/integrations/tuya/tuya-add-device-5.png
    5:
        image: /images/user-guide/integrations/tuya/tuya-add-device-6.png
    6:
        image: /images/user-guide/integrations/tuya/tuya-add-device-7.png
    7:
        image: /images/user-guide/integrations/tuya/tuya-add-device-8.png

tuya-create-cloud-project:
    0:
        image: /images/user-guide/integrations/tuya/tuya-create-cloud-project-1.png
        title: 'Go to the "Cloud" tab -> "Development". Click the "Create Cloud Project" button'
    1:
        image: /images/user-guide/integrations/tuya/tuya-create-cloud-project-2.png
        title: 'In a pop-up window, fill required fields and click "Create"'
    2:
        image: /images/user-guide/integrations/tuya/tuya-create-cloud-project-3.png
        title: 'Make additional settings in the “Authorize API Services” window and click "Authorize"'
    3:
        image: /images/user-guide/integrations/tuya/tuya-create-cloud-project-4.png
        title: 'Fill in the required fields in the "Project configuration" window, then click "Create"'
    4:
        image: /images/user-guide/integrations/tuya/tuya-create-cloud-project-5.png
        title: 'Now your cloud project is created. In this window, remember the Access ID and Access Secret values. These values will be needed during the Tuya Integration setup.'

tuya-message-service-enable:
    0:
        image: /images/user-guide/integrations/tuya/tuya-message-service-enable-1.png
        title: 'Go to the "Cloud" tab -> "Message Service"'
    1:
        image: /images/user-guide/integrations/tuya/tuya-message-service-enable-2.png
        title: 'Toggle to enable Message Service'
    2:
        image: /images/user-guide/integrations/tuya/tuya-message-service-enable-3.png
        title: 'In the pop-up window, set up the messaging service. Configure the settings for "Message Service Type" and "Alert Contact". Click "Ok"'
    3:
        image: /images/user-guide/integrations/tuya/tuya-message-service-enable-4.png
        title: 'Message Service enabled'

tuya-add-smart-life-app:
    0:
        image: /images/user-guide/integrations/tuya/tuya-add-smart-life-app-1.png
        title: 'Go to "Cloud" tab -> "Development". Select your project'
    1:
        image: /images/user-guide/integrations/tuya/tuya-add-smart-life-app-2.png
        title: 'Navigate to the "Devices" tab -> select the "Link Tuya App Account" tab. Click "Add App Account"'
    2:
        image: /images/user-guide/integrations/tuya/tuya-add-smart-life-app-3.png
        title: 'Scan the QR code with Smart Life App to authorize'
    3:
        image: /images/user-guide/integrations/tuya/tuya-add-smart-life-app-4.png
        title: 'In the pop-up window, set up the device linking method and select device permission: read, read/write or read/write/manage". Click "Ok"'
    4:
        image: /images/user-guide/integrations/tuya/tuya-add-smart-life-app-5.png
        title: 'Now your devices under the mobile app account have been added to the project'
    5:
        image: /images/user-guide/integrations/tuya/tuya-add-smart-life-app-6.png
        title: 'Navigate to the "All Devices" tab. You can see your device added to the project'

tuya-enable-rules-environment:
    0:
        image: /images/user-guide/integrations/tuya/tuya-enable-rules-environment-1-pe.png
        title: 'Navigate to the "Message Service" tab. Click the "Create Messaging Rules" button;'
    1:
        image: /images/user-guide/integrations/tuya/tuya-enable-rules-environment-2-pe.png
        title: 'Click the "Add Message Filtering Rule" button;'
    2:
        image: /images/user-guide/integrations/tuya/tuya-enable-rules-environment-3-pe.png
        title: 'Add new message filtering rule and click "Release Rule" button;'
    3:
        image: /images/user-guide/integrations/tuya/tuya-enable-rules-environment-5-pe.png
        title: 'Enable the messaging rule.'

---
{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsTag="pe" %}
{% include docs/pe/user-guide/integrations/tuya.md %}