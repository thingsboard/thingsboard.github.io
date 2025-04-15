With v2.1.0, TBMQ updates the versions of key third-party dependencies, including Redis, PostgreSQL, and Kafka.

| Service        | Previous Version | Updated Version |
|----------------|------------------|-----------------|
| **Redis**      | 7.0              | 7.2.5           |
| **PostgreSQL** | 15.x             | 16.x            |
| **Kafka**      | 3.5.1            | 3.7.0           |

We recommend aligning your environment with the updated third-party versions to ensure full compatibility with this release.

{% capture third-party-upgrade %}
We do not provide step-by-step upgrade documentation for third-party services.
Please refer to the appropriate resources from your infrastructure or service provider when upgrading.
{% endcapture %}
{% include templates/info-banner.md content=third-party-upgrade %}