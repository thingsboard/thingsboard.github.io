<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/external-nodes/external-mqtt.png)

Publish incoming message payload to the topic of the configured MQTT broker with QoS **AT_LEAST_ONCE**. 

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/external-nodes/external-mqtt-config.png)

- **Topic pattern** - can be a static string, or pattern that is resolved using Message Metadata properties. For example <code>${deviceType}</code>.
- **Host** - MQTT broker host.
- **Port** - MQTT broker port.
- **Connection timeout** - timeout in seconds for connecting to MQTT broker.
- **Client ID** - optional client identifier used for connecting to MQTT broker. If not specified, default generated clientId will be used.
- **Add Service ID as suffix to Client ID** - optional flag. Server id will be added as a suffix to the client id when enabled. It is helpful when running in microservices mode to allow rule nodes on each node to connect to the broker without the errors.
- **Clean session** - establishes a non persistent connection with the broker when enabled.
- **SSL Enable/Disable** - enable/disable secure communication.  
- **Credentials** - MQTT connection credentials. Can be either *Anonymous*, *Basic* or *PEM*.

Different Authentication credentials are supported for external MQTT broker:

- Anonymous - no authentication
- Basic - username\password pair is used for authenticating
- PEM - PEM certificates are used for Authentication

If **PEM** credentials type is selected, the following configuration should be provided:

- CA certificate file
- Certificate file
- Private key file
- Private key password

<br>

**Published body** - Node will send full Message payload to the MQTT topic.
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload to the MQTT broker.

In case of successful message publishing, original Message will be passed to the next nodes via **Success** chain, 
otherwise **Failure** chain is used.

**MQTT retransmission mechanism**

The MQTT node uses ThingsBoard's internal MQTT client.

{% if docsPrefix contains "paas" %}
{% include docs/user-guide/mqtt-retransmission-mechanism.md show-yml-config=false %}
{% else %}
{% include docs/user-guide/mqtt-retransmission-mechanism.md show-yml-config=true %}
{% endif %}

When the message is dropped, the corresponding rule engine message is routed via **Failure** chain with the appropriate exception message.
