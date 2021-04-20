---
layout: docwithnav
title: OAuth 2.0 Support
description: OAuth 2.0 Support

---

* TOC
{:toc}

## Overview
ThingsBoard allows you to provide Single Sign On functionality for your customers and automatically create tenants, customers or subcustomers using external user management platforms, that supports **OAuth 2.0 protocol**.  
This guide is only for the **Okta OAuth**. 
## Scenario description

In this guide we will configure the **OAuth** with the [Okta](https://www.okta.com/) for the authentication. 
User is going to be logged into the Tenant and Tenant name is going to be equal to the users email.
If Tenant does not exist in the system, the new Tenant will be created.

To map those external user infos from Auth0 platform we are going to use built-in [basic mapper](/docs/user-guide/oauth-2-support/#basic-mapper). 

If [basic mapper](/docs/user-guide/oauth-2-support/#basic-mapper) functionality will not fit your business needs, you can configure the [custom mapper](/docs/user-guide/oauth-2-support/#custom-mapper)  so that you are able to add an implementation that fits under your specific needs.

## Login with Okta

### Preparations 
To apply the configurations properly, we need to obtain the **clientName**,  **clientId** and **clientSecret** first.  
For these reasons we first go for the [Okta Developer Console](https://developer.okta.com/).  
First we need to create the application. 

![image](/images/user-guide/oauth-2-support/okta/okta-go-for-application.png)

Then we need to specify platform type.  
The platform type equals to **Web** in our case. 

![image](/images/user-guide/oauth-2-support/okta/okta-go-for-application-creation-1.png)

The name equals the **clientName**, and the Login Redirect URIs equals to the **redirectUriTemplate** from ours side.   
The  **redirectUriTemplate** can be found in the **thingsboard.yml**

```bash
    http://domain:port/login/oauth2/code/
```  

Where under the domain, please, specify the current **domain** of yours and for the **port** please specify the port to have an HTTP access to the ThingsBoard instance of yours.  

For the example of ours, we have the **domain** equals to the tb.tbsupport.xyz and the **port** 80, so that there is no need to specify the port additionally.  
 

![image](/images/user-guide/oauth-2-support/okta/okta-go-for-application-creation-2.png)

Then we need to confirm the settings we have applied.
  
![image](/images/user-guide/oauth-2-support/okta/okta-go-for-application-creation-3.png)

To apply the configurations properly, we need to obtain the **clientId** and **clientSecret** first.  
Those can be found on the page bottom. 

![image](/images/user-guide/oauth-2-support/okta/okta-go-for-application-creation-clientIdSecret.png)


Then we need to create the **Authorization server**.

![image](/images/user-guide/oauth-2-support/okta/okta-go-for-authorization-server-creation.png)

The **name** and the **audience** can be set any for the **Authorization server**.

![image](/images/user-guide/oauth-2-support/okta/okta-go-for-authorization-server-creation-1.png)


So that we have received three values which are required to be inserted for the **thingsboard.yml** of ours.  

So that now we need to insert those for the **thingsboard.yml**. 

We also need to acquire the list of the links for the next variables:  

```bash
SECURITY_OAUTH2_DEFAULT_ACCESS_TOKEN_URI
SECURITY_OAUTH2_DEFAULT_AUTHORIZATION_URI
SECURITY_OAUTH2_DEFAULT_JWK_SET_URI
```

The Up to date list of those can be found on the link for the Metadata URI. 

![image](/images/user-guide/oauth-2-support/okta/okta-go-for-authorization-server-creation-2.png)

Clicking on those provide us with the json where we need to find the next fields.

```js
{
    ...
	"authorization_endpoint":"https://dev-example.okta.com/oauth2/default/v1/authorize",
	"token_endpoint":"https://dev-example.okta.com/oauth2/default/v1/token",
    ...
	"jwks_uri":"https://dev-example.okta.com/oauth2/default/v1/keys",
    ...	
}
```

So that we can refer to the 
```bash
SECURITY_OAUTH2_DEFAULT_ACCESS_TOKEN_URI=https://dev-example.okta.com/oauth2/default/v1/token
SECURITY_OAUTH2_DEFAULT_AUTHORIZATION_URI=https://dev-example.okta.com/oauth2/default/v1/authorize
SECURITY_OAUTH2_DEFAULT_JWK_SET_URI=https://dev-example.okta.com/oauth2/default/v1/keys
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
            loginButtonLabel: "${SECURITY_OAUTH2_DEFAULT_LOGIN_BUTTON_LABEL:Okta}"
            # Icon that going to be show on login button. Material design icon ID (https://material.angularjs.org/latest/api/directive/mdIcon)
            loginButtonIcon: "${SECURITY_OAUTH2_DEFAULT_LOGIN_BUTTON_ICON:}"
            clientName: "${SECURITY_OAUTH2_DEFAULT_CLIENT_NAME:ThingsBoard}"
            clientId: "${SECURITY_OAUTH2_DEFAULT_CLIENT_ID:XXXXXXXX}"
            clientSecret: "${SECURITY_OAUTH2_DEFAULT_CLIENT_SECRET:YYYYYYYY}"
            accessTokenUri: "${SECURITY_OAUTH2_DEFAULT_ACCESS_TOKEN_URI:https://dev-example.okta.com/oauth2/default/v1/token}"
            authorizationUri: "${SECURITY_OAUTH2_DEFAULT_AUTHORIZATION_URI:https://dev-example.okta.com/oauth2/default/v1/authorize}"
            scope: "${SECURITY_OAUTH2_DEFAULT_SCOPE:openid,email,profile}"
            # Redirect URL that must be in sync with 'security.oauth2.loginProcessingUrl', but domain name added
            redirectUriTemplate: "${SECURITY_OAUTH2_DEFAULT_REDIRECT_URI_TEMPLATE:http://tb.tbsupport.xyz/login/oauth2/code/}"
            jwkSetUri: "${SECURITY_OAUTH2_DEFAULT_JWK_SET_URI:https://dev-example.okta.com/oauth2/default/v1/keys}"
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
After that, proceed to the User Interface of yours, to make sure there are no troubles, press the **Login With Okta**.

In case of the troubleshooting with those, please, contact us [using the contact us form](/docs/contact-us/).

## Next Steps

{% assign currentGuide = "OAuth" %}{% include templates/guides-banner.md %}
