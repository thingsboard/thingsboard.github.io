### Device configuration

To connect and send data we should configure the device and network server.  
At first we are going to configure the device, and save required information for network server configuration.  
To add a device to network server and get information from it, we will need the following device parameters:
- **Device EUI** - device identifier
- **Application EUI** - Application identifier
- **Application Key** - Application key to identify device. We recommend to use a generated key, not from the example!

The parameters above are required for connection.

Depending on the network server, you may also need to provide join type (OTAA), LoRaWAN version.

To configure device via NFC, you will need to hold your smartphone like on the picture below:  

![NFC zone](/images/devices-library/ready-to-go-devices/am308/am308-connect.png)  
<br>

To read and write configuration on the device you may follow next steps on your smartphone:  
{% assign readWriteConfiguration = '
===
image: /images/devices-library/ready-to-go-devices/ws202-pir-and-light-sensor/toolbox-application.png,
title: Open **ToolBox** application.
===
image: /images/devices-library/ready-to-go-devices/ws202-pir-and-light-sensor/toolbox-read-success.png,
title: Click on **NFC Read** button and hold your smartphone near the device.
===
image: /images/devices-library/ready-to-go-devices/ws202-pir-and-light-sensor/toolbox-configuration.png,
title: Go to tab **Setting**, set and save required fields and any other configuration that you need.
===
image: /images/devices-library/ready-to-go-devices/ws202-pir-and-light-sensor/toolbox-write-success.png,
title: Press **Write** button and hold your smartphone near the device.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=readWriteConfiguration %}

The developer also provides the possibility of connecting through a computer if necessary:

![Device connect](/images/devices-library/ready-to-go-devices/am308/am308-connect-to-pc.png)

See the [manual](https://resource.milesight-iot.com/milesight/document/am300-series-user-guide-en.pdf){: target="_blank"} for details.