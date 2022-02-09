## Performance test methodology

The technique is quite simple and easy to reproduce. Here the special [performance-test tool](https://github.com/thingsboard/performance-tests/#running).
It creates entities like devices, dashboards, etc. Then sends telemetry the same way as device do.
As an output we will analyse the Thingsboard rule engine statistics dashboard and fancy API usage stats feature.
The goal is to compare the performance on each instance whether to use Kafka, Postgres or Cassandra and why.

### Setup AWS instances

To run clear test lets spin up two instances for Thingsboard and for performance tool. Assign Elastic IP to get permanent access to the instances.

![Thingsboard and Performance test instances](/images/reference/performance-aws-instances/method/setup/performance_test_aws_instances.png "Thingsboard and Performance test instances")

Setup network Security groups for both instances and open TCP ports 22 (SSH), 8080 (HTTP), 1883 (MQTT), 9999 (JMX) for inbound rules for source IPs (office, home, perf-test).

![Setup network security group for performance test](/images/reference/performance-aws-instances/method/setup/performance_test_network_security_group.png "Setup network security group for performance test")

As fas as we experience the number of rules will affect the network performance, so another good option is to allow the "All traffic" for the trusted IPs and local network IP subnet.

![Security group inbound rules](/images/reference/performance-aws-instances/method/setup/performance_test_network_security_group_inbound_rules.png)

Optionally, setup SSH private keys to access the instances. It is convenient to set up ~/.ssh/config like:
```bash
Host thingsboard
 Hostname 52.50.5.45
 Port 22
 IdentityFile /home/username/.ssh/aws.pem
 IdentitiesOnly yes
 User ubuntu
Host perf-test
 Hostname 34.242.159.12
 Port 22
 IdentityFile /home/username/.ssh/aws.pem
 IdentitiesOnly yes
 User ubuntu
```
{: .copy-code}

We are going use docker and docker-compose to run performance tests, so let's prepare both instances. Login with ssh and run the commands:

```bash
sudo apt update
sudo apt install -y docker docker-compose
# setup some utilities
sudo apt install -y htop iotop
# manage Docker as a non-root user
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
# test non-root docker run
docker run hello-world
```
{: .copy-code}

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

For more convenient usage you may add IP address of Thingsboard to the Performance test instance

```bash
ssh perf-test
```
```bash
#replace with your Thingsboard instance ip
echo '52.50.5.45 thingsboard' | sudo tee -a /etc/hosts
```

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