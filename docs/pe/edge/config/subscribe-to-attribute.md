---
layout: docwithnav-pe-edge
title: Subscribe to Attribute Updates on Edge from the Cloud
description: Subscribe to Attribute Updates on Edge from the Cloud Server

routeMessagesToCloud:
    0:
        image: /
        title: 'Log in to the <b>ThingsBoard Cloud</b> and go to the <b>Edge management > Rule chain templates</b> section and click on the <b>Rule chain</b> assigned to your <b>Edge instance.</b>'
    1:
        image: /
        title: '???? On the <b>Rule Chain</b> edit page, in the Node search bar find the <b>"script"</b> node. It ensures that massage will complete its round trip. Drag and drop the node onto the <b>Rule Chain</b> sheet. Then, in the <b>"script"</b> pop-up window enter the node title and enter the script below in the <b>"function Transform "</b> field. Click the <b>"Add"</b> button to proceed.'
    2:
        image: /
        title: 'On the <b>Rule Chain</b> edit page, in the Node search bar find the <b>"push to cloud"</b> node. It pushes messages from Edge to Cloud. Drag and drop the node onto the <b>Rule Chain</b> sheet. Then, in the <b>"Add rule node"</b> pop-up window enter the node title and select the <b>"Client attributes"</b> option in the <b>"Entity attributes scope"</b> field. Click the <b>"Add"</b> button to proceed.'
    3:
        image: /
        title: 'Connect the <b>“save attributes”</b> node to the <b>"push to cloud"</b> node and set the <b>"Success"</b> link label. Click the <b>“Apply changes”</b> button in the <b>Rule Chain</b> sheet.'

backToEdge:
    0:
        image: /
        title: 'Go to the <b>Rule Chains</b> section, to modify the <b>Rule Chain.</b>'
    1:
        image: /
        title: '??? script'
    2:
        image: /
        title: 'On the <b>Rule Chain</b> edit page, in the Node search bar find the <b>"push to edge"</b> node. It pushes messages from Cloud to Edge. Drag and drop the node onto the <b>Rule Chain</b> sheet. Then, in the <b>"Add rule node"</b> pop-up window enter the node title and select the <b>"Shared attributes"</b> option in the <b>"Entity attributes scope"</b> field. Click the <b>"Add"</b> button to proceed.'
    3:
        image: /
        title: 'Connect the <b>“save attributes”</b> node to the <b>"push to edge"</b> node and set the <b>"Success"</b> link label. Click the <b>“Apply changes”</b> button in the <b>Rule Chain</b> sheet.'

checkResult:
    0:
        image: /
        title: 'Go to the <b>Entities > Devices</b> section of your <b>Edge</b> instance, and click on the device. On the <b>“Device details”</b> page, select the <b>"Attributes"</b> tab and <b>"Shared attributes"</b> option in the <b>"Client attributes"</b> drop-down menu. You should see received attributes.'

---

{% assign peDocsPrefix = "pe/" %}
{% assign docsPrefix = "pe/edge/" %}
{% include docs/edge/user-guide/config/subscribe-to-attribute.md %}