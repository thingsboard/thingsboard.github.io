
We will use special [performance-test tool](https://github.com/thingsboard/performance-tests/#running) that is designed to send telemetry to ThingsBoard.
This tool also creates entities like devices, dashboards, etc.

#### Step 1. Launch EC2 instance.

Launch the instance in the same VPC where your target ThingsBoard server is [deployed](/docs/{{docsPrefix}}reference/performance/setup-aws-instances/).
Make sure ThingsBoard instance ports 8080 and 1883 are accessible from the test instance.

#### Step 2. Setup SSH to the instance.

Optionally, setup SSH private keys to access the instances. It is convenient to put your `PEM` key file to the `~/.ssh/aws.pem` and set up `~/.ssh/config` like:
```bash
Host pt
 Hostname 34.242.159.12
 Port 22
 IdentityFile /home/username/.ssh/aws.pem
 IdentitiesOnly yes
 User ubuntu
```
{: .copy-code}


To connect Performance test instance use this command
```bash
ssh pt
```

#### Step 3. Install Docker and Docker-compose.

We are going use docker and docker-compose to run performance tests under non-root users. 
To save the setup time and make the environment the same all the time we provide an all-in-one setup script below.  
Login with ssh and run the commands both on Thingsboard and Performance test instances:

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


### Step 4. Run the performance test

Use the command listed in the "How to reproduce the test" section that corresponds to your performance test [scenario](/docs/{{docsPrefix}}reference/performance-comparison/#test-summary).

The command is similar to the one listed below. Don't forget to replace the value of TB_INTERNAL_IP with the private IP address of your target ThingsBoard instance.

```bash
# Put your ThingsBoard private IP address here, assuming both ThingsBoard and performance tests EC2 instances are in same VPC.
export TB_INTERNAL_IP=172.31.16.229 
docker run -it --rm --network host --name tb-perf-test \
  --env REST_URL=http://$TB_INTERNAL_IP:8080 \
  --env MQTT_HOST=$TB_INTERNAL_IP \
  --env DEVICE_END_IDX=5000 \
  --env MESSAGES_PER_SECOND=1000 \
  --env ALARMS_PER_SECOND=10 \
  --env DURATION_IN_SECONDS=86400 \
  --env DEVICE_CREATE_ON_START=true \
  thingsboard/tb-ce-performance-test:3.3.3
```
{: .copy-code}