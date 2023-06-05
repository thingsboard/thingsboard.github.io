---
layout: docwithnav-mqtt-broker
title: ThingsBoard MQTT Broker performance tests
description: ThingsBoard MQTT Broker performance tests

broker-tests-aws-monitoring:
    0:
        image: /images/mqtt-broker/reference/aws/broker-ec2-1.png
        title: 'AWS EC2 1 Monitoring (Broker node 1)'
    1:
        image: /images/mqtt-broker/reference/aws/broker-ec2-2.png
        title: 'AWS EC2 2 Monitoring (Broker node 2)'
    2:
        image: /images/mqtt-broker/reference/aws/broker-ec2-3.png
        title: 'AWS EC2 3 Monitoring (Broker node 3)'
    3:
        image: /images/mqtt-broker/reference/aws/broker-ec2-4.png
        title: 'AWS EC2 4 Monitoring (Broker node 4)'
    4:
        image: /images/mqtt-broker/reference/aws/broker-ec2-5.png
        title: 'AWS EC2 5 Monitoring (Broker node 5)'
    5:
        image: /images/mqtt-broker/reference/aws/aws-rds-stats.png
        title: 'AWS RDS Monitoring'
    6:
        image: /images/mqtt-broker/reference/aws/aws-msk-stats.png
        title: 'AWS MSK Monitoring'

broker-tests-jmx-monitoring:
    0:
        image: /images/mqtt-broker/reference/jmx/broker-jmx-1.png
        title: 'TB MQTT Broker example 1 JMX'
    1:
        image: /images/mqtt-broker/reference/jmx/broker-jmx-2.png
        title: 'TB MQTT Broker example 2 JMX'
    2:
        image: /images/mqtt-broker/reference/jmx/broker-jmx-3.png
        title: 'TB MQTT Broker example 3 JMX'

broker-topics-monitoring:
    0:
        image: /images/mqtt-broker/reference/topics/mqtt-pub-topic.png
        title: 'Publish msg topic - received all 11,400M messages'
    1:
        image: /images/mqtt-broker/reference/topics/mqtt-app-topic-1.png
        title: 'Application topic example 1 - received all 22.8M messages'
    2:
        image: /images/mqtt-broker/reference/topics/mqtt-app-topic-2.png
        title: 'Application topic example 2 - received all 22.8M messages'
---

{% include docs/mqtt-broker/reference/performance-tests.md %}