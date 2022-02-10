## Performance test methodology

The technique is quite simple and easy to reproduce. Here the special [performance-test tool](https://github.com/thingsboard/performance-tests/#running).
It creates entities like devices, dashboards, etc. Then sends telemetry the same way as device do.
As an output we will analyse the Thingsboard rule engine statistics dashboard and fancy API usage stats feature.
The goal is to compare the performance on each instance whether to use Kafka, Postgres or Cassandra and why.

[Setup the AWS EC2 instances](/docs/{{docsPrefix}}reference/performance/setup-aws-instances/) first. Instal Docker and Docker-compose.

Prepare docker-compose file on the Thingsboard instance

```bash
cat > docker-compose.yml
```
Copy the config below:

```bash
version: '3'
services:
  postgres:
    image: "postgres:14"
    network_mode: "host"
    restart: "always"
    volumes:
      - postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: thingsboard
      POSTGRES_PASSWORD: postgres
  tb:
    depends_on:
      - postgres
    image: "thingsboard/tb"
    network_mode: "host"
    restart: "always"
    volumes:
      - thingsboard-data:/data
      - thingsboard-logs:/var/log/thingsboard
    environment:
      SPRING_JPA_DATABASE_PLATFORM: "org.hibernate.dialect.PostgreSQLDialect"
      SPRING_DRIVER_CLASS_NAME: "org.postgresql.Driver"
      SPRING_DATASOURCE_URL: "jdbc:postgresql://localhost:5432/thingsboard"
      SPRING_DATASOURCE_USERNAME: "postgres"
      SPRING_DATASOURCE_PASSWORD: "postgres"
      TB_SERVICE_ID: "tb-node-0"
      DATABASE_TS_TYPE: "sql"
      TB_QUEUE_TYPE: "in-memory"
      HTTP_BIND_PORT: "8080"
      TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS: "10000"
      # Java options for 4G instance and JMX enabled
      JAVA_OPTS: " -Xmx2048M -Xms2048M -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
volumes: # to persist data between container restarts or being recreated
  postgres:
  thingsboard-data:
  thingsboard-logs:   
```
{: .copy-code}

Press `Ctrl`+`Shift`+`V` to paste and `Ctrl`+`D` to save the `docker-compose.yml`

For the sake of simplicity, we are using a [docker-compose host network mode](https://docs.docker.com/compose/compose-file/compose-file-v3/#network_mode).
This also helps to avoid docker-proxy overhead during active network communication between microservices.

### Start new Thingsboard

```bash
ssh thingsboard
```
```bash
# stop previous instance
docker-compose stop
# remove previous instance (old data will be lost)
docker-compose rm
# run new instance from scratch 
docker-compose up 
```

### Run the Performance test

```bash
ssh perf-test
```
```bash
docker run -it --rm --network host --name tb-perf-test \
  --env REST_URL=http://thingsboard:8080 \
  --env MQTT_HOST=thingsboard \
  --env DEVICE_END_IDX=6000 \
  --env MESSAGES_PER_SECOND=6000 \
  --env ALARMS_PER_SECOND=10 \
  --env DURATION_IN_SECONDS=600 \
  thingsboard/tb-ce-performance-test:latest
```
{: .copy-code}