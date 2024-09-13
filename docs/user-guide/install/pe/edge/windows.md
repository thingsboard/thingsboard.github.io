---
layout: docwithnav-pe-edge
title: Installing ThingsBoard Edge on Windows
description: Installing ThingsBoard Edge on Windows
---

* TOC
{:toc}

{% include templates/edge/install/compatibility-warning-general.md %}

{% assign docsPrefix = "pe/edge/" %}

{% include templates/install/windows-warning-note.md %}

This guide describes how to install ThingsBoard Edge on Windows machine.
Instructions below are provided for Windows 10/8.1/8/7 32-bit/64-bit.

{% include templates/edge/install/prerequisites.md %}

## Installation and Configuration

### Step 1. Install Java 17 (OpenJDK) 

{% include templates/install/windows-java-install.md %}

### Step 2. Configure PostgreSQL

{% include templates/edge/install/windows-db-postgresql.md %}

### Step 3. ThingsBoard Edge service installation

Download and extract the package.

```bash
https://dist.thingsboard.io/tb-edge-windows-{{ site.release.pe_edge_ver }}.zip
```
{: .copy-code}

**Note:** We assume you have unzipped package to default location: *C:\Program Files (x86)\tb-edge*

### Step 4. Configure ThingsBoard Edge

{% include templates/edge/install/windows-configure-edge.md %}

### Step 5. Run installation script

{% include templates/edge/install/run-edge-install-windows.md %} 

### Step 6. Start ThingsBoard Edge service

{% include templates/edge/install/windows-start-service.md %}

### Step 7. Open ThingsBoard Edge UI

{% include templates/edge/install/open-edge-ui.md %} 

## Troubleshooting

The log files are located in **logs** folder ("C:\Program Files (x86)\tb-edge\logs" in our case).

The **tb-edge.log** file should contain following line:

```text
YYYY-MM-DD HH:mm:ss,sss [main] INFO  o.t.server.TbEdgeApplication - Started TbEdgeApplication in x.xxx seconds (JVM running for x.xxx)
```

In case of any unclear errors, use general [troubleshooting guide](/docs/user-guide/troubleshooting/#getting-help) or [contact us](/docs/contact-us/).

## Windows firewall settings

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


## Next Steps

{% include templates/edge/install/next-steps.md %}
