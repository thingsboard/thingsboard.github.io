---
layout: docwithnav
assignees:
- vbabak
title: Installing Thingsboard using Kubernetes (on Google Cloud Platform)

---

* TOC
{:toc}

This guide will help you to deploy Thingsboard into cluster on Google Cloud Platform using [Kubernetes](https://kubernetes.io/).

## Installation steps

- [Install Cloud SDK](https://cloud.google.com/sdk/#Quick_Start)

- Make sure that you have [Google Cloud Platform account](https://console.cloud.google.com/) activated and you have sufficient funds to create clusters and provision instances.

- Download the following files from thingsboard repo:
    1. **[common.yaml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/common/common.yaml) - Kubernetes config file for common resources (StorageClass etc.).
    1. **[cassandra.yaml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/cassandra/cassandra.yaml) - Kubernetes config file for Cassandra Service. By Default start 3 nodes.
    1. **[zookeeper.yaml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/zookeeper/zookeeper.yaml) - Kubernetes config file for ZK Service. By Default start 3 nodes.
    1. **[tb.yaml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/tb/tb.yaml) - Kubernetes config file for Thingsboard Service. By Default starts 2 nodes.
    1. **[tb-cassandra-schema.yaml](https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/tb-cassandra-schema/tb-cassandra-schema.yaml) - Kubernetes config file for Pod that creates Thingsboard keyspace and tables inside Cassandra storage.
      
```bash
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/common/common.yaml > common.yaml
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/cassandra/cassandra.yaml > cassandra.yaml
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/zookeeper/zookeeper.yaml > zookeeper.yaml
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/tb/tb.yaml > tb.yaml
curl -L https://raw.githubusercontent.com/thingsboard/thingsboard/release-1.2.4/docker/tb-cassandra-schema/tb-cassandra-schema.yaml > tb-cassandra-schema.yaml
```

- Create cluster using gcloud cli (cluster version minimum 1.6.2 required and for demo purpose 6 standard nodes to properly deploy cluster pods):

```bash
gcloud container clusters create YOUR_CLUSTER_NAME --cluster-version=1.6.2 --node-labels=machinetype=tb --num-nodes=2
```

- Create additional node pool for Cassandra and Zookeeper PODs:

```bash
gcloud container node-pools create cassandra-pool --cluster=YOUR_CLUSTER_NAME --node-labels=machinetype=other --num-nodes=3 --disk-size=10
```

- Create default credentials file on your local machine:

```bash
gcloud auth application-default login
```

- Create common resources that are used by other resources:

```bash
kubectl create -f common.yaml
```

- Provision cassandra cluster:

```bash
kubectl create -f cassandra.yaml
```

- Monitor provisioning of Cassandra Pods by executing following command:

```bash
kubectl get pods -w -l app=cassandra
```

- Please wait until all 3 Pods of Cassandra service become *Running*:

```bash
NAME             READY     STATUS    RESTARTS   AGE
cassandra-0      1/1       Running   0          5s
cassandra-1      1/1       Running   0          3s
cassandra-2      1/1       Running   0          3s
```

- Once Cassandra Pods are running please provision Pod that will create Thingsboard schema and tables inside Cassandra storage:

```bash
kubectl create -f tb-cassandra-schema.yaml
```

- Provision zookeeper Service:

```bash
kubectl create -f zookeeper.yaml
```

- Provision Thingsboard Service:

```bash
kubectl create -f tb.yaml
```

- Execute next command to see status of Thingsboard Pods:

```bash
kubectl get pods -w -l app=tb
```

- Thingsboard Pods should become into *Running* status:

```bash
NAME      READY     STATUS    RESTARTS   AGE
tb-0      1/1       Running   0          5s
tb-1      1/1       Running   0          3s
```

- Once Thingsboard Pods are in 'Running' status check logs of first Pod to make sure that everything is OK:

```bash
kubectl logs -f tb-0
```

- Thingsboard container is successfully started once similar line appears in the log:

```bash
2016-12-13 13:44:52,407 [main] INFO  o.t.s.ThingsboardServerApplication - Started ThingsboardServerApplication in 113.64 seconds (JVM running for 118.624)
```

- To obtain external IP of Thingsboard Service execute:

```bash
kubectl get services tb-service
```

- In the response something similar should appear:

```bash
NAME             CLUSTER-IP     EXTERNAL-IP    PORT(S)                                        AGE
tb-service      10.3.251.137   35.185.81.65   8080:31099/TCP,1883:32314/TCP,5683:30062/TCP   1m
```

- Now you are be able to open Web UI using following link:
   
```bash
http://EXTERNAL-IP:8080/
```

- To delete the entire cluster execute following command:

```bash
gcloud container clusters delete tb-test-cluster
```

## Advanced usage

### common.yaml file

Common Kubernetes config file **common.yaml** contains next set of cloud resources:
 - *StorageClass*. These resources are used by Cassandra and ZK Services as volume storage definitions
 
### cassandra.yaml file

Cassandra Kubernetes config file **cassandra.yaml** contains next set of cloud resources:
 - *Headless Service*. Service exposes 9042 port for the Cassandra Pods and guarantee network identity for them.
 - *StatefulSet*. Set is responsible for provisioning Cassandra Pods onto Cloud Nodes.
   - *podAntiAffinity*. This property guarantees that Cassandra Pods are deployed to different Nodes.

### zookeeper.yaml file

Zookeeper Kubernetes config file **zookeeper.yaml** contains next set of cloud resources:
 - *Headless Service*. Service exposes 2888 and 3888 ports for the ZK Pods and guarantee network identity for them.
 - *ConfigMap*. Contains set of configurations options that are pushed into ZK images.
 - *PodDisruptionBudget*. Guarantees minimum instances of the cluster that must be up and running.
 - *StatefulSet*. Set is responsible for provisioning ZK Pods onto Cloud Nodes.
   - *podAntiAffinity*. This property guarantees that ZK Pods are deployed to different Nodes.

### tb.yaml file

Thingsboard Kubernetes config file **tb.yaml** contains next set of cloud resources:
 - *Loadbalancer Service*. Service that exposes 8080, 1883 and 5683 ports of Thingsboard cluster to external world using external IP.
 - *ConfigMap*. Contains set of configurations options that are pushed into Thingsboard images.
 - *PodDisruptionBudget*. Guarantees minimum instances of the cluster that must be up and running.
 - *StatefulSet*. Set is responsible for provisioning Thingsboard Pods onto Cloud Nodes.
   - *podAntiAffinity*. This property guarantees that Thingsboard Pods are deployed to different Nodes.

### tb-cassandra-schema.yaml

Thingsboard Kubernetes config file **tb-cassandra-schema.yaml** contains next set of cloud resources:
 - *Pod* that runs once and creates Thingsboard keyspace and tables inside Cassandra storage