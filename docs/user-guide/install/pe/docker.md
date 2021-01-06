---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard PE using Docker (Linux or Mac OS)
description: Installing ThingsBoard PE IoT Platform using Docker (Linux or Mac OS)

---

* TOC
{:toc}


This guide will help you to install and start ThingsBoard Professional Edition (PE) using Docker and Docker Compose on Linux or Mac OS. 
This guide covers standalone ThingsBoard PE installation. 
If you are looking for a cluster installation instruction, please visit [cluster setup page](/docs/user-guide/install/pe/cluster-setup/).  

## Prerequisites

- [Install Docker CE](https://docs.docker.com/engine/installation/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

## Step 1. Checkout all ThingsBoard PE Image

Please checkout ThingsBoard PE Image from Docker Hub.
You will need to open all [verified images](https://hub.docker.com/search?q=thingsboard&type=image&image_filter=store) and click on "Proceed to checkout" to accept ThingsBoard PE license agreement.

Listing all images **mandatory** for checkout for your convenience below:

 - [ThingsBoard PE Standalone](https://hub.docker.com/_/thingsboard-pe)
 

![image](/images/user-guide/install/docker-pe/checkout-pe-node.png)


Populate basic information about yourself and click "Get Content"


![image](/images/user-guide/install/docker-pe/details.png)
 
 
## Step 2. Pull ThingsBoard PE Image

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

```bash
docker pull store/thingsboard/tb-pe:{{ site.release.pe_full_ver }}
```
 
## Step 3. Obtain the license key 

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

Note: We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.

## Step 4. Choose ThingsBoard queue service

{% include templates/install/install-queue.md %}

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small>%,%inmemory%,%templates/install/pe-docker-queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small>%,%kafka%,%templates/install/pe-docker-queue-kafka.md%br%
AWS SQS <small>(managed service from AWS)</small>%,%aws-sqs%,%templates/install/pe-docker-queue-aws-sqs.md%br%
Google Pub/Sub <small>(managed service from Google)</small>%,%pubsub%,%templates/install/pe-docker-queue-pub-sub.md%br%
Azure Service Bus <small>(managed service from Azure)</small>%,%service-bus%,%templates/install/pe-docker-queue-service-bus.md%br%
RabbitMQ <small>(for small on-prem installations)</small>%,%rabbitmq%,%templates/install/pe-docker-queue-rabbitmq.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/pe-docker-queue-confluent-cloud.md{% endcapture %}

{% include content-toggle.html content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}  

Where: 
    
- `PUT_YOUR_LICENSE_SECRET_HERE` - placeholder for your license secret obtained on the third step;    
- `8080:8080`            - connect local port 8080 to exposed internal HTTP port 8080;
- `1883:1883`            - connect local port 1883 to exposed internal MQTT port 1883;   
- `5683:5683`            - connect local port 5683 to exposed internal COAP port 5683; 
- `~/.mytbpe-data:/data`   - mounts the host's dir `~/.mytbpe-data` to ThingsBoard data directory;
- `~/.mytbpe-data/db:/var/lib/postgresql/data`   - mounts the host's dir `~/.mytbpe-data/db` to Postgres data directory;
- `~/.mytbpe-logs:/var/log/thingsboard`   - mounts the host's dir `~/.mytbpe-logs` to ThingsBoard logs directory;
- `mytbpe`             - friendly local name of this machine;
- `restart: always`        - automatically start ThingsBoard in case of system reboot and restart in case of failure.;
- `store/thingsboard/tb-pe:{{ site.release.pe_full_ver }}`          - docker image.

## Step 5. Running

Before starting Docker container run following commands to create a directory for storing data and logs and then change its owner to docker container user,
to be able to change user, **chown** command is used, which requires sudo permissions (command will request password for a sudo access):

```
mkdir -p ~/.mytbpe-data && sudo chown -R 799:799 ~/.mytbpe-data
mkdir -p ~/.mytbpe-logs && sudo chown -R 799:799 ~/.mytbpe-logs
```
{: .copy-code}

**NOTE**: replace directory `~/.mytbpe-data` and `~/.mytbpe-logs` with directories you're planning to used in `docker-compose.yml`. 

Execute the following command to up this docker compose directly:

**NOTE**: For running docker compose commands you have to be in a directory with docker-compose.yml file. 

``` 
docker-compose up -d
docker-compose logs -f mytbpe
```
{: .copy-code}
    
After executing this command you can open `http://{your-host-ip}:8080` in you browser (for ex. `http://localhost:8080`). You should see ThingsBoard login page.
Use the following default credentials:

- **System Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer
    
You can always change passwords for each account in account profile page.

## Detaching, stop and start commands

You can close logs `Ctrl-c` - the container will keep running in the background.

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

In case when database upgrade is needed, execute the following commands:

```
$ docker-compose stop mytbpe
$ docker-compose run mytbpe upgrade-tb.sh
$ docker-compose start mytbpe
```

## Troubleshooting

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use Google public DNS servers. 
See corresponding [Linux](https://developers.google.com/speed/public-dns/docs/using#linux) and [Mac OS](https://developers.google.com/speed/public-dns/docs/using#mac_os) instructions.


### Upgrading from old PostgreSQL 9.6 to PostgreSQL 11 and ThingsBoard 3.0.1PE

In this example we'll show steps to upgrade ThingsBoard from 2.4.3PE to 3.0.1PE.

Make a backup of your data:

```
sudo cp -r ~/.mytbpe-data ./.mytbpe-data-2-4-3-backup
```
{: .copy-code}

Stop currently running docker container:

```
docker stop [container_id]
```

Upgrade old postgres to the new one:

```
docker run --rm -v ~/.mytbpe-data/db/:/var/lib/postgresql/9.6/data -v ~/.mytbpe-data-temp/db/:/var/lib/postgresql/11/data --env LANG=C.UTF-8 tianon/postgres-upgrade:9.6-to-11
sudo rm -rf ~/.mytbpe-data/db
sudo mv ~/.mytbpe-data-temp/db ~/.mytbpe-data/db
```
{: .copy-code}

Start the new version of TB with following command:

```
docker run -it -v ~/.mytbpe-data:/data --rm store/thingsboard/tb-pe:3.0.1PE bash
```
{: .copy-code}

Then please follow these steps:

```
apt update
apt install sudo
chown -R postgres. /data/db/
chmod 750 -R /data/db/
sudo -i -u postgres
cd /usr/lib/postgresql/11/
./bin/pg_ctl -D /data/db start
logout
/usr/share/thingsboard/bin/install/upgrade.sh --fromVersion=2.4.1
exit
```
{: .copy-code}

After this create your docker-compose.yml and insert (we used in-memory queue as an example):

```yml
version: '2.2'
services:
  mytbpe:
    restart: always
    image: "store/thingsboard/tb-pe:3.0.1PE"
    ports:
      - "8080:9090"
      - "1883:1883"
      - "5683:5683/udp"
    environment:
      TB_QUEUE_TYPE: in-memory
      TB_LICENSE_SECRET: YOUR_SECRET_KEY
      TB_LICENSE_INSTANCE_DATA_FILE: /data/license.data
      INTEGRATIONS_RPC_PORT: 50052
      PGDATA: /data/db
    volumes:
      - ~/.mytbpe-data:/data
      - ~/.mytbpe-logs:/var/log/thingsboard
```
{: .copy-code}

Start ThingsBoard:

```
docker-compose up
```
{: .copy-code}

### Upgrading from 3.0.1PE to 3.1.0PE

After 3.0.1PE PostgreSQL service was separated from ThingsBoard image and upgrading to 3.1.0PE version is not trivial.

First of all you need to create a dump of your database:

```
docker-compose exec mytbpe sh -c "pg_dump -U postgres thingsboard > /data/thingsboard_dump"
```
{: .copy-code}

**Note** You have to use your valid username for connecting to PostgreSQL

Then you need to stop service, create a new directory for the database and set permissions:

```
sudo cp -r ~/.mytbpe-data ./.mytbpe-data-backup
docker-compose down
sudo rm -rf ~/.mytbpe-data/db
sudo chown -R 799:799 ~/.mytbpe-data
sudo chown -R 799:799 ~/.mytbpe-logs
```
{: .copy-code}

After this you need to update docker-compose.yml as in [Step 4](#step-4-choose-thingsboard-queue-service) but with **3.1.0PE** instead of **{{ site.release.pe_full_ver }}**:

Start PostgreSQL:

```
docker-compose up postgres
```
{: .copy-code}

Restore backup:

```
sudo cp ~/.mytbpe-data/thingsboard_dump ~/.mytbpe-data/db/thingsboard_dump
docker-compose exec postgres sh -c "psql -U postgres thingsboard < /var/lib/postgresql/data/thingsboard_dump"
```
{: .copy-code}

Upgrade ThingsBoard:

```
docker-compose run mytbpe upgrade-tb.sh
```
{: .copy-code}

Start ThingsBoard:

```
docker-compose up mytbpe
```
{: .copy-code}

### Upgrading from 3.1.0PE to latest version

Open docker-compose.yml and change version from **3.1.0PE** to **{{ site.release.pe_full_ver }}**. 
Then call the following commands:

```
sudo sh -c "echo '3.1.0' > ~/.mytbpe-data/.upgradeversion"
docker-compose run mytbpe upgrade-tb.sh
```
{: .copy-code}

Start ThingsBoard:

```
docker-compose up mytbpe
```
{: .copy-code}


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
