## Prerequisites

{% include templates/install/docker-install.md %}

{% include templates/install/docker-install-note.md %}

Create docker compose file
```bash
cat <<EOT >> tb-web-report.compose.yml
version: '3.0'
services:
  tb-web-report:
    restart: always
    image: "thingsboard/tb-pe-web-report:3.8.0PE"
    ports:
      - "8383:8383"
    env_file:
      - ./webreport.env
EOT
```
{: .copy-code}

Create .env file for tb-web-report container
```bash
cat <<EOT >> webreport.env
HTTP_BIND_ADDRESS=0.0.0.0
HTTP_BIND_PORT=8383
LOGGER_LEVEL=info
LOG_FOLDER=logs
LOGGER_FILENAME=tb-web-report-%DATE%.log
DOCKER_MODE=true

DEFAULT_PAGE_NAVIGATION_TIMEOUT=120000
DASHBOARD_LOAD_WAIT_TIME=3000
USE_NEW_PAGE_FOR_REPORT=true
EOT
```

Start WebReport service in docker
```bash
docker compose -f tb-web-report.compose.yml up -d
```
{: .copy-code}