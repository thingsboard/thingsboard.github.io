---
layout: docwithnav
assignees:
- ashvayka
title: Installing ThingsBoard PE on Windows
description: Installing ThingsBoard on Windows

---

* TOC
{:toc}

### Prerequisites

This guide describes how to install ThingsBoard on a Windows machine.
Instructions below are provided for Windows 10/8.1/8/7 32-bit/64-bit. 
Hardware requirements depend on chosen database and amount of devices connected to the system. 
To run ThingsBoard and PostgreSQL on a single machine you will need at least 2Gb of RAM.
To run ThingsBoard and Cassandra on a single machine you will need at least 8Gb of RAM.

### Step 1. Install Java 8 (OpenJDK) 

{% include templates/install/windows-java-install.md %}

### Step 2. ThingsBoard service installation

Download and run the installation package.

```bash
https://dist.thingsboard.io/thingsboard-windows-setup-2.4.3pe.exe
```
{: .copy-code}

**Note:** We assume you have installed ThingsBoard to default location: *C:\Program Files (x86)\thingsboard*  

### Step 3. Obtain and configure license key 

We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

Once you get the license secret, you should put it to the thingsboard configuration file.

Open the Notepad or other editor as administrator user (right click on the app icon and select "Run as administrator").  
Open the following file for editing (select "All Files" instead of "Text Documents" in file choosing dialog, the encoding is UTF-8):

```text 
C:\Program Files (x86)\thingsboard\conf\thingsboard.yml
``` 
{: .copy-code}

Scroll to the bottom of the file and locate the following configuration block:

```yml
license:
    secret: "${TB_LICENSE_SECRET:}" # license secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
```

and put your license secret. See example below: 

```yml
license:
    secret: "${TB_LICENSE_SECRET:YOUR_LICENSE_SECRET_HERE}" # license secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
``` 

### Step 4. Configure ThingsBoard database

{% include templates/install/install-db.md %}

{% capture contenttogglespec %}
PostgreSQL <small>(recommended for < 5K msg/sec)</small>%,%postgresql%,%templates/install/windows-db-postgresql.md%br%
Hybrid <br/>PostgreSQL+Cassandra<br/><small>(recommended for > 5K msg/sec)</small>%,%hybrid%,%templates/install/windows-db-hybrid.md{% endcapture %}

{% include content-toggle.html content-toggle-id="ubuntuThingsboardDatabase" toggle-spec=contenttogglespec %} 

### Step 5. [Optional] Memory update for slow machines (1GB of RAM) 

{% include templates/install/windows-memory-on-slow-machines.md %} 

### Step 6. Run installation script

Launch windows shell (Command Prompt) as Administrator. Change directory to your ThingsBoard installation directory.

Execute **install.bat** script to install ThingsBoard as a Windows service (or run **"install.bat --loadDemo"** to install and add demo data).
This means it will be automatically started on system startup. 
Similar, **uninstall.bat** will remove ThingsBoard from Windows services.
The output should be similar to this one:
  
  ```text
C:\Program Files (x86)\thingsboard>install.bat --loadDemo
Detecting Java version installed.
CurrentVersion 18
Java 1.8 found!
Installing thingsboard ...
...
ThingsBoard installed successfully!
```

### Step 7. Start ThingsBoard service

{% include templates/windows-start-service.md %}

{% capture 90-sec-ui %}
Please allow up to 90 seconds for the Web UI to start. This is applicable only for slow machines with 1-2 CPUs or 1-2 GB RAM.{% endcapture %}
{% include templates/info-banner.md content=90-sec-ui %}

### Step 8. Install ThingsBoard Web Report Server component

Download and extract the installation package.

```bash
https://dist.thingsboard.io/tb-web-report-windows-2.4.3pe.zip
```
{: .copy-code}

**Note:** We assume you have extracted ThingsBoard Web Report Server to default location: *C:\Program Files (x86)\tb-web-report* 

Launch windows shell (Command Prompt) as Administrator. Change directory to your ThingsBoard installation directory.

Execute **install.bat** script to install ThingsBoard Web Report Server as a Windows service.
  This means it will be automatically started on system startup. 
  Similar, **uninstall.bat** will remove ThingsBoard from Windows services.
  The output should be like:
  
  ```text
    C:\Program Files (x86)\tb-web-report>install.bat
    Installing tb-web-report ...
    tb-web-report installed successfully!  
  ```    
  
Now let's start the ThingsBoard service!
Open the command prompt as an Administrator and execute the following command:

```shell
net start tb-web-report
```

Expected output:

```text
C:\Program Files (x86)\tb-web-report>net start tb-web-report
The Thingsboard Web Report Microservice service is starting.
The Thingsboard Web Report Microservice service was started successfully.
```

### Troubleshooting

The log files are located in **logs** folder ("C:\Program Files (x86)\thingsboard\logs" in our case).

The **thingsboard.log** file should contain following line:

```text
YYYY-MM-DD HH:mm:ss,sss [main] INFO  o.t.s.ThingsboardServerApplication - Started ThingsboardServerApplication in x.xxx seconds (JVM running for x.xxx)

```

In case of any unclear errors, use general [troubleshooting guide](/docs/user-guide/troubleshooting/#getting-help) or [contact us](/docs/contact-us/).

### Windows firewall settings

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



## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
