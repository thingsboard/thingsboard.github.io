---
layout: docwithnav
assignees:
- ashvayka
title: IoT Gateway Configuration

---

This guide will help you to get familiar with Thingsboard IoT Gateway configuration files and parameters.

Once you have installed Thingsboard IoT Gateway, you can find configuration files in the following directory:

```bash
Linux: /etc/tb-gateway/conf
Windows: $INSTALL_DIR/conf
```

We will describe main configuration files below.

#### tb-gateway.yml

Main configuration file that is used to setup connection to Thingsboard server and enable/disable extensions.

| **Configuration property**            | **Description**                                                                                                                                                                           |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Thingsboard connection properties** |                                                                                                                                                                                           |
| gateway.connection.host               | Thingsboard server hostname. For example, demo.thingsboard.io - live demo server.                                                                                                         |
| gateway.connection.port               | Thingsboard server MQTT port (1883 for not encrypted connection, 8883 for encrypted connection)                                                                                           |
| gateway.connection.retryInterval      | Thingsboard connect retry interval in milliseconds.                                                                                                                                       |
| gateway.connection.maxInFlight        | Maximum amount of pending publish messages. Pending messages are messages that are either not sent due to connection problem or not yet confirmed due to high load on Thingsboard Server. |
| **Thingsboard security properties**   |                                                                                                                                                                                           |
| gateway.security.accessToken          | Populate this field in case of [Access Token based authentication](/docs/user-guide/access-token/)                                                                                        |
| gateway.security.keystore             | Absolute or relative pass to keystore. Used in case of [X.509 Certificate based authentication](/docs/user-guide/certificates/)                                                           |
| gateway.security.keystorePassword     | Password to the keystore.                                                                                                                                                                 |
| gateway.security.keystoreKeyAlias     | Name of the client key in keystore. Password to the key should match password to keystore.                                                                                                |
| gateway.security.truststore           | Absolute or relative pass to truststore. Used in case of encrypted connection.                                                                                                            |
| gateway.security.truststorePassword   | Password to the truststore.                                                                                                                                                               |
| **Misc gateway properties**           |                                                                                                                                                                                           |
| gateway.reporting.interval            | Statistics report interval in milliseconds. Reports amount of connected devices and sent messages.                                                                                        |
| gateway.persistence.type              | Either "file" or "memory" message persistence options available.                                                                                                                          |
| gateway.persistence.path              | Path to the storage file in case of "file" persistence. Make sure that user who is running gateway process is able to create/modify the file.                                             |
| gateway.persistence.bufferSize        | Maximum size of messages in storage.                                                                                                                                                      |
| **OPC-UA extension**                  |                                                                                                                                                                                           |
| opc.enabled                           | Either "true" or "false". Boolean flag that enables OPC-UA extension.                                                                                                                     |
| opc.configuration                     | Absolute or relative pass to OPC-UA extension configuration file. See corresponding section for more details.                                                                             |
| **MQTT extension**                    |                                                                                                                                                                                           |
| mqtt.enabled                          | Either "true" or "false". Boolean flag that enables MQTT extension.                                                                                                                       |
| mqtt.configuration                    | Absolute or relative pass to MQTT extension configuration file. See corresponding section for more details.                                                                               |
| **Sigfox extension**                  |                                                                                                                                                                                           |
| sigfox.enabled                        | Either "true" or "false". Boolean flag that enables Sigfox extension.                                                                                                                     |
| sigfox.configuration                  | Absolute or relative pass to Sigfox extension configuration file. See corresponding section for more details.                                                                             |
| **HTTP server properties**            |                                                                                                                                                                                           |
| server.address                        | HTTP server bind address. Reserved for future usage.                                                                                                                                      |
| server.port                           | HTTP server bind port. Reserved for future usage                                                                                                                                          |

#### logback.xml

Logging configuration file that is based on [Logback](https://logback.qos.ch/) library.

Most important loggers are listed below. Supported log levels: TRACE, DEBUG, INFO, WARN, ERROR

```bash
    <logger name="org.thingsboard" level="INFO" />
    <logger name="org.eclipse.milo" level="INFO" />
    <logger name="org.eclipse.paho" level="INFO" />
```

#### OPC-UA Extension

OPC-UA Extension configuration is covered on the corresponding [extension page](/docs/iot-gateway/opc-ua/).

#### MQTT Extension

MQTT Extension configuration is covered on the corresponding [extension page](/docs/iot-gateway/mqtt/).


