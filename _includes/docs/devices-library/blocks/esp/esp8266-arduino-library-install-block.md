
{% assign installESP8266='
    ===
        image: /images/devices-library/basic/esp8266-arduino-ide-board-manager.png,
        title: Put <b>ESP8266<b> into search field and install <b><i>esp8266 by Espressif Community</i></b>.
' %}

Install the board for Arduino IDE:
Go to File > Preferences and add the following URL to the Additional Boards Manager URLs field.  

```bash 
http://arduino.esp8266.com/stable/package_esp8266com_index.json
```
{:.copy-code}

Next, go to **Tools** > **Board** > **Board Manager** and install the ***ESP8266*** board.  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=installESP8266 %}

After the installation is complete, select the board from the **Tools** > **Board menu**.  

{% assign mbedtlsInstallationRequired="true" %}