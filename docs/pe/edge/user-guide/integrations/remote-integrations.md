---
layout: docwithnav-pe-edge
title: Remote Integrations
description: Remote Integrations Documentation

addConverter:
    0:
        image: /images/pe/edge/integrations/remote/add-converter-step-1.png
        title: '1. Open <b>Converter templates</b> menu page. 2. Click <b>("+")</b> icon and select <b>Create new converter</b>.'
    1:
        image: /images/pe/edge/integrations/remote/add-converter-step-2.png
        title: '1. Enter the converter name, e.g., <b>Temperature converter</b>. 2. Select the converter type: <b>Uplink</b>. 3. Insert the code snippet from the example. 4. Click the <b>Add</b> button.'

addIntegration:
    0:
        image: /images/pe/edge/integrations/remote/add-integration-template-step-1.png
        title: '1. Open <b>Integration templates</b> menu page. 2. Click the <b>("+")</b> icon to add a new integration.'
    1:
        image: /images/pe/edge/integrations/remote/add-integration-template-step-2.png
        title: '1. Select integration type: <b>HTTP</b>. 2. Input integration name, e.g., <b>HTTP Demo Remote</b>. 3. Click <b>Next</b> button.'
    2:
        image: /images/pe/edge/integrations/remote/add-integration-template-step-3.png
        title: '1. Click <b>Select existing</b> button. 2. Select uplink data converter: <b>Temperature Converter</b>. 3. Click <b>Next</b> button.'
    3:
        image: /images/pe/edge/integrations/remote/add-integration-template-step-4.png
        title: 'Enter the converter name, e.g., <b>Temperature converter</b>. 2. Select converter type: <b>Uplink</b>. 3. Insert the code snippet from the example. 4. Click the <b>Add</b> button.'
    4:
        image: /images/pe/edge/integrations/remote/add-integration-template-step-5.png
        title: 'Verify that our <b>HTTP Demo Remote</b> integration template was created successfully.'

assignIntegration:
    0:
        image: /images/pe/edge/integrations/remote/assign-integration-step-1.png
        title: '1. Open <b>Instances</b> menu page. 2. Click on <b>My New Edge</b>.'
    1:
        image: /images/pe/edge/integrations/remote/assign-integration-step-2.png
        title: '1. Click <b>Attributes</b> tab. 2. Click <b>("+")</b> icon to add new attribute.'
    2:
        image: /images/pe/edge/integrations/remote/assign-integration-step-3.png
        title: '1. Enter <b>remoteHttpIntegrationUrl</b> attribute. 2. Set the remote value for your HTTP integration <b>http://IP:port</b>. 3. Click <b>Add</b> button.'
    3:
        image: /images/pe/edge/integrations/remote/assign-integration-step-4.png
        title: 'Open <b>Instances</b> menu page.'
    4:
        image: /images/pe/edge/integrations/remote/assign-integration-step-5.png
        title: 'Click <b>Manage edge integrations</b>.'
    5:
        image: /images/pe/edge/integrations/remote/assign-integration-step-6.png
        title: 'Click <b>("+")</b> icon.'
    6:
        image: /images/pe/edge/integrations/remote/assign-integration-step-7.png
        title: '1. Select the target integration. 2. Click <b>Assign</b> button.'
    7:
        image: /images/pe/edge/integrations/remote/assign-integration-step-8.png
        title: 'Open <b>Edge</b> instance. 1. Open the <b>Integrations</b> menu page 2. Click on <b>HTTP Demo Remote</b>. 3. Check that placeholder is substituted with the value of the attribute.'

copyCredentials:
    0:
        image: /images/pe/edge/integrations/remote/copy-credentials.png
        title: '1. Open the <b>Integration templates</b> menu page. 2. Click the integration template row. 3. Click to copy <b>Integration key</b>. 4. Click to copy <b>integration secret</b>.'

sendUplink:
    0:
        image: /images/pe/edge/integrations/remote/send-uplink-step-1.png
    1:
        image: /images/pe/edge/integrations/remote/send-uplink-step-2.png

device:
    0:
        image: /images/pe/edge/integrations/http/device-1-edge.png
        title: 'Go to the "<b>Entities</b>" section -> "<b>Devices</b>" page on the Edge to see the created device with data.'

---

* TOC
{:toc}

## Introduction

It is possible to execute any ThingsBoard Integration remotely from main ThingsBoard Edge instance.
This guide contains step-by-step instructions how to launch ThingsBoard integration remotely.
For example, we will launch HTTP integration and push data over *remote* HTTP integration to ThingsBoard Edge.  

See [deployment options](/docs/pe/edge/user-guide/integrations/#deployment-options) for more general information.

## Prerequisites

We assume you already have a ThingsBoard Edge instance up and running, and connected to the **Server**.   

## ThingsBoard Server configuration steps

Converter and Integration templates are created on the **Server**, so please log in as Tenant administrator to the Server instance.

### Step 1. Create Uplink Converter

Before creating the Integration template, you need to create an Uplink converter template in **Converters templates** page.
Uplink is necessary in order to convert the incoming data from the device into the required format for displaying them in ThingsBoard Edge.
Click on the 'plus' and on 'Create new converter'. To view the events, enable Debug.
In the function decoder field, specify a script to parse and transform data.

{% include images-gallery.html imageCollection="addConverter" %}

{% include templates/edge/integrations/debug-mode-info.md %}

**Example for the Uplink converter:**

```ruby
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object
/** Decoder **/
// decode payload to string
// var payloadStr = decodeToString(payload);
// decode payload to JSON
var data = decodeToJson(payload);
var deviceName = data.deviceName;
// Result object with device attributes/telemetry data
var result = {
   deviceName: deviceName,
   deviceType: 'default',
   attributes: {
       model: data.model,
   },
   telemetry: {
       temperature: data.temperature
   }
};
/** Helper functions **/
function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}
function decodeToJson(payload) {
   // covert payload to string.
   var str = decodeToString(payload);
   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}
return result;
```
{: .copy-code}

### Step 2. Create Remote Integration 

Now that the Uplink converter template has been created, it is possible to create an integration.

{% include images-gallery.html imageCollection="addIntegration" %}

### Step 3. Save Remote Integration credentials.

Let's copy-paste the integration key and secret from the integration details, we'll use them later during **Remote integration installation steps**.

{% include images-gallery.html imageCollection="copyCredentials" %}

### Step 4. Assign Integration to Edge.

Once converter and integration templates are created, we can assign Integration template to Edge.
Because we are using placeholder **$\{\{remoteHttpIntegrationUrl\}\}** in the integration configuration, we need to add attribute **remoteHttpIntegrationUrl** to edge first.
You need to provide **IP address** and **port** of your *HTTP* remote integration as **remoteHttpIntegrationUrl** attribute.
By default, remote HTTP integration uses **8082** port. 
We are going to use the same port in the demo, and IP address is going to be set as IP of the machine where remote integration service is going to be started.
Once attribute added, we are ready to assign integration and verify that it's added.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

## Remote integration installation steps

### Choose your platform and install

One can install ThingsBoard Integration via Docker, Debian or RPM packages.
Please use one of the next steps.

 * [Docker on Linux or Mac OS](#docker-on-linuxmac)
 * [Docker on Windows](#docker-on-windows)
 * [Ubuntu](#ubuntu-server)
 * [CentOS/RHEL Server](#centosrhel-server)

### Docker on Linux/Mac

- **[Install Docker CE](https://docs.docker.com/engine/installation/)**

- **Choose Integration to install**


{% capture contenttogglespec %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/edge/install/integration/http-docker.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/edge/install/integration/mqtt-docker.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/edge/install/integration/opcua-docker.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/edge/install/integration/tcpudp-docker.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/edge/install/integration/coap-docker.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="remoteintegrationdockerinstall" toggle-spec=contenttogglespec %}


{% include templates/edge/install/integration/advanced-config-docker.md %} 


- **Troubleshooting**

{% include templates/troubleshooting/dns-issues.md %}

### Docker on Windows

- **[Install Docker Toolbox for Windows](https://docker-docs.uclv.cu/toolbox/toolbox_install_windows/)**

- **Choose Integration to install**

{% capture contenttogglespecwin %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/edge/install/integration/http-docker-windows.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/edge/install/integration/mqtt-docker-windows.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/edge/install/integration/opcua-docker-windows.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/edge/install/integration/tcpudp-docker-windows.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/edge/install/integration/coap-docker-windows.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="remoteintegrationdockerinstallwin" toggle-spec=contenttogglespecwin %}

{% include templates/edge/install/integration/advanced-config-docker.md %} 

- **Troubleshooting**

{% include templates/troubleshooting/dns-issues-windows.md %}

### Ubuntu Server

- **Install Java 17 (OpenJDK)** 

{% include templates/install/ubuntu-java-install.md %}

- **Choose Integration package to install**
 
{% capture ubuntuinstallspec %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/edge/install/integration/http-ubuntu.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/edge/install/integration/mqtt-ubuntu.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/edge/install/integration/opcua-ubuntu.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/edge/install/integration/tcpudp-ubuntu.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/edge/install/integration/coap-ubuntu.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="remoteintegrationinstallubuntu" toggle-spec=ubuntuinstallspec %} 

### CentOS/RHEL Server

- **Install Java 17 (OpenJDK)** 

{% include templates/install/rhel-java-install.md %}

- **Choose Integration package to install**
 
{% capture rhelinstallspec %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/edge/install/integration/http-rhel.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/edge/install/integration/mqtt-rhel.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/edge/install/integration/opcua-rhel.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/edge/install/integration/tcpudp-rhel.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/edge/install/integration/coap-rhel.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="remoteintegrationinstallrhel" toggle-spec=rhelinstallspec %} 

## Remote HTTP integration validation

To send an uplink message, you need HTTP endpoint URL from the integration.  
Let's log in to ThingsBoard **Edge** and go to the **Integrations** page. 
Find your HTTP integration and click on it. There you can find the HTTP endpoint URL. Click on the icon to copy the url.

**Important!** Please make sure that your machine is able to access machine where remote HTTP integration is running, and port *8082* is not blocked by any firewall rules.

Use this command to send the message. Replace $DEVICE_NAME and $YOUR_HTTP_ENDPOINT_URL with corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code}

{% include images-gallery.html imageCollection="sendUplink" %}

The created device with data can be seen in the section **Device groups -> All** on the Edge:

{% include images-gallery.html imageCollection="device" %}

## Remote integration configuration

Remote integration configuration is done via ThingsBoard UI and there is no specific steps.
Explore guides and video tutorials related to specific integrations:

 - [HTTP](/docs/pe/edge/user-guide/integrations/http/)
 - [MQTT](/docs/pe/edge/user-guide/integrations/mqtt/)
 - [OPC-UA](/docs/pe/edge/user-guide/integrations/opc-ua/)
 - [TCP](/docs/pe/edge/user-guide/integrations/tcp/)
 - [UDP](/docs/pe/edge/user-guide/integrations/udp/)
 - [CoAP](/docs/pe/edge/user-guide/integrations/coap/)

## Remote integration troubleshooting

Please review the log files. Their location is specific to the platform and installation package you have used and is mentioned in the installation steps. 

## Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}




