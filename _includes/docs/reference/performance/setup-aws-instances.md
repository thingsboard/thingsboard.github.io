#### Step 1. Launch EC2 instance. 

To run clear test lets spin up two instances for ThingsBoard and for performance tool.
Operating system is Linux, image *Ubuntu 20 LTS*. Architecture x64 or ARM depending on instance type.
Assign Elastic IP to get permanent access to the instances between restarts.
We need at least two instances: first is to run ThingsBoard itself and second is to run the Performance test application.   

![ThingsBoard and Performance test instances](https://img.thingsboard.io/reference/performance-aws-instances/method/setup/performance_test_aws_instances.png "ThingsBoard and Performance test instances")

At the beginning, the firewall does not allow to connect your instances. Lest open the necessary ports to enable connectivity between instances and your admin machine.  

Let's setup the network Security groups for both instances and open TCP ports 22 (SSH), 8080 (HTTP), 1883 (MQTT), 9999 (JMX) for inbound rules for source IPs (office, home, perf-test).

![Setup network security group for performance test](https://img.thingsboard.io/reference/performance-aws-instances/method/setup/performance_test_network_security_group.png "Setup network security group for performance test")

As fas as we experience the number of rules will affect the network performance, so another good option is to allow the "All traffic" for the trusted IPs and local network IP subnet.

![Security group inbound rules](https://img.thingsboard.io/reference/performance-aws-instances/method/setup/performance_test_network_security_group_inbound_rules.png)


#### Step 2. Setup SSH to the instance.

Optionally, setup SSH private keys to access the instances. It is convenient to put your `PEM` key file to the `~/.ssh/aws.pem` and set up `~/.ssh/config` like:
```bash
Host tb
 Hostname 52.50.5.45
 Port 22
 IdentityFile /home/username/.ssh/aws.pem
 IdentitiesOnly yes
 User ubuntu
```
{: .copy-code}

To connect ThingsBoard instance simply use the command below:
```bash
ssh tb
```

#### Step 3. Install Docker and Docker-compose.

We are going use docker and docker-compose to run performance tests under non-root users. 
To save the setup time and make the environment the same all the time we provide an all-in-one setup script below.  
Login with ssh and run the commands both on ThingsBoard and Performance test instances:

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


#### Step 4. Launch ThingsBoard and third-party components using docker-compose

Download the docker-compose file to the work directory. 
The docker-compose file is listed in the "How to reproduce the test" section that corresponds to your performance test [scenario](/docs/{{docsPrefix}}reference/performance-comparison/#test-summary).

Make sure your file is present in the working directory and is named as "docker-compose.yml", then execute the following commands: 

```bash
# stop previous instance (if any)
docker-compose stop
# remove previous instance (old data will be lost)
docker-compose rm
# run new instance from scratch 
docker-compose up 
```

Note: For the sake of simplicity, we are using a [docker-compose host network mode](https://docs.docker.com/compose/compose-file/compose-file-v3/#network_mode).
This also helps to avoid docker-proxy overhead during active network communication between microservices.
