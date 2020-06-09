---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard PE using Docker (Windows)
description: Installing ThingsBoard PE IoT Platform using Docker (Windows)

---

* TOC
{:toc}


This guide will help you to install and start ThingsBoard Professional Edition (PE) using Docker on Windows. 
This guide covers standalone ThingsBoard PE installation. The container image used in this guide has embedded PostgreSQL 11 to simplify setup. 
If you are looking for a cluster installation instruction, please visit [cluster setup page](/docs/user-guide/install/pe/cluster-setup/).  


## Prerequisites

- [Install Docker Toolbox for Windows](https://docs.docker.com/toolbox/toolbox_install_windows/)

## Step 1. Obtain the license key 

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

Note: We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.

## Step 2. Choose ThingsBoard queue service

{% include templates/install/install-queue.md %}

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/windows-pe-docker-queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka%,%templates/install/windows-pe-docker-queue-kafka.md%br%
AWS SQS <small>(managed service from AWS)</small>%,%aws-sqs%,%templates/install/windows-pe-docker-queue-aws-sqs.md%br%
Google Pub/Sub <small>(managed service from Google)</small>%,%pubsub%,%templates/install/windows-pe-docker-queue-pub-sub.md%br%
Azure Service Bus <small>(managed service from Azure)</small>%,%service-bus%,%templates/install/windows-pe-docker-queue-service-bus.md%br%
RabbitMQ <small>(for small on-prem installations)</small>%,%rabbitmq%,%templates/install/windows-pe-docker-queue-rabbitmq.md{% endcapture %}

{% include content-toggle.html content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %} 

Where: 
    
- `8080:9090`            - connect local port 8080 to exposed internal HTTP port 9090
- `1883:1883`            - connect local port 1883 to exposed internal MQTT port 1883    
- `5683:5683`            - connect local port 5683 to exposed internal COAP port 5683 
- `~/.mytb-data:/data`   - mounts the host's dir `~/.mytb-data` to ThingsBoard DataBase data directory
- `~/.mytb-logs:/var/log/thingsboard`   - mounts the host's dir `~/.mytb-logs` to ThingsBoard logs directory
- `mytbpe`             - friendly local name of this machine
- `restart: always`        - automatically start ThingsBoard in case of system reboot and restart in case of failure.
- `image: store/thingsboard/tb-pe:3.0.1PE`          - docker image.

## Step 3. Running

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

Windows users should use docker managed volume for ThingsBoard DataBase. 
Create docker volume (for ex. `mytbpe-data`) before executing docker run command:
Open "Docker Quickstart Terminal". Execute the following command to create docker volume:

``` 
docker volume create mytbpe-data
docker volume create mytbpe-logs
```
{: .copy-code}


Execute the following command to up this docker compose directly:

**NOTE**: For running docker compose commands you have to be in a directory with docker-compose.yml file. 

```
docker-compose pull
docker-compose up
```
{: .copy-code}

In order to get access to necessary resources from external IP/Host on Windows machine, please execute the following commands:

``` 
VBoxManage controlvm "default" natpf1 "tcp-port8080,tcp,,8080,,9090"  
VBoxManage controlvm "default" natpf1 "tcp-port1883,tcp,,1883,,1883"
VBoxManage controlvm "default" natpf1 "tcp-port5683,tcp,,5683,,5683"
```
{: .copy-code}
    
After executing this command you can open `http://{your-host-ip}:8080` in you browser (for ex. `http://localhost:8080`). You should see ThingsBoard login page.
Use the following default credentials:

- **Systen Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer
    
You can always change passwords for each account in account profile page.

## Detaching, stop and start commands

You can detach from session terminal with `Ctrl-p` `Ctrl-q` - the container will keep running in the background.

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

```
docker-compose logs -f mytbpe
```
{: .copy-code}

To stop the container:

```
docker-compose stop
```
{: .copy-code}

To start the container:

```
docker-compose start
```
{: .copy-code}

## Troubleshooting

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use [Google public DNS servers](https://developers.google.com/speed/public-dns/docs/using#windows)


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
