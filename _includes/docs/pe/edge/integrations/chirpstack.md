* TOC
{:toc}

{% assign integrationName = "ChirpStack" %}
{% assign integrationUrl = "chirpstack" %}
{% include templates/edge/integrations/edge-pe-reference.md %}

### Overview

[ChirpStack](https://www.chirpstack.io/){: target="_blank"} is an **open-source LoRaWAN Network Server** which can be used to setup LoRaWAN networks.
After integrating ChirpStack with **ThingsBoard Edge**, you can locally connect, process, and visualize device data at the edge, ensuring low-latency insights and offline capabilities.

To learn more, please see the integration diagram.

![image](https://img.thingsboard.io/pe/edge/integrations/chirpstack/chirpstack-diagram.webp){: style="display: block; margin: auto; max-height: 400px"}

### Prerequisites

* **ThingsBoard Edge Professional Edition** up and running.
* Install **ChirpStack Network Server** via [Docker Compose](https://www.chirpstack.io/project/guides/docker-compose/){: target="_blank"} or [Ubuntu](https://www.chirpstack.io/project/guides/debian-ubuntu/){: target="_blank"}.
* Have a device connected to the network. Read how to connect the **LoRaWAN device** with [ChirpStack](https://www.chirpstack.io/project/guides/connect-device/){: target="_blank"}.

### Create converter and integration templates

Only the **ThingsBoard Professional Edition** creates converters and integration templates.
So please use [**ThingsBoard Cloud**](https://thingsboard.cloud/signup){: target="_blank"} or [**install**](/docs/user-guide/install/pe/installation-options/){: target="_blank"} your own platform instance to log in as a **Tenant administrator**.

#### Basic settings

To add the **ChirpStack integration**:
- Go to the **Edge management > Integration templates** section and click the **"Add"** button to add a new integration.
- Select the **ChirpStack** type and enter the **integration name**. 
- Click the **"Next"** button.

{% include images-gallery.html imageCollection="basic-settings" %}

{% capture debug-mode %}
**Debug mode** is extremely useful for development and troubleshooting. However, having it on all the time can significantly increase the disk space used by the database since all the debug data is stored there.
<p>Therefore, starting from <b>version 3.9</b>, <b>ThingsBoard</b> stores all debug events for integrations only during the first <b>15 minutes</b>. After that, only failure events are retained. These settings can be combined or completely disabled.</p>
{% endcapture %}
{% include templates/info-banner.md content=debug-mode %}

#### Uplink data converter

**Uplink** is necessary to convert the incoming data from the device into the required format for displaying them in **ThingsBoard**.

* Select the **"Create new"** tab
* Enter the **Converter name**
* The **Main decoding configuration** block:
  * Select the **Entity type** (_Device or Asset_) from the drop down-menu and enter the **entity name**. The corresponding entity will be created as a result of the integration.

{% capture placeholder %}
<b>$eui</b> is a placeholder that will automatically be replaced by the device's <b>unique identifier</b> (_e.g., 70B3D57ED003B6F5_) from the <b>Loriot</b> (or ChirpStack, similar MQTT message) payload.
<br>For example, if the device entity is named <b>"Loriot Device $eui"</b>, the created device name may look like <b>"Loriot Device 70B3D57ED003B6F5"<b>.
{% endcapture %}
{% include templates/info-banner.md content=placeholder %}

* Enter the script into the **"function payloadDecoder"** field. For the **Edge version 3.9 and older**, the following script can be used:
{% capture chirpstackuplinkconverterconfig %}
TBEL<small>Recommended</small>%,%accessToken%,%templates/integration/chirpstack/chirpstack-uplink-converter-config-tbel.md%br%
JavaScript<small></small>%,%anonymous%,%templates/integration/chirpstack/chirpstack-uplink-converter-config-javascript.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="chirpstackuplinkconverterconfig" toggle-spec=chirpstackuplinkconverterconfig %}

{% include images-gallery.html imageCollection="uplink-data-converter-script" %}

Starting with **Edge version 4.0**, you can:
* Select the **"Library"** tab, choose the **Vendor** and find the appropriate model in the **"Model"** from the drop-down menus.
* Or use the default script provided in the converter. 

{% include images-gallery.html imageCollection="uplink-data-converter-library" %}

* The **Advanced decoding parameters** block:
  - The **"Device profile"**, **"Device label"**, **"Customer name"**, and **"Device group name"** fields are not mandatory, and you can also use the **$-pattern** to fill them dynamically.
  - In the **Attributes** and **Telemetry** sections specify the keys that should be interpreted as attributes and telemetry, respectively.
  - In the **Update only keys list** section, define keys whose values will be saved to the database only if they have changed from the previous incoming message. This applies to both Attributes and Telemetry, helping optimize data storage.
- Click the **"Next"** button.

{% include images-gallery.html imageCollection="uplink-data-converter-advanced-parameters" %}

#### Downlink data converter (optional)

Configuring a **Downlink data converter** is optional and can be omitted if not required.
To proceed without configuring the downlink converter, select the **"Skip"** tab and click the **"Skip"** button.

{% include images-gallery.html imageCollection="downlink-data-converter" %}

#### Connection {#connection}

Before you proceed with the **Connection** configuration, create the **Application server API Token** at the **ChirpStack UI**.
* Open the **ChirpStack UI** at **http://chipstack-server-ip:8080** (_e.g., http://10.7.2.193:8080/_) and login with your credentials.
  * If the credentials are unmodified, use:
    <br>Username: **admin**
    <br>Password: **admin**
* Go to the **Tennant > API Keys** section and click the **"Add API Key"** button.
* Enter the **API key name** and click the **"Submit"** button.
* Once the **API key name** is created, copy and paste it into the **"Application server API Token"** field in the **ThingsBoard UI**.

{% include images-gallery.html imageCollection="chirpstack-api-key" %}

On the **ThingsBoard UI**, continue with the **Connection** configuration. Fill in the following fields:
* **Base URL:** Enter the URL in the format: **http://edge-ip:edge-port** (_e.g., http://10.7.2.193:8080_).
* **HTTP endpoint URL:** Copy to use it while configuring the [ChirpStack application](#integration-on-chirpstack).
* **Application server URL:** Enter the address of the application server or the REST API service in the format: **http://chipstack-server-ip:8090** (_e.g., http://10.7.2.193:8090_).
* **Application server API Token:** Paste the **API Token** obtained from the **ChirpStack UI**.
* Click the **"Add"** button.

{% include images-gallery.html imageCollection="connection" %}

### Configure the integration on the ChirpStack application {#integration-on-chirpstack}

To forward device data from **ChirpStack** to **ThingsBoard**, the **ChirpStack Application Integration** should be configured as well.
Log in to the **ChirpStack UI** at **http://chipstack-server-ip:8080** to proceed.

#### Add a device profile

Create a device profile before, before configuring the **ChirpStack Application**. Fill in the mandatory fields:
* Go to the **Tenant > Device Profiles** section and click the **"Add device profile"** button.
* On the **"General"** tab, fill in the following fields:
  * **Name:** Enter the device profile name.
  * **Region:** Enter the LoRaWAN regional parameters.
  * **MAC Version:** The LoRaWAN MAC version the device uses.
  * **Regional parameters revision:** Parameter set version for your region.
  * **ADR Algorithm:** Adaptive Data Rate logic.
  * **Expect uplink interval (secs):** Enter the number of seconds ChirpStack expects the device to send an uplink message.
* Click the **"Submit"** button.

{% include images-gallery.html imageCollection="chirpstack-device-profile" %}

#### Add integration

To configure an integration in the **ChirpStack** application:
* Go to the **Tenant > Applications** section and click the **"Add application"** button.
* Enter the **application name** and click the **"Submit"** button.
* Select the **"Integrations"** tab.
* Find the **HTTP integration** in the list and click the **"+"** button to add it to the application.
* Paste the **HTTP endpoint URL** obtained at the [Connection](#connection) configuration step in the **ThingsBoard UI**.
* Click the **"Submit"** button.

{% include images-gallery.html imageCollection="chirpstack-applications" %}

#### Add the device

Once the integration is added, add the device:
* Select the **"Devices"** tab and click the **"Add device"** button.
* On the **"Device"** tab, enter the device **name**.
* **Device EUI (EUI64):** Enter the unique 64-bit (8-byte) identifier assigned to a LoRaWAN device.
  * Select the byte order in which a DevEUI is represented or transmitted (_MSB or LSB_).
* **Device profile:** Select the device profile from the drop-down menu.
* Click the **"Submit"** button.

{% include images-gallery.html imageCollection="chirpstack-device" %}

#### Add the gateway (optional)

In a testing environment, adding gateway can be omitted.
However, the device itself will send data through the gateway. To add the gateway:
* Go to the **Tenant > Gateways** section and click the **"Add gateways"** button.
* Enter the **gateway name**, **gateway ID** and the **number of seconds** at which gateway is expected to send its statistics.

{% include images-gallery.html imageCollection="chirpstack-gateway" %}

### Assign the integration to Edge 

Once the **integration template** is created and the **ChirpStack Application Integration** is configured, assign the **integration template** to the **Edge** instance:
* Go to the **Edge management > Instances** section and click the **"Manage edge integrations"** button.
* On the **"Integration"** page, click the **"Assign to edge"** button. In the **"Assign the Integration to the Edge"** pop-up window, select the integration from the drop-down menu and click the **"Assign"** button.
* To confirm the **ChirpStack** integration on the **Edge**, login to your **ThingsBoard Edge** instance and go to the **Integrations center > Integrations** section. 

{% include images-gallery.html imageCollection="assign-to-edge" %}

### Send an uplink message

To simulate uplinks, use [ChirpStack Device Simulator](https://github.com/brocaar/chirpstack-simulator){: target="_blank"} or manually send **HTTP message** to the **ChirpStack Application Server**.

The example of the **HTTP message:**

```bash
curl -v -X POST -d '{
    "deduplicationId": "7658d04d-7f1c-4eb6-900b-d948f3061a9d",
    "time": "2025-06-13T12:44:52.653+00:00",
    "deviceInfo": {
        "tenantId": "6e073e9a-6b4f-4747-b22c-7507568debfb",
        "tenantName": "ChirpStack",
        "applicationId": "c3f2c4aa-07c8-4d6c-8a86-7ea2d4a31dca",
        "applicationName": "Sample Application",
        "deviceProfileId": "d8ee6c09-414c-4b2e-888a-8e8f86e3187a",
        "deviceProfileName": "Default device profile",
        "deviceName": "chirp device",
        "devEui": "24e124538b223213",
        "deviceClassEnabled": "CLASS_A",
        "tags": {}
    },
    "devAddr": "01a44c4c",
    "adr": true,
    "dr": 5,
    "fCnt": 153,
    "fPort": 84,
    "confirmed": false,
    "data": "AXU9AwABBAAB",
    "rxInfo": [{
        "gatewayId": "e4e124dadef64eee",
        "uplinkId": 25127,
        "gwTime": "2025-06-13T12:44:52.653481+00:00",
        "nsTime": "2025-06-13T12:44:52.670509207+00:00",
        "timeSinceGpsEpoch": "1433853910.653s",
        "rssi": -68,
        "snr": 13.2,
        "channel": 4,
        "location": {},
        "context": "Hw9+zQ==",
        "crcStatus": "CRC_OK"
    }],
    "txInfo": {
        "frequency": 867300000,
        "modulation": {
            "lora": {
                "bandwidth": 125000,
                "spreadingFactor": 7,
                "codeRate": "CR_4_5"
            }
        }
    },
    "regionConfigId": "eu868"
}'  $YOUR_HTTP_ENDPOINT_URL -H "Content-Type:application/json"
```
{: .copy-code.expandable-7}
Where:
* **deduplicationId:** For testing purposes, you may generate any valid UUID v4. It's used for simulation realism only and helps debug integrations that rely on it.
* **tenantId:** Replace the value with your ChirpStack tenant ID.
* **applicationId:** Replace the value with the ChirpStack Application ID.
* **applicationName:** Replace the value with the ChirpStack Application name.
* **deviceProfileId:** Replace the value with the ChirpStack device profile ID.
* **deviceProfileName:** Replace the value with the ChirpStack device profile name.
* **devEui:** Replace the value with the Device EUI you add in the ChirpStack device.
* **gatewayId:** Replace the value with the ChirpStack gateway ID.
* **$YOUR_HTTP_ENDPOINT_URL:** Replace it with the actual value obtained from the ThingsBoard integration.

In production environments, devices **automatically** send uplink messages at regular intervals or in response to events, without manual intervention.

After the message is sent, a new device will be created in the **ThingsBoard Edge** user interface. 
* To view the received time-series data, go to the **Entities > Devices** section, click the **device** and select the **"Latest telemetry"** tab.

{% include images-gallery.html imageCollection="device" %}

To view the received uplink message:
* Go to the **Integrations center > Integrations** section, click the **ChirpStack integration** and select the **"Events"** tab.

{% include images-gallery.html imageCollection="uplink-integration" %}

The received data can be viewed in the **Uplink converter**:
- Go to the **Integrations center > Data converters** section and click the **Uplink converter**.
- On the **"Data converter details"** page, select the **"Events"** tab.
- View the message details in the **"In"** and **"Out"** columns.

{% include images-gallery.html imageCollection="uplink-converter" %}

### Next steps

{% include templates/edge/guides-banner-edge.md %}