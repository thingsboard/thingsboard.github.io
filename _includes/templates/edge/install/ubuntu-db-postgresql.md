{% capture postgresql-info %}
The ThingsBoard team recommends using **PostgreSQL** for development and production environments with **moderate load (less than 5000 msg/sec)**.
Many cloud providers offer managed **PostgreSQL** services, making it a cost-effective solution for most ThingsBoard deployments.
{% endcapture %}
{% include templates/info-banner.md content=postgresql-info %}

**ThingsBoard Edge** uses **PostgreSQL** database as a local storage.

{% include templates/install/postgres-install-ubuntu.md %}

Finally, create a new PostgreSQL database named **tb_edge** by running the following command:

```bash
echo "CREATE DATABASE tb_edge;" | psql -U postgres -d postgres -h 127.0.0.1 -W
```
{: .copy-code}