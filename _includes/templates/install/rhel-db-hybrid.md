{% capture hybrid-info %}
ThingsBoard team recommends to use Hybrid database approach if you do plan to have 1M+ devices in production or high data ingestion rate (> 5000 msg/sec).
In this case, ThingsBoard will be storing timeseries data in Cassandra while continue to use PostgreSQL for main entities (devices/assets/dashboards/customers).  
{% endcapture %}
{% include templates/info-banner.md content=hybrid-info %}

##### PostgreSQL Installation

{% include templates/install/postgres-install-rhel.md %}

{% include templates/install/create-tb-db-rhel.md %}

##### Cassandra Installation

{% include templates/install/cassandra-rhel-install.md %}

##### ThingsBoard Configuration

Edit ThingsBoard configuration file 

```bash 
sudo nano /etc/thingsboard/conf/thingsboard.conf
``` 
{: .copy-code}

Add the following lines to the configuration file. Don't forget **to replace** "PUT_YOUR_POSTGRESQL_PASSWORD_HERE" with your **real postgres user password**:

```bash
# DB Configuration 
export DATABASE_TS_TYPE=cassandra
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
``` 
{: .copy-code}

You can optionally add the following parameters to reconfigure your ThingsBoard instance to connect to external Cassandra nodes:

```bash
export CASSANDRA_CLUSTER_NAME=Thingsboard Cluster
export CASSANDRA_KEYSPACE_NAME=thingsboard
export CASSANDRA_URL=127.0.0.1:9042
export CASSANDRA_USE_CREDENTIALS=false
export CASSANDRA_USERNAME=
export CASSANDRA_PASSWORD=
```
{: .copy-code}