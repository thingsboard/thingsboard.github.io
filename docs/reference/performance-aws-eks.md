---
layout: docwithnav
title: ThingsBoard Performance on Kubernetes cluster on AWS EKS
description: ThingsBoard Performance on Kubernetes cluster on AWS EKS

cluster-100k-6k-20k:
    0:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/100k-6k-20k/api-usage.png
        title: 'Thingsboard API usage for cluster'
    1:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/100k-6k-20k/queue-stats.png
        title: 'Thingsboard queue stats for cluster of 3 rule engines'
    2:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/100k-6k-20k/cluster-nodes-cpu-usage.png  
        title: 'Thingsboard cluster Kubernetes nodes CPU usage'
    3:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/100k-6k-20k/postgresql-pgadmin-dashboard.png
        title: 'Postgresql PgAdmin dashboard'
    4:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/100k-6k-20k/cluster-volumes-write-throughput.png
        title: 'Thingsboard cluster Kubernetes write throughput (Ops/s)'

cluster-100k-10k-30k:
    0:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/100k-10k-30k/queue-stats.png
        title: 'Thingsboard queue stats for cluster of 3 rule engines'

cluster-100k-15k-45k:
    0:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/100k-15k-45k/api-usage.png
        title: 'Thingsboard API usage for cluster'
    1:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/100k-15k-45k/queue-stats.png
        title: 'Thingsboard queue stats for cluster of 3 rule engines'
    2:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/100k-15k-45k/cluster-nodes-cpu-usage.png  
        title: 'Thingsboard cluster Kubernetes nodes CPU usage'
    3:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/100k-15k-45k/postgresql-pgadmin-dashboard.png
        title: 'Postgresql PgAdmin dashboard'
    4:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/100k-15k-45k/cluster-volumes-write-throughput.png
        title: 'Thingsboard cluster Kubernetes write throughput (Ops/s)'

cluster-300k-5k-15k:
    0:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/300k-5k-15k/queue-stats.png
        title: 'Thingsboard queue stats for cluster of 3 rule engines'
    1:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/300k-5k-15k/cluster-nodes-cpu-usage.png  
        title: 'Thingsboard cluster Kubernetes nodes CPU usage'
    2:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/300k-5k-15k/tb-mqtt-transport-low-heap-memory-jmx-visualvm.png
        title: 'Thingsboard MQTT Transport hing CPU on garbage collector - it is a good sign to increase the heap memory'

cluster-500k-5k-15k-experiments:
    0:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k-experiments/queue-stats-500k-5k-15k-first-look.png
        title: 'Thingsboard queue stats for cluster with 500k MQTT connections at first try'
    1:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k-experiments/conntrack_allowance_exceeded.png
        title: 'Conntrack allowance exceeded on AWS EC2 instance using ethtool'
    2:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k-experiments/conntrack_max.png
        title: 'Set the conntrack_max once on AWS EC2 instance to allow more 1M TCP connection tracking on linux'
    3:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k-experiments/kube-proxy-edit-configmap-conntrack-min.png
        title: 'Kube-proxy edit configmap to set conntrack.min up to 1M for each Kubernetes node'
    4:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k-experiments/open-file-descriptor-count-issue-jmx-mqtt-transport.png
        title: 'Open file descriptors count under JMX connection to the tb-mqtt-transport pod - investigating the issue with max connection tracked'
    5:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k-experiments/pod-distribution-across-nodes-and-roles.png
        title: 'Pod distribution across nodes and node roles used for nodeSelector'
    6:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k-experiments/postgresql-on-pgconfigurator-cybertec-at-for-4cpu-8gib.png
        title: 'Postgresql on pgconfigurator.cybertec.at for 4 vCPU and 8GiB memory to utilize 100% compute resources'
    7:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k-experiments/skip-latest-persistence-feature.png
        title: 'Performance tradeoff to skip latest persistence (feature of ThingsBoard SaveTelemetry rule node). Used to fast investigate Postgresql bottleneck if exist'
    8:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k-experiments/available-processor-one-jmx-when-no-resources-limit-defined.png
        title: 'JMX shows that only a single processor available on multiprocessor instance when resource limit and request not set'

cluster-500k-5k-15k-reconnect-all:
    0:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k-reconnect-all/reconnect-all-issue-kafka-lag-on-transport-api.png
        title: 'ThingsBoard MQTT transport - reconnect all - Kafka lag on transport API queue'
    1:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k-reconnect-all/reconnect-all-queue-stats-recovery-progress.png
        title: 'ThingsBoard MQTT transport - reconnect all - queue stats recovery progress'
    2:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k-reconnect-all/reconnect-all-mqtt-transport-jmx-recovery-progress.png
        title: 'ThingsBoard MQTT transport - reconnect all - reconnect progress on JMX open file descriptors'

cluster-500k-5k-15k:
    0:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k/api-usage.png
        title: 'Thingsboard API usage for cluster with 500k devices'
    1:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k/queue-stats.png
        title: 'Thingsboard queue stats for cluster with 500k devices'
    2:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k/postgresql-pgadmin-dashboard.png
        title: 'Postgresql PgAdmin dashboard'
    3:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k/cluster-nodes-cpu-usage.png  
        title: 'Thingsboard cluster Kubernetes nodes CPU usage'
    4:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k/cluster-volumes-write-throughput.png
        title: 'Thingsboard cluster Kubernetes write throughput (Ops/s)'
    5:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k/device-list-500k.png
        title: 'Device list with 500k smart meters'
    6:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k/tb-mqtt-transport-stats-open-connections.png
        title: 'ThingsBoard MQTT transport stats - open connections on a single transport pod'
    7:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/500k-5k-15k/performance-test-20-t3a-small-instances.png
        title: 'x20 Performance test instances to generate the load'

one-million-5k-15k:
    0:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/1million-5k-15k/queue-stats.png
        title: 'Thingsboard queue stats for cluster with 1 million devices'
    1:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/1million-5k-15k/million-devices-created.png
        title: 'Million device list'
    2:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/1million-5k-15k/pod-distribution-across-nodes-and-roles.png  
        title: 'Pod distribution across the nodes by roles'
    3:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/1million-5k-15k/tb-mqtt-transport-connected.png
        title: 'Thingsboard MQTT transport 83k devices connected on a single pod'
    4:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/1million-5k-15k/connected-successfully.png
        title: 'Transports connected successfully'
    5:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/1million-5k-15k/run-performance-test-from-32-instances.png
        title: 'Run performance test from 32 instances'
---

{% include /docs/reference/performance-kubernetes-cluster-aws-eks.md %}
