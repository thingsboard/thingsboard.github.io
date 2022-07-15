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
    5:
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
    5:
        image: /images/reference/performance-kubernetes-cluster-aws-eks/100k-15k-45k/cluster-volumes-write-throughput.png
        title: 'Thingsboard cluster Kubernetes write throughput (Ops/s)'

---

{% include /docs/reference/performance-kubernetes-cluster-aws-eks.md %}
