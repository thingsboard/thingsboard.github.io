{% assign peDocsPrefix = '' %}
{% if docsPrefix contains 'paas/' %}
{% assign peDocsPrefix = docsPrefix %}
{% endif %}

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

UDP Integration allows to stream data from devices which use a UDP protocol to ThingsBoard and converts payloads of these devices into the ThingsBoard format.

{% capture difference %}
**Please note** UDP Integration can be started only as [remote integration](/docs/{{peDocsPrefix}}user-guide/integrations/remote-integrations){:target="_blank"}. It could be started on the same machine, where TB instance is running, or you can start in on another machine, that has access over the network to the TB instance.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Please review the integration diagram to learn more.

![image](https://img.thingsboard.io/user-guide/integrations/udp-integration.svg)

## Prerequisites

In this tutorial, we will use:

{% if docsPrefix == "pe/" %}
- The instance of the [ThingsBoard Professional Edition](https://thingsboard.io/docs/user-guide/install/pe/installation-options/){:target="_blank"} installed locally;
- UDP integration, running externally and connected to the ThingsBoard PE instance;
{% endif %}
{% if docsPrefix contains "paas/" %}
- ThingsBoard Professional Edition instance — [{{hostName}}](https://{{hostName}}){:target="_blank"};
- UDP integration, running externally and connected to the ThingsBoard Cloud;
{% endif %}
- **echo** command which intended to display a line of text, and will redirect it's output to **netcat** (**nc**) utility;
- **netcat** (**nc**) utility to establish UDP connections, receive data from there and transfer them;

Suppose we have a sensor sending current temperature and humidity readings. 
Sensor **SN-001** sends data to UDP integration on port **11560** of the machine where the UDP integration is running.

For demo purposes we assume that our device is smart enough to send data in 4 different payload types. 
You can select payload type based on your device capabilities and business cases:
 
{% capture fourpayloadtypes %}
Text payload<br>%,%text%,%templates/integration/udp/text-payload-type.md%br%
JSON payload<br>%,%json%,%templates/integration/udp/json-payload-type.md%br%
Binary payload<br>%,%binary%,%templates/integration/udp/binary-payload-type.md%br%
Hex payload<br>%,%hex%,%templates/integration/udp/hex-payload-type.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="fourpayloadtypes" toggle-spec=fourpayloadtypes %}

{% capture difference %}
**Please note**
<br>
On the machine, where UDP Integration is running, port **11560** must be opened for incoming connections - **nc** utility must be able to connect to UDP socket. In case you are running it locally, it should be fine without any additional changes.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Add UDP integration

**1. Basic settings**.

Go to the "**Integrations**" page of the "**Integrations center**" section. Click "plus" button to start adding new integration. Select type "**UDP**" integration and click "**Next**";

![image](https://img.thingsboard.io/user-guide/integrations/udp/udp-integration-setup-1-pe.png)

<br>
**2. Uplink data converter**. 

An uplink converter that is a script for parsing and transforming the data received by UDP integration to format that ThingsBoard uses. 
**deviceName** and **deviceType** are required, while attributes and telemetry are optional. attributes and telemetry are flat key-value objects. Nested objects are not supported.

**Choose device payload type to for decoder configuration:**

{% capture uplinkdecoderconfiguration %}
Text payload<br>%,%text%,%templates/integration/udp/uplink-decoder-text-payload.md%br%
JSON payload<br>%,%json%,%templates/integration/udp/uplink-decoder-json-payload.md%br%
Binary payload<br>%,%binary%,%templates/integration/udp/uplink-decoder-binary-payload.md%br%
Hex payload<br>%,%hex%,%templates/integration/udp/uplink-decoder-hex-payload.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="uplinkdecoderconfiguration" toggle-spec=uplinkdecoderconfiguration %}

**3. Downlink data converter**.

At the step of adding a downlink converter, you can also select a previously created or create a new downlink converter. But for now, leave the "**Downlink data converter**" field empty. Click "**Skip**";

![image](https://img.thingsboard.io/user-guide/integrations/udp/udp-integration-setup-3-pe.png)

<br>
**4. Connection**.

As we mentioned earlier, "**Execute remotely**" option is checked and can not be modified - UDP Integration can be only remote type.

By default, UDP Integration will use **11560** port, but you can change this to any available port in your case.

Please note down **Integration key** and **Integration secret** - we will use these values later in the configuration on the remote UDP Integration itself.

We leave the **Enable broadcast - integration will accepts broadcast address packets** options by default. This flag indicates that integration will accept UDP packets sent to the broadcast address.

<br>
Choose device payload type for **Handler Configuration**:

{% capture handlerconfiguration %}
Text payload<br>%,%text%,%templates/integration/udp/udp-handler-configuration-text.md%br%
JSON payload<br>%,%json%,%templates/integration/udp/udp-handler-configuration-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/udp/udp-handler-configuration-binary.md%br%
Hex payload<br>%,%hex%,%templates/integration/udp/udp-handler-configuration-hex.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpintegrationhandlerconfiguration" toggle-spec=handlerconfiguration %}

## Installing and running external UDP integration

Please refer to the [remote integration guide](/docs/{{peDocsPrefix}}user-guide/integrations/remote-integrations){:target="_blank"} and install UDP integration service locally or on separate machine.

Use **Integration key** and **Integration secret** from the above section for your UDP integration configuration.

## Send uplink message

Once ThingsBoard UDP integration has been created, the UDP server starts, and then it waits for data from the devices.

Choose device payload type to send uplink message:

{% capture senduplink %}
Text payload<br>%,%text%,%templates/integration/udp/udp-send-uplink-text.md%br%
JSON payload<br>%,%json%,%templates/integration/udp/udp-send-uplink-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/udp/udp-send-uplink-binary.md%br%
Hex payload<br>%,%hex%,%templates/integration/udp/udp-send-uplink-hex.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpintegrationsenduplink" toggle-spec=senduplink %}

Once you go to "**Devices**" page you should find a **SN-001** device provisioned by the UDP integration.
Click the device, navigate to the "**Latest telemetry**" tab to see the "temperature" key and its value (25.7) there and also the "humidity" key and its value (69) there as well.

![image](https://img.thingsboard.io/user-guide/integrations/udp/udp-integration-add-device-pe.png)

## Advanced usage: downlink

For sending Downlink messages from Thingsboard to the device, we need to define a downlink converter. 

### Add downlink converter

{% include templates/tbel-vs-js.md %}

{% capture udpdownlink %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/udp/udp-downlink-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/udp/udp-downlink-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="udpdownlink" toggle-spec=udpdownlink %}

To add a downlink data converter to the UDP integration, follow these steps:

{% assign udpAddDownlinkConverter = '
  ===
    image: https://img.thingsboard.io/user-guide/integrations/udp/udp-add-downlink-converter-tbel-1-pe.png,
    title: Go to the "**Integrations**" page, click UDP integration to open its details, and enter integration editing mode by clicking the "pencil" icon;
  ===
    image: https://img.thingsboard.io/user-guide/integrations/udp/udp-add-downlink-converter-tbel-2-pe.png,
    title: Enter a name for the downlink data converter and click "**Create new converter**";
  ===
    image: https://img.thingsboard.io/user-guide/integrations/udp/udp-add-downlink-converter-tbel-3-pe.png,
    title: Paste the script to the encoder function section, and click "Add";
  ===
    image: https://img.thingsboard.io/user-guide/integrations/udp/udp-add-downlink-converter-tbel-4-pe.png,
    title: Apply changes.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=udpAddDownlinkConverter %}

{% capture difference %}
Optionally, configure **Cache Size** and **Cache time to live in minutes** - features, that helps to avoid memory leak when we are storing connections (able just for UDP Downlink).<br>
**Cache Size** - maximum size of messages for UDP client.<br>
**Cache time to live in minutes** - time to storage messages.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### Modify Root Rule Chain

When integration configured and ready to use, we need to go to "Rule Chains" page and configure the "**Root Rule Chain**" so that messages like "**Attributes updated**" and "**Post attributes**" are forwarded to the downlink data converter:

{% assign ruleChainDownlink = '
  ===
    image: https://img.thingsboard.io/user-guide/integrations/udp/rule-chain-downlink-1-pe.png,
    title: In the Root Rule Chain editor, find the "**integration downlink**" node and drag it to the rule chain;
  ===
    image: https://img.thingsboard.io/user-guide/integrations/udp/rule-chain-downlink-2-pe.png,
    title: Name it "**UDP Downlink**", specify our "**UDP integration**", and click "Add";
  ===
    image: https://img.thingsboard.io/user-guide/integrations/udp/rule-chain-downlink-3-pe.png,
    title: Drag the connection from the "message type switch" node to the "UDP integration" node with "**Attributes updated**" and "**Post attributes**" labels. Save all changes;
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=ruleChainDownlink %}

### Test downlink

To test downlink, create some **shared attribute** on your device:

{% assign ruleChainDownlink = '
    ===
        image: https://img.thingsboard.io/user-guide/integrations/udp/udp-add-shared-attribute-1-pe.png,
        title: Go to the "**Devices**" page. Click your device and navigate to the "**Attributes**" tab. Select the "**Shared attributes**" option, and click the "**plus**" icon;
    ===
        image: https://img.thingsboard.io/user-guide/integrations/udp/udp-add-shared-attribute-2-pe.png,
        title: Enter the attribute name, and its value (for example, the key name is "**firmware**", value: "**v1.1**") and click "Save";
    ===
        image: https://img.thingsboard.io/user-guide/integrations/udp/udp-add-shared-attribute-3-pe.png,
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=ruleChainDownlink %}

To receive a downlink message you need to set the timeout for responses `-w10` (this option determines how long you will wait for a response) and send the uplink message again:

```shell
echo -e 'SN-001,default,temperature,25.7,humidity,69' | nc -w10 -u 127.0.0.1 11560
```
{: .copy-code}

You should get the following response from the ThingsBoard in the terminal:

![image](https://img.thingsboard.io/user-guide/integrations/udp/terminal-add-attribute.png)

{% capture difference %}
**Note**
<br>
When you use UDP integration, and your connection established for a long time, you will receive just one Downlink message. All other will be saved on server side and will be sent on next Uplink.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}