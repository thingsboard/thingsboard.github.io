---
layout: docwithnav-pe-mqtt-broker
title: "Scaling P2P Messaging to 1M Msg/sec with Persistent MQTT Clients"
description: 1M msg/sec throughput One-to-one messaging utilizing persistent DEVICE clients as subscribers

tbmq-p2p-test-aws-infrastructure:
  0:
    image: /images/mqtt-broker/reference/p2p-test/aws-instances.png
    title: 'AWS EC2 instances deployed'
  1:
    image: /images/mqtt-broker/reference/p2p-test/eks-pods.png
    title: 'AWS EKS cluster pods running'  

tbmq-p2p-test-monitoring:
  0:
    image: /images/mqtt-broker/reference/p2p-test/tbmq-aws.png
    title: 'AWS EC2 TBMQ monitoring'
  1:
    image: /images/mqtt-broker/reference/p2p-test/tbmq-visual-vm-jmx.png
    title: 'Visual VM JMX TBMQ monitoring'
  2:
    image: /images/mqtt-broker/reference/p2p-test/redis-monitoring.png
    title: 'Redis Insight Monitoring: Handling ~5M Commands/sec and Managing ~2.5M Keys'
  3:
    image: /images/mqtt-broker/reference/p2p-test/tbmq-total-connected-clients.png
    title: 'TBMQ 1M connected clients'
  4:
    image: /images/mqtt-broker/reference/p2p-test/tbmq-total-subscriptions.png
    title: 'TBMQ 500k subscriptions QoS 1'  

---

{% assign docsPrefix = "pe/" %}
{% include docs/mqtt-broker/reference/1m-throughput-p2p-performance-test.md %}