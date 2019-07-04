{% capture hybrid-info %}
ThingsBoard team recommends to use Hybrid database approach if you do plan to have 1M+ devices in production or high data ingestion rate (> 5000 msg/sec).
In this case, ThingsBoard will be storing timeseries data in Cassandra while continue to use PostgreSQL for main entities (devices/assets/dashboards/customers).  
{% endcapture %}
{% include templates/info-banner.md content=hybrid-info %}

#### [Optional] Cassandra Installation

**NOTE:** This is an **optional** step. It is required only for specific production cases with high performance and scalability requirements. 

{% include templates/cassandra-ubuntu-install.md %}