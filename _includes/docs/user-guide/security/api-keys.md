* TOC
{:toc}

{% assign sinceVersion = "4.3" %}
{% include templates/since.md %}

API keys provide a simpler alternative to password-based authentication for the ThingsBoard API.   
Unlike JWT tokens that require login and periodically expire, API keys are long-lived credentials that remain valid until their configured expiration date or until they are manually revoked.

<hr>

<b><font size="4">Key features</font></b>

- **No login required:** API keys work immediately without exchanging a username and password.
- **Long-lived:** They stay valid until the expiration date you set.
- **Permission inheritance:** The key inherits the exact same rights as the user it was created for.
- **Easy management:** You can enable, disable, or delete a key at any time.
- **Simple integration:** Perfect for third-party apps where you want to avoid complex authentication code.

<hr>

## Creating API Keys

API keys can be created for **your own account** or for **other platform users**, depending on your permissions.

### Creating API Key for Your Account

To create an API key for your own account:
- In the top-right corner, click the ***three-dot*** menu and select **Account**.
- Navigate to the **Security** tab.
- In the **API keys** section, click the **Manage** button.
- Click the **+ Generate** button.
- Enter a **description** for the API key (e.g., *Production server*, *Testing environment*).
- Select the expiration period.
- Click **Generate**.

**Important:** Copy and save the generated API key - it will not be displayed again.

{% include images-gallery.html imageCollection="creating-api-key-for-our-account" %}

<hr>

### Creating API Key for Another User

API keys can also be created directly from the user’s details page.
A system administrator can create API keys for any users available to them (tenant users), and a tenant administrator can create API keys for their customer users.
In the user details view, the API keys tab provides full access to API key management for that specific user.

- Navigate to the **Customers**/**Users** section.
- Click on the desired user to open their **details**.
- Go to the **API keys** tab.
- Click the **+ Generate** button.
- Enter a **description** for the API key (e.g., *Production server*, *Testing environment*).
- Select the expiration period.
- Click **Generate**.

**Important:** Copy and save the generated API key — it will not be displayed again.

**Note:** The API key inherits all permissions of the user for whom it was created.

{% include images-gallery.html imageCollection="creating-api-key-for-another-user" %}

<hr>

## Using API Keys

### In API requests

Include the API key in the **X-Authorization** header with the **ApiKey** prefix:

```text
X-Authorization: ApiKey $YOUR_API_KEY_VALUE
```
{: .copy-code}

&#42; Replace **$YOUR_API_KEY_VALUE** with the API key.

<br>Example:

```text
curl -X GET --header 'Accept: application/json' \
            --header 'X-Authorization: ApiKey tb_4xpayYjwrKCv5n15CvvS6IUb8vVZe55D-aoXcn_-hl9foOCxlEbtWYoy8bhhMqGt' \
            'https://thingsboard.cloud/api/auth/user'
```
{: .copy-code}

{% capture difference %}
**Security note**: Always use HTTPS in production environments. Executing commands over insecure HTTP connections will send your API key unencrypted, making it vulnerable to interception.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

<hr>

### In Swagger UI

When using [Swagger UI](https://swagger.io/){:target="_blank"}, you can authenticate with an API key:

- Open **Swagger UI**.
- Click the **Authorize** button.
- In the **API key form (apiKey)** section, enter your **API key value** with the **ApiKey** prefix:
  ```
  ApiKey YOUR_API_KEY_VALUE
  ```
  {: .copy-code}
- Click **Authorize**.

{% capture difference %}
**Note:** If both JWT and API key are authenticated, **JWT** takes precedence.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

{% include images-gallery.html imageCollection="authentication-in-swagger-ui" %}

<hr>

## Managing API keys

In the API keys table, each key displays the following information:
- **Created time:** When the API key was generated
- **Description:** A custom description assigned to the key
- **Status:** Indicates whether the key is active or disabled
- **Expiration time:** The date and time when the key will expire

{% include images-gallery.html imageCollection="managing-api-keys-1" %}

Additionally, the following actions are available for each API key:
- **Enable/disable API keys** — Use the toggle switch next to each API key to temporarily disable or re-enable it without deleting the key.
- **Delete API keys** — Click the delete (trash) icon to permanently remove a key. This action cannot be undone.
- **Edit description** — Click the edit (pencil) icon next to the **description** to update the API key’s description.

{% include images-gallery.html imageCollection="managing-api-keys-2" %}
