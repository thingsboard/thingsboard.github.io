---
layout: docwithnav
assignees:
- ashvayka
title: REST API Call Plugin

---

{% include templates/old-guide-notice.md %}

## Overview

Rest API plugin is responsible for sending HTTP requests to specific endpoints triggered by specific rules

## Configuration

You can specify following configuration parameters:

 - http endpoint server host
 - http endpoint server port
 - base path for the http request
 - http authentication method. At the moment *no authorization* or *basic* is supported
 - username in case *basic* auth method
 - password in case *basic* auth method
 - custom request headers

## Server-side API

This plugin does not provide any server-side API.

## Example

In this example, we are going to demonstrate how you can configure Rest API Call extension to be able to send POST or PUT request to particular REST endpoint every time new telemetry message for the device arrives.

Prerequisites before continuing REST API Call extension configuration:

 - ThingsBoard is up and running
 - Third-party HTTP server and particular endpoint that is able to receive POST or PUT requests are up and running

### REST API Call Plugin Configuration

Let's configure REST API Call plugin first. Go to *Plugins* menu, click on a '+' button and create new plugin:

![image](/images/reference/plugins/rest-api-call/rest-api-call-plugin-config-1.png)

![image](/images/reference/plugins/rest-api-call/rest-api-call-plugin-config-2.png)

Please set URL, port, path and authentication method correctly for the REST endpoint where the request is going to be transferred.

Save plugin and click on *'Activate'* plugin button:

![image](/images/reference/plugins/rest-api-call/rest-api-call-activate-plugin.png)

### REST API Call Rule Configuration

Now it's time to create appropriate Rule.

![image](/images/reference/plugins/rest-api-call/rest-api-call-rule-config.png)

Add filter for **POST_TELEMETRY** message type:

![image](/images/reference/plugins/rest-api-call/post-telemetry-filter.png)

Click *'Add'* button to add the filter.

Then select *'REST API Call Plugin'* in the drop-down box for the Plugin field:

![image](/images/reference/plugins/rest-api-call/rest-api-call-plugin-selection.png)

Add an action that will send temperature telemetry of the device to the particular REST action-path. In the action you can provide request type and result code that you expected from the REST endpoint in case of a successful call.

![image](/images/reference/plugins/rest-api-call/rest-api-call-rule-action-config-1.png)

![image](/images/reference/plugins/rest-api-call/rest-api-call-rule-action-config-2.png)

Click *'Add'* button and then activate Rule.

### Sending Temperature Telemetry

Now for any of your devices send Telemetry message that contains *'temp'* telemetry:

```json
{"temp":73.4}
```

You should see **'73.4'** as a body request in appropriate rest endpoint once you'll post this message.

Here is an example of a command that publish single telemetry message to locally installed ThingsBoard:

```bash
mosquitto_pub -d -h "localhost" -p 1883 -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m '{"temp":73.4}'
```