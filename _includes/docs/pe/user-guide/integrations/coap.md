{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

## Overview

CoAP Integration allows to stream data from devices that use a CoAP protocol to connect to ThingsBoard and converts payloads of these devices into the ThingsBoard format.

Please review the integration diagram to learn more.

![image](/images/user-guide/integrations/coap-integration.svg)

## Prerequisites

In this tutorial, we will show you how CoAP integration works as part of **tb-core** service with **NO SECURE** security mode selected. In order to do this we will use: 

{% if docsPrefix == "pe/" %}
- The instance of [ThingsBoard Professional Edition](https://thingsboard.io/docs/user-guide/install/pe/installation-options/) installed locally;
{% endif %}
{% if docsPrefix == "paas/" %}
- ThingsBoard Professional Edition instance — [thingsboard.cloud](https://thingsboard.cloud);
{% endif %}

- [coap-client](https://manpages.ubuntu.com/manpages/focal/man5/coap-client.5.html) utility which is intended to simulate CoAP client that will connect to CoAP integration;

{% if docsPrefix == "pe/" %}
Let's assume that we have a sensor which is sending current temperature and humidity readings. Our sensor device **SN-001** publishes it's temperature and humidity readings to CoAP Integration on **coap://localhost** URL.
{% endif %}
{% if docsPrefix == "paas/" %}
Let's assume that we have a sensor which is sending current temperature and humidity readings. Our sensor device **SN-001** publishes it's temperature and humidity readings to CoAP Integration on **coap://int.thingsboard.cloud** URL.
{% endif %}

For demo purposes we assume that our device is smart enough to send data in 3 different payload types:
- **Text** - in this case payload is:

```text
SN-001,default,temperature,25.7,humidity,69
```

- **JSON** - in this case payload is:

```json
{
  "deviceName": "SN-001",
  "deviceType": "default",
  "temperature": 25.7,
  "humidity": 69
}
```

- **Binary** - in this case, the payload looks like this (in HEX string):

```text
\x53\x4e\x2d\x30\x30\x31\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x36\x39
```

Here is the description of the bytes in this payload:
- **0-5** bytes - **\x53\x4e\x2d\x30\x30\x31** - device name. If we convert it to text - **SN-001**;
- **6-12** bytes - **\x64\x65\x66\x61\x75\x6c\x74** - device type. If we convert it to text - **default**;
- **13-16** bytes - **\x32\x35\x2e\x37** - temperature telemetry. If we convert it to text - **25.7**;
- **17-18** bytes - **\x36\x39** - humidity telemetry. If we convert it to text - **69**;

You can use payload type based on your device capabilities and business cases.

## Uplink Converter

Before setting up an **CoAP integration**, you need to create an **Uplink Converter** that is a script for parsing and transforming the data received by CoAP integration to format that ThingsBoard uses. **deviceName** and **deviceType** are required, while attributes and telemetry are optional. attributes and telemetry are flat key-value objects. Nested objects are not supported.

To create an **Uplink Converter** go to **Data Converters** section and Click **Add new data converter —> Create new converter**.
Name it **"CoAP Uplink Converter"** and select type **Uplink**. Use debug mode for now.

{% capture difference %}
**NOTE**
<br>
Although the Debug mode is very useful for development and troubleshooting, leaving it enabled in production mode may tremendously increase the disk space, used by the database, because all the debugging data is stored there. It is highly recommended to turn the Debug mode off when done debugging.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

**Choose device payload type to for decoder configuration:**

- **Text payload**

{% include templates/tbel-vs-js.md %}

{% capture coapuplinktext %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/coap/coap-uplink-text-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/coap/coap-uplink-text-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="coapuplinktext" toggle-spec=coapuplinktext %}

- **JSON payload**

{% include templates/tbel-vs-js.md %}

{% capture coapuplinkjson %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/coap/coap-uplink-json-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/coap/coap-uplink-json-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="coapuplinkjson" toggle-spec=coapuplinkjson %}


- **Binary payload**

{% capture coapuplinkbinary %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/coap/coap-uplink-binary-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/coap/coap-uplink-binary-java.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="coapuplinkbinary" toggle-spec=coapuplinkbinary %}

## CoAP Integration Setup

{% include images-gallery.html imageCollection="coap-integration-setup" showListImageTitles="true" %}

### CoAP Integration Configuration

CoAP Integration allows us to choose a security mode:

- **NO SECURE(default mode)**
- **DTLS**
- **MIXED**

![image](/images/user-guide/integrations/coap/coap-integration-modes-1.png)

{% if docsPrefix != "paas/" %}


For the last 2 types, before creating integration, DTLS support should be enabled in the .yml configuration file or should be updated by overriding the next environment variables in the .conf file:

```
# Enable/disable DTLS 1.2 support
export COAP_DTLS_ENABLED=true
# Default CoAP DTLS bind port
export COAP_DTLS_BIND_PORT=5484 
# Path to the key store that holds the SSL certificate
export COAP_DTLS_KEY_STORE=coapserver.jks 
# Password used to access the key store
export COAP_DTLS_KEY_STORE_PASSWORD=server_ks_password
# Password used to access the key
export COAP_DTLS_KEY_PASSWORD=server_key_password
# Key alias
export COAP_DTLS_KEY_ALIAS=serveralias
# Skip certificate validity check for client certificates
export TB_COAP_X509_DTLS_SKIP_VALIDITY_CHECK_FOR_CLIENT_CERT=false
```

Please, note, that added above environment variables use default DTLS configuration settings. In order to get the CoAP server launched correctly in the DTLS mode, you need to update at least key store settings. Please refer to the [CoAP over DTLS](/docs/pe/user-guide/coap-over-dtls) guide in order to learn more about the CoAP DTLS configuration.

{% endif %}

In addition, CoAP integration will provide us automatically generated CoAP endpoint URL for data transmitting based on the Base URL path and next path prefixes:
- **/i** - Integration resource in the CoAP server
- **/$INTEGRATION_ROUTING_KEY** - autogenerated integration routing key

{% if docsPrefix != "pe/" %}

You can also update the CoAP endpoint URL by setting additional path prefixes in front of base URL:

![image](/images/user-guide/integrations/coap/coap-integration-configuration-extra-path-prefix-1-paas.png)

Each of the additional path prefixes will be added to the CoAP server as CoAP resources, where:
- **api** - parent resource
- **v2** - child resource of **api** resource and parent resource of integration resource **i**

{% endif %}

## Send Uplink message

Once CoAP Integration has been created, the CoAP server register appropriate resources, and then it waits for data from the devices.

Choose device payload type to send uplink message

{% capture senduplink %}
Text payload<br>%,%text%,%templates/integration/coap/coap-send-uplink-text.md%br%
JSON payload<br>%,%json%,%templates/integration/coap/coap-send-uplink-json.md%br%
Binary payload<br>%,%binary%,%templates/integration/coap/coap-send-uplink-binary.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="coapintegrationsenduplink" toggle-spec=senduplink %}

Once the command will send you can go to **Device groups** -> **All** you should find an **SN-001** device provisioned by the Integration. 
Click on the device, go to the **Latest Telemetry** tab to see the “temperature” key and its value (25.7) there and also the “humidity” key and its value (69) there as well.

{% if docsPrefix == "pe/" %}
![image](/images/user-guide/integrations/coap/coap-integration-test-uplink-pe.png)
{% endif %}
{% if docsPrefix == "paas/" %}
![image](/images/user-guide/integrations/coap/coap-integration-test-uplink-paas.png)
{% endif %}

## Next steps

{% assign currentGuide = "ConnectYourDevice" %}{% include templates/guides-banner.md %}
