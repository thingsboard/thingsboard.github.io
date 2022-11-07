---
layout: docwithnav-mqtt-broker
title: Developer Information
description: Developer Information

---

* TOC
{:toc}


## Incoming QoS 1 PUBLISH msg processing

- Netty decodes the msg
- put msg to Client Actor system
- process msg in client actor
- persist msg in Kafka
- after Kafka producer success callback - send PUBACK msg to MQTT client


## Topic description

- **publish_msg** - for persisting incoming **PUBLISH** messages
- **mqtt_broker_application_client_** + **client_id** - topics for message processing for **APPLICATION** clients
- **device_persisted_msg** - for message processing for **DEVICE** clients
- **client_session** - for persisting session info of clients
- **client_subscriptions** - for persisting subscription info of clients
- **client_session_event** - for processing cluster-related events (client connect, client disconnect, session clear)
- **client_session_event_response** - for sending responses to **client_session_event**
- **disconnect_client_command** - for sending commands to disconnect client
- **basic_downlink_publish_msg** - for processing outgoing **PUBLISH** messages that must not be persisted
- **persistent_downlink_publish_msg** - for processing outgoing **PUBLISH** messages that must be persisted

## Packages description

### application module

- `actors.client.messages` - all messages that are processes by Client actor
- `actors.client.service` - logic for processing Client's messages
- `actors.client.service.connect` - logic for managing client connection
- `actors.client.service.disconnect` - logic for managing client disconnection
- `actors.client.service.session` - logic for managing client's session info
  and distributing information about the session through the whole cluster
- `actors.client.service.subscription` - logic for managing client's subscriptions info
  and distributing information about the session through the whole cluster
- `actors.client.state` - classes related to the state (context) of the Client actor

- `actors.device` - logic for processing PersistedDevice's messages
- `actors.device.messages` - all messages that are processes by PersistedDevice actor

- `adaptor` - converters to transform messages to/from Netty MQTT and Proto types to/from custom Java type

- `cluster` - service to get info about the broker-node in the cluster

- `cluster` - spring/security/swagger configs

- `controller` - REST controllers

- `install` - install classes

- `server` - classes related to Netty's MQTT server

- `session` - classes related to session of the MQTT client

- `service.analysis` - logger for detailed debug

- `service.install` - services for installation of the broker

- `service.auth` - services for authentication and authorization of MQTT clients
- `service.auth.providers` - set of auth providers (`basic`, `ssl`, `ldap`)

- `service.mqtt` - classes related to features of MQTT protocol

- `service.mqtt.client` - classes related to MQTT Client entity
- `service.mqtt.client.cleanup` - services for clean-up of the stale MQTT Clients
- `service.mqtt.client.disconnect` - services for processing of the `disconnect-client` command
- `service.mqtt.client.event` - services for managing inter-cluster communication about MQTT clients
- `service.mqtt.client.session` - services for managing MQTT client's session

- `service.mqtt.handlers` - handlers for different types of MQTT messages

- `service.mqtt.keepalive` - service for Keep-Alive feature of MQTT protocol

- `service.mqtt.persistence` - classes responsible for persistent session of MQTT clients
- `service.mqtt.persistence.application` - classes responsible for processing of persisted messages of the `APPLICATION` MQTT clients
- `service.mqtt.persistence.device` - classes responsible for processing of persisted messages of the `DEVICE` MQTT clients
- `service.mqtt.persistence.device.cleanup` - service for clean-up of stale persisted messages
- `service.mqtt.persistence.device.processsing` - strategy and related classes for saving messages for `DEVICE` clients
- `service.mqtt.persistence.device.queue` - services for reading/writing from/to the `DEVICE` msg queue

- `service.mqtt.validation` - services for validation of MQTT topics

- `service.mqtt.will` - service for Last Will and Testament feature of MQTT protocol

- `service.processing` - services for processing of incoming and outgoing `PUBLISH` MQTT messages
- `service.processing.downlink` - services for processing of outgoing `PUBLISH` MQTT messages
- `service.processing.downlink.basic` - services for delivering not-persisted `PUBLISH` MQTT messages
- `service.processing.downlink.persistent` - services for delivering persisted `PUBLISH` MQTT messages

- `service.security` - services for authentication and authorization of MQTT clients and Broker admins

- `service.stats` - services for capturing of the internal statistics

- `service.subscription` - services for reading MQTT client's subscriptions information

- `service.user` - service for broker admin creation


## Roadmap

- retained messages
- consistent retries (not only on reconnect)
- plug-in authorization (with already created most commonly used variants like OAuth, LDAP)
- integrations (Kafka etc)
- MQTT 5
- multi-tenancy
