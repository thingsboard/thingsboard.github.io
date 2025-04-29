With v2.1.0, TBMQ updates the versions of key third-party dependencies, including Redis, PostgreSQL, and Kafka.
You can review the changes by visiting the following [link](https://github.com/thingsboard/tbmq/pull/218).

| Service        | Previous Version | Updated Version |
|----------------|------------------|-----------------|
| **Redis**      | 7.0              | 7.2.5           |
| **PostgreSQL** | 15.x             | 16.x            |
| **Kafka**      | 3.5.1            | 3.7.0           |

We **recommend** aligning your environment with the updated third-party versions to ensure full compatibility with this release.
Alternatively, you may proceed without upgrading, but compatibility is only guaranteed with the recommended versions.

{% capture third-party-upgrade %}
We do not provide step-by-step upgrade instructions for third-party services. 
For such procedures, please refer to the official documentation of the respective platform or, in the case of managed services, consult your service provider’s resources.
**Note:** simply **changing the image tag** is not enough and may not be the correct or safe way to upgrade third-party services.
{% endcapture %}
{% include templates/info-banner.md content=third-party-upgrade %}

After addressing third-party service versions as needed, you can continue with the [upgrade process](#run-upgrade).
