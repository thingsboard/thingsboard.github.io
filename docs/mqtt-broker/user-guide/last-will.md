---
layout: docwithnav-mqtt-broker
title: Last Will and Testament
description: TBMQ Last Will and Testament guide

ws-connection-add-camera:
  0:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-add-camera-1.png
    title: 'Go to the WebSocket Client page and click the Select Connection, represented by the expand more icon.'
  1:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-add-camera-2.png
    title: 'Click on the button "Add new connection".'
  2:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-add-camera-3.png
    title: 'Set name as Security Camera. Click on the Last Will section.'
  3:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-add-camera-4.png
    title: 'Set Last Will topic ("sensors/lastwill"), payload type ("String"), payload message ("OFF"). Click "Connect".' 

ws-connection-add-hub:
  0:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-add-hub-1.png
    title: 'Open again the Select Connection panel and click on the button "Add new connection".'
  1:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-add-hub-2.png
    title: 'Set name as Security Hub.'
  2:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-add-hub-3.png
    title: 'To add a new subscription click on the icon button "Add Subscription".'
  3:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-add-hub-4.png
    title: 'Click "Add" to add subscription with default settings.'

ws-connection-ungraceful-disconnect:
  0:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-ungraceful-disconnect-1.png
    title: 'Click on Select Connection icon and open Security Camera session details.'
  1:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-ungraceful-disconnect-2.png
    title: 'Click Disconnect client.'  
  2:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-ungraceful-disconnect-3.png
    title: 'The client Security Hub should receive the Last Will message from the client Security Camera.'

---

{% include docs/mqtt-broker/user-guide/last-will.md %}
