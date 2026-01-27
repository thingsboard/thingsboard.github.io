{% if docsPrefix == null or docsPrefix == "paas/" %}
{% assign hostName = "ThingsBoard Cloud" %}
{% assign host = "thingsboard.cloud" %}
{% endif %}
{% if docsPrefix == "paas/eu/" %}
{% assign hostName = "ThingsBoard EU Cloud" %}
{% assign host = "eu.thingsboard.cloud" %}
{% endif %}

* TOC
{:toc}

ThingsBoard provides a powerful REST API that allows you to manage all platform entities, perform integrations, automate device provisioning, and build custom applications. 
To simplify API exploration and testing, ThingsBoard includes built-in interactive documentation powered by [Swagger UI](https://swagger.io/){:target="_blank"}.

## Swagger UI

Swagger UI is an interactive tool that lets you:
- browse all available REST API endpoints
- inspect request and response schemas
- test API calls directly in the browser
- authenticate and run API requests as a specific user

This makes it ideal for development, debugging, and API exploration.

## Where to find Swagger UI?

{% if docsPrefix == null or docsPrefix == "pe/" %}
Every ThingsBoard instance hosts its own Swagger UI page at:

```text
http://$THINGSBOARD_HOST:PORT/swagger-ui.html
```
{: .copy-code}

&#42; Replace **$THINGSBOARD_HOST:PORT** with the address of your ThingsBoard deployment.
{% endif %}

{% if docsPrefix == "pe/" %}
The easiest way to get your account is to use [ThingsBoard Cloud](https://{{hostName}}/signup){:target="_blank"} server.
{% endif %}

{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
Every [{{hostName}}](https://{{host}}/){:target="_blank"} instance has its own Swagger UI page.   
Browse ThingsBoard Cloud REST API documentation by clicking the button below:

<br>
<p><a href="https://{{host}}/swagger-ui.html" target="_blank" class="n-button add-device">{{hostName}} REST API</a></p>
{% endif %} 

## Authentication in Swagger UI

<b><font size="3">Automatic authentication</font></b>

If you are already logged in through the main ThingsBoard UI, Swagger UI automatically uses your authenticated session.

<b><font size="3">Manual authentication</font></b>

You can authenticate or authorize as a different user using the **Authorize** button in the top-right corner of Swagger UI.

Steps:
- Open **Swagger UI**
- Click **Authorize**
- Enter your **username** and **password**, `or` paste your **API key** In the **API key form (apiKey)** section.
- Click **Authorize**

**Note:** Only one authentication method should be used at a time.   
If both are authorized, **JWT takes priority**.

{% include images-gallery.html imageCollection="swagger-ui" %}

### API key authentication

{% assign sinceVersion = "4.3" %}
{% include templates/since.md %}

API keys provide a simpler, automation-friendly alternative to JWT authentication.
- **No login required:** You don&#39;t need to exchange passwords or manage token refresh loops
- **Long-lived:** They stay active indefinitely or until the expiration date you choose
- **Revocable:** You can easily disable a specific key

{% capture difference %}
**Note:** Use the **API keys** tab in the ThingsBoard UI to create and manage them.
For more details, see the [full documentation](/docs/{{ docsPrefix }}user-guide/security/api-keys/){: target="_blank"}.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Using API keys

To authenticate via the API key, include it in the X-Authorization header with the "**ApiKey**" prefix:

```text
X-Authorization: ApiKey $YOUR_API_KEY_VALUE
```
{: .copy-code}

&#42; Replace **$YOUR_API_KEY_VALUE** with the API key.

**Important:** API keys should only be used over HTTPS.

Example (curl)

```text
curl -X GET --header 'Accept: application/json' \
            --header 'X-Authorization: ApiKey $YOUR_API_KEY_VALUE' \
            'http://$THINGSBOARD_URL/api/auth/user'
```

<hr>

### JWT authentication (deprecated)

ThingsBoard uses [JWT](https://jwt.io/){:target="_blank"} tokens to authenticate API requests.

When you log in, your username and password are exchanged for two tokens:
- **Access Token (JWT)** - A short-lived token used for API requests.
- **Refresh Token** - When the Access Token expires, the Refresh Token allows obtaining a new Access Token without re-authentication.

**Default expiration times**
- **Access Token** is valid for **2.5 hours**.
- **Refresh Token** is valid for **1 week**.

{% if docsPrefix == "pe/" or docsPrefix == null %}
Expiration times are [configurable](/docs/user-guide/install/{{docsPrefix}}config/){:target="_blank"} in system settings:
- <span class="code-light">JWT_TOKEN_EXPIRATION_TIME</span>
- <span class="code-light">JWT_REFRESH_TOKEN_EXPIRATION_TIME</span>
  {% endif %}

<hr>

<b><font size="4">How to obtain a JWT token?</font></b>

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