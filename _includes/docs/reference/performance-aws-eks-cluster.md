* TOC
{:toc}
<!-- This will parse content of HTML tags as markdown when uncomment {::options parse_block_html="true" /} -->

ThingsBoard is used in production by numerous companies in both [monolithic](/docs/{{docsPrefix}}reference/monolithic/)
and [microservices](/docs/{{docsPrefix}}reference/msa/) (msa) deployment modes. 

This article describes the performance that the ThingsBoard msa installation has shown in the most popular or extreme usage scenarios. The documentation is helpful to better understand how ThingsBoard scales horizontally (**clustering**), where and how one should tune the platform to cope with large device fleet.

## Test methodology

The goal is to test the ThingsBoard cluster resilience and performance while many agents provision and connect a configurable number of device emulators that constantly publish time-series data over MQTT. We used the AWS EKS infrastructure for ThingsBoard; the respective helm charts were exercised to simplify the deployment of 3rd parties (PostgreSQL, Cassandra, Kafka, Zookeeper, and Redis).

## Setup cluster on AWS EKS

We have prepared dedicated documentation on how to set up [ThingsBoard on AWS EKS cluster](/docs/{{docsPrefix}}reference/performance/setup-aws-eks-cluster).

## Setup performance test fleet

[Setup Performance test fleet](/docs/{{docsPrefix}}reference/performance/performance-test-fleet/)) to generate the load.

## Performance tests

### 100k devices, 20k data points per second

We spun x10 AWS EC2 `t3a.small` instances far away from the cluster to produce the load.

Dataflow comes from `performance-test` instances through the AWS load balancer and feeds the cluster using the `tb-mqtt-transport` service.

Cluster sizing and configurations for the above load are as follows:

| Node group | Instances (vCPU/Gi)   | Micro services        |
|------------|-----------------------|-----------------------|
| worker     | 3 * m6a.xlarge (4/16) | 3 * tb-core           |
|            |                       | 3 * tb-rule-engine    |
|            |                       | 3 * tb-mqtt-transport |
|            |                       | 6 * tb-js-executor    |
|            |                       | 6 * redis             |
| cassandra  | 3 * c6i.xlarge (4/8)  | 3 * cassandra         |
| postgresql | 3 * c6i.xlarge (4/8)  | 2 * postgresql        |
|            |                       | 1 * pgpool            |
| kafka      | 3 * c6i.large (2/4)   | 3 * zokeeper          |
|            |                       | 3 * kafka             |
|            |                       | 3 * tb-web-ui         |

The test was running for more than 24h. The platform handled the load just fine.

{% include images-gallery.html imageCollection="cluster-100k-6k-20k" %}

<details markdown="1">
<summary>
How to reproduce the Kubernetes cluster setup
</summary>

```bash
cat > cluster.yml
```
{: .copy-code}

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: performance-test
  region: eu-west-1

availabilityZones: ['eu-west-1a', 'eu-west-1b', 'eu-west-1c']

managedNodeGroups:
  - name: worker-xlarge
    labels: { role: worker }
    instanceType: m6a.xlarge
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
  - name: cassandra-xlarge
    labels: { role: cassandra }
    instanceType: c6i.xlarge
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
  - name: kafka
    labels: { role: kafka }
    instanceType: c6i.large
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
  - name: postgresql-xlarge
    labels: { role: postgresql }
    instanceType: c6i.xlarge
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
```
{: .copy-code}

```bash
eksctl create cluster -f cluster.yml
```
{: .copy-code}

</details>

### 100k devices, 30k data points per second

In this stage, we increased the received load to 30k data points per second. The system worked as expected. However, we noticed that
Kubernetes scheduled the PgPool to the same node as the PostgreSQL master. This event typically increases the CPU load to the maximum. To fix this fast, a new node group dedicated to PgPool should be launched:

| Node group | Instances (vCPU/Gi)    | Micro services |
|------------|------------------------|----------------|
| pgpool     | 1 * c6a.2xlarge (8/16) | 1 * pgpool     |

Here are some screenshots with the results: 

{% include images-gallery.html imageCollection="cluster-100k-10k-30k" %}

### 100k devices, 45k data points per second

Once finished with 30k dp/sec load we'd increased the load by 50% — up to 45k data points per second. With this capacity, the system remained stable. We saw that the CPU limits for PostgreSQL and Cassandra were almost reached.
Side Note: during the test, the PgPool consumed about 4 CPU cores, even more than PostgreSQL. It is probably related to some feature in the latest PgPool. We are going to investigate it later. The upgrade/downgrade is probably, a solution.
To recall, the ThingsBoard cluster has the following configurations:

| Node group | Instances (vCPU/Gi)    | Micro services        |
|------------|------------------------|-----------------------|
| worker     | 3 * m6a.xlarge (4/16)  | 3 * tb-core           |
|            |                        | 3 * tb-rule-engine    |
|            |                        | 3 * tb-mqtt-transport |
|            |                        | 6 * tb-js-executor    |
|            |                        | 6 * redis             |
| cassandra  | 3 * c6i.xlarge (4/8)   | 3 * cassandra         |
| postgresql | 2 * c6i.xlarge (4/8)   | 2 * postgresql        |
| pgpool     | 1 * c6a.2xlarge (8/16) | 1 * pgpool            |
| kafka      | 3 * c6i.large (2/4)    | 3 * zokeeper          |
|            |                        | 3 * kafka             |
|            |                        | 3 * tb-web-ui         |


{% include images-gallery.html imageCollection="cluster-100k-15k-45k" %}

### 300k devices, 15k data points per second

Afterward, we tested how the cluster handles the extreme number of TCP connections. By increasing the number of devices, we gained an above-average amount of connection. Initially, the test was running with 100k connections, and in this phase, this parameter raised by 200% — to 300k connections.

Here are screenshots for a short-run period as we moved to the next milestone quickly.

{% include images-gallery.html imageCollection="cluster-300k-5k-15k" %}

### 500k devices, 15k data points per second

We expected to get valuable insights and tried experimenting with new performance-test app parameters. Starting with half a million devices, things got more complicated, and the following sections will show you the challenges and solutions to a successful operation. 

#### Experiments 

Connecting the 500k failed using 3 nodes because out of TCP connections tracked.
You can check the connection status using via SSH on the worker node.

```bash
ulimit -n 1048576
sudo sysctl -a | grep conntrack_max
# net.netfilter.nf_conntrack_max = 131072
# net.nf_conntrack_max = 131072

# errors:
# sudo yum install -y ethtool 
ethtool -S eth0 | grep exceeded
# conntrack_allowance_exceeded: 39878822

# set maximum connection allowed until next restart
sudo sysctl -w net.netfilter.nf_conntrack_max=1048576
```

Let's try to spin another 3 nodes dedicated for transport, adding the following lines to the `cluster.yml`

```yaml
  - name: transport-large
    labels: { role: transport }
    instanceType: c6a.large
    desiredCapacity: 3
    volumeType: gp3
    volumeSize: 20
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
```
{: .copy-code}

```bash
eksctl create nodegroup --config-file=cluster.yml
```
{: .copy-code}

Let's move `tb-mqtt-transport` using node selector in `tb-mqtt-transport.yml`

```yaml
      nodeSelector:
        role: transport
```

Scaling up nodes in the transport node group

```bash
eksctl scale nodegroup --cluster=performance-test --nodes=6 --nodes-max=6 transport-large
```
{: .copy-code}

```bash
kubectl scale --replicas=6 sts tb-mqtt-transport
```
{: .copy-code}

Check the pod distribution across the nodes and roles:

```bash
kubectl get pods -o=custom-columns=ROLE:spec.nodeSelector.role,NODE:.spec.nodeName,POD:.metadata.name | tail +2 | sort
```
{: .copy-code}

Check the `conntrack_max` available:

```bash
kubectl exec -it tb-mqtt-transport-0 -- sysctl -a | grep conntrack_max
```
{: .copy-code}

Restart all pods affected on affected nodes that previously were along with `tb-mqtt-transport` service and were affected when connections on the node run out of limit.

```bash
kubectl rollout restart sts redis
# wait for restart
kubectl rollout restart sts tb-node tb-rule-engine tb-js-executor
```

Finally, let's config the `kube-proxy` to track one million connections.
```bash
kubectl edit -n kube-system configmap/kube-proxy-config
# conntrack:
#   min: 1048576
kubectl rollout restart -n kube-system daemonset kube-proxy
```

Wait for a `kube-proxy` restart on all nodes and check the max connections adjusted. 

```bash
kubectl get pods -w -n kube-system
# Ctrl + C when all in Running state
kubectl exec -it tb-mqtt-transport-0 -- sysctl -a | grep conntrack_max
# net.netfilter.nf_conntrack_max = 1048576
```

Note: when we were not set resources for the container, the Java application will show a single CPU available.
The Kubernetes cluster may have default resource limits. So it is better to assign resource limits and requests.
Sometimes applications choose parallelism level depending on CPU availability, so take care with this parameter.

Here are the screenshots with tunings

{% include images-gallery.html imageCollection="cluster-500k-5k-15k-experiments" %}

Rolling update for ThingsBoars MQTT transport leads to all devices reconnecting.
Here are the screenshots of how the cluster handles an entire reconnect issue at this moment.
It is a good point for the big scale to improve the [source code](https://github.com/thingsboard/thingsboard).

{% include images-gallery.html imageCollection="cluster-500k-5k-15k-reconnect-all" %}

#### Tuning Postgresql

We have to configure Postgresql to utilize all resources available.
For this purpose let's use a fancy [Postgresql online configurator](http://pgconfigurator.cybertec.at/).
All we need to do is to supply our parameters and get a resulting configuration.

The only thing we would like to add is a preloaded shared library `pg_stat_statements` for future query stat analysis.

```bash
cat > psql-override-conf.yml
```
{: .copy-code}

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: psql-override-conf
data:
  override.conf: |+
    # DISCLAIMER - Software and the resulting config files are provided "AS IS" - IN NO EVENT SHALL
    # BE THE CREATOR LIABLE TO ANY PARTY FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL
    # DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION.

    # Connectivity
    max_connections = 300
    superuser_reserved_connections = 3

    # Memory Settings
    shared_buffers = '2048 MB'
    work_mem = '64 MB'
    maintenance_work_mem = '320 MB'
    huge_pages = off
    effective_cache_size = '6 GB'
    effective_io_concurrency = 0   # concurrent IO only really activated if OS supports posix_fadvise function
    random_page_cost = 1.5 # speed of random disk access relative to sequential access (1.0)

    # Monitoring
    # NOTE: repmgr is required for cluster mode !!!
    shared_preload_libraries = 'repmgr, pgaudit, pg_stat_statements'    # per statement resource usage stats
    track_io_timing=on        # measure exact block IO times
    track_functions=pl        # track execution times of pl-language procedures if any

    # Replication
    wal_level = replica
    max_wal_senders = 10
    synchronous_commit = on

    # Checkpointing: 
    checkpoint_timeout  = '15 min' 
    checkpoint_completion_target = 0.9
    max_wal_size = '1024 MB'
    min_wal_size = '512 MB'

    # WAL archiving
    archive_mode = on # having it on enables activating P.I.T.R. at a later time without restart
    archive_command = '/bin/true'  # not doing anything yet with WAL-s

    # WAL writing
    wal_compression = on
    wal_buffers = -1    # auto-tuned by Postgres till maximum of segment size (16MB by default)
    wal_writer_delay = 200ms
    wal_writer_flush_after = 1MB
    wal_keep_size = '3650 MB'

    # Background writer
    bgwriter_delay = 200ms
    bgwriter_lru_maxpages = 100
    bgwriter_lru_multiplier = 2.0
    bgwriter_flush_after = 0

    # Parallel queries: 
    max_worker_processes = 4
    max_parallel_workers_per_gather = 2
    max_parallel_maintenance_workers = 2
    max_parallel_workers = 4
    parallel_leader_participation = on

    # Advanced features 

    enable_partitionwise_join = on
    enable_partitionwise_aggregate = on
    jit = on

    # General notes: 
    # We recommend not to use read-only replicas for scaling
    # Note that not all settings are automatically tuned. 
    #   Consider contacting experts at 
    #   https://www.cybertec-postgresql.com 
    #   for more professional expertise.    
---
```
{: .copy-code}

```bash
kubectl apply -f psql-override-conf.yml
```
{: .copy-code}

```bash
helm upgrade postgresql bitnami/postgresql-ha --version 9.2.1 \
 ...
  --set postgresql.extendedConfCM=psql-override-conf \
 ...
```

#### Final test

The goal is 500k devices, 5k messages per second, and 15k data points.

To gain the 500k connection in AWS EKS with Amazon Load Balancer, we can receive about 100k+ connections per `c6a.large` (2 CPU / 4 Gi) instance. 
Tuning the nodes using `kube-proxy` or `sysctl` has no effect because limits are on the network level (AWS security group tracked connection limit). 
See the [AWS Security group connection tracking and throttling](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html) for details.

Average connections per `tb-mqtt-transport` pod (and node as well) is about 500k / (5+1) = 83k.

Why are we using one more node and leaving the spare connections? It is all about fault tolerance.
During a single pod/pod restart, the rest of the 5 nodes can handle the load. So +1 node means that we tolerate 1 node failure.
You can add as many nodes as fault tolerance required in your cluster design.

The summary cluster config:

| Node group | Instances (vCPU/Gi)    | Micro services        |
|------------|------------------------|-----------------------|
| transport  | 6 * c6a.large (2/4)    | 6 * tb-mqtt-transport |
| worker     | 3 * m6a.xlarge (4/16)  | 3 * tb-core           |
|            |                        | 3 * tb-rule-engine    |
|            |                        | 6 * tb-js-executor    |
|            |                        | 6 * redis             |
| cassandra  | 3 * c6i.xlarge (4/8)   | 3 * cassandra         |
| postgresql | 2 * c6i.xlarge (4/8)   | 2 * postgresql        |
| pgpool     | 1 * c6a.2xlarge (8/16) | 1 * pgpool            |
| kafka      | 3 * c6i.large (2/4)    | 3 * kafka             |
|            |                        | 3 * zokeeper          |
|            |                        | 3 * tb-web-ui         |

Postgresql has been configured for better performance to utilize all resources available and handle the extensive data set.

Note: The Postgresql performance is low on 500k devices with standard settings. 
Without tuning the Postgresql, the only way to handle it is to make a tradeoff considering disabling persisting the latest telemetry value to the Postgresql. 
But this is not the way for this particular performance test.

We are generating load by x20 `t3a.small` instances of `performance-test` application using `run-test.sh` script to automate the process.

```bash
# 20 instances, 500 000 devices, 5 000 messages, 15 000 data points (SMART_METER)
DEVICES_PER_NODE=25000
MESSAGES_PER_NODE=250
ALARMS_PER_SECOND=1
```

Here are the screenshots with the results:

{% include images-gallery.html imageCollection="cluster-500k-5k-15k" %}

#### Cost-cutting

Is it cost-effective to pay about 1$/mo per 1000 connections for EC2 instances only? It all depends on your use case.
Probably you can **cut the expenses** using the **NodePort** service instead of LoadBalancer.
It needs to advertise the **node external IP address** to some **DNS service** using **initContainer** attached to `tb-mqtt-transport` pod.
Connecting directly to nodes will consider by AWS as **untracked** traffic, and your instance can handle about **1M TCP connections**.
On the application level, you probably will not put a 1M connections on a single instance because of **fault tolerance**.
In case of instance failure, it will lead to the 1M reconnect requests.
In the worst-case scenario, the MQTT clients will try to reconnect and auth immediately at the same time.
Does it sound like a self-made DDoS attack? Exactly!
That is not a good idea at all.
You can try to spin up many small and cheap `ARM` arch instances like `c7g.medium` (1CPU/2Gi) for 28$ (or 13$ reserved for 3 year).
And put about 130k connections each. It may cut the costs down to 1$ per 10k devices for MQTT connectivity.
Please, feel free to try and share your experience with [ThingsBoard's community](https://github.com/thingsboard/thingsboard/issues).

## Million devices

The goal is 1 million devices, 5k messages per second, and 15k data points per second.

We are scaling the Transport node group up to 12 instances.
Scaling up ThingsBoard core and rule engine up to 6.

```bash
eksctl scale nodegroup --cluster=performance-test --nodes=12 --nodes-max=12 transport-large
eksctl scale nodegroup --cluster=performance-test --nodes=6 --nodes-max=6 worker-xlarge
``` 
{: .copy-code}

We are applying hard (required) anti-affinity and node selector for the `tb-mqtt-transport` statefulset to have only one transport per node (EC2 instance).

```yaml
spec:
  nodeSelector:
    role: transport
  affinity:
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        - labelSelector:
            matchExpressions:
              - key: app
                operator: In
                values:
                  - tb-mqtt-transport
          topologyKey: kubernetes.io/hostname
```
{: .copy-code}

Maintain the memory setting for `tb-mqtt-transport` is 1 GiB only:

```yaml
JAVA_OPTS: "-Xmx1024M -Xms1024M -Xss256k -XX:+AlwaysPreTouch"
```

Scaling up ThingsBoard pods.

```bash
kubectl scale --replicas=12 sts tb-mqtt-transport
kubectl scale --replicas=6 sts tb-node tb-rule-engine
```
{: .copy-code}

Check pods layout on nodes by roles:

```bash
kubectl get pods -o=custom-columns=ROLE:spec.nodeSelector.role,NODE:.spec.nodeName,POD:.metadata.name | tail +2 | sort
```
{: .copy-code}

The summary cluster config:

| Node group | Instances (vCPU/Gi)    | Micro services         |
|------------|------------------------|------------------------|
| transport  | 12 * c6a.large (2/4)   | 12 * tb-mqtt-transport |
| worker     | 6 * m6a.xlarge (4/16)  | 6 * tb-core            |
|            |                        | 6 * tb-rule-engine     |
|            |                        | 6 * tb-js-executor     |
|            |                        | 6 * redis              |
| cassandra  | 3 * c6i.xlarge (4/8)   | 3 * cassandra          |
| postgresql | 2 * c6i.xlarge (4/8)   | 2 * postgresql         |
| pgpool     | 1 * c6a.2xlarge (8/16) | 1 * pgpool             |
| kafka      | 3 * c6i.large (2/4)    | 3 * kafka              |
|            |                        | 3 * zookeeper          |
|            |                        | 3 * tb-web-ui          |


We are generating MQTT load by x32 `t3a.small` instances of `performance-test` application using `run-test.sh` script to automate the process.

```bash
# 32 instances, 1 000 000 devices, 5 000 messages, 15 000 data points (SMART_METER)
DEVICES_PER_NODE=31250
MESSAGES_PER_NODE=157
ALARMS_PER_SECOND=1
```

Here are some resulting screenshots for the ThingsBoard 1 million device operation:

{% include images-gallery.html imageCollection="cluster-1-million-5k-15k" %}

## Conclusion

The [ThingsBoard](https://thingsboard.io/) is **cloud**-friendly and reliable IoT platform:
 - scalable - from one to millions of devices
 - distributed - payload are evenly distributed across instances
 - fault-tolerant - neighbor instances are taking over on unavailable parties
 - performant - CPU and memory effective
 - stable - long continuous run 
