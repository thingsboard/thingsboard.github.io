ThingsBoard uses cache to improve performance and avoid frequent DB reads.
By default, deployment already uses the local Valkey cache. Azure does not provide a managed Valkey cluster, however, instead of the default deployment, you can set up your own Valkey cluster according to the [Azure documentation](https://learn.microsoft.com/en-us/azure/aks/valkey-overview).

{% capture redis-azure-version %}
Starting with **ThingsBoard v4.0.0**, Valkey 8.x is the officially supported version.
Valkey remains compatible with Redis 7.2.x, so the configuration with Redis will work.
However, Redis 7.2.x is only available in the Enterprise or Enterprise Flash SKUs.
The Basic, Standard, and Premium SKUs still only support **Redis 6.x**.
You can find the Redis Enterprise installation guide here:
[Create a Redis Enterprise cache](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/quickstart-create-redis-enterprise)
{% endcapture %}
{% include templates/info-banner.md content=redis-azure-version %}

Edit the `thirdparty.yml` file, find the StatefulSet section named `tb-valkey`, and set the `spec.replicas` value to 0.

Once your Valkey cluster is ready, you will need to replace the endpoint in the configuration file. 
Edit `tb-cache-configmap.yml` and replace **REDIS_HOST** value with Redis endpoint if you are using standalone Valkey. 
If you have deployed Valkey in cluster mode, replace **REDIS_HOST** with:
```yaml
REDIS_CONNECTION_TYPE: cluster
REDIS_NODES: (Comma-separated list of "host:port" pairs to bootstrap from)
```