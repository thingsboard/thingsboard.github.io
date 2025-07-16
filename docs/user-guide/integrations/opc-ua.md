---
layout: docwithnav-pe
title: OPC-UA Integration
description: OPC-UA Integration Guide

create_rule_chain:
    0:
        image: /images/user-guide/integrations/opc-ua/opc-ua-rule-chain-1.png
        title: 'Download the airconditioners.json file. Go to the "Rule Chains" page. To import this JSON file, click the "+" icon in the upper right corner of the screen and select the "Import rule chain";'
    1:
        image: /images/user-guide/integrations/opc-ua/opc-ua-rule-chain-2.png
        title: 'Double-click on the "integration downlink" node;'
    2:
        image: /images/user-guide/integrations/opc-ua/opc-ua-rule-chain-3.png
        title: 'Specify "OPC-UA Integration" in the integration field;'
    3:
        image: /images/user-guide/integrations/opc-ua/opc-ua-rule-chain-4.png
        title: 'Apply all changes.'

create_rule_chain_2:
    0:
        image: /images/user-guide/integrations/opc-ua/opc-ua-rule-chain-5.png
        title: 'Open the "Root Rule Chain";'
    1:
        image: /images/user-guide/integrations/opc-ua/opc-ua-rule-chain-7.png
        title: 'Add a "rule chain" node. Name it "Airconditioners", choose our "Airconditioners" rule chain and click "Add";'
    2:
        image: /images/user-guide/integrations/opc-ua/opc-ua-rule-chain-8.png
        title: 'Tap on a right grey circle of "message type switch" node and drag this circle to left side of "rule chain" node. Here, select "Attributes Updated", "Post telemetry" and "RPC Request to Device". Then tap "Add" and save rule chain.'

---
{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsTag="pe" %}
{% include docs/pe/user-guide/integrations/opc-ua.md %}
