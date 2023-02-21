
Install the board for Arduino IDE: 
Go to **File** > **Preferences** and add the following URL to the Additional Boards Manager URLs field.  

```bash 
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```
{:.copy-code}

Next steps:  

{% assign esp32ArduinoInstallation='
    ===
        image: /images/devices-library/basic/microcontrollers/esp32-arduino-ide-board-manager.png,
        title: Go to <b>Tools</b> > <b>Board</b> > <b>Board Manager</b> and install the <b><i>ESP32 by Espressif Systems</i></b> board.
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=esp32ArduinoInstallation %}

After the installation is complete, select the board by Board menu:  
**Tools** > **Board** > {{ arduinoBoardPath }}.  
