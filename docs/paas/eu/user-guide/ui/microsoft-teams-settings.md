---
layout: docwithnav-paas-eu
assignees:
- stitenko
title: Microsoft Teams Settings
description: ThingsBoard IoT platform Microsoft Teams settings
microsoft-teams-settings:
    0:
        image: /images/user-guide/ui/microsoft-teams/microsoft-teams-1-settings.png
        title: 'Sign in to Microsoft Teams and navigate to the "Teams" tab, then click on the three dots next to your channel name. In the drop-down menu click on the "Connectors" item;'
    1:
        image: /images/user-guide/ui/microsoft-teams/microsoft-teams-2-settings.png
        title: 'Find "Incoming Webhook" connector and click "Configure";'
    2:
        image: /images/user-guide/ui/microsoft-teams/microsoft-teams-3-settings.png
        title: 'Configure how ThingsBoard will appear when sending messages to your channel (choose a name and icon), and click "Create";'
    3:
        image: /images/user-guide/ui/microsoft-teams/microsoft-teams-4-settings.png
        title: 'Now, copy the webhook URL. We will use it when adding a notification recipients group in your ThingsBoard instance'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/user-guide/ui/microsoft-teams-settings.md %}