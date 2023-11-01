1. Go to **Network** > **Wireless**, click on **"Scan"** button;
2. Select a network you want to join;
3. Enter the passphrase/password if exists;
4. Let the name of the new network (wwan);
5. Click on **"Save & Apply"** button on the **“Device Configuration”** page;
6. Click on **"Save & Apply"** button on the **“Interface Configuration”** page;
7. Check your new IP address on WWAN:
   - In **Network** > **Interfaces** check the new IP address on WWAN interface.
8. To check your connection to Internet:
   - Go to **Network** > **Diagnostics** and ping the “openwrt.org” server on the Internet. As above (Via its WAN RJ45 port 
            connected to your network).
9. With your browser, go to the **ACE-GTW-MQTT** web interface by entering its IP address: 192.168.8.1;
10. Enter the username(Default: **root**) and password(Default: **root**), and click Login.

{% assign wirelessConnection = '
    ===
        image: /images/devices-library/ready-to-go-devices/ace-iot-gateway/wireless-connection-1.png,
    ===
        image: /images/devices-library/ready-to-go-devices/ace-iot-gateway/wireless-connection-2.png,
	===
        image: /images/devices-library/ready-to-go-devices/ace-iot-gateway/wireless-connection-3.png,
    ===
        image: /images/devices-library/ready-to-go-devices/ace-iot-gateway/wireless-connection-4.png,
    ===
        image: /images/devices-library/ready-to-go-devices/ace-iot-gateway/wireless-connection-5.png,
    ===
        image: /images/devices-library/ready-to-go-devices/ace-iot-gateway/wireless-connection-6.png,
'
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=wirelessConnection %}
