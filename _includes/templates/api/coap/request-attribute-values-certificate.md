Send GET request to the following URL:

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap://$THINGSBOARD_HOST_NAME/api/v1/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}

Where **$THINGSBOARD_HOST_NAME** is your localhost, or the platform address.

{% endif %}
{% if docsPrefix == null %}
If you use live demo server, the command will look like this:

```shell
coap://demo.thingsboard.io/api/v1/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}
{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/"%}
```shell
coap://{{coapHostName}}/api/v1/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2
```
{: .copy-code}

{% endif %}