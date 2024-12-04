**CoAP** is a light-weight IoT protocol for constrained devices. **CoAP** protocol is UDP based, but similar to HTTP it uses request-response model. 
#### Subscribe to the Changes in Shared Device Attributes

To subscribe to changes in shared device attributes, send a GET request to the following URL:

```bash
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

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
coap get -o coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

Once shared attribute will be changed by one of the server-side components (REST API or Rule Chain) the client will receive the update.

#### Publish Time-Series or Attribute Message.

To publish client-side device attributes to the **ThingsBoard Edge**, send a POST request to the following URL:

```bash
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

* **$THINGSBOARD_HOST_NAME:** The actual hostname or IP address of your ThingsBoard Edge instance
* **$ACCESS_TOKEN:** The actual access token of the device.

Publish client-side attributes update using data from [**new-attributes-values.json**](/docs/reference/resources/new-attributes-values.json){: target="_blank"} file:

```bash
cat new-attributes-values.json | coap post coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}