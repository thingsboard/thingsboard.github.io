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

{% include templates/install/windows-warning-note.md %}

### Prerequisites

This guide describes how to install ThingsBoard on a Windows machine.
Instructions below are provided for Windows 11/10. 
Hardware requirements depend on chosen database and amount of devices connected to the system. 
To run ThingsBoard and PostgreSQL on a single machine you will need at least 4Gb of RAM.
To run ThingsBoard and Cassandra on a single machine you will need at least 8Gb of RAM.

### Step 1. Install Java 17 (OpenJDK) 

{% include templates/install/windows-java-install.md %}

### Step 2. ThingsBoard service installation

Download and extract the package.

```bash
https://github.com/thingsboard/thingsboard/releases/download/{{ site.release.ce_tag }}/thingsboard-windows-{{ site.release.ce_ver }}.zip
```
{: .copy-code}

**Note:** We assume you have extracted ThingsBoard package to default location: *C:\Program Files (x86)\thingsboard*  

### Step 3. Configure ThingsBoard database

{% include templates/install/install-db.md %}

{% capture contenttogglespec %}
PostgreSQL <small>(recommended for < 5K msg/sec)</small>%,%postgresql%,%templates/install/windows-db-postgresql.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="ubuntuThingsboardDatabase" toggle-spec=contenttogglespec %} 

### Step 4. Choose ThingsBoard queue service

{% include templates/install/install-queue.md %}

{% capture contenttogglespecqueue %}
In Memory <small>(built-in and default)</small> %,%inmemory%,%templates/install/queue-in-memory.md%br%
Kafka <small>(recommended for on-prem, production installations)</small> %,%kafka%,%templates/install/windows-queue-kafka.md%br%
AWS SQS <small>(managed service from AWS)</small> %,%aws-sqs%,%templates/install/windows-queue-aws-sqs.md%br%
Google Pub/Sub <small>(managed service from Google)</small>%,%pubsub%,%templates/install/windows-queue-pub-sub.md%br%
Azure Service Bus <small>(managed service from Azure)</small>%,%service-bus%,%templates/install/windows-queue-service-bus.md%br%
RabbitMQ <small>(for small on-prem installations)</small>%,%rabbitmq%,%templates/install/windows-queue-rabbitmq.md%br%
Confluent Cloud <small>(Event Streaming Platform based on Kafka)</small>%,%confluent-cloud%,%templates/install/windows-queue-confluent-cloud.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="windowsThingsboardQueue" toggle-spec=contenttogglespecqueue %} 

### Step 5. [Optional] Memory update for slow machines (4GB of RAM) 

{% include templates/install/windows-memory-on-slow-machines.md %} 

### Step 6. Run installation script

Launch windows shell (Command Prompt) as Administrator. Change directory to your ThingsBoard installation directory.

Execute **install.bat** script to install ThingsBoard as a Windows service (or run **".\install.bat --loadDemo"** to install and add demo data).
This means it will be automatically started on system startup. 
Similar, **uninstall.bat** will remove ThingsBoard from Windows services.
The output should be similar to this one:
  
  ```text
C:\Program Files (x86)\thingsboard>.\install.bat --loadDemo
Detecting Java version installed.
CurrentVersion 170
Java 17 found!
Installing thingsboard ...
...
ThingsBoard installed successfully!
```

### Step 7. Start ThingsBoard service

{% include templates/windows-start-service.md %}

{% capture 90-sec-ui %}
Please allow up to 90 seconds for the Web UI to start.{% endcapture %}
{% include templates/info-banner.md content=90-sec-ui %}


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
