{% capture postgresql-info %}
ThingsBoard team recommends to use PostgreSQL for development and production environments with reasonable load (< 5000 msg/sec).
Many cloud vendors support managed PostgreSQL servers which is a cost-effective solution for most of ThingsBoard instances.
{% endcapture %}
{% include templates/info-banner.md content=postgresql-info %}

**ThingsBoard Edge** uses **PostgreSQL** database as a local storage.

{% include templates/install/postgres-install-ubuntu.md %}

Then, connect to the "postgres" database as the "postgres" user:

```bash
psql -U postgres -d postgres -h 127.0.0.1 -W
```
{: .copy-code}

Create the ThingsBoard Edge database named "tb_edge" :
```bash
CREATE DATABASE tb_edge;
```
{: .copy-code}

Press "Ctrl+D" twice to exit PostgreSQL.