---
layout: docwithnav
assignees:
- ashvayka
title: REST API
description: Supported REST API Reference for server-side integration of your IoT projects

---

* TOC
{:toc}

## Swagger UI

ThingsBoard REST API may be explored using Swagger UI.
You can explore REST API of the live-demo server using this **[Swagger UI link.](https://demo.thingsboard.io/swagger-ui.html)**

To explore REST API provided by ThingsBoard Professional Edition please use the following **[Swagger UI link.](https://thingsboard.cloud/swagger-ui.html)**

Once you will install ThingsBoard server you can open UI using the following URL:
    
``` 
http://YOUR_HOST:PORT/swagger-ui.html
```

## REST API Auth

ThingsBoard uses JWT for request auth.
You will need to populate "X-Authorization" header using "Authorize" button in the top-right corner of the Swagger UI.

 ![image](/images/reference/swagger-ui.png)

In order to get the JWT token, you need to execute the following request:

In case of local installation:
 
 - replace **$THINGSBOARD_URL** with **127.0.0.1:8080**

In case of live-demo server:
 
 - replace **$THINGSBOARD_URL** with **demo.thingsboard.io**
 - replace **tenant@thingsboard.org** with your live-demo username (email)
 - replace **tenant** password with your live-demo password
See **[live-demo](/docs/user-guide/live-demo/)** page for more details how to get your account.

{% capture tabspec %}token
A,get-token.sh,shell,resources/get-token.sh,/docs/reference/resources/get-token.sh
B,response.json,json,resources/get-token-response.json,/docs/reference/resources/get-token-response.json{% endcapture %}
{% include tabs.html %}

 - Now, you should set  'X-Authorization' to "Bearer $YOUR_JWT_TOKEN"
 
 
## Java REST API Client

ThingsBoard team provides client library written in Java to simplify consumption of the REST API.
Please see Java REST API Client [documentation page](/docs/reference/rest-client/) for more details.
