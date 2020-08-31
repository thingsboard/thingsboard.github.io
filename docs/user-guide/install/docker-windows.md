---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard using Docker (Windows)
description: Installing ThingsBoard IoT Platform using Docker (Windows)

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide will help you to install and start ThingsBoard using Docker on Windows.


## Prerequisites

- [Install Docker Toolbox for Windows](https://docs.docker.com/toolbox/toolbox_install_windows/)

## Running

Depending on the database used there are three type of ThingsBoard single instance docker images:

* [thingsboard/tb-postgres](https://hub.docker.com/r/thingsboard/tb-postgres/) - single instance of ThingsBoard with PostgreSQL database.
    
    Recommended option for small servers with at least 1GB of RAM and minimum load (few messages per second). 2-4GB is recommended.
* [thingsboard/tb-cassandra](https://hub.docker.com/r/thingsboard/tb-cassandra/) - single instance of ThingsBoard with Cassandra database. 
    
    The most performant and recommended option but requires at least 6GB of RAM. 8GB is recommended.  
* [thingsboard/tb](https://hub.docker.com/r/thingsboard/tb/) - single instance of ThingsBoard with embedded HSQLDB database. 
    
    **Note:** Not recommended for any evaluation or production usage and is used only for development purposes and automatic tests. 

In this instruction `thingsboard/tb-postgres` image will be used. You can choose any other images with different databases (see above).

Windows users should use docker managed volume for ThingsBoard DataBase. 
Create docker volume (for ex. `mytb-data`) before executing docker run command:
Open "Docker Quickstart Terminal". Execute the following command to create docker volume:

``` 
docker volume create mytb-data
docker volume create mytb-logs
```

## Choose ThingsBoard queue service

{% include templates/install/install-queue.md %}

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/windows-docker-queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka%,%templates/install/windows-docker-queue-kafka.md%br%
AWS SQS <small>(managed service from AWS)</small>%,%aws-sqs%,%templates/install/windows-docker-queue-aws-sqs.md%br%
Google Pub/Sub <small>(managed service from Google)</small>%,%pubsub%,%templates/install/windows-docker-queue-pub-sub.md%br%
Azure Service Bus <small>(managed service from Azure)</small>%,%service-bus%,%templates/install/windows-docker-queue-service-bus.md%br%
RabbitMQ <small>(for small on-prem installations)</small>%,%rabbitmq%,%templates/install/windows-docker-queue-rabbitmq.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/windows-docker-queue-confluent-cloud.md{% endcapture %}

{% include content-toggle.html content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %} 

Where: 
    
- `8080:9090`            - connect local port 8080 to exposed internal HTTP port 9090
- `1883:1883`            - connect local port 1883 to exposed internal MQTT port 1883    
- `5683:5683`            - connect local port 5683 to exposed internal COAP port 5683 
- `~/.mytb-data:/data`   - mounts the host's dir `~/.mytb-data` to ThingsBoard DataBase data directory
- `~/.mytb-logs:/var/log/thingsboard`   - mounts the host's dir `~/.mytb-logs` to ThingsBoard logs directory
- `mytb`             - friendly local name of this machine
- `restart: always`        - automatically start ThingsBoard in case of system reboot and restart in case of failure.
- `image: thingsboard/tb-postgres`          - docker image, can be also `thingsboard/tb-cassandra` or `thingsboard/tb`

Execute the following command to up this docker compose directly:

**NOTE**: For running docker compose commands you have to be in a directory with docker-compose.yml file. 

```
docker-compose pull
docker-compose up
```
{: .copy-code}

In order to get access to necessary resources from external IP/Host on Windows machine, please execute the following commands:

``` 
set PATH=%PATH%;"C:\Program Files\Oracle\VirtualBox"
VBoxManage controlvm "default" natpf1 "tcp-port8080,tcp,,8080,,9090"  
VBoxManage controlvm "default" natpf1 "tcp-port1883,tcp,,1883,,1883"
VBoxManage controlvm "default" natpf1 "tcp-port5683,tcp,,5683,,5683"
```
{: .copy-code}
    
Where: 
    
- `C:\Program Files\Oracle\VirtualBox`            - path to your VirtualBox installation directory


After executing this command you can open `http://{your-host-ip}:9090` in you browser (for ex. `http://localhost:9090`). You should see ThingsBoard login page.
Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin
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

## Upgrading

In order to update to the latest image, open "Docker Quickstart Terminal" and execute the following commands:

```
$ docker pull thingsboard/tb-postgres
$ docker-compose stop
$ docker run -it -v mytb-data:/data --rm thingsboard/tb-postgres upgrade-tb.sh
$ docker rm mytb
$ docker-compose up
```

**NOTE**: if you use different database change image name in all commands from `thingsboard/tb-postgres` to `thingsboard/tb-cassandra` or `thingsboard/tb` correspondingly.
 
**NOTE**: replace volume `mytb-data` with volume used during container creation. 

## Troubleshooting

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use [Google public DNS servers](https://developers.google.com/speed/public-dns/docs/using#windows)


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
