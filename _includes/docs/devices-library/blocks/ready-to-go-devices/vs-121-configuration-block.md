### Device configuration

To connect and send data we should configure the device and network server.
Firstly, we are going to configure the device, and save required information for network server configuration.
To add a device to network server and get information from it, we will need the following device parameters:

- **Device EUI** - device identifier
- **Application EUI** - Application identifier
- **Application Key** - Application key to identify device. We recommend to use a generated key, not from the example!

Depending on the network server, you may also need to provide join type (OTAA), LoRaWAN version.

VS121 sensor provides user-friendly web GUI for configuration and users can access it via Wi-Fi connection. Default SSID device: Workplace Sensor.

Follow the steps below:
1. Power on the device over Type-C Power Port;
2. Enable the Wireless Network Connection on your computer and the corresponding access point, then connect computer to this access point;
3. Open the Browser and type 192.168.1.1 to access the web GUI (you must be in the one subnetwork);
4. Users need to set the password when using the device for the first time. Additionally three security questions can also be set optionally;
5. After configuration, use username (admin) and custom password to log in to the sensor.

{% assign milesightLogin = '
    ===
        image: /images/devices-library/ready-to-go-devices/vs121-device/milesight-login.png,
        title: Use username (admin) and custom password to log in to the sensor web GUI.
'
%}

{% include images-gallery.liquid imageCollection=milesightLogin %}

To obtain the necessary parameters, follow these steps:
- Go to the **IoT** page in the left panel and navigate to the **LoRa** tab;
- Make a note of **Device EUI** and **App EUI**;
- Generate and enter a new password in hexadecimal format in the **Application Key** field and note it;
- Scroll down and click on the **Save** button.

{% assign milesightInterface = '
    ===
        image: /images/devices-library/ready-to-go-devices/vs121-device/milesight-interface-1.png,
        title: Go to the **IoT** page in the left panel and navigate to the **LoRa** tab. Make a note of **Device EUI** and **App EUI**. Generate and enter a new password in hexadecimal format in the **Application Key** field and note it;
    ===
        image: /images/devices-library/ready-to-go-devices/vs121-device/milesight-interface-2.png,
        title: Scroll down and click on the **Save** button.
'
%}

{% include images-gallery.liquid imageCollection=milesightInterface %}

The parameters above are required for connection.