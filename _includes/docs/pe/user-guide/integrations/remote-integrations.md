{% assign peDocsPrefix = '' %}
{% if docsPrefix == 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% endif %}

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

Remote Integrations allow reliable data streaming from multiple devices in the local area network (LAN) to the ThingsBoard platform in the cloud. 
They are helpful if you have, for example, a local MQTT broker or OPC-UA server with no external IP address and is not reachable from where your ThingsBoard platform is installed. 
The remote integration initiates a connection to these servers, pulls the data, stores it locally, and then streams it to the ThingsBoard instance.

Although this approach requires some additional steps in the deployment process, it allows integration with servers and devices deployed in the LAN. A separate integration process improves isolation level and performance.

The remote integration approach enables tenants to launch plain [TCP](/docs/user-guide/integrations/tcp/) and [UDP](/docs/user-guide/integrations/udp/) integrations. Those two integrations are unique because they start a server that binds to a specific port. 
Since ThingsBoard is a multi-tenant environment, we can't launch TCP and UDP integrations as part of the core service due to possible port collisions between tenants. 
That is why we propose each tenant to launch a TCP/UDP integration as a remote one. The same applies to any custom integration that the tenant creates.

![image](/images/user-guide/integrations/remote/remote-integrations-overview.png)

It is possible to execute any ThingsBoard Integration separately from the ThingsBoard instance.

This guide contains step-by-step instructions on how to launch MQTT remote integration that connects to the local MQTT Broker and pushes data to the [ThingsBoard Cloud](https://thingsboard.cloud/signup).

You can find additional information about the ThingsBoard Platform integrations feature [here](/docs/{{peDocsPrefix}}user-guide/integrations/).

## ThingsBoard configuration

We assume you already have a tenant administrator account on your own [ThingsBoard PE instance](/docs/user-guide/install/pe/installation-options/) or [ThingsBoard Cloud](https://thingsboard.cloud/signup).

### Create remote integration in ThingsBoard

Let's create remote integration in ThingsBoard that will connect to the local broker using port 1883 and subscribe to all topics.

- Go to the "**Integrations center**" section -> "**Integrations**" page and click "plus" icon to add a new integration. Name it "**MQTT remote integration**", select type "**MQTT**";

![image](/images/user-guide/integrations/remote/remote-integration-1-paas.png)

- The next step is to add a default uplink converter. The new converter will contain necessary code to convert incoming data. Click "**Next**";

![image](/images/user-guide/integrations/remote/remote-integration-2-paas.png)

- You can create a new downlink converter at the step of adding a downlink converter. But for now, leave the "Downlink data converter" field empty. Click "**Skip**";

![image](/images/user-guide/integrations/remote/remote-integration-3-paas.png)

- Specify **host**: "**thingsboard.cloud**" and **port**: "**1883**" at the connection step;
- Subscribe to all **topics**;
- You can also select an MQTT **QoS** level. We use MQTT QoS level 0 (At most once) by default;
- Copy and save the "**Integration key**" and "**Integration secret**". We will use this values later;

![image](/images/user-guide/integrations/remote/remote-integration-4-paas.png)

- Go to the **advanced settings**. It is better to uncheck the "**Clean session**" parameter. Many brokers do not support sticky sessions, so will silently close the connection if you try to connect with this option enabled;
- Click the "**Add**" button to create the integration.

![image](/images/user-guide/integrations/remote/remote-integration-5-paas.png)

<br>
Now let's proceed to the steps for installation remote integration.

## Choose your platform and install

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
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/install/integration/http-docker.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/install/integration/mqtt-docker.md%br%
AWS SQS<br> Integration<br>%,%aws%,%templates/install/integration/aws-docker.md%br%
Azure Event Hub<br>Integration<br>%,%azure%,%templates/install/integration/azure-docker.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/install/integration/opcua-docker.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/install/integration/tcpudp-docker.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/install/integration/coap-docker.md{% endcapture %}

{% include content-toggle.html content-toggle-id="remoteintegrationdockerinstall" toggle-spec=contenttogglespec %}

{% include templates/install/integration/advanced-config-docker.md %} 

- **Troubleshooting**

{% include templates/troubleshooting/dns-issues.md %}

### Docker on Windows

- **[Install Docker Toolbox for Windows](https://docs.docker.com/toolbox/toolbox_install_windows/)**

- **Choose Integration to install**

{% capture contenttogglespecwin %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/install/integration/http-docker-windows.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/install/integration/mqtt-docker-windows.md%br%
AWS SQS<br> Integration<br>%,%aws%,%templates/install/integration/aws-docker-windows.md%br%
Azure Event Hub<br>Integration<br>%,%azure%,%templates/install/integration/azure-docker-windows.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/install/integration/opcua-docker-windows.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/install/integration/tcpudp-docker-windows.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/install/integration/coap-docker-windows.md{% endcapture %}

{% include content-toggle.html content-toggle-id="remoteintegrationdockerinstallwin" toggle-spec=contenttogglespecwin %}

{% include templates/install/integration/advanced-config-docker.md %} 

- **Troubleshooting**

{% include templates/troubleshooting/dns-issues-windows.md %}

### Ubuntu Server

 - Install Java 11 (OpenJDK) 

{% include templates/install/ubuntu-java-install.md %}

 - **Choose Integration package to install**
 
{% capture ubuntuinstallspec %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/install/integration/http-ubuntu.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/install/integration/mqtt-ubuntu.md%br%
AWS SQS<br> Integration<br>%,%aws%,%templates/install/integration/aws-ubuntu.md%br%
Azure Event Hub<br>Integration<br>%,%azure%,%templates/install/integration/azure-ubuntu.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/install/integration/opcua-ubuntu.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/install/integration/tcpudp-ubuntu.md%br%
CoAP<br> Integration<br>%,%coap%,%templates/install/integration/coap-ubuntu.md{% endcapture %}

{% include content-toggle.html content-toggle-id="remoteintegrationinstallubuntu" toggle-spec=ubuntuinstallspec %} 

### CentOS/RHEL Server

 - Install Java 11 (OpenJDK) 

{% include templates/install/rhel-java-install.md %}

 - **Choose Integration package to install**
 
{% capture rhelinstallspec %}
HTTP Integrations<br><small>(HTTP, Sigfox, ThingPark, OceanConnect and <br> T-Mobile IoT CDP)</small>%,%http%,%templates/install/integration/http-rhel.md%br%
MQTT Integrations<br><small>(MQTT, AWS IoT, IBM Watson, The Things Network)</small>%,%mqtt%,%templates/install/integration/mqtt-rhel.md%br%
AWS SQS<br> Integration<br>%,%aws%,%templates/install/integration/aws-rhel.md%br%
Azure Event Hub<br>Integration<br>%,%azure%,%templates/install/integration/azure-rhel.md%br%
OPC UA<br> Integration<br>%,%opcua%,%templates/install/integration/opcua-rhel.md%br%
TCP/UDP<br> Integration<br>%,%tcpudp%,%templates/install/integration/tcpudp-rhel.md{% endcapture %}

{% include content-toggle.html content-toggle-id="remoteintegrationinstallrhel" toggle-spec=rhelinstallspec %} 

## Remote integration configuration

Remote integration configuration is done via ThingsBoard UI and there is no specific steps.
Explore guides and video tutorials related to specific integrations:

 - [HTTP](/docs/{{peDocsPrefix}}user-guide/integrations/http/)
 - [MQTT](/docs/{{peDocsPrefix}}user-guide/integrations/mqtt/)
 - [CoAP](/docs/{{peDocsPrefix}}user-guide/integrations/coap/)
 - [Kafka](/docs/{{peDocsPrefix}}user-guide/integrations/kafka/)
 - [OPC-UA](/docs/{{peDocsPrefix}}user-guide/integrations/opc-ua/)
 - [Actility ThingPark](/docs/{{peDocsPrefix}}user-guide/integrations/thingpark/)
 - [TheThingsStack](/docs/{{peDocsPrefix}}user-guide/integrations/ttn/)
 - [TheThingsIndustries](/docs/{{peDocsPrefix}}user-guide/integrations/tti/)
 - [KPN Things](/docs/{{peDocsPrefix}}user-guide/integrations/kpn-things/)
 - [LORIOT](/docs/{{peDocsPrefix}}user-guide/integrations/loriot/)
 - [ChirpStack](/docs/{{peDocsPrefix}}user-guide/integrations/chirpstack/)
 - [AWS IoT](/docs/{{peDocsPrefix}}user-guide/integrations/aws-iot/)
 - [AWS Kinesis](/docs/{{peDocsPrefix}}user-guide/integrations/aws-kinesis/)
 - [IBM Watson IoT](/docs/{{peDocsPrefix}}user-guide/integrations/ibm-watson-iot/)
 - [Azure Event Hub](/docs/{{peDocsPrefix}}user-guide/integrations/azure-event-hub/)
 - [Azure Service Bus](/docs/{{peDocsPrefix}}user-guide/integrations/azure-service-bus/)
 - [Azure IoT Hub](/docs/{{peDocsPrefix}}user-guide/integrations/azure-iot-hub/)
 - [SigFox](/docs/{{peDocsPrefix}}user-guide/integrations/sigfox/)
 - [OceanConnect](/docs/{{peDocsPrefix}}user-guide/integrations/ocean-connect/)
 - [TCP](/docs/{{peDocsPrefix}}user-guide/integrations/tcp/)
 - [UDP](/docs/{{peDocsPrefix}}user-guide/integrations/udp/)
 - [Tuya](/docs/{{peDocsPrefix}}user-guide/integrations/tuya/)
 - [Custom](/docs/{{peDocsPrefix}}user-guide/integrations/custom/)
  
## Remote integration troubleshooting

Please review the log files. Their location is specific to the platform and installation package you have used and is mentioned in the installation steps. 

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/multi-project-guides-banner.md %}