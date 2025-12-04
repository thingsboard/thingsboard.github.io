{% assign current_version = include.version %}

1. Change the version of the `thingsboard/tb-pe-node` and `thingsboard/tb-web-report` in the `docker-compose.yml` file to the **{{ current_version }}**.

2. Execute the following commands:

  ```bash
  docker pull thingsboard/tb-pe-node:{{ current_version }}
  docker pull thingsboard/tb-web-report:{{ current_version }}
  docker compose stop thingsboard-pe
  docker compose run --rm -e UPGRADE_TB=true thingsboard-pe
  docker compose up -d
  ```
  {: .copy-code}