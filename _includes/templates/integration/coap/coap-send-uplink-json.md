{% if docsPrefix == "pe/" %}
Use this command to send the message to the CoAP server that is hosted on **localhost**. Replace **$YOUR_COAP_ENDPOINT_URL** with corresponding values.
{% endif %}
{% if docsPrefix == "paas/" %}
Use this command to send the message to the CoAP server that is hosted on **int.thingsboard.cloud**. Replace **$YOUR_COAP_ENDPOINT_URL** with corresponding values.
{% endif %}

```shell
echo -e -n '{"deviceName": "SN-001", "deviceType": "default", "temperature": 25.7, "humidity": 69}' | coap-client -m post $YOUR_COAP_ENDPOINT_URL -t application/json -f-
```
{: .copy-code}

{% if docsPrefix == "pe/" %}
![image](https://img.thingsboard.io/user-guide/integrations/coap/terminal-json-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](https://img.thingsboard.io/user-guide/integrations/coap/terminal-json-paas.png)
{% endif %}