Create a Trendz database in Postgres:

```bash
docker compose -f docker-compose.yml exec -it postgres psql -U postgres -c "CREATE DATABASE trendz;"
```
{: .copy-code}

Create a separate docker compose file for Trendz Analytics:

```text
notepad docker-compose-trendz.yml
```
{: .copy-code}

Add the following lines to the yml file.

```yml
services:
  trendz:
    restart: always
    image: "thingsboard/trendz:{{ site.release.trendz_ver }}"
    ports:
      - "8888:8888"
    environment:
      TB_API_URL: http://thingsboard-pe:8080
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/trendz
      SPRING_DATASOURCE_USERNAME: postgres
      SPRING_DATASOURCE_PASSWORD: postgres
      SCRIPT_ENGINE_DOCKER_PROVIDER_URL: trendz-python-executor:8181
      SCRIPT_ENGINE_TIMEOUT: 30000
    volumes:
      - trendz-conf:/trendz-config-files
      - trendz-data:/data
    depends_on:
      - postgres
  trendz-python-executor:
    restart: always
    image: "thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}"
    ports:
      - "8181:8181"
    environment:
      EXECUTOR_MANAGER: 1
      EXECUTOR_SCRIPT_ENGINE: 6
      THROTTLING_QUEUE_CAPACITY: 10
      THROTTLING_THREAD_POOL_SIZE: 6
      NETWORK_BUFFER_SIZE: 5242880
    volumes:
      - trendz-python-executor-conf:/python-executor-config-files
      - trendz-python-executor-data:/data
volumes:
  trendz-conf:
    name: trendz-conf
    driver: local
  trendz-data:
    name: trendz-data
    driver: local
  trendz-python-executor-conf:
    name: trendz-python-executor-conf
    driver: local
  trendz-python-executor-data:
    name: trendz-python-executor-data
    driver: local
```
{: .copy-code.expandable-15}
