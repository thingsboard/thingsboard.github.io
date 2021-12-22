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

![Thingsboard and Performance test instances](/home/smatvienko/thingsboard.github.io/images/reference/performance-aws-instances/method/2021-12-22_14-09.png "Thingsboard and Performance test instances")

Setup network Security groups for both instances and open TCP ports 22 (SSH), 8080 (HTTP), 1883 (MQTT), 9999 (JMX) for inbound rules for source IPs (office, home, perf-test).

![Setup network security group for performance test](/home/smatvienko/thingsboard.github.io/images/reference/performance-aws-instances/method/2021-12-22_14-29.png "Setup network security group for performance test")

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

We are going use docker and docker-compose to run performance tests, so let's prepare both instances. Login with ssh abd run the commands:

```bash
sudo apt update
sudo apt install -y docker docker-compose
# manage Docker as a non-root user
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
# Test non root docker run
docker run hello-world
```
