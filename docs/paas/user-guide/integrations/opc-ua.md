---
layout: docwithnav-paas
title: OPC-UA Integration
description: OPC-UA Integration Guide 

create_rule_chain:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/opc-ua/opc-ua-rule-chain-1.png
        title: 'Download the airconditioners.json file. Go to the Rule Chain page. To import this JSON file, click the + button at the bottom right corner of the Rule Chains page and select the Import rule chain.'
    1:
        image: https://img.thingsboard.io/user-guide/integrations/opc-ua/opc-ua-rule-chain-2.png
        title: 'Double-click on the integration downlink node.'    
    2:
        image: https://img.thingsboard.io/user-guide/integrations/opc-ua/opc-ua-rule-chain-3.png
        title: 'Select OPC-UA Integration in the integration field.'
    3:
        image: https://img.thingsboard.io/user-guide/integrations/opc-ua/opc-ua-rule-chain-4.png
        title: 'Save all changes.'

create_rule_chain_2:
    0:
        image: https://img.thingsboard.io/user-guide/integrations/opc-ua/opc-ua-rule-chain-5.png
        title: 'Open the Root Rule Chain.'
    1:
        image: https://img.thingsboard.io/user-guide/integrations/opc-ua/opc-ua-rule-chain-7.png
        title: 'Find a rule chain node, drag and drop it to the rule chain. Name it Airconditioners, choose our Airconditioners rule chain and click Add.'
    2:
        image: https://img.thingsboard.io/user-guide/integrations/opc-ua/opc-ua-rule-chain-8.png
        title: 'Tap on a right grey circle of message type switch node and drag this circle to left side of rule chain node, here lets choose Attributes Updated, Post telemetry and RPC Request to Device. Then tap Add and save rule chain.'

---
{% assign docsPrefix = "paas/" %}
{% include docs/pe/user-guide/integrations/opc-ua.md %}
