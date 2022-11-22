{% capture postgresql-info %}
ThingsBoard team recommends to use PostgreSQL for development and production environments with reasonable load (< 5000 msg/sec).
Many cloud vendors support managed PostgreSQL servers which is a cost-effective solution for most of ThingsBoard instances.
{% endcapture %}
{% include templates/info-banner.md content=postgresql-info %}

##### PostgreSQL Installation

{% include templates/install/postgres-install-ubuntu.md %}

{% include templates/install/create-tb-db.md %}

##### ThingsBoard Configuration

Edit ThingsBoard configuration file 

```bash 
sudo nano /etc/thingsboard/conf/thingsboard.conf
``` 
{: .copy-code}

Add the following lines to the configuration file. Don't forget **to replace** "PUT_YOUR_POSTGRESQL_PASSWORD_HERE" with your **real postgres user password**:

```bash
# DB Configuration 
export DATABASE_TS_TYPE=sql
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
# Specify partitioning size for timestamp key-value storage. Allowed values: DAYS, MONTHS, YEARS, INDEFINITE.
export SQL_POSTGRES_TS_KV_PARTITIONING=MONTHS
```
{: .copy-code}