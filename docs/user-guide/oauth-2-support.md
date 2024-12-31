---
layout: docwithnav
title: OAuth 2.0
description: OAuth 2.0

adding-domain-1:
    0:
        image: /images/user-guide/oauth-2-support/adding-domain-1-ce.png
        title: 'On the "Domains" tab of the "OAuth 2.0 client" page, click the "plus" icon to add a new domain. Provide your domain name and OAuth 2.0 client. Then, click "Add".'
    1:
        image: /images/user-guide/oauth-2-support/adding-domain-2-ce.png
        title: 'Domain added.'
    
editing-domain-1:
    0:
        image: /images/user-guide/oauth-2-support/managing-domain-1-ce.png
        title: 'Click on the domain to view its details. Switch to editing mode by clicking the large orange button;'
    1:
        image: /images/user-guide/oauth-2-support/managing-domain-2-ce.png
        title: 'Make the required modifications. Then confirm and save the changes by clicking the "Apply Changes" button.'
    
deleting-domain-1:
    0:
        image: /images/user-guide/oauth-2-support/deleting-domain-1-ce.png
        title: 'Click the "trash" icon in the domain&#39;s row you wish to remove;'
    1:
        image: /images/user-guide/oauth-2-support/deleting-domain-2-ce.png
        title: 'Confirm the deletion by clicking "Yes".'

adding-oauth2-client-1:
    0:
        image: /images/user-guide/oauth-2-support/adding-oauth2-client-1-ce.png
        title: 'Navigate to the "OAuth 2.0 clients" tab on the "OAuth 2.0" page. Click the "plus" icon to add a new OAuth 2.0 client;'
    1:
        image: /images/user-guide/oauth-2-support/adding-oauth2-client-2-ce.png
        title: 'Enter a descriptive title for the client, and select the authentication provider from the dropdown menu. Provide the Client ID and Client Secret obtained from your authentication provider. Configure advanced settings as necessary. Then, click "Add".'
    2:
        image: /images/user-guide/oauth-2-support/adding-oauth2-client-3-ce.png
        title: 'New OAuth 2.0 client added.'

editing-oauth2-client-1:
    0:
        image: /images/user-guide/oauth-2-support/managing-oauth2-client-1-ce.png
        title: 'Click on the OAuth 2.0 client to view its details. Switch to editing mode by clicking the large orange button;'
    1:
        image: /images/user-guide/oauth-2-support/managing-oauth2-client-2-ce.png
        title: 'Make the required modifications. Then confirm and save the changes by clicking the "Apply changes" button.'

deleting-oauth2-client-1:
    0:
        image: /images/user-guide/oauth-2-support/deleting-oauth2-client-1-ce.png
        title: 'Click the "trash" icon in the client&#39;s row you wish to remove;'
    1:
        image: /images/user-guide/oauth-2-support/deleting-oauth2-client-2-ce.png
        title: 'Confirm the deletion by clicking "Yes".'

google-credentials-for-oauth-1:
    0:
        image: /images/user-guide/oauth-2-support/google/google-credentials-for-oauth/google-credentials-for-oauth-1.png
        title: 'Go to the "Credentials" page in the left menu and select "OAuth client ID" from the "Create credentials" dropdown menu;'
    1:
        image: /images/user-guide/oauth-2-support/google/google-credentials-for-oauth/google-credentials-for-oauth-2.png
        title: 'Enter a OAuth client name, and add the ThingsBoard default redirect URI (if you use ThingsBoard installed locally), which we are going to use in this example, to the "Authorized Redirect URIs" section. Click "Create";'
    2:
        image: /images/user-guide/oauth-2-support/google/google-credentials-for-oauth/google-credentials-for-oauth-3.png
        title: 'OAuth client created. You now have credentials consisting of a Client ID and a Client secret;'

google-configuration-of-thingsboard-google-1:
    0:
        image: /images/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-1-ce.png
        title: 'Login to your ThingsBoard instance as System Administrator. Navigate to the "Domains" tab, and click "plus" icon;'
    1:
        image: /images/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-2-ce.png
        title: 'Your domain name and redirect URI template are already specified here. Now we need to add an OAuth 2.0 client. Click "Create" to begin;'
    2:
        image: /images/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-3-ce.png
        title: 'Enter the title and select "Google" as the provider. If necessary, specify the allowed platforms, or leave all. Now, enter the "Client ID" and "Client secret" from the Google API Console. Then, expand the "Advanced settings" menu;'
    3:
        image: /images/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-4-ce.png
        title: 'Let&#39;s make the settings for the "General" block. Select "POST" as the client authentication method. Turn on the "Allow user creation" option. Add to the scope field: "email", "openid", and "profile";'
    4:
        image: /images/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-5-ce.png
        title: 'Go to the "Mapper" block. Leave the mapper type "BASIC". Select "CUSTOM" as the tenant name strategy. Specify %{email} as "Tenant name pattern". Click "Add" to confirm adding the OAuth 2 client;'
    5:
        image: /images/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-6-ce.png
        title: 'OAuth client is added. Click "Add" to confirm adding domain.'
    6:
        image: /images/user-guide/oauth-2-support/google/configuration-of-thingsboard/google-configuration-of-thingsboard-7-ce.png
        title: ''

login-with-google-1:
    0:
        image: /images/user-guide/oauth-2-support/google/configuration-of-thingsboard/login-with-google-1-ce.png
        title: 'Navigate to the login screen. We will see an additional "Login with Google" option. Click this button;'
    1:
        image: /images/user-guide/oauth-2-support/google/configuration-of-thingsboard/login-with-google-2.png
        title: 'Select one of your Google accounts;'
    2:
        image: /images/user-guide/oauth-2-support/login-with-oauth-1-ce.png
        title: 'You are now logged into ThingsBoard using your Google email as a Tenant Administrator.'

auth0-credentials-1:
    0:
        image: /images/user-guide/oauth-2-support/oauth0/oauth0-credentials/oauth0-credentials-1.png
        title: 'To apply the configurations properly, we first need to obtain OAuth 2.0 credentials. Therefore, we first go to the OAuth0 Management Console. Open the "Applications" page, and click "+ Create Application" button;'
    1:
        image: /images/user-guide/oauth-2-support/oauth0/oauth0-credentials/oauth0-credentials-2.png
        title: 'Name your application "ThingBoard", and choose the application type - "Regular Web Applications";'
    2:
        image: /images/user-guide/oauth-2-support/oauth0/oauth0-credentials/oauth0-credentials-3.png
        title: 'Afters, you need to choose the technology being used. Please, choose the "Java Spring Boot" technology;'
    3:
        image: /images/user-guide/oauth-2-support/oauth0/oauth0-credentials/oauth0-credentials-4.png
        title: 'Once your application is created, you are redirected to the application details page. Navigate to the "Settings" tab to find the Client ID and Client Secret;'
    4:
        image: /images/user-guide/oauth-2-support/oauth0/oauth0-credentials/oauth0-credentials-5.png
        title: 'As well, please update your allowed Callback URLs;'
    5:
        image: /images/user-guide/oauth-2-support/oauth0/oauth0-credentials/oauth0-credentials-6.png
        title: 'In the "Advanced Settings" section you will be able to find all the required URLs (endpoints) for OAuth 2.0 configuration. Click "Save Changes" button.'

oauth0-configuration-of-thingsboard-1:
    0:
        image: /images/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-1-ce.png
        title: 'Access your ThingsBoard instance using your System Administrator credentials. Navigate to the "OAuth 2.0 clients" tab, and click "plus" icon to add a new client;'
    1:
        image: /images/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-2-ce.png
        title: 'Enter a descriptive title for the client, and select "Custom" as the provider. Now enter the "Client ID" and "Client secret" obtained from the OAuth0 Management Console. In the "General" block of the "Advanced settings" section, fill in all the necessary URLs. The client authentication method should be set to "POST". Enter "Auth0" as the provider label. Add the following scopes in the scope field: "openid", "email", "profile";'
    2:
        image: /images/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-3-ce.png
        title: 'Proceed to the "Mapper" block. Leave the mapper type "BASIC". The tenant name strategy should be "DOMAIN". Specify %{email} as customer name pattern. Click "Add" to confirm adding the OAuth 2 client;'
    3:
        image: /images/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-4-ce.png
        title: 'One more OAuth client added.'

oauth0-configuration-of-thingsboard-2:
    0:
        image: /images/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-5-ce.png
        title: 'Navigate to the "Domains" tab, locate and click the domain you added previously;'
    1:
        image: /images/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-6-ce.png
        title: 'Click the large orange button to enter the domain editing mode;'
    2:
        image: /images/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-7-ce.png
        title: 'Find the field for adding OAuth clients. Add the "OAuth0" client alongside the existing "OAuth2 authentication with Google" client. Make sure to save the changes to update your domain settings;'
    3:
        image: /images/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-8-ce.png
        title: 'We have successfully updated the domain settings. Now it contains both providers used in our example.'

oauth0-configuration-of-thingsboard-3:
    0:
        image: /images/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-9-ce.png
        title: 'Navigate to the login screen. You will find two available login methods: Google and Auth0. Click on the "Login with Auth0" button. Use your Auth0 credentials to log in as a Customer User. This method allows you to quickly and securely log into the system using your Auth0 credentials;'
    1:
        image: /images/user-guide/oauth-2-support/oauth0/configuration-of-thingsboard/oauth0-configuration-of-thingsboard-10-ce.png
        title: 'You have logged into ThingsBoard as a Customer User.'

terminal-start-keycloak:
    0:
        image: /images/user-guide/oauth-2-support/keycloak/terminal-start-keycloak-1.png
        title: 'Run this command to start Keycloak on local the port 8081 and create an initial admin user with the username admin and password admin.'
    1:
        image: /images/user-guide/oauth-2-support/keycloak/terminal-start-keycloak-2.png
        title: ''

log-in-to-admin-console:
    0:
        image: /images/user-guide/oauth-2-support/keycloak/log-in-to-admin-console-1.png
        title: 'Log in to the Keycloak Admin Console using your username and password.'
    1:
        image: /images/user-guide/oauth-2-support/keycloak/log-in-to-admin-console-2.png
        title: ''

create-new-realm:
    0:
        image: /images/user-guide/oauth-2-support/keycloak/create-new-realm-1.png
        title: 'Click "Keycloak" next to the master realm, then click "Create realm" button;'
    1:
        image: /images/user-guide/oauth-2-support/keycloak/create-new-realm-2.png
        title: 'Enter "ThingsBoard" in the realm name field, and click "Create" button;'
    2:
        image: /images/user-guide/oauth-2-support/keycloak/create-new-realm-3.png
        title: 'The new realm has been created.'

create-client:
    0:
        image: /images/user-guide/oauth-2-support/keycloak/create-client-1.png
        title: 'Go to the "Clients" page in the left-hand menu, and click the "Create client" button;'
    1:
        image: /images/user-guide/oauth-2-support/keycloak/create-client-2.png
        title: 'Enter "thingsboard" as the client ID. Leave the client type as "OpenID Connect". Click "Next";'
    2:
        image: /images/user-guide/oauth-2-support/keycloak/create-client-3.png
        title: 'Turn on "Client authentication" option. Confirm that "Standard flow" is enabled. Click "Next";'
    3:
        image: /images/user-guide/oauth-2-support/keycloak/create-client-4.png
        title: 'In the "Login settings" section, add the ThingsBoard default redirect URI to the "Authorized Redirect URIs" section. Then, click "Save";'
    4:
        image: /images/user-guide/oauth-2-support/keycloak/create-client-5.png
        title: 'Client created successfully.'

client-id-and-secret:
    0:
        image: /images/user-guide/oauth-2-support/keycloak/client-id-and-secret-1.png
        title: 'You can find the "Client ID" on the "Settings" tab;'
    1:
        image: /images/user-guide/oauth-2-support/keycloak/client-id-and-secret-2.png
        title: 'The "Client Secret" is located on the "Credentials" tab.'

endpoint-configuration:
    0:
        image: /images/user-guide/oauth-2-support/keycloak/openid-endpoint-configuration-1.png
        title: 'Go to the "Realm settings" page in the left-hand menu. Scroll down and locate the link to "OpenID Endpoint Configuration", then click on it;'
    1:
        image: /images/user-guide/oauth-2-support/keycloak/openid-endpoint-configuration-2.png
        title: 'A new window with OpenID Endpoint Configuration will open. Check the "Pretty-print" option to make the data view more user-friendly. Here you found "Access token URI," "Authorization URI," "JSON Web Key URI," and "User info URI," which are necessary for configuring the OAuth 2.0 client in ThingsBoard.'

create-user:
    0:
        image: /images/user-guide/oauth-2-support/keycloak/create-user-1.png
        title: 'Go to the "Users" page in the left-hand menu. Click "Create new user";'
    1:
        image: /images/user-guide/oauth-2-support/keycloak/create-user-2.png
        title: 'Enter the username and email address in the form. First name and last name are optional. Then, click "Create";'
    2:
        image: /images/user-guide/oauth-2-support/keycloak/create-user-3.png
        title: 'The user has been created;'

create-password:
    0:
        image: /images/user-guide/oauth-2-support/keycloak/create-user-4.png
        title: 'Navigate to the "Credentials" tab. Click "Set password";'
    1:
        image: /images/user-guide/oauth-2-support/keycloak/create-user-5.png
        title: 'Fill in the "Set password" form with a password. Toggle "Temporary" to "Off" so that the user does not need to update this password at the first login. Click "Save";'
    2:
        image: /images/user-guide/oauth-2-support/keycloak/create-user-6.png
        title: 'Confirm the set password by clicking the "Save password";'
    3:
        image: /images/user-guide/oauth-2-support/keycloak/create-user-7.png
        title: 'The password has been successfully.'

keycloak-add-thingsboard-oauth-client:
    0:
        image: /images/user-guide/oauth-2-support/keycloak/keycloak-configuration-of-thingsboard-1-ce.png
        title: 'Access your ThingsBoard instance using your System Administrator credentials. Navigate to the "OAuth 2.0 clients" tab, and click "plus" icon to add a new client;'
    1:
        image: /images/user-guide/oauth-2-support/keycloak/keycloak-configuration-of-thingsboard-2-ce.png
        title: 'Enter "Keycloak" as the title. Select the "Custom" from the dropdown menu as the authentication provider. Now enter the "Client ID" and "Client secret" using the values retrieved from the Keycloak console. In the "General" block of the "Advanced settings" section, fill in all the necessary URLs. The client authentication method should be set to "POST". Enter "Keycloak" as the provider label. Add the following scopes in the scope field: "openid", "email", "profile";'
    2:
        image: /images/user-guide/oauth-2-support/keycloak/keycloak-configuration-of-thingsboard-3-ce.png
        title: 'Proceed to the "Mapper" block. Go to the "Mapper" block. Leave the mapper type "BASIC". Select "CUSTOM" as the tenant name strategy. Specify %{email} as tenant name pattern. Specify "Tenant Administrators" as the user group name pattern to automatically add a new user to the designated tenant group upon creation. Click "Add" to confirm adding the OAuth 2 client;'
    3:
        image: /images/user-guide/oauth-2-support/keycloak/keycloak-configuration-of-thingsboard-4-ce.png
        title: 'A new OAuth 2.0 client has been added.'

keycloak-add-domain:
    0:
        image: /images/user-guide/oauth-2-support/keycloak/keycloak-adding-domain-1-ce.png
        title: 'Navigate to the "Domains" tab, and click "plus" icon. Enter your domain name or IP address, and specify "Keycloak" as the OAuth 2.0 client. Click "Add" to finalize adding the domain;'
    1:
        image: /images/user-guide/oauth-2-support/keycloak/keycloak-adding-domain-2-ce.png
        title: 'A new domain has been added.'

login-with-keycloak-1:
    0:
        image: /images/user-guide/oauth-2-support/keycloak/login-with-keycloak-1-ce.png
        title: 'Go to the ThingsBoard login screen. You will see an additional option, "Login with Keycloak". Click this button;'
    1:
        image: /images/user-guide/oauth-2-support/keycloak/login-with-keycloak-2.png
        title: 'A window will open prompting you to sign in to your Keycloak account. Enter your Keycloak credentials, and click "Sign In";'
    2:
        image: /images/user-guide/oauth-2-support/login-with-oauth-1-ce.png
        title: 'You are logged into ThingsBoard using Keycloak authorization credentials.'

mapper-basic-1:
    0:
        image: /images/user-guide/oauth-2-support/mapper-basic-1-ce.png
        title: 'To use a basic mapper, set mapper type "Basic".'

mapper-custom-1:
    0:
        image: /images/user-guide/oauth-2-support/mapper-custom-1-ce.png
        title: 'To use the custom mapper, set mapper type "Custom".'

---

{% include get-hosts-name.html %}
{% include docs/user-guide/oauth-2-support.md %}