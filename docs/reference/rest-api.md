---
layout: docwithnav
assignees:
- ashvayka
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

{% capture tabspec %}token
A,get-token.sh,shell,resources/get-token.sh,/docs/reference/resources/get-token.sh
B,resonse.json,json,resources/get-token-response.json,/docs/reference/resources/get-token-response.json{% endcapture %}
{% include tabs.html %}

 - Now, you shoud set  'X-Authorization' to "Bearer $YOUR_JWT_TOKEN"  