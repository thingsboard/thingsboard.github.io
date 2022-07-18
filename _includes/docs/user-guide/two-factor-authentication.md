* TOC
{:toc}

Two-factor authentication is an extra layer of security designed to ensure that you're the only person who can access your ThingsBoard account, even if someone knows your password.

In addition to entering a password, you must also enter a one-time code that comes to your mail or phone. Also, you will receive a notification if someone tries to access your account.

A one-time code is only valid for a couple of minutes or hours, after which it self-destructs. Thus, thanks to two-factor authentication, your online accounts become invulnerable to cybercriminals.

{% if docsPrefix == null %}
![image](/images/user-guide/two-factor-authentication/two-factor-authentication-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/two-factor-authentication/two-factor-authentication-pe.png)
{% endif %}

### Types of two-factor authentication used in ThingsBoard:

- Authenticator app - Users need to install an app on a computer or smartphone to receive a code. The software dynamically generates codes for the user for a short period of time. After successfully logging into the account, the user needs to open the application and enter the code that the application generated. Examples of two-factor authentication software are Google Authenticator, Authy, or Duo;
- Two-factor authentication via SMS - A secret one-time password is sent to the smartphone user in an SMS message. For correct operation of two-factor authentication via SMS, don't forget to set up an [SMS provider settings](/docs/user-guide/ui/sms-provider-settings/);
- Two-factor authentication by email. The user receives a secret code by mail after entering their password and username correctly. For correct operation of two-factor authentication by email, don't forget to set up an [outgoing mail server](/docs/user-guide/ui/mail-settings/);
- The backup code is a secret one-time password that the user generates in ThingsBoard and saves in text format or prints out. Authentication by backup code can be used only in combination with the above types of authentication.

### Activation of two-factor authentication:

Follow the steps below to enable two-factor authentication for your Thingsboard instance.

1. Log in as a sysadmin to your ThingsBoard instance;
2. Go to the two-factor-authentication section;
3. Activate and configure one or more of the available authentication methods. Edit additional settings such as: verification message template, verification code lifetime, total allowed time for verification, etc;
4. Save changes.

{% if docsPrefix == null %}
![image](/images/user-guide/two-factor-authentication/two-factor-authentication-sysadmin-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/two-factor-authentication/two-factor-authentication-sysadmin-pe.png)
{% endif %}

### Setting up two-factor authentication for a user:

1. Log in with the account for which you will set up two-factor authentication;
2. In the upper right corner, click on the three dots button. In the dropdown menu, go to password and authentication;
3. Activate the authentication method that is convenient for you. You can activate one or more methods;
4. Save changes.

{% include images-gallery.html imageCollection="two-factor-authentication-password-and-authentication" %}

*Important!* You will have access only to the authentication methods that you specified at the stage of activating two-factor authentication.

You can authenticate with:

###### Authenticator app:

1. Click the switch to enable App Authentication;
2. Install and open the authenticator app on your mobile phone. You can install apps like Google Authenticator, Authy, or Duo;
3. Scan the QR code with your verification app;
4. Enter the 6-digit code from your verification app;
5. Success! Authentication by app is enabled. The next time you log in, you will need to provide the code received in the two-factor authentication application;
6. After you entered login and password for your ThingsBoard account, enter the secret code from your authenticator app.

{% include images-gallery.html imageCollection="two-factor-authentication-app" %}

###### SMS

1. Click the switch to enable authentication by SMS;
2. Enter a phone number to use as your authenticator;
3. Enter the 6-digit code that was sent to the previously specified phone number;
4. Success! Authentication by SMS is enabled. The next time you log in, you will need to provide the code received in the SMS;
5. After you entered login and password for your ThingsBoard account, enter the secret code from SMS.

{% include images-gallery.html imageCollection="two-factor-authentication-sms" %}

###### Email
1. Click the switch to enable authentication by email;
2. Enter an email to use as your authenticator;
3. Enter the 6-digit code that was just sent to johndoe@thingsboard.io;
4. Success! Authentication by email is enabled. The next time you log in, you will need to provide the code received in the email;
5. After you entered login and password for your ThingsBoard account, enter the secret code from the email.

{% include images-gallery.html imageCollection="two-factor-authentication-email" %}

###### Backup code

1. Click the switch to enable authentication with backup code;
2. You will see codes for logging into your account. You can download them (txt) or print them. Each backup code can only be used only once;
3. After you entered login and password for your ThingsBoard account, switch to verify your identity with a backup code;
4. Enter the 8-digit code from your backup codes list.

{% include images-gallery.html imageCollection="two-factor-authentication-backup-code" %}

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}
