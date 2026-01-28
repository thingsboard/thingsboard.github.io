Send POST request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/" %}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/attributes
```
{: .copy-code}

Where **$THINGSBOARD_HOST_NAME** is your localhost, or the platform address.

{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/"%}

```shell
coap://{{coapHostName}}/api/v1/attributes
```
{: .copy-code}

{% endif %}