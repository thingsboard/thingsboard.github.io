Your PC must be on the same network as the Gateway: 192.168.1.XXX. If it’s not the case, change the IP address of your 
PC. Don’t use an IP address already taken by a device of your network!

1. Go to **“Control Panel”** → **“Network and Internet”** → **“Network and Sharing Center”**, then click **“Ethernet”** (May have different names);
2. Go to **“Properties”** → **“Internet Protocol Version 4(TCP/IPv4)”** and select **“Use the following IP address”**, then assign a static IP manually within the same subnet of the gateway;
3. With your bowser, go to the web interface by enter its IP address: 192.168.1.1.
4. To enter the router's Web interface (WebUI), type http://192.168.1.1 into the URL field of your Internet browser.
5. When prompted for authentication enter the username admin and enter the password located on the device information label/engraving.
6. After logging in, you must set a new password for security reasons. You will not be able to interact with the router’s WebUI until the default password is changed.
7. Next, the Configuration Wizard will start to help you set up some of the router's main operational parameters.

{% assign wiredConnection = '
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/wired-connection-1.png,
    ===
        image: /images/devices-library/ready-to-go-devices/teltonika-rut955/wireless-connection-5.png,
'
%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=wiredConnection %}
