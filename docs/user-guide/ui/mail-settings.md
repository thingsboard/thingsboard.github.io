---
layout: docwithnav
assignees:
- ashvayka
title: Mail Settings

---

Thingsboard System Administrator is able to configure connection to SMTP server that will be used to distribute activation and password reset emails to users.
This configuration step is required on production environments. 
If you are evaluating the platform, pre-provisioned [**demo accounts**](/docs/samples/demo-account/#demo-tenant) are sufficient in most of the use cases.
  
**NOTE** System Mail settings are used only during user creation and password reset process and are controlled by system administrator. 
Tenant administrator is able to [**setup email plugin**](/docs/samples/alarms/mail/) to distribute alarms produced by [**rule engine**](/docs/user-guide/rule-engine/).  

* TOC
{:toc}

Following steps are required to configure system mail settings.

##### Step 1. Login as system administrator

Login to your Thingsboard instance WEB UI as a system administrator using default [**account**](/docs/samples/demo-account/#system-administrator).

##### Step 2. Change administrator email address 

Right click on the burger in the top-right corner of the WEB UI and select 'Profile'.
Change 'sysadmin@thingsboard.org' to your email address. 

##### Step 3. Open 'Outgoing Mail' and populate SMTP server settings

Navigate to **System Settings -> Outgoing Mail** and populate the form. Click on 'Send Test Email' button. 
Test email will be sent to the mail address that you have specified in 'Step 2'.
In case of error in configuration, you should receive popup with error log.

##### Step 4. Save configuration

Once you will receive test email you can save SMTP server configuration.
