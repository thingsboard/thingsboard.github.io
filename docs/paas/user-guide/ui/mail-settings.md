---
layout: docwithnav-paas
assignees:
- ashvayka
title: Mail Settings
description: ThingsBoard IoT platform mail settings

sendgrid-configuration:
    0:
        image: /images/user-guide/ui/mail/sendgrid-welcome.png
        title: 'Once you create your account, you will be forwarded to the welcome page. Click "Start" button;'
    1:
        image: /images/user-guide/ui/mail/sendgrid-smtp-relay.png
        title: 'Go to the "Email API" section -> "Integration Guide" page and choose a setup method - "SMTP Relay";'
    2:
        image: /images/user-guide/ui/mail/sendgrid-token.png
        title: 'Create an API key: enter the API key name and generate it.'

gmail-generate-an-app-password:
    0:
        image: /images/user-guide/ui/mail/gmail-generate-an-app-password-1.png
        title: 'Go to your Google Account and navigate to the "Security" page. Then select "2-Step Verification" tab;'
    1:
        image: /images/user-guide/ui/mail/gmail-generate-an-app-password-2.png
        title: 'At the bottom of the page, select "App passwords";'
    2:
        image: /images/user-guide/ui/mail/gmail-generate-an-app-password-3.png
        title: 'Click on the "Select app" and select "Other" app in the drop-down menu;'
    3:
        image: /images/user-guide/ui/mail/gmail-generate-an-app-password-4.png
        title: 'Enter app name and click "Generate" button;'
    4:
        image: /images/user-guide/ui/mail/gmail-generate-an-app-password-5.png
        title: 'Copy and save app password.'

create-gmail-project:
    0:
        image: /images/user-guide/ui/mail/gmail-with-oauth2-1-pe.png
        title: 'Input “Project name” and “Location”. Then click “Create”. New project is created.'

create-gmail-credentials:
    0:
        image: /images/user-guide/ui/mail/gmail-with-oauth2-2-pe.png
        title: 'Select created project and navigate to the "APIs & Services" page;'
    1:
        image: /images/user-guide/ui/mail/gmail-with-oauth2-3-pe.png
        title: 'Click on the "Credentials" tab, then click on the "Create Credentials" button and select "OAuth client ID";'
    2:
        image: /images/user-guide/ui/mail/gmail-with-oauth2-4-pe.png
        title: 'In a "Create OAuth client ID" window select application type - "Web application" and input the name of your OAuth2 client. Then, in the "Authorized redirect URIs" section, click the "+ Add URI" button and paste the previously copied "Redirect URI template". Click "Create";'
    3:
        image: /images/user-guide/ui/mail/gmail-with-oauth2-5-pe.png
        title: 'Save created client ID and client secret for future steps.'

microsoft-azure-with-oauth2:
    0:
        image: /images/user-guide/ui/mail/azure-create-application-1.png
        title: 'Sign in to the Azure portal and select Microsoft Entra ID;'
    1:
        image: /images/user-guide/ui/mail/microsoft-azure-copy-user-principal-name-1-pe.png
        title: 'Select microsoft user and copy user principal name.'

azure-portal:
    0:
        image: /images/user-guide/ui/mail/azure-create-application-2.png
        title: 'Under the "Manage" section select the "App registrations" page, and click the "New registration" button;'
    1:
        image: /images/user-guide/ui/mail/azure-create-application-3.png
        title: 'Enter a name for your application and paste the previously copied "Redirect URI template". Click the "Register" button;'
    2:
        image: /images/user-guide/ui/mail/microsoft-azure-with-oauth2-4-pe.png
        title: 'After application is created you can find "Client ID" and "Directory (tenant) ID" on "Overview" page. Save them for future steps.'

azure-portal-2:
    0:
        image: /images/user-guide/ui/mail/microsoft-azure-with-oauth2-5-pe.png
        title: 'Select "Certificates & secrets" > "Client secrets" > click "New client secret" button;'
    1:
        image: /images/user-guide/ui/mail/microsoft-azure-with-oauth2-6-pe.png
        title: 'Add a description for your client secret. Select an expiration for the secret or specify a custom lifetime. Click "Add";'
    2:
        image: /images/user-guide/ui/mail/microsoft-azure-with-oauth2-7-pe.png
        title: 'Save client secret value for future step.'

add-api-permissions:
    0:
        image: /images/user-guide/ui/mail/microsoft-azure-with-oauth2-api-permissions-1-pe.png
        title: 'In the Azure portal go to “API permissions” page and click “Add a permission” button;'
    1:
        image: /images/user-guide/ui/mail/microsoft-azure-with-oauth2-api-permissions-2-pe.png
        title: 'Select an API - "Microsoft Graph";'
    2:
        image: /images/user-guide/ui/mail/microsoft-azure-with-oauth2-api-permissions-3-pe.png
        title: 'Select type of permissions - "Delegated permissions";'
    3:
        image: /images/user-guide/ui/mail/microsoft-azure-with-oauth2-api-permissions-4-pe.png
        title: 'Search and check the box “SMTP.Send” permission. Then click “Add permissions” button;'
    4:
        image: /images/user-guide/ui/mail/microsoft-azure-with-oauth2-api-permissions-5-pe.png
        title: 'Permissions is updated.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/ui/mail-settings.md %}