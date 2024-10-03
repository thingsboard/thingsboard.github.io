* TOC
{:toc}

## Overview

ThingsBoard allows you to provide Single Sign-On functionality for your customers and automatically create tenants, customers, or sub customers using external user management platforms, that supports the OAuth 2.0 protocol.  
A list of platforms that supports the OAuth 2.0 protocol: [Google](#login-with-google), [Auth0](#login-with-auth0), [Okta](/docs/user-guide/oauth/okta/){:target="_blank"}, [Azure](/docs/user-guide/oauth/azure/){:target="_blank"}, etc.   

## OAuth 2.0 authentication flow

ThingsBoard supports the Authorization Code grant type to exchange an authorization code for an access token.   
Once the user returns to the ThingsBoard client via redirect URL, the platform will get the authorization code from the URL and will use it to request an access token from the external user management platform.
Using the [basic mapper](/docs/{{docsPrefix}}user-guide/oauth-2-support/#basic-mapper) or [custom mapper](/docs/{{docsPrefix}}user-guide/oauth-2-support/#custom-mapper), external user info object will be converted from external platform into ThingsBoard internal OAuth 2.0 user. 
After this, the regular ThingsBoard authorization flow will happen.

## Setting Up Authentication via an external provider

To use authentication through an external provider, first add a new client with all necessary credentials. 
After that, add a new domain or use an existing one and specify the added OAuth 2.0 client in its settings.

### Operations with domain

**Adding domain**

Follow these steps to add a new domain:
- On the "Domains" tab of the "OAuth 2.0 client" page, click the "plus" icon to begin adding a new domain;
- Provide your domain name and OAuth 2.0 client;
- Click "Add" to finalize adding the domain.

{% include images-gallery.html imageCollection="adding-domain-1" %}

**Managing domain**

To update the settings for an existing domain, follow these steps:

- Click on the domain to view its details;
- Switch to editing mode by clicking the large orange button;
- Make the required modifications;
- Confirm and save your changes by clicking the "Apply changes" button.

{% include images-gallery.html imageCollection="managing-domain-1" %}

**Deleting domain**

To remove domain, following the steps:

- Click the "trash" icon in the domain's row you wish to remove;
- Confirm the deletion by clicking "Yes".

{% include images-gallery.html imageCollection="deleting-domain-1" %}

### Operations with OAuth 2.0 client

**Adding OAuth 2.0 client**

Follow these steps to add a new OAuth 2.0 client to ThingsBoard:

- Navigate to the "OAuth 2.0 clients" tab on the "OAuth 2.0" page, and click the "plus" icon to begin adding a new OAuth 2.0 client;
- Enter a descriptive title for the client;
- Select the authentication provider from the dropdown menu;
- Specify which platforms are allowed or select all;
- Provide the Client ID and Client Secret obtained from your authentication provider;
- Configure advanced settings as necessary;
- Click "Add" to finalize the addition of the new OAuth 2.0 client.

{% include images-gallery.html imageCollection="adding-oauth2-client-1" %}

**Managing OAuth 2.0 client**

To update the settings for an existing OAuth 2.0 client, follow these steps:

- Click on the OAuth 2.0 client to view its details;
- Switch to editing mode by clicking the large orange button;
- Make the required modifications;
- Confirm and save your changes by clicking the "Apply changes" button.

{% include images-gallery.html imageCollection="managing-oauth2-client-1" %}

**Deleting OAuth 2.0 client**

Remove clients that are no longer needed or are obsolete:

- Click the "trash can" icon in the client's row you wish to remove;
- Confirm the deletion by clicking "Yes".

{% include images-gallery.html imageCollection="deleting-oauth2-client-1" %}

## Login with Google

In this sample, we will be using authentication via [Google](https://developers.google.com/identity/protocols/oauth2/openid-connect){:target="_blank"}.
The user is going to be logged into the Tenant, and the Tenant name is going to be equal to the user's email.
If the Tenant does not exist in the system, the new Tenant will be created.

As a second step, we are going to add a new external provider for authentication - [Auth0](https://auth0.com/){:target="_blank"}.
In this case, the User is going to be logged into the Tenant which name is going to be equal to a user email domain name.
Additionally, for every user, we are going to create a new Customer and the Customer name is going to be equal to a user email. 

To map that external user info from Google and Auth0 platform, we are going to use a built-in [basic mapper](/docs/{{docsPrefix}}user-guide/oauth-2-support/#basic-mapper). 

If [basic mapper](/docs/{{docsPrefix}}user-guide/oauth-2-support/#basic-mapper) functionality doesn't fit your business needs, you can configure the [custom mapper](/docs/{{docsPrefix}}user-guide/oauth-2-support/#custom-mapper),  so that you are able to add an implementation that fits your specific needs.

### Preparations

To use Google OAuth 2.0 authentication platform for Login, you need to set up a project in the [Google API Console](https://console.developers.google.com/){:target="_blank"} to obtain OAuth 2.0 credentials.

Please, follow the instructions on the [OpenID Connect](https://developers.google.com/identity/protocols/oauth2/openid-connect){:target="_blank"} page or follow the steps below to configure the OAuth 2.0 Client.
After completing the instructions above, you should have a new OAuth Client with credentials consisting of a Client ID and a Client Secret.

- Go to the "Credentials" page in the left menu and select "OAuth client ID" from the "Create credentials" dropdown menu;
- Enter a OAuth client name, and add the ThingsBoard default redirect URI (if you use ThingsBoard installed locally), which we are going to use in this example, to the "Authorized Redirect URIs" section:

```
http://localhost:8080/login/oauth2/code/
```
{: .copy-code}

- Click "Create". 
 
OAuth client created. You now have credentials consisting of a *Client ID* and a *Client secret*

{% include images-gallery.html imageCollection="google-credentials-for-oauth-1" %}

### Configuration of ThingsBoard

To add new OAuth 2.0 client follow the steps below:

- Login to your ThingsBoard instance as System Administrator;
- Navigate to the "Domains" tab, and click "plus" icon;
- Your domain name and redirect URI template are already specified here. Now we need to add an OAuth 2.0 client. Click "Create" to begin;
- Enter the title and select "Google" as the provider. If necessary, specify the allowed platforms, or leave all;
- Now, enter the *Client ID* and *Client secret* from the [Google API Console](https://console.developers.google.com/){:target="_blank"}. Then, expand the "Advanced settings" menu;
- Let's make the settings for the "General" block. Use this [link](https://developers.google.com/identity/protocols/oauth2/openid-connect#discovery){:target="_blank"} to see the list of up-to-date URLs like "Access Token URI", "Authorization URI", etc. Select "POST" in the "Client authentication method" field. Then check the "Allow user creation" checkbox. Add to the scope field: "email", "openid", and "profile";

{% if docsPrefix == null %}
- Go to the "Mapper" block. Select the "Basic" mapper type and "Custom" tenant name strategy. Specify **%{email}** as tenant name pattern (more details about these properties are described below in the "[Basic mapper](#basic-mapper)" part);
{% endif %}
{% if docsPrefix == "pe/" %}
- Go to the "Mapper" block. Select the "Basic" mapper type and "Custom" tenant name strategy. Specify **%{email}** as tenant name pattern (more details about these properties are described below in the "[Basic mapper](#basic-mapper)" part). Specify "Tenant Administrators" as the user group name pattern to add a new user to the specified tenant group;
{% endif %}

- Click "Add" to confirm adding the OAuth 2 client;
- OAuth client is added. Click "Add" to confirm adding domain.

{% include images-gallery.html imageCollection="google-configuration-of-thingsboard-google-1" %}

Now, navigate to the Login screen. We will see an additional "Login with Google" option. Once we click it and select one of our Google account, we are going to be logged into ThingsBoard with our Google's email as a Tenant Administrator email.

{% include images-gallery.html imageCollection="login-with-google-1" %}

{% if docsPrefix == "pe/" %}
If you log in as the System Administrator, you will see that the Tenant name is our Google's email, according to basic mapper:

{% include images-gallery.html imageCollection="login-with-google-2" %}
{% endif %}

## Login with Auth0

In this guide we will configure the **OAuth** with the [OAuth0](https://auth0.auth0.com/){:target="_blank"} for the authentication.
In this case User is going to be logged into the Tenant which name is going to be equal to user’s email domain name.  
Additionally, for every user we are going to create a new Customer and Customer name is going to be user’s email

To map those external user infos from Auth0 platform we are going to use built-in [basic mapper](/docs/user-guide/oauth-2-support/#basic-mapper).

If [basic mapper](/docs/user-guide/oauth-2-support/#basic-mapper) functionality will not fit your business needs, you can configure the [custom mapper](/docs/user-guide/oauth-2-support/#custom-mapper)  so that you are able to add an implementation that fits under your specific needs.

### Preparations

Now let's add one more provider to our list - [Auth0](https://auth0.com/){:target="_blank"}.
This time we are going to create customers for our users inside a single domain tenant.

To apply the configurations properly, we first need to obtain OAuth 2.0 credentials: 

- First, we go to the [OAuth0 Management Console](https://manage.auth0.com/){:target="_blank"}. Open the "Applications" page, and click "+ Create Application" button;
- Name your application "ThingBoard", and choose the application type - "Regular Web Applications";
- Afters, you need to choose the technology being used. Please, choose the "Java Spring Boot" technology;
- Once your application is created, you are redirected to the application details page. Navigate to the "Settings" tab to find the *Client ID* and *Client Secret*;
- In the allowed Callback URLs field, update the redirect URI using the format:

```
http://domain:port/login/oauth2/code/
```
 
\* where under the domain, please, specify the current domain of yours and for the port please specify the port to have an HTTP access to the ThingsBoard instance of yours.
For the example reasons, my domain is the *localhost*, and the port is being the default ThingsBoard installation port *8080*.

```
http://localhost:8080/login/oauth2/code/
```
{: .copy-code}

{% capture difference %}
Please note that it is not necessary to update the Application login URI.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

- In the "Advanced Settings" section, you can find all necessary URLs (endpoints) required for configuring OAuth 2.0;
- Click "Save Changes" button.

{% include images-gallery.html imageCollection="auth0-credentials-1" %}

### Configuration of ThingsBoard

Now let's add Auth0 as an OAuth 2.0 client of ThingsBoard:

- Access your ThingsBoard instance using your System Administrator credentials;
- Navigate to the "OAuth 2.0 clients" tab, and click "plus" icon to add a new client;
- Enter a descriptive title for the client, and select "Custom" as the provider from the dropdown;
- If necessary, specify the allowed platforms, or leave all;
- Now enter the *Client ID* and *Client secret* obtained from the [OAuth0 Management Console](https://manage.auth0.com/){:target="_blank"};
- In the "General" block of the "Advanced settings" section, fill in all the necessary URLs, choose "POST" for the client authentication method, and enter "Auth0" as the provider label. Next, check the "Allow user creation" box. Add the following scopes in the scope field: "openid", "email", "profile";
{% if docsPrefix == null %}
- Proceed to the "Mapper" block. Select the "Basic" mapper type and "Domain" tenant name strategy. Specify **%{email}** as "Customer name pattern" (more details about these properties are described below in the "[Basic mapper](#basic-mapper)" part);
{% endif %}
{% if docsPrefix == "pe/" %}
- Proceed to the "Mapper" block. Select the "Basic" mapper type and "Domain" tenant name strategy. Specify **%{email}** as "Customer name pattern" (more details about these properties are described below in the "[Basic mapper](#basic-mapper)" part). Specify "Customer Users" as the user group name pattern to add a new user to the specified customer group;
{% endif %} 

- Click Add to confirm and finalize the addition of your new OAuth 2.0 client.

One more OAuth client added.

{% include images-gallery.html imageCollection="oauth0-configuration-of-thingsboard-1" %}

<br>
Now we need to add the OAuth client to the domain. You can add a new domain or update an existing one. In this example, we will update the existing one. To do this, perform the following steps:

- Navigate to the "Domains" tab, locate and click the domain you added previously;
- Click the large orange button to enter the domain editing mode;
- Find the field for adding OAuth clients. Add the "OAuth0" client alongside the existing "OAuth2 authentication with Google" client. Make sure to save the changes to update your domain settings.

We have successfully updated the domain settings. Now it contains both providers used in our example:

{% include images-gallery.html imageCollection="oauth0-configuration-of-thingsboard-2" %}

<br>
Navigate to the login screen. You will find two available login methods: Google and Auth0. Click on the "Login with Auth0" button. This method allows you to quickly and securely log in to the system as a Customer User using your Auth0 credentials.

{% include images-gallery.html imageCollection="oauth0-configuration-of-thingsboard-3" %}

## Mapping of the external user into ThingsBoard internal user structure

Mapping of the external user info object into ThingsBoard user can be achieved using the [Basic](#basic-mapper), [Custom](#custom-mapper), GitHub, and Apple mappers. 

### Basic mapper

A basic mapper is able to merge an external OAuth 2.0 user info object into the ThingsBoard OAuth 2.0 user with a predefined set of rules.

To use a basic mapper, set mapper type "Basic".

{% include images-gallery.html imageCollection="mapper-basic-1" %}

Here are the details of other properties:

- **Allow user creation**. If this option is **enable**, then in case, the user account does not exist in the ThingsBoard yet, it will be created.
If this option is **disable**, the user will get access denied error, in case, he tries to log in with an external OAuth 2.0 provider, but there is no user on ThingsBoard with those credentials.
 
- **Email attribute key**. This is the key to the attributes from the external OAuth 2.0 user info that is going to be used as ThingsBoard user email property.
  
- **First name attribute key**. - This is the key to the attributes from the external OAuth 2.0 user info that is going to be used as ThingsBoard user first name property.
    
- **Last name attribute key**. - This is the key to the attributes from the external OAuth 2.0 user info that is going to be used as ThingsBoard user surname property.

- **Tenant name strategy**. - this option specifies which tenant is going to be chosen for creating the user. A basic mapper provides three possible options strategy for a generating Tenant name from an external user info object - *domain*, *email*, or *custom*:
     - **DOMAIN** - the name of the Tenant will be extracted as the domain from the email of the user;
     - **EMAIL** - the name of the Tenant will be the user's email;
     - **CUSTOM** - a custom pattern can be set for the Tenant name. Please see *Tenant name pattern*.

- **Tenant name pattern**. In case, the *Tenant name strategy* is **Custom** you can specify the name of the Tenant, where the user is going to be created with a help of a custom pattern.
  You can use attributes from the external user info object to put them into the Tenant's name. Please use %{attribute_key} as placeholder for the attribute value.
  
  Tenant pattern examples:
     - **Demo Tenant**           *# Hard coded Tenant name*;
     - **Demo Tenant %{email}**  *# if the user's email is "test@demo.com", the Tenant's name will be the "Demo Tenant test@demo.com"*;
     - **%{givenName}**          *# if the user's givenName attribute is "Demo User", the Tenant name will be "Demo User"*.
        
- **Customer name pattern**. User can be created under specific Customer, and not under the Tenant if this pattern field is not empty.
  You can use attributes from the external user info object to put them into the Customer name. Please use %{attribute_key} as placeholder for the attribute value.
  
  Customer pattern examples:
     - **Demo Customer**             *# Hard coded Customer name*;
     - **Demo Customer %{email}**    *# If the user's "email" attribute is "test@demo.com", the Customer name will be "Demo Customer test@demo.com"*;
     - **%{city}**                   *# If the user's "city" attribute is "New York", the Customer name will be "New York"*. 

- **Default dashboard name**. A user will be redirected to a specific Dashboard if this field is not empty.
  
- **Always full screen**. If this option is **enable** and **Default dashboard name** is not empty, the User will be redirected to a specific dashboard in a fullscreen mode.

{% if docsPrefix == "pe/" %}

- **Parent customer name pattern** The Customer of the user can be created in the hierarchy under this parent Customer if this pattern field is not empty. You can use attributes from the external user info object to put them into the Parent Customer name. Please use %{attribute_key} as a placeholder for the attribute value.
  
  Parent Customer pattern examples:
     - **Demo Parent Customer**           *# Hard coded Parent Customer name*;
     - **Demo Parent Customer %{email}**  *# If user's "email" attribute is "test@demo.com", Parent Customer name is going to be "Demo Parent Customer test@demo.com"*;
     - **%{country}**                     *# If user's "country" attribute is "Top Customer", Parent Customer name is going to be "Parent Customer"*. 

- **User groups name pattern**. By default, the newly created user is assigned only to the **All** user's group. You can customize this behavior by specifying a list of groups, where a user has to be assigned to as well. 
You can use attributes from the external user info object to put them into user group names. Please use %{attribute_key} as placeholder for attribute value.
If groups don't exist, this group will be created automatically.
  
  User groups pattern examples:
     - **Tenant Administrators, Customer Users, Managers..** *# Hard coded user groups*
     - **%{job_title}** *# If user's "job_title" attribute is "Manager", user is going to be assigned into "Manager" user group*

{% capture difference %}
**Please note:**
The **Parent customer name pattern** and **User groups name pattern** configurations available only in [ThingsBoard Professional Edition](/docs/user-guide/install/pe/installation-options/){:target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% endif %}

### Custom mapper

If the basic mapper functionality doesn't cover your business needs, with the help of the custom mapper you are able to add an implementation that fits your specific goals.

A custom mapper designed as a separate microservice that is running nearby the ThingsBoard core microservice.
ThingsBoard forwards all mapping requests to this microservice and expects as a response ThingsBoard OAuth 2.0 user object.

Please refer to this [base implementation](https://github.com/thingsboard/custom-oauth2-mapper){:target="_blank"} as a starting point for your custom mapper.

To use the custom mapper, set mapper type "Custom".

{% include images-gallery.html imageCollection="mapper-custom-1" %}

Here are the details of other properties:

- **URL**. URL of the custom mapper endpoint;
- **username**. If the custom mapper endpoint configured with basic authorization, specify the *username* in this property;
- **password**. If the custom mapper endpoint configured with basic authorization, specify the *password* in this property.

## HaProxy configuration

If ThingsBoard is running under a load balancer like HAProxy please configure properly balance algorithm to make sure that the correct session is available on the ThingsBoard instance: 
```bash
backend tb-api-backend
  ...
  balance source # balance must be set to 'source'
  ...
```


As well please configure properly ACL mapping for HTTP and HTTPs requests:
```bash
frontend http-in
  ...
  acl tb_api_acl path_beg /api/ /swagger /webjars /v2/ /static/rulenode/ /oauth2/ /login/oauth2/ # '/oauth2/ /login/oauth2/' added
  ...
```

```bash
frontend https_in
  ...
  acl tb_api_acl path_beg /api/ /swagger /webjars /v2/ /static/rulenode/ /oauth2/ /login/oauth2/ # '/oauth2/ /login/oauth2/' added
  ...
```
