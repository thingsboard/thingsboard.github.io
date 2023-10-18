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
![NFC zone](/images/devices-library/ready-to-go-devices/ws101-smart-button/nfc-area.png)  
<br>

To read and write configuration on the device you may follow next steps on your smartphone:  
{% assign readWriteConfiguration = '
    ===
        image: /images/devices-library/ready-to-go-devices/ws101-smart-button/toolbox-application.png,
        title: Open **ToolBox** application.
    ===
        image: /images/devices-library/ready-to-go-devices/ws101-smart-button/toolbox-read-success.png,
        title: Click on **NFC Read** button and hold your smartphone near the device.
    ===
        image: /images/devices-library/ready-to-go-devices/ws101-smart-button/toolbox-configuration.png,
        title: Go to tab **Setting**, set and save required fields and any other configuration that you need.
    ===
        image: /images/devices-library/ready-to-go-devices/ws101-smart-button/toolbox-write-success.png,
        title: Press **Write** button and hold your smartphone near the device.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=readWriteConfiguration %}

If you have some issues with configuring the device and your smartphone in the case - it is recommended by vendor to try to configure the smartphone without case.  

Now, the device is able to send a data to the network server.  
