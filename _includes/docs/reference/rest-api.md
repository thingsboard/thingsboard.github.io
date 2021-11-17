
* TOC
{:toc}

## Interactive Documentation

{% if docsPrefix == "paas/" or docsPrefix == "pe/"  %}
ThingsBoard REST API interactive documentation is available via Swagger UI. For example, you may browse ThingsBoard Cloud API documentation using the **[Swagger UI link.](https://thingsboard.cloud/swagger-ui.html)**. 
{% else %}
ThingsBoard REST API interactive documentation is available via Swagger UI. For example, you may browse Community Edition demo server API documentation using the **[Swagger UI link.](https://demo.thingsboard.io/swagger-ui.html)**.
{% endif %}

{% if docsPrefix == "paas/" %}
{% else %}
Once you will install ThingsBoard server you can open an interactive documentation using the following URL:
    
``` 
http://YOUR_HOST:PORT/swagger-ui.html
```

{% endif %}

Documentation page will automatically use your credentials, if you have previously authorized on the main login page. 
You may use “Authorize” button in the top right corner of the documentation page to manually authorize. You may also use this button to authorize as a different user. See below:

{% include images-gallery.html imageCollection="swagger-ui" %}

{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}

The easiest way to get your account is to use [ThingsBoard Cloud](https://thingsboard.cloud/signup) server.

{% else %}

See **[live-demo](/docs/{{docsPrefix}}user-guide/live-demo/)** page for more details how to get your account.

{% endif %}

## JWT Tokens

ThingsBoard uses [JWT](https://jwt.io/) tokens for representing claims securely between the API client (browser, scripts, etc) and the platform. 
When you login to the platform, your username and password is exchanged to the pair of tokens. 


{% if docsPrefix == "paas/" %}
The main token is short-lived token you should use to perform the API calls. The refresh token is used to get new main token once it is expired.
Default expiration time values are 2.5 hours and 1 week respectively.

See sample command below to get the token for user "your_user@company.com" and password "secret":

{% else %}
The main token is short-lived token you should use to perform the API calls. The refresh token is used to get new main token once it is expired.
The expiration time of main and refresh tokens is [configurable](/docs/{{docsPrefix}}user-guide/install/config/) in system settings 
via JWT_TOKEN_EXPIRATION_TIME and JWT_REFRESH_TOKEN_EXPIRATION_TIME parameters. Default expiration time values are 2.5 hours and 1 week respectively.

See sample command below to get the token for user "tenant@thingsboard.org", password "tenant" and server "THINGSBOARD_URL":

{% endif %}

{% capture tabspec %}token
A,get-token.sh,shell,resources/get-token.sh,/docs/reference/resources/get-token.sh
B,response.json,json,resources/get-token-response.json,/docs/reference/resources/get-token-response.json{% endcapture %}
{% include tabs.html %}

- Now, you should set  'X-Authorization' header to "Bearer $YOUR_JWT_TOKEN". **Make sure** you use main JWT token and not the refresh token.

## Java REST API Client

ThingsBoard team provides client library written in Java to simplify consumption of the REST API.
Please see Java REST API Client [documentation page](/docs/{{docsPrefix}}reference/rest-client/) for more details.

## Python REST API Client

ThingsBoard team provides client library written in Python to simplify consumption of the REST API.
Please see Python REST API Client [documentation page](/docs/{{docsPrefix}}reference/python-rest-client/) for more details.
