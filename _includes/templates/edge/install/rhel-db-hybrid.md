{% capture hybrid-info %}
The ThingsBoard team recommends using a **hybrid database approach** if you plan to manage 1M+ devices in production or handle **high data ingestion rate (more than 5000 msg/sec)**. 
In this case, **ThingsBoard Edge** stores time-series data in Cassandra while continuing to use PostgreSQL for primary entities such as devices, assets, dashboards, and customers.
{% endcapture %}
{% include templates/info-banner.md content=hybrid-info %}

##### PostgreSQL Installation

{% include templates/edge/install/postgres-install-rhel.md %}

{% include templates/edge/create-tb-db-rhel.md %}

##### Cassandra Installation

{% include templates/edge/install/cassandra-rhel-install.md %}

##### ThingsBoard Edge Configuration

Edit **ThingsBoard Edge** configuration file: 

```bash 
sudo nano /etc/tb-edge/conf/tb-edge.conf
``` 
{: .copy-code}

Add the following lines to the configuration file. Don't forget **to replace** "PUT_YOUR_POSTGRESQL_PASSWORD_HERE" with your **real postgres user password**:

```bash
# DB Configuration 
export DATABASE_TS_TYPE=cassandra
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/tb_edge
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
``` 
{: .copy-code}

You can optionally add the following parameters to reconfigure your ThingsBoard Edge instance to connect to external Cassandra nodes:

```bash
export CASSANDRA_CLUSTER_NAME=Edge Cluster
export CASSANDRA_KEYSPACE_NAME=thingsboard
export CASSANDRA_URL=127.0.0.1:9042
export CASSANDRA_USE_CREDENTIALS=false
export CASSANDRA_USERNAME=
export CASSANDRA_PASSWORD=
```
{: .copy-code}