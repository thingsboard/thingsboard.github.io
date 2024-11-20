---
layout: docwithnav-paas
title: CoAP Integration
description: CoAP Integration Guide 

coap-integration-setup:
    0:
        image: /images/user-guide/integrations/coap/coap-integration-setup-1-paas.png
        title: 'Go to Integrations section and click Add new integration button. Name it CoAP Integration, select type COAP.'
    1:
        image: /images/user-guide/integrations/coap/coap-integration-setup-2-paas.png
        title: 'Add recently created CoAP Uplink Converter.'
    2:
        image: /images/user-guide/integrations/coap/coap-integration-setup-3-paas.png
        title: 'Copy CoAP endpoint URL - we will use it later in coap-client for testing CoAP Integration. Click "Add" to create an integration.'

---
{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/user-guide/integrations/coap.md %}
