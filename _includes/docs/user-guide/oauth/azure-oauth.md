* TOC
{:toc}

## Overview

ThingsBoard allows you to provide Single Sign On functionality for your customers and automatically create tenants, customers or subcustomers using external user management platforms, that supports **OAuth 2.0 protocol**.  
This guide is only for the **Azure Active Directory OAuth**. 

## Scenario description

In this guide we will configure the **OAuth** with the [Azure Active Directory](https://portal.azure.com/) for the authentication.
The user will be logged in to the Tenant, and Tenant's name will match the user's email address.
If Tenant does not exist in the system, the new Tenant will be created.

To map those external user infos from Auth0 platform we are going to use built-in [basic mapper](/docs/user-guide/oauth-2-support/#basic-mapper). 

If [basic mapper](/docs/user-guide/oauth-2-support/#basic-mapper) functionality will not fit your business needs, you can configure the [custom mapper](/docs/user-guide/oauth-2-support/#custom-mapper)  so that you are able to add an implementation that fits under your specific needs.

In case if you require to have advanced customization, you can refer to the [Microsoft identity platform and OpenID Connect protocol](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc) documentation.

## Login with Azure Active Directory

### Preparations 

The Azure Active Directory does require to use the SSL. Please, make sure that you have configured the HTTPS for the domain of yours, so that those can be configured with the **Azure Active Directory**.
  
In case if SSL is not configured please, follow [this guide](/docs/user-guide/install/pe/add-haproxy-ubuntu/) to install HAProxy and generate valid SSL certificate using Let’s Encrypt.
                                 
### Azure Active Directory settings

To apply the configurations properly, we need to obtain the values for the next variables: **Client ID**, **Client secret**, **Redirect URI template**, **Access token URI**, **Authorization URI**, **JSON Web Key URI** and **Scope**.

For those reasons we first go to the [Azure Active Directory](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview).  

![image](/images/user-guide/oauth-2-support/azure/azure-create-application-1.png)

Now we need to add the application. Go to the "**App registration**" tab. Click "**New registration**" button.

![image](/images/user-guide/oauth-2-support/azure/azure-create-application-2.png)

Specify application name. The platform type in our case is **Web**.

Specify the **redirect URI**:

```bash
https://domain:port/login/oauth2/code/
```
{: .copy-code}

 - where under the domain, please, specify the current **domain** of yours and for the **port** please specify the port to have an HTTPS access to the ThingsBoard instance of yours.

For the example of ours, we have the **domain** equals to the **tb-test.sytes.net** and the **port** 443, so that there is no need to specify the port additionally.

Then we need to confirm the registration of the application. Click "Register" button.

![image](/images/user-guide/oauth-2-support/azure/azure-create-application-3.png)

Now we are on the general page of ours, where we can find the **client ID**.  

![image](/images/user-guide/oauth-2-support/azure/azure-create-application-4.png)

Now let us go for the **Authentication** tab. Here we can find the **redirect URI**, and we need to enable authorization by **access tokens**. Save the changes.

![image](/images/user-guide/oauth-2-support/azure/azure-application-authentication-1.png)

Then we are going to the **Certificates & secrets** tab and create a new **client secret**.

![image](/images/user-guide/oauth-2-support/azure/azure-application-secrets-1.png)

![image](/images/user-guide/oauth-2-support/azure/azure-application-secrets-2.png)

Return to the **Overview** tab. In the **Endpoints** tab you will find links for the next variables: **Access token URI** and **Authorization URI**.


![image](/images/user-guide/oauth-2-support/azure/azure-application-endpoints-1.png)

An up-to-date list of the links can be found on **OpenID Connect metadata document** link.

Copy **OpenID Connect metadata document** link and paste into the browser line. There you will find **JSON Web Key URI** and the meanings of **scope**.

![image](/images/user-guide/oauth-2-support/azure/azure-application-endpoints-2.png)

In our example, the values of the variables are:

```bash
Client ID = 0bacf248-9127-8f1c-4431-9ce3bb92e4bf
Client secret = 6Vq8Q~qktxSFiMhZRdxl23nlxhMsS2elfZxMWcR7
Access token URI = https://login.microsoftonline.com/8eddd5cd-b327-4a84-4a84-96e534ccf130/oauth2/token
Authorization URI = https://login.microsoftonline.com/8eddd5cd-b327-4a84-4a84-96e534ccf130/oauth2/authorize
JSON Web Key URI = https://login.microsoftonline.com/8eddd5cd-b327-4a84-4a84-96e534ccf130/discovery/v2.0/keys
Scope = openid, profile, email
```

### Thingsboard settings

In ThingsBoard the OAuth 2 feature is available for configuration on a **system administrator** level. 

Log in to your ThingsBoard instance as a system administrator.

{% if docsPrefix == null %}
![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-login-1-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-login-1-pe.png)
{% endif %}

Go to the **OAuth2** tab in **System Settings** tab. Check the box "**Enable OAuth2 settings**". Click "**+ Add**" button to add OAuth2 settings.

{% if docsPrefix == null %}
![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-settings-1-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-settings-1-pe.png)
{% endif %}

**Login provider** select "**Custom**". Enter the values of the variables that we received earlier in the appropriate windows. In the list of **Allowed platforms**, select the required platform or leave "**All platforms**". Enter the **Provider label** that will be displayed in the login window.
{% unless docsPrefix == 'pe/' %}
Сlick "**Save**".
{% endunless %}

{% if docsPrefix == null %}
![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-settings-2-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-settings-2-pe.png)
{% endif %}

{% unless docsPrefix == null %}
Go to the **Mapper** section. Here you can make the setup for new users (at what level a new user will be created (tenant/customer/subcustomer), and which user group will be added to.
With the help of pre-configured groups and the permissions (roles) added, you can set the access scope and rights for new users. Roles are described in more detail in [this guide](/docs/pe/user-guide/rbac/). Сlick "**Save**".

![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-settings-3-pe.png)
{% endunless %}

Now log out of system administrator level. If you did everything right, the Thingsboard login window will give you the option to login with Azure Active Directory. Try it.

{% if docsPrefix == null %}
![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-login-2-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-login-2-pe.png)
{% endif %}

{% if docsPrefix == null %}
![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-login-3-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-login-3-pe.png)
{% endif %}

Congratulations, you are logged in to ThingsBoard using Azure Active Directory.


{% if docsPrefix == null %}
![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-login-4-ce.png)
{% endif %}
{% if docsPrefix == "pe/" %}
![image](/images/user-guide/oauth-2-support/azure/azure-thingsboard-login-4-pe.png)
{% endif %}

<br/>
In case of problems, please, contact us [using the contact us form](/docs/contact-us/).

## Next Steps

{% assign currentGuide = "OAuth" %}{% include templates/guides-banner.md %}
