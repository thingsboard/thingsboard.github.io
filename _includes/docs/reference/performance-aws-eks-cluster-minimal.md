* TOC
{:toc}
<!-- This will parse content of HTML tags as markdown when uncomment {::options parse_block_html="true" /} -->

# ThingsBoard k8s cluster - minimal design

Today I will tell you how to make a minimal Kubernetes (k8s) cluster for ThingsBoard with a complete application stack

## Requirements

What are the tasks for the cluster?
  * fault tolerance
  * scalability
  * Self-managed databases
  * Backup and maintenance
  * Monitoring and alerts

## Cluster architecture

A minimal cluster requires at least 3 nodes in independent zones (AZ) within the same region.
Node configuration is 4 vCPUs / 32G DDR5 (r7g.xlarge). ARM architecture is for energy saving.

## Total ownership cost - TOC

Hardware costs 3 x 125$ (1 Yr reserved r7g.xlarge) = 375$.
For other cloud provider costs (storage, traffic, k8s, load balancer, etc.) let's estimate a maximum of 50% of the hardware.
Total cloud costs 375 * 1.5 = 563$/mo.
With 100k devices per cluster, TOC is 0.6 cents per device monthly for the cloud, with no labor costs included.

## Performance results

Load: 100k devices, 20k data points per second

The fancy graphics below:

...

## Conclusions

2023 IoT winner
The best IoT choice award
Easy to cloud nominated
Skyrocket approved

## TL;DR Deep dive in details

### Pod distribution across the cluster

Pods distribution by AZ with limits with CPU and memory limits:

| Zone A                  | Zone B                  | Zone C                  | limit.cpu | limit.memory |
|-------------------------|-------------------------|-------------------------|-----------|--------------|
| tb-core                 | tb-core                 | tb-core                 | 2         | 3            |
| tb-rule-engine          | tb-rule-engine          | tb-rule-engine          | 3         | 3            |
| tb-js-executor          | tb-js-executor          | tb-js-executor          | 1         | 0.5          |
| tb-js-executor          | tb-js-executor          | tb-js-executor          | 1         | 0.5          |
| tb-http-transport       | tb-http-transport       | tb-http-transport       | 1         | 1            |
| tb-mqtt-transport       | tb-mqtt-transport       | tb-mqtt-transport       | 1         | 1            |
| tb-web-ui               | tb-web-ui               | tb-web-ui               | 1         | 0.5          |
| tb-vc-executor          | tb-vc-executor          | tb-vc-executor          | 1         | 1            |
| tb-integration-executor | tb-integration-executor | tb-integration-executor | 1         | 1            |
| Postgresql              | Postgresql              | Postgresql              | 3         | 4            |
| Pgpool                  |                         |                         | 1         | 1            |
| Kafka                   | Kafka                   | Kafka                   | 3         | 2            |
| Cassandra               | Cassandra               | Cassandra               | 3         | 4            |
| Redis-master-A          | Redis-master-B          | Redis-master-C          | 1         | 1            |
| Redis-slave-C           | Redis-slave-A           | Redis-slave-B           | 1         | 1            |
| Zookeeper               | Zookeeper               | Zookeeper               | 1         | 1            |
| Kafka-exporter          | Pgpool-exporter         |                         | 1         | 0.5          |
| Prometheus              | Prometheus              | Prometheus              | 1         | 1            |
| Grafana                 | Grafana                 | Grafana                 | 1         | 1            |
| Cassandra-reaper        | Kafka-ui                |                         | 1         | 1            |
| Backup-job              | Backup-job              | Backup-job              | 1         | 1            |
|                         |                         | Total                   | 30        | 30           |

### Considerations

We will use x10 fewer cpu requests and exact 1:1 memory requests.
CPU overprovisioning is fine for small productions, as those are mostly idle.
Scalability: the easiest way to scale up is to upgrade the instance type adding more CPUs (8/32, 16/32)  
Pod distribution is implemented mainly with an anti-affinity policy. If you scale up nodes over 3, you must adjust anti-affinity rules.
Fault tolerance: 1 of 3 nodes can go down at a time.
The average CPU max load has to be lower than 2/3 (66%) to tolerate a single node outage event.
When your nodes have an average load of 50%, it is time to add more CPUs.
Please, set up Grafana alerts to get notified by messenger on cluster health. Cloud Grafana (outside your cluster, provider, continent, etc.) will be a smart choice for reliable alerts.

### Setup cluster test

...