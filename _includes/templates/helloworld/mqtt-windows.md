Use the instructions listed below to download, install, setup and run mosquitto_pub in Windows:

1. Download and Install Eclipse Mosquitto. Visit [Mosquitto's official download page](https://mosquitto.org/download/) and choose the appropriate Windows installer (32-bit or 64-bit depending on your system).
2. Once downloaded, run the installer and follow the instructions. This will install Mosquitto on your Windows machine. By default, Mosquitto is installed in 'C:\Program Files\mosquitto';
3. Update the System's "Path" variable. The executables 'mosquitto_pub.exe' and 'mosquitto_sub.exe' are located in the directory where you installed the Mosquitto. You need to add this directory to your system's "Path" environment variable so that Windows can find these executables regardless of the current directory.

To add the Mosquitto directory to the "Path" variable, follow these steps:

{% include images-gallery.html imageCollection="mosquitto-windows" showListImageTitles="true" %}

Open the Terminal and replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.

```bash
mosquitto_pub -d -q 1 -h "$THINGSBOARD_HOST_NAME" -p "1883" -t "v1/devices/me/telemetry" -u "$ACCESS_TOKEN" -m {"temperature":25}
```
{: .copy-code}

For example, $THINGSBOARD_HOST_NAME reference live demo server, $ACCESS_TOKEN is ABC123:

```bash
mosquitto_pub -d -q 1 -h "demo.thingsboard.io" -p "1883" -t "v1/devices/me/telemetry" -u "ABC123" -m {"temperature":25}
```
{: .copy-code}

For example, $THINGSBOARD_HOST_NAME reference your local installation, $ACCESS_TOKEN is ABC123:

```bash
mosquitto_pub -d -q 1 -h "localhost" -p "1883" -t "v1/devices/me/telemetry" -u "ABC123" -m {"temperature":25}
```
{: .copy-code}

Successful output should look similar to this one:

```text
Client mosqpub|xxx sending CONNECT
Client mosqpub|xxx received CONNACK
Client mosqpub|xxx sending PUBLISH (d0, q1, r0, m1, 'v1/devices/me/telemetry', ... (16 bytes))
Client mosqpub|xxx received PUBACK (Mid: 1)
Client mosqpub|xxx sending DISCONNECT
```

{% capture difference %}
**Note:** Since ThingsBoard 3.2, you are able to use basic MQTT credentials (combination of client id, username and password)
and customize **topic names** and **payload type** using Device Profile. See more info [here](/docs/user-guide/device-profiles/#mqtt-transport-type).
{% endcapture %}
{% include templates/info-banner.md content=difference %}