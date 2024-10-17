---
layout: docwithnav-paas-eu
assignees:
- ashvayka
title: Slack Settings
description: ThingsBoard IoT platform Slack settings
slackProviderSettings:
    0:
        image: /images/user-guide/ui/slack/create-slack-api-token-1.png
        title: 'In "How to quickly get and use a Slack API token" page, scroll below and find "Create a pre-configured app";'
    1:
        image: /images/user-guide/ui/slack/create-slack-api-token-2.png
        title: 'Click "Create app" button;'
    2:
        image: /images/user-guide/ui/slack/create-slack-api-token-3.png
        title: 'In a new window, select your workspase from drop-down menu, then click "Next";'
    3:
        image: /images/user-guide/ui/slack/create-slack-api-token-4.png
        title: 'Review summary and click "Create" button to create your app;'
    4:
        image: /images/user-guide/ui/slack/create-slack-api-token-5.png
        title: 'Welcome to your app`s configurations. Click "Go it";'
    5:
        image: /images/user-guide/ui/slack/create-slack-api-token-6.png
        title: 'Next step - install your app to your Slack workspace. Click "Install to Workspace" button;'
    6:
        image: /images/user-guide/ui/slack/create-slack-api-token-7.png
        title: 'App is requesting permission to access your Slack workspace. Click "Allow";'
    7:
        image: /images/user-guide/ui/slack/create-slack-api-token-8.png
        title: 'Success! Your app is created. Now, navigate to "OAuth & Permissions" page;'
    8:
        image: /images/user-guide/ui/slack/create-slack-api-token-9.png
        title: 'Copy "Bot User OAuth Token". This is the "Slack API token" we need.'

thingsboardSystemAdminSettings:
    0:
        image: /images/user-guide/ui/slack/add-slack-api-token-sysadmin-1-pe.png
        title: 'Login to your ThingsBoard UI as a system administrator. Navigate to "Settings" page, "Notification" tab. In "Slack settings" window paste copied Slack API token to "Slack api token" row and click "Save".'

thingsboardTenantAdminSettings:
    0:
        image: /images/user-guide/ui/slack/add-slack-api-token-tenant-admin-1-pe.png
        title: 'Login to your ThingsBoard UI as a tenant administrator. Navigate to "Settings" page, "Notification" tab. In "Slack settings" window paste copied Slack API token to "Slack api token" row and click "Save".'

---

{% assign docsPrefix = "paas/eu/" %}
{% include get-hosts-name.html docsTag="paas-eu" %}
{% include docs/user-guide/ui/slack-settings.md %}