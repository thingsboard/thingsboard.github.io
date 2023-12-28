* TOC
{:toc}

ThingsBoard System Administrator is able to configure a connection to a SMTP server that will be used to distribute activation and password reset emails to users.{% unless docsPrefix %}
This configuration step is required in production environments. If you are evaluating the platform, pre-provisioned
[**demo accounts**](/docs/samples/demo-account/#demo-tenant) are sufficient in most of the use cases.
{% endunless %}

{% capture difference %}
**NOTE:**
<br>
System Mail settings are used only during user creation and password reset process and are controlled by a system administrator.
Tenant administrator is able to [**set up email rule node**](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) to distribute alarms produced by [**rule engine**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Mail Server configuration

Following steps are required to configure Mail Server settings.

First, you must log in to your ThingsBoard instance WEB UI as a *system administrator*. Then, left click on the three dots in the top-right corner of the WEB UI and select "Profile".
Change 'sysadmin@thingsboard.org' to your email address. Now re-login as administrator again.

{% if docsPrefix == null %}
![image](/images/user-guide/ui/mail/mail-settings-change-administrator-email-address-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/ui/mail/mail-settings-change-administrator-email-address-pe.png)
{% endif %}

<br>
Now we need to configure SMTP server.

Starting from ThingsBoard 3.5.2 we have added mail settings templates for such providers: Google, Office 356, SendGrid. 
So users don't have to fill in connection settings like SMTP server host, port and TLS configuration.
If you want to change some setting use "Custom" SMTP provider type.

This guide provides examples of configuring SMTP server using [Sendgrid](#sendgrid-configuration-example), [Gmail](#gmail-configuration-with-basic-authentication-example) and [Office 365](#office-365-configuration-with-oauth2-authentication-example). In your configuration you can use any other SMTP server.

### Sendgrid configuration example

A SendGrid configuration is fairly simple and straightforward. First, you need to create [SendGrid](https://sendgrid.com/) account. 
You can try it for free and the free plan is most likely enough for platform evaluation.

**ㅤ1. Setup SendGrid configuration**

{% include images-gallery.html imageCollection="sendgrid-configuration" showListImageTitles="true" %}

**ㅤ2. Setup ThingsBoard mail server settings**

Now navigate to the "Settings" page -> "Mail Server" tab your ThingsBoard instance and fill in the form:

- Fill in the "Mail From" field;
- Select SMTP provider - **SendGrid**;
- Enter username: **apikey**;
- Enter password: previously generated **password**.

Click "Save" button.

{% if docsPrefix == null %}
![image](/images/user-guide/ui/mail/sendgrid-settings-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/ui/mail/sendgrid-settings-pe.png)
{% endif %}

<br>
**ㅤ3. Send test email**

Optional, you can receive test mail on your email.
In case of error in configuration, you should receive a popup with the error log.

You can also complete verification on the SendGrid website.

![image](/images/user-guide/ui/mail/sendgrid-it-works.png)

### Gmail configuration with basic authentication example

In order to use Gmail, you will need to enable two-step verification (this step is not mandatory, but it is highly recommended.) and generate an [**app password**](https://support.google.com/accounts/answer/185833?hl=en).

**ㅤ1. Setup Google Account configuration**

{% include images-gallery.html imageCollection="gmail-generate-an-app-password" showListImageTitles="true" %}

**ㅤ2. Setup ThingsBoard mail server settings**

Once this is ready, you should be able to set up mail server using the information below.
Navigate to the "Settings" page -> "Mail Server" tab your ThingsBoard instance and fill in the form:

- Fill in the "Mail From" field;
- Select SMTP provider - **Google**;
- Enter your email as **username**;
- Leave **basic** authentication type;
- Enter previously copied **app password**.

Click "Save" button.

{% if docsPrefix == null %}
![image](/images/user-guide/ui/mail/gmail-settings-basic-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/ui/mail/gmail-settings-basic-pe.png)
{% endif %}

<br>
**ㅤ3. Send test email**

Optional, you can receive test mail on your email.
In case of error in configuration, you should receive a popup with the error log.

### Gmail configuration with OAuth2 authentication example

Starting from ThingsBoard 3.5.2 it is possible to use OAuth2 authorization for Gmail SMTP server. 
Using OAuth 2.0 protocol, user can do authentication by Gmail Web OAuth instead of inputting user and password directly in application. 
This way is more secure, but a little bit complex.

To use Gmail OAuth2 you need to create a project in Google Developers Console but first let's set up ThingsBoard mail server settings.

**ㅤ1. Setup ThingsBoard mail server settings**

- In your ThingsBoard instance, go to the "Settings" page -> "Mail Server" tab;
- Fill in the "mail From" field;
- Select SMTP provider - "**Google**";
- In the "Authentication" block, fill in username with email address you are going to use for sending mail from;
- Toggle the authentication type to **OAuth2**;
- Copy and save the "**Redirect URI template**". It will be needed while set up Google project credentials.

{% if docsPrefix == null %}
![image](/images/user-guide/ui/mail/google-oauth-settings-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/ui/mail/google-oauth-settings-1-pe.png)
{% endif %}

<br>
**ㅤ2. Now let's create a project in [Google Developers Console](https://console.developers.google.com/projectcreate)**

{% include images-gallery.html imageCollection="create-gmail-project" showListImageTitles="true" %}

**ㅤ3. Then you need to create credentials**

{% include images-gallery.html imageCollection="create-gmail-credentials" showListImageTitles="true" %}

<br>
**ㅤ4. Complete ThingsBoard settings setup**

Back to the Thingsboard portal and paste **Client ID** and **Client secret** from the previous steps into the appropriate fields. Click "Save".

{% if docsPrefix == null %}
![image](/images/user-guide/ui/mail/google-oauth-settings-2-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/ui/mail/google-oauth-settings-2-pe.png)
{% endif %}

<br>
**ㅤ5. Generate access token**

Finally, we can get access token. For this click on the **Generate access token** and your browser will redirect you to provider login page. 
Please follow the steps in your browser and after acceptance we will automatically save Refresh Token and Access Token and redirect you back to ThingsBoard portal. 
If access token was successfully generated you will see status "generated".

{% if docsPrefix == null %}
![image](/images/user-guide/ui/mail/google-oauth-settings-3-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/ui/mail/google-oauth-settings-3-pe.png)
{% endif %}

<br>
**ㅤ6. Send test email**

To check if everything works click "Send test email" button. Keep in mind that each time you change provider info system will drop refresh and access token and you will need to generate it again.

### Office 365 configuration with OAuth2 authentication example

Starting from Thingsboard 3.5.2 it is possible to use OAuth2 authorization for Office 365 SMTP server. 

{% capture difference %}
**Please note:**
<br>
Take a note that OAuth 2.0 is supported for Microsoft 365 accounts, but NOT for personal Outlook accounts (e.g. @outlook.com or @hotmail.com accounts). 
{% endcapture %}
{% include templates/info-banner.md content=difference %}

First, go to the "Azure directory" to save user principal name of user you want to use for mail sending (if not exists, please create or invite from external services):

 - Sign in to the [Azure portal](https://portal.azure.com/) and select Microsoft Entra ID;
 - Select microsoft user and copy user principal name.

{% include images-gallery.html imageCollection="microsoft-azure-with-oauth2" %}

To use Office 365 OAuth2 you need to register an application in the Azure portal but first let’s set up Thingsboard mail server settings.

**ㅤ1. Setup ThingsBoard mail server settings**:

 - In your ThingsBoard instance, go to the "Settings" page -> "Mail Server" tab;
 - Enter previously copied Microsoft user principal name (e.g. app_user@onmicrosoft.com);
 - Select SMTP provider - "**Office 365**";
 - In the "Authentication" block, fill in username with microsoft user principal name (the same as you used for mail from);
 - Toggle the authentication type to **OAuth2**;
 - Copy and save the "**Redirect URI template**". It will be needed while set up the Azure portal credentials.

{% if docsPrefix == null %}
![image](/images/user-guide/ui/mail/microsoft-azure-oauth-settings-1-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/ui/mail/microsoft-azure-oauth-settings-1-pe.png)
{% endif %}

<br>
**ㅤ2. Now let's register an application in the Azure portal**:

{% include images-gallery.html imageCollection="azure-portal" showListImageTitles="true" %}

<br>
**ㅤ3. Then you need to create a "Client secret"**:

{% include images-gallery.html imageCollection="azure-portal-2" showListImageTitles="true" %}

<br>
**ㅤ4. To finish the authentication set up you need add API permissions for SMTP**:

{% include images-gallery.html imageCollection="add-api-permissions" showListImageTitles="true" %}

<br>
**ㅤ5. Complete ThingsBoard settings setup**:

Back to the ThingsBoard portal and paste **Client ID**, **Client secret** and **Directory (tenant) ID** from the previous steps into the appropriate fields. Click "Save".

{% if docsPrefix == null %}
![image](/images/user-guide/ui/mail/microsoft-azure-oauth-settings-2-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/ui/mail/microsoft-azure-oauth-settings-2-pe.png)
{% endif %}

<br>
**ㅤ6. Generate access token**:

Finally, we can get access token. For this click on the "Generate access token" button and your browser will redirect you to provider login page. Please follow the steps
in your browser and after acceptance we will automatically save Refresh Token and Access Token and redirect you back to ThingsBoard portal. 
If access token was successfully generated you will see status "generated".

{% if docsPrefix == null %}
![image](/images/user-guide/ui/mail/microsoft-azure-oauth-settings-3-ce.png)
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](/images/user-guide/ui/mail/microsoft-azure-oauth-settings-3-pe.png)
{% endif %}

<br>
**ㅤ7. Send test email**:

To check if everything works click "Send test email" button. Keep in mind that each time you change provider info system will drop refresh and access token and you will need to generate it again.

<br>
**Office 365 troubleshooting**

If you see authentication errors while sending email (e.x. 5.7.3):

1. Make sure SMTP settings are enabled for user. For this go to [here](https://portal.office.com/adminportal/home#/users). Then select user →  Mail → Manage email apps → Authenticate SMTP (if enabled - disable and enable again);
2. In Azure portal make sure Security defaults are disabled.

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}
