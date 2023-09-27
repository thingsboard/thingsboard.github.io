* TOC
{:toc}

TBMQ offers user-friendly tools that enable users to monitor broker activity and conveniently access features through the **Home** and **Monitoring** pages.

![image](/images/mqtt-broker/user-guide/ui/home-page.png)

### Charts

At the top of the **Home** page, you will find a set of five charts that display essential information about the broker's activity over the last 10 minutes:
  - **Incoming messages.** This chart shows the number of messages published by MQTT clients to the broker.
  - **Outgoing messages.** Here, you can view the count of messages delivered by the broker to subscribing clients.
  - **Dropped messages.** This chart indicates messages that either lack subscribers or couldn't be delivered to subscribers due to network issues, client disconnections, or resource limitations.
  - **Sessions.** The number of current MQTT sessions is represented in this chart.
  - **Subscriptions.** This chart displays the number of current subscriptions.

Please note that on the Monitoring page, users have the ability to delve deeper into the chart data. 
They can zoom in on specific sections, set custom date ranges to display data, or open the charts in full-screen mode.

![image](/images/mqtt-broker/user-guide/ui/monitoring-page.png)

### Sessions

The Sessions card provides an overview of both connected and disconnected sessions. 
Users can access comprehensive information about these sessions, including their status, duration, and additional details by going to the [Sessions](/docs/mqtt-broker/user-guide/ui/sessions/) page.

### Credentials

The system displays the number of Client Credentials categorized into two types: **Device** and **Application**. 
For more information regarding the different types of Credentials, please refer to the [documentation](/docs/mqtt-broker/user-guide/mqtt-client-type/).

![image](/images/mqtt-broker/user-guide/ui/sessions-credentials-card.png)
 
### Config

Contains information regarding some commonly used configuration parameters:
  - **Basic Auth.** By default, basic authentication based on username, password, and clientId is disabled. To enable it, set the `SECURITY_MQTT_BASIC_ENABLED` environment variable to `true`.
  - **X.509 Certificate Chain Auth.** By default, X.509 certificate chain authentication is disabled. To enable it, set the `SECURITY_MQTT_SSL_ENABLED` environment variable to `true`.
  - **TCP Port.** By default, the TCP listener is enabled on the `1883` port. To modify the port, you can set the `LISTENER_TCP_BIND_PORT` environment variable.
  - **TLS Port.** The SSL/TLS listener is disabled by default on port `8883`. To change the default port, set the `LISTENER_SSL_BIND_PORT` environment variable.
  - **WS Port.** By default, the WS listener is enabled on the `8084` port. To modify the port, you can set the `LISTENER_WS_BIND_PORT` environment variable.
  - **WSS Port.** By default, the WSS listener is disabled on the `8085` port. To modify the port, you can set the `LISTENER_WSS_BIND_PORT` environment variable.
  - **TCP Listener.** Is enabled by default. To disable it, set the `LISTENER_TCP_ENABLED` environment variable to `false`.
  - **TLS Listener.** Is disabled by default. To enable the SSL/TLS listener, set the `LISTENER_SSL_ENABLED` environment variable to `true`.
  - **WS Listener.** Is enabled by default. To disable it, set the `LISTENER_WS_ENABLED` environment variable to `false`.
  - **WSS Listener.** Is disabled by default. To enable it, set the `LISTENER_WSS_ENABLED` environment variable to `true`.
  - **TCP Listener Max Payload Size.** This parameter defines the maximum allowed size of the payload in a TCP message. The default value is `65536` bytes. To modify it, set the `TCP_NETTY_MAX_PAYLOAD_SIZE` environment variable in bytes.
  - **TLS Listener Max Payload Size.** Similar to the TCP listener, this parameter specifies the maximum allowed size of the payload in an SSL/TLS-encrypted message. The default value is `65536` bytes. To change it, set the `SSL_NETTY_MAX_PAYLOAD_SIZE` environment variable in bytes.
  - **WS Listener Max Payload Size.** Specifies the maximum allowed size of the payload in a WS message. The default value is `65536` bytes. To modify it, set the `WS_NETTY_MAX_PAYLOAD_SIZE` environment variable in bytes.
  - **WSS Listener Max Payload Size.** Defines the maximum allowed size of the payload in a WSS-encrypted message. The default value is `65536` bytes. To change it, set the `WSS_NETTY_MAX_PAYLOAD_SIZE` environment variable in bytes.

![image](/images/mqtt-broker/user-guide/ui/config-card.png)

### Kafka Brokers

Displays basic information regarding the Kafka Brokers:
- **Address.** Address of the Kafka broker.
- **Size.** Size of data stored on the broker.

![image](/images/mqtt-broker/user-guide/ui/kafka-brokers-card.png)

### Kafka Topics

Displays basic information regarding the Kafka Topics:
- **Name.** Name of Kafka topic.
- **Partitions.** Number of partitions in the topic.
- **Replicas.** Replication factor of the topic.
- **Size.** Size of the topic.

![image](/images/mqtt-broker/user-guide/ui/kafka-topics-card.png)

### Kafka Consumer Groups

Displays basic information regarding the Kafka Consumer Groups (CG):
- **ID.** Consumer Group ID.
- **State.** State of the CG. Can be `STABLE`, `PREPARING_REBALANCE`, `COMPLETING_REBALANCE`, `EMPTY`, `DEAD` or `UNKNOWN`.
- **Members.** Number of consumers in the CG.
- **Lag.** Sum of all consumers lags within the group. Consumer lag is the delta between the consumer's last committed offset and the producer's end offset.

![image](/images/mqtt-broker/user-guide/ui/kafka-consumer-groups-card.png)
