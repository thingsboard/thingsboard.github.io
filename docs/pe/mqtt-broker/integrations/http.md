---
layout: docwithnav-pe-mqtt-broker
title: HTTP Integration
description: TBMQ HTTP integration guide

tb-endpoint-url:
  0:
    image: /images/mqtt-broker/user-guide/ui/tb-endpoint-url-1.png
    title: 'In your ThingsBoard Cloud instance navigate to the "Integrations" page and opne HTTP integration details. Then enable debug mode and copy "HTTP endpoint URL".'
    
add-http-integration:
  0:
    image: /images/pe/mqtt-broker/user-guide/ui/add-http-integration-1.png
    title: 'Navigate to the "Integrations" page, and click "plus" icon to add a new integration.'
  1:
    image: /images/pe/mqtt-broker/user-guide/ui/add-http-integration-2.png
    title: 'Select "HTTP" as the integration type and click "Next".'
  2:
    image: /images/pe/mqtt-broker/user-guide/ui/add-http-integration-3.png
    title: 'Click "Next" to subscribe to the default topic "tbmq/#".'
  3:
    image: /images/pe/mqtt-broker/user-guide/ui/add-http-integration-4.png
    title: 'In the field "Endpoint URL" paste the URL from the HTTP integration of your ThingsBoard Cloud.'
  4:
    image: /images/pe/mqtt-broker/user-guide/ui/add-http-integration-5.png
    title: 'Open "Advanced settings", set "Payload content type" as JSON, and click "Add".'

send-uplink-message:
  0:
    image: /images/pe/mqtt-broker/user-guide/ui/send-uplink-message-1.png
    title: 'Navigate to the "WebSocket Client" page, select working connection, then click "Connect".'
  1:
    image: /images/pe/mqtt-broker/user-guide/ui/send-uplink-message-2.png
    title: 'Set topic name as "tbmq/http-integration", and click "Send" to publish message.'
    
http-integration-result:
  0:
    image: /images/mqtt-broker/user-guide/ui/http-integration-result-1.png
    title: 'Open ThingsBoard Cloud HTTP integration details page.'
  1:
    image: /images/mqtt-broker/user-guide/ui/http-integration-result-2.png
    title: 'Go to the "Events" tab, the message from the TBMQ HTTP integration should be available in the table (if the debug mode was enabled when message was published).'

---

{% assign docsPrefix = "pe/" %}
{% include docs/mqtt-broker/integrations/http.md %}
