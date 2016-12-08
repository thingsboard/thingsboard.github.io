---
layout: docwithnav
assignees:
- ashvayka
---

This guide will help you to get familiar with Thingsboard configuration files and parameters.
 
Once you have installed Thingsboard, you can find configuration files in the following directory:

```bash
/etc/init.d/thingsboard/conf
```

We will describe main configuration files below.

#### thingsboard.yml

Main configuration file that contains properties 
for transports (HTTP, MQTT, CoAP), database(Cassandra), clustering (Zookeeper and gRPC), etc.
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

We will not explain all configuration parameters here. You can review their description in the [configuration file](https://raw.githubusercontent.com/thingsboard/thingsboard/master/application/src/main/resources/thingsboard.yml) itself.

#### thingsboard.conf

Configuration file for startup script. Contains Java options and classpath related parameters.

#### actor-system.conf

Actor system configuration. Contains general actor system properties and configuration of [Akka dispatchers](http://doc.akka.io/docs/akka/current/java/dispatchers.html).
Allows performance tuning for specific use cases.

#### logback.xml

Configuration file for logging. Allows to control log level, size of log files and total size/volume of logs.

