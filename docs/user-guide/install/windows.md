---
layout: docwithnav
assignees:
- ikulikov
title: Installing ThingsBoard on Windows
description: Installing ThingsBoard on Windows

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide describes how to install ThingsBoard on a Windows machine.
Instructions below are provided for Windows 10/8.1/8/7 32-bit/64-bit. 

#### Hardware requirements

To run ThingsBoard and third-party components on a single machine you will need at least 2Gb of RAM (4Gb recommended).

#### Third-party components installation

##### Java

ThingsBoard service is running on Java 8.
If you don't have Java installed, please download and install Java 8 using this [link](https://java.com/en/download/).

#### [Optional] External database installation

{% include templates/install-db.md %}

###### SQL Database: PostgreSQL

{% include templates/optional-db.md %}

Download the installation file [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows) and follow the installation instructions.

Once PostgreSQL is installed you may want to create the new user or set the password for the main user.

{% include templates/create-tb-db.md %}

###### NoSQL Database: Cassandra

{% include templates/optional-db.md %}

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
 
#### ThingsBoard service installation

- Create working directory, for example "C:\thingsboard". 
- Download [installation archive](https://github.com/thingsboard/thingsboard/releases/download/v2.0.3/thingsboard-windows-2.0.3.zip) or [build it from source](/docs/user-guide/install/building-from-source).
- Unzip installation archive to the working directory. The working directory should look like this after installation:
 
  ![image](/images/user-guide/install/windows/windows-folder.png)

- Run windows shell (cmd) as Administrator. Change directory to your working dir.
- Run **install.bat** script to install ThingsBoard as a Windows service (or run **"install.bat --loadDemo"** to install and add demo data).
  This means it will be automatically started on system startup. 
  Similar, **uninstall.bat** will remove ThingsBoard from Windows services.
  The output should be like:
  
  ```text
    C:\thingsboard>install.bat --loadDemo
    Detecting Java version installed.
    Detecting if it is 64 bit machine
    CurrentVersion
    Detecting if it is 32 bit machine
    CurrentVersion 1.8
    Java 1.8 found!
    Installing thingsboard ...
     ===================================================
     :: ThingsBoard ::       (v2.0.3)
     ===================================================

    Starting ThingsBoard Installation...
    Installing DataBase schema...
    Installing Cassandra DataBase schema...
    Loading system data...
    Installation finished successfully!
    2017-07-23 21:47:12,079 INFO  - Starting ServiceWrapper in the CLI mode
    2017-07-23 21:47:12,317 INFO  - Completed. Exit code is 0
    ThingsBoard installed successfully!
  ```

#### [Optional] Configure ThingsBoard to use external database
 
{% include templates/optional-db.md %} 
 
Edit ThingsBoard configuration file: 

```text
C:\thingsboard\conf\thingsboard.yml
```

{% include templates/disable-hsqldb.md %} 

For **PostgreSQL**:

{% include templates/enable-postgresql.md %} 

For **Cassandra DB**:

Locate and set database type configuration parameter to 'cassandra'.
 
```text
database:
  type: "${DATABASE_TYPE:cassandra}" # cassandra OR sql
```

{% include templates/memory-update-for-slow-machines.md %} 

Go to your environment variables and set JAVA_OPTS variable: 

```text
JAVA_OPTS=-Xms256M -Xmx256M
```

##### Start ThingsBoard service

Now let's start the ThingsBoard service!
Open the command prompt as an Administrator and execute the following command:

```shell
net start thingsboard
```

Expected output:

```text
The ThingsBoard Server Application service is starting.
The ThingsBoard Server Application service was started successfully.
```

In order to restart the ThingsBoard service you can execute following commands:

```shell
net stop thingsboard
net start thingsboard
```

Once started, you will be able to open Web UI using the following link:

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

In order to have external access to ThingsBoard Web UI and device connectivity (HTTP, MQTT, CoAP)
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

- Finally, give the name to this rule (for ex. "ThingsBoard Service Networking") and click "Finish".

![image](/images/user-guide/install/windows/windows7-firewall-8.png)
