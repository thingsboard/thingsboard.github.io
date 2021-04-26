---
layout: docwithnav
title: OAuth 2.0 Support
description: OAuth 2.0 Support

---

* TOC
{:toc}

## Overview
ThingsBoard allows you to provide Single Sign On functionality for your customers and automatically create tenants, customers or subcustomers using external user management platforms, that supports **OAuth 2.0 protocol**.  
This guide is only for the **Azure Active Directory OAuth**. 
## Scenario description

In this guide we will configure the **OAuth** with the [Azure Active Directory](https://portal.azure.com/) for the authentication. 
User is going to be logged into the Tenant and Tenant name is going to be equal to the users email.
If Tenant does not exist in the system, the new Tenant will be created.

To map those external user infos from Auth0 platform we are going to use built-in [basic mapper](/docs/user-guide/oauth-2-support/#basic-mapper). 

If [basic mapper](/docs/user-guide/oauth-2-support/#basic-mapper) functionality will not fit your business needs, you can configure the [custom mapper](/docs/user-guide/oauth-2-support/#custom-mapper)  so that you are able to add an implementation that fits under your specific needs.

In case if you require to have an advanced customization you can refer to the [Microsoft identity platform and OpenID Connect protocol](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc) documentation.

## Login with Azure Active Directory

### Preparations 

The Azure Active Directory does require to use the SSL. Please, make sure that you have configured the HTTPS for the domain of yours, so that those can be configured with the **Azure Active Directory**.
  
In case if SSL is not configured please, follow [this guide](/docs/user-guide/install/pe/add-haproxy-ubuntu/) to install HAProxy and generate valid SSL certificate using Let’s Encrypt.
                                 


To apply the configurations properly, we need to obtain the **clientName**,  **clientId** and **clientSecret** first.  

For those reasons we first go for the [Azure Active Directory](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview).  

Now we need to create the application. 

![image](/images/user-guide/oauth-2-support/azure/azure-go-for-ad.png)

Then we need to go for the application registration and register the application of ours. 

![image](/images/user-guide/oauth-2-support/azure/azure-go-for-and-create-application.png)

The platform type equals to **Web** in our case. 

The name equals the **clientName**, and the Login Redirect URIs equals to the **redirectUriTemplate** from ours side.   
The  **redirectUriTemplate** can be found in the **thingsboard.yml**

```bash
    https://domain:port/login/oauth2/code/
```  

Where under the domain, please, specify the current **domain** of yours and for the **port** please specify the port to have an HTTPS access to the ThingsBoard instance of yours.  

For the example of ours, we have the **domain** equals to the tb.tbsupport.xyz and the **port** 443, so that there is no need to specify the port additionally.  
 

![image](/images/user-guide/oauth-2-support/azure/azure-create-application.png)

Then we need to confirm the registration of the application.

![image](/images/user-guide/oauth-2-support/azure/azure-application-general-data.png)

Now we are on the general page of ours, where we can find the **clientId**, and the **clientName** which we previously specified.  
  
![image](/images/user-guide/oauth-2-support/azure/azure-application-authentication.png)

Now let us go for the **Authentication** tab. Here we can find the **redirectUriTemplate**, and we need to specify the token 
for the authorization endpoint. We will specify the **access token** for the example reasons, and we need to **save the 
changes** which we have applied. 

![image](/images/user-guide/oauth-2-support/azure/azure-application-secrets.png)

Then we are going for the **Certificates & secrets** tab and create the **clientSecret** 

![image](/images/user-guide/oauth-2-support/azure/azure-application-endpoints.png)

We also need to acquire the list of the links for the next variables:  

```bash
SECURITY_OAUTH2_DEFAULT_ACCESS_TOKEN_URI
SECURITY_OAUTH2_DEFAULT_AUTHORIZATION_URI
SECURITY_OAUTH2_DEFAULT_JWK_SET_URI
```

The up to date list of those can be found on **OpenID Connect metadata document** link. 

So that we can refer to next values for the variables of ours.  
```bash
SECURITY_OAUTH2_DEFAULT_ACCESS_TOKEN_URI=https://login.microsoftonline.com/example-tenant-id/oauth2/token
SECURITY_OAUTH2_DEFAULT_AUTHORIZATION_URI=https://login.microsoftonline.com/example-tenant-id/oauth2/authorize
SECURITY_OAUTH2_DEFAULT_JWK_SET_URI=https://login.microsoftonline.com/example-tenant-id/discovery/keys
```

In the example of ours those equals: 
```bash
clientName=ThingsBoard
clientId=XXXXXXXX
clientSecret=YYYYYYYY
```


### Result

So that, the resulted **thingsboard.yml** equals the below one. 

```bash
...
# Security parameters
security:
   ...
      oauth2:
        # Enable/disable OAuth 2 login functionality
        # For details please refer to https://thingsboard.io/docs/user-guide/oauth-2-support/
        enabled: "${SECURITY_OAUTH2_ENABLED:true}"
        # Redirect URL where access code from external user management system will be processed
        loginProcessingUrl: "${SECURITY_OAUTH2_LOGIN_PROCESSING_URL:/login/oauth2/code/}"
        # List of SSO clients
        clients:
          default:
            # Label that going to be show on login button - 'Login with {loginButtonLabel}'
            loginButtonLabel: "${SECURITY_OAUTH2_DEFAULT_LOGIN_BUTTON_LABEL:Azure Active Directory}"
            # Icon that going to be show on login button. Material design icon ID (https://material.angularjs.org/latest/api/directive/mdIcon)
            loginButtonIcon: "${SECURITY_OAUTH2_DEFAULT_LOGIN_BUTTON_ICON:}"
            clientName: "${SECURITY_OAUTH2_DEFAULT_CLIENT_NAME:ThingsBoard}"
            clientId: "${SECURITY_OAUTH2_DEFAULT_CLIENT_ID:XXXXXXXX}"
            clientSecret: "${SECURITY_OAUTH2_DEFAULT_CLIENT_SECRET:YYYYYYYY}"
            accessTokenUri: "${SECURITY_OAUTH2_DEFAULT_ACCESS_TOKEN_URI:https://login.microsoftonline.com/example-tenant-id/oauth2/token}"
            authorizationUri: "${SECURITY_OAUTH2_DEFAULT_AUTHORIZATION_URI:https://login.microsoftonline.com/example-tenant-id/oauth2/authorize}"
            scope: "${SECURITY_OAUTH2_DEFAULT_SCOPE:openid,email,profile}"
            # Redirect URL that must be in sync with 'security.oauth2.loginProcessingUrl', but domain name added
            redirectUriTemplate: "${SECURITY_OAUTH2_DEFAULT_REDIRECT_URI_TEMPLATE:https://tb.tbsupport.xyz/login/oauth2/code/}"
            jwkSetUri: "${SECURITY_OAUTH2_DEFAULT_JWK_SET_URI:https://login.microsoftonline.com/example-tenant-id/discovery/keys}"
            # 'authorization_code', 'implicit', 'refresh_token' or 'client_credentials'
            authorizationGrantType: "${SECURITY_OAUTH2_DEFAULT_AUTHORIZATION_GRANT_TYPE:authorization_code}"
            clientAuthenticationMethod: "${SECURITY_OAUTH2_DEFAULT_CLIENT_AUTHENTICATION_METHOD:post}" # basic or post
            userInfoUri: "${SECURITY_OAUTH2_DEFAULT_USER_INFO:}"
            userNameAttributeName: "${SECURITY_OAUTH2_DEFAULT_USER_NAME_ATTRIBUTE_NAME:email}"
            mapperConfig:
              # Allows to create user if it not exists
              allowUserCreation: "${SECURITY_OAUTH2_DEFAULT_MAPPER_ALLOW_USER_CREATION:true}"
              # Allows user to setup ThingsBoard internal password and login over default Login window
              activateUser: "${SECURITY_OAUTH2_DEFAULT_MAPPER_ACTIVATE_USER:false}"
              # Mapper type of converter from external user into internal - 'basic' or 'custom'
              type: "${SECURITY_OAUTH2_DEFAULT_MAPPER_TYPE:basic}"
              basic:
                # Key from attributes of external user object to use as email
                emailAttributeKey: "${SECURITY_OAUTH2_DEFAULT_MAPPER_BASIC_EMAIL_ATTRIBUTE_KEY:email}"
                firstNameAttributeKey: "${SECURITY_OAUTH2_DEFAULT_MAPPER_BASIC_FIRST_NAME_ATTRIBUTE_KEY:}"
                lastNameAttributeKey: "${SECURITY_OAUTH2_DEFAULT_MAPPER_BASIC_LAST_NAME_ATTRIBUTE_KEY:}"
                # Strategy for generating Tenant from external user object - 'domain', 'email' or 'custom'
                # 'domain' - name of the Tenant will be extracted as domain from the email of the user
                # 'email' - name of the Tenant will email of the user
                # 'custom' - please configure 'tenantNamePattern' for custom mapping
                tenantNameStrategy: "${SECURITY_OAUTH2_DEFAULT_MAPPER_BASIC_TENANT_NAME_STRATEGY:domain}"
                # %{attribute_key} as placeholder for attribute value of attributes of external user object
                tenantNamePattern: "${SECURITY_OAUTH2_DEFAULT_MAPPER_BASIC_TENANT_NAME_PATTERN:}"
                # If this field is not empty, user will be created as a user under defined Customer
                # %{attribute_key} as placeholder for attribute value of attributes of external user object
                customerNamePattern: "${SECURITY_OAUTH2_DEFAULT_MAPPER_BASIC_CUSTOMER_NAME_PATTERN:}"
                # If this field is not empty, user will be created with default defined Dashboard
                defaultDashboardName: "${SECURITY_OAUTH2_DEFAULT_MAPPER_BASIC_DEFAULT_DASHBOARD_NAME:}"
                # If this field is set 'true' along with non-empty 'defaultDashboardName', user will start from the defined Dashboard in fullscreen mode
                alwaysFullScreen: "${SECURITY_OAUTH2_DEFAULT_MAPPER_BASIC_ALWAYS_FULL_SCREEN:false}"
              custom:
                url: "${SECURITY_OAUTH2_DEFAULT_MAPPER_CUSTOM_URL:}"
                username: "${SECURITY_OAUTH2_DEFAULT_MAPPER_CUSTOM_USERNAME:}"
                password: "${SECURITY_OAUTH2_DEFAULT_MAPPER_CUSTOM_PASSWORD:}"
```


After all the changes being applied, please, make sure to have the ThingsBoard restart.
The ThingsBoard restart can be invoked with the next command on the Linux Server: 
```bash
$ sudo service thingsboard restart
```  
After that, proceed to the User Interface of yours, to make sure there are no troubles, press the **Login With Azure Active Directory**.

![image](/images/user-guide/oauth-2-support/azure/azure-login.png)

In case of the troubleshooting with those, please, contact us [using the contact us form](/docs/contact-us/).

## Next Steps

{% assign currentGuide = "OAuth" %}{% include templates/guides-banner.md %}
