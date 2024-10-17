---
layout: docwithnav-paas
title: TCP Integration
description: TCP Integration Guide
debug:
    0:
        image: /images/downlink/debug.png

downlink:
    0:
        image: /images/downlink/downlink_data_converter_details.png

rule_chain:
    0:
        image: /images/downlink/rule_chains_integration_downlink.png

shared_attributes:
    0:
        image: /images/downlink/device_groups_all_shared_attributes.png
    1:
        image: /images/downlink/device_groups_all_shared_attributes_update.png

events_in:
    0:
        image: /images/downlink/downlink_converter_events_in.png

events_out:
    0:
        image: /images/downlink/downlink_converter_events_out.png

terminal:
    0:
        image: /images/downlink/terminal.png
---


{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/user-guide/integrations/tcp.md %}
