{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "https://sixfab.com/product/alpon-x4" %}
{% assign thingsboardHost = "https://" | append: {{hostName}} %}


[ALPON X4]({{deviceVendorLink}}){: target="_blank"} is a powerful and reliable edge computer for IoT and industrial applications developed by Sixfab. It features cloud management, LTE connectivity, and eSIM support for automatic network switching. Powered by a Raspberry Pi CM4 processor, up to 8GB LPDDR4 RAM, and 32GB eMMC storage, it ensures robust processing for demanding applications. With Cat4 LTE, Wi-Fi 2.4/5GHz, Bluetooth 5.0 BLE, and Gigabit Ethernet, the ALPON X4 guarantees seamless connectivity, even in challenging environments.

Its rugged design operates from -20°C to +60°C, supports flexible power options like USB-PD Type-C, 9-30V DC, and optional PoE+, and offers DIN Rail or Wall Mount for easy deployment. Certified by CE, FCC, Verizon, AT&T, and more, it’s built for global scalability. The ALPON X4 powers industrial automation with PLC and Modbus, enables smart home and remote monitoring via ThingsBoard, supports digital signage, and optimizes energy efficiency for versatile IoT solutions.

## Prerequisites

To continue with this guide, you will need the following:

- [Sixfab Connect Account](https://connect.sixfab.com){: target="_blank"}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}

- **ALPON X4 Device**: Registered and activated on Sixfab Connect with an active internet connection. Refer to the [ALPON X4 Getting Started page](https://docs.sixfab.com/docs/alpon-x4-getting-started){: target="_blank"} setup instructions for details.
- **Basic Knowledge**: Familiarity with IoT concepts, containerized applications, and ThingsBoard dashboards.


## Create Device on ThingsBoard (Optional)

The integration can create a device even if there is no device yet, so skip this step if you want.

### Log in to ThingsBoard

1. Access your [ThingsBoard instance]({{ thingsboardHost }}){: target="_blank"}.
2. Navigate to **Entities > Devices** in the sidebar.
![Create Device on ThingsBoard 1](/images/devices-library/ready-to-go-devices/alpon-x4/1.png)

### Add a New Device

1. Click on the “+” icon in the top right corner of the table and select "Add new device".
![Create Device on ThingsBoard 2](/images/devices-library/ready-to-go-devices/alpon-x4/2.png)
2. Enter the device name (e.g., `ALPON_X4`). No other changes are required at this time.
![Create Device on ThingsBoard 3](/images/devices-library/ready-to-go-devices/alpon-x4/3.png)
3. Click **Add** and close the window. The device is created.


## Add Integration and Topic Filter

To transfer data from the ALPON X4 to ThingsBoard via an external MQTT broker, you need to set up an MQTT Integration in ThingsBoard. This integration uses a Topic Filter to specify which MQTT topics to listen to and a Data Converter written in TBEL to process incoming data and map it to the appropriate device.

### Create an MQTT Integration

1. Log in to ThingsBoard. Go to the **Integrations center** -> **Integrations** page.
   ![Create an MQTT Integration 1](/images/devices-library/ready-to-go-devices/alpon-x4/5.png)
2. Click "plus" icon to add a new integration.
3. Select "**MQTT**" as the integration type.
   ![Create an MQTT Integration 2](/images/devices-library/ready-to-go-devices/alpon-x4/6.png)
4. Select "**TBEL**" as the Downlink data converter.
   ![Create an MQTT Integration 3](/images/devices-library/ready-to-go-devices/alpon-x4/7.png)
5. Copy and paste the following code into the decoder function window and click "**Next**".

```
// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object

/** Decoder **/

var payloadObj = decodeToJson(payload);

var deviceName = 'ALPON X4';
var deviceType = 'alpon';
var groupName = 'alpon devices';
var manufacturer = 'Sixfab';

var result = {
   deviceName: deviceName,
   deviceType: deviceType,

   groupName: groupName,
   attributes: {
       model: 'X4',
       serialNumber: '111111111',
       manufacturer: manufacturer
   },
   telemetry: {
       temperature: payloadObj.temperature,
   }
};

/** Helper functions 'decodeToString' and 'decodeToJson' are already built-in **/

return result;
```
{:.copy-code.expandable-10}

6. Configure the broker details:
   - **Host**: `broker.hivemq.com`
   - **Port**: `1883`
   - **Topic**: `v1/devices/+/telemetry`
     This filter determines which topics the integration will listen to.
     ![Create an MQTT Integration 4](/images/devices-library/ready-to-go-devices/alpon-x4/8.png)
    - Click **Add** button.

### Understand the Topic Filter

The Topic Filter `v1/devices/+/telemetry` uses a single-level wildcard (+) to match any single topic level in the specified position. For example, it will match topics like:
- `v1/devices/device1/telemetry`
- `v1/devices/sensorA/telemetry`
- `v1/devices/room23/telemetry`

It will **not** match topics such as:
- `v1/devices/device1/sensor/telemetry` (because `+` matches only one level)
- `v1/devices/telemetry` (because a level is missing)
- `v1/attributes/+/client` (different topic structure)

This structure allows the integration to process data from multiple devices, each using a unique identifier (e.g., `device1`, `sensorA`, `room23`) in the topic.

This setup allows the ALPON X4 to send telemetry data to ThingsBoard via an external MQTT broker, with the integration processing and mapping the data to the correct device based on the topic structure.

## Docker Container Setup

Follow the steps below to prepare the MQTT client container on your local computer and then install Sixfab Registry.

### Install Docker

Ensure Docker is installed on your local machine. Download and install it from the official Docker website if needed.

### Create a Dockerfile

Create a file named `Dockerfile` with the following content to set up the environment for the MQTT client:

```dockerfile
FROM alpine:latest

RUN apk update && apk add \
    mosquitto-clients \
    mosquitto \
    python3 \
    py3-pip \
    bash

RUN pip3 install paho-mqtt --break-system-packages

WORKDIR /app

COPY mqtt_test.py /app/

CMD ["python3", "/app/mqtt_test.py"]
```
{:.copy-code.expandable-10}

### Create the MQTT Test Script

Create a file named `mqtt_test.py` in the same directory as the `Dockerfile`. This script configures the ALPON X4 to publish telemetry data to ThingsBoard via MQTT:
```python
import paho.mqtt.client as mqtt
import json
import ssl
import time
import os

MQTT_SERVER = os.getenv("MQTT_SERVER")
MQTT_PORT = os.getenv("MQTT_PORT")
CLIENT_ID = os.getenv("CLIENT_ID")
TOPIC = os.getenv("TOPIC")

# Define callback functions
def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe(TOPIC, qos=0)
    print(f"Subscribed to topic: {TOPIC}")
    # Publish a test message after connecting
    test_message = {"temperature": 26}
    client.publish(TOPIC, json.dumps(test_message), qos=0)
    print("Test message published.")

def on_message(client, userdata, msg):
    print(f"RECEIVED MESSAGE on {msg.topic}:")
    try:
        message = json.loads(msg.payload.decode())
        print(json.dumps(message, indent=4))
    except Exception as e:
        print(f"Error decoding JSON: {e}")
        print(msg.payload.decode())

# Setup MQTT client
client = mqtt.Client(client_id=CLIENT_ID, clean_session=True)

# Setup callbacks
client.on_connect = on_connect
client.on_message = on_message

# Enable SSL/TLS (commented out in original)
# client.tls_set(cert_reqs=ssl.CERT_REQUIRED)

client.connect(MQTT_SERVER, int(MQTT_PORT), 60)

# Start the loop
client.loop_forever()
```
{:.copy-code.expandable-10}

### Build the Docker Image

1. Open a terminal on your local machine in the directory containing the `Dockerfile` and `mqtt_test.py`.
2. Run the following command to build the Docker image:
```bash
docker build --platform=linux/arm64 -t thingsboard-mqtt-alpon-x4:latest .
```
{:.copy-code}

### Upload the Docker Image

1. Log in to the Sixfab Connect platform and navigate to the container registry section.
![Upload the Docker Image 1](/images/devices-library/ready-to-go-devices/alpon-x4/9.png)
2. Click on **+ Add Container** and follow the prompts to push the container to the Sixfab Registry.

> Visit the [Manage & Deploy Applications](https://docs.sixfab.com/docs/alpon-x4-manage-and-deploy-applications){:target="_blank"} page for all necessary details on pushing your container image to the Sixfab Registry.

## Deployment Configuration

1. Log in to [**Sixfab Connect**](https://connect.sixfab.com){:target="_blank"}.
2. Navigate to **Assets** and select your ALPON X4 device.
3. Go to the **Application** section and click “+ Deploy”.
4. In the **Deploy Container** window:
   - **Container Name**: `thingsboard`
   - **Image and Tag**: Select the uploaded image and tag pushed to the Sixfab Registry.
   - **Environment**: Click "+ Add More" in the environment section and add the following values:
     - `MQTT_SERVER`: `broker.hivemq.com`
     - `MQTT_PORT`: `1883`
     - `CLIENT_ID`: alponx4
     - `TOPIC`: `v1/devices/ALPON_X4/telemetry`
     ![Deployment Configuration 1](/images/devices-library/ready-to-go-devices/alpon-x4/10.png)

5. Click the “+ Deploy” button to start the container.
![Deployment Configuration 2](/images/devices-library/ready-to-go-devices/alpon-x4/11.png)

## Check Data on ThingsBoard

Verify that telemetry data is received and displayed in ThingsBoard:
1. Log in to your ThingsBoard instance.
2. Navigate to **Entities > Devices** and select your ALPON X4 device.
3. Go to the **Latest Telemetry** tab to view the temperature and humidity data sent.
![Check Data on ThingsBoard 1](/images/devices-library/ready-to-go-devices/alpon-x4/12.png)

## Conclusion

This guide demonstrated how to integrate the ALPON X4 with ThingsBoard using MQTT for real-time data collection and device control. By following the steps, you created a device in ThingsBoard, deployed an MQTT client on Sixfab Connect, and verified telemetry data.

For further assistance, refer to the [ThingsBoard documentation](https://thingsboard.io/docs/){:.copy-code} or contact [Sixfab support](https://sixfab.com/contact/){:.copy-code}.
{% include add-device-banner.liquid %}