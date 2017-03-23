---
layout: docwithnav
assignees:
- ashvayka
title: Installing Thingsboard IoT Gateway on Windows
description: Installing Thingsboard IoT Gateway on Windows

---

* TOC
{:toc}


### Step 1. Install Java 8

IoT Gateway requires Java 8. If you don't have Java installed, please download and install Java 8 using this [link](https://java.com/en/download/).
 
### Step 2. Download and unzip installation files
 
Create working directory, for example "C:\tb-gateway".
Download and unzip [this installation archive](https://github.com/thingsboard/thingsboard-gateway/releases/download/v1.2/tb-gateway-windows-1.2.zip) to the working directory.
The working directory should look like this after installation

 ![image](/images/gateway/windows-folder.png)

### Step 3. Run installation script

Run **install.bat** script to install Gateway as a Windows service. 
This means it will be automatically started on system startup.
Similar, **uninstall.bat** will remove Gateway from Windows services.
 
**NOTE** Scripts listed above should be executed using Administrator Role.

```text
C:\tb-gateway>install.bat
Detecting if it is 64 bit machine
CurrentVersion 1.8
Java 1.8 found!
Installing tb-gateway ...
2017-01-31 02:26:50,704 INFO  - Starting ServiceWrapper in the CLI mode
2017-01-31 02:26:50,907 INFO  - Completed. Exit code is 0
DONE.
```

Congratulations! Thingsboard IoT Gateway is now installed on your Windows machine as a service. 

### Step 4. Configure your gateway

Let's configure your gateway before we start it! 

Let's skip extension configuration for now. 
We need to validate that gateway is able to successfully connect to Thingsboard server first.

Navigate to the configuration folder ("C:\tb-gateway\conf" in our case) and configure connection to Thingsboard server.
See [**getting started**](/docs/iot-gateway/getting-started/) or [**general configuration**](/docs/iot-gateway/configuration/) for more details.

### Step 5. Launch your gateway

Now let's start the gateway!
Open command prompt as an Administrator and execute following command

```shell
net start tb-gateway
```

Expected output:

```text
The Thingsboard Gateway service is starting.
The Thingsboard Gateway service was started successfully.
```

In order to restart the gateway you can execute following commands

```shell
net stop tb-gateway
net start tb-gateway
```

### Step 6. Troubleshooting your installation

The log files are located in **logs** folder ("C:\tb-gateway\logs" in our case).

The **tb-gateway.log** file should contain following line:

```text
YYYY-MM-DD HH:mm:ss,sss [main] INFO  o.t.gateway.GatewayApplication - Started GatewayApplication in x.xxx seconds (JVM running for x.xxx)

```

In case of any unclear errors, use general [troubleshooting guide](/docs/user-guide/troubleshooting/#getting-help) or [contact us](/docs/contact-us/).
  
### Next Steps

Use [**OPC-UA**](/docs/iot-gateway/getting-started/#step-9-connect-to-external-opc-ua-server) or [**MQTT**](/docs/iot-gateway/getting-started/#step-8-connect-to-external-mqtt-broker) extensions to integrate your devices with Thingsboard platform. 