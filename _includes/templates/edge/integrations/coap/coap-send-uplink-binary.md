Use the command below to send a message. Don’t forget to replace `$YOUR_COAP_ENDPOINT_URL` with corresponding value.

```shell
echo -e -n '\x53\x4e\x2d\x30\x30\x31\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x36\x39' | coap-client -m post $YOUR_COAP_ENDPOINT_URL -t application/octet-stream -f-
```
{: .copy-code}

![image](https://img.thingsboard.io/pe/edge/integrations/coap/terminal-coap-binary-payload-1-edge.png)

Now, go to the "**Integrations center**" -> "**Integrations**" and navigate to the "**Events**" tab in your MQTT integration on the **ThingsBoard Edge**. If you have done everything correctly, you will find an uplink message with the status 'OK'.

![image](https://img.thingsboard.io/pe/edge/integrations/coap/integration-events-coap-1-edge.png)

When you sent the message, a new device was created. The created device with data can be seen in the "**Entities**" section -> "**Devices**" page:

![image](https://img.thingsboard.io/pe/edge/integrations/coap/device-coap-1-edge.png)

Also, received data can be viewed in the uplink converter. In the 'In' and 'Out' blocks of the "**Events**" tab:

{% include images-gallery.html imageCollection="coap-converter-binary-events" %}