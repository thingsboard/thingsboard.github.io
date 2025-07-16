---
layout: docwithnav-pe
assignees:
- ashvayka
title: Using RPC capabilities
description: Remote control of IoT devices from the ThingsBoard IoT cloud using RPC feature

tenant-profile-rpc:
    0:
        image: /images/user-guide/persistent-rpc/tenant-rpc-pe.png
        title: 'Click the orange pencil icon in the upper corner of the screen to enter dashboard edit mode.'
    1:
        image: /images/user-guide/persistent-rpc/tenant-rpc-1-pe.png
        title: 'Set the number of days in the RPC TTL days line. Apply changes by clicking the orange checkmark icon in the upper right corner of the page.'

rule-chain:
    0:
        image: /images/user-guide/persistent-rpc/rule-chain-pe.png

rpc-test:
    0:
        image: /images/user-guide/persistent-rpc/rpc-test-pe.png
        title: 'Click the orange pencil icon in the lower corner of the screen to enter dashboard edit mode.'
    1:
        image: /images/user-guide/persistent-rpc/rpc-test-1-pe.png
        title: 'Click the pencil icon in the upper right corner of the RPC debug terminal to enter widget edit mode.'
    3:
        image: /images/user-guide/persistent-rpc/rpc-test-2-pe.png
        title: 'Move to the Advanced tab, increase request timeout of RPC and check the box "RPC request persistent" to enable it. Click the orange checkmark icon in the upper corner of the window to apply the changes.'
    4:
        image: /images/user-guide/persistent-rpc/rpc-test-3-pe.png
        title: 'Click the orange checkmark icon in the lower corner of the screen to save all applied changes.'
    5:
        image: /images/user-guide/persistent-rpc/rpc-test-4-pe.png
        title: 'In the tutorial, we will use the command "test". As you can see, the response contains RPC ID.'

client-side-rpc-rule-chain:
    0:
        image: /images/user-guide/rpc/client-side-rpc-rule-chain-pe-1.png
        title: 'Edit the root Rule Chain. Replace "log" action node with the "script" transformation node. Add "rpc call reply" action node with the default configuration.'
    1:
        image: /images/user-guide/rpc/client-side-rpc-rule-chain-pe-2.png
        title: 'Copy-paste the JS code from the documentation.'

server-side-rpc-rule-chain:
    0:
        image: /images/user-guide/rpc/server-side-rpc-rule-chain-pe-1.png
        title: 'Edit the root Rule Chain. Add generator node and connect it to the "rpc call request" rule node.'
    1:
        image: /images/user-guide/rpc/server-side-rpc-rule-chain-pe-2.png
        title: 'Copy-paste the JS code from the documentation.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/rpc.md %}