<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-rabbitmq.png)

Publish incoming message payload to the RabbitMQ.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-rabbitmq-config.png)

- **Exchange name pattern** - the exchange to publish the message to. Can be a static string, or pattern that is resolved using Message Metadata properties. For example <code>${deviceType}</code> .
- **Routing key pattern** - the routing key. Can be a static string, or pattern that is resolved using Message Metadata properties. For example <code>${deviceType}</code> .
- **Message properties** - optional routing headers. Supported headers *BASIC*, *TEXT_PLAIN*, *MINIMAL_BASIC*, *MINIMAL_PERSISTENT_BASIC*, *PERSISTENT_BASIC*, *PERSISTENT_TEXT_PLAIN*
- **Host** - default host to use for connections
- **Port** - default port to use for connections
- **Virtual host** - the virtual host to use when connecting to the broker
- **Username** - AMQP user name to use when connecting to the broker
- **Password** - AMQP password to use when connecting to the broker
- **Automatic recovery** - enables or disables automatic connection recovery
- **Connection timeout** - connection TCP establishment timeout in milliseconds; zero for infinite
- **Handshake timeout** - the AMQP0-9-1 protocol handshake timeout, in milliseconds
- **Client properties** - additional properties that are sent to the server during connection startup 

**Published body** - Node will send full Message payload to the RabbitMQ. 
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload.

In case of successful message publishing, original Message will be passed to the next nodes via **Success** chain, 
otherwise **Failure** chain is used.

<br>
