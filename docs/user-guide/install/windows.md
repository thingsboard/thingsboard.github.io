---
layout: docwithnav
assignees:
- ikulikov
title: Installing Thingsboard on Windows
description: Installing Thingsboard on Windows

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide describes how to install Thingsboard on a Windows machine.
Instructions below are provided for Windows 10/8.1/8/7 32-bit/64-bit. 

#### Hardware requirements

To run Thingsboard and third-party components on a single machine you will need at least 2Gb of RAM (4Gb recommended).

#### Third-party components installation

##### Java

Thingsboard service is running on Java 8. 
If you don't have Java installed, please download and install Java 8 using this [link](https://java.com/en/download/).

##### Cassandra

Thingsboard service requires Cassandra database.
Instructions listed below will help you to install Cassandra.

- Download DataStax Community Edition v3.0.9
    - [MSI Installer (32-bit)](http://downloads.datastax.com/community/datastax-community-32bit_3.0.9.msi)
    - [MSI Installer (64-bit)](http://downloads.datastax.com/community/datastax-community-64bit_3.0.9.msi)
- Run downloaded MSI package. You are first presented with an initial welcome panel that identifies your installation package:

 ![image](/images/user-guide/install/windows/windows-cassandra-1.png)
 
- Clicking next takes you to the end user license agreement:
 
 ![image](/images/user-guide/install/windows/windows-cassandra-2.png)
 
- The next panel allows you to specify where the software is to be installed:
   
 ![image](/images/user-guide/install/windows/windows-cassandra-3.png)

- Once the installation directory has been set, the installer will ask how you want to handle the service that will be installed:

 ![image](/images/user-guide/install/windows/windows-cassandra-4.png)

- The next panel initiates the installation process:

 ![image](/images/user-guide/install/windows/windows-cassandra-5.png)
 
 ![image](/images/user-guide/install/windows/windows-cassandra-6.png)

- The final panel asks if you would like to register to be updated when new versions of the software become available:

 ![image](/images/user-guide/install/windows/windows-cassandra-7.png)
 
- You can find installed interfaces in "DataStax Community Edition" program group that the installer creates for you:

 ![image](/images/user-guide/install/windows/windows-cassandra-8.png)
 
- The primary interface into Cassandra is the CQL (Cassandra Query Language) shell utility, which can be used to execute CQL commands for the new Cassandra server.
 
#### Thingsboard service installation

- Create working directory, for example "C:\thingsboard". 
- Download [installation archive](https://github.com/thingsboard/thingsboard/releases/download/v1.2.2/thingsboard-windows-1.2.2.zip) or [build it from source](/docs/user-guide/install/building-from-source).
- Unzip installation archive to the working directory. The working directory should look like this after installation:
 
  ![image](/images/user-guide/install/windows/windows-folder.png)

- Run **install.bat** script to install Thingsboard as a Windows service. 
  This means it will be automatically started on system startup. 
  Similar, **uninstall.bat** will remove Thingsboard from Windows services.
  
  **NOTE** Scripts listed above should be executed using Administrator Role.
  
  ```text
  C:\thingsboard>install.bat
  Detecting if it is 32 bit machine
  CurrentVersion 1.8
  Java 1.8 found!
  Installing thingsboard ...
  2017-01-31 02:26:50,704 INFO  - Starting ServiceWrapper in the CLI mode
  2017-01-31 02:26:50,907 INFO  - Completed. Exit code is 0
  DONE.
  ```
  
  Congratulations! Thingsboard application is now installed on your Windows machine as a service. 

##### Provision database schema and initial data

Once Cassandra and Thingsboard services are installed, open "Cassandra CQL Shell" and execute following scripts:

```bash
cqlsh> source 'c:\thingsboard\data\schema.cql';
cqlsh> source 'c:\thingsboard\data\system-data.cql';
cqlsh> source 'c:\thingsboard\data\demo-data.cql';
```

##### Start Thingsboard service

Now let's start the Thingsboard service!
Open command prompt as an Administrator and execute following command:

```shell
net start thingsboard
```

Expected output:

```text
The Thingsboard Server Application service is starting.
The Thingsboard Server Application service was started successfully.
```

In order to restart the Thingsboard service you can execute following commands:

```shell
net stop thingsboard
net start thingsboard
```

Once started, you will be able to open Web UI using following link:

```bash
http://localhost:8080/
```

**NOTE**: Please allow up to 90 seconds for the Web UI to start

##### Troubleshooting

The log files are located in **logs** folder ("C:\thingsboard\logs" in our case).

The **thingsboard.log** file should contain following line:

```text
YYYY-MM-DD HH:mm:ss,sss [main] INFO  o.t.s.ThingsboardServerApplication - Started ThingsboardServerApplication in x.xxx seconds (JVM running for x.xxx)

```

In case of any unclear errors, use general [troubleshooting guide](/docs/user-guide/troubleshooting/#getting-help) or [contact us](/docs/contact-us/).

##### Windows firewall settings

In order to have external access to Thingsboard Web UI and device connectivity (HTTP, MQTT, CoAP)
you need to create a new inbound rule with Windows Firewall with Advanced Security.
 
- Open "Windows Firewall" from "Control Panel":

![image](/images/user-guide/install/windows/windows7-firewall-1.png)

- Click "Advanced settings" on the left panel:

![image](/images/user-guide/install/windows/windows7-firewall-2.png)

- Select "Inbound Rules" on the left panel, then click "New Rule..." on the right "Actions" panel:

![image](/images/user-guide/install/windows/windows7-firewall-3.png)

- Now new "New Inbound Rule Wizard" window will open. On the first step "Rule Type" select "Port" option: 

![image](/images/user-guide/install/windows/windows7-firewall-4.png)

- On the "Protocol and Ports" step select "TCP" protocol and enter port list **8080, 1883, 5683** in the "Specific local ports" field:

![image](/images/user-guide/install/windows/windows7-firewall-5.png)

- On the "Action" step leave "Allow the connection" option selected:

![image](/images/user-guide/install/windows/windows7-firewall-6.png)

- On the "Profile" step select Windows network profiles when to apply this rule:

![image](/images/user-guide/install/windows/windows7-firewall-7.png)

- Finally give the name to this rule (for ex. "Thingsboard Service Networking") and click "Finish".

![image](/images/user-guide/install/windows/windows7-firewall-8.png)
