---
layout: docwithnav-mqtt-broker
title: Last Will and Testament
description: TBMQ Last Will and Testament guide

ws-connection-add-camera:
  0:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-add-1.png
    title: 'Go to the WebSocket Client page and click the Select Connection, represented by the expand more icon.'
  1:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-add-2.png
    title: 'Set name as Security Camera. Click on the Last Will section.'
  2:
    image: /images/mqtt-broker/features/last-will-add-connection-1.png
    title: 'Set Last Will topic (`sensors/last_will_status`), payload type (`String`), payload message (`OFF`). Click Connect.' 
  3:
    image: /images/mqtt-broker/features/last-will-add-connection-2.png
    title: 'You should see that a new connection has been added and connected.'

ws-connection-add-hub:
  0:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-add-hub-1.png
    title: 'Go to the WebSocket Client page and click the Select Connection, represented by the expand more icon.'
  1:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-add-hub-2.png
    title: 'Set name as Security Hub.'
  2:
    image: /images/mqtt-broker/features/last-will-add-connection-1.png
    title: 'Click Add Subscription and then click Add.'
  3:
    image: /images/mqtt-broker/features/last-will-add-connection-2.png
    title: 'You should see new connection added in the list of connections and connected.'

ws-connection-ungraceful-disconnect:
  0:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-ungraceful-disconnect-1.png
    title: 'Make sure the clients Security Camera and Security Hub are connected.'
  1:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-ungraceful-disconnect-2.png
    title: 'Make sure the clients Security Camera and Security Hub are connected.'  
  2:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-ungraceful-disconnect-1.png
    title: 'Find the session with the client ID the same as has the websocket connection Security Camera.'
  3:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-ungraceful-disconnect-3.png
    title: 'Click Disconnect client.'
  4:
    image: /images/mqtt-broker/user-guide/ui/ws-connection-ungraceful-disconnect-4.png
    title: 'In the table Messages of Security Hub you should see the received last will message.'
---

{% include docs/mqtt-broker/user-guide/last-will.md %}
