---
layout: docwithnav
assignees:
- vbabak
title: Installing Thingsboard using Kubernetes (Google Cloud Platform)

---

* TOC
{:toc}

This guide will help you to deploy Thingsboard into cluster on Google Cloud Platform using [Kubernetes](https://kubernetes.io/).

## Installation steps

- [Install Cloud SDK](https://cloud.google.com/sdk/#Quick_Start)

- Make sure that you have [Google Cloud Platform account](https://console.cloud.google.com/) setup up and you have sufficient funds to create clusters

- Download the following files from thingsboard repo:
    1. **[common.yaml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/common/common.yaml) - Kubernetes config file for common resource (StorageClass etc.)
    1. **[cassandra.yaml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/cassandra/cassandra.yaml) - Kubernetes config file for Cassandra Service. By Default start 3 nodes
    1. **[zookeeper.yaml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/zookeeper/zookeeper.yaml) - Kubernetes config file for ZK Service. By Default start 3 nodes
    1. **[thingsboard.yaml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/thingsboard/thingsboard.yaml) - Kubernetes config file for Thingsboard Service. By Default start 3 nodes
    1. **[thingsboard-db-schema.yaml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/thingsboard-db-schema/thingsboard-db-schema.yaml) - Kubernetes config file for Pod that creates Thingsboard keyspace and tables inside Cassandra
      
```bash
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/cassandra/cassandra.yaml > cassandra.yaml
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/zookeeper/zookeeper.yaml > zookeeper.yaml
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/thingsboard/thingsboard.yaml > thingsboard.yaml
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/thingsboard-db-schema/thingsboard-db-schema.yaml > thingsboard-db-schema.yaml
```

- Create cluster using gcloud cli:

```bash
gcloud container clusters create <> --cluster-version=1.6.2
```

- Once started, you will be able to open Web UI using following link:

```bash
gcloud container node-pools create opscenter-pool --cluster=tb-test-cluster --node-labels=insttype=opscenter  --num-nodes=3 --machine-type=n1-standard-1 --disk-size=10
```

- Once started, you will be able to open Web UI using following link:

```bash
gcloud auth application-default login
```

- Once started, you will be able to open Web UI using following link:

```bash
kubectl create -f cassandra.yaml
```

- Once started, you will be able to open Web UI using following link:

```bash
kubectl create -f thingsboard-db-schema.yaml
```

- Once started, you will be able to open Web UI using following link:

```bash
kubectl create -f zookeeper.yaml
```

- Once started, you will be able to open Web UI using following link:

```bash
kubectl create -f thingsboard.yaml
```

- Once started, you will be able to open Web UI using following link:

```bash
gcloud container clusters delete tb-test-cluster
```

- Once started, you will be able to open Web UI using following link:

```bash
kubectl get services tb-service
```

- Once started, you will be able to open Web UI using following link:

```bash
kubectl get pods -w -l app=tb
```

- Once started, you will be able to open Web UI using following link:

```bash
NAME      READY     STATUS    RESTARTS   AGE
tb-0      1/1       Running   0          5s
tb-1      1/1       Running   0          3s
```

- Once started, you will be able to open Web UI using following link:

```bash
kubectl logs -f tb-0
```

- Once started, you will be able to open Web UI using following link:

```bash
2016-12-13 13:44:52,407 [main] INFO  o.t.s.ThingsboardServerApplication - Started ThingsboardServerApplication in 113.64 seconds (JVM running for 118.624)
```

- Once started, you will be able to open Web UI using following link:

```bash
NAME             CLUSTER-IP     EXTERNAL-IP    PORT(S)                                        AGE
tb-service      10.3.251.137   35.185.81.65   8080:31099/TCP,1883:32314/TCP,5683:30062/TCP   1m
```

- Once started, you will be able to open Web UI using following link:
   
```bash
http://EXTERNAL-IP:8080/
```

## Advanced usage

### common.yaml file

Common Kubernetes config file **common.yaml** contains next set of cloud resources:
 - StorageClass
 
### cassandra.yaml file

Cassandra Kubernetes config file **cassandra.yaml** contains next set of cloud resources:
 - Headless Service, exposes 9042 port, cassandra
 - StatefulSet cassandra
    podAntiAffinity
        securityContext:
          capabilities:
            add:
              - IPC_LOCK

### zookeeper.yaml file

Zookeeper Kubernetes config file **zookeeper.yaml** contains next set of cloud resources:
 - Headless Service, exposes 2888 and 3888 port, zk-headless
 - ConfigMap, contains set of configurations options that are pushed into zk images
 - PodDisruptionBudget, provides guarantee regarding minimum instances of the cluster
 - StatefulSet zk
    podAntiAffinity
 volume

### thingsboard.yaml file

Thingsboard Kubernetes config file **thingsboard.yaml** contains next set of cloud resources:
 - Loadbalancer Service, exposes 8080 and 1883 port 5683, tb-external-ip
 - ConfigMap, contains set of configurations options that are pushed into thingsboard images
 - PodDisruptionBudget, provides guarantee regarding minimum instances of the cluster
 - StatefulSet tb
    podAntiAffinity
 volume

### thingsboard-db-schema.yaml

Thingsboard Kubernetes config file **thingsboard-db-schema.yaml** contains next set of cloud resources:
 - Pod tb-db-schema, that runs once and creates Thingsboard keyspace and tables inside Cassandra service