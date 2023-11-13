---
layout: docwithnav
assignees:
- ashvayka
title: Telemetry Plugin

---

{% include templates/old-guide-notice.md %}

## Overview

Telemetry plugin is responsible for:

 - persisting attribute updates to internal data storage;
 - persisting timeseries data to internal data storage; 
 - provides server-side API to query and subscribe for data updates. 
 
Since Telemetry plugin functionality is critical for data visualization purposes in dashboards, 
it is configured on the system level by a system administrator. 
Advanced users or platform developers can customize telemetry plugin functionality.

## Configuration

There is no specific configuration for this component.

## Server-side API

Telemetry plugin API description is available in corresponding [attributes](/docs/user-guide/attributes/) 
and [telemetry](/docs/user-guide/telemetry/) guides. 

## Example

As a system administrator, you are able to review plugin example inside **Plugins->System Telemetry Plugin**.