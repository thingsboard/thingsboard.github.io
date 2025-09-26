TBMQ requires a running Kafka cluster. You can set up Kafka in two ways:

* **Deploy a self-managed Apache Kafka cluster**
* **Deploy a managed Kafka cluster with the Strimzi Operator**

Choose the option that best fits your environment and operational needs.

### Option 1. Deploy an Apache Kafka Cluster

* Runs as a **StatefulSet** with 3 pods in **KRaft dual-role mode** (each node acts as both controller and broker).
* Suitable if you want a lightweight, self-managed Kafka setup.
* [See the full deployment guide here](./kafka/apache/README.md) !!!🔧 FIX LINK when final path is confirmed!!!

**Quick steps:**

```bash
kubectl apply -f kafka/tb-kafka.yml
```
{: .copy-code}

Update TBMQ configuration files (`tb-broker.yml` and `tbmq-ie.yml`) and uncomment the section marked:

```yaml
# Uncomment the following lines to connect to Apache Kafka
```

### Option 2. Deploy a Kafka Cluster with the Strimzi Operator

* Uses the **Strimzi Cluster Operator** for Kubernetes to manage Kafka.
* Provides easier upgrades, scaling, and operational management.
* [See the full deployment guide here](./kafka/strimzi/README.md) !!!🔧 FIX LINK when final path is confirmed!!!

**Quick steps:**

Install the Strimzi operator:

```bash
helm install tbmq-kafka -f kafka/operator/values-strimzi-kafka-operator.yaml oci://quay.io/strimzi-helm/strimzi-kafka-operator --version 0.47.0
```
{: .copy-code}

Deploy the Kafka cluster:

```bash
kubectl apply -f kafka/operator/kafka-cluster.yaml
```
{: .copy-code}

Update TBMQ configuration files (`tb-broker.yml` and `tbmq-ie.yml`) and uncomment the section marked:

```yaml
# Uncomment the following lines to connect to Strimzi
```
