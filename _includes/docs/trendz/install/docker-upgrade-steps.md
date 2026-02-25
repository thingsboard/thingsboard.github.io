{% assign current_version = include.version %}

1. Create a dump of your database:
    ```bash
    docker compose exec postgres sh -c "pg_dump -U postgres trendz > /var/lib/postgresql/data/trendz_dump"
    ```
    {: .copy-code}

2. Change the version of the `thingsboard/trendz` and `thingsboard/trendz-python-executor` in the `docker-compose.yml` file to the **{{ current_version }}**.

3. Execute the following commands:
{% if include.skipUpgrade %}
    ```bash
    docker pull thingsboard/trendz:{{ current_version }}
    docker compose stop trendz
    docker compose up -d
    ```
    {: .copy-code}
{% else %}
    ```bash
    docker pull thingsboard/trendz:{{ current_version }}
    docker compose stop trendz
    docker compose run --rm -e UPGRADE_TRENDZ=true trendz
    docker compose up -d
    ```
    {: .copy-code}
{% endif %} 