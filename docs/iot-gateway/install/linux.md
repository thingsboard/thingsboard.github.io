---
layout: docwithnav
assignees:
- ikulikov
title: Installing Thingsboard IoT Gateway on Linux
description: Installing Thingsboard IoT Gateway on Linux

---

* TOC
{:toc}

### Step 1. Install Java 8

IoT Gateway requires Java 8.
Although you are able to start the service using [OpenJDK](http://openjdk.java.net/), 
solution is actively tested on [Oracle JDK](http://www.oracle.com/technetwork/java/javase/overview/index.html).

Follow this instructions to install Oracle JDK 8:

 - [Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04#installing-the-oracle-jdk)
 - [CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-install-java-on-centos-and-fedora#install-oracle-java-8)

Please don't forget to configure your operation system to use Oracle JDK 8 by default. 
Corresponding instructions are in the same articles listed above.

### Step 2. Download installation package

Download installation package or [build it from source](/docs/iot-gateway/install/building-from-source).

{% capture tabspec %}tb-gateway-download
A,Ubuntu,shell,resources/tb-gateway-ubuntu-download.sh,/docs/iot-gateway/install/resources/tb-gateway-ubuntu-download.sh
B,CentOS,shell,resources/tb-gateway-centos-download.sh,/docs/iot-gateway/install/resources/tb-gateway-centos-download.sh{% endcapture %}  
{% include tabs.html %}

### Step 3. Install gateway as a service

{% capture tabspec %}tb-gateway-installation
A,Ubuntu,shell,resources/tb-gateway-ubuntu-installation.sh,/docs/iot-gateway/install/resources/tb-gateway-ubuntu-installation.sh
B,CentOS,shell,resources/tb-gateway-centos-installation.sh,/docs/iot-gateway/install/resources/tb-gateway-centos-installation.sh{% endcapture %}  
{% include tabs.html %}

Congratulations! Thingsboard IoT Gateway is now installed on your Linux machine as a service.

### Step 4. Configure your gateway

Let's configure your gateway before we start it! 

Let's skip extension configuration for now. 
We need to validate that gateway is able to successfully connect to Thingsboard server first.

Navigate to the configuration folder **/etc/tb-gateway/conf** and configure connection to Thingsboard server.
See [**getting started**](/docs/iot-gateway/getting-started/) or [**general configuration**](/docs/iot-gateway/configuration/) for more details.

### Step 5. Launch your gateway

Now let's start the gateway!
Execute following command to start gateway:

```bash
sudo service tb-gateway start
```

In order to restart the gateway you can execute following commands

```bash
sudo service tb-gateway restart
```

### Step 6. Troubleshooting your installation

The log files are located in **/var/log/tb-gateway** folder.

The **tb-gateway.log** file should contain following line:

```text
YYYY-MM-DD HH:mm:ss,sss [main] INFO  o.t.gateway.GatewayApplication - Started GatewayApplication in x.xxx seconds (JVM running for x.xxx)

```

You can issue the following command in order to check if there are any errors on the backend side:
 
```bash
cat /var/log/tb-gateway/tb-gateway.log | grep ERROR
```

In case of any unclear errors, use general [troubleshooting guide](/docs/user-guide/troubleshooting/#getting-help) or [contact us](/docs/contact-us/).
  
### Next Steps

Use [**OPC-UA**](/docs/iot-gateway/getting-started/#step-9-connect-to-external-opc-ua-server) or [**MQTT**](/docs/iot-gateway/getting-started/#step-8-connect-to-external-mqtt-broker) extensions to integrate your devices with Thingsboard platform. 
 