
{% assign raspberryPiPicoInstallation = '
    ===
        image: /images/devices-library/basic/microcontrollers/raspberry-pi-pico-w-arduino-ide-board-manager.png,
        title: Go to the **Tools** > **Board** > **Board Manager** and install the ***Raspberry Pi Pico/RP2040 by Earle F. Philhower*** board.
'
%}

{% assign esp32ArduinoPreferences='
    ===
        image: /images/devices-library/basic/arduino-ide/preferences.png
'%}

Install the board for Arduino IDE:

Go to **File** > **Preferences** and add the following URL to the **Additional Boards Manager URLs** field.  

```bash
https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
```
{:.copy-code}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=esp32ArduinoPreferences %}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=raspberryPiPicoInstallation %}

After the installation is complete, select the board by Board menu: **Tools** > **Board** > {{ arduinoBoardPath }}.  

Connect the device to computer using USB cable and select the port for the device: **Tools** > **Port** > **/dev/ttyUSB0**.  

Port depends on operation system and may be different:  
- for Linux it will be **/dev/ttyUSB**X  
- for MacOS it will be **usb.serial**X.. or **usb.modem**X..  
- for Windows - **COM**X.  

{% assign wifininaInstallationRequired = "true" %}
