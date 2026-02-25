---
layout: docwithnav-gw
title: How to enable remote shell feature on ThingsBoard IoT Gateway
description: How to enable remote shell feature on ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to enable a remote shell feature and control the operating system with ThingsBoard IoT Gateway
from your ThingsBoard platform instance. With this functionality, you can access the underlying machine, execute
commands, and perform maintenance tasks directly from the platform. It provides a convenient way to monitor system
health, troubleshoot issues, and automate administrative operations without needing direct physical access. Before
proceeding, ensure that you have the necessary permissions and have configured your gateway according to the
prerequisites outlined in this documentation.

{% capture info %}
<div>
  <p>
    <b style="color:red">WARNING:</b>
    <span style="color:black">This feature may introduce security vulnerabilities. It is strongly recommended to use SSL encryption when enabling it, and to keep it disabled unless required.</span>
  </p>
</div>
{% endcapture %}
{% include templates/warn-banner.md content=info %}

## Prerequisites

1. Ensure that the ThingsBoard server is up and running. The simplest approach is to use [ThingsBoard Cloud](https://thingsboard.io/installations/){:target="_blank"}. Alternatively, you can install ThingsBoard manually by following the steps outlined in the [Installation Guide](/docs/user-guide/install/installation-options/).
2. Installed and configured ThingsBoard IoT Gateway ([Installation guide](/docs/iot-gateway/installation/), [Getting Started](/docs/iot-gateway/getting-started/)).

## Step 1. Remote shell activation

To enable the remote shell feature, configure the corresponding parameter in the Gateway UI using the following steps:

{% assign enableRemoteShell = '
    ===
        image: /images/gateway/remote-shell/remote-shell-1.png,
        title: Go to the **Entities** > **Gateways** tab and click on the desired gateway.
    ===
        image: /images/gateway/remote-shell/remote-shell-2.png,
        title: Click on the **"General configuration"** button on the right panel.
    ===
        image: /images/gateway/remote-shell/remote-shell-3.png,
        title: In the opened window, navigate to the **General** tab and enable the **"Remote shell"** option. Click on the **"Save"** button to apply the changes.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=enableRemoteShell %}

## Step 2. Try out the remote shell

To navigate to the remote shell, follow these steps:

{% assign navigateToRemoteShell = '
    ===
        image: /images/gateway/remote-shell/remote-shell-4.png,
        title: On the selected gateway page, click on the **"Remote shell"** button on the right panel.
    ===
        image: /images/gateway/remote-shell/remote-shell-5.png,
        title: Now you can see the shell interface (_connection setups automatically_).
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=navigateToRemoteShell %}

For example, we run **ls** command to get the list of files and directories in the current directory:

![](/images/gateway/remote-shell/remote-shell-6.png)
## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
