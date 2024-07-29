* TOC
{:toc}

To log into ThingsBoard, the user uses a username and password. You can enhance the security of your account by updating your security settings.
To customize security settings, log in to ThingsBoard as a System administrator.

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/ui/security-settings/security-settings-1-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](https://img.thingsboard.io/user-guide/ui/security-settings/security-settings-1-pe.png)
{% endif %}

## General policy

In this section, you can set the maximum number of failed login attempts after which the account will be locked. 
You can also specify an email address to send a notification to in case the user's account is locked.

## Password policy

The password policy sets the rules that passwords for the ThingsBoard must meet. You can specify the following options:

- **Minimum password length** - the parameter determines the minimum number of characters in the password. Minimum password length should be in a range from 6 to 50;

- **Maximum password length** - the parameter determines the maximum number of characters in the password. Maximum password length should be greater than minimum length;

- **Minimum number of uppercase letters** - set the minimum number of uppercase letters in the password;

- **Minimum number of uppercase letters** - set the minimum number of lowercase letters in the password;

- **Minimum number of digits** - specify minimum number of digits in the password;

- **Minimum number of special characters** - specify the minimum number of special characters in the password;

- **Password expiration period in days** - force expiration of the password. After the password expires, ThingsBoard will require the user to change it. This ensures users regularly update their passwords;

- **Password reuse frequency in days** - disallow to use the same password for the defined number of days;

- **Allow whitespace** - if the checkbox is checked, spaces are allowed in the password;

- **Force to reset password if not valid** - users with a password that fails the validation will need to reset their password via email.

After the settings, apply the changes by pressing the "Save" button.

## Practical recommendations

- Configure the system so that users utilize strong passwords that contain uppercase and lowercase letters, numbers, and special characters;
- Implement [two-factor authentication](/docs/{{docsPrefix}}user-guide/two-factor-authentication/){:target="_blank"} to enhance security.