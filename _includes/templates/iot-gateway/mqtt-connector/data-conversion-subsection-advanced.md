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
        "subscriptionQos": 1,
        "converter": {
            "type": "json",
            "deviceInfo": {
            "deviceNameExpressionSource": "message",
            "deviceNameExpression": "${serialNumber}",
            "deviceProfileExpressionSource": "message",
            "deviceProfileExpression": "${sensorType}"
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

