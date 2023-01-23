---
layout: docwithnav-paas
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
        title: 'Go to "Cloud" tab -> "Development". Click "Create Cloud Project" button'
    1:
        image: /images/user-guide/integrations/tuya/tuya-create-cloud-project-2.png
        title: 'In a pop-up window fill required fields and click "Create"'
    2:
        image: /images/user-guide/integrations/tuya/tuya-create-cloud-project-3.png
        title: 'In the "Autorize API Services" window make additional settings and click "Authorize"'
    3:
        image: /images/user-guide/integrations/tuya/tuya-create-cloud-project-4.png
        title: 'In the "Project configuration" window fill required fields. After click "Create"'
    4:
        image: /images/user-guide/integrations/tuya/tuya-create-cloud-project-5.png
        title: 'Cloud project is created. In this window we must remember the values of Access ID and Access Secret. These values will be needed during the Tuya Integration setup'

tuya-message-service-enable:
    0:
        image: /images/user-guide/integrations/tuya/tuya-message-service-enable-1.png
        title: 'Go to "Cloud" tab -> "Message Service"'
    1:
        image: /images/user-guide/integrations/tuya/tuya-message-service-enable-2.png
        title: 'Toggle to enable Message Service'
    2:
        image: /images/user-guide/integrations/tuya/tuya-message-service-enable-3.png
        title: 'In the pop-up window, set up the messaging service. Configure the settings for "message service type" and "alert contact"'
    3:
        image: /images/user-guide/integrations/tuya/tuya-message-service-enable-4.png
        title: 'Message Service enabled'

tuya-add-smart-life-app:
    0:
        image: /images/user-guide/integrations/tuya/tuya-add-smart-life-app-1.png
        title: 'Go to "Cloud" tab -> "Development". Select your project'
    1:
        image: /images/user-guide/integrations/tuya/tuya-add-smart-life-app-2.png
        title: 'Navigate to "Devices" tab -> select "Link Tuya App Account" tab. Click "Add App Account"'
    2:
        image: /images/user-guide/integrations/tuya/tuya-add-smart-life-app-3.png
        title: 'Scan the QR code with Smart Life App to authorize'
    3:
        image: /images/user-guide/integrations/tuya/tuya-add-smart-life-app-4.png
        title: 'In the pop-up window, set up the "device linking method" and select "Device Permission": read, read/write or read/write/manage". Click "Ok"'
    4:
        image: /images/user-guide/integrations/tuya/tuya-add-smart-life-app-5.png
        title: 'Now your devices under the mobile app account have been added to the project'
    5:
        image: /images/user-guide/integrations/tuya/tuya-add-smart-life-app-6.png
        title: 'Navigate to "All Devices" tab. You can see your device added to the project'

---
{% assign docsPrefix = "paas/" %}
{% include docs/pe/user-guide/integrations/tuya.md %}