---
layout: docwithnav
assignees:
- ashvayka
title: Mail Settings
description: Thingsboard IoT platform mail settings

---

Thingsboard System Administrator is able to configure connection to SMTP server that will be used to distribute activation and password reset emails to users.
This configuration step is required on production environments. 
If you are evaluating the platform, pre-provisioned [**demo accounts**](/docs/samples/demo-account/#demo-tenant) are sufficient in most of the use cases.
  
**NOTE** System Mail settings are used only during user creation and password reset process and are controlled by system administrator. 
Tenant administrator is able to [**setup email plugin**](/docs/samples/alarms/mail/) to distribute alarms produced by [**rule engine**](/docs/user-guide/rule-engine/).  

* TOC
{:toc}

Following steps are required to configure system mail settings.

#### Step 1. Login as system administrator

Login to your Thingsboard instance WEB UI as a system administrator using default [**account**](/docs/samples/demo-account/#system-administrator).

#### Step 2. Change administrator email address 

Right click on the burger in the top-right corner of the WEB UI and select 'Profile'.
Change 'sysadmin@thingsboard.org' to your email address. Now re-login as administrator again. 

#### Step 3. Open 'Outgoing Mail' and populate SMTP server settings

Navigate to **System Settings -> Outgoing Mail** and populate the form. Click on 'Send Test Email' button. 
Test email will be sent to the mail address that you have specified in 'Step 2'.
In case of error in configuration, you should receive popup with error log.

##### Step 3.1. Sendgrid configuration example

SendGrid configuration is fairly simple and straightforward. First you need to create [SendGrid](https://sendgrid.com/) account. 
You can try it for free and the free plan is most likely enough for platform evaluation.

Once you create your account, you will be forwarded to the welcome page. Now you can provision your SMTP Relay credentials. See screen-shoot below. 

{:refdef: style="text-align: center;"}
![image](/images/user-guide/ui/mail/sendgrid-welcome.png)
{: refdef}

Please choose SMTP relay on the next page.

{:refdef: style="text-align: center;"}
![image](/images/user-guide/ui/mail/sendgrid-smtp-relay.png)
{: refdef}

Once you populate the API key name and generate it, you will be able to copy-paste settings from the screen to Thingsboard mail settings form.

{:refdef: style="text-align: center;"}
![image](/images/user-guide/ui/mail/sendgrid-token.png)
{: refdef}

Copy-paste the settings, update 'Mail From' field and click on 'Send Test Mail' button. 

{:refdef: style="text-align: center;"}
![image](/images/user-guide/ui/mail/sendgrid-settings.png)
{: refdef}

Once you receive the notification about successfull test, save populated data. You can also complete verification on the SendGrid website.

{:refdef: style="text-align: center;"}
![image](/images/user-guide/ui/mail/sendgrid-it-works.png)
{: refdef}





##### Step 3.2. Gmail configuration example

In order to use G-mail, you will need to do two extra steps. 
First, you need to allow [**less secure apps**](https://support.google.com/accounts/answer/6010255?hl=en).
Second, you need to enable two-step verification and generate an [**app password**](https://support.google.com/accounts/answer/185833?hl=en).
Although second step is not mandatory, it is highly recommended.

{:refdef: style="text-align: center;"}
![image](/images/user-guide/ui/mail/app-password.png)
{: refdef}

Once this is ready, you should be able to setup gmail account using the information below

{:refdef: style="text-align: center;"}
![image](/images/user-guide/ui/mail/gmail-settings.png)
{: refdef}

Similar settings are available for G-suite accounts, however you may need to contact your system administrator to enable less secure apps, etc.
Note that you can also enable/disable TLS using checkbox.

{:refdef: style="text-align: center;"}
![image](/images/user-guide/ui/mail/gsuite-settings.png)
{: refdef}


#### Step 4. Save configuration

Once you will receive test email you can save SMTP server configuration.
