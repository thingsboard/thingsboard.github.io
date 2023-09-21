* TOC
{:toc}

Two-factor authentication is a state-of-the-art approach designed to provide an extra security layer. With 2FA, even though someone knows your password your ThingsBoard account is safe against malicious access.

In addition to entering a password, one must populate a secret code that comes to a pre-configured mailbox or phone. Also, a notification will be sent if someone tries to access one's account.

The validity period of the secret and the remaining properties available for the system administrator can make online accounts invulnerable to cybercriminals.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/two-factor-authentication/two-factor-authentication-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](https://img.thingsboard.io/user-guide/two-factor-authentication/two-factor-authentication-pe.png)
{% endif %}

### Two-factor authentication options available in ThingsBoard

- **Email**. With this approach, the user receives a secret code by mail after entering their valid username and password. For proper work of 2FA by email, an [outgoing mail server](/docs/user-guide/ui/mail-settings/) should be configured.
- **SMS**. A secret one-time code is sent to the user's phone in short message. To receive SMS, a system administrator should set up the [SMS provider](/docs/user-guide/ui/sms-provider-settings/) properly.
- **Authenticator app**. If enabled, users need to install an app on a computer or smartphone to generate a code. The software dynamically renders a short-time secrets that should be used on a second step of authentication process. A user can utilize any popular app, like Google Authenticator, Authy, or Duo.
- **Backup code**. The backup code is a number of digits that the user generates in ThingsBoard and saves on secure device or prints out. Authentication with backup can be activated only in combination with any of the above types of authentication. The system administrator cannot configure a backup code approach as the only available 2FA option.  

### How to enable two-factor authentication for the platform 

The system administrator user configures the default security policies and options for all remaining users. The former can turn on/off the possibility to use 2FA of any kind while the end user defines whether to use an additional verification or not. Follow the steps below to enable two-factor authentication for your ThingsBoard instance.

1. Log in as a sysadmin to your ThingsBoard platform instance;
2. Go to "Security" page &mdash; "Two-factor authentication" section;
3. Activate and configure one or more verification methods. Edit settings for all enabled 2FA providers (verification message template, verification code lifetime, total allowed time for verification, etc) if necessary;
4. Save changes.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/two-factor-authentication/two-factor-authentication-sysadmin-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](https://img.thingsboard.io/user-guide/two-factor-authentication/two-factor-authentication-sysadmin-pe.png)
{% endif %}

### Two-factor authentication for the user login

If enabled, users on the platform can add an extra verification of their identity to access the data. Although 2FA can be a corporate security standard, the final decision on whether to use it or not is with a particular user. Sysadmin cannot force users to authenticate with 2FA.    

1. Log in with basic credentials;
2. In the upper right corner, click on the three dots icon. In the dropdown menu, proceed with "Security";
3. Activate the convenient verification method. One can activate multiple providers;
4. Save changes.

{% include images-gallery.html imageCollection="two-factor-authentication-password-and-authentication" showListImageTitles="true" %}

{% capture difference %}
**Important!** The list of toggleable 2FA options depends on the system administrator's settings.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

###### 2FA with Authenticator app

{% include images-gallery.html imageCollection="two-factor-authentication-app" showListImageTitles="true" %}

###### 2FA with SMS

{% include images-gallery.html imageCollection="two-factor-authentication-sms" showListImageTitles="true" %}

###### 2FA with email

{% include images-gallery.html imageCollection="two-factor-authentication-email" showListImageTitles="true" %}

###### 2FA with a Backup code

{% include images-gallery.html imageCollection="two-factor-authentication-backup-code" showListImageTitles="true" %}

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}