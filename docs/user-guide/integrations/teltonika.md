---
layout: docwithnav
assignees:
- nick
title: Teltonika TCP Integration
description: Teltonika TCP Integration Documentation 

---

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Introduction

This article discusses the practical steps to connect the Teltonika FMB-920 device to the ThingsBoard Integration and further control of this device using the ThingsBoard Integration features.

It is possible to execute any ThingsBoard Integration remotely from main ThingsBoard instance.
This guide contains step-by-step instructions how to launch ThingsBoard integration remotely.
For example, we will launch Teltonika TCP Integration that connects to the ThingsBoard PE and pushes data to 
[cloud.thingsboard.io](https://cloud.thingsboard.io/signup).  

See [deployment options](/docs/user-guide/integrations/#deployment-options) for more general information.
But in our integraation we used only TCP protocol:
<details>
    <summary>
    <font color="#228b22"><b>Scheme`s screenshot Teltonika TCP Integration</b></font> (<b>click to open expanded view</b>)
    </summary>
    <img src="/images/user-guide/integrations/teltonika/embeded-integrations-overview.jpg">
</details> 


## Prerequisites

We assume you already have a tenant administrator account on your own ThingsBoard PE v2.4.3 instance or
[cloud.thingsboard.io](https://cloud.thingsboard.io/signup). 
 

## ThingsBoard configuration steps

### Step 1. Config Root Rule Chain (Root)

After installing the ThingsBoard, for the normal operation of the Downlink Data Converter, you need to edit the Root Rule Chain (Root).

<details>
    <summary>
        <font color="#006400"><i><b>the following way: Rule chains -> Root Rule Chain (Root) -> Add the originator attributes, originator fields and integration downlink </b></i></font> (<b>click to open expanded view</b>)
    </summary>
    <img src="/images/user-guide/integrations/teltonika/rule_chane.png">
</details>
Alternatively, you can import it from this [file](/docs/user-guide/resources/teltonika/teltonika_root_rule_chain.json) 

### Step 2. Create default Uplink and Downlink Converters

Let's create dummy uplink and downlink converters and will set them to work in debug mode.
While running in debug mode, those converters will record all incoming events. 
This will help us to tune the converters once we start receiving the data.

![image](/images/user-guide/integrations/remote/default-converters.gif)  

### Step 3. Settings decoder Function  to Uplink Data Converter

When creating an Uplink Converter, a default decoder is added to the Decoder section.

After creating the Uplink Converter to the Decoder section, you need to update the Decoder code to [the following code](/images/user-guide/integrations/teltonika/upLinkDecoder.txt).

<b>It is necessary to edit the Uplink decoder</b>

<p></p> <p></p>
<details>
    <summary>
        <font color="#006400"><i><b>Open Uplink Converter, editor mode, click "test decoder function" and replace the default code with a new code:</b></i></font> <br> (<b>click to open expanded view</b>)
    </summary> 
   <ul>
        <details>
            <summary>
            <font color="#228b22"><b>Screenshot of editing the UpLink decoder</b></font> (<b>click to open expanded view</b>)
            </summary>
            <img src="/images/user-guide/integrations/teltonika/uplink_decoder.png">
        </details> 
    </ul>
</details>

Alternatively, you can import it from this [file](/docs/user-guide/resources/teltonika/teltonika_tcp_uplink_converter.json) 
<details>
    <summary>
        <font color="#006400"><i><b>the following way: Go to Data Converters -> Add new Data Converter -> Import Converter </b></i></font> (<b>click to open expanded view</b>)
    </summary>
    <img src="/images/user-guide/rule-engine-2-0/tutorials/mqtt-downlink/import_new_converter.png">
</details>

### Step 4. Settings encoder Function  to Downlink Data Converter

### Step 5. Create and Save credentials of Teltonika TCP Integration

Let's create Custom integration that will connect to the local service "remote-integration-tcp" using:
- Integration class
- Intagration key
- Integration secret 

Notice that we enable "Debug" and "Execute remotely".   
Let's copy-paste the integration key, secret and class from the integration details.

![image](/images/user-guide/integrations/teltonika/custom-teltonika-tcp-integration.jpg)


### Step 6. Create and configuration Dashboard

After creating devices manually: an overview attribute: the serial number of the device or after automatically creating the device (with the first service connection, the device is created automatically) - you need to create a dashboard.
 

## Service: "remote-integration-tcp" install and configuration steps

### Step 1.  Install service: "remote-integration-tcp"
 
[teltonika-tcp-intefration](https://github.com/nickAS21/remote-integration-tcp).  

### Step 2.  Configuration service: "remote-integration-tcp"

tb-remote-integration.yml


## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}




