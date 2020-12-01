---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard using Docker (Linux or Mac OS)
description: Installing ThingsBoard IoT Platform using Docker (Linux or Mac OS)

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide will help you to install and start ThingsBoard using Docker on Linux or Mac OS.


## Prerequisites

- [Install Docker CE](https://docs.docker.com/engine/installation/)

- [Install Docker Compose](https://docs.docker.com/compose/install/)

## Running

Depending on the database used there are three type of ThingsBoard single instance docker images:

* [thingsboard/tb-postgres](https://hub.docker.com/r/thingsboard/tb-postgres/) - single instance of ThingsBoard with PostgreSQL database.
    
    Recommended option for small servers with at least 1GB of RAM and minimum load (few messages per second). 2-4GB is recommended.
* [thingsboard/tb-cassandra](https://hub.docker.com/r/thingsboard/tb-cassandra/) - single instance of ThingsBoard with Cassandra database. 
    
    The most performant and recommended option but requires at least 4GB of RAM. 8GB is recommended.  
* [thingsboard/tb](https://hub.docker.com/r/thingsboard/tb/) - single instance of ThingsBoard with embedded HSQLDB database. 
    
    **Note:** Not recommended for any evaluation or production usage and is used only for development purposes and automatic tests. 
    
In this instruction `thingsboard/tb-postgres` image will be used. You can choose any other images with different databases (see above).

## Choose ThingsBoard queue service

{% include templates/install/install-queue.md %}

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/docker-queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka%,%templates/install/docker-queue-kafka.md%br%
AWS SQS <small>(managed service from AWS)</small>%,%aws-sqs%,%templates/install/docker-queue-aws-sqs.md%br%
Google Pub/Sub <small>(managed service from Google)</small>%,%pubsub%,%templates/install/docker-queue-pub-sub.md%br%
Azure Service Bus <small>(managed service from Azure)</small>%,%service-bus%,%templates/install/docker-queue-service-bus.md%br%
RabbitMQ <small>(for small on-prem installations)</small>%,%rabbitmq%,%templates/install/docker-queue-rabbitmq.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/docker-queue-confluent-cloud.md{% endcapture %}

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


Before starting Docker container run following commands to create a directory for storing data and logs and then change its owner to docker container user,
to be able to change user, **chown** command is used, which requires sudo permissions (command will request password for a sudo access):

```
mkdir -p ~/.mytb-data && sudo chown -R 799:799 ~/.mytb-data
mkdir -p ~/.mytb-logs && sudo chown -R 799:799 ~/.mytb-logs
```
{: .copy-code}

**NOTE**: Replace directory `~/.mytb-data` and `~/.mytb-logs` with directories you're planning to use in `docker-compose.yml`.

Set the terminal in the directory which contains the `docker-compose.yml` file and execute the following command to up this docker compose directly:

```
docker-compose pull
docker-compose up
```
{: .copy-code}

    
After executing this command you can open `http://{your-host-ip}:8080` in your browser (for ex. `http://localhost:8080`). 
You should see ThingsBoard login page. Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer
    
You can always change passwords for each account in account profile page.

## Detaching, stop and start commands

You can detach from session terminal with `Ctrl-p` `Ctrl-q` - the container will keep running in the background.

In case of any issues you can examine service logs for errors.
For example to see ThingsBoard node logs execute the following command:

```
docker-compose logs -f mytb
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

In order to update to the latest image, execute the following commands:

```
docker pull thingsboard/tb-postgres
docker-compose stop
docker run -it -v ~/.mytb-data:/data --rm thingsboard/tb-postgres upgrade-tb.sh
docker-compose rm mytb
docker-compose up
```
{: .copy-code}

**NOTE**: if you use different database change image name in all commands from `thingsboard/tb-postgres` to `thingsboard/tb-cassandra` or `thingsboard/tb` correspondingly.
 
**NOTE**: replace host's directory `~/.mytb-data` with directory used during container creation. 

**NOTE**: if you have used one database and want to try another one, then remove the current docker container using `docker-compose rm` command and use different directory for `~/.mytb-data` in `docker-compose.yml`.
 

## Troubleshooting

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use Google public DNS servers. 
See corresponding [Linux](https://developers.google.com/speed/public-dns/docs/using#linux) and [Mac OS](https://developers.google.com/speed/public-dns/docs/using#mac_os) instructions.


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
