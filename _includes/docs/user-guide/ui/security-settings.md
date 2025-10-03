* TOC
{:toc}

Users log into ThingsBoard using a username and password. To improve account security, you can adjust your security settings. To configure these settings, sign in to **ThingsBoard** with a **System Administrator** account.

{% if docsPrefix == null %}
![image](/images/user-guide/ui/security-settings/security-settings-general-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/ui/security-settings/security-settings-general-pe.png)
{% endif %}

## General policy

In this section, you can configure the overall security rules for user accounts:

- **Maximum number of failed login attempts** – sets the number of unsuccessful login attempts allowed before the account is locked.

- **Notification on account lockout** – specify an email address to receive a notification if a user's account gets locked.

- **User activation link TTL** – defines the time-to-live for activation links(in hours) sent to new users. After this period, the link will expire.

- **Password reset link TTL** – sets the expiration time(in hours) for password reset links sent via email.

- **Mobile secret key length** – determines the length of the secret key used for mobile authentication.

{% capture ttl-limit %}
**Note**:
The **TTL** value for **User Activation** and **Password Reset** links can be configured within the range of 1 to 24 hours. This range is fixed and cannot be modified.
{% endcapture %}
{% include templates/info-banner.md content=ttl-limit %}

## Password policy

The password policy sets the rules that passwords for the ThingsBoard must meet. You can specify the following options:

- **Minimum password length** - the parameter determines the minimum number of characters in the password. Minimum password length should be in a range from 6 to 50;

- **Maximum password length** - the parameter determines the maximum number of characters in the password. Maximum password length should be greater than minimum length;

- **Minimum number of uppercase letters** - set the minimum number of uppercase letters in the password;

- **Minimum number of lowercase letters** - set the minimum number of lowercase letters in the password;

- **Minimum number of digits** - specify minimum number of digits in the password;

- **Minimum number of special characters** - specify the minimum number of special characters in the password;

- **Password expiration period in days** - force expiration of the password. After the password expires, ThingsBoard will require the user to change it. This ensures users regularly update their passwords;

- **Password reuse frequency in days** - disallow to use the same password for the defined number of days;

- **Allow whitespace** - if the checkbox is checked, spaces are allowed in the password;

- **Force to reset password if not valid** - users with a password that fails the validation will need to reset their password via email.

After the settings, apply the changes by pressing the **Save** button.

## JWT Security Settings

In this section, you can configure the **JSON Web Token** (JWT) parameters used by **ThingsBoard** for authentication and session management. The settings allow you to control token generation, expiration, and signing.

- **Issuer name** – specify the name of the issuer for JWT tokens. This value will be included in all generated tokens and can be used to validate their source.

- **Signing key** – enter a Base64-encoded string representing at least 512 bits of data. This key is used to sign JWT tokens and verify their integrity. You can also generate a new key using the "Generate key" button.

- **Token expiration time** – set the lifetime of JWT tokens in seconds. After this period, the token will expire and the user will need to authenticate again.The default value is 9000 seconds. The minimal value is 60 seconds.

- **Refresh token expiration time** – set the lifetime of refresh tokens in seconds. Refresh tokens allow users to obtain new JWT tokens without re-authenticating.The default value is 604800 seconds. The minimal value is 900 seconds.

{% if docsPrefix == null %}
![image](/images/user-guide/ui/security-settings/security-settings-JWT-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/ui/security-settings/security-settings-JWT-pe.png)
{% endif %}


After the settings, apply the changes by pressing the **Save** button.

## Practical recommendations

- Configure the system so that users utilize strong passwords that contain uppercase and lowercase letters, numbers, and special characters;
- Implement [two-factor authentication](/docs/{{docsPrefix}}user-guide/two-factor-authentication/){:target="_blank"} to enhance security.