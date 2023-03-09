
Install the board for Arduino IDE: 
Go to **File** > **Preferences** and add the following URL to the Additional Boards Manager URLs field.  

```bash 
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```
{:.copy-code}

{% assign esp32ArduinoPreferences='
    ===
        image: /images/devices-library/basic/arduino-ide/preferences.png
'%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=esp32ArduinoPreferences %}

Then go to <b>Tools</b> > <b>Board</b> > <b>Board Manager</b> and install the <b><i>ESP32 by Espressif Systems</i></b> board.

{% assign esp32ArduinoInstallation='
    ===
        image: /images/devices-library/basic/microcontrollers/esp32-arduino-ide-board-manager.png
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=esp32ArduinoInstallation %}

After the installation is complete, select the board by Board menu:  
**Tools** > **Board** > {{ arduinoBoardPath }}.  

Also, do not forget to specify the port for the device:

**Tools** > **Port** > **/dev/ttyUSB0**. 