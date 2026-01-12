{% assign deviceName = "VIBit" %}
{% assign deviceVendorLink = "https://machineastro.com/vibit/" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign officialManualLink = "/docs/devices-library/resources/manuals/vibit.pdf" %}
{% assign prerequisites = '
- [Sensor user guide](' | append: officialManualLink | append: '){: target="_blank"}
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
  '
  %}

## Introduction

[VIBit]({{deviceVendorLink}}){:target="_blank"} is a compact, rugged, tri-axial vibration, temperature, and acoustic sensor designed for industrial anomaly detection. It supports Wi-Fi connectivity and integrates seamlessly with the MachineAstro VIBit Application for configuration and monitoring.<br><br><br><br><br>

## Prerequisites

To continue with this guide, we will need the following:  
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}
{{ prerequisites }}
- MachineAstro VIBit Application installed on a smartphone.
- Wi-Fi network credentials for sensor connectivity.
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

## Connect device to ThingsBoard via VIBit Mobile Application

### Prerequisites

- A user must be present on Thingsboard platform.
- VIBit Device must be present on Thingsboard platform.
<br>

- Power on the VIBit sensor.
- Open the VIBit Mobile Application on your smartphone.
- The VIBit mobile application can connect to any ThingsBoard platform by selecting the "**Custom**" option from the drop-down menu and entering either the static public IP address or the HTTPS domain name. Below is one sample image.

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit/vibit-mobile-app-1.png)

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit/vibit-mobile-app-2.png)

- Go to Connect Section on the application. It will display list of VIBit sensors available in the Bluetooth Range.

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit/vibit-mobile-app-3.png)

- Search the respective device and click on the **Connect** button. (Assuming that Device is already exists on the Thingsboard.)

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit/vibit-mobile-app-4.png)

- Configure the sensor&#39;s Wi-Fi settings using the app:
  - Enter the Wi-Fi SSID and password.
  - Input the ThingsBoard server URL.
  - Enter the MQTT **Username** as sensor, **Password** as cimcon, and **Client ID** as the BLE MAC address.
  - Save the settings to apply the configurations.

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit/vibit-mobile-app-5.png)

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit/vibit-mobile-app-6.png)

- Check Cloud and Wi-Fi Connectivity Status in the Mobile Application.

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit/vibit-mobile-app-7.png)

### Check Data on ThingsBoard

- In ThingsBoard, navigate to the "**Devices**" section and select your VIBit device.
- Access the "**Latest telemetry**" tab to view real-time data such as:
  - 3-axis acceleration and velocity RMS
  - FFT Timeseries Data
  - Temperature and acoustic readings

![image](/images/devices-library/ready-to-go-devices/machine-astro/vibit/vibit-mobile-app-8.png)

{% capture difference %}
Use the [Dashboard](/docs/{{docsPrefix}}user-guide/dashboards/){:target="_blank"} to visualize data trends and analyze equipment health over time.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Conclusion

Integrating VIBit with ThingsBoard using MQTT Basic authentication ensures secure and efficient monitoring of industrial equipment, facilitating predictive maintenance and reducing downtime. The combination of real-time data transmission and comprehensive dashboards empowers maintenance teams to make informed decisions.
{% include add-device-banner.liquid %}