
{% assign installESP8266='
    ===
        image: /images/devices-library/basic/microcontrollers/esp8266-arduino-ide-board-manager.png,
        title: Put ESP8266 into search field and install esp8266 by Espressif Community.
' %}

Install the board for Arduino IDE:
Go to File > Preferences and add the following URL to the Additional Boards Manager URLs field.  

```bash 
http://arduino.esp8266.com/stable/package_esp8266com_index.json
```
{:.copy-code}

Next, go to **Tools** > **Board** > **Board Manager** and install the ***ESP8266*** board.  

{% include images-gallery.liquid showListImageTitles="true" imageCollection=installESP8266 %}

After the installation is complete, select the board by Board menu:  
**Tools** > **Board** > {{ arduinoBoardPath }}.  

{% assign mbedtlsInstallationRequired="true" %}