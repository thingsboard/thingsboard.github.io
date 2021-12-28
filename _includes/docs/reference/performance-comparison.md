* TOC
{:toc}

How about performance?

Everything perfect when you do the first step, but what happens when you go production? 
How many resources do you need to scale up? Let's discover!

We are going to spin up a few AWS instances with different resources and find out the limits for each one of this.

## Performance test methodology

The technique is quite simple and easy to reproduce. Here the special [performance-test tool](https://github.com/thingsboard/performance-tests/#running). 
It creates entities like devices, dashboards, etc. Then sends telemetry the same way as device do. 
As an output we will analyse the Thingsboard rule engine statistics dashboard and fancy API usage stats feature.
The goal is to compare the performance on each instance and chose between postgres and cassandra telemetry storage.

To run clear test lets spin up two instances for Thingsboard and for performance tool. Assign Elastic IP to get permanent access to the instances.

![Thingsboard and Performance test instances](/images/reference/performance-aws-instances/method/performance_test_aws_instances.png "Thingsboard and Performance test instances")

Setup network Security groups for both instances and open TCP ports 22 (SSH), 8080 (HTTP), 1883 (MQTT), 9999 (JMX) for inbound rules for source IPs (office, home, perf-test).

![Setup network security group for performance test](/images/reference/performance-aws-instances/method/performance_test_network_security_group.png "Setup network security group for performance test")

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

Prepare docker-compose file on the Thingsboard instance

```bash
cat > docker-compose.yml
```
Copy the config below:

```bash
version: '2.2'
services:
  tb:
    restart: "no"
    image: "thingsboard/tb-postgres"
    ports:
      - "8080:9090"
      - "1883:1883"
      - "7070:7070"
      - "5683-5688:5683-5688/udp"
      - "5432:5432" #postgresql
      - "9999:9999" #jmx
    environment:
      TB_SERVICE_ID: "tb-node-0"
      DATABASE_TS_TYPE: "sql"
      TB_QUEUE_TYPE: "in-memory"
      TB_QUEUE_RE_MAIN_PACK_PROCESSING_TIMEOUT_MS: "10000"
      # Java options for 4G instance and JMX enabled
      JAVA_OPTS: " -Xmx2048M -Xms2048M -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1" 
```
{: .copy-code}

Press `Ctrl`+`Shift`+`V` to paste and `Ctrl`+`D` to save the `docker-compose.yml`

Let's add IP address of Thingsboard to the Performance test instance

```bash
ssh perf-test
```
```bash
#replace with your Thingsboard instance ip
echo '52.50.5.45 thingsboard' | sudo tee -a /etc/hosts
```

## Run the test

### Start the new Thingsboard

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
   --env TEST_SEQUENTIAL=false \
   --env DEVICE_START_IDX=0 \
   --env DEVICE_END_IDX=5000 \
   --env MESSAGES_PER_SECOND=5000 \
   --env ALARMS_PER_SECOND=10 \
   --env DURATION_IN_SECONDS=600 \
   --env DEVICE_CREATE_ON_START=false \
   --env DEVICE_DELETE_ON_COMPLETE=false \
   --env CUSTOMER_CREATE_ON_START=true \
   --env CUSTOMER_DELETE_ON_COMPLETE=false \
   --env DASHBOARD_CREATE_ON_START=true \
   --env DASHBOARD_DELETE_ON_COMPLETE=false \
   --env UPDATE_ROOT_RULE_CHAIN=false \
   --env REVERT_ROOT_RULE_CHAIN=false \
   thingsboard/tb-ce-performance-test:latest
```

Open your browser and go http://52.50.5.45:8080/dashboards and login. Use your instance IP address instead.  
Default login for demo instance is `tenant@thingsboard.org`, password is `tenant`.

![Thingsboard dashboard list with Rule Engine Statistics](/images/reference/performance-aws-instances/method/performance_test_thingsboard_dashboard_list.png "Thingsboard dashboard list with Rule Engine Statistics")

Choose the "Rule Engine Statistics" dashboard. You can see how the system perform under the load.

![Thingsboard rule engine statistics](/images/reference/performance-aws-instances/method/performance_test_thingsboard_rule_engine_statistics_queue_stats.png "Thingsboard rule engine statistics")

Another fancy feature is the API usage page

![Thingsboard API usage feature](/images/reference/performance-aws-instances/method/performance_test_thingsboard_api_usage_feature.png "Thingsboard API usage feature")

### Monitor the Thingsboard Java application

To monitor Thingsboard application we will use the [Visual VM](https://visualvm.github.io/)
The JMX have been enabled in `docker-compose.yml` with this line  

```bash
JAVA_OPTS: " -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=127.0.0.1"
```

Let's forward JMX port from Thingsboard instance to the local machine

```bash
ssh -L 9999:127.0.0.1:9999 thingsboard 
```

Now we can connect with VisualVM to the Thingsboard application and discover the internals

![Thingsboard JMX overview with VisualVM](/images/reference/performance-aws-instances/method/performance_test_thingsboard_jmx_visual_vm_overview.png "Thingsboard JMX overview with VisualVM")
