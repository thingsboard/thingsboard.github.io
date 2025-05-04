# ssh perf-test

sudo apt update
sudo apt upgrade --yes

# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin --yes

sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker

sudo docker run --rm hello-world

cat /etc/docker/daemon.json
cat <<EOT | sudo tee /etc/docker/daemon.json
{
  "log-driver": "local",
  "log-opts": {
    "max-size": "10m"
  }
}
EOT
cat /etc/docker/daemon.json

sudo systemctl restart docker.service
sudo systemctl restart containerd.service
docker info --format '{{.LoggingDriver}}'
sudo docker run --rm hello-world

sudo reboot now

# ssh perf-test

sudo apt install htop mc --yes

cat > docker-compose.yaml
# ^V
# ^D

docker compose up -d
docker compose logs -f

# Setup EC2 -> Security Groups -> sg-028d40346dd5fb09f -> perf-test #Edit inbound rules - Allow All Traffic for sg-028d40346dd5fb09f, for YourIP

# go 63.33.133.121:8080
# login tenant@thingsboard.org
# check connectivity curl -v -X POST http://63.33.133.121:8080/api/v1/T2_TEST_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:25}"

# ssh -L 9999:127.0.0.1:9999 -L 1099:127.0.0.1:1099 -L 9199:127.0.0.1:9199 -L 7199:127.0.0.1:7199 perf-test