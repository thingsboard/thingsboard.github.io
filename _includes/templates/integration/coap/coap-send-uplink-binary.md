{% if docsPrefix == "pe/" %}
Use this command to send the message to the CoAP server that is hosted on **localhost**. Replace **$YOUR_COAP_ENDPOINT_URL** with corresponding values.
{% endif %}
{% if docsPrefix == "paas/" %}
Use this command to send the message to the CoAP server that is hosted on **int.thingsboard.cloud**. Replace **$YOUR_COAP_ENDPOINT_URL** with corresponding values.
{% endif %}

```shell
echo -e -n '\x53\x4e\x2d\x30\x30\x31\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x36\x39' | coap-client -m post $YOUR_COAP_ENDPOINT_URL -t application/octet-stream -f-
```
{: .copy-code}

{% if docsPrefix == "pe/" %}
![image](https://img.thingsboard.io/user-guide/integrations/coap/terminal-binary-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](https://img.thingsboard.io/user-guide/integrations/coap/terminal-binary-paas.png)
{% endif %}