TBMQ relies on **Valkey** to store messages for [DEVICE persistent clients](/docs/{{docsPrefix}}mqtt-broker/architecture/#persistent-device-client).
The cache also improves performance by reducing the number of direct database reads, especially when authentication is enabled and multiple clients connect at once.
Without caching, every new connection triggers a database query to validate MQTT client credentials, which can cause the unnecessary load under high connection rates.

To set up Valkey in Google Cloud, refer to the Google Memorystore for Valkey documentation:

* **Create Memorystore for Valkey instances**:
  Instructions to provision both **Cluster Mode Enabled** and **Cluster Mode Disabled** instances, including prerequisites like service connection policies and networking setup.
  ([Google Cloud][1])

* **General overview**:
  Details on the managed Valkey service, architecture, and key concepts such as shards, endpoints, and supported Valkey versions (including 8.0).
  ([Google Cloud][2])

* **Networking requirements**:
  Guidance on Private Service Connect and service connection policy setup necessary for secure connectivity.
  ([Google Cloud][3])

* **Instance & node sizing**:
  Recommendations for choosing node types according to workload (e.g., `standard-small`, `highmem-medium`), memory capacity, and performance characteristics.
  ([Google Cloud][4])

* **Cluster vs Standalone (Cluster Mode Enabled vs Disabled)**:
  Comparison of horizontal scaling, throughput, and feature support—helpful in choosing the appropriate mode for your use case.
  ([Google Cloud][5])

* **High Availability & Replicas**:
  Best practices for multi-zone deployment, replica usage for read scaling, and resilience in production scenarios.
  ([Google Cloud][6])

* **Best practices & scaling guidance**:
  Advice on memory management, eviction policies, when to scale, and how to handle growing workloads effectively.
  ([Google Cloud][7])

Once your Valkey cluster is ready, update the cache configuration in `tbmq-cache-configmap.yml` with the correct endpoint values:

* **For standalone Valkey**:
  Uncomment and set the following values. Make sure the `REDIS_HOST` value does **not** include the port (`:6379`).

  ```yaml
  REDIS_CONNECTION_TYPE: "standalone"
  REDIS_HOST: "YOUR_VALKEY_ENDPOINT_URL_WITHOUT_PORT"
  #REDIS_PASSWORD: "YOUR_REDIS_PASSWORD"
  ```

* **For Valkey cluster**:
  Provide a comma-separated list of "host:port" node endpoints to bootstrap from.

  ```yaml
  REDIS_CONNECTION_TYPE: "cluster"
  REDIS_NODES: "COMMA_SEPARATED_LIST_OF_NODES"
  #REDIS_PASSWORD: "YOUR_REDIS_PASSWORD"
  # Recommended in Kubernetes for handling dynamic IPs and failover:
  #REDIS_LETTUCE_CLUSTER_TOPOLOGY_REFRESH_ENABLED: "true"
  #REDIS_JEDIS_CLUSTER_TOPOLOGY_REFRESH_ENABLED: "true"
  ```

[1]: https://cloud.google.com/memorystore/docs/valkey/create-instances "Create instances | Memorystore for Valkey | Google Cloud"
[2]: https://cloud.google.com/memorystore/docs/valkey/product-overview "Memorystore for Valkey overview - Google Cloud"
[3]: https://cloud.google.com/memorystore/docs/valkey/networking "Networking | Memorystore for Valkey | Google Cloud"
[4]: https://cloud.google.com/memorystore/docs/valkey/instance-node-specification "Instance and node specification | Memorystore for Valkey | Google Cloud"
[5]: https://cloud.google.com/memorystore/docs/valkey/cluster-mode-enabled-and-disabled "Enable and disable cluster mode | Memorystore for Valkey - Google Cloud"
[6]: https://cloud.google.com/memorystore/docs/valkey/ha-and-replicas "High availability and replicas | Memorystore for Valkey | Google Cloud"
[7]: https://cloud.google.com/memorystore/docs/valkey/general-best-practices "Best practices for Memorystore for Valkey - Google Cloud"
