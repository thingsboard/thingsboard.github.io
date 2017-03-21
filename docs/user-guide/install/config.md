---
layout: docwithnav
assignees:
- ashvayka
title: Configuration
description: Thingsboard IoT platform configuration guide

---

This guide will help you to get familiar with Thingsboard configuration files and parameters.
 
Once you have installed Thingsboard, you can find configuration files in the following directory:

```bash
Windows: YOUR_INSTALL_DIR/conf
Linux: /etc/thingsboard/conf
```

We will describe main configuration files below.

#### thingsboard.yml

This is the main configuration file that contains configuration properties 
for transports (HTTP, MQTT, CoAP), database (Cassandra), clustering (Zookeeper and gRPC), etc.
The configuration file is written in YAML. 

All configuration parameters have corresponding environment variable name and default value. In order to change configuration parameter you can simply change it's default value.
For example:

```bash
server:
  address: "${HTTP_BIND_ADDRESS:0.0.0.0}"
```

In this case, *'HTTP_BIND_ADDRESS'* is environment variable name and *'0.0.0.0'* is a default value.
Environment variables are useful in case of docker installation. 
See [docker documentation](https://docs.docker.com/compose/environment-variables/#/the-envfile-configuration-option) for more details.

There is **80+** configuration parameters in **thingsboard.yml** file. You can review their description in the [**configuration file**](https://raw.githubusercontent.com/thingsboard/thingsboard/master/application/src/main/resources/thingsboard.yml) itself.
We will list only main configuration parameters below to avoid duplication of the parameter descriptions and to simplify maintenance of this documentation page.

| **Property**                     | **Description**                                                                        | **Default Value** | **Environment Variable**          |
|----------------------------------|----------------------------------------------------------------------------------------|-------------------|-----------------------------------|
| server.address                   | HTTP Server bind address                                                               | 0.0.0.0           | HTTP_BIND_ADDRESS                 |
| server.port                      | HTTP Server bind port                                                                  | 8080              | HTTP_BIND_PORT                    |
| mqtt.bind_address                | MQTT Server bind address                                                               | 0.0.0.0           | MQTT_BIND_ADDRESS                 |
| mqtt.bind_port                   | MQTT Server bind port                                                                  | 1883              | MQTT_BIND_PORT                    |
| coap.bind_address                | CoAP Server bind address                                                               | 0.0.0.0           | COAP_BIND_ADDRESS                 |
| coap.bind_port                   | CoAP Server bind port                                                                  | 5683              | COAP_BIND_PORT                    |
| cassandra.url                    | Cassandra node list                                                                    | 127.0.0.1:9042    | CASSANDRA_URL                     |
| security.jwt.tokenExpirationTime | JWT token expiration time in seconds used by Web UI                                    | 900               | JWT_TOKEN_EXPIRATION_TIME         |
| security.jwt.refreshTokenExpTime | JWT refresh token expiration time in seconds used by Web UI (session expiration time)  | 3600              | JWT_REFRESH_TOKEN_EXPIRATION_TIME |

#### thingsboard.conf

Configuration file for startup script. Contains Java options and classpath related parameters.

#### actor-system.conf

Actor system configuration. Contains general actor system properties and configuration of [Akka dispatchers](http://doc.akka.io/docs/akka/current/java/dispatchers.html).
Allows performance tuning for specific use cases.

#### logback.xml

Configuration file for logging. Allows to control log level, size of log files and total size/volume of logs.

