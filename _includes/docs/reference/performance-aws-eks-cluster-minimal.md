* TOC
{:toc}
<!-- This will parse content of HTML tags as markdown when uncomment {::options parse_block_html="true" /} -->

# ThingsBoard k8s cluster - minimal design

Today we will show you how to make a minimal Kubernetes (k8s) cluster for ThingsBoard with a complete application stack

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

Hardware costs 3 x 135$ (1 Yr reserved r7g.xlarge) = 405$.

For other cloud provider costs (storage, traffic, k8s, load balancer, etc.) let's estimate a maximum of 50% of the hardware.

Total cloud costs 405 * 1.5 = 608$/mo.

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
| tb-core                 | tb-core                 | tb-core                 | 3         | 3            |
| tb-rule-engine          | tb-rule-engine          | tb-rule-engine          | 3         | 3.5          |
| tb-js-executor          | tb-js-executor          | tb-js-executor          | 1         | 0.5          |
| tb-http-transport       | tb-http-transport       | tb-http-transport       | 1         | 1            |
| tb-mqtt-transport       | tb-mqtt-transport       | tb-mqtt-transport       | 1         | 1.5          |
| tb-web-ui               | tb-web-ui               | tb-web-ui               | 0.5       | 0.5          |
| tb-vc-executor          | tb-vc-executor          | tb-vc-executor          | 1         | 1            |
| tb-integration-executor | tb-integration-executor | tb-integration-executor | 1         | 1            |
| Postgresql              | Postgresql              | Postgresql              | 3         | 4            |
| Pgpool                  |                         |                         | 1         | 1            |
| Kafka                   | Kafka                   | Kafka                   | 3         | 2            |
| Cassandra               | Cassandra               | Cassandra               | 3         | 4            |
| Redis-master-A          | Redis-master-B          | Redis-master-C          | 1         | 1            |
| Redis-slave-C           | Redis-slave-A           | Redis-slave-B           | 1         | 1            |
| Zookeeper               | Zookeeper               | Zookeeper               | 0.5       | 0.5          |
| Kafka-exporter          | Pgpool-exporter         |                         | 0.5       | 0.5          |
| Prometheus              | Prometheus              | Prometheus              | 1         | 1            |
| Grafana                 | Grafana                 | Grafana                 | 1         | 1            |
| Cassandra-reaper        | Kafka-ui                |                         | 1         | 1            |
| Backup-job              | Backup-job              | Backup-job              | 1         | 1            |
|                         |                         | Total                   | 30        | 30           |

### Considerations

We will use x10 fewer cpu requests and exact 1:1 memory requests.
CPU over provisioning is fine for small productions, as those are mostly idle.
Scalability: the easiest way to scale up is to upgrade the instance type adding more CPUs (8/32, 16/32)  
Pod distribution is implemented mainly with an anti-affinity policy. 
If you scale up nodes over 3, you must adjust anti-affinity rules.
Pod disruption budget will be deployed with maxUnavailable equals one.  
Fault tolerance: 1 of 3 nodes can go down at a time.
The average CPU max load has to be lower than 2/3 (66%) to tolerate a single node outage event.
When your nodes have an average load of 50%, it is time to add more CPUs.
Please, set up Grafana alerts to get notified by messenger on cluster health. Cloud Grafana (outside your cluster, provider, continent, etc.) will be a smart choice for reliable alerts.

### Setup cluster test

Setup 3-node cluster on AWS with `Kubernetes 1.25` on AWS EKS.

Life hack #1: adjust filesystem limits. Default limits may be set depends on your instance size.
Life hack #2: 

<details markdown="1">
<summary>
Setup cluster with eksctl tool
</summary>

```bash
cat > cluster.yml
```
{: .copy-code}

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: tb-basic
  region: eu-west-1
  version: "1.25"

availabilityZones: ['eu-west-1a', 'eu-west-1b', 'eu-west-1c']

managedNodeGroups:
  - name: thingsboard-x64
    labels: { role: thingsboard }
    instanceType: r6a.xlarge
    desiredCapacity: 3
    maxPodsPerNode: 32
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
    preBootstrapCommands:
      - echo 'Starting custom preBootstrapCommands'
      - echo 'fs.file-max = 16777216' | sudo tee -a /etc/sysctl.conf
      - echo 'fs.nr_open = 16777216' | sudo tee -a /etc/sysctl.conf
      - echo 'Reloading sysctl (sysctl.conf)'
      - sudo sysctl -p
      - echo 'Setting security limits'
      - echo '*                soft    nofile          16777216' | sudo tee -a /etc/security/limits.conf
      - echo '*                hard    nofile          16777216' | sudo tee -a /etc/security/limits.conf
      - echo 'root             soft    nofile          16777216' | sudo tee -a /etc/security/limits.conf
      - echo 'root             hard    nofile          16777216' | sudo tee -a /etc/security/limits.conf
      - echo '*                soft    nproc          16777216' | sudo tee -a /etc/security/limits.conf
      - echo '*                hard    nproc          16777216' | sudo tee -a /etc/security/limits.conf
      - echo 'root             soft    nproc          16777216' | sudo tee -a /etc/security/limits.conf
      - echo 'root             hard    nproc          16777216' | sudo tee -a /etc/security/limits.conf
      - echo 'Reloading sysctl (sysctl.conf)'
      - sudo sysctl -p
      - echo 'End of custom preBootstrapCommands'
```
{: .copy-code}

```bash
eksctl create cluster -f cluster.yml
```
{: .copy-code}

In 15 minutes cluster is ready

```
2023-05-08 15:01:31 [✔]  EKS cluster "tb-basic" in "eu-west-1" region is ready
```

```bash
k get nodes -o wide
```
{: .copy-code}

```
NAME                                           STATUS   ROLES    AGE   VERSION               INTERNAL-IP      EXTERNAL-IP     OS-IMAGE         KERNEL-VERSION                   CONTAINER-RUNTIME
ip-192-168-1-231.eu-west-1.compute.internal    Ready    <none>   55m   v1.25.7-eks-a59e1f0   192.168.1.231    52.18.227.121   Amazon Linux 2   5.10.178-162.673.amzn2.aarch64   containerd://1.6.19
ip-192-168-36-245.eu-west-1.compute.internal   Ready    <none>   54m   v1.25.7-eks-a59e1f0   192.168.36.245   54.229.69.248   Amazon Linux 2   5.10.178-162.673.amzn2.aarch64   containerd://1.6.19
ip-192-168-68-51.eu-west-1.compute.internal    Ready    <none>   54m   v1.25.7-eks-a59e1f0   192.168.68.51    3.252.62.97     Amazon Linux 2   5.10.178-162.673.amzn2.aarch64   containerd://1.6.19
```

Tip: Additional `eksctl` commands that might be useful

```bash
eksctl create nodegroup --config-file=cluster.yml
eksctl delete nodegroup client-arm --cluster=tb-basic
eksctl scale nodegroup --cluster=tb-basic --nodes=0 --nodes-min=0 --nodes-max=3 server-arm
eksctl scale nodegroup --cluster=tb-basic --nodes=24 --nodes-min=0 --nodes-max=24 client-arm
```
{: .copy-code}

</details>

Finally, lets config the `kube-proxy` to track few million connections. It will provide stable parameters no matter which instances you choose.
```bash
kubectl edit -n kube-system configmap/kube-proxy-config
# conntrack:
#   min: 16777216
kubectl rollout restart -n kube-system daemonset kube-proxy
```

### GP3 storage on AWS EKS

General Purpose (GP2) storage with a small volume size is quite slow relatively to the modern GP3.
GP3 is provided 3000 IOPS and 125 MB/s throughput for each persistent volume with no additional cost.
It is enough to gain top performance needed for our services.

**Important**! Please, do not skip this step. Otherwise, you will face the major performance issue in a mean time.
With GP2 you probably face with extra costs when you order the same IOPS and throughput as GP3 provided as a base level wand only charge you for the disk space claimed.

Another important property of gp3 storage class is ability for volume expansion.

Durability for `gp3` is `99.9%` annually if just fine for basic cluster as we might survive 1 of 3 zones down. If you need more durable [EBS storage](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#vol-type-ssd) for some reason, please consider `io2` as it claims `x100` durability compare to `gp3`.

Install [gp3 storage class on AWS EKS](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html)

Here some notes, but we advise you to use the up-to-date AWS user guide and follow each step precise and carefully.

Note: Replace `378560561651` with your id.

```bash
eksctl utils associate-iam-oidc-provider --cluster=tb-basic --approve

eksctl create iamserviceaccount \
  --cluster tb-basic \
  --name ebs-csi-controller-sa \
  --namespace kube-system \
  --attach-policy-arn arn:aws:iam::378560561651:policy/AmazonEKS_EBS_CSI_Driver_Policy \
  --approve

aws cloudformation describe-stacks \
  --stack-name eksctl-tb-basic-addon-iamserviceaccount-kube-system-ebs-csi-controller-sa \
  --query='Stacks[].Outputs[?OutputKey==`Role1`].OutputValue' \
  --output text

helm upgrade --install aws-ebs-csi-driver aws-ebs-csi-driver/aws-ebs-csi-driver \
  --namespace kube-system \
  --set controller.serviceAccount.create=false \
  --set controller.serviceAccount.name=ebs-csi-controller-sa
```
{: .copy-code}

As result, you will see 
```bash
k get pods -n kube-system | grep ebs
```
{: .copy-code}

```
ebs-csi-controller-587f5768b4-8wfnc   5/5     Running   0          78s
ebs-csi-controller-587f5768b4-hwn4v   5/5     Running   0          78s
ebs-csi-node-5tq75                    3/3     Running   0          78s
ebs-csi-node-8klh8                    3/3     Running   0          78s
ebs-csi-node-xj7v4                    3/3     Running   0          78s
```

Create storage class gp3 and make it default

```bash
cat > gp3-def-sc.yaml
```
{: .copy-code}

```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: gp3
  annotations:
    storageclass.kubernetes.io/is-default-class: "true"
allowVolumeExpansion: true
provisioner: ebs.csi.aws.com
volumeBindingMode: WaitForFirstConsumer
parameters:
  type: gp3
```
{: .copy-code}

```bash
kubectl apply -f gp3-def-sc.yaml
```
{: .copy-code}

Make gp2 storage class non-default
```bash
kubectl patch storageclass gp2 -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```
{: .copy-code}

Check the storage class available
```bash
kubectl get sc
# NAME            PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
# gp2             kubernetes.io/aws-ebs   Delete          WaitForFirstConsumer   false                  46m
# gp3 (default)   ebs.csi.aws.com         Delete          WaitForFirstConsumer   true                   14s
```
{: .copy-code}

### Create ThingsBoard's namespace

```bash
cat > tb-namespace.yml
```
{: .copy-code}

```yaml
apiVersion: v1
kind: Namespace
metadata: 
  name: thingsboard
  labels:
    name: thingsboard
---
```
{: .copy-code}

Create namespace for ThingsBoard, set current context as `thingsboard`

```bash
kubectl config current-context
kubectl apply -f tb-namespace.yml
kubectl get namespaces
kubectl config set-context --current --namespace=thingsboard
kubectl get pods -o wide
```
{: .copy-code}


### Setup Helm and Bitnami repo

Setup helm
```bash
sudo apt install helm
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update bitnami
helm list
```
{: .copy-code}

We are going to use Bitnami docker images and Bitnami helm charts as well.

### Prometheus and Grafana setup

Prepare Grafana instance yaml. You may change default `admin_password` with yours.

```bash
cat > grafana-instance.yml
```
{: .copy-code}

```yaml
apiVersion: integreatly.org/v1alpha1
kind: Grafana
metadata:
  name: grafana
  labels:
    app: grafana
spec:
  config:
    log:
      mode: "console"
    auth:
      disable_signout_menu: true
    auth.anonymous:
      enabled: false
    security:
      admin_user: admin
      admin_password: admin
  dashboardLabelSelector:
    - matchExpressions:
        - key: app
          operator: In
          values:
            - grafana
---
apiVersion: integreatly.org/v1alpha1
kind: GrafanaDataSource
metadata:
  name: prometheus-datasource
  labels:
    app: grafana
spec:
  name: prometheus-datasource.yaml
  datasources:
    - name: Prometheus
      type: prometheus
      access: proxy
      jsonData:
        timeInterval: 5s
        tlsSkipVerify: true
      url: http://prometheus-operated:9090
---
apiVersion: integreatly.org/v1alpha1
kind: GrafanaDashboard
metadata:
  name: k8s-system-api-server
spec:
  url: https://raw.githubusercontent.com/dotdc/grafana-dashboards-kubernetes/master/dashboards/k8s-system-api-server.json
---
apiVersion: integreatly.org/v1alpha1
kind: GrafanaDashboard
metadata:
  name: k8s-system-coredns
  labels:
    app: grafana
spec:
  url: https://raw.githubusercontent.com/dotdc/grafana-dashboards-kubernetes/master/dashboards/k8s-system-coredns.json
---
apiVersion: integreatly.org/v1alpha1
kind: GrafanaDashboard
metadata:
  name: k8s-views-global
  labels:
    app: grafana
spec:
  url: https://raw.githubusercontent.com/dotdc/grafana-dashboards-kubernetes/master/dashboards/k8s-views-global.json
---
apiVersion: integreatly.org/v1alpha1
kind: GrafanaDashboard
metadata:
  name: k8s-views-namespaces
  labels:
    app: grafana
spec:
  url: https://raw.githubusercontent.com/dotdc/grafana-dashboards-kubernetes/master/dashboards/k8s-views-namespaces.json
---
apiVersion: integreatly.org/v1alpha1
kind: GrafanaDashboard
metadata:
  name: k8s-views-nodes
  labels:
    app: grafana
spec:
  url: https://raw.githubusercontent.com/dotdc/grafana-dashboards-kubernetes/master/dashboards/k8s-views-nodes.json
---
apiVersion: integreatly.org/v1alpha1
kind: GrafanaDashboard
metadata:
  name: k8s-views-pods
  labels:
    app: grafana
spec:
  url: https://raw.githubusercontent.com/dotdc/grafana-dashboards-kubernetes/master/dashboards/k8s-views-pods.json
---
apiVersion: integreatly.org/v1alpha1
kind: GrafanaDashboard
metadata:
  name: kafka-exporter-dashboard
  labels:
    app: grafana
spec:
  url: https://grafana.com/api/dashboards/7589/revisions/1/download
```
{: .copy-code}

Install Prometheus and Grafana Operator, then deploy Grafana instance with dashboards  

```bash
helm upgrade --install prometheus bitnami/kube-prometheus \
  --set prometheus.persistence.enabled=true \
  --set prometheus.persistence.size=20Gi
helm upgrade --install grafana bitnami/grafana-operator --set grafana.enabled=false
# wait for a minute
kubectl apply -f grafana-instance.yml
# wait for a minute
kubectl port-forward svc/grafana-service 3000
# http://localhost:3000
# login: admin admin
```


```bash
cat > grafana-ingress.yml
```
{: .copy-code}

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: grafana-ingress
  namespace: thingsboard
  annotations:
    name: grafana-ingress
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
spec:
  rules:
    - http:
        paths:
          - path: /*
            pathType: ImplementationSpecific
            backend:
              service:
                name: grafana-service
                port:
                  number: 3000
---
```
{: .copy-code}

```bash
kubectl apply -f grafana-ingress.yml
kubectl get ingress grafana-ingress
# NAME                   CLASS    HOSTS   ADDRESS                                                                   PORTS   AGE
# tb-http-loadbalancer   <none>   *       k8s-thingsbo-tbhttplo-784e0efb43-1467549612.eu-west-1.elb.amazonaws.com   80      12m
```
{: .copy-code}

### Setup databases with Helm

We are going to use Bitnami docker images and Bitnami helm charts as well

Setup [Kafka cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/kafka)
```bash
helm upgrade --install kafka bitnami/kafka \
  --set replicaCount=3 \
  --set offsetsTopicReplicationFactor=3 \
  --set transactionStateLogReplicationFactor=3 \
  --set defaultReplicationFactor=2 \
  --set metrics.kafka.enabled=true \
  --set metrics.serviceMonitor.enabled=true\
  --set persistence.size=20Gi \
  --set resources.requests.cpu=300m \
  --set resources.requests.memory=2Gi \
  --set resources.limits.cpu=3000m \
  --set resources.limits.memory=2Gi \
  --set podAntiAffinityPreset=hard \
  --set pdb.create=true \
  --set pdb.maxUnavailable=1
```

### Kafka Web UI

Installing [Redpanda Console – UI for Kafka](https://github.com/redpanda-data/console)

```bash
cat > kafka-ui-redpanda.yml
```
{: .copy-code}

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: kafka-ui-redpanda
spec:
  serviceName: kafka-ui-redpanda
  replicas: 1
  selector:
    matchLabels:
      app: kafka-ui-redpanda
  template:
    metadata:
      labels:
        app: kafka-ui-redpanda
    spec:
      containers:
        - name: server
          imagePullPolicy: IfNotPresent
          image: docker.redpanda.com/redpandadata/console:latest
          resources:
            requests:
              cpu: 50m
              memory: 500Mi
            limits:
              cpu: 500m
              memory: 500Mi
          ports:
            - containerPort: 8080
              name: http8080
          env:
            - name: KAFKA_BROKERS
              value: "kafka-headless:9092" # put your broker here
      restartPolicy: Always
```
{: .copy-code}

```bash
kubectl apply -f kafka-ui-redpanda.yml
kubectl port-forward kafka-ui-redpanda-0 8080:8080
```

If Kafka UI do not needed, scale it down:

```bash
kubectl scale --replicas=0 statefulset kafka-ui-redpanda
```
{: .copy-code}

### Pod distribution check

Let's check that all kafka pods are evenly distributed across the nodes: 

```bash
k get pods -o wide | grep kafka | sort -k 7
```
{: .copy-code}

All three Kafka brokers are landed to different nodes. This is because of hard anti-affinity rule.

```
kafka-ui-redpanda-0                                             1/1     Running   0                7s      192.168.4.67     ip-192-168-11-8.eu-west-1.compute.internal     <none>           <none>
kafka-1                                                         1/1     Running   0                10m     192.168.21.111   ip-192-168-11-8.eu-west-1.compute.internal     <none>           <none>
kafka-exporter-569c985bbf-nhx6v                                 1/1     Running   0                18s     192.168.10.114   ip-192-168-11-8.eu-west-1.compute.internal     <none>           <none>
kafka-2                                                         1/1     Running   0                10m     192.168.54.235   ip-192-168-57-176.eu-west-1.compute.internal   <none>           <none>
kafka-0                                                         1/1     Running   0                10m     192.168.73.251   ip-192-168-93-212.eu-west-1.compute.internal   <none>           <none>
```

### Setup Zookeeper service discovery

We are going to use Bitnami docker images and Bitnami helm charts as well.

Setup [Zookeeper cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/zookeeper)

```bash
helm upgrade --install zookeeper bitnami/zookeeper \
  --set replicaCount=3 \
  --set persistence.size=1Gi \
  --set dataLogDir="/bitnami/zookeeper/log" \
  --set persistence.dataLogDir.size=1Gi \
  --set heapSize=256 \
  --set autopurge.purgeInterval=24 \
  --set jvmFlags="-Dzookeeper.electionPortBindRetry=0" \
  --set resources.requests.cpu=50m \
  --set resources.requests.memory=512Mi \
  --set resources.limits.cpu=500m \
  --set resources.limits.memory=512Mi \
  --set metrics.enabled=true \
  --set metrics.serviceMonitor.enabled=true \
  --set podAntiAffinityPreset=hard \
  --set pdb.create=true \
  --set pdb.maxUnavailable=1
```
{: .copy-code}

### Setup Cassandra database

Setup [Cassandra cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/cassandra)
```bash
helm upgrade --install cassandra bitnami/cassandra \
  --set replicaCount=3 \
  --set persistence.size=50Gi \
  --set persistence.commitLogsize=2Gi \
  --set persistence.commitLogMountPath=/bitnami/cassandra/commitlog \
  --set cluster.name=cassandra \
  --set cluster.datacenter=datacenter1 \
  --set cluster.seedCount=3 \
  --set jvm.maxHeapSize=2048M \
  --set jvm.newHeapSize=400M \
  --set resources.requests.cpu=300m \
  --set resources.requests.memory=4Gi \
  --set resources.limits.cpu=3000m \
  --set resources.limits.memory=4Gi \
  --set metrics.enabled=true \
  --set metrics.serviceMonitor.enabled=true \
  --set metrics.serviceMonitor.namespace=thingsboard \
  --set podAntiAffinityPreset=hard \
  --set pdb.create=true \
  --set pdb.minAvailable=0 \
  --set pdb.maxUnavailable=1
  
```
{: .copy-code}

### Setup Redis cache

Setup [Redis cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/redis-cluster)
```bash
helm install redis bitnami/redis-cluster \
  --set cluster.nodes=6 \
  --set cluster.replicas=1 \
  --set redis.useAOFPersistence=no \
  --set fullnameOverride=redis \
  --set redis.resources.requests.cpu=100m \
  --set redis.resources.requests.memory=1Gi \
  --set redis.resources.limits.cpu=1000m \
  --set redis.resources.limits.memory=1Gi \
  --set redis.podAntiAffinityPreset=soft \
  --set persistence.size=2Gi \
  --set podDisruptionBudget.maxUnavailable=1 \
  --set metrics.enabled=true \
  --set metrics.serviceMonitor.enabled=true
```
{: .copy-code}

### Setup PostgreSQL cluster


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
    # override conf https://www.cybertec-postgresql.com
    synchronous_commit = off
    shared_buffers = '1024 MB'
    work_mem = '32 MB'
    maintenance_work_mem = '320 MB'
    huge_pages = try
    effective_cache_size = '2 GB'   # 1/2 of total memory, 3/4 is agressive but still good
```

```bash
kubectl apply -f psql-override-conf.yml
```
{: .copy-code}


Setup [Postgres cluster from Bitnami Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/postgresql-ha)
```bash
helm install postgresql bitnami/postgresql-ha \
  --set fullnameOverride=postgresql \
  --set postgresql.database=thingsboard \
  --set postgresql.replicaCount=3 \
  --set postgresql.maxConnections=250 \
  --set postgresql.sharedPreloadLibraries='pgaudit\,repmgr\,pg_stat_statements' \
  --set pgpool.replicaCount=1 \
  --set pgpool.numInitChildren=200 \
  --set pgpool.useLoadBalancing=false \
  --set persistence.size=30Gi \
  --set postgresqlImage.debug=true \
  --set pgpoolImage.debug=true \
  --set postgresql.resources.requests.cpu=300m \
  --set postgresql.resources.requests.memory=4Gi \
  --set postgresql.resources.limits.cpu=3000m \
  --set postgresql.resources.limits.memory=4Gi \
  --set pgpool.resources.requests.cpu=100m \
  --set pgpool.resources.requests.memory=1Gi \
  --set pgpool.resources.limits.cpu=1000m \
  --set pgpool.resources.limits.memory=1Gi \
  --set postgresql.readinessProbe.enabled=false \
  --set postgresql.startupProbe.enabled=true \
  --set postgresql.startupProbe.failureThreshold=100 \
  --set postgresql.podAntiAffinityPreset=hard \
  --set pgpool.podAntiAffinityPreset=hard \
  --set metrics.enabled=true \
  --set metrics.serviceMonitor.enabled=true \
  --set postgresql.pdb.create=true \
  --set postgresql.pdb.minAvailable=0 \
  --set postgresql.pdb.maxUnavailable=1 \
  --set postgresql.extendedConfCM=psql-override-conf
```
{: .copy-code}

Tip: to upgrade

```
export POSTGRES_PASSWORD=$(kubectl get secret --namespace thingsboard postgresql-postgresql -o jsonpath="{.data.password}" | base64 -d)
export REPMGR_PASSWORD=$(kubectl get secret --namespace thingsboard postgresql-postgresql -o jsonpath="{.data.repmgr-password}" | base64 -d)

helm upgrade postgresql bitnami/postgresql-ha \
    --set postgresql.password=[POSTGRES_PASSWORD] \
    --set postgresql.repmgrPassword=[REPMGR_PASSWORD]
```

### Pod disruption budget

```bash
kubectl get pdb
```
```
NAME                    MIN AVAILABLE   MAX UNAVAILABLE   ALLOWED DISRUPTIONS   AGE
cassandra               N/A             1                 1                     3h54m
kafka                   N/A             1                 1                     3h51m
postgresql-postgresql   N/A             1                 1                     7m6s
redis                   N/A             1                 1                     3h2m
zookeeper               N/A             1                 1                     3h52m
```

### Install the ThingsBoard schema

Persist common settings

```bash
cat > tb-cm.yml 
```
{: .copy-code}

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: tb-cluster-stack-config
  labels:
    name: tb-cluster-stack-config
data:
  # PostgreSQL
  SPRING_JPA_DATABASE_PLATFORM: org.hibernate.dialect.PostgreSQLDialect
  SPRING_DRIVER_CLASS_NAME: org.postgresql.Driver
  SPRING_DATASOURCE_URL: jdbc:postgresql://postgresql-pgpool:5432/thingsboard
  SPRING_DATASOURCE_USERNAME: postgres
  SQL_BATCH_SORT: "true"                        # default false
  SQL_TS_LATEST_BATCH_SIZE: "1000"
  SQL_TS_LATEST_BATCH_MAX_DELAY_MS: "20"
  SQL_TS_BATCH_MAX_DELAY_MS: "20"
  SQL_ATTRIBUTES_BATCH_MAX_DELAY_MS: "20"
  # Kafka
  TB_QUEUE_TYPE: "kafka"
  TB_KAFKA_SERVERS: "kafka-headless:9092"
  TB_QUEUE_KAFKA_REPLICATION_FACTOR: "2" # IMPORTANT for CLUSTER
  TB_KAFKA_ACKS: "1"
  TB_KAFKA_BATCH_SIZE: "65536" # default is 16384 - it helps to produce messages much efficiently
  TB_KAFKA_LINGER_MS: "5" # default is 1
  TB_KAFKA_COMPRESSION_TYPE: "gzip" # none or gzip
  TB_QUEUE_KAFKA_MAX_POLL_RECORDS: "4096" # default is 8192
  TB_QUEUE_KAFKA_JE_TOPIC_PROPERTIES: "partitions:12;retention.ms:604800000;segment.bytes:26214400;retention.bytes:104857600" # have to be multiple to tb-js-executor replicas count
  TB_QUEUE_KAFKA_TA_TOPIC_PROPERTIES: "partitions:12;retention.ms:604800000;segment.bytes:26214400;retention.bytes:104857600" # have to be multiple to tb-core (tb-node) replicas count
  TB_QUEUE_CORE_PARTITIONS: "6"
  TB_QUEUE_RE_MAIN_PARTITIONS: "6" # since 3.4 you have to login under sysadmin and change /settings/queues or use API
  TB_QUEUE_RE_HP_PARTITIONS: "6" # since 3.4 you have to login under sysadmin and change /settings/queues or use API
  TB_QUEUE_RE_SQ_PARTITIONS: "6" # since 3.4 you have to login under sysadmin and change /settings/queues or use API
  TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS: "30000"
  TB_QUEUE_CORE_PACK_PROCESSING_TIMEOUT_MS: "20000"
  TB_QUEUE_RE_MAIN_CONSUMER_PER_PARTITION: "false"
  TB_QUEUE_RE_HP_CONSUMER_PER_PARTITION: "false"
  TB_QUEUE_RE_SQ_CONSUMER_PER_PARTITION: "false"
  ACTORS_SYSTEM_RULE_DISPATCHER_POOL_SIZE: "4"
  # Zookeeper
  ZOOKEEPER_ENABLED: "true"
  ZOOKEEPER_URL: "zookeeper-headless:2181"
  # Cassandra
  DATABASE_TS_TYPE: "cassandra"
  TS_KV_PARTITIONING: "MONTHS" # MONTHS
  USE_TS_KV_PARTITIONING_ON_READ: "false"
#  DATABASE_TS_LATEST_TYPE: "cassandra" # this is a key difference
  PERSIST_STATE_TO_TELEMETRY: "true"
  CASSANDRA_URL: "cassandra-headless:9042"
  CASSANDRA_CLUSTER_NAME: "cassandra" # see https://github.com/bitnami/charts/blob/master/bitnami/cassandra/values.yaml
  CASSANDRA_LOCAL_DATACENTER: "datacenter1" # see https://github.com/bitnami/charts/blob/master/bitnami/cassandra/values.yaml
  CASSANDRA_USE_CREDENTIALS: "true"
  CASSANDRA_USERNAME: "cassandra"
  CASSANDRA_READ_CONSISTENCY_LEVEL: "QUORUM" # IMPORTANT for the CLUSTER data consistency
  CASSANDRA_WRITE_CONSISTENCY_LEVEL: "QUORUM" # IMPORTANT for the CLUSTER data consistency
  CASSANDRA_QUERY_BUFFER_SIZE: "1000000"
  CASSANDRA_QUERY_CONCURRENT_LIMIT: "500"
  CASSANDRA_QUERY_POLL_MS: "5"
  # Redis
  CACHE_TYPE: "redis"
  REDIS_CONNECTION_TYPE: "cluster"
  REDIS_NODES: "redis-headless:6379"
  REDIS_USE_DEFAULT_POOL_CONFIG: "false"
  REDIS_POOL_CONFIG_BLOCK_WHEN_EXHAUSTED: "false"
  REDIS_POOL_CONFIG_TEST_ON_BORROW: "false"
  REDIS_POOL_CONFIG_TEST_ON_RETURN: "false"
  CACHE_MAXIMUM_POOL_SIZE: "50"
  # JS executors
  JS_EVALUATOR: "remote"
  REMOTE_JS_MAX_PENDING_REQUESTS: "100000"
  REMOTE_JS_MAX_EVAL_REQUEST_TIMEOUT: "60000"
  REMOTE_JS_MAX_REQUEST_TIMEOUT: "60000"
  REMOTE_JS_SANDBOX_MAX_ERRORS: "100000"
  REMOTE_JS_SANDBOX_MAX_BLACKLIST_DURATION_SEC: "1"
  # Common settings
  HTTP_LOG_CONTROLLER_ERROR_STACK_TRACE: "false"
  HTTP_BIND_PORT: "8080"
  # Cache specs
  #1M devices
  CACHE_SPECS_DEVICES_MAX_SIZE: "1048000" # default is 10000
  CACHE_SPECS_DEVICE_CREDENTIALS_MAX_SIZE: "1048000" # default is 10000 
  CACHE_SPECS_SESSIONS_MAX_SIZE: "1048000" # default is 10000
  TS_KV_PARTITIONS_MAX_CACHE_SIZE: "4194000" # default is 100000
  # Device state service
  DEFAULT_INACTIVITY_TIMEOUT: "1800" # defailt is 600 sec (10min)
  DEFAULT_STATE_CHECK_INTERVAL: "900" # default is 60 sec(1min)
  TB_TRANSPORT_SESSIONS_REPORT_TIMEOUT: "60000" # default is 3000 msec
  TB_TRANSPORT_SESSIONS_INACTIVITY_TIMEOUT: "600000" # default is 300000 msec
  #Transport API
  TB_QUEUE_TRANSPORT_MAX_PENDING_REQUESTS: "1000000" # default is 10k
  # Edge
  EDGES_ENABLED: "false"
  # etc
  JSON_TYPE_CAST_ENABLED: "false"
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: tb-node-config
  labels:
    name: tb-node-config
data:
  conf: |
    export JAVA_OPTS="$JAVA_OPTS -Dplatform=deb -Dinstall.data_dir=/usr/share/thingsboard/data"
    export JAVA_OPTS="$JAVA_OPTS -Xlog:gc*,heap*,age*,safepoint=debug:file=/var/log/thingsboard/gc.log:time,uptime,level,tags:filecount=10,filesize=10M"
    export JAVA_OPTS="$JAVA_OPTS -XX:+IgnoreUnrecognizedVMOptions -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/log/thingsboard/heapdump.bin"
    export JAVA_OPTS="$JAVA_OPTS -XX:-UseBiasedLocking -XX:+UseTLAB -XX:+ResizeTLAB -XX:+PerfDisableSharedMem -XX:+UseCondCardMark"
    export JAVA_OPTS="$JAVA_OPTS -XX:+UseG1GC -XX:MaxGCPauseMillis=500 -XX:+UseStringDeduplication -XX:+ParallelRefProcEnabled -XX:MaxTenuringThreshold=10"
    export JAVA_OPTS="$JAVA_OPTS -XX:+ExitOnOutOfMemoryError"
    export LOG_FILENAME=thingsboard.out
    export LOADER_PATH=/usr/share/thingsboard/conf,/usr/share/thingsboard/extensions
  logback: |
    <!DOCTYPE configuration>
    <configuration scan="true" scanPeriod="10 seconds">
        <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
            <encoder>
                <pattern>%d{ISO8601} [%thread] %-5level %logger{36} - %msg%n</pattern>
            </encoder>
        </appender>
        <logger name="org.thingsboard.server" level="INFO" />
        <logger name="com.google.common.util.concurrent.AggregateFuture" level="OFF" />
        
        <logger name="com.microsoft.azure.servicebus.primitives.CoreMessageReceiver" level="OFF" />
        <logger name="org.apache.kafka.common.utils.AppInfoParser" level="WARN"/>
        <logger name="org.apache.kafka.clients" level="WARN"/>
        
        <!-- Top Rule Nodes by max execution time DEBUG-->
        <logger name="org.thingsboard.server.service.queue.TbMsgPackProcessingContext" level="INFO" />
        <root level="INFO">
            <appender-ref ref="STDOUT"/>
        </root>
    </configuration>
---
```
{: .copy-code}

Apply config map
```bash
kubectl apply -f tb-cm.yml
```
{: .copy-code}

Prepare database setup yaml

```bash
cat > tb-db-setup.yml 
```
{: .copy-code}

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: tb-db-setup
spec:
  securityContext:
    runAsUser: 799
    runAsNonRoot: true
    fsGroup: 799
  volumes:
    - name: tb-node-config
      configMap:
        name: tb-node-config
        items:
          - key: conf
            path: thingsboard.conf
          - key: logback
            path: logback.xml
    - name: tb-node-logs
      emptyDir: {}
  containers:
    - name: tb-db-setup
      imagePullPolicy: Always
      image: thingsboard/tb-node:3.5.0
      # command: [ '/bin/sh', '-c', 'sleep infinity' ] # for database upgrade
      env:
        - name: TB_SERVICE_ID
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: INSTALL_TB
          value: "true"
        - name: LOAD_DEMO
          value: "true"
        - name: REDIS_PASSWORD
          valueFrom:
            secretKeyRef:
              name: redis
              key: redis-password
        - name: CASSANDRA_PASSWORD
          valueFrom:
            secretKeyRef:
              name: cassandra
              key: cassandra-password
        - name: SPRING_DATASOURCE_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgresql-postgresql
              key: password
      envFrom:
        - configMapRef:
            name: tb-cluster-stack-config
      volumeMounts:
        - mountPath: /config
          name: tb-node-config
        - mountPath: /var/log/thingsboard
          name: tb-node-logs
  restartPolicy: Never
---
```
{: .copy-code}

Install the ThingsBoard schema, follow logs and cleanup.

```bash
kubectl apply -f tb-db-setup.yml
kubectl logs -f tb-db-setup
kubectl delete pod tb-db-setup
```
{: .copy-code}

The output end will look like the below:
```bash
Starting ThingsBoard Installation...
Installing DataBase schema for entities...
Installing SQL DataBase schema part: schema-entities.sql
Installing SQL DataBase schema indexes part: schema-entities-idx.sql
Installing SQL DataBase schema PostgreSQL specific indexes part: schema-entities-idx-psql-addon.sql
Installing DataBase schema for timeseries...
Installing Cassandra DataBase schema part: schema-ts.cql
Loading system data...
Loading demo data...
Installation finished successfully!
pod "tb-db-setup" deleted
```
{: .copy-code}

### Fault tolerance

**IMPORTANT**. Make **Cassandra** fault tolerance by increasing **replication factor up to 3** with **full repair**.
This will guarantee that we can tolerate 1 Cassandra node outage (restart, out of disk, out of memory, crush, etc.) with no downtime for the ThingsBoard cluster for any read/write operations.
There are two keyspace to upgrade:
* system_auth (authorization and internal authentication data)
    * thingsboard (ThingsBoard's data)

```bash
$ kubectl exec -it cassandra-0 -- /bin/bash
I have no name!@cassandra-0:/$ cqlsh -u ${CASSANDRA_USER} -p ${CASSANDRA_PASSWORD} ${POD_IP}
cassandra@cqlsh> DESC KEYSPACE system_auth;
cassandra@cqlsh> ALTER KEYSPACE system_auth WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };
cassandra@cqlsh> DESC KEYSPACE thingsboard;
cassandra@cqlsh> ALTER KEYSPACE thingsboard WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };
cassandra@cqlsh> exit
I have no name!@cassandra-0:/$ exit
```

When increasing replication factor you need to run a full (-full) repair to distribute the data.
Repair needs to be run one by one on each Cassandra node. As we have a new cluster, the repair process takes a few seconds per node.
```bash
for i in {0..2}; do kubectl exec -it cassandra-${i} -- nodetool repair --full ; done
```
{: .copy-code}

**IMPORTANT**. Make sure that your ThingsBoard cluster have a **Cassandra consistency** read/write **level** **QUORUM** (for SimpleStrategy) or **LOCAL_QUORUM** (for NetworkTopologyStrategy)!
See the example from configmap:
```yaml
  CASSANDRA_READ_CONSISTENCY_LEVEL: "QUORUM" # IMPORTANT for the CLUSTER data consistency
  CASSANDRA_WRITE_CONSISTENCY_LEVEL: "QUORUM" # IMPORTANT for the CLUSTER data consistency
```
{: .copy-code}


### Deploy ThingsBoard services

Prepare ThingsBoard services yaml

```bash
cat > tb-services.yml 
```
{: .copy-code}

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: tb-node
spec:
  serviceName: tb-node
  podManagementPolicy: Parallel
  replicas: 3
  selector:
    matchLabels:
      app: tb-node
  template:
    metadata:
      labels:
        app: tb-node
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
                - key: app
                  operator: In
                  values:
                    - tb-node
            topologyKey: kubernetes.io/hostname
      securityContext:
        runAsUser: 799
        runAsNonRoot: true
        fsGroup: 799
      volumes:
        - name: tb-node-config
          configMap:
            name: tb-node-config
            items:
              - key: conf
                path:  thingsboard.conf
              - key: logback
                path:  logback.xml
        - name: tb-node-logs
          emptyDir: {}
      containers:
        - name: tb-node
          imagePullPolicy: Always
          image: thingsboard/tb-node:3.5.0
          ports:
            - containerPort: 8080
              name: http
            - containerPort: 7070
              name: edge
          resources:
            requests:
              cpu: 300m
              memory: 3Gi
            limits:
              cpu: 3000m
              memory: 3Gi
          env:
            - name: JAVA_OPTS
              value: "-Xmx2048M -Xms2048M -Xss384k -XX:+AlwaysPreTouch -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
            - name: TB_SERVICE_TYPE
              value: "tb-core"
            - name: TB_SERVICE_ID
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: TB_HOST
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: REDIS_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: redis
                  key: redis-password
            - name: CASSANDRA_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: cassandra
                  key: cassandra-password
            - name: SPRING_DATASOURCE_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: postgresql-postgresql
                  key: password
            - name: HTTP_ENABLED
              value: "false"
            - name: MQTT_ENABLED
              value: "false"
            - name: COAP_ENABLED
              value: "false"
            - name: SNMP_ENABLED
              value: "false"
            - name: LWM2M_ENABLED
              value: "false"
          envFrom:
            - configMapRef:
                name: tb-cluster-stack-config
          volumeMounts:
            - mountPath: /config
              name: tb-node-config
            - mountPath: /var/log/thingsboard
              name: tb-node-logs
          startupProbe:
            httpGet:
              path: /login
              port: http
            initialDelaySeconds: 30
            periodSeconds: 10
            timeoutSeconds: 10
            successThreshold: 1
            failureThreshold: 10
          livenessProbe:
            httpGet:
              path: /login
              port: http
            initialDelaySeconds: 460
            periodSeconds: 10
            timeoutSeconds: 10
            successThreshold: 1
            failureThreshold: 6
      restartPolicy: Always
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: tb-rule-engine
spec:
  serviceName: tb-rule-engine
  podManagementPolicy: Parallel
  replicas: 3
  selector:
    matchLabels:
      app: tb-rule-engine
  template:
    metadata:
      labels:
        app: tb-rule-engine
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
                - key: app
                  operator: In
                  values:
                    - tb-rule-engine            
            topologyKey: kubernetes.io/hostname
      securityContext:
        runAsUser: 799
        runAsNonRoot: true
        fsGroup: 799
      volumes:
        - name: tb-node-config
          configMap:
            name: tb-node-config
            items:
              - key: conf
                path:  thingsboard.conf
              - key: logback
                path:  logback.xml
        - name: tb-node-logs
          emptyDir: {}
      containers:
        - name: tb-rule-engine
          imagePullPolicy: Always
          image: thingsboard/tb-node:3.5.0
          ports:
            - containerPort: 8080
              name: http
            - containerPort: 7070
              name: edge
          resources:
            requests:
              cpu: 300m
              memory: 3584Mi
            limits:
              cpu: 3000m
              memory: 3584Mi
          env:
            - name: JAVA_OPTS
              value: "-Xmx2048M -Xms2048M -Xss384k -XX:+AlwaysPreTouch -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
            - name: TB_SERVICE_TYPE
              value: "tb-rule-engine"
            - name: TB_SERVICE_ID
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: TB_HOST
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: REDIS_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: redis
                  key: redis-password
            - name: CASSANDRA_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: cassandra
                  key: cassandra-password
            - name: SPRING_DATASOURCE_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: postgresql-postgresql
                  key: password
          envFrom:
            - configMapRef:
                name: tb-cluster-stack-config
          volumeMounts:
            - mountPath: /config
              name: tb-node-config
            - mountPath: /var/log/thingsboard
              name: tb-node-logs
          startupProbe:
            httpGet:
              path: /login
              port: http
            initialDelaySeconds: 30
            periodSeconds: 10
            timeoutSeconds: 10
            successThreshold: 1
            failureThreshold: 10
          livenessProbe:
            httpGet:
              path: /login
              port: http
            initialDelaySeconds: 460
            periodSeconds: 10
            timeoutSeconds: 10
            successThreshold: 1
            failureThreshold: 6
      restartPolicy: Always
---
apiVersion: v1
kind: Service
metadata:
  name: tb-node
spec:
  type: ClusterIP
  selector:
    app: tb-node
  ports:
    - port: 8080
      name: http
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tb-web-ui
spec:
  replicas: 3
  selector:
    matchLabels:
      app: tb-web-ui
  template:
    metadata:
      labels:
        app: tb-web-ui
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
                - key: app
                  operator: In
                  values:
                    - tb-web-ui
            topologyKey: kubernetes.io/hostname
      containers:
      - name: tb-web-ui
        imagePullPolicy: Always
        image: thingsboard/tb-web-ui:3.5.0
        ports:
        - containerPort: 8080
          name: http
        resources:
          requests:
            cpu: 50m
            memory: 100Mi
          limits:
            cpu: 500m
            memory: 100Mi
        env:
        - name: HTTP_BIND_ADDRESS
          value: "0.0.0.0"
        - name: HTTP_BIND_PORT
          value: "8080"
        livenessProbe:
          httpGet:
            path: /index.html
            port: http
          initialDelaySeconds: 120
          timeoutSeconds: 10
      restartPolicy: Always
---
apiVersion: v1
kind: Service
metadata:
  name: tb-web-ui
spec:
  type: ClusterIP
  selector:
    app: tb-web-ui
  ports:
  - port: 8080
    name: http
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: tb-js-executor
spec:
  serviceName: tb-js-executor
  replicas: 3
  podManagementPolicy: Parallel
  selector:
    matchLabels:
      app: tb-js-executor
  template:
    metadata:
      labels:
        app: tb-js-executor
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            - labelSelector:
                matchExpressions:
                  - key: app
                    operator: In
                    values:
                      - tb-js-executor
              topologyKey: kubernetes.io/hostname
      containers:
        - name: tb-js-executor
          imagePullPolicy: Always
          image: thingsboard/tb-js-executor:3.5.0
          resources:
            requests:
              cpu: 100m
              memory: 500Mi
            limits:
              cpu: 1000m
              memory: 500Mi
          ports:
            - containerPort: 8888
              name: http # /livenessProbe
          env:
            - name: KAFKA_CLIENT_ID
              valueFrom:
                fieldRef:
                  apiVersion: v1
                  fieldPath: metadata.name
            - name: SLOW_QUERY_LOG_MS
              value: "100.000"
            - name: SCRIPT_STAT_PRINT_FREQUENCY
              value: "10000"
            - name: SCRIPT_BODY_TRACE_FREQUENCY
              value: "1000000"
            - name: SLOW_QUERY_LOG_BODY
              value: "false"
            - name: TB_KAFKA_LINGER_MS
              value: "10"
            - name: TB_KAFKA_BATCH_SIZE
              value: "250"
            - name: TB_KAFKA_COMPRESSION_TYPE
              value: "gzip"
            - name: SCRIPT_USE_SANDBOX
              value: "false"
          envFrom:
            - configMapRef:
                name: tb-cluster-stack-config
          startupProbe:
            httpGet:
              path: /livenessProbe
              port: http
            initialDelaySeconds: 10
            timeoutSeconds: 3
            periodSeconds: 10
            successThreshold: 1
            failureThreshold: 7
          livenessProbe:
            httpGet:
              path: /livenessProbe
              port: http
            initialDelaySeconds: 15
            timeoutSeconds: 3
            periodSeconds: 10
            successThreshold: 1
            failureThreshold: 6
      restartPolicy: Always
---
```
{: .copy-code}

Deploy ThingsBoard cluster
```bash
kubectl apply -f tb-services.yml
```
{: .copy-code}

Wait until all pods are up and running for a couple of minutes.

```bash
kubectl get pods --watch
```
{: .copy-code}

### First login to the ThingsBoard cluster

Let's connect to the ThingsBoard's user interface inside the cluster.

```bash
kubectl port-forward pod/tb-node-0 8080:8080
```
{: .copy-code}

Open the ThingsBoard in your browser using the http://localhost:8080
Default login is `tenant@thingsboard.ord`, pass is `tenant`

### MQTT transport deployment

```bash
cat > tb-mqtt-transport.yml
```
{: .copy-code}

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: tb-mqtt-transport-config
  labels:
    name: tb-mqtt-transport-config
data:
  conf: |
    export JAVA_OPTS="$JAVA_OPTS -Xlog:gc*,heap*,age*,safepoint=debug:file=/var/log/tb-mqtt-transport/${TB_SERVICE_ID}-gc.log:time,uptime,level,tags:filecount=10,filesize=10M"
    export JAVA_OPTS="$JAVA_OPTS -XX:+IgnoreUnrecognizedVMOptions -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/log/tb-mqtt-transport/${TB_SERVICE_ID}-heapdump.bin"
    export JAVA_OPTS="$JAVA_OPTS -XX:-UseBiasedLocking -XX:+UseTLAB -XX:+ResizeTLAB -XX:+PerfDisableSharedMem -XX:+UseCondCardMark"
    export JAVA_OPTS="$JAVA_OPTS -XX:+UseG1GC -XX:MaxGCPauseMillis=500 -XX:+UseStringDeduplication -XX:+ParallelRefProcEnabled -XX:MaxTenuringThreshold=10"
    export JAVA_OPTS="$JAVA_OPTS -XX:+ExitOnOutOfMemoryError"
    export LOG_FILENAME=tb-mqtt-transport.out
    export LOADER_PATH=/usr/share/tb-mqtt-transport/conf
  logback: |
    <!DOCTYPE configuration>
    <configuration scan="true" scanPeriod="10 seconds">
        <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
            <encoder>
                <pattern>%d{ISO8601} [%thread] %-5level %logger{36} - %msg%n</pattern>
            </encoder>
        </appender>
        <logger name="org.thingsboard.server" level="INFO" />

        <logger name="com.microsoft.azure.servicebus.primitives.CoreMessageReceiver" level="OFF" />
        <logger name="org.apache.kafka.common.utils.AppInfoParser" level="WARN"/>
        <logger name="org.apache.kafka.clients" level="WARN"/>
    
        <root level="INFO">
            <appender-ref ref="STDOUT"/>
        </root>
    </configuration>
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: tb-mqtt-transport
spec:
  serviceName: "tb-mqtt-transport"
  podManagementPolicy: Parallel
  replicas: 3
  selector:
    matchLabels:
      app: tb-mqtt-transport
  template:
    metadata:
      labels:
        app: tb-mqtt-transport
    spec:
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
      volumes:
        - name: tb-mqtt-transport-config
          configMap:
            name: tb-mqtt-transport-config
            items:
              - key: conf
                path:  tb-mqtt-transport.conf
              - key: logback
                path:  logback.xml
      containers:
        - name: tb-mqtt-transport
          image: thingsboard/tb-mqtt-transport:3.5.0
          imagePullPolicy: Always
          ports:
            - containerPort: 1883
              name: mqtt
            - containerPort: 8883
              name: mqtts
          resources:
            requests:
              cpu: 100m
              memory: 1536Mi
            limits:
              cpu: 1000m
              memory: 1536Mi
          env:
            - name: JAVA_OPTS
              value: "-Xmx1024M -Xms1024M -Xss256k -XX:+AlwaysPreTouch -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
            - name: TB_SERVICE_ID
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: REDIS_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: redis
                  key: redis-password
#            - name: TB_QUEUE_TRANSPORT_MAX_PENDING_REQUESTS
#              value: "100000"
#            - name: TB_QUEUE_TRANSPORT_MAX_REQUEST_TIMEOUT
#              value: "10000"
#            - name: TB_QUEUE_TRANSPORT_MAX_CALLBACK_THREADS
#              value: "100"
#            - name: TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS
#              value: "10"
          envFrom:
            - configMapRef:
                name: tb-cluster-stack-config
          volumeMounts:
            - mountPath: /config
              name: tb-mqtt-transport-config
          startupProbe:
            failureThreshold: 15
            periodSeconds: 20
            tcpSocket:
              port: 1883
          livenessProbe:
            periodSeconds: 30
            tcpSocket:
              port: 1883
            timeoutSeconds: 10
            successThreshold: 1
            failureThreshold: 6
---
```
{: .copy-code}

Apply MQTT transport config
```bash
kubectl apply -f tb-mqtt-transport.yml
```
{: .copy-code}

### MQTT transport deployment

```bash
cat > tb-http-transport.yml
```
{: .copy-code}

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: tb-http-transport-config
  labels:
    name: tb-http-transport-config
data:
  conf: |
    export JAVA_OPTS="$JAVA_OPTS -Xlog:gc*,heap*,age*,safepoint=debug:file=/var/log/tb-http-transport/${TB_SERVICE_ID}-gc.log:time,uptime,level,tags:filecount=10,filesize=10M"
    export JAVA_OPTS="$JAVA_OPTS -XX:+IgnoreUnrecognizedVMOptions -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/log/tb-http-transport/${TB_SERVICE_ID}-heapdump.bin"
    export JAVA_OPTS="$JAVA_OPTS -XX:-UseBiasedLocking -XX:+UseTLAB -XX:+ResizeTLAB -XX:+PerfDisableSharedMem -XX:+UseCondCardMark"
    export JAVA_OPTS="$JAVA_OPTS -XX:+UseG1GC -XX:MaxGCPauseMillis=500 -XX:+UseStringDeduplication -XX:+ParallelRefProcEnabled -XX:MaxTenuringThreshold=10"
    export JAVA_OPTS="$JAVA_OPTS -XX:+ExitOnOutOfMemoryError"
    export LOG_FILENAME=tb-http-transport.out
    export LOADER_PATH=/usr/share/tb-http-transport/conf
  logback: |
    <!DOCTYPE configuration>
    <configuration scan="true" scanPeriod="10 seconds">
        <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
            <encoder>
                <pattern>%d{ISO8601} [%thread] %-5level %logger{36} - %msg%n</pattern>
            </encoder>
        </appender>
        <logger name="org.thingsboard.server" level="INFO" />

        <logger name="com.microsoft.azure.servicebus.primitives.CoreMessageReceiver" level="OFF" />
        <logger name="org.apache.kafka.common.utils.AppInfoParser" level="WARN"/>
        <logger name="org.apache.kafka.clients" level="WARN"/>
    
        <root level="INFO">
            <appender-ref ref="STDOUT"/>
        </root>
    </configuration>
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: tb-http-transport
spec:
  serviceName: "tb-http-transport"
  podManagementPolicy: Parallel
  replicas: 3
  selector:
    matchLabels:
      app: tb-http-transport
  template:
    metadata:
      labels:
        app: tb-http-transport
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
                - key: app
                  operator: In
                  values:
                    - tb-http-transport
            topologyKey: kubernetes.io/hostname
      volumes:
        - name: tb-http-transport-config
          configMap:
            name: tb-http-transport-config
            items:
              - key: conf
                path:  tb-http-transport.conf
              - key: logback
                path:  logback.xml
      containers:
        - name: tb-http-transport
          image: thingsboard/tb-http-transport:3.5.0
          imagePullPolicy: Always
          ports:
            - containerPort: 8080
              name: http
            - containerPort: 9999 # DO NOT expose Java Management Extensions (JMX) port to any service.
              name: jmx           # The main purpose is port-forwarding from the command line
          resources:
            requests:
              cpu: 100m
              memory: 1536Mi
            limits:
              cpu: 1000m
              memory: 1536Mi
          env:
            - name: JAVA_OPTS
              value: "-Xmx1024M -Xms1024M -Xss256k -XX:+AlwaysPreTouch -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
            - name: TB_SERVICE_ID
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: REDIS_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: redis
                  key: redis-password
#            - name: TB_QUEUE_TRANSPORT_MAX_PENDING_REQUESTS
#              value: "100000"
#            - name: TB_QUEUE_TRANSPORT_MAX_REQUEST_TIMEOUT
#              value: "10000"
#            - name: TB_QUEUE_TRANSPORT_MAX_CALLBACK_THREADS
#              value: "100"
#            - name: TB_QUEUE_TRANSPORT_RESPONSE_POLL_INTERVAL_MS
#              value: "10"
          envFrom:
            - configMapRef:
                name: tb-cluster-stack-config
          volumeMounts:
            - mountPath: /config
              name: tb-http-transport-config
          startupProbe:
            failureThreshold: 15
            periodSeconds: 20
            tcpSocket:
              port: 8080
          livenessProbe:
            periodSeconds: 30
            tcpSocket:
              port: 8080
            timeoutSeconds: 10
            successThreshold: 1
            failureThreshold: 6
---
```
{: .copy-code}

Apply HTTP transport config
```bash
kubectl apply -f tb-http-transport.yml
```
{: .copy-code}


### Provisioning AWS Load Balancer

Here the instruction how to setup [Load Balancer on AWS EKS](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html)

Note: replace `378560561651` with your id

```bash
curl -o iam_policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.1/docs/install/iam_policy.json
aws iam create-policy \
    --policy-name AWSLoadBalancerControllerIAMPolicy \
    --policy-document file://iam_policy.json
# AWSLoadBalancerControllerIAMPolicy may already exists
eksctl create iamserviceaccount \
  --cluster=tb-basic \
  --namespace=kube-system \
  --name=aws-load-balancer-controller \
  --role-name "AmazonEKSLoadBalancerControllerRoleTBBasic" \
  --attach-policy-arn=arn:aws:iam::378560561651:policy/AWSLoadBalancerControllerIAMPolicy \
  --approve
# If errors then delete, change and try again: eksctl delete iamserviceaccount   --cluster=tb-basic   --namespace=kube-system   --name=aws-load-balancer-controller 
helm repo add eks https://aws.github.io/eks-charts
helm repo update eks
helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
  -n kube-system \
  --set clusterName=tb-basic \
  --set serviceAccount.create=false \
  --set serviceAccount.name=aws-load-balancer-controller
kubectl get deployment -n kube-system aws-load-balancer-controller
kubectl get events -n kube-system | grep aws-load-balancer-controller
```


### Deploy HTTP Load Balancer

```bash
cat > http-load-balancer.yml
```
{: .copy-code}

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: tb-http-loadbalancer
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
spec:
  rules:
    - http:
        paths:
          - path: /api/v1/*
            pathType: ImplementationSpecific
            backend:
              service:
                name: tb-http-transport
                port:
                  number: 8080
          - path: /static/rulenode/*
            pathType: ImplementationSpecific
            backend:
              service:
                name: tb-node
                port:
                  number: 8080
          - path: /static/*
            pathType: ImplementationSpecific
            backend:
              service:
                name: tb-web-ui
                port:
                  number: 8080
          - path: /index.html
            pathType: ImplementationSpecific
            backend:
              service:
                name: tb-web-ui
                port:
                  number: 8080
          - path: /grafana/
            pathType: Prefix
            backend:
              service:
                name: grafana-service
                port:
                  number: 3000
          - path: /*
            pathType: ImplementationSpecific
            backend:
              service:
                name: tb-node
                port:
                  number: 8080
---
```
{: .copy-code}

```bash
kubectl apply -f http-load-balancer.yml
kubectl get ingress
# NAME                   CLASS    HOSTS   ADDRESS                                                                   PORTS   AGE
# tb-http-loadbalancer   <none>   *       k8s-thingsbo-tbhttplo-784e0efb43-1467549612.eu-west-1.elb.amazonaws.com   80      12m
```
{: .copy-code}

Visit the ThingsBoard's web page http://k8s-thingsbo-tbhttplo-784e0efb43-1467549612.eu-west-1.elb.amazonaws.com

### Deploy MQTT Load Balancer

```bash
cat > mqtt-load-balancer.yml
```
{: .copy-code}

```yaml
apiVersion: v1
kind: Service
metadata:
  name: tb-mqtt-loadbalancer
  annotations:
    service.beta.kubernetes.io/aws-load-balancer-type: "nlb"
    service.beta.kubernetes.io/aws-load-balancer-cross-zone-load-balancing-enabled: "true"
    service.beta.kubernetes.io/aws-load-balancer-additional-resource-tags: ThingsBoardClusterELB=ThingsBoardMqtt
spec:
  type: LoadBalancer
  externalTrafficPolicy: Cluster
  selector:
    app: tb-mqtt-transport
  ports:
    - port: 1883
      targetPort: 1883
      name: mqtt
    # This way NLB acts as transparent load balancer and forwards all traffic to port 8883 without decryption.
    - port: 8883
      targetPort: 8883
      name: mqtts
---
```
{: .copy-code}

Apply the balancer config:
```bash
kubectl apply -f mqtt-load-balancer.yml
```
{: .copy-code}

Check the balancer is up and running

```bash
kubectl get svc | grep -i balancer
# tb-mqtt-loadbalancer             LoadBalancer   10.100.38.17     aff16c87439c84d4ca7cf942ca5ef84c-4f1e51aef8129250.elb.eu-west-1.amazonaws.com   1883:32385/TCP,8883:30876/TCP         5m32s
telnet aff16c87439c84d4ca7cf942ca5ef84c-4f1e51aef8129250.elb.eu-west-1.amazonaws.com 1883
# Trying 52.16.93.146...
# Connected to aff16c87439c84d4ca7cf942ca5ef84c-4f1e51aef8129250.elb.eu-west-1.amazonaws.com.
# Escape character is '^]'.
# ^C
```

### Spin up Performance test


```bash
cat > cluster.yml
```
{: .copy-code}

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: tb-basic
  region: eu-west-1
  version: "1.25"

availabilityZones: ['eu-west-1a', 'eu-west-1b', 'eu-west-1c']

managedNodeGroups:
  - name: client-arm
    labels: { role: client }
    instanceType: m7g.medium
    desiredCapacity: 3
    maxPodsPerNode: 32
    volumeType: gp3
    volumeSize: 32
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
    preBootstrapCommands:
      - echo 'Starting custom preBootstrapCommands'
      - echo 'fs.file-max = 16777216' | sudo tee -a /etc/sysctl.conf
      - echo 'fs.nr_open = 16777216' | sudo tee -a /etc/sysctl.conf
      - echo 'Reloading sysctl (sysctl.conf)'
      - sudo sysctl -p
      - echo 'Setting security limits'
      - echo '*                soft    nofile          16777216' | sudo tee -a /etc/security/limits.conf
      - echo '*                hard    nofile          16777216' | sudo tee -a /etc/security/limits.conf
      - echo 'root             soft    nofile          16777216' | sudo tee -a /etc/security/limits.conf
      - echo 'root             hard    nofile          16777216' | sudo tee -a /etc/security/limits.conf
      - echo '*                soft    nproc          16777216' | sudo tee -a /etc/security/limits.conf
      - echo '*                hard    nproc          16777216' | sudo tee -a /etc/security/limits.conf
      - echo 'root             soft    nproc          16777216' | sudo tee -a /etc/security/limits.conf
      - echo 'root             hard    nproc          16777216' | sudo tee -a /etc/security/limits.conf
      - echo 'Reloading sysctl (sysctl.conf)'
      - sudo sysctl -p
      - echo 'End of custom preBootstrapCommands'
```
{: .copy-code}

```bash
eksctl create nodegroup --config-file=cluster.yml
```

Tip: after tests you can delete node group
```bash
eksctl delete nodegroup client-arm --cluster=tb-basic
```

```bash
cat > performance-test.yml 
```

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: performance-test
spec:
  serviceName: performance-test
  replicas: 10
#  podManagementPolicy: Parallel
  selector:
    matchLabels:
      app: performance-test
  template:
    metadata:
      labels:
        app: performance-test
    spec:
      nodeSelector:
        role: client # stick to the performance-test nodes
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 1
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: "app"
                      operator: In
                      values:
                        - performance-test
                topologyKey: "kubernetes.io/hostname"
      imagePullSecrets:
        - name: regcred
      securityContext:
        sysctls:
          - name: net.ipv4.ip_local_port_range
            value: "1024 65535"
      containers:
        - name: server
          imagePullPolicy: IfNotPresent 
          image: thingsboard/tb-ce-performance-test:3.4.0
          command:
            - /bin/bash
            - -ec
            - |
              echo 'Starting ...'
              export POD_IDX=$(echo $POD_NAME | grep -o "[0-9]*" | head -1)
              export DEVICE_START_IDX=$(expr $DEVICE_START_IDX + $TOTAL_DEVICES / $TOTAL_REPLICAS \* $POD_IDX)
              export DEVICE_END_IDX=$(expr $DEVICE_START_IDX + $TOTAL_DEVICES / $TOTAL_REPLICAS)
              export MESSAGES_PER_SECOND=$(expr $TOTAL_MESSAGES_PER_SECOND / $TOTAL_REPLICAS)
              echo 'Environments:'
              printenv | sort
              echo 'Starting test...'
              start-tests.sh
              echo 'Finished.'
              sleep infinity
          resources:
            requests:
              cpu: 100m
              memory: 500Mi
            limits:
              cpu: 900m
              memory: 500Mi
          env:
            - name: REST_URL
              value: "http://k8s-thingsbo-tbhttplo-2fcaf89277-737278123.eu-west-1.elb.amazonaws.com:80"
            - name: MQTT_HOST
              value: "tb-mqtt-loadbalancer"
            - name: ALARMS_PER_SECOND # per replica
              value: "1"
            - name: DURATION_IN_SECONDS
              value: "200000"
            - name: DEVICE_CREATE_ON_START
              value: "false"
            - name: WARMUP_PACK_SIZE
              value: "50"
            - name: DEVICE_START_IDX
              value: "0"
            - name: TOTAL_REPLICAS
              value: "10"
            - name: TOTAL_DEVICES
              value: "100000"
            - name: TOTAL_MESSAGES_PER_SECOND
              value: "1000"
            - name: POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
      terminationGracePeriodSeconds: 0
      restartPolicy: Always
```
{: .copy-code}

```bash
kubectl apply -f performance-test.yml
kubectl logs -f performance-test-0
```
{: .copy-code}

### Investigating system CPU usage

```bash
[ec2-user@ip-192-168-62-206 ~]$ cat /proc/interrupts
           CPU0       CPU1       CPU2       CPU3       
  1:          0          0         10          0   IO-APIC   1-edge      i8042
  4:          0        791          0          0   IO-APIC   4-edge      ttyS0
  8:          0          0          0          0   IO-APIC   8-edge      rtc0
  9:          1          0          7          2   IO-APIC   9-fasteoi   acpi
 12:          0         88          0          0   IO-APIC  12-edge      i8042
 24:          0          0          0         14   PCI-MSI 65536-edge      nvme0q0
 25:          0          0      50541          0   PCI-MSI 65537-edge      nvme0q1
 26:          0          0          0      53100   PCI-MSI 65538-edge      nvme0q2
 27:          0          0       5615        969   PCI-MSI 81920-edge      ena-mgmnt@pci:0000:00:05.0
 28:    1482671          0          0   35400719   PCI-MSI 81921-edge      eth0-Tx-Rx-0
 29:      10714   35863379    1330827          0   PCI-MSI 81922-edge      eth0-Tx-Rx-1
 30:   26376994    1437188          0          0   PCI-MSI 81923-edge      eth0-Tx-Rx-2
 31:          0          0   29121610    1135911   PCI-MSI 81924-edge      eth0-Tx-Rx-3
 32:          0       5576        969          0   PCI-MSI 98304-edge      ena-mgmnt@pci:0000:00:06.0
 33:          1          0    5648110     225399   PCI-MSI 98305-edge      eth1-Tx-Rx-0
 34:    6529494     277818          0          0   PCI-MSI 98306-edge      eth1-Tx-Rx-1
 35:          0    7235791     324663          0   PCI-MSI 98307-edge      eth1-Tx-Rx-2
 36:     249187          0          0    6488003   PCI-MSI 98308-edge      eth1-Tx-Rx-3
 37:         16          0          0          0   PCI-MSI 507904-edge      nvme1q0
 38:       7631          0          0          0   PCI-MSI 507905-edge      nvme1q1
 39:          0       7790          0          0   PCI-MSI 507906-edge      nvme1q2
 40:         16          0          0          0   PCI-MSI 491520-edge      nvme2q0
 41:          0          0      12878          0   PCI-MSI 491521-edge      nvme2q1
 42:          0          0          0      14906   PCI-MSI 491522-edge      nvme2q2
 43:          0         11          0          0   PCI-MSI 458752-edge      nvme3q0
 44:      47409          0          0          0   PCI-MSI 458753-edge      nvme3q1
 45:          0      44788          0          0   PCI-MSI 458754-edge      nvme3q2
 46:          0          0          0         16   PCI-MSI 475136-edge      nvme4q0
 47:          0          0        195          0   PCI-MSI 475137-edge      nvme4q1
 48:          0          0          0        234   PCI-MSI 475138-edge      nvme4q2
 49:         16          0          0          0   PCI-MSI 442368-edge      nvme5q0
 50:      68675          0          0          0   PCI-MSI 442369-edge      nvme5q1
 51:          0      79235          0          0   PCI-MSI 442370-edge      nvme5q2
 52:          0         39          0       5576   PCI-MSI 114688-edge      ena-mgmnt@pci:0000:00:07.0
 53:        113          0          3          0   PCI-MSI 114689-edge      eth2-Tx-Rx-0
 54:          0          0          0          0   PCI-MSI 114690-edge      eth2-Tx-Rx-1
 55:          0          4          0          0   PCI-MSI 114691-edge      eth2-Tx-Rx-2
 56:          0          0          0          0   PCI-MSI 114692-edge      eth2-Tx-Rx-3
 57:          0          0         11          0   PCI-MSI 425984-edge      nvme6q0
 58:          0          0       1152          0   PCI-MSI 425985-edge      nvme6q1
 59:          0          0          0       1136   PCI-MSI 425986-edge      nvme6q2
 60:          0          0          0         11   PCI-MSI 409600-edge      nvme7q0
 61:        431          0          0          0   PCI-MSI 409601-edge      nvme7q1
 62:          0        345          0          0   PCI-MSI 409602-edge      nvme7q2
 63:          0          0          0         11   PCI-MSI 393216-edge      nvme8q0
 64:          0          0        121          0   PCI-MSI 393217-edge      nvme8q1
 65:          0          0          0        121   PCI-MSI 393218-edge      nvme8q2
NMI:          0          0          0          0   Non-maskable interrupts
LOC:   28933051   29085232   28863521   29027674   Local timer interrupts
SPU:          0          0          0          0   Spurious interrupts
PMI:          0          0          0          0   Performance monitoring interrupts
IWI:          0          0          0          0   IRQ work interrupts
RTR:          0          0          0          0   APIC ICR read retries
RES:   24416230   23961254   23988008   22932306   Rescheduling interrupts
CAL:     182419     183623     188304     178605   Function call interrupts
TLB:     358480     347472     363050     369506   TLB shootdowns
TRM:          0          0          0          0   Thermal event interrupts
THR:          0          0          0          0   Threshold APIC interrupts
DFR:          0          0          0          0   Deferred Error APIC interrupts
MCE:          0          0          0          0   Machine check exceptions
MCP:         22         22         22         22   Machine check polls
ERR:          0
MIS:          0
PIN:          0          0          0          0   Posted-interrupt notification event
NPI:          0          0          0          0   Nested posted-interrupt event
PIW:          0          0          0          0   Posted-interrupt wakeup event
```

sysctl net.ipv4.tcp_congestion_control
sudo sysctl -w net.ipv4.tcp_wmem="32768 1048576 18874368"
sudo sysctl -w net.ipv4.tcp_rmem="32768 1048576 18874368"
sudo sysctl -w net.core.netdev_max_backlog=5000
sudo sysctl -w vm.max_map_count=4194304

sysctl net.core.netdev_max_backlog
sysctl vm.max_map_count


```bash
cat > cluster.yml
```
{: .copy-code}

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: tb-basic
  region: eu-west-1
  version: "1.25"

availabilityZones: ['eu-west-1a', 'eu-west-1b', 'eu-west-1c']

managedNodeGroups:
  - name: thingsboard-r6in-tuned
    labels: { role: thingsboard }
    instanceType: r6in.xlarge
    desiredCapacity: 3
    maxPodsPerNode: 64
    volumeType: gp3
    volumeSize: 50
    privateNetworking: false
    ssh:
      allow: true
      publicKeyName: 'smatvienko'
    preBootstrapCommands:
      - echo 'Starting custom preBootstrapCommands'
      - echo 'fs.file-max = 1777216' | sudo tee -a /etc/sysctl.conf
      - echo 'fs.nr_open = 1777216' | sudo tee -a /etc/sysctl.conf
      - echo 'vm.max_map_count = 4194304' | sudo tee -a /etc/sysctl.conf
      - echo 'net.core.netdev_max_backlog = 5000' | sudo tee -a /etc/sysctl.conf
      - echo 'fnet.ipv4.tcp_wmem = 32768 1048576 18874368' | sudo tee -a /etc/sysctl.conf
      - echo 'fnet.ipv4.tcp_rmem = 32768 1048576 18874368' | sudo tee -a /etc/sysctl.conf
      - echo 'Reloading sysctl (sysctl.conf)'
      - sudo sysctl -p
      - echo 'Setting security limits'
      - echo '*                soft    nofile          1777216' | sudo tee -a /etc/security/limits.conf
      - echo '*                hard    nofile          1777216' | sudo tee -a /etc/security/limits.conf
      - echo 'root             soft    nofile          1777216' | sudo tee -a /etc/security/limits.conf
      - echo 'root             hard    nofile          1777216' | sudo tee -a /etc/security/limits.conf
      - echo '*                soft    nproc          1777216' | sudo tee -a /etc/security/limits.conf
      - echo '*                hard    nproc          1777216' | sudo tee -a /etc/security/limits.conf
      - echo 'root             soft    nproc          1777216' | sudo tee -a /etc/security/limits.conf
      - echo 'root             hard    nproc          1777216' | sudo tee -a /etc/security/limits.conf
      - echo 'Reloading sysctl (sysctl.conf)'
      - sudo sysctl -p
      - echo 'End of custom preBootstrapCommands'
```
{: .copy-code}

```bash
eksctl create cluster -f cluster.yml
```
{: .copy-code}

In 15 minutes cluster is ready

```
2023-05-08 15:01:31 [✔]  EKS cluster "tb-basic" in "eu-west-1" region is ready
```

```bash
k get nodes -o wide
```
{: .copy-code}

```
NAME                                           STATUS   ROLES    AGE   VERSION               INTERNAL-IP      EXTERNAL-IP     OS-IMAGE         KERNEL-VERSION                   CONTAINER-RUNTIME
ip-192-168-1-231.eu-west-1.compute.internal    Ready    <none>   55m   v1.25.7-eks-a59e1f0   192.168.1.231    52.18.227.121   Amazon Linux 2   5.10.178-162.673.amzn2.aarch64   containerd://1.6.19
ip-192-168-36-245.eu-west-1.compute.internal   Ready    <none>   54m   v1.25.7-eks-a59e1f0   192.168.36.245   54.229.69.248   Amazon Linux 2   5.10.178-162.673.amzn2.aarch64   containerd://1.6.19
ip-192-168-68-51.eu-west-1.compute.internal    Ready    <none>   54m   v1.25.7-eks-a59e1f0   192.168.68.51    3.252.62.97     Amazon Linux 2   5.10.178-162.673.amzn2.aarch64   containerd://1.6.19
```

Tip: Additional `eksctl` commands that might be useful

```bash
eksctl create nodegroup --config-file=cluster.yml
eksctl delete nodegroup client-arm --cluster=tb-basic
eksctl scale nodegroup --cluster=tb-basic --nodes=0 --nodes-min=0 --nodes-max=3 server-arm
eksctl scale nodegroup --cluster=tb-basic --nodes=24 --nodes-min=0 --nodes-max=24 client-arm
```
{: .copy-code}

### Fault tolerance test. Loosing a node

Let's go down one of 3 nodes. Will our cluster survive?

```bash
kubectl drain ip-192-168-59-99.eu-west-1.compute.internal --ignore-daemonsets --delete-emptydir-data
#node/ip-192-168-59-99.eu-west-1.compute.internal already cordoned
#Warning: ignoring DaemonSet-managed Pods: kube-system/aws-node-rsmmg, kube-system/ebs-csi-node-hzgzq, kube-system/kube-proxy-lmnhz, thingsboard/prometheus-node-exporter-twp5c
#evicting pod thingsboard/zookeeper-2
#evicting pod thingsboard/tb-http-transport-1
#evicting pod thingsboard/tb-node-0
#evicting pod thingsboard/tb-rule-engine-0
#evicting pod thingsboard/redis-2
#evicting pod thingsboard/cassandra-2
#evicting pod thingsboard/redis-5
#evicting pod thingsboard/tb-mqtt-transport-0
#evicting pod thingsboard/tb-web-ui-9ddb794b9-cx9c7
#evicting pod thingsboard/postgresql-postgresql-0
#evicting pod thingsboard/tb-js-executor-0
#evicting pod thingsboard/kafka-2
#...
#node/ip-192-168-59-99.eu-west-1.compute.internal drained
```


mqtt devices redistributed across other two mqtt-transport pods

```bash
~$ kubectl logs --since=1m tb-mqtt-transport-1
2023-05-23 09:01:15,719 [scheduling-1] INFO  o.t.s.c.t.s.DefaultTransportService - Transport Stats: openConnections [47299]

~$ kubectl logs --since=1m tb-mqtt-transport-2
2023-05-23 09:01:15,939 [scheduling-1] INFO  o.t.s.c.t.s.DefaultTransportService - Transport Stats: openConnections [52701]
```

Rest of the nodes became very busy but the service is still provided to the clients

The pods from unhealthy zone are in Pending status

```bash
~$ kubectl get pods | grep Pending
cassandra-2                                                     0/2     Pending   0               26m
kafka-2                                                         0/1     Pending   0               26m
postgresql-postgresql-0                                         0/2     Pending   0               25m
redis-2                                                         0/2     Pending   0               26m
redis-5                                                         0/2     Pending   0               26m
tb-http-transport-1                                             0/1     Pending   0               26m
tb-js-executor-0                                                0/1     Pending   0               26m
tb-mqtt-transport-0                                             0/1     Pending   0               26m
tb-node-0                                                       0/1     Pending   0               26m
tb-rule-engine-0                                                0/1     Pending   0               26m
tb-web-ui-9ddb794b9-dmh98                                       0/1     Pending   0               26m
zookeeper-2                                                     0/1     Pending   0               26m
```

Getting back to the normal state

```bash
kubectl uncordon ip-192-168-59-99.eu-west-1.compute.internal
```

### Handle peak loads

Let's see how the system will handle the peak load. Will it survive?

Let's put 10k msg per second to the system.
We will reconnect 10% of devices and put a x10 msg rate to see the performance limits.
The OK criteria - system is responsive, processing as mush as it can, building the lag in the Kafka during the peak, resolving the lag after the peak is gone.  




### Notes

Sergey Matvienko
5:58 PM
Що є на продаж по кластеру?
мінімільна конфігурація реального-приреального кластера зі всіма плюшками
Як її продавати (певно так само як k8s):
показати що воно без проблем переживе втрату ноди
показати що воно справиться з максимальним навантаженням
показати що воно само виконує адмін роботу: обслуговування касандри, бекап
показать що воно має кольорову UI тулзню для задротів та адмінів (kafka-ui, pgadmin, grafana, redis-insight).
показати що воно монітороване і вмикає сирену коли щось не так
показати що воно має гарні картинки по моніторингу (дешборди і т.п.)

andrew
6:01 PM
це на сайт треба писати. Хороша ідея!


https://www.sumologic.com/blog/why-use-kubernetes/

OK, so what specifically can Kubernetes do for me?
Faster time to market
IT cost optimization
Improved scalability and availability
Multi-cloud (and hybrid cloud) flexibility
Effective migration to the cloud


Я зробив мінімальний кластер на 3 ноди для IoT framework ThingsBoard. Тепер маю на меті опублікувати статтю з описом , картинками і даними по швидкості.  Маю багато коду і специфічних знань що було б корисно розкрити, але певно краще деталі винести в окремі статті посилатися на них з основнох статті. кластер - це уникальний продукт без головної болі

Далі я можу надати тобі більш конкретні дані і тести що проводилися.

Наприкінці мені треба зробити яскраву статтю що привертає увагу і зосереджується на цінностях що клієнт отримає завдяки кластеру що я пропоную розглянути.

Що мене спонукало дослідити це питання - це запит від відділу продажів (що в свою чергу задають клієнти): "я хочу ThingsBoard в мікросервісній архітектурі на Kubernetes кластері - що меня для цього потрібно? які ресурси потрібні і скільки це коштуватиме?"

Я стикаюсь з управлінням кластера кожен день і знаю що без певних знань правильно налаштувати кластер малоймовірно.

Помилки починаються з перших кроків  - з архітектури. І все чудово працюватиме і буде повна впевненість що "fault tolerance", "single point of failure" - це все не про мене, бо я користуюсь k8s на відомому cloud провайдері і там за нас все давно "порішали"

Спираючись на досвід я передбачаю одні й ті самі задачи по обслуговуванню баз даних, резервному копіюванню, моніторингу і сповіщеннями про небезбеку.

Особливу увагу хочу приділити тестуванню безперебійної роботи, вимикаємо один із серверів або всю зону доступності - і все працює.

Окремо показати як система справляється з піковими навантаженнями, наприклад після тривалого збою зв'язку накопичилось багато необроблених даних - треба надолужити час і обробити дані в прийнятний проміжок часу.

Екстремальне навантаження - це досить суровий тест, коли Кубернетес кластер з невдалими налаштуваннями проб може запросто перезавантажувати сам себе як "не здоровий".

Бекапи наче не треба, бо в нас все досить надійно, продубльовано і що може трапитися? - Відношення до бекапів змінюється після першої втрати даних через malware, атаку чи помилку користувача, що випадково стер всі дані за 3 роки. Больно, обідно, назавжди втрачена довіра. То ж пропонуємо одразу впроваджувати культуру бекапів, надаємо інструменти.

Ну добре. Уявімо що ми все зробили файно: архітектура, тести, бекапи, надійні дата центри і на тому всьо буде ok? Буде ок, поки не закінчиться місце на диску. А як ви про то дізнаєтеся? - Вам поскаржаться користувачі :) А серйозно, то треба налаштувати тривоги і нотификації. І реагувати на них :)

Певно, треба десь на початку висвітлити коротку відповідь на питання - скільки коштують ресурси для міні кластера і т.і. щоб відповісти якнайшвидше на питання і дати змогу читачу піти якраніше якщо він не хоче подробиць :)

На солодке, для технічних ман'яків і людей з гарним смаком в нас в кластері використовуються класні візуальні штуки як (kafka-ui, pgadmin, grafana, redis-insight)



---------



Дякую за детальний опис вашого проекту! Звучить дуже цікаво і важливо. Ось приклад структури для вашої статті:

**Заголовок:** "Безболісний IoT: Будуємо мінімальний кластер ThingsBoard"

**1. Вступ**
- Пояснення потреби в мінімальному кластері ThingsBoard
- Опис проблеми, з якою ви стикалися, і як ви до неї підійшли

**2. Чому ThingsBoard на Kubernetes кластері?**
- Відповідь на питання "які ресурси потрібні і скільки це коштуватиме?"
- Визначення переваг мікросервісної архітектури для ThingsBoard

**3. Архітектура кластера**
- Важливість правильного налаштування архітектури з самого початку
- Передбачувані проблеми і їхні рішення (в тому числі "fault tolerance" і "single point of failure")

**4. Обслуговування та Моніторинг**
- Роз'яснення про задачі обслуговування бази даних, резервного копіювання, моніторингу та сповіщення про небезпеку
- Подробиці про інструменти і процеси, що ви використовуєте

**5. Тестування**
- Пояснення процесу тестування безперебійної роботи
- Опис вашого досвіду з екстремальними навантаженнями і як ви їх обробляєте

**6. Резервне Копіювання**
- Значення резервних копій в контексті даного проекту
- Як і чому ви пропонуєте впровадити культуру бекапів

**7. Попередження і Нотифікації**
- Наголос на важливості моніторингу місця на диску
- Роз'яснення процесу налаштування тривог і нотифікацій

**8. Вартість**
- Коротка відповідь на питання про вартість ресурсів для мінімального кластера
- Виправдан

ня вартості на основі переваг і вигод, які надає ваш кластер

**9. Візуалізація**
- Перелік візуальних інструментів, що використовуються у вашому кластері (kafka-ui, pgadmin, grafana, redis-insight)
- Як вони допомагають у керуванні кластером

**10. Заключення**
- Підсумок цінностей, які клієнт отримає завдяки вашому кластеру
- Кілька слів про вашу віру в цей проект і як ви дивитесь на майбутнє IoT з ThingsBoard

При розгортанні кожного розділу, спробуйте використати особистий досвід, конкретні приклади і детальні пояснення, щоб відповісти на всі можливі запитання читачів. Ви також можете додавати посилання на інші ресурси або статті для додаткової інформації.

Пам'ятайте, що чітка структура та логічна послідовність думок - це ключ до створення ефективної статті. Сподіваюся, що цей шаблон стане у нагоді!