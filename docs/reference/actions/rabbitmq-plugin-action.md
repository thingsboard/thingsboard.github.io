---
layout: docwithnav
assignees:
- ashvayka
title: RabbitMQ Plugin Action

---

## Overview

This component allows creating RabbitMQ message by substitution of device attributes and message data into configurable templates.

## Configuration

During action configuration you are able to specify following:
- set flag to confirm  delivery
- rabbitmq exchange name
- rabbitmq queue name
- rabbitmq message properties (BASIC, MINIMAL_BASIC, MINIMAL_PERSISTENT_BASIC, PERSISTENT_BASIC, PERSISTENT_TEXT_PLAIN, TEXT_PLAIN)
- rabbitmq message body template
The Body Template syntax is based on [Velocity](https://velocity.apache.org/)
and is already described in [alarm processor documentation](/docs/reference/processors/alarm-deduplication-processor/#configuration).

## Example
