
* TOC
{:toc}

## Swagger UI

After installing TBMQ, you can explore the REST API using the Swagger UI.

Access the Swagger UI by opening the following URL:

``` 
http(s)://YOUR_HOST:PORT/swagger-ui/
```

For local installation use the next URL:

```text
http://localhost:8083/swagger-ui/
```
{: .copy-code}

This URL will provide you with an interactive interface to navigate and interact with the available REST API endpoints of TBMQ.
By utilizing the Swagger UI, you can conveniently explore the functionality, test API calls, and gather information about the server-side APIs provided by TBMQ.

The documentation page will automatically use your credentials if you have previously authorized on the main login page.
This allows you to seamlessly access the documentation without the need for additional authentication.

However, if you wish to manually authorize or use different credentials, you can click on the "Authorize" button located in the top right corner of the documentation page. 
This button enables you to provide authentication details and authorize yourself with the required privileges.

By utilizing the "Authorize" button, you have the flexibility to authenticate as a different user if needed, granting you access to the relevant sections of the documentation based on your authorization level.

{% include images-gallery.html imageCollection="broker-swagger-ui" %}

## JWT Tokens

TBMQ leverages [JWT](https://jwt.io/) (JSON Web Tokens) for securely representing claims between the API client (such as browsers and scripts) and the platform. 
JWT tokens are used as a mechanism to exchange information securely.

When you log in to the broker, your username and password are exchanged for a pair of tokens. These tokens, in the form of JWT, 
encapsulate the necessary information about the user's authentication and authorization. 
This ensures the secure transmission of credentials and allows the API client to communicate securely with the platform while 
maintaining the integrity and confidentiality of the exchanged information.

The main token is short-lived token you should use to perform the API calls. The refresh token is used to get new main token once it is expired.
The expiration time of main and refresh tokens is [configurable](/docs/mqtt-broker/install/config/) in system settings
via `JWT_TOKEN_EXPIRATION_TIME` and `JWT_REFRESH_TOKEN_EXPIRATION_TIME` parameters. Default expiration time values are 2.5 hours and 1 week respectively.

See sample command below to get the token for user "sysadmin@thingsboard.org", password "sysadmin" and server "THINGSBOARD_MQTT_BROKER_URL":

{% capture tabspec %}token
A,get-token.sh,shell,reference/resources/get-token.sh,/docs/mqtt-broker/reference/resources/get-token.sh
B,response.json,json,reference/resources/get-token-response.json,/docs/mqtt-broker/reference/resources/get-token-response.json{% endcapture %}
{% include tabs.html %}

- Now, you should set ‘X-Authorization’ header to “Bearer $YOUR_JWT_TOKEN”. **Make sure** you use main JWT token and not the refresh token.

## Controllers Overview

- **Admin Controller**: can be used to view, create or delete admin users.
- **App Controller**: can be used for advanced monitoring and control of the state of the broker.
- **App Shared Subscription Controller**: can be used to view, create or delete Application Shared Subscriptions.
- **Auth Controller**: can be used to view current user info, and change the password.
- **Client Session Controller**: can be used to view information about Client Sessions, disconnect and clear them.
- **Login Endpoint**: can be used to authenticate user and get JWT token data.
- **MQTT Client Credentials Controller**: can be used to view, create or delete MQTT Client Credentials.
- **Retained Msg Controller**: can be used to view information about Retain Messages for topics and force clean-up the data structure that stores retain messages.
- **Subscription Controller**: can be used to view information about Client Subscriptions and force clean-up the data structure that stores subscriptions.
- **Timeseries Controller**: can be used to get and delete historical stats data.
