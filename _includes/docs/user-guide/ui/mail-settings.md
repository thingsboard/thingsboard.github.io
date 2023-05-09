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
Tenant administrator is able to [**setup email rule node**](/docs/user-guide/rule-engine-2-0/tutorials/send-email/) to distribute alarms produced by [**rule engine**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/re-getting-started/).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Mail Server configuration

Following steps are required to configure Mail Server settings.

First, you must login to your ThingsBoard instance WEB UI as a *system administrator*. Then, right click on the burger in the top-right corner of the WEB UI and select 'Profile'.
Change 'sysadmin@thingsboard.org' to your email address. Now re-login as administrator again.

{% if docsPrefix == null %}
![image](/images/user-guide/ui/mail/mail-settings-change-administrator-email-address-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/ui/mail/mail-settings-change-administrator-email-address-pe.png)
{% endif %}

<br/>
Now we need to configure SMTP server.

This guide provides examples of configure SMTP server using Sendgrid and Gmail. In your configuration you can use any other SMTP server.

##### Sendgrid configuration example

SendGrid configuration is fairly simple and straightforward. First, you need to create [SendGrid](https://sendgrid.com/) account. 
You can try it for free and the free plan is most likely enough for platform evaluation.

Once you create your account, you will be forwarded to the welcome page.

![image](/images/user-guide/ui/mail/sendgrid-welcome.png)

Go to the 'Integration Guide' page and choose 'SMTP Relay'.

![image](/images/user-guide/ui/mail/sendgrid-smtp-relay.png)

Populate the API key name and generate it.

![image](/images/user-guide/ui/mail/sendgrid-token.png)

Now navigate to the 'Settings' page -> 'Mail Server' tab your ThingsBoard instance and populate the form.
Update 'Mail From' field, copy tthe data from the SendGrid page and paste to the Thingsboard mail server settings form.

- SMTP host: **smtp.sendgrid.com**;
- SMTP port: **465**;
- Username: **apikey**;
- Password: previously generated **password**.

Note that you can also enable/disable TLS using checkbox.

Click on 'Send test mail' button.

{% if docsPrefix == null %}
![image](/images/user-guide/ui/mail/sendgrid-settings-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/ui/mail/sendgrid-settings-pe.png)
{% endif %}

Once you receive test mail on your email, save Mail Server configuration.
In case of error in configuration, you should receive a popup with the error log.

You can also complete verification on the SendGrid website.

![image](/images/user-guide/ui/mail/sendgrid-it-works.png)

##### Gmail configuration example

In order to use Gmail, you will need to enable two-step verification (this step is not mandatory, but it is highly recommended.) and generate an [**app password**](https://support.google.com/accounts/answer/185833?hl=en).

{% include images-gallery.html imageCollection="gmail-generate-an-app-password" %}

Once this is ready, you should be able to setup mail server using the information below:

- SMTP host: **smtp.gmail.com**;
- SMTP port: **465**;
- Username: your email;
- Password: previously created **app password**.

You can also enable/disable TLS using checkbox.

Click '**Send test mail**' button.

{% if docsPrefix == null %}
![image](/images/user-guide/ui/mail/gmail-settings-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/ui/mail/gmail-settings-pe.png)
{% endif %}

Once you receive test mail on your email, save Mail Server configuration.
In case of error in configuration, you should receive a popup with the error log.