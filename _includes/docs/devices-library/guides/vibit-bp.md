{% assign deviceName = "VIBit-BP" %}
{% assign deviceVendorLink = "https://machineastro.com/vibit-battery-powered/" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign officialManualLink = "/docs/devices-library/resources/manuals/vibit-bp.pdf" %}
{% assign prerequisites = '
- [Sensor user guide](' | append: officialManualLink | append: '){: target="_blank"}
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
  '
  %}

## Introduction

[VIBit-BP]({{deviceVendorLink}}){:target="_blank"} is a battery-powered, compact tri-axial vibration and temperature sensor designed for anomaly detection without the need for external power or wiring. It transmits data wirelessly via Bluetooth Low Energy (BLE), making it ideal for remote condition monitoring in industrial settings.<br><br><br><br><br>

## VIBit-BP Architecture

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/vibit-bp-architecture.png)

## Prerequisites

To continue with this guide, we will need the following:  
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}
{{ prerequisites }} 
- VIBit-BP BLE Gateway is configured to relay data to ThingsBoard.
- Laptop with Chrome/Firefox etc. browser and Ethernet cable to establish the connection between Gateway and Laptop.
- MQTT Basic credentials:
  - **Username**: sensor
  - **Password**: cimcon
  - **Client ID**: VIBit Device BLE MAC (Bluetooth MAC address of the sensor)


## Create Device profile on ThingsBoard

First, create a new device profile in ThingsBoard that uses the **MQTT transport** and the standard MQTT topics for telemetry and attributes.

- Log in to your ThingsBoard instance.
- Navigate to **Device profiles** page under the **Profiles** section.
- Click the "**plus**" button, and then select "**Add new device profile**" from drop-down menu.
- Enter **MQTT** as the device profile name.
- Click "**Next: Transport configuration**" button.
- Select **MQTT** as transport type.
- Leave default **MQTT device topic filters**.
- Click **Add** to create device profile.

{% assign createDeviceProfile = '
    ===
        image: /images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/vibit-create-profile-1.png,
        title: Navigate to **Device profiles** page under the **Profiles** section, click the "**plus**" button, and then select "**Add new device profile**" from drop-down menu.
    ===
        image: /images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/vibit-create-profile-2.png,
        title: Enter **MQTT** as the device profile name. Click "**Next: Transport configuration**" button.
    ===
        image: /images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/vibit-create-profile-3.png,
        title: Select **MQTT** as transport type. Leave default **MQTT device topic filters**. Click **Add** to create device profile.
    ===
        image: /images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/vibit-create-profile-4.png,
        title: The device profile is created.
'
%}

{% include images-gallery.liquid imageCollection=createDeviceProfile %}

## Create Device on ThingsBoard

- Navigate to **Devices** page under the **Entities** section.
- Click on "**+**" to add a new device, and then select "**Add new device**" from drop-down menu.
- Enter a name using the VIBit Sensor BLE MAC address (e.g., "F4B3B1A1EFAC").
- Select the previously created **MQTT** device profile in the "Device profile" field.
- Click **Next: Credentials** button.
- On the **Credentials** tab:
  - Select **MQTT Basic** as the credential type.
  - Use the **BLE MAC address of the VIBit device** as the **Client ID**.
  - Enter **sensor** as the **Username**.
  - Enter **cimcon** as the **Password**.
- Click **Add** button to create the device.

{% assign createDevice = '
    ===
        image: /images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/vibit-create-device-1.png,
        title: Navigate to **Devices** page under the **Entities** section. Click on "**+**" to add a new device, and then select "**Add new device**" from drop-down menu.
    ===
        image: /images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/vibit-create-device-2.png,
        title: Enter a name using the VIBit Sensor BLE MAC address (e.g., "F4B3B1A1EFAC"). Select the previously created **MQTT** device profile in the "Device profile" field. Click **Next: Credentials** button.
    ===
        image: /images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/vibit-create-device-3.png,
        title: On the **Credentials** tab:<br> - Select **MQTT Basic** as the credential type.<br> - Use the **BLE MAC address of the VIBit device** as the **Client ID**.<br> - Enter **sensor** as the **Username**.<br> - Enter **cimcon** as the **Password**.<br> - Click **Add** button to create the device.
    ===
        image: /images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/vibit-create-device-4.png,
        title: The device is created.
'
%}

{% include images-gallery.liquid imageCollection=createDevice %}

## Connect VIBit-BP Sensor with VIBit-BP BLE Gateway

To enable communication between the VIBit-BP sensor and the VIBit-BP BLE Gateway, follow the configuration process using the iEdge360 interface:

- Connect Laptop and BLE Gateway using Ethernet cable to establish the connection between Gateway and Laptop. Open the iEdge360 platform using default IP (IP: 192.168.1.100, Subnet: 255.255.255.0) and Login with the Credentials shared by the CIMCON Team and navigate to the **Device** tab.

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/7.png)

**Note**: Contact CIMCON Support team for the login Credentials.

<br>

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/8.png)

<br>

- Click the + icon to add a new device.

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/9.png)

<br>

- In the **Add Device** popup, select **VIBit_BP** as the protocol.

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/10.png)

<br>

- Enter a timeout value (e.g., 60 seconds) and click the check icon to scan for BLE devices.

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/11.png)

<br>

- The discovered VIBit-BP devices will appear in the Devices List along with their MAC addresses.
- Select the required device and click **Save** to register it.
- After device registration, click the **Edit** icon to configure its parameters:
  - Enter sampling rate in seconds.
  - Select the destination as Cloud Integration Name. (e.g., **CIM_Cloud**)
  - Open a UUID section and insert the Device ID, which was copied from ThingsBoard. (It's a device id exists on Thingbsoard) 

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/12.png)

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/13.png)

## Integrate BLE Gateway with ThingsBoard

- In iEdge360, go to the "**Integration** tab.

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/14.png)

- Click the "**+**" icon and select **CIM_Cloud** as the transport.

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/15.png)

- Provide a name (e.g., Thingsboard) and click **Save**.
- In the newly created CIM_Cloud transport, enter:
  - MQTT Port (e.g., 1883)
  - Endpoint (e.g., ThingsBoard IP)
  - Auth type: MQTT Basic or MQTT X.509 (Select MQTT Basic or MQTT X.509 based on the device created in Thingsboard)
  - **Client ID** (match with BLE MAC)
  - **User**: sensor
  - **Password**: cimcon

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/16.png)

- Configure incoming and outgoing messages:
  - Incoming: Topic v1/devices/me/attribute, Type Attribute
  - Outgoing: Topic v1/devices/me/telemetry (for Data), v1/devices/me/attribute (for Attribute)

This completes the setup to stream sensor data securely from the BLE gateway to ThingsBoard.

## Check Data on ThingsBoard

- In ThingsBoard, navigate to the "**Devices**" section and select your VIBit-BP device.
- Access the "**Latest telemetry**" tab and Wake-up the VIBit-BP Sensor using Magnet for quick view or wait for the configured telemetry frequency to view real-time data such as:
  - 3-axis acceleration and velocity RMS
  - 3-axis acceleration and velocity FFT
  - Temperature readings

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit-bp/17.png)

{% capture difference %}
Use the [Dashboard](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} to visualize data trends and analyze equipment health over time.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Conclusion

Integrating VIBit-BP with ThingsBoard using MQTT authentication offers a wireless, battery-powered solution for monitoring equipment health, enabling predictive maintenance without the constraints of wiring or external power sources. The seamless data transmission and visualization capabilities enhance operational efficiency and equipment reliability.
{% include add-device-banner.liquid %}
