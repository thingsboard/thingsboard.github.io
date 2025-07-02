ThingsBoard uses cache to improve performance and avoid frequent DB reads.
By default, deployment already uses the local Valkey cache. However, Thingsboard is compatible with managed services such as Azure Cache for Redis.

{% capture redis-azure-version %}
**Note:** Starting from **ThingsBoard v4.0.0**, Redis 7.2.5 is the officially supported version for third-party Redis deployments.
Please be aware that, as of now, only the **Enterprise** and **Enterprise Flash** SKUs of Azure Cache for Redis support Redis 7.2.x.
The Basic, Standard, and Premium SKUs continue to support only up to **Redis 6.x**. To ensure full compatibility, we recommend using an
Enterprise-tier SKU to ensure proper alignment with the Redis 7.2.5 features.
{% endcapture %}
{% include templates/info-banner.md content=redis-azure-version %}

In order to set up the Redis, follow one of the following guides:

- [Quickstart: Create a Redis Enterprise cache (Recommended)](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/quickstart-create-redis-enterprise)
- [Quickstart: Create an open-source Redis cache](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/quickstart-create-redis)


Once the Redis cluster switch to the 'Running' state, navigate to 'Overview' and copy 'Host name', it`s Redis endpoint for ThingsBoard.

{% include images-gallery.html imageCollection="redisEndpointUrl"%}

Edit the `thirdparty.yml` file, find the StatefulSet section named `tb-valkey`, and set the replicas value to 0 (`replicas: 0`).

Edit `tb-cache-configmap.yml` and replace **REDIS_HOST** value with Redis endpoint.