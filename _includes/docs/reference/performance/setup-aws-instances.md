### Setup AWS instances

To run clear test lets spin up two instances for Thingsboard and for performance tool.
Operating system is Linux, image *Ubuntu 20 LTS*. Architecture x64 or ARM depending on instance type.
Assign Elastic IP to get permanent access to the instances between restarts.
We need at least two instances: first is to run Thingsboard itself and second is to run the Performance test application.   

![Thingsboard and Performance test instances](/images/reference/performance-aws-instances/method/setup/performance_test_aws_instances.png "Thingsboard and Performance test instances")

At the beginning, the firewall does not allow to connect your instances. Lest open the necessary ports to enable connectivity between instances and your admin machine.  

Let's setup the network Security groups for both instances and open TCP ports 22 (SSH), 8080 (HTTP), 1883 (MQTT), 9999 (JMX) for inbound rules for source IPs (office, home, perf-test).

![Setup network security group for performance test](/images/reference/performance-aws-instances/method/setup/performance_test_network_security_group.png "Setup network security group for performance test")

As fas as we experience the number of rules will affect the network performance, so another good option is to allow the "All traffic" for the trusted IPs and local network IP subnet.

![Security group inbound rules](/images/reference/performance-aws-instances/method/setup/performance_test_network_security_group_inbound_rules.png)

Optionally, setup SSH private keys to access the instances. It is convenient to put your `PEM` key file to the `~/.ssh/aws.pem` and set up `~/.ssh/config` like:
```bash
Host tb
 Hostname 52.50.5.45
 Port 22
 IdentityFile /home/username/.ssh/aws.pem
 IdentitiesOnly yes
 User ubuntu
Host pt
 Hostname 34.242.159.12
 Port 22
 IdentityFile /home/username/.ssh/aws.pem
 IdentitiesOnly yes
 User ubuntu
```
{: .copy-code}

To connect Thingsboard instance simply use to command below
```bash
ssh tb
```

To connect Performance test instance use this command
```bash
ssh pt
```

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
