---
layout: docwithnav-mqtt-broker
title: Administration REST API
description: Administration REST API

---

* TOC
{:toc}

## Swagger UI

ThingsBoard MQTT Broker REST API may be explored using Swagger UI.

Once you will install ThingsBoard MQTT Broker you can open Swagger UI using the following URL:

``` 
http://YOUR_HOST:PORT/swagger-ui.html
```

## REST API Auth

ThingsBoard MQTT Broker uses [JWT](https://jwt.io/) tokens for representing claims securely between the API client (browser, scripts, etc) and the platform.
When you log in to the platform, your username and password is exchanged to the pair of tokens.

The main token is short-lived token you should use to perform the API calls. The refresh token is used to get new main token once it is expired.
The expiration time of main and refresh tokens is [configurable](/docs/mqtt-broker/install/config.md) in system settings
via JWT_TOKEN_EXPIRATION_TIME and JWT_REFRESH_TOKEN_EXPIRATION_TIME parameters. Default expiration time values are 2.5 hours and 1 week respectively.

You will need to populate "X-Authorization" header using "Authorize" button in the top-right corner of the Swagger UI.

![image](/images/reference/mqtt-broker-swagger-ui.png)

See sample command below to get the token for user "sysadmin@thingsboard.org", password "sysadmin" and server "THINGSBOARD_MQTT_BROKER_URL":

{% capture tabspec %}token
A,get-token.sh,shell,reference/resources/get-token.sh,/docs/mqtt-broker/reference/resources/get-token.sh
B,response.json,json,reference/resources/get-token-response.json,/docs/mqtt-broker/reference/resources/get-token-response.json{% endcapture %}
{% include tabs.html %}

- Now, you should set ‘X-Authorization’ header to “Bearer $YOUR_JWT_TOKEN”. **Make sure** you use main JWT token and not the refresh token.


## Controllers Overview

- **Admin Controller**: can be used to view, create or delete admin users
- **App Controller**: can be used for advanced monitoring and control of the state of the broker
- **App Shared Subscription Controller**: can be used to view, create or delete Application Shared Subscriptions
- **Auth Controller**: can be used to view current user info, and change the password
- **Client Session Controller**: can be used to view information about Client Sessions, disconnect and clear them
- **MQTT Client Credentials Controller**: can be used to view, create or delete MQTT Client Credentials
- **Retained Msg Controller**: can be used to view information about Retain Messages for topics and force clean-up the data structure that stores retain messages
- **Subscription Controller**: can be used to view information about Client Subscriptions and force clean-up the data structure that stores subscriptions