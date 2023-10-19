Your PC must be on the same network as the Gateway: 192.168.8.XXX. If that’s not the case, change the 
IP address of your PC.

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
1. Go to **“Control Panel”** > **“Network and Internet”** > **“Network and Sharing Center”**, then click **“Ethernet”** (May have different names);
2. Go to **“Properties”** > **“Internet Protocol Version 4(TCP/IPv4)”** and select **“Use the following IP address”**, then assign a static IP manually within the same subnet of the gateway;
3. Go to the **ACE-GTW-MQTT** web interface with your browser by entering its IP address: 192.168.8.1.
4. Enter the username and password.

![](/images/devices-library/ready-to-go-devices/ace-iot-gateway/wired-connection.png)
<br><br>

**For macOS:**
1. Go to **“System Settings“** > **“Network“**, then click **“USB 10/100/1000 LAN”** (May have different names);
2. Go to **“Details...”** > **“TCP/IP“** and select **“Manually”**, then assign a static IP manually within the same subnet of the gateway;
3. Go to the **ACE-GTW-MQTT** web interface with your browser by entering its IP address: 192.168.8.1.
4. Enter the username and password.

![](/images/devices-library/ready-to-go-devices/ace-iot-gateway/ace-macos-ip.png)
<br><br>

**For Ubuntu Linux**:
1. Go to **“Settings“** > **“Network“**, then click **“Wired Settings”** (May have different names);
2. Go to **“IPv4”** and select **“Manually”**, then assign a static IP manually within the same subnet of the gateway;
3. Go to the **ACE-GTW-MQTT** web interface with your browser by entering its IP address: 192.168.8.1.
4. Enter the username and password.

![](/images/devices-library/ready-to-go-devices/ace-iot-gateway/ace-linux-ip.png)
<br><br>
