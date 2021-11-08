
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

For authorization you need using “Authorize” button in the right side of the Swagger UI.

 ![image](/images/reference/swagger-ui-1.png)
 Enter in the appropriate fields username and password for your ThingsBoard instance. Then click “Authorize” button.

 ![image](/images/reference/swagger-ui-2.png)

{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}

The easiest way to get your account is to use [ThingsBoard Cloud](https://thingsboard.cloud/signup) server.

{% else %}

See **[live-demo](/docs/{{docsPrefix}}user-guide/live-demo/)** page for more details how to get your account.

{% endif %}

## Java REST API Client

ThingsBoard team provides client library written in Java to simplify consumption of the REST API.
Please see Java REST API Client [documentation page](/docs/{{docsPrefix}}reference/rest-client/) for more details.
