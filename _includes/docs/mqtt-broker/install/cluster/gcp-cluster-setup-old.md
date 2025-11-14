* TOC
{:toc}

This guide will help you to setup TBMQ in microservices mode in GKE.

## Prerequisites

{% include templates/install/gcp/gke-prerequisites.md %}

## Step 1. Clone TBMQ K8S scripts repository

```bash
git clone -b {{ site.release.broker_branch }} https://github.com/thingsboard/tbmq.git
cd tbmq/k8s/gcp
```
{: .copy-code}

## Step 2. Define environment variables

{% assign tbClusterName = "tbmq-cluster" %}
{% assign tbDbClusterName = "tbmq-db" %}
{% include templates/mqtt-broker/install/gcp/env-variables.md %}

## Step 3. Configure and create GKE cluster

{% include templates/install/gcp/regional-gke-cluster.md %}

## Step 4. Update the context of kubectl

{% include templates/install/gcp/update-kubectl-region.md %}

## Step 5. Provision Google Cloud SQL (PostgreSQL) Instance

{% assign tbDbName = "thingsboard_mqtt_broker" %}
{% include templates/install/gcp/provision-postgresql.md %}

#### 5.5 Edit database settings

Replace **YOUR_DB_IP_ADDRESS**, **YOUR_DB_PASSWORD** and **YOUR_DB_NAME** with the correct values:

```bash
nano tb-broker-db-configmap.yml
```
{: .copy-code}

## Step 6. Create Namespace

Let's create a dedicated namespace for our TBMQ cluster deployment to ensure better resource isolation and management.

```bash
kubectl apply -f tb-broker-namespace.yml
kubectl config set-context $(kubectl config current-context) --namespace=thingsboard-mqtt-broker
```
{: .copy-code}

## Step 7. Provision Redis cluster

We recommend deploying Bitnami Redis Cluster from Helm. For that, review the `redis` folder.

```bash
ls redis/
```
{: .copy-code}

You can find there _default-values-redis.yml_ file -
default values downloaded from [Bitnami artifactHub](https://artifacthub.io/packages/helm/bitnami/redis-cluster).
And _values-redis.yml_ file with modified values.
We recommend keeping the first file untouched and making changes to the second one only. This way the upgrade process to the next version will go more smoothly as it will be possible to see diff.

To add the Bitnami helm repo:

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
```
{: .copy-code}

To install Bitnami Redis cluster, execute the following command:

```bash
helm install redis -f redis/values-redis.yml bitnami/redis-cluster --version 10.2.5
```
{: .copy-code}

Once deployed, you should see the information about deployment state, followed by the command to get your REDIS_PASSWORD:

```text
NAME: redis
LAST DEPLOYED: Tue Apr  8 11:22:44 2025
NAMESPACE: thingsboard-mqtt-broker
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
CHART NAME: redis-cluster
CHART VERSION: 10.2.5
APP VERSION: 7.2.5** Please be patient while the chart is being deployed **


To get your password run:
    export REDIS_PASSWORD=$(kubectl get secret --namespace "thingsboard-mqtt-broker" redis-redis-cluster -o jsonpath="{.data.redis-password}" | base64 -d)
```

Let's modify this command to print the password to the terminal:

```bash
echo $(kubectl get secret --namespace "thingsboard-mqtt-broker" redis-redis-cluster -o jsonpath="{.data.redis-password}" | base64 -d)
```
{: .copy-code}

You need to copy the output and paste it into the _tb-broker-cache-configmap.yml_ file, replacing `YOUR_REDIS_PASSWORD`.

```bash
nano tb-broker-cache-configmap.yml
```
{: .copy-code}

{% capture redis-nodes %}

The value of `REDIS_NODES` in _tb-broker-cache-configmap.yml_ is set to `"redis-redis-cluster-headless:6379"` by default.
The host name is based on the release name (redis) and the default naming conventions of the Bitnami chart.
If you modify the `nameOverride` or `fullnameOverride` fields in your Redis values file, or change the release name during installation,
you must update this value accordingly to match the actual headless service name created by the chart.

{% endcapture %}
{% include templates/info-banner.md content=redis-nodes %}

## Step 8. Installation

{% include templates/mqtt-broker/install/gcp/install.md %}

{% capture aws-rds %}

Otherwise, please check if you set the PostgreSQL URL and PostgreSQL password in the `tb-broker-db-configmap.yml` correctly.

{% endcapture %}
{% include templates/info-banner.md content=aws-rds %}

## Step 9. Provision Kafka

{% include templates/mqtt-broker/install/cluster-common/provision-kafka.md %}

## Step 10. Starting

Execute the following command to deploy the broker:

```bash
./k8s-deploy-tbmq.sh
```
{: .copy-code}

After a few minutes, you may execute the next command to check the state of all pods.

```bash
kubectl get pods
```
{: .copy-code}

If everything went fine, you should be able to see `tb-broker-0` and `tb-broker-1` pods. Every pod should be in the `READY` state.

## Step 11. Configure Load Balancers

### 11.1 Configure HTTP(S) Load Balancer

Configure HTTP(S) Load Balancer to access web interface of your TBMQ instance. Basically, you have 2 possible configuration options:

* http - Load Balancer without HTTPS support. Recommended for **development**. The only advantage is simple configuration and minimum costs. May be good option for development server but definitely not suitable for production.
* https - Load Balancer with HTTPS support. Recommended for **production**. Acts as an SSL termination point. You may easily configure it to issue and maintain a valid SSL certificate. Automatically redirects all non-secure (HTTP) traffic to secure (HTTPS) port.

See links/instructions below on how to configure each of the suggested options.

#### HTTP Load Balancer

Execute the following command to deploy plain http load balancer:

```bash
kubectl apply -f receipts/http-load-balancer.yml
```
{: .copy-code}

The process of load balancer provisioning may take some time. You may periodically check the status of the load balancer using the following command:

```bash
kubectl get ingress
```
{: .copy-code}

Once provisioned, you should see similar output:

```text
NAME                          CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-broker-http-loadbalancer   <none>   *       34.111.24.134   80      7m25s
```

#### HTTPS Load Balancer

{% assign staticIP = "tbmq-http-lb-address" %}
The process of configuring the load balancer using Google-managed SSL certificates is described on the official [documentation page](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs).
The instructions below are extracted from the official documentation. Make sure you read [prerequisites](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs#prerequisites) carefully before proceeding.

```bash
gcloud compute addresses create {{staticIP}} --global
```
{: .copy-code}

Replace the *PUT_YOUR_DOMAIN_HERE* with valid domain name in the *https-load-balancer.yml* file:

```bash
nano receipts/https-load-balancer.yml
```
{: .copy-code}

Execute the following command to deploy secure http load balancer:

```bash
 kubectl apply -f receipts/https-load-balancer.yml
```
{: .copy-code}

The process of load balancer provisioning may take some time. You may periodically check the status of the load balancer using the following command:

```bash
kubectl get ingress
```
{: .copy-code}

Once provisioned, you should see similar output:

```text
NAME                           CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-broker-https-loadbalancer   gce      *       34.111.24.134   80      7m25s
```

Now, **assign the domain name** you have used to the load balancer IP address (the one you see instead of 34.111.24.134 in the command output).

Check that the domain name is configured correctly using dig:

```bash
dig YOUR_DOMAIN_NAME
```
{: .copy-code}

Sample output:

```text

; <<>> DiG 9.11.3-1ubuntu1.16-Ubuntu <<>> YOUR_DOMAIN_NAME
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12513
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;YOUR_DOMAIN_NAME.	IN	A

;; ANSWER SECTION:
YOUR_DOMAIN_NAME. 36 IN	A	34.111.24.134

;; Query time: 0 msec
;; SERVER: 127.0.0.53#53(127.0.0.53)
;; WHEN: Fri Nov 19 13:00:00 EET 2021
;; MSG SIZE  rcvd: 74

```

Once assigned, wait for the Google-managed certificate to finish provisioning. This might take up to 60 minutes. You can check the status of the certificate using the following command:

```bash
kubectl describe managedcertificate managed-cert
```
{: .copy-code}

Certificate will be eventually provisioned if you have configured domain records properly.
Once provisioned, you may use your domain name to access Web UI (over https).

### 11.2 Configure MQTT Load Balancer

Configure MQTT load balancer to be able to use MQTT protocol to connect devices.

Create TCP load balancer using following command:

```bash
kubectl apply -f receipts/mqtt-load-balancer.yml
```
{: .copy-code}

The load balancer will forward all TCP traffic for ports 1883 and 8883.

#### MQTT over SSL

Follow [this guide](https://thingsboard.io/docs/user-guide/mqtt-over-ssl/) to create a .pem file with the SSL certificate. Store the file as _server.pem_ in the working directory.

You’ll need to create a config-map with your PEM file, you can do it by calling command:

```bash
kubectl create configmap tbmq-mqtts-config \
 --from-file=server.pem=YOUR_PEM_FILENAME \
 --from-file=mqttserver_key.pem=YOUR_PEM_KEY_FILENAME \
 -o yaml --dry-run=client | kubectl apply -f -
```
{: .copy-code}

* where **YOUR_PEM_FILENAME** is the name of your **server certificate file**.
* where **YOUR_PEM_KEY_FILENAME** is the name of your **server certificate private key file**.

Then, uncomment all sections in the ‘tb-broker.yml’ file that are marked with “Uncomment the following lines to enable two-way MQTTS”.

Execute command to apply changes:

```bash
kubectl apply -f tb-broker.yml
```
{: .copy-code}

## Step 12. Validate the setup

Now you can open TBMQ web interface in your browser using DNS name of the load balancer.

You can get DNS name of the load-balancers using the next command:

```bash
kubectl get ingress
```
{: .copy-code}

You should see the similar picture:

```text
NAME                          CLASS    HOSTS   ADDRESS         PORTS   AGE
tb-broker-http-loadbalancer   <none>   *       34.111.24.134   80      3d1h
```

Use `ADDRESS` field of the tb-broker-http-loadbalancer to connect to the cluster.

{% include templates/mqtt-broker/login.md %}

### Validate MQTT access

To connect to the cluster via MQTT you will need to get corresponding service IP. You can do this with the command:

```bash
kubectl get services
```
{: .copy-code}

You should see the similar picture:

```text
NAME                          TYPE           CLUSTER-IP       EXTERNAL-IP              PORT(S)                         AGE
tb-broker-mqtt-loadbalancer   LoadBalancer   10.100.119.170   *******                  1883:30308/TCP,8883:31609/TCP   6m58s
```

Use `EXTERNAL-IP` field of the load-balancer to connect to the cluster via MQTT protocol.

### Troubleshooting

In case of any issues you can examine service logs for errors. For example to see TBMQ logs execute the following command:

```bash
kubectl logs -f tb-broker-0
```
{: .copy-code}

Use the next command to see the state of all statefulsets.
```bash
kubectl get statefulsets
```
{: .copy-code}

See [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) command reference for more details.

## Upgrading

{% include templates/mqtt-broker/upgrade/upgrading.md %}

### Backup and restore (Optional)

While backing up your PostgreSQL database is highly recommended, it is optional before proceeding with the upgrade.
For further guidance, follow the [next instructions](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-backup-restore).

### Upgrade to 2.2.0

In this release, the MQTT authentication mechanism was migrated from YAML/env configuration into the database.
During upgrade, TBMQ needs to know which authentication providers are enabled in your deployment.
This information is provided through environment variables passed to the **upgrade pod**.

The upgrade script requires a file named **`database-setup.yml`** that explicitly defines these variables.
Environment variables from your `tb-broker.yml` file are not applied during the upgrade — only the values in `database-setup.yml` will be used.

> **Tips**
> If you use only Basic authentication, set `SECURITY_MQTT_SSL_ENABLED=false`.
> If you use only X.509 authentication, set `SECURITY_MQTT_BASIC_ENABLED=false` and `SECURITY_MQTT_SSL_ENABLED=true`.

**Supported variables**

* `SECURITY_MQTT_BASIC_ENABLED` (`true|false`)
* `SECURITY_MQTT_SSL_ENABLED` (`true|false`)
* `SECURITY_MQTT_SSL_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT` (`true|false`) — usually `false`.

Once the file is prepared and the values verified, proceed with the [upgrade process](#run-upgrade).

### Upgrade to 2.1.0

{% include templates/mqtt-broker/upgrade/update-to-2.1.0-release-cluster.md %}

### Upgrade to 2.0.0

For the TBMQ v2.0.0 upgrade, if you haven't installed Redis yet, please follow [step 7](#step-7-provision-redis-cluster) to complete the installation.
Only then you can proceed with the [upgrade](#run-upgrade).

### Run upgrade

In case you would like to upgrade, please pull the recent changes from the latest release branch:

```bash
git pull origin {{ site.release.broker_branch }}
```
{: .copy-code}

{% include templates/mqtt-broker/upgrade/upgrade-to-custom-release.md %}

**Note**: Make sure custom changes of yours if available are not lost during the merge process.

{% include templates/mqtt-broker/install/upgrade-hint.md %}

After that, execute the following command:

{% capture tabspec %}tbmq-upgrade
tbmq-upgrade-without-from-version,Since v2.1.0,shell,resources/upgrade-options/k8s-upgrade-tbmq-without-from-version.sh,/docs/mqtt-broker/install/cluster/resources/upgrade-options/k8s-upgrade-tbmq-without-from-version.sh
tbmq-upgrade-with-from-version,Before v2.1.0,markdown,resources/upgrade-options/k8s-upgrade-tbmq-with-from-version.md,/docs/mqtt-broker/install/cluster/resources/upgrade-options/k8s-upgrade-tbmq-with-from-version.md{% endcapture %}
{% include tabs.html %}

{% include templates/mqtt-broker/upgrade/stop-tbmq-pods-before-upgrade.md %}

## Cluster deletion

Execute the following command to delete TBMQ nodes:

```bash
./k8s-delete-tbmq.sh
```
{: .copy-code}

Execute the following command to delete all TBMQ nodes and configmaps, load balancers, etc.:

```bash
./k8s-delete-all.sh
```
{: .copy-code}

Execute the following command to delete the GKE cluster:

```bash
gcloud container clusters delete $TB_CLUSTER_NAME --region=$GCP_REGION
```
{: .copy-code}

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/mqtt-broker-guides-banner.md %}
