Send the uplink message:

```shell
echo -e -n '{"deviceName": "SN-001", "deviceType": "default", "temperature": 25.7, "humidity": 69}' | coap-client -m post $YOUR_COAP_ENDPOINT_URL -t application/json -f-
```
{: .copy-code}
* Replace **`$YOUR_COAP_ENDPOINT_URL`** with the corresponding value.

![image](/images/pe/edge/integrations/coap/terminal-coap-json-payload-1-edge.webp)

To view the uplink message:
* Go to the **Integrations center > Integrations** section and click on the integration
* On the **"Integration details"** page select the **"Events"** tab.
* Check the status of the uplink message. If the configuration is correct, the status will display as **"OK"**.

{% include images-gallery.html imageCollection="events-json" %}

After the message is sent, a new device is created.
To view the created device and its data:
* Go to the **Entities > Devices** section and click on the device
* On the **"Device details"** page select the **"Latest telemetry"** tab.

{% include images-gallery.html imageCollection="device-json" %}

The received data can be viewed in the **Uplink converter**:
* Go to the **Integrations center > Data converters** section and click the **Uplink converter**.
* On the **“Data converter details”** page, select the **“Events”** tab.
* View the message details in the **“In”** and **“Out”** columns.

{% include images-gallery.html imageCollection="coap-converter-json-events" %}