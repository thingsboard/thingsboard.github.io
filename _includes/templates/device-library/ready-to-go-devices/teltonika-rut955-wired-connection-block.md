Your PC must be on the same network as the Gateway: 192.168.1.XXX. If that's not the case, change the IP address of your 
PC.

{% capture infoWired %}
<body>
  <p>
    <b style="color:red">WARNING:</b>
    <span style="color:black">Don’t use an IP address already taken by a device on your network!</span>
  </p>
</body>
{% endcapture %}
{% include templates/warn-banner.md content=infoWired %}

**For Windows:**
1. Go to **“Control Panel”** → **“Network and Internet”** → **“Network and Sharing Center”**, then click **“Ethernet”** (May have different names);
2. Navigate to **“Properties”** → **“Internet Protocol Version 4(TCP/IPv4)”** and select **“Use the following IP address”**, then assign a static IP manually within the same subnet of the gateway;
3. Go to the web interface with your browser by entering its IP address: 192.168.1.1;
4. To enter the router's Web interface (WebUI), type **http://192.168.1.1** into the URL field of your Internet browser;
5. When prompted for authentication, enter the username admin and enter the password located on the device information label/engraving;
6. After logging in, you must set a new password for security reasons. You will not be able to interact with the router’s WebUI until the default password is changed;
7. Next, the Configuration Wizard will help you set up some of the router's main operational parameters.

![](/images/devices-library/ready-to-go-devices/teltonika-rut955/wired-connection-1.png)
<br><br>

**For macOS:**
1. Go to **“System Settings“** > **“Network“**, then click **“USB 10/100/1000 LAN”** (May have different names);
2. Navigate to **“Details...”** > **“TCP/IP“** and select **“Manually”**, then assign a static IP manually within the same subnet of the gateway;
3. Go to the web interface with your browser by entering its IP address: 192.168.1.1;
4. To enter the router's Web interface (WebUI), type **http://192.168.1.1** into the URL field of your Internet browser;
5. When prompted for authentication, enter the username admin and enter the password located on the device information label/engraving;
6. After logging in, you must set a new password for security reasons. You will not be able to interact with the router’s WebUI until the default password is changed;
7. Next, the Configuration Wizard will help you set up some of the router's main operational parameters.

![](/images/devices-library/ready-to-go-devices/ace-iot-gateway/ace-macos-ip.png)
<br><br>

**For Ubuntu Linux:**
1. Go to **“Settings“** > **“Network“**, then click **“Wired Settings”** (May have different names);
2. Navigate to **“IPv4”** and select **“Manually”**, then assign a static IP manually within the same subnet of the gateway;
3. Go to the web interface with your browser by entering its IP address: 192.168.1.1;
4. To enter the router's Web interface (WebUI), type **http://192.168.1.1** into the URL field of your Internet browser;
5. When prompted for authentication, enter the username admin and enter the password located on the device information label/engraving;
6. After logging in, you must set a new password for security reasons. You will not be able to interact with the router’s WebUI until the default password is changed;
7. Next, the Configuration Wizard will help you set up some of the router's main operational parameters.

![](/images/devices-library/ready-to-go-devices/ace-iot-gateway/ace-linux-ip.png)
<br><br>
