**HTTP** is a general-purpose network protocol that can be used in IoT applications. HTTP protocol is TCP based and uses request-response model.

#### Subscribe to the Changes in Shared Device Attributes

To subscribe to changes in shared device attributes, send a GET request to the following URL, with an optional 'timeout' parameter:

```bash
http(s)://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes/updates
```
{: .copy-code}

* **/attributes/updates** The endpoint that is used to fetch the updates of device attributes.
* Replace the **$THINGSBOARD_HOST_NAME** with the actual hostname or IP address of your ThingsBoard Edge instance.

{% assign accessTokenPE = '
    ===
      image: https://img.thingsboard.io/pe/edge/config/subscribe-to-attribute/9-copy-access-token-pe.webp,
      title: Replace the **$ACCESS_TOKEN** with the actual access token of the device. To find the device access token, go to the **Entities > Devices** section and click on the device. On the **"Device details"** page, you can copy the token by clicking the **"Copy access token"** button.
'
%}

{% assign accessTokenCE = '
    ===
      image: https://img.thingsboard.io/edge/config/subscribe-to-attribute/9-copy-access-token.webp,
      title: Replace the **$ACCESS_TOKEN** with the actual access token of the device. To find the device access token, go to the **Entities > Devices** section and click on the device. On the **"Device details"** page, you can copy the token by clicking the **"Copy access token"** button.
'
%}

{% if docsPrefix contains "pe/edge" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=accessTokenPE %}
{% else %}  
{% include images-gallery.liquid showListImageTitles="true" imageCollection=accessTokenCE %}
{% endif %}

Execute the command:
```bash
curl -v -X GET http(s)://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes/updates?timeout=20000
```
{: .copy-code}

* **timeout=20000** The server will keep the connection open for 20 seconds. If a **shared attribute** for the device is updated within this timeout period, the server will respond immediately with the update.

#### Publish Time-Series or Attribute Message.

To publish client-side device attributes to the **ThingsBoard Edge**, send a POST request to the following URL:

```bash
http(s)://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

* **$THINGSBOARD_HOST_NAME:** The actual hostname or IP address of your ThingsBoard Edge instance
* **$ACCESS_TOKEN:** The actual access token of the device.

Publish client-side attributes update

```bash
curl -v -X POST --data "{"attribute1": "value1", "attribute2":true, "attribute3": 43.0}" https:/$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```

You can also publish client-side attributes update using data from [**new-attributes-values.json**](/docs/reference/resources/new-attributes-values.json){: target="_blank"} file:

```bash
curl -v -X POST -d @new-attributes-values.json https://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes --header "Content-Type:application/json"
```
{: .copy-code}