---
layout: docwithnav
assignees:
- ashvayka
title: Kafka Plugin

---

## Overview

Kafka plugin is responsible for sending messages to Kafka brokers triggered by specific rules

## Configuration

You can specify following configuration parameters:

 - bootstrap servers - list of kafka brokers
 - number of attempts to reconnect to kafka if connection fails
 - number of messages to unit into batch on client
 - time to buffer locally before sending to kafka broker (in ms)
 - buffer max size on client
 - minimum number of replicas that must acknowledge a write
 - topic key serializer. by default - org.apache.kafka.common.serialization.StringSerializer
 - topic value serializer. by default - org.apache.kafka.common.serialization.StringSerializer
 - any other additional properties could be provided for kafka broker connection

## Server-side API

This plugin does not provide any server-side API.

## Example
