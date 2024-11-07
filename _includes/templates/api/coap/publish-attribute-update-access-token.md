Send POST request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** is your localhost, or the platform address;
- **$ACCESS_TOKEN** is device access token.

{% endif %}
{% if docsPrefix == null %}

If you use live demo server, the command will look like this:

```shell
coap://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/"%}

```shell
coap://{{coapHostName}}/api/v1/$ACCESS_TOKEN/attributes
```
{: .copy-code}

Where **$ACCESS_TOKEN** is device access token.

{% endif %}