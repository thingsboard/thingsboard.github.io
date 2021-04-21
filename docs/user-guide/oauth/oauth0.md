---
layout: docwithnav
title: OAuth 2.0 Support
description: OAuth 2.0 Support

---

* TOC
{:toc}

## Overview
ThingsBoard allows you to provide Single Sign On functionality for your customers and automatically create tenants, customers or subcustomers using external user management platforms, that supports **OAuth 2.0 protocol**.  
This guide is only for the **OAuth0 OAuth**. 
## Scenario description

In this guide we will configure the **OAuth** with the [OAuth0](https://auth0.auth0.com/) for the authentication. 
In this case User is going to be logged into the Tenant which name is going to be equal to user’s email domain name.  
Additionally, for every user we are going to create a new Customer and Customer name is going to be user’s email

To map those external user infos from Auth0 platform we are going to use built-in [basic mapper](/docs/user-guide/oauth-2-support/#basic-mapper). 

If [basic mapper](/docs/user-guide/oauth-2-support/#basic-mapper) functionality will not fit your business needs, you can configure the [custom mapper](/docs/user-guide/oauth-2-support/#custom-mapper)  so that you are able to add an implementation that fits under your specific needs.

## Login with OAuth0

### Preparations 
To apply the configurations properly, we need to obtain the **clientName**,  **clientId** and **clientSecret** first.  
For these reasons we first go for the [OAuth0 Management Console](https://auth0.auth0.com/).  
First we need to create the application. 

![image](/images/user-guide/oauth-2-support/oauth0/Application-to-create.png)

Then we need to specify the application name and application type.  
The application name equals the **clientName**. The Application type is a **Regular Web Application**. 

![image](/images/user-guide/oauth-2-support/oauth0/Application-creation.png)

Afters, you need to specify the technology being used. Please, specify the **Java Spring Security**.  

![image](/images/user-guide/oauth-2-support/oauth0/Application-creation-specify-type.png)

Then we are forwarded to the application information page. There we can found the **clientName**, **clientId** and the **clientSecret**. 

![image](/images/user-guide/oauth-2-support/oauth0/Application-Details-1.png)

For the allowed callback URLs we need to specify the redirect URI for the instance of ours.   
The **redirect URI** needs to be specified in the next format:  

```bash
    http://domain:port/login/oauth2/code/
```

Where under the domain, please, specify the current **domain** of yours and for the **port** please specify the port to have an HTTP access to the ThingsBoard instance of yours.   
For the example reasons, the domain of my is the localhost, and the port is being the default ThingsBoard installation port 80.  

![image](/images/user-guide/oauth-2-support/oauth0/Application-Details-2.png)

So that we have received three values which are required to be inserted for the **thingsboard.yml** of ours.  

In the example of ours those equals: 
```bash
clientName=ThingsBoard
clientId=XXXXXXXX
clientSecret=YYYYYYYY
```

So that now we need to insert those for the **thingsboard.yml**. 

We also need to acquire the list of the links for the next variables:  

```bash
SECURITY_OAUTH2_DEFAULT_ACCESS_TOKEN_URI
SECURITY_OAUTH2_DEFAULT_AUTHORIZATION_URI
SECURITY_OAUTH2_DEFAULT_JWK_SET_URI
SECURITY_OAUTH2_DEFAULT_USER_INFO_URI
```

Up to date list of those can be found on the bottom of application page.

![image](/images/user-guide/oauth-2-support/oauth0/Application-Details-3.png)

For the example of ours, we have set the Auth0 application domain to the tbsupport.eu.auth0.com, so that the next values are being used:

```bash
SECURITY_OAUTH2_DEFAULT_ACCESS_TOKEN_URI=https://tbsupport.eu.auth0.com/oauth/token
SECURITY_OAUTH2_DEFAULT_AUTHORIZATION_URI=https://tbsupport.eu.auth0.com/authorize
SECURITY_OAUTH2_DEFAULT_JWK_SET_URI=https://tbsupport.eu.auth0.com/.well-known/jwks.json
SECURITY_OAUTH2_DEFAULT_USER_INFO_URI=https://tbsupport.eu.auth0.com/userinfo
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
           auth0:
             # Label that going to be show on login button - 'Login with {loginButtonLabel}'
             loginButtonLabel: "${SECURITY_OAUTH2_DEFAULT_LOGIN_BUTTON_LABEL:Auth0}"
             # Icon that going to be show on login button. Material design icon ID (https://material.angularjs.org/latest/api/directive/mdIcon)
             loginButtonIcon: "${SECURITY_OAUTH2_DEFAULT_LOGIN_BUTTON_ICON:}"
             clientName: "${SECURITY_OAUTH2_DEFAULT_CLIENT_NAME:ThingsBoard}"
             clientId: "${SECURITY_OAUTH2_DEFAULT_CLIENT_ID:XXXXXXXX}"
             clientSecret: "${SECURITY_OAUTH2_DEFAULT_CLIENT_SECRET:YYYYYYYY}"
             accessTokenUri: "${SECURITY_OAUTH2_DEFAULT_ACCESS_TOKEN_URI:https://tbsupport.eu.auth0.com/oauth/token}"
             authorizationUri: "${SECURITY_OAUTH2_DEFAULT_AUTHORIZATION_URI:https://tbsupport.eu.auth0.com/authorize}"
             scope: "${SECURITY_OAUTH2_DEFAULT_SCOPE:openid,email,profile}"
             # Redirect URL that must be in sync with 'security.oauth2.loginProcessingUrl', but domain name added
             redirectUriTemplate: "${SECURITY_OAUTH2_DEFAULT_REDIRECT_URI_TEMPLATE:http://localhost:80/login/oauth2/code/}"
             jwkSetUri: "${SECURITY_OAUTH2_DEFAULT_JWK_SET_URI:https://tbsupport.eu.auth0.com/.well-known/jwks.json}"
             # 'authorization_code', 'implicit', 'refresh_token' or 'client_credentials'
             authorizationGrantType: "${SECURITY_OAUTH2_DEFAULT_AUTHORIZATION_GRANT_TYPE:authorization_code}"
             clientAuthenticationMethod: "${SECURITY_OAUTH2_DEFAULT_CLIENT_AUTHENTICATION_METHOD:post}" # basic or post
             userInfoUri: "${SECURITY_OAUTH2_DEFAULT_USER_INFO_URI:https://tbsupport.eu.auth0.com/userinfo}"
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
                 customerNamePattern: "${SECURITY_OAUTH2_DEFAULT_MAPPER_BASIC_CUSTOMER_NAME_PATTERN: %{email}}"
                 parentCustomerNamePattern: "${SECURITY_OAUTH2_DEFAULT_MAPPER_BASIC_PARENT_CUSTOMER_NAME_PATTERN:}" # %{attribute_key} as placeholder for attributes value by key
                 userGroupsNamePattern: "${SECURITY_OAUTH2_DEFAULT_MAPPER_BASIC_USER_GROUPS_NAME_PATTERN: Customer Users}" # list of comma separated user group names, %{attribute_key} as placeholder for attributes value by key
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
After that, proceed to the User Interface of yours, to make sure there are no troubles, press the **Login With OAuth0**.

In case of the troubleshooting with those, please, contact us [using the contact us form](/docs/contact-us/).

## Next Steps

{% assign currentGuide = "OAuth" %}{% include templates/guides-banner.md %}
