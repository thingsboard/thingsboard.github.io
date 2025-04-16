With v2.1.0, TBMQ updates the versions of key third-party dependencies, including Redis, PostgreSQL, and Kafka.

| Service        | Previous Version | Updated Version |
|----------------|------------------|-----------------|
| **Redis**      | 7.0              | 7.2.5           |
| **PostgreSQL** | 15.x             | 16.x            |
| **Kafka**      | 3.5.1            | 3.7.0           |

We **strongly recommend** aligning your environment with the updated third-party versions to ensure full compatibility with this release.

{% capture third-party-upgrade %}
We do not provide step-by-step upgrade documentation for third-party services.
Please refer to the appropriate resources from your infrastructure or service provider when upgrading.
{% endcapture %}
{% include templates/info-banner.md content=third-party-upgrade %}

Updating the version tags in your `docker-compose.yml` file only changes the image versions used for new deployments.
If you're running an existing instance, this alone is not enough to complete the upgrade of third-party services — especially PostgreSQL, 
which requires a proper data migration process to avoid data loss or corruption.

You can review the necessary version changes in `docker-compose.yml` by visiting the following [link](https://github.com/thingsboard/tbmq/pull/218/files#diff-18a10097b03fb393429353a8f84ba29498e9b72a21326deb9809865d384e2800).

Once your third-party services are updated, you can proceed with the [upgrade](#run-upgrade).
Alternatively, you may proceed without upgrading, but compatibility is only guaranteed with the recommended versions.
