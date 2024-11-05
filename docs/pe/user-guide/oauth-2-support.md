---
layout: docwithnav-pe
title: OAuth 2.0
description: OAuth 2.0

adding-domain-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/adding-domain-1-pe.png
        title: 'On the "Domains" tab of the "OAuth 2.0 client" page, click the "plus" icon to add a new domain. Provide your domain name and OAuth 2.0 client. Then, click "Add".'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/adding-domain-2-pe.png
        title: 'Domain added.'
    
editing-domain-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/managing-domain-1-pe.png
        title: 'Click on the domain to view its details. Switch to editing mode by clicking the large orange button;'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/managing-domain-2-pe.png
        title: 'Make the required modifications. Then confirm and save the changes by clicking the "Apply changes" button.'
    
deleting-domain-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/deleting-domain-1-pe.png
        title: 'Click the "trash" icon in the domain&#39;s row you wish to remove;'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/deleting-domain-2-pe.png
        title: 'Confirm the deletion by clicking "Yes".'

adding-oauth2-client-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/adding-oauth2-client-1-pe.png
        title: 'Navigate to the "OAuth 2.0 clients" tab on the "OAuth 2.0" page. Click the "plus" icon to add a new OAuth 2.0 client;'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/adding-oauth2-client-2-pe.png
        title: 'Enter a descriptive title for the client, and select the authentication provider from the dropdown menu. Provide the Client ID and Client Secret obtained from your authentication provider. Configure advanced settings as necessary. Then, click "Add".'
    2:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/adding-oauth2-client-3-pe.png
        title: 'New OAuth 2.0 client added.'

editing-oauth2-client-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/managing-oauth2-client-1-pe.png
        title: 'Click on the OAuth 2.0 client to view its details. Switch to editing mode by clicking the large orange button;'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/managing-oauth2-client-2-pe.png
        title: 'Make the required modifications. Then confirm and save the changes by clicking the "Apply Changes" button.'

deleting-oauth2-client-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/deleting-oauth2-client-1-pe.png
        title: 'Click the "trash" icon in the client&#39;s row you wish to remove;'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/deleting-oauth2-client-2-pe.png
        title: 'Confirm the deletion by clicking "Yes".'

google-credentials-for-oauth-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/google-credentials-for-oauth/google-credentials-for-oauth-1.png
        title: 'Go to the "Credentials" page in the left menu and select "OAuth client ID" from the "Create credentials" dropdown menu;'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/google-credentials-for-oauth/google-credentials-for-oauth-2.png
        title: 'Enter a OAuth client name, and add the ThingsBoard default redirect URI (if you use ThingsBoard installed locally), which we are going to use in this example, to the "Authorized Redirect URIs" section. Click "Create";'
    2:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/google-credentials-for-oauth/google-credentials-for-oauth-3.png
        title: 'OAuth client created. You now have credentials consisting of a Client ID and a Client secret;'

google-configuration-of-thingsboard-google-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-1-pe.png
        title: 'Login to your ThingsBoard instance as System Administrator. Navigate to the "Domains" tab, and click "plus" icon;'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-2-pe.png
        title: 'Your domain name and redirect URI template are already specified here. Now we need to add an OAuth 2.0 client. Click "Create" to begin;'
    2:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-3-pe.png
        title: 'Enter the title and select "Google" as the provider. If necessary, specify the allowed platforms, or leave all. Now, enter the Client ID and Client secret from the Google API Console. Then, expand the "Advanced settings" menu;'
    3:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-4-pe.png
        title: 'Let&#39;s make the settings for the "General" block. Select "POST" in the "Client authentication method" field. Then check the "Allow user creation" checkbox. Add to the scope field: "email", "openid", and "profile";'
    4:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-5-pe.png
        title: 'Go to the "Mapper" block. Select the "Basic" mapper type and "Custom" tenant name strategy. Specify %{email} as "Tenant name pattern" (more details about these properties are described below in the "Basic mapper" part). Specify "Tenant Administrators" as the user group name pattern to add a new user to the specified tenant group. Click "Add" to confirm adding the OAuth 2 client;'
    5:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-6-pe.png
        title: 'OAuth client is added. Click "Add" to confirm adding domain.'
    6:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-7-pe.png
        title: ''

login-with-google-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/configuration-of-thingsboard/login-with-google-1-pe.png
        title: 'Navigate to the Login screen. We will see an additional "Login with Google" option;'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/configuration-of-thingsboard/login-with-google-2-pe.png
        title: 'Once we click it and select one of our Google account, we are going to be logged into ThingsBoard with our Google’s email as a Tenant Administrator email;'

login-with-google-2:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/google/configuration-of-thingsboard/login-with-google-3-pe.png
        title: 'Go to the "Credentials" page in the left menu and select "OAuth client ID" from the "Create credentials" dropdown menu;'



auth0-credentials-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/oauth0-credentials/oauth0-credentials-1.png
        title: 'To apply the configurations properly, we first need to obtain OAuth 2.0 credentials. Therefore, we first go to the OAuth0 Management Console. Open the "Applications" page, and click "+ Create Application" button;'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/oauth0-credentials/oauth0-credentials-2.png
        title: 'Name your application "ThingBoard", and choose the application type - "Regular Web Applications";'
    2:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/oauth0-credentials/oauth0-credentials-3.png
        title: 'Afters, you need to choose the technology being used. Please, choose the "Java Spring Boot" technology;'
    3:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/oauth0-credentials/oauth0-credentials-4.png
        title: 'Once your application is created, you are redirected to the application details page. Navigate to the "Settings" tab to find the Client ID and Client Secret;'
    4:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/oauth0-credentials/oauth0-credentials-5.png
        title: 'As well, please update your allowed Callback URLs;'
    5:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/oauth0-credentials/oauth0-credentials-6.png
        title: 'In the "Advanced Settings" section you will be able to find all the required URLs (endpoints) for OAuth 2.0 configuration. Click "Save Changes" button.'

oauth0-configuration-of-thingsboard-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-1-pe.png
        title: 'Access your ThingsBoard instance using your System Administrator credentials. Navigate to the "OAuth 2.0 clients" tab, and click "plus" icon to add a new client;'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-2-pe.png
        title: 'Enter a descriptive title for the client, and select "Custom" as the provider. Now enter the "Client ID" and "Client secret" obtained from the OAuth0 Management Console. In the "General" block of the "Advanced settings" section, fill in all the necessary URLs, choose "POST" for the client authentication method, and enter "Auth0" as the provider label. Next, check the "Allow user creation" box. Add the following scopes in the scope field: "openid", "email", "profile";'
    2:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-3-pe.png
        title: 'Proceed to the "Mapper" block. Select the "Basic" mapper type and "Domain" tenant name strategy. Specify %{email} as "Customer name pattern" (more details about these properties are described below in the "Basic mapper" part). Specify "Customer Users" as the user group name pattern to add a new user to the specified customer group. Click "Add" to confirm adding the OAuth 2 client;'
    3:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-4-pe.png
        title: 'One more OAuth client added.'

oauth0-configuration-of-thingsboard-2:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-5-pe.png
        title: 'Navigate to the "Domains" tab, locate and click the domain you added previously;'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-6-pe.png
        title: 'Click the large orange button to enter the domain editing mode;'
    2:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-7-pe.png
        title: 'Find the field for adding OAuth clients. Add the "OAuth0" client alongside the existing "OAuth2 authentication with Google" client. Make sure to save the changes to update your domain settings;'
    3:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-8-pe.png
        title: 'We have successfully updated the domain settings. Now it contains both providers used in our example.'

oauth0-configuration-of-thingsboard-3:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-9-pe.png
        title: 'Navigate to the login screen. You will find two available login methods: Google and Auth0. Click on the "Login with Auth0" button. Use your Auth0 credentials to log in as a Customer User. This method allows you to quickly and securely log into the system using your Auth0 credentials;'
    1:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-10-pe.png
        title: 'You have logged into ThingsBoard as a Customer User.'

mapper-basic-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/mapper-basic-1-pe.png
        title: 'To use a basic mapper, set mapper type "Basic".'

mapper-custom-1:
    0:
        image: https://img.thingsboard.io/user-guide/oauth-2-support/mapper-custom-1-pe.png
        title: 'To use the custom mapper, set mapper type "Custom".'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/oauth-2-support.md %}