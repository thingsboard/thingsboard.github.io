
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

{% include images-gallery.liquid showListImageTitles="true" imageCollection=raspberryPiPicoInstallation %}

After the installation is complete, select the board by Board menu:  
**Tools** > **Board** > {{ arduinoBoardPath }}.  

{% assign wifininaInstallationRequired = "true" %}
