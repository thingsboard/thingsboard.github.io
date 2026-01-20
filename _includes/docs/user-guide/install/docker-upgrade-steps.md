{% assign current_version = include.version %}

1. Change the version of the `thingsboard/tb-node` in the `docker-compose.yml` file to the **{{ current_version }}**.

2. Execute the following commands:


{% if include.skipUpgrade %}
  ```bash
  docker pull thingsboard/tb-node:{{ current_version }}
  docker compose stop thingsboard-ce 
  docker compose up -d
  ```
  {: .copy-code}
{% else %}
  ```bash
  docker pull thingsboard/tb-node:{{ current_version }}
  docker compose stop thingsboard-ce
  docker compose run --rm -e UPGRADE_TB=true thingsboard-ce 
  docker compose up -d
  ```
  {: .copy-code}
{% endif %} 
