**ThingsBoard includes In Memory Queue service and use it by default without extra settings.**

Create docker compose file for ThingsBoard queue service:

```text
notepad docker-compose.yml
```
{: .copy-code}

Add the following line to the yml file. Don’t forget to replace "PUT_YOUR_LICENSE_SECRET_HERE" with your **license secret obtained on the first step**:

```yml
services:
  postgres:
    restart: always
    image: "postgres:16"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: thingsboard
      POSTGRES_PASSWORD: postgres
    volumes:
      - postgres-data:/var/lib/postgresql/data
  thingsboard-pe:
    restart: always
    image: "thingsboard/tb-pe-node:{{ site.release.pe_full_ver }}"
    ports:
      - "8080:8080"
      - "1883:1883"
      - "8883:8883"
      - "9090:9090"
      - "7070:7070"
      - "5683-5688:5683-5688/udp"
    logging:
      driver: "json-file"
      options:
        max-size: "100m"
        max-file: "10"
    environment:
      TB_SERVICE_ID: tb-pe-node
      TB_LICENSE_SECRET: PUT_YOUR_LICENSE_SECRET_HERE
      TB_LICENSE_INSTANCE_DATA_FILE: /data/license.data
      REPORTS_SERVER_ENDPOINT_URL: http://tb-web-report:8383
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/thingsboard
      DEFAULT_TRENDZ_URL: http://trendz:8888
      DEFAULT_TB_URL: http://thingsboard-pe:8080
    volumes:
      - license-data:/data
    depends_on:
      - postgres
  tb-web-report:
    restart: always
    image: "thingsboard/tb-pe-web-report:{{ site.release.pe_full_ver }}"
    ports:
      - "8383"
    depends_on:
      - thingsboard-pe
    environment:
      HTTP_BIND_ADDRESS: 0.0.0.0
      HTTP_BIND_PORT: 8383
      LOGGER_LEVEL: info
      LOG_FOLDER: logs
      LOGGER_FILENAME: tb-web-report-%DATE%.log
      DOCKER_MODE: true
      DEFAULT_PAGE_NAVIGATION_TIMEOUT: 120000
      DASHBOARD_IDLE_WAIT_TIME: 3000
      USE_NEW_PAGE_FOR_REPORT: true
  trendz:
    profiles: ['trendz']
    restart: always
    image: "thingsboard/trendz:{{ site.release.trendz_ver }}"
    ports:
      - "8888:8888"
    environment:
      TB_API_URL: http://thingsboard-pe:8080
      SPRING_DATASOURCE_URL: jdbc:postgresql://trendz-postgres:5432/trendz
      SPRING_DATASOURCE_USERNAME: postgres
      SPRING_DATASOURCE_PASSWORD: postgres
      SCRIPT_ENGINE_DOCKER_PROVIDER_URL: trendz-python-executor:8181
      SCRIPT_ENGINE_TIMEOUT: 30000
    volumes:
      - trendz-conf:/trendz-config-files
      - trendz-data:/data
    depends_on:
      - trendz-postgres
  trendz-python-executor:
    profiles: ['trendz']
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
  trendz-postgres:
    profiles: ['trendz']
    restart: always
    image: "postgres:16"
    ports:
      - "5433:5432"
    environment:
      POSTGRES_DB: trendz
      POSTGRES_PASSWORD: postgres
    volumes:
      - trendz-postgres-data:/var/lib/postgresql/data
volumes:
  postgres-data:
    name: tb-postgres-data
    driver: local
  license-data:
    name: tb-pe-license-data
    driver: local
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
  trendz-postgres-data:
    name: trendz-postgres-data
    driver: local
```
{: .copy-code.expandable-15}
