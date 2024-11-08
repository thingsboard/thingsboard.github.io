---
layout: docwithnav-edge
title: Subscribe to Attribute Updates on Edge from the Cloud
description: Subscribe to Attribute Updates on Edge from the Cloud Server

routeMessagesToCloud:
    0:
        image: /
        title: 'Log in to the <b>ThingsBoard Cloud</b> and go to the <b>Edge management > Rule chain templates</b> section and click on the <b>Rule chain</b> assigned to your <b>Edge instance.</b>'
    1:
        image: /
        title: 'On the <b>Rule Chain</b> edit page, in the Node search bar find the <b>"push to cloud"</b> node. It pushes messages from Edge to Cloud. Drag and drop the node onto the <b>Rule Chain</b> sheet. Then, in the <b>"Add rule node"</b> pop-up window enter the node title and select the <b>"Client attributes"</b> option in the <b>"Entity attributes scope"</b> field. Click the <b>"Add"</b> button to proceed.'
    2:
        image: /
        title: ''
---
{% assign docsPrefix = "edge/" %}
{% include docs/edge/user-guide/config/subscribe-to-attribute.md %}