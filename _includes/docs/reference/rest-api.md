* TOC
{:toc}

ThingsBoard provides interactive REST API documentation via [Swagger UI](https://swagger.io/){:target="_blank"}. This tool allows you to explore available API methods, understand their parameters, and execute API requests directly from your browser.

## Where to find Swagger UI?

{% if docsPrefix == "pe/" %}
Every ThingsBoard instance has its own Swagger UI page, accessible at:

```text
http://$THINGSBOARD_HOST:PORT/swagger-ui.html
```
{: .copy-code}

&#42;Replace **$THINGSBOARD_HOST:PORT** with your actual ThingsBoard server address.

For example, you may browse ThingsBoard Cloud API documentation using the [Swagger UI link](https://{{hostName}}/swagger-ui.html){:target="_blank"}.
{% endif %}
{% if docsPrefix == null %}
Every ThingsBoard instance has its own Swagger UI page, accessible at:

```text
http://$THINGSBOARD_HOST:PORT/swagger-ui.html
```
{: .copy-code}

&#42;Replace **$THINGSBOARD_HOST:PORT** with your actual ThingsBoard server address.

For example, you may browse Community Edition demo server API documentation using the [Swagger UI link](https://demo.thingsboard.io/swagger-ui.html){:target="_blank"}.
{% endif %}
{% if docsPrefix == "paas/" %}
Every [ThingsBoard Cloud](https://thingsboard.cloud/){:target="_blank"} instance has its own Swagger UI page.   
Browse ThingsBoard Cloud REST API documentation by clicking the button below:

<br>
<p><a href="https://thingsboard.cloud/swagger-ui.html" target="_blank" class="n-button add-device">ThingsBoard Cloud REST API documentation</a></p>
{% endif %}
{% if docsPrefix == "paas/eu/" %}
Every [ThingsBoard EU Cloud](https://eu.thingsboard.cloud/){:target="_blank"} instance has its own Swagger UI page.   
Browse ThingsBoard EU Cloud REST API documentation by clicking the button below:

<br>
<p><a href="https://eu.thingsboard.cloud/swagger-ui.html" target="_blank" class="n-button add-device">ThingsBoard EU Cloud REST API documentation</a></p>
{% endif %}

## How to authenticate in Swagger UI?

- If you are already logged in via the main ThingsBoard login page, Swagger UI will automatically use your credentials.
- You can manually authenticate or authorize as a different user using the "**Authorize**" button in the top-right corner of the Swagger page. Enter the username and password. Then, click "Authorize".

{% include images-gallery.html imageCollection="swagger-ui" %}

{% if docsPrefix == "pe/" or docsPrefix contains "paas/" or (docsPrefix == "paas/eu/") %}
The easiest way to get your account is to use [ThingsBoard Cloud](https://{{hostName}}/signup){:target="_blank"} server.
{% else %}
See [Live Demo ThingsBoard](/docs/{{docsPrefix}}user-guide/live-demo/){:target="_blank"} page for more details how to get your account.
{% endif %}

## How API authentication works?

ThingsBoard uses [JWT](https://jwt.io/){:target="_blank"} tokens for representing claims securely between the API client (browser, scripts, etc) and the platform.
When you login to the platform, your username and password is exchanged to the pair of tokens.

- **Access Token (JWT)** – short-lived token, used for executing API calls.
- **Refresh Token** – used to obtain a new access token when the current one expires.

{% if docsPrefix == "pe/" or docsPrefix == null %}
The expiration time of main and refresh tokens is [configurable](/docs/user-guide/install/{{docsPrefix}}config/){:target="_blank"} in system settings via **JWT_TOKEN_EXPIRATION_TIME** and **JWT_REFRESH_TOKEN_EXPIRATION_TIME** parameters.
{% endif %}

Default token expiration:

- **Access Token** is valid for **2.5 hours**.
- **Refresh Token** is valid for **1 week**.

## How to obtain a JWT token?

{% if docsPrefix == null or docsPrefix == "pe/" %}
To obtain a JWT token for the user "tenant@thingsboard.org" with password "tenant" on "$THINGSBOARD_URL" (actual ThingsBoard server address), execute the following command:

```text
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             -d '{"username":"tenant@thingsboard.org", "password":"tenant"}' \
             'http://$THINGSBOARD_URL/api/auth/login'
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" %}
To obtain a JWT token for the user "your_user@company.com" with password "secret", execute the following command:

```text
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             -d '{"username":"your_user@company.com", "password":"secret"}' \
             'https://thingsboard.cloud/api/auth/login'
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/eu/" %}
To obtain a JWT token for the user "your_user@company.com" with password "secret", execute the following command:

```text
curl -X POST --header 'Content-Type: application/json' \
             --header 'Accept: application/json' \
             -d '{"username":"your_user@company.com", "password":"secret"}' \
             'https://eu.thingsboard.cloud/api/auth/login'
```
{: .copy-code}
{% endif %}

Response:

```json
{"token":"$YOUR_JWT_TOKEN", "refreshToken":"$YOUR_JWT_REFRESH_TOKEN"}
```
{: .copy-code}

Once authenticated, use the obtained JWT token in the X-Authorization header for all API requests:

```text
X-Authorization: Bearer $YOUR_JWT_TOKEN
```
{: .copy-code}

## Additional tools

For easier integration with the ThingsBoard API, you can use ThingsBoard team client libraries:

- [Java REST API Client](/docs/{{docsPrefix}}reference/rest-client/){:target="_blank"} – client library written in Java to simplify consumption of the REST API.
- [Python REST API Client](/docs/{{docsPrefix}}reference/python-rest-client/){:target="_blank"} – client library written in Python to simplify the consumption of the REST API.

These clients allow you to create devices, assets, users, and other entities, as well as manage their relationships within ThingsBoard.