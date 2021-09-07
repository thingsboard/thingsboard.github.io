---
layout: docwithnav
assignees:
- ashvayka
title: Using RPC capabilities
description: Remote control of IoT devices from the ThingsBoard IoT cloud using RPC feature

rule-chain:
    0:
        image: /images/user-guide/persistent-rpc/rule-chain-ce.png

rpc-test:
    0:
        image: /images/user-guide/persistent-rpc/rpc-test-ce.png
        title: 'Click the orange pencil icon in the lower corner of the screen to enter dashboard edit mode.'
    1:
        image: /images/user-guide/persistent-rpc/rpc-test-1-ce.png
        title: 'Click the pencil icon in the upper right corner of the RPC debug terminal to enter widget edit mode.'
    3:
        image: /images/user-guide/persistent-rpc/rpc-test-2-ce.png
        title: 'Move to the Advanced tab, increase request timeout of RPC and check the box "RPC request persistent" to enable it. Click the orange checkmark icon in the upper corner of the window to apply the changes.'
    4:
        image: /images/user-guide/persistent-rpc/rpc-test-3-ce.png
        title: 'Click the orange checkmark icon in the lower corner of the screen to save all applied changes.'
    5:
        image: /images/user-guide/persistent-rpc/rpc-test-4-ce.png
        title: 'In the tutorial, we will use the command "test". As you can see, the response contains RPC ID.'

add-debug:
    0:
        image: /images/user-guide/persistent-rpc/add-debug-ce.png
        title: 'Open the needed dashboard, and click the pencil icon in the lower right corner of the screen to enter dashboard edit mode.'
    1:
        image: /images/user-guide/persistent-rpc/add-debug-1-ce.png
        title: 'To add a new widget to your dashboard, you can either click the big button in the centre of the screen, or select "Add new widget" from the drop-up menu in the lower right corner of the screen.'
    2:
        image: /images/user-guide/persistent-rpc/add-debug-2-ce.png
        title: 'Select Control widgets bundle that allows you to send commands to devices.'
    3:
        image: /images/user-guide/persistent-rpc/add-debug-3-ce.png
        title: 'In the Control widgets bundle menu, select RPC debug terminal in the lower right corner of the bundle.'
    4:
        image: /images/user-guide/persistent-rpc/add-debug-4-ce.png
        title: 'Add a target device from your aliases. Click "Add" in the lower corner of the dialog window.'
    5:
        image: /images/user-guide/persistent-rpc/add-debug-5-ce.png
        title: 'Drag the edges of the widget to adjust its size. Click the checkmark in the lower right corner of the page to save all applied changes.'
    6:
        image: /images/user-guide/persistent-rpc/add-debug-6-ce.png
        title: 'RPC debug terminal widget has been added to the dashboard.'

tenant-profile-rpc:
    0:
        image: /images/user-guide/persistent-rpc/tenant-rpc-ce.png
        title: 'Click the orange pencil icon in the upper corner of the screen to enter dashboard edit mode.'
    1:
        image: /images/user-guide/persistent-rpc/tenant-rpc-1-ce.png
        title: 'Set the number of days in the RPC TTL days line. Apply changes by clicking the orange checkmark icon in the upper right corner of the page.'

---

{% include docs/user-guide/rpc.md %}