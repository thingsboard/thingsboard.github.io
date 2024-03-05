
Install the board for Arduino IDE: 

Go to **File** > **Preferences** and add the following URL to the **Additional Boards Manager URLs** field.  

```bash 
https://dl.espressif.com/dl/package_esp32_index.json
```
{:.copy-code}

{% assign esp32ArduinoPreferences='
    ===
        image: /images/devices-library/basic/arduino-ide/preferences.png
'%}

{% include images-gallery.liquid showListImageTitles="false" imageCollection=esp32ArduinoPreferences %}

Then go to **Tools** > **Board** > **Board Manager** and install the ***ESP32 by Espressif Systems*** board.

{% assign esp32ArduinoInstallation='
    ===
        image: /images/devices-library/basic/microcontrollers/esp32-arduino-ide-board-manager.png
'%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=esp32ArduinoInstallation %}

After the installation is complete, select the board by Board menu: **Tools** > **Board** > {{ arduinoBoardPath }}.  

Connect the device to computer using USB cable and select the port for the device: **Tools** > **Port** > **/dev/ttyUSB0**.

Port depends on operation system and may be different:
- for Linux it will be **/dev/ttyUSB**X
- for MacOS it will be **usb.serial**X.. or **usb.modem**X..
- for Windows - **COM**X.

Where X - some number, that was assigned by your system.  
