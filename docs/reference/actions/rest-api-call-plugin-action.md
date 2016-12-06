---
assignees:
- ashvayka

---

## Overview

This component allows to create POST/PUT body request by substitution of device attributes and message data into configurable templates.

## Configuration

During action configuration you are able to specify following:
- set flag to confirm  delivery
- action path of the http endpoint
- request method - POST or PUT
- expected result code in http response
- body template of the request
The Body Template syntax is based on [Velocity](https://velocity.apache.org/)
and is already described in [alarm processor documentation](/docs/user-guide/processors/alarm-deduplication-processor/#configuration).

## Example
