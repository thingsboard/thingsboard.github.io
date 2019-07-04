{% capture postgresql-info %}
ThingsBoard team recommends to use PostgreSQL for development and production environments with reasonable load (< 5000 msg/sec).
Many cloud vendors support managed PostgreSQL servers which is a cost-effective solution for most of ThingsBoard instances.
{% endcapture %}
{% include templates/info-banner.md content=postgresql-info %}

#### PostgreSQL Installation (recommended)

Instructions listed below will help you to install PostgreSQL.

```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
```

{% include templates/postgres-post-install.md %}

{% include templates/create-tb-db.md %}