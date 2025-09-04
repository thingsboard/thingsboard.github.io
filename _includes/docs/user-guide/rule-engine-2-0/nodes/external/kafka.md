<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/external-nodes/external-kafka.png)

Kafka Node sends messages to Kafka brokers. Expects messages with any message type. Will send record via Kafka producer to Kafka server.

Configuration:

{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/external-nodes/external-kafka-config-ce.png)
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/nodes/external-nodes/external-kafka-config-pe.png)
{% endif %}

- **Topic pattern** - can be a static string, or pattern that is resolved using Message Metadata properties. For example <code>${deviceType}</code>
- **Key pattern** - Use <code>${metadataKey}</code> for value from metadata, <code>$[messageKey]</code> for value from message body.
- **Bootstrap servers** - list of kafka brokers separated with comma.
- **Automatically retry times** - number of attempts to resend message if connection fails.
- **Produces batch size** - batch size in bytes for grouping messages with the same partition.
- **Time to buffer locally** - max local buffering window duration in ms.
- **Client buffer max size** - max buffer size in bytes for sending messages.
- **Number of acknowledgments** - number of acknowledgments node requires to received before considering a request complete.
- **Other properties** - any other additional properties could be provided for kafka broker connection.

**Published body** - Node will send full Message payload to the Kafka topic. 
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload to the Kafka.

**Outbound message** from this node will contain response **offset**, **partition** and **topic** properties in the Message metadata. 
Original Message payload, type and originator will not be changed.

> **Note** - if you want to use [Confluent cloud](https://confluent.cloud) as a kafka broker you should add next properties:

<table>
    <tr>
        <th>Key</th>
        <th>Value</th>
    </tr>
    <tr>
        <td>ssl.endpoint.identification.algorithm</td>
        <td>https</td>
    </tr>
    <tr>
        <td>sasl.mechanism</td>
        <td>PLAIN</td>
    </tr>
    <tr>
        <td>sasl.jaas.config</td>
        <td>org.apache.kafka.common.security.plain.PlainLoginModule required username="CLUSTER_API_KEY" password="CLUSTER_API_SECRET";</td>
    </tr>
    <tr>
        <td>security.protocol</td>
        <td>SASL_SSL</td>
    </tr>
</table>
- **CLUSTER_API_KEY** - your access key from Cluster settings.
- **CLUSTER_API_SECRET** - your access secret from Cluster settings.

<br>
