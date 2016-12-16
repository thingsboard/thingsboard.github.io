---
layout: docwithnav
assignees:
- ashvayka
title: REST API

---

* TOC
{:toc}

## Swagger UI

Thingsboard REST API may be explored using Swagger UI. 
Once you will install Thingsboard server you can open UI using following URL:
    
``` 
http://YOUR_HOST:PORT/swagger-ui.html
```

## REST API Auth

Thingsboard uses JWT for request auth. 
You will need to populate "X-Authorization" header using "Authorize" button in the top-right corner of the Swagger UI.

 ![image](/images/reference/swagger-ui.png)

In order to get the JWT token, you need to execute following request:

 - replace **$THINGSBOARD_URL** with either **127.0.0.1:8080** (in case of local installation) or **demo.thingsboard.io** (in case of live-demo).

{% capture tabspec %}token
A,get-token.sh,shell,resources/get-token.sh,/docs/reference/resources/get-token.sh
B,resonse.json,json,resources/get-token-response.json,/docs/reference/resources/get-token-response.json{% endcapture %}
{% include tabs.html %}

 - Now, you shoud set  'X-Authorization' to "Bearer $YOUR_JWT_TOKEN"  