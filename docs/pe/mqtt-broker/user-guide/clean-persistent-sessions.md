---
layout: docwithnav-pe-mqtt-broker
title: Non-Persistent and Persistent Sessions
description: Explaining MQTT sessions.

persistent-session-demo:
  0:
    image: /images/mqtt-broker/user-guide/ui/persistent-session-demo-1.png
    title: 'In a WebSocket Client connection: enable persistent session (disable Clean Start), set a Session Expiry Interval greater than zero, and click "Connect".'
  1:
    image: /images/mqtt-broker/user-guide/ui/persistent-session-demo-2.png
    title: 'Add a subscription to a topic "session/persistent" with QoS 1.'
  2:
    image: /images/mqtt-broker/user-guide/ui/persistent-session-demo-3.png
    title: 'Click the "Disconnect" button.'
  3:
    image: /images/mqtt-broker/user-guide/ui/persistent-session-demo-4.png
    title: 'Switch to another Client and publish several messages to the topic "session/persistent".'
  4:
    image: /images/mqtt-broker/user-guide/ui/persistent-session-demo-5.png
    title: 'Switch back to the "Persistent session demo" Client and click "Connect".'
  5:
    image: /images/mqtt-broker/user-guide/ui/persistent-session-demo-6.png
    title: 'After a successful connection, the Client receives the messages that were published while it was offline.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/mqtt-broker/user-guide/clean-persistent-sessions.md %}
