
Install the board for Arduino IDE: 

{% assign raspberryPiPicoInstallation = '
    ===
        image: /images/devices-library/basic/microcontrollers/nano-connect-arduino-ide-board-manager.png
        title: Go to **Tools** > **Board** > **Board Manager** and install the ***Arduino Mbed OS RP2040 Boards by Arduino*** board.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=raspberryPiPicoInstallation %}

After the installation is complete, select the board by Board menu: **Tools** > **Board** > {{ arduinoBoardPath }}.  

Connect the device to computer using USB cable and select the port for the device: **Tools** > **Port** > **/dev/ttyUSB0**.  

Port depends on operation system and may be different:  
- for Linux it will be **/dev/ttyUSB**X  
- for MacOS it will be **usb.serial**X.. or **usb.modem**X..  
- for Windows - **COM**X.  

{% assign wifininaInstallationRequired = "true" %}
