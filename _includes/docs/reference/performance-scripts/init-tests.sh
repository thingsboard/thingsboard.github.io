#!/bin/bash
. test-ips.sh

COUNTER=0

for IP in ${IPS}; do
  let COUNTER++
  echo "INIT ${COUNTER} FOR ${IP}"

  ssh -i ~/.ssh/aws/smatvienko.pem -o StrictHostKeyChecking=accept-new ubuntu@${IP} <<'ENDSSH'
set +x
#optional. replace with your Thingsboard instance ip
#echo '52.50.5.45 thingsboard' | sudo tee -a /etc/hosts
#extend the local port range up to 64500 
cat /proc/sys/net/ipv4/ip_local_port_range
#32768	60999
echo "net.ipv4.ip_local_port_range = 1024 65535" | sudo tee -a /etc/sysctl.conf
sudo -s sysctl -p
cat /proc/sys/net/ipv4/ip_local_port_range
#1024	65535
ulimit -n 1048576
sudo sysctl -w net.netfilter.nf_conntrack_max=1048576
sudo apt update
sudo apt install -y git maven docker docker-compose htop iotop mc screen
# manage Docker as a non-root user
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
# test non-root docker run
docker run hello-world
cd ~
git clone https://github.com/thingsboard/performance-tests.git
# git pull
cd performance-tests
screen -d -m ~/performance-tests/build.sh
screen -ls
ENDSSH

done
