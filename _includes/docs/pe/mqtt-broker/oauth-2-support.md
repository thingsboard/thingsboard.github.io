* TOC
{:toc}

## Overview

TBMQ Professional Edition allows you to provide Single Sign-On (SSO) functionality for your users and automatically create Administrators or Viewers using external user management platforms that support the OAuth 2.0 protocol.
Examples of platforms that support OAuth 2.0 include: [Google](#login-with-google), [Auth0](#login-with-auth0), [Keycloak](#login-with-keycloak), [Okta](https://www.okta.com/){:target="_blank"}, [Azure](https://portal.azure.com/){:target="_blank"}, etc.

## OAuth 2.0 authentication flow

TBMQ supports the Authorization Code grant type to exchange an authorization code for an access token.
Once the user is redirected back to the TBMQ client, the platform retrieves the authorization code from the URL and uses it to request an access token from the external user management platform.
Using the [basic mapper](#basic-mapper) or [custom mapper](#custom-mapper), the external user info object is converted from the external platform into a TBMQ internal OAuth 2.0 user.
After this, the regular TBMQ authorization flow takes place.

## Setting up authentication via an external provider

OAuth 2.0 clients are configured separately from domains, allowing reuse of the configured client and making the settings clearer.
To use authentication through an external provider, first configure an OAuth 2.0 client with the necessary credentials.
Then, either add a new domain or use an existing one, and update the OAuth 2.0 client list with the new client.

### Operations with domain

**Adding a domain**

Follow these steps to add a new domain:

* On the "Domains" tab of the "OAuth 2.0" page, click the "plus" icon to add a new domain;
* Provide your domain name and OAuth 2.0 client;
* Click "Add" to finalize.

{% include images-gallery.html imageCollection="adding-domain-1" %}

**Editing a domain**

To update the settings for an existing domain, follow these steps:

* Click on the domain to view its details;
* Switch to editing mode by clicking the large orange button;
* Make the required modifications;
* Save your changes by clicking the "Apply changes" button.

{% include images-gallery.html imageCollection="editing-domain-1" %}

**Deleting a domain**

To remove a domain, follow these steps:

* Click the "trash" icon in the row of the domain you wish to remove;
* Confirm the deletion by clicking "Yes".

{% include images-gallery.html imageCollection="deleting-domain-1" %}

### Operations with OAuth 2.0 client

**Adding an OAuth 2.0 client**

Follow these steps to add a new OAuth 2.0 client to TBMQ:

* Navigate to the "OAuth 2.0 clients" tab on the "OAuth 2.0" page, and click the "plus" icon;
* Enter a descriptive title for the client;
* Select the authentication provider from the dropdown menu;
* Provide the Client ID and Client Secret obtained from your authentication provider;
* Configure advanced settings as necessary;
* Click "Add" to finalize.

{% include images-gallery.html imageCollection="adding-oauth2-client-1" %}

**Editing an OAuth 2.0 client**

To update an existing OAuth 2.0 client:

* Click on the client to view its details;
* Switch to editing mode by clicking the large orange button;
* Make the required modifications;
* Save your changes by clicking the "Apply changes" button.

{% include images-gallery.html imageCollection="editing-oauth2-client-1" %}

**Deleting an OAuth 2.0 client**

To remove obsolete or unused clients:

* Click the "trash" icon in the row of the client you wish to remove;
* Confirm the deletion by clicking "Yes".

{% include images-gallery.html imageCollection="deleting-oauth2-client-1" %}

## Login with Google

In this example, we will use [Google](https://developers.google.com/identity/protocols/oauth2/openid-connect){:target="_blank"} for authentication.

To map external user information from Google to the OAuth platform, use the built-in [basic mapper](#basic-mapper).
If the [basic mapper](#basic-mapper) does not fit your business needs, you can configure a [custom mapper](#custom-mapper) for more flexibility.

### Preparations

To use Google OAuth 2.0 authentication, you must set up a project in the [Google API Console](https://console.developers.google.com/){:target="_blank"} to obtain OAuth 2.0 credentials.

Follow the instructions on the [OpenID Connect](https://developers.google.com/identity/protocols/oauth2/openid-connect){:target="_blank"} page or the steps below to configure the OAuth 2.0 client.
After completing this setup, you will have a Client ID and a Client Secret.

* Go to the "Credentials" page in the left menu and select "OAuth client ID" from the "Create credentials" dropdown;
* Enter an OAuth client name and add the TBMQ redirect URI in the "Authorized Redirect URIs" section using the format:

```
http(s)://domain:port/login/oauth2/code/
```
{: .copy-code}

* Replace `domain` with your TBMQ domain and specify the port used for HTTP access.
  For example, if your domain is *my.tbmq.org*:

```
https://my.tbmq.org/login/oauth2/code/
```

* Click "Create".

The OAuth client is now created. You have credentials consisting of a *Client ID* and a *Client Secret*.

{% include images-gallery.html imageCollection="google-credentials-for-oauth-1" %}

### Configuring Google as an OAuth 2.0 authentication provider in TBMQ

To configure OAuth 2.0 authentication in TBMQ via Google, follow these steps:

* Log in to your TBMQ instance;
* Go to the "OAuth 2.0" page in the "Security" section;
* On the "Domains" tab, click the "plus" icon;
* Enter your domain name or IP address of your TBMQ instance;
* Click "Create new" in the "OAuth 2.0 clients" section to add one.

{% include images-gallery.html imageCollection="google-configuration-of-thingsboard-google-1" %}

Adding a new OAuth 2.0 client:

* Enter "Google" as the title;
* Set the provider to "Google";
* Enter the Client ID and Client Secret from the [Google API Console](https://console.developers.google.com/){:target="_blank"}.

Then expand the "Advanced settings" section and configure the "General" block:

* Use this [link](https://developers.google.com/identity/protocols/oauth2/openid-connect#discovery){:target="_blank"} to see the latest URLs such as "Access Token URI" and "Authorization URI";
* Select "POST" as the client authentication method;
* Enable the "Allow user creation" option;
* Add the following to the scope field: `email`, `openid`, `profile`.

{% include images-gallery.html imageCollection="google-configuration-of-thingsboard-google-2" %}

Go to the "Mapper" block:

* Keep the mapper type as "BASIC";
* Specify the role to be assigned;
* Click "Add".

{% include images-gallery.html imageCollection="google-configuration-of-thingsboard-google-3" %}

* The OAuth client has been added successfully. Click "Add" again to confirm the addition of the domain.

A new domain has now been added.

{% include images-gallery.html imageCollection="google-configuration-of-thingsboard-google-4" %}

### Sign in

Now, go to the TBMQ login screen. You will see a new "Login with Google" option.
Select one of your Google accounts, and you will be logged into TBMQ using your Google email.

{% include images-gallery.html imageCollection="login-with-google-1" %}

Go to the "Users" page to find the newly created user.

{% include images-gallery.html imageCollection="login-with-google-2" %}

## Login with Auth0

In this sample, we will configure **OAuth** authentication using an external provider – [Auth0](https://auth0.com/){:target="_blank"}.

To map external user information from Auth0 to the OAuth platform, we use the built-in [basic mapper](#basic-mapper).

If the [basic mapper](#basic-mapper) does not fit your business needs, you can configure the [custom mapper](#custom-mapper) to implement mapping that suits your requirements.

### Preparations

Now let's add another provider to our list – [Auth0](https://auth0.com/){:target="_blank"}.

To apply the configuration properly, we first need to obtain OAuth 2.0 credentials:

* Go to the [Auth0 management console](https://manage.auth0.com/){:target="_blank"}. Open the "Applications" page, and click the "+ Create Application" button;
* Name your application "TBMQ" and choose the application type **Regular Web Applications**;
* Next, choose the technology being used. Please select **Java Spring Boot**;
* Once your application is created, you are redirected to the application details page. Navigate to the **Settings** tab to find the *Client ID* and *Client Secret*;
* In the **Allowed Callback URLs** field, update the redirect URI using the format:

```
http(s)://domain:port/login/oauth2/code/
```
{: .copy-code}

* Replace `domain` with your TBMQ domain and specify the port used for HTTP access.
  For example, if your domain is *my.tbmq.org*:

```
https://my.tbmq.org/login/oauth2/code/
```

{% capture difference %}
Please note that it is not necessary to update the Application Login URI.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

* In the **Advanced Settings** section, you will find all the necessary URLs (endpoints) required for configuring OAuth 2.0;
* Click the **Save Changes** button.

{% include images-gallery.html imageCollection="auth0-credentials-1" %}

### Configuring Auth0 as an OAuth 2.0 authentication provider in TBMQ

To configure OAuth 2.0 authentication in TBMQ via Auth0, follow these steps:

* Log in to your TBMQ instance;
* Go to the "OAuth 2.0" page in the "Security" section;
* On the "Domains" tab, click the "plus" icon;
* Enter your domain name or IP address of your TBMQ instance;
* Click "Create new" in the "OAuth 2.0 clients" section to add a new one.

{% include images-gallery.html imageCollection="oauth0-configuration-of-thingsboard-1" %}

Adding a new OAuth 2.0 client:

* In the opened window, enter **Auth0** as the title for the client;
* Select **Custom** as the provider from the dropdown;
* Enter the *Client ID* and *Client Secret* obtained from the [Auth0 management console](https://manage.auth0.com/){:target="_blank"}.

In the **General** block of the "Advanced settings" section:

* Fill in all the required URLs using the values obtained from the [Auth0 management console](https://manage.auth0.com/){:target="_blank"};
* Select **POST** as the client authentication method;
* Enter **Auth0** as the provider label;
* Add the following scopes to the scope field: `openid`, `email`, `profile`.

{% include images-gallery.html imageCollection="oauth0-configuration-of-thingsboard-2" %}

<br>
Proceed to the "Mapper" block:
- Leave the mapper type as **BASIC**;
- Specify the role to be used;
- Click **Add** to complete the addition of the new OAuth 2.0 client.

{% include images-gallery.html imageCollection="oauth0-configuration-of-thingsboard-3" %}

* The Auth0 client has been successfully added. Click **Add** again to confirm the addition of the domain.

{% include images-gallery.html imageCollection="oauth0-configuration-of-thingsboard-4" %}

### Sign in

Navigate to the login screen. You will now find the login method Auth0.
Click the "Login with Auth0" button.

{% include images-gallery.html imageCollection="login-with-oauth0-1" %}

Go to the "Users" page. There you will find that a new user has been created.

{% include images-gallery.html imageCollection="login-with-oauth0-2" %}

## Login with Keycloak

In this sample, we will use [Keycloak](https://www.keycloak.org/){:target="_blank"} for authentication.

To map external user information from Keycloak to the OAuth platform, we use the built-in [basic mapper](#basic-mapper).

If the [basic mapper](#basic-mapper) does not fit your business needs, you can configure the [custom mapper](#custom-mapper) to implement a mapping that fits your requirements.

### Preparations

To use Keycloak for authentication, you need to set up a project in [Keycloak](https://www.keycloak.org/){:target="_blank"} to obtain OAuth 2.0 credentials.
Follow the [official instructions](https://www.keycloak.org/guides){:target="_blank"} or the steps below.
By the end, you should have a new Keycloak client with credentials consisting of a Client ID and a Client Secret.

**Start Keycloak**

Get started with Keycloak using your [preferred method](https://www.keycloak.org/guides){:target="_blank"}.
In this example, we will run a test Keycloak server on Docker.

* Make sure you have [Docker](https://docs.docker.com/compose/install/){:target="_blank"} installed;
* Run the command below to start Keycloak locally on port 8081 and create an initial admin user with the username **admin** and password **admin**:

```bash
docker run -p 8081:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:26.0.5 start-dev
```
{: .copy-code}

{% include images-gallery.html imageCollection="terminal-start-keycloak" %}

**Log in to the admin console**

* Log in to the [Keycloak Admin Console](http://localhost:8081/admin){:target="_blank"} using **admin** as username and password.

{% include images-gallery.html imageCollection="log-in-to-admin-console" %}

**Create a realm**

* Click "Keycloak" next to the master realm, then click the "Create realm" button;
* Enter **ThingsBoard** in the realm name field, and click "Create".

The new realm has been created.

{% include images-gallery.html imageCollection="create-new-realm" %}

**Create a new client**

A client represents an application or service that requests user authentication.

* Go to the "Clients" page in the left-hand menu, and click the "Create client" button;
* Enter **thingsboard** as the client ID. Leave the client type as **OpenID Connect**. Click "Next";
* Enable the **Client authentication** option. Confirm that **Standard flow** is enabled. Click "Next";
* In the "Login settings" section, add the TBMQ redirect URI in the **Authorized Redirect URIs** section using the format:

```
http(s)://domain:port/login/oauth2/code/
```
{: .copy-code}

* Replace `domain` with your TBMQ domain and specify the port used for HTTP access.
  For example, if your domain is *my.thingsboard.instance*:

```
https://my.thingsboard.instance/login/oauth2/code/
```

* Click "Save".

Client created successfully.

{% include images-gallery.html imageCollection="create-client" %}

<br>
You now have credentials consisting of a Client ID and a Client Secret.  
The Client ID is available on the "Settings" tab. The Client Secret is located on the "Credentials" tab.

{% include images-gallery.html imageCollection="client-id-and-secret" %}

#### Endpoints

As a fully compliant OpenID Connect Provider, Keycloak exposes a set of endpoints that applications and services can use for authentication and authorization.

* Go to the "Realm settings" page;
* Scroll down and locate the "OpenID Endpoint Configuration" link, then click it;
* A new window will open with the configuration. Check the "Pretty-print" option for easier reading.

Here you can find values such as **Access Token URI**, **Authorization URI**, **JSON Web Key URI**, and **User Info URI**, which are required for configuring the OAuth 2.0 client in TBMQ.
A description of the available endpoints is provided [here](https://www.keycloak.org/securing-apps/oidc-layers){:target="_blank"}.

{% include images-gallery.html imageCollection="endpoint-configuration" %}

### Create a user

Now add a user. Only added users will be able to authenticate via Keycloak.

* Go to the "Users" page in the left-hand menu;
* Click "Create new user";
* Enter the username and email address. First name and last name are optional;
* Click "Create".

The user has been created.

{% include images-gallery.html imageCollection="create-user" %}

Set a password for this user:

* Navigate to the "Credentials" tab and click **Set password**;
* Fill in the password form. Toggle **Temporary** to **Off** so that the user is not forced to change the password on first login;
* Click **Save password**.

The password has been set successfully.

{% include images-gallery.html imageCollection="create-password" %}

### Configuring Keycloak as an OAuth 2.0 authentication provider in TBMQ

To configure OAuth 2.0 authentication in TBMQ via Keycloak, follow the steps below:

* Log in to your TBMQ instance;
* Go to the "OAuth 2.0" page of the "Security" section;
* Navigate to the "OAuth 2.0 clients" tab, and click the "plus" icon;
* Enter **Keycloak** as the title;
* Select **Custom** as the provider from the dropdown menu;
* Enter the *Client ID* and *Client Secret* retrieved from the [Keycloak console](http://localhost:8081/admin){:target="_blank"}.

Then expand the "Advanced settings" menu and configure the "General" block:

* Use the [endpoint configuration file](#endpoints) to find the current values for **Access Token URI**, **Authorization URI**, **JSON Web Key URI**, and **User Info URI**. Fill in the corresponding fields;
* Set the client authentication method to **POST**;
* Enter **Keycloak** as the provider label;
* Add the following scopes: `email`, `openid`, `profile`.

{% include images-gallery.html imageCollection="keycloak-add-thingsboard-oauth-client-1" %}

Go to the "Mapper" block:

* Leave the mapper type as **BASIC**;
* Specify the role to be used;
* Click **Add** to confirm.

A new OAuth 2.0 client has been added.

{% include images-gallery.html imageCollection="keycloak-add-thingsboard-oauth-client-2" %}

<br>
Now, add a new domain:

* Go to the "Domains" tab of the "OAuth 2.0" page, and click the "plus" icon;
* Enter your domain name or IP address of your TBMQ instance;
* Specify **Keycloak** as the OAuth 2.0 client;
* Click **Add** again to confirm.

A new domain has been added.

{% include images-gallery.html imageCollection="keycloak-add-domain" %}

### Sign in

Go to the TBMQ login screen. You will now see the option **Login with Keycloak**.
Click this button. A window will open prompting you to sign in to your Keycloak account.
Enter your Keycloak credentials and click **Sign In**. You are now logged into TBMQ using Keycloak.

{% include images-gallery.html imageCollection="login-with-keycloak-1" %}

Go to the "Users" page. There you will find that a new user has been created.

{% include images-gallery.html imageCollection="login-with-keycloak-2" %}

## Mapping of the external user into the TBMQ internal user structure

Mapping an external user info object into a TBMQ user can be achieved using the [Basic](#basic-mapper), [Custom](#custom-mapper), GitHub, and Apple mappers.

### Basic mapper

The basic mapper merges an external OAuth 2.0 user info object into the TBMQ OAuth 2.0 user with a predefined set of rules.

To use the basic mapper, set the mapper type to **Basic**.

{% include images-gallery.html imageCollection="mapper-basic-1" %}

Details of the available properties:

* **Allow user creation** – If enabled, and the user account does not yet exist in TBMQ, it will be created automatically.
  If disabled, the user will receive an *access denied* error when trying to log in with an external OAuth 2.0 provider, if no corresponding TBMQ user exists.

* **Email attribute key** – The attribute key from the external OAuth 2.0 user info that will be used for the TBMQ user email property.

* **First name attribute key** – The attribute key from the external OAuth 2.0 user info that will be used for the TBMQ user first name property.

* **Last name attribute key** – The attribute key from the external OAuth 2.0 user info that will be used for the TBMQ user last name property.

* **Role** – Choose from the predefined roles to be assigned to the user.

> {% include templates/mqtt-broker/security/user-password.md %}

### Custom mapper

If the basic mapper functionality does not meet your business needs, you can configure a custom mapper to implement logic that fits your specific goals.

A custom mapper is designed as a separate microservice running alongside the TBMQ microservice.
TBMQ forwards all mapping requests to this microservice and expects a TBMQ OAuth 2.0 user object in response.

Refer to this [base implementation](https://github.com/thingsboard/tbmq-custom-oauth2-mapper){:target="_blank"} as a starting point for your custom mapper.

To use the custom mapper, set the mapper type to **Custom**.

{% include images-gallery.html imageCollection="mapper-custom-1" %}

Details of the available properties:

* **URL** – The URL of the custom mapper endpoint;
* **username** – If the custom mapper endpoint is configured with basic authentication, specify the *username* here;
* **password** – If the custom mapper endpoint is configured with basic authentication, specify the *password* here.

## HAProxy configuration

If TBMQ is running behind a load balancer such as HAProxy, configure the balancing algorithm properly to ensure that the correct session is maintained on the TBMQ instance:

```bash
backend tbmq-api-backend
  ...
  balance source # balance must be set to 'source'
  ...
```

Also, configure ACL mapping for HTTP and HTTPS requests:

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
