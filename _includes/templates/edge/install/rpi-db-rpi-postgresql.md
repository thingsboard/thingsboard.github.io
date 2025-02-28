{% capture postgresql-info %}
The ThingsBoard team recommends using **PostgreSQL** for development and production environments with **moderate load (less than 5000 msg/sec)**.
Many cloud providers offer managed **PostgreSQL** services, making it a cost-effective solution for most ThingsBoard deployments.
{% endcapture %}
{% include templates/info-banner.md content=postgresql-info %}

**ThingsBoard Edge** uses **PostgreSQL** database as a local storage.

{% include templates/install/postgres-install-rpi.md %}

Finally, create a new PostgreSQL database named **tb_edge** by running the following command:

```bash
echo "CREATE DATABASE tb_edge;" | psql -U postgres -d postgres -h 127.0.0.1 -W
```
{: .copy-code}

### ThingsBoard Configuration

Edit **ThingsBoard Edge** configuration file: 

```bash 
sudo bash -c 'echo "export DATABASE_TS_TYPE=sql
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
export SQL_POSTGRES_TS_KV_PARTITIONING=MONTHS" >> /etc/tb-edge/conf/tb-edge.conf'
``` 
{: .copy-code}

* **PUT_YOUR_POSTGRESQL_PASSWORD_HERE:** Replace with your **actual PostgreSQL password**.
* **SQL_POSTGRES_TS_KV_PARTITIONING:** Specify partitioning size for timestamp key-value storage. Allowed values: DAYS, MONTHS, YEARS, INDEFINITE.
