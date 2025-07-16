The CoAP client has to issue the GET request to

{% if docsPrefix == null or docsPrefix == "pe/"%}
```shell
coap get coap://$THINGSBOARD_HOST_NAME/api/v1/firmware?title=$TITLE&version=$VERSION
```
{: .copy-code}

Where
- **$THINGSBOARD_HOST_NAME** is your localhost, or the platform address;
- **$TITLE** is the firmware title;
- **$VERSION** is the version of the target firmware.

{% endif %}
{% if docsPrefix == null %}

If you use live demo server, the command will look like this:

```shell
coap get coap://demo.thingsboard.io/api/v1/firmware?title=$TITLE&version=$VERSION
```
{: .copy-code}

{% endif %}
{% if docsPrefix == "paas/" or docsPrefix == "paas/eu/"%}
```shell
coap get coap://{{coapHostName}}/api/v1/firmware?title=$TITLE&version=$VERSION
```
{: .copy-code}

Where
- **$TITLE** is the firmware title;
- **$VERSION** is the version of the target firmware.

{% endif %}