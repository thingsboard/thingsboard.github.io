---
layout: docwithnav-pe-edge
title: Remote Integrations
description: Remote Integrations Documentation

addConverter:
    0:
        image: /images/pe/edge/integrations/remote/add-converter-step-1.webp
        title: '1. Open <b>Converter templates</b> menu page. 2. Click <b>("+")</b> icon and select <b>Create new converter</b>.'
    1:
        image: /images/pe/edge/integrations/remote/add-converter-step-2.webp
        title: '1. Enter the converter name, e.g., <b>Temperature converter</b>. 2. Select the converter type: <b>Uplink</b>. 3. Insert the code snippet from the example. 4. Click the <b>Add</b> button.'

addIntegration:
    0:
        image: /images/pe/edge/integrations/remote/add-integration-template-step-1.webp
        title: '1. Open <b>Integration templates</b> menu page. 2. Click the <b>("+")</b> icon to add a new integration.'
    1:
        image: /images/pe/edge/integrations/remote/add-integration-template-step-2.webp
        title: '1. Select integration type: <b>HTTP</b>. 2. Input integration name, e.g., <b>HTTP Demo Remote</b>. 3. Click <b>Next</b> button.'
    2:
        image: /images/pe/edge/integrations/remote/add-integration-template-step-3.webp
        title: '1. Click <b>Select existing</b> button. 2. Select uplink data converter: <b>Temperature Converter</b>. 3. Click <b>Next</b> button.'
    3:
        image: /images/pe/edge/integrations/remote/add-integration-template-step-4.webp
        title: 'Enter the converter name, e.g., <b>Temperature converter</b>. 2. Select converter type: <b>Uplink</b>. 3. Insert the code snippet from the example. 4. Click the <b>Add</b> button.'
    4:
        image: /images/pe/edge/integrations/remote/add-integration-template-step-5.webp
        title: 'Verify that our <b>HTTP Demo Remote</b> integration template was created successfully.'

assignIntegration:
    0:
        image: /images/pe/edge/integrations/remote/assign-integration-step-1.webp
        title: '1. Open <b>Instances</b> menu page. 2. Click on <b>My New Edge</b>.'
    1:
        image: /images/pe/edge/integrations/remote/assign-integration-step-2.webp
        title: '1. Click <b>Attributes</b> tab. 2. Click <b>("+")</b> icon to add new attribute.'
    2:
        image: /images/pe/edge/integrations/remote/assign-integration-step-3.webp
        title: '1. Enter <b>remoteHttpIntegrationUrl</b> attribute. 2. Set the remote value for your HTTP integration <b>http://IP:port</b>. 3. Click <b>Add</b> button.'
    3:
        image: /images/pe/edge/integrations/remote/assign-integration-step-4.webp
        title: 'Open <b>Instances</b> menu page.'
    4:
        image: /images/pe/edge/integrations/remote/assign-integration-step-5.webp
        title: 'Click <b>Manage edge integrations</b>.'
    5:
        image: /images/pe/edge/integrations/remote/assign-integration-step-6.webp
        title: 'Click <b>("+")</b> icon.'
    6:
        image: /images/pe/edge/integrations/remote/assign-integration-step-7.webp
        title: '1. Select the target integration. 2. Click <b>Assign</b> button.'
    7:
        image: /images/pe/edge/integrations/remote/assign-integration-step-8.webp
        title: 'Open <b>Edge</b> instance. 1. Open the <b>Integrations</b> menu page 2. Click on <b>HTTP Demo Remote</b>. 3. Check that placeholder is substituted with the value of the attribute.'

copyCredentials:
    0:
        image: /images/pe/edge/integrations/remote/copy-credentials.webp
        title: '1. Open the <b>Integration templates</b> menu page. 2. Click the integration template row. 3. Click to copy <b>Integration key</b>. 4. Click to copy <b>integration secret</b>.'

sendUplink:
    0:
        image: /images/pe/edge/integrations/remote/send-uplink-step-1.webp
    1:
        image: /images/pe/edge/integrations/remote/send-uplink-step-2.webp

device:
    0:
        image: /images/pe/edge/integrations/remote/device-1-edge.webp
        title: 'Go to the "<b>Entities</b>" section -> "<b>Devices</b>" page on the Edge to see the created device with data.'

---

* TOC
{:toc}

### Introduction

It is possible to run any **ThingsBoard Integration** remotely from the main **ThingsBoard Edge** instance.
This guide contains step-by-step instructions on how to launch **ThingsBoard integration remotely**.

For example, we will launch HTTP integration and push data to **ThingsBoard Edge via remote HTTP integration**.

See the [deployment options](/docs/pe/edge/user-guide/integrations/#deployment-options){: target="_blank"} for more general information.

### Prerequisites

We assume you already have a **ThingsBoard Edge** instance up and running, and connected to the **Server** as a **Tenant administrator**.   

### ThingsBoard Server configuration steps

Converter and Integration templates are created on the **Server**, so please log in to the Server instance.

#### Step 1. Create an Uplink Converter

Before creating the **Integration template**, create an **Uplink converter template** in the **Converters templates** section.

To convert the data coming in from the device into the format needed to display it on the **ThingsBoard Edge**, the **Uplink** is required:
* Click the **"plus"** button and select the **"Create new converter"** option. 
* To view the events, enable **Debug** mode.
* To parse and transform data, enter a script in the **"function decoder"** field. 

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
{: .copy-code.expandable-15}

#### Step 2. Create Remote Integration 

Now that the **Uplink converter template** has been created, it is possible to create an integration.

{% include images-gallery.html imageCollection="addIntegration" %}

#### Step 3. Save Remote Integration credentials.

Let's copy and paste the **Integration key** and **Secret** from the **Integration details**, we'll use them later during the **Remote integration installation steps**.

{% include images-gallery.html imageCollection="copyCredentials" %}

#### Step 4. Assign Integration to Edge.

Once the converter and integration templates are created, we can assign the **Integration template** to the **Edge**.
Since we are using the **$\{\{remoteHttpIntegrationUrl\}\}** placeholder in the integration configuration, we must first add the **remoteHttpIntegrationUrl** attribute to the **Edge**.
Provide the **IP address** and **port** of your remote *HTTP* integration as the **remoteHttpIntegrationUrl** attribute.
By default, the HTTP remote integration uses port **8082**. 
We will use the same port in the demo, and the **IP address** will be set as the IP of the machine where the remote integration service will be launched.
Once the attribute is added, we are ready to assign the integration and verify that it has been added.

{% include images-gallery.html imageCollection="assignIntegration" showListImageTitles="true" %}

### Remote integration installation steps

#### Choose your platform and install

You can install the ThingsBoard integration via **Docker**, **Debian** or **RPM packages**. Please use one of the following steps.

 * [Docker on Linux or Mac OS](#docker-on-linuxmac){: target="_blank"}
 * [Docker on Windows](#docker-on-windows){: target="_blank"}
 * [Ubuntu](#ubuntu-server){: target="_blank"}
 * [CentOS/RHEL Server](#centosrhel-server){: target="_blank"}

#### Docker on Linux/Mac

- [Install Docker CE](https://docs.docker.com/engine/installation/){: target="_blank"}

- **Choose the Integration to install**


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

#### Docker on Windows

- [Install Docker Toolbox for Windows](https://docker-docs.uclv.cu/toolbox/toolbox_install_windows/){: target="_blank"}

- **Choose the Integration to install**

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

#### Ubuntu Server

- **Install Java 17 (OpenJDK)** 

{% include templates/install/ubuntu-java-install.md %}

- **Choose the Integration package to install**
 
{% capture ubuntuinstallspec %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/edge/install/integration/http-ubuntu.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/edge/install/integration/mqtt-ubuntu.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/edge/install/integration/opcua-ubuntu.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/edge/install/integration/tcpudp-ubuntu.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/edge/install/integration/coap-ubuntu.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="remoteintegrationinstallubuntu" toggle-spec=ubuntuinstallspec %} 

#### CentOS/RHEL Server

- **Install Java 17 (OpenJDK)** 

{% include templates/install/rhel-java-install.md %}

- **Choose the Integration package to install**
 
{% capture rhelinstallspec %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/edge/install/integration/http-rhel.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/edge/install/integration/mqtt-rhel.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/edge/install/integration/opcua-rhel.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/edge/install/integration/tcpudp-rhel.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/edge/install/integration/coap-rhel.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="remoteintegrationinstallrhel" toggle-spec=rhelinstallspec %} 

### Remote HTTP integration validation

To send an uplink message, you need an HTTP endpoint URL from the integration.  
Let's log in to the **ThingsBoard Edge** and go to the **Integrations** section. 
Find the HTTP integration and click it. There you can find the HTTP endpoint URL. Click the icon to copy the URL.

{% capture local-deployment %}
**Important!** 

Please make sure that your machine is able to access the machine on which the remote HTTP integration is running, and **the port 8082 is not blocked by any firewall rules**.
{% endcapture %}
{% include templates/info-banner.md content=local-deployment %}

To send the message, use the following command. Replace **$DEVICE_NAME** and **$YOUR_HTTP_ENDPOINT_URL** with the corresponding values.

```ruby
curl -v -X POST -d "{\"deviceName\":\"$DEVICE_NAME\",\"temperature\":33,\"model\":\"test\"}" $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code}

{% include images-gallery.html imageCollection="sendUplink" %}

The created device with data can be viewed in the **Device groups > All** on the **Edge section**:

{% include images-gallery.html imageCollection="device" %}

### Remote integration configuration

Configuring remote integrations is done through the **ThingsBoard** interface, with no special steps required.
Explore the following guides and video tutorials related to the specific integrations:

 - [HTTP](/docs/pe/edge/user-guide/integrations/http/){: target="_blank"}
 - [MQTT](/docs/pe/edge/user-guide/integrations/mqtt/){: target="_blank"}
 - [OPC-UA](/docs/pe/edge/user-guide/integrations/opc-ua/){: target="_blank"}
 - [TCP](/docs/pe/edge/user-guide/integrations/tcp/){: target="_blank"}
 - [UDP](/docs/pe/edge/user-guide/integrations/udp/){: target="_blank"}
 - [CoAP](/docs/pe/edge/user-guide/integrations/coap/){: target="_blank"}

### Remote integration troubleshooting

Check the log files. Their location is specific to the platform and installation package you are using and is indicated in the installation steps.

### Next steps

{% assign docsPrefix = "pe/edge/" %}
{% include templates/edge/guides-banner-edge.md %}




