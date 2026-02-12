##### Subscribe to topic

To subscribe to the **sensors/temperature** topic and start receiving messages, use the following command:

```bash
mosquitto_sub -d -h localhost -p 1883 -t sensors/temperature -q 1 -u username -P password
```
{: .copy-code}

**Note:** Replace `username` and `password` with the credentials you created in the [authentication section](#configure-client-authentication--authorization).

Once connected, you can view the session information in the UI by navigating to the _Sessions_ page.

{% include images-gallery.html imageCollection="broker-sessions" %}

##### Publish message

To publish a message to the **sensors/temperature** topic, use the following command:

```bash
mosquitto_pub -d -h localhost -p 1883 -t sensors/temperature -m 32 -q 1 -u username -P password
```
{: .copy-code}

**Note:** Replace `username` and `password` with the credentials you created in the [authentication section](#configure-client-authentication--authorization).
