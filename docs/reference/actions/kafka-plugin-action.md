---
layout: docwithnav
assignees:
- ashvayka
title: Kafka Plugin Action

---

## Overview

This component allows creating a kafka message by substitution of device attributes and message data into configurable templates.

## Configuration

During action configuration you are able to specify following:
- set flag to confirm  delivery
- kafka topic name
- kafka body template
The Body Template syntax is based on [Velocity](https://velocity.apache.org/)
and is already described in [alarm processor documentation](/docs/reference/processors/alarm-deduplication-processor/#configuration).

## Example
