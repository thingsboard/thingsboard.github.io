---
layout: docwithnav
assignees:
- ashvayka
title: Two-factor authentication
description: Two-factor authentication using ThingsBoard

two-factor-authentication-password-and-authentication:
    0:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-password-and-authentication-1-ce.png
        title: 'Log in to ThingsBoard with basic credentials. In the upper right corner, click on the three dots icon. In the dropdown menu, proceed with "Account";'
    1:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-password-and-authentication-2-ce.png
        title: 'Navigate to the "Security" tab. Activate the convenient verification method. One can activate multiple providers. Save changes.'

two-factor-authentication-app:
    0:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-app-1-ce.png
        title: 'Toggle to enable authentication with the external app;'
    1:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-app-2-ce.png
        title: 'Install and open the authenticator app on your mobile device;'
    2:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-app-3-ce.png
        title: 'Scan the QR code using the application;'
    3:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-app-4-ce.png
        title: 'Enter the 6-digit code from authenticator;'
    4:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-app-5-ce.png
        title: 'The next time the user logs in, he/she will need to provide the code rendered by the application. Click "Done";'
    5:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-app-6-ce.png
        title: '2FA by Authentication app is enabled;'
    6:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-app-7-ce.png
        title: 'While login, on the first step the user enters the email and password. Afterward, user should enter the security code from the authenticator app.'

two-factor-authentication-sms:
    0:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-sms-1-ce.png
        title: 'Toggle to enable authentication by SMS;'
    1:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-sms-2-ce.png
        title: 'Enter the valid phone number and expect to receive a verification short message;'
    2:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-sms-4-ce.png
        title: 'Input the 6-digit code from your verification SMS;'
    3:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-sms-5-ce.png
        title: 'The next time the user logs in, he/she will need to enter the code from SMS. Click "Done";'
    4:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-sms-6-ce.png
        title: '2FA by SMS is enabled;'
    5:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-sms-7-ce.png
        title: 'While login, on the first step the user enters the email and password. Afterward, user should enter the security code from your SMS.'

two-factor-authentication-email:
    0:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-email-1-ce.png
        title: 'Toggle to enable authentication by email;'
    1:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-email-2-ce.png
        title: 'Enter an email to receive a secret code;'
    2:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-email-3-ce.png
        title: 'Enter the 6-digit code from your verification email;'
    3:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-email-4-ce.png
        title: 'Click "Done";'
    4:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-email-5-ce.png
        title: '2FA by email is enabled;'
    5:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-email-6-ce.png
        title: 'While login, on your first step the user enters the email and password. Afterward, user should enter the security code from your mailbox.'

two-factor-authentication-backup-code:
    0:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-backup-code-1-ce.png
        title: 'Toggle to enable authentication with backup code;'
    1:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-backup-code-2-ce.png
        title: 'Once turned on, the codes will be available on the screen. The user can download them (txt) or print them. Each backup code can be used once;'
    2:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-backup-code-3-ce.png
        title: '2FA by backup code is enabled;'
    3:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-backup-code-4-ce.png
        title: 'While regular login process, after email and password step click “Try another way” button;'
    4:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-backup-code-5-ce.png
        title: 'Select a way to verify with a backup code;'
    5:
        image: /images/user-guide/two-factor-authentication/two-factor-authentication-backup-code-6-ce.png
        title: 'Enter the 8-digit code from your backup codes list;'

---

{% include get-hosts-name.html %}
{% include docs/user-guide/two-factor-authentication.md %}