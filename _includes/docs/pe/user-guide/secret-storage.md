* TOC
{:toc}

{% assign sinceVersion = "4.1" %}
{% include templates/since.md %}

**Secret storage** is an important feature of ThingsBoard, designed for secure and convenient management of confidential information, such as passwords, tokens, API keys, or CA certificates. 
All information within Secret Storage is securely encrypted and stored as **Secrets**.

Each **Secret's** value is securely encrypted, making it inaccessible to end users. This allows confidential data to be shared or used without directly exposing its contents.

Once created, **Secrets** can be securely utilized in integrations and rule nodes, eliminating the need to input confidential data directly into configuration. 
This significantly enhances system security and reduces the risks associated with unauthorized access or data leaks.

Using Secret storage allows you to:
- Securely store sensitive information.
- Avoid hard-coding secrets into rules.
- Easily manage access to secrets.
- Enhance security and reduce the risk of information leaks.

## How Secret Storage Works

Secret Storage in ThingsBoard operates as follows:
1. **Creating a secret**: The user creates a secret through the admin panel, specifying its name and value.
2. **Encryption**: ThingsBoard automatically encrypts the provided secret using the AES-256 encryption algorithm.
3. **Access from rules**: Secrets can be accessed within rules using specific functions without directly exposing their values.

## Creating a Secret in ThingsBoard

To create a secret:
- Go to the "Secret storage" page of the "Security" section.
- Click the "Add secret" button in the upper right corner.
- SElect secret type - Text or File.
- Enter the secret name and its value.
- Click the “Save” button.

## Using Secrets in Rules

After creating a secret, you can use it within rules using JavaScript functions. For example:

```javascript
var apiKey = secretStorage.getSecret('MyApiKey');
```

This method returns the secret value, which can be used to perform secure HTTP requests or other operations.

## Managing Access

ThingsBoard allows managing secret access through user roles and permissions. Only users with appropriate permissions can create, modify, or delete secrets.

## Best Practices
- Always use Secret Storage instead of hard-coding sensitive information.
- Regularly update secrets and manage access according to the principle of least privilege.
- Monitor logs to track the usage of secrets.

## Conclusion

Secret Storage is an essential ThingsBoard feature for securely handling sensitive data. Proper use of this feature greatly improves the security of your IoT platform.

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}