{% if docsPrefix == "pe/" %}
Use this command to send the message to the CoAP server that is hosted on **localhost**. Replace **$YOUR_COAP_ENDPOINT_URL** with corresponding values.
{% endif %}
{% if docsPrefix contains "paas/" %}
Use this command to send the message to the CoAP server that is hosted on **int.{{hostName}}**. Replace **$YOUR_COAP_ENDPOINT_URL** with corresponding values.
{% endif %}

```shell
echo -e 'SN-001,default,temperature,25.7,humidity,69' | coap-client -m post $YOUR_COAP_ENDPOINT_URL -t text/plain -f-
```
{: .copy-code}

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/coap/terminal-text-pe.png)
{% endif %}
{% if docsPrefix contains "paas/" %}
![image](/images/user-guide/integrations/coap/terminal-text-paas.png)
{% endif %}