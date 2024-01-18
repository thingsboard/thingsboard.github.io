1. Ensure the Wireless network connection is Enabled. Go to **Start** — **Control Panel** — **Network and Internet** — **Network and Sharing Center**. Click on the **Change adapter settings** in the left panel, then right-click on **Wireless Network Adapter**, and select **Enable**;
2. Check if IP and DNS are obtained automatically. Right-click on **Wireless Network Adapter** and select **Properties**. Then select **Internet Protocol Version 4** and click **Properties**;
3. If not selected, check to obtain an IP address and obtain DNS server address automatically. Click **OK**;
4. Connect to a wireless network by right-clicking on **Wireless Network Adapter** and selecting **Connect**;
5. Choose the wireless network <b>RUT955******</b> from the list and click **Connect**. Enter the WiFi password located on the device's label;
6. To enter the router's Web interface (WebUI), type http://192.168.1.1 into the URL field of your Internet browser;
7. When prompted for authentication, enter the username admin and enter the password located on the device information label/engraving;
8. After logging in, you must set a new password for security reasons. You will not be able to interact with the router’s WebUI until the default password is changed;
9. Next, the Configuration Wizard will help you set up some of the router's main operational parameters.

{% assign wirelessConnection = '
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/wireless-connection-1.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/wireless-connection-2.png,
	===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/wireless-connection-3.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/wireless-connection-4.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/wireless-connection-5.png,
'
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=wirelessConnection %}
