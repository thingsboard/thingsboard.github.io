```yml
services:
  trendz:
    profiles: ['trendz']
    restart: always
    image: "thingsboard/trendz:{{ site.release.trendz_ver }}"
    ports:
      - "8888:8888"
    environment:
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
      - "5432:5432"
    environment:
      POSTGRES_DB: trendz
      POSTGRES_PASSWORD: postgres
    volumes:
      - trendz-postgres-data:/var/lib/postgresql/data
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
  trendz-postgres-data:
    name: trendz-postgres-data
    driver: local
```
{: .copy-code}

Where:

- `8888:8888` - connect local port 8888 to exposed internal HTTP port 8888
- `trendz-conf:/trendz-config-files` - mounts the volume `trendz-conf` to Trendz directory with the configuration files
- `trendz-data:/data` - mounts the volume `trendz-data` to Trendz data directory
- `trendz-postgres-data:/var/lib/postgresql/data` - mounts the volume `trendz-postgres-data` to Postgres data directory
- `trendz` - name of the Trendz Docker service
- `--restart always` - automatically start Trendz in case of system reboot and restart in case of failure.
- `thingsboard/trendz:{{ site.release.trendz_ver }}` - Trendz docker image
- `thingsboard/trendz-python-executor:{{ site.release.trendz_ver }}` - Trendz python script executor docker image
- `SCRIPT_ENGINE_TIMEOUT` - Python script execution timeout
