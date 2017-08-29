---
layout: docwithnav
assignees:
- ashvayka
title: Method Name Filter

---

## Overview

This component allows filtering incoming RPC request messages by method name. 
This filter is very efficient and useful to forward RPC request to particular plugins that handle them.

## Configuration

You are able to select multiple method names in one filter. 
For example, if you want to have two plugins (their functionality is just for the demo purposes):
 - plugin A allows getting current time
 - plugin B allows getting the weather forecast
You may implement plugin A to handle *getTime* method and plugin B to handle *getWeather* method.
In this case you will need to configure two rules:
 - rule A that points to plugin A based on "getTime" method filter 
 - rule B that points to plugin B based on "getWeather" method filter

## Example

As a system administrator, you are able to review filter example inside **Rules->Demo Time RPC Rule->Filters->Message Telemetry Filter** which match rpc requests with "getTime" method name.