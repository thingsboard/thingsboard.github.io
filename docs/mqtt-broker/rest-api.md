---
layout: docwithnav-mqtt-broker
title: Administration REST API
description: Administration REST API

---

* TOC
  {:toc}

## Swagger UI

ThingsBoard MQTT Broker REST API may be explored using Swagger UI.

Once you will install ThingsBoard MQTT Broker you can open UI using the following URL:

``` 
http://YOUR_HOST:PORT/swagger-ui.html
```

## REST API Auth

ThingsBoard MQTT Broker uses JWT for request auth.
You will need to populate "X-Authorization" header using "Authorize" button in the top-right corner of the Swagger UI.

![image](/images/reference/mqtt-broker-swagger-ui.png)

In order to get the JWT token, you need to execute the following request (for local installation):

- replace **$THINGSBOARD_MQTT_BROKER_URL** with **127.0.0.1:8083**

{% capture tabspec %}token
A,get-token.sh,shell,reference/resources/get-token.sh,/docs/mqtt-broker/reference/resources/get-token.sh
B,response.json,json,reference/resources/get-token-response.json,/docs/mqtt-broker/reference/resources/get-token-response.json{% endcapture %}
{% include tabs.html %}

- Now, you should set  'X-Authorization' to "Bearer $YOUR_JWT_TOKEN"


## Controllers Overview

- **Admin Controller**: can be used to view, create or delete admin users
- **App Info Controller**: can be used for advanced monitoring of the state of the broker
- **MQTT Client Controller**: can be used to view, create or delete MQTT Clients (required to mark some clients with **APPLICATION** type)
- **MQTT Client Credentials Controller**: can be used to view, create or delete MQTT Client Credentials
- **Client Session Controller**: can be used to view information about Client Sessions and clear them
- **Client Subscriptions Controller**: can be used to view information about Client Subscriptions and force clean-up the data structure that stores subscriptions