Now select the payload type:

{% capture mqttconvertertypespec %}
JSON<small>Recommended if json will be received in response</small>%,%json%,%templates/iot-gateway/mqtt-connector/data-conversion-json-config.md%br%
Bytes<small>Recommended if bytes will be received in response</small>%,%bytes%,%templates/iot-gateway/mqtt-connector/data-conversion-bytes-config.md%br%
Custom<small>Recommended if bytes or anything else will be received in response</small>%,%custom%,%templates/iot-gateway/mqtt-connector/data-conversion-custom-config.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="MqttConverterTypeConfig" toggle-spec=mqttconvertertypespec %}

{% capture difference %}
**Note**: You can specify multiple mapping objects inside the array.{% endcapture %}
{% include templates/info-banner.md content=difference %}

Also, you can combine values from MQTT message in attributes, telemetry and serverSideRpc section, for example:
{% highlight json %}
{
    {
        "topicFilter": "sensor/data",
        "converter": {
            "type": "json",
            "deviceNameJsonExpression": "${serialNumber}",
            "deviceTypeJsonExpression": "${sensorType}",
            "timeout": 60000,
            "attributes": [],
            "timeseries": [
                {
                    "type": "integer",
                    "key": "temperature",
                    "value": "${temp}"
                },
                {
                    "type": "integer",
                    "key": "humidity",
                    "value": "${hum}"
                },
                {
                    "type": "string",
                    "key": "combine",
                    "value": "${hum}:${temp}"
                }
            ]
        }
    }
}
{% endhighlight %}

Mapping process subscribes to the MQTT topics using **topicFilter** parameter of the mapping object.
Each message that is published to this topic by other devices or applications is analyzed to extract device name, type and data (attributes and/or timeseries values).
By default, gateway uses Json converter, but it is possible to provide custom converter. See examples in the source code.

{% capture difference %}
**Connector won't pass the '**None**' value from the converter**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Now let’s review an example of sending data from "SN-001" thermometer device.**

Let’s assume MQTT broker is installed locally on your server.

Use terminal to simulate sending message from the device to the MQTT broker:
```bash
mosquitto_pub -h 127.0.0.1 -p 1883 -t "sensor/data" -m '{"serialNumber": "SN-001", "sensorType": "Thermometer", "sensorModel": "T1000", "temp": 42, "hum": 58}'
```
{: .copy-code}

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-message-1.png)
{: refdef}

The device will be created and displayed in ThingsBoard based on the passed parameters.
{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-created-device-1.png)
{: refdef}

{:refdef: style="text-align: center;"}
![image](/images/gateway/mqtt-created-device-2.png)
{: refdef}
