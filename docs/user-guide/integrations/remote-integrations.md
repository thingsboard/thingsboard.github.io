---
layout: docwithnav
assignees:
- ashvayka
title: Remote Integrations
description: Remote Integrations Documentation 

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Introduction

It is possible to execute any ThingsBoard Integration remotely from main ThingsBoard instance.
This guide contains step-by-step instructions how to launch ThingsBoard integration remotely.
For example, we will launch MQTT integration that connects to the local MQTT Broker and pushes data to 
[thingsboard.cloud](https://thingsboard.cloud/signup).  

See [deployment options](/docs/user-guide/integrations/#deployment-options) for more general information.

## Prerequisites

We assume you already have a tenant administrator account on your own ThingsBoard PE v2.4.1+ instance or
[thingsboard.cloud](https://thingsboard.cloud/signup).  

## ThingsBoard configuration steps

### Step 1. Create default Uplink and Downlink Converters

Let's create dummy uplink and downlink converters and will set them to work in debug mode.
While running in debug mode, those converters will record all incoming events. 
This will help us to tune the converters once we start receiving the data.

![image](/images/user-guide/integrations/remote/default-converters.gif)  

### Step 2. Create Remote Integration 

Let's create remote integration that will connect to the local broker using port 1883 and subscribe to all topics. 
Notice that we enable "Debug" and "Execute remotely".   

![image](/images/user-guide/integrations/remote/mqtt-integration.gif)

### Step 3. Save Remote Integration credentials.

Let's copy-paste the integration key and secret from the integration details.

![image](/images/user-guide/integrations/remote/copy-integration-credentials.gif)

## Remote integration installation steps

### Choose your platform and install

One can install ThingsBoard Integration via Docker, Debian or RPM packages.
Please use one of the next steps.

 * [Docker on Linux or Mac OS](/docs/user-guide/integrations/remote-integrations/#docker-on-linuxmac)
 * [Docker on Windows](/docs/user-guide/integrations/remote-integrations/#docker-on-windows) 
 * [Ubuntu](/docs/user-guide/integrations/remote-integrations/#ubuntu-server)
 * [CentOS/RHEL Server](/docs/user-guide/integrations/remote-integrations/#centosrhel-server)

### Docker on Linux/Mac

- **[Install Docker CE](https://docs.docker.com/engine/installation/)**

- **Choose Integration to install**


{% capture contenttogglespec %}
HTTP Integrations<br/><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br/> T-Mobile IoT CDP)</small>%,%http%,%templates/install/integration/http-docker.md%br%
MQTT Integrations<br/><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/install/integration/mqtt-docker.md%br%
AWS SQS<br/> Integration<br/>%,%aws%,%templates/install/integration/aws-docker.md%br%
Azure Event Hub<br/>Integration<br/>%,%azure%,%templates/install/integration/azure-docker.md%br%
OPC UA<br/> Integration<br/>%,%opcua%,%templates/install/integration/opcua-docker.md%br%
TCP/UDP<br/> Integration<br/>%,%tcpudp%,%templates/install/integration/tcpudp-docker.md{% endcapture %}

{% include content-toggle.html content-toggle-id="remoteintegrationdockerinstall" toggle-spec=contenttogglespec %}


{% include templates/install/integration/advanced-config-docker.md %} 


- **Troubleshooting**


**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```
{: .copy-code}

You may configure your system to use Google public DNS servers. 
See corresponding [Linux](opc-uas://developers.google.com/speed/public-dns/docs/using#linux) and [Mac OS](opc-uas://developers.google.com/speed/public-dns/docs/using#mac_os) instructions.

### Docker on Windows

- **[Install Docker Toolbox for Windows](https://docs.docker.com/toolbox/toolbox_install_windows/)**

- **Choose Integration to install**


{% capture contenttogglespecwin %}
HTTP Integrations<br/><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br/> T-Mobile IoT CDP)</small>%,%http%,%templates/install/integration/http-docker-windows.md%br%
MQTT Integrations<br/><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/install/integration/mqtt-docker-windows.md%br%
AWS SQS<br/> Integration<br/>%,%aws%,%templates/install/integration/aws-docker-windows.md%br%
Azure Event Hub<br/>Integration<br/>%,%azure%,%templates/install/integration/azure-docker-windows.md%br%
OPC UA<br/> Integration<br/>%,%opcua%,%templates/install/integration/opcua-docker-windows.md%br%
TCP/UDP<br/> Integration<br/>%,%tcpudp%,%templates/install/integration/tcpudp-docker-windows.md{% endcapture %}

{% include content-toggle.html content-toggle-id="remoteintegrationdockerinstallwin" toggle-spec=contenttogglespecwin %}


{% include templates/install/integration/advanced-config-docker.md %} 


- **Troubleshooting**


**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use [Google public DNS servers](https://developers.google.com/speed/public-dns/docs/using#windows)


### Ubuntu Server

 - Install Java 8 (OpenJDK) 

{% include templates/install/ubuntu-java-install.md %}

 - **Choose Integration package to install**
 
{% capture ubuntuinstallspec %}
HTTP Integrations<br/><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br/> T-Mobile IoT CDP)</small>%,%http%,%templates/install/integration/http-ubuntu.md%br%
MQTT Integrations<br/><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/install/integration/mqtt-ubuntu.md%br%
AWS SQS<br/> Integration<br/>%,%aws%,%templates/install/integration/aws-ubuntu.md%br%
Azure Event Hub<br/>Integration<br/>%,%azure%,%templates/install/integration/azure-ubuntu.md%br%
OPC UA<br/> Integration<br/>%,%opcua%,%templates/install/integration/opcua-ubuntu.md%br%
TCP/UDP<br/> Integration<br/>%,%tcpudp%,%templates/install/integration/tcpudp-ubuntu.md{% endcapture %}

{% include content-toggle.html content-toggle-id="remoteintegrationinstallubuntu" toggle-spec=ubuntuinstallspec %} 

### CentOS/RHEL Server

 - Install Java 8 (OpenJDK) 

{% include templates/install/rhel-java-install.md %}

 - **Choose Integration package to install**
 
{% capture rhelinstallspec %}
HTTP Integrations<br/><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br/> T-Mobile IoT CDP)</small>%,%http%,%templates/install/integration/http-rhel.md%br%
MQTT Integrations<br/><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/install/integration/mqtt-rhel.md%br%
AWS SQS<br/> Integration<br/>%,%aws%,%templates/install/integration/aws-rhel.md%br%
Azure Event Hub<br/>Integration<br/>%,%azure%,%templates/install/integration/azure-rhel.md%br%
OPC UA<br/> Integration<br/>%,%opcua%,%templates/install/integration/opcua-rhel.md%br%
TCP/UDP<br/> Integration<br/>%,%tcpudp%,%templates/install/integration/tcpudp-rhel.md{% endcapture %}

{% include content-toggle.html content-toggle-id="remoteintegrationinstallrhel" toggle-spec=rhelinstallspec %} 

## Remote integration configuration

Remote integration configuration is done via ThingsBoard UI and there is no specific steps.
Explore guides and video tutorials related to specific integrations:

 - [HTTP](/docs/user-guide/integrations/http/)
 - [MQTT](/docs/user-guide/integrations/mqtt/)
 - [AWS IoT](/docs/user-guide/integrations/aws-iot/)
 - [IBM Watson IoT](/docs/user-guide/integrations/ibm-watson-iot/)
 - [Azure Event Hub](/docs/user-guide/integrations/azure-event-hub/)
 - [Actility ThingPark](/docs/user-guide/integrations/thingpark/)
 - [SigFox](/docs/user-guide/integrations/sigfox/)
 - [OceanConnect](/docs/user-guide/integrations/ocean-connect/)
 - [TheThingsNetwork](/docs/user-guide/integrations/ttn/)
 - [OPC-UA](/docs/user-guide/integrations/opc-ua/)
 - [TCP](/docs/user-guide/integrations/tcp/)
 - [UDP](/docs/user-guide/integrations/udp/)
 - [Custom](/docs/user-guide/integrations/custom/)

  
## Remote integration troubleshooting

Please review the log files. Their location is specific to the platform and installation package you have used and is mentioned in the installation steps. 

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}




