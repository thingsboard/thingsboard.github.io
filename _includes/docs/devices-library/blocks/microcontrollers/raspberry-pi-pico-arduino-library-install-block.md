
Install the board for Arduino IDE: 

{% assign raspberryPiPicoInstallation = '
    ===
        image: /images/devices-library/basic/microcontrollers/raspberry-pi-pico-w-arduino-ide-board-manager.png,
        title: Go to <b>Tools</b> > <b>Board</b> > <b>Board Manager</b> and install the <b><i>Raspberry Pi Pico/RP2040 by Earle F. Philhower</i></b> board.
'
%}

Install the board for Arduino IDE:

Go to File > Preferences and add the following URL to the Additional Boards Manager URLs field.  

```bash
https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
```
{:.copy-code}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=raspberryPiPicoInstallation %}

After the installation is complete, select the board by Board menu:  
**Tools** > **Board** > {{ arduinoBoardPath }}.  

Connect the device to computer using USB cable and select the port for the device:  

**Tools** > **Port** > **/dev/ttyUSB0**.  

Port depends on operation system and may be different:  
- for Linux it will be **/dev/ttyUSB**X  
- for MacOS it will be **usb.serial**X.. or **usb.modem**X..  
- for Windows - **COM**X.  

{% assign wifininaInstallationRequired = "true" %}
