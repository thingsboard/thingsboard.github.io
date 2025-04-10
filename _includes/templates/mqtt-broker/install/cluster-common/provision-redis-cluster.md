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

