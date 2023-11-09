---
layout: docwithnav
assignees:
- ashvayka
title: Send Mail Action

---

## Overview

This component allows building email message by substitution of device attributes and message data into configurable templates.

## Configuration

During action configuration you are able to specify following templates: from, to, cc, bcc, subject and body.
The template syntax is based on [Velocity](https://velocity.apache.org/) 
and is already described in [alarm processor documentation](/docs/reference/processors/alarm-deduplication-processor/#configuration).  

Additionally, you can specify *Send Flag* property. 
This is an optional property that may be used in combination with [isNewAlarm](/docs/reference/processors/alarm-deduplication-processor/#overview) or left blank. 

## Example

As a tenant administrator, you are able to review action example inside **Rules->Demo Alarm Rule->Actions->Send Mail Action**.
