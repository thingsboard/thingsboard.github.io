---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard PE using Docker (Linux or Mac OS)
description: Installing ThingsBoard PE IoT Platform using Docker (Linux or Mac OS)

---

* TOC
{:toc}


This guide will help you to install and start ThingsBoard Professional Edition (PE) using Docker on Linux or Mac OS. 
This guide covers standalone ThingsBoard PE installation. The container image used in this guide has embedded PostgreSQL 9.6 to simplify setup. 
If you are looking for a cluster installation instruction, please visit [cluster setup page](/docs/user-guide/install/pe/cluster-setup/).  

## Prerequisites

- [Install Docker CE](https://docs.docker.com/engine/installation/)

## Step 1. Obtain the license key 

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

Note: We will reference the license key you have obtained during this step as PUT_YOUR_LICENSE_SECRET_HERE later in this guide.

## Step 2. Checkout ThingsBoard PE image on Docker Hub

Open official [ThingsBoard PE Standalone](https://hub.docker.com/_/thingsboard-pe) Docker Hub page and proceed to checkout.

![image](/images/user-guide/install/docker-pe/checkout.png)


Populate basic information about yourself and click "Get Content"


![image](/images/user-guide/install/docker-pe/details.png)
 

## Step 3. Running

Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

Execute the following command to run this docker directly:

``` 
docker run -it -p 9090:9090 -p 1883:1883 -p 5683:5683/udp -v ~/.mytbpe-data:/data -v ~/.mytbpe-logs:/var/log/thingsboard -e "TB_LICENSE_SECRET=PUT_YOUR_LICENSE_SECRET_HERE" --name mytbpe --restart always store/thingsboard/tb-pe:2.4.2.1PE
```

Where: 
    
- `PUT_YOUR_LICENSE_SECRET_HERE` - placeholder for your license secret obtained on the first step;    
- `docker run`              - run this container;
- `-it`                     - attach a terminal session with current ThingsBoard process output;
- `-p 9090:9090`            - connect local port 9090 to exposed internal HTTP port 9090;
- `-p 1883:1883`            - connect local port 1883 to exposed internal MQTT port 1883;   
- `-p 5683:5683`            - connect local port 5683 to exposed internal COAP port 5683; 
- `-v ~/.mytbpe-data:/data`   - mounts the host's dir `~/.mytbpe-data` to ThingsBoard DataBase data directory;
- `-v ~/.mytbpe-logs:/var/log/thingsboard`   - mounts the host's dir `~/.mytbpe-logs` to ThingsBoard logs directory;
- `--name mytbpe`             - friendly local name of this machine;
- `--restart always`        - automatically start ThingsBoard in case of system reboot and restart in case of failure.;
- `store/thingsboard/tb-pe:2.4.2.1PE`          - docker image.
    
After executing this command you can open `http://{your-host-ip}:9090` in you browser (for ex. `http://localhost:9090`). You should see ThingsBoard login page.
Use the following default credentials:

- **Systen Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer
    
You can always change passwords for each account in account profile page.

## Detaching, stop and start commands

You can detach from session terminal with `Ctrl-p` `Ctrl-q` - the container will keep running in the background.

To reattach to the terminal (to see ThingsBoard logs) run:

```
docker attach mytbpe
```

To stop the container:

```
docker stop mytbpe
```

To start the container:

```
docker start mytbpe
```

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
