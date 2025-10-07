* TOC
{:toc}

## Overview

TBMQ Professional Edition allows you to provide Single Sign-On functionality for your users and automatically create Administrators or Viewers using external user management platforms that support the OAuth 2.0 protocol.  
A list of platforms that support the OAuth 2.0 protocol: [Google](#login-with-google), [Auth0](#login-with-auth0), [Keycloak](#login-with-keycloak), [Okta](https://www.okta.com/){:target="_blank"}, [Azure](https://portal.azure.com/){:target="_blank"}, etc.   

## OAuth 2.0 authentication flow

TBMQ supports the Authorization Code grant type to exchange an authorization code for an access token. 
Once the user returns to the TBMQ client via redirect URL, the platform will get the authorization code from the URL and will use it to request an access token from the external user management platform.
Using the [basic mapper](#basic-mapper) or [custom mapper](#custom-mapper), external user info object will be converted from external platform into TBMQ internal OAuth 2.0 user. 
After this, the regular TBMQ authorization flow will happen.

## Setting up authentication via an external provider

OAuth 2.0 clients are configured separately from the domain allowing to reuse of the configured client and making the settings clearer.
To use authentication through an external provider, first configure OAuth 2.0 client with all necessary credentials. 
After that, add a new domain or use an existing one and update OAuth 2.0 client list with new oauth 2.0 client.

### Operations with domain

**Adding domain**

Follow these steps to add a new domain:
- On the "Domains" tab of the "OAuth 2.0" page, click the "plus" icon to add new domain;
- Provide your domain name and OAuth 2.0 client;
- Click "Add" to finalize adding the domain.

{% include images-gallery.html imageCollection="adding-domain-1" %}

**Editing domain**

To update the settings for an existing domain, follow these steps:

- Click on the domain to view its details;
- Switch to editing mode by clicking the large orange button;
- Make the required modifications;
- Confirm and save your changes by clicking the "Apply changes" button.

{% include images-gallery.html imageCollection="editing-domain-1" %}

**Deleting domain**

To remove domain, following the steps:

- Click the "trash" icon in the domain's row you wish to remove;
- Confirm the deletion by clicking "Yes".

{% include images-gallery.html imageCollection="deleting-domain-1" %}

### Operations with OAuth 2.0 client

**Adding OAuth 2.0 client**

Follow these steps to add a new OAuth 2.0 client to TBMQ:

- Navigate to the "OAuth 2.0 clients" tab on the "OAuth 2.0" page, and click the "plus" icon to add a new OAuth 2.0 client;
- Enter a descriptive title for the client;
- Select the authentication provider from the dropdown menu;
- Provide the Client ID and Client Secret obtained from your authentication provider;
- Configure advanced settings as necessary;
- Click "Add" to finalize the addition of the new OAuth 2.0 client.

{% include images-gallery.html imageCollection="adding-oauth2-client-1" %}

**Editing OAuth 2.0 client**

To update the settings for an existing OAuth 2.0 client, follow these steps:

- Click on the OAuth 2.0 client to view its details;
- Switch to editing mode by clicking the large orange button;
- Make the required modifications;
- Confirm and save your changes by clicking the "Apply changes" button.

{% include images-gallery.html imageCollection="editing-oauth2-client-1" %}

**Deleting OAuth 2.0 client**

Remove clients that are no longer needed or are obsolete:

- Click the "trash" icon in the client's row you wish to remove;
- Confirm the deletion by clicking "Yes".

{% include images-gallery.html imageCollection="deleting-oauth2-client-1" %}

## Login with Google

In this sample, we will be using authentication via [Google](https://developers.google.com/identity/protocols/oauth2/openid-connect){:target="_blank"}.

To map this external user information from Google and the OAuth platform, we use the built-in [basic mapper](#basic-mapper).

If [basic mapper](#basic-mapper) functionality doesn't fit your business needs, you can configure the [custom mapper](#custom-mapper), so that you are able to add an implementation that fits your specific needs.

### Preparations

To use Google OAuth 2.0 authentication platform for Login, you need to set up a project in the [Google API Console](https://console.developers.google.com/){:target="_blank"} to obtain OAuth 2.0 credentials.

Please, follow the instructions on the [OpenID Connect](https://developers.google.com/identity/protocols/oauth2/openid-connect){:target="_blank"} page or follow the steps below to configure the OAuth 2.0 Client.
After completing the instructions above, you should have a new OAuth client with credentials consisting of a Client ID and a Client Secret.

- Go to the "Credentials" page in the left menu and select "OAuth client ID" from the "Create credentials" dropdown menu;
- Enter a OAuth client name, and add the TBMQ redirect URI, to the "Authorized Redirect URIs" section using the format:

```
http(s)://domain:port/login/oauth2/code/
```
{: .copy-code}

* where under the domain, please, specify the current domain of yours and for the port specify the port to have an HTTP access to the TBMQ instance of yours.
For the example reasons, my domain is *my.thingsboard.instance*.

```
https://my.thingsboard.instance/login/oauth2/code/
```

- Click "Create". 
 
OAuth client created. You now have credentials consisting of a *Client ID* and a *Client secret*.

{% include images-gallery.html imageCollection="google-credentials-for-oauth-1" %}

### Configuring Google as an OAuth 2.0 authentication provider in TBMQ

To configure OAuth 2.0 authentication in TBMQ via Google, follow the steps below:

- Login to your TBMQ instance;
- Go to the "OAuth 2.0" page of the "Security" section;
- While on the "Domains" tab, click the "plus" icon;
- Enter your domain name or IP address of your TBMQ instance;
- Click "Create new" in the "OAuth 2.0 clients" section to add a new one.

{% include images-gallery.html imageCollection="google-configuration-of-thingsboard-google-1" %}

Adding a new OAuth 2.0 client:

- Enter "Google" as the title; 
- The provider should be set to "Google";
- Enter the "Client ID" and "Client secret" from the [Google API Console](https://console.developers.google.com/){:target="_blank"}.

Then, expand the "Advanced settings" menu. Let's make the settings for the "General" block: 
- Use this [link](https://developers.google.com/identity/protocols/oauth2/openid-connect#discovery){:target="_blank"} to see the list of up-to-date URLs like "Access Token URI", "Authorization URI", etc.;
- Select "POST" as the client authentication method;
- Turn on the "Allow user creation" option;
- Add to the scope field: "email", "openid", and "profile".

{% include images-gallery.html imageCollection="google-configuration-of-thingsboard-google-2" %}

Go to the "Mapper" block:
- Leave the mapper type "BASIC";
- Specify role to be used;
- Click "Add";

{% include images-gallery.html imageCollection="google-configuration-of-thingsboard-google-3" %}

- The OAuth client is added successfully. Click "Add" again to confirm the addition of the domain.

A new domain has been added.

{% include images-gallery.html imageCollection="google-configuration-of-thingsboard-google-4" %}

### Sign in

Now, navigate to the TBMQ login screen. We will see an additional "Login with Google" option. 
Select one of your Google accounts. You are now logged into TBMQ using your Google email.

{% include images-gallery.html imageCollection="login-with-google-1" %}

Go to the "Users" page. There you will find the new user created.

{% include images-gallery.html imageCollection="login-with-google-2" %}

## Login with Auth0

In this sample, we will configure **OAuth** using an external provider for authentication - [Auth0](https://auth0.com/){:target="_blank"}.

To map this external user information from Auth0 and the OAuth platform, we use the built-in [basic mapper](#basic-mapper).

If [basic mapper](#basic-mapper) functionality will not fit your business needs, you can configure the [custom mapper](#custom-mapper), so that you are able to add an implementation that fits your specific needs.

### Preparations

Now let's add one more provider to our list - [Auth0](https://auth0.com/){:target="_blank"}.

To apply the configurations properly, we first need to obtain OAuth 2.0 credentials: 

- First, we go to the [OAuth0 management console](https://manage.auth0.com/){:target="_blank"}. Open the "Applications" page, and click "+ Create Application" button;
- Name your application "ThingBoard", and choose the application type - "Regular Web Applications";
- After, you need to choose the technology being used. Please, choose the "Java Spring Boot" technology;
- Once your application is created, you are redirected to the application details page. Navigate to the "Settings" tab to find the *Client ID* and *Client Secret*;
- In the allowed Callback URLs field, update the redirect URI using the format:

```
http(s)://domain:port/login/oauth2/code/
```
{: .copy-code}

* where under the domain, please, specify the current domain of yours and for the port specify the port to have an HTTP access to the TBMQ instance of yours.
For the example reasons, my domain is *my.thingsboard.instance*.

```
https://my.thingsboard.instance/login/oauth2/code/
```

{% capture difference %}
Please note that it is not necessary to update the Application login URI.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

- In the "Advanced Settings" section, you can find all necessary URLs (endpoints) required for configuring OAuth 2.0;
- Click "Save Changes" button.

{% include images-gallery.html imageCollection="auth0-credentials-1" %}

### Configuring OAuth0 as an OAuth 2.0 authentication provider in TBMQ

To configure OAuth 2.0 authentication in TBMQ via Auth0, follow the steps below:

- Login to your TBMQ instance;
- Go to the "OAuth 2.0" page of the "Security" section;
- While on the "Domains" tab, click the "plus" icon;
- Enter your domain name or IP address of your TBMQ instance;
- Click "Create new" in the "OAuth 2.0 clients" section to add a new one.

{% include images-gallery.html imageCollection="oauth0-configuration-of-thingsboard-1" %}

Adding a new OAuth 2.0 client:

- In the opened window, enter "OAuth0" as the title for the client;
- Select "Custom" as the provider from the dropdown;
- Enter the "Client ID" and "Client secret" obtained from the [OAuth0 management console](https://manage.auth0.com/){:target="_blank"}.

In the "General" block of the "Advanced settings" section:
- Fill in all the necessary URLs using the values obtained from the [OAuth0 management console](https://manage.auth0.com/){:target="_blank"};
- Select "POST" as the client authentication method;
- Enter "OAuth0" as the provider label;
- Add the following scopes in the scope field: "openid", "email", "profile".

{% include images-gallery.html imageCollection="oauth0-configuration-of-thingsboard-2" %}

<br>
Proceed to the "Mapper" block:
- Leave the mapper type "BASIC";
- Specify role to be used;
- Click "Add" to complete the addition of the new OAuth 2.0 client.

{% include images-gallery.html imageCollection="oauth0-configuration-of-thingsboard-3" %}

- The OAuth0 client has been successfully added. Click "Add" again to confirm the addition of the domain.

{% include images-gallery.html imageCollection="oauth0-configuration-of-thingsboard-4" %}

### Sign in

Navigate to the login screen. You will find two available login methods: Google and Auth0. Click on the "Login with Auth0" button.

{% include images-gallery.html imageCollection="login-with-oauth0-1" %}

Go to the "Users" page. There you will find the new user is created.

{% include images-gallery.html imageCollection="login-with-oauth0-2" %}

## Login with Keycloak

In this sample, we will be using authentication via [Keycloak](https://www.keycloak.org/){:target="_blank"}.

To map this external user information from Keycloak and the OAuth platform, we use the built-in [basic mapper](#basic-mapper).

If [basic mapper](#basic-mapper) functionality doesn't fit your business needs, you can configure the [custom mapper](#custom-mapper), so that you are able to add an implementation that fits your specific needs.

### Preparations

To use Keycloak authentication platform for login, you need to set up a project in the [Keycloak](https://www.keycloak.org/){:target="_blank"} to obtain OAuth 2.0 credentials.
For this, follow the [official instructions](https://www.keycloak.org/guides){:target="_blank"} or follow the steps below.
By the end, you should have a new Keycloak client with credentials consisting of a Client ID and a Client Secret.

**Start Keycloak**

Get started with Keycloak using your [preferred method](https://www.keycloak.org/guides){:target="_blank"}.
In this example, we will run a test authentication and access management server Keycloak on Docker.

- Make sure you have [Docker](https://docs.docker.com/compose/install/){:target="_blank"} installed;
- Run the command below to start Keycloak on local the port 8081 and create an initial admin user with the username **admin** and password **admin**:

```bash
docker run -p 8081:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:26.0.5 start-dev
```
{: .copy-code}

{% include images-gallery.html imageCollection="terminal-start-keycloak" %}

**Log in to the admin console**

- Log in to the [Keycloak Admin Console](http://localhost:8081/admin){:target="_blank"} using "admin" as username and password;

{% include images-gallery.html imageCollection="log-in-to-admin-console" %}

**Create a realm**

- Click "Keycloak" next to the master realm, then click "Create realm" button;
- Enter "ThingsBoard" in the realm name field, and click "Create" button.

The new realm has been created.

{% include images-gallery.html imageCollection="create-new-realm" %}

**Create new client**

A client can be considered as an application or service that requests user authentication.

- Go to the "Clients" page in the left-hand menu, and click the "Create client" button;
- Enter "thingsboard" as the client ID. Leave the client type as "OpenID Connect". Click "Next";
- Turn on "Client authentication" option. Confirm that "Standard flow" is enabled. Click "Next";
- In the "Login settings" section, add the TBMQ redirect URI to the "Authorized Redirect URIs" section using the format:

```
http(s)://domain:port/login/oauth2/code/
```
{: .copy-code}

* where under the domain, please, specify the current domain of yours and for the port specify the port to have an HTTP access to the TBMQ instance of yours.
For the example reasons, my domain is *my.thingsboard.instance*.

```
https://my.thingsboard.instance/login/oauth2/code/
```

- Click "Save".

Client created successfully.

{% include images-gallery.html imageCollection="create-client" %}

<br>
You now have credentials consisting of a Client ID and a Client secret. You can find the Client ID on the "Settings" tab. The Client Secret is located on the "Credentials" tab.

{% include images-gallery.html imageCollection="client-id-and-secret" %}

#### Endpoints

As a fully-compliant OpenID Connect Provider implementation, Keycloak exposes a set of endpoints that applications and services can use to authenticate and authorize their users.

Go to the "Realm settings" page. Scroll down and locate the link to "OpenID Endpoint Configuration", then click on it.
A new window with OpenID Endpoint Configuration will be opened. Check the "Pretty-print" option to make the data view more user-friendly.
Here you can find "Access token URI," "Authorization URI," "JSON Web Key URI," and "User info URI," which are necessary for configuring the OAuth 2.0 client in TBMQ.
You can find a description of the available endpoints [here](https://www.keycloak.org/securing-apps/oidc-layers){:target="_blank"}.

{% include images-gallery.html imageCollection="endpoint-configuration" %}

### Create a user

Now add the user. Only the added users will be able to authenticate via Keycloak.
Use these steps to create a user:

- Go to the "Users" page in the left-hand menu;
- Click "Create new user";
- Enter the username and email address in the form. First name and last name are optional;
- Click "Create".

The user has been created.

{% include images-gallery.html imageCollection="create-user" %}

Set a password for this user:

- Navigate to the "Credentials" tab. Click "Set password". 
- Fill in the "Set password" form with a password. Toggle "Temporary" to "Off" so that the user does not need to update this password at the first login. 
- Click "Save password" to confirm the set password.

The password has been successfully.

{% include images-gallery.html imageCollection="create-password" %}

### Configuring Keycloak as an OAuth 2.0 authentication provider in TBMQ

To configure OAuth 2.0 authentication in TBMQ via Keycloak, follow the steps below:

- Login to your TBMQ instance;
- Go to the "OAuth 2.0" page of the "Security" section;
- Navigate to the "OAuth 2.0 clients" tab, and click "plus";
- Enter "Keycloak" as the title. 
- Select the "Custom" from the dropdown menu as the authentication provider;
- Enter the "Client ID" and "Client secret", using the values retrieved from the [Keycloak console](http://localhost:8081/admin){:target="_blank"}.

Then, expand the "Advanced settings" menu. Let's make the settings for the "General" block:
- Use [endpoint configuration file](#endpoints) to find the current values for "Access Token URI," "Authorization URI", "JSON Web Key URI", and "User info URI". Fill the corresponding fields with these values;
- The client authentication method should be set to "POST"; 
- Enter "Keycloak" as the provider label;
- Add to the scope field: "email", "openid", and "profile";

{% include images-gallery.html imageCollection="keycloak-add-thingsboard-oauth-client-1" %}

Go to the "Mapper" block:
- Leave the mapper type "BASIC";
- Specify role to be used;
- Click "Add" to confirm adding the OAuth 2 client.

A new OAuth 2.0 client has been added.

{% include images-gallery.html imageCollection="keycloak-add-thingsboard-oauth-client-2" %}

<br>
Now, add a new domain by following these steps:

- Go to the "Domains" tab of the "OAuth 2.0" page, and click the "plus" icon;
- Enter your domain name or IP address of your TBMQ instance;
- Specify "Keycloak" as the OAuth 2.0 client;
- Click "Add" again to confirm the addition of the domain.

A new domain has been added.

{% include images-gallery.html imageCollection="keycloak-add-domain" %}

### Sign in

Go to the TBMQ login screen. You will see an additional option, "Login with Keycloak". Click this button. A window will open prompting you to sign in to your Keycloak account. Enter your Keycloak credentials, and click "Sign In". You are now logged into TBMQ using Keycloak authorization credentials.

{% include images-gallery.html imageCollection="login-with-keycloak-1" %}

Go to the "Users" page. There you will find the new user is created.

{% include images-gallery.html imageCollection="login-with-keycloak-2" %}

## Mapping of the external user into TBMQ internal user structure

Mapping of the external user info object into TBMQ user can be achieved using the [Basic](#basic-mapper), [Custom](#custom-mapper), GitHub, and Apple mappers. 

### Basic mapper

A basic mapper is able to merge an external OAuth 2.0 user info object into the TBMQ OAuth 2.0 user with a predefined set of rules.

To use a basic mapper, set mapper type "Basic".

{% include images-gallery.html imageCollection="mapper-basic-1" %}

Here are the details of other properties:

- **Allow user creation** - If this option is **enabled**, then in case, the user account does not exist in the TBMQ yet, it will be created.
If this option is **disabled**, the user will get access denied error, in case, he tries to log in with an external OAuth 2.0 provider, but there is no user on TBMQ with those credentials.
 
- **Email attribute key** - This is the key to the attributes from the external OAuth 2.0 user info that is going to be used as TBMQ user email property.
  
- **First name attribute key** - This is the key to the attributes from the external OAuth 2.0 user info that is going to be used as TBMQ user first name property.
    
- **Last name attribute key** - This is the key to the attributes from the external OAuth 2.0 user info that is going to be used as TBMQ user last name property.

- **Role** - The option to choose from the predefined roles to be assigned for the user.

### Custom mapper

If the basic mapper functionality doesn't cover your business needs, with the help of the custom mapper you are able to add an implementation that fits your specific goals.

A custom mapper designed as a separate microservice that is running nearby the TBMQ microservice.
TBMQ forwards all mapping requests to this microservice and expects as a response TBMQ OAuth 2.0 user object.

Please refer to this [base implementation](https://github.com/thingsboard/tbmq-custom-oauth2-mapper){:target="_blank"} as a starting point for your custom mapper.

To use the custom mapper, set mapper type "Custom".

{% include images-gallery.html imageCollection="mapper-custom-1" %}

Here are the details of other properties:

- **URL**. URL of the custom mapper endpoint;
- **username**. If the custom mapper endpoint configured with basic authorization, specify the *username* in this property;
- **password**. If the custom mapper endpoint configured with basic authorization, specify the *password* in this property.

## HaProxy configuration

If TBMQ is running behind a load balancer like HAProxy please configure properly balance algorithm to make sure that the correct session is available on the TBMQ instance:

```bash
backend tbmq-api-backend
  ...
  balance source # balance must be set to 'source'
  ...
```


As well please configure properly ACL mapping for HTTP and HTTPs requests:
```bash
frontend http-in
  ...
  acl tbmq_api_acl path_beg /api/ /swagger /webjars /v2/ /oauth2/ /login/oauth2/ # '/oauth2/ /login/oauth2/' added
  ...
```

```bash
frontend https_in
  ...
  acl tbmq_api_acl path_beg /api/ /swagger /webjars /v2/ /oauth2/ /login/oauth2/ # '/oauth2/ /login/oauth2/' added
  ...
```
