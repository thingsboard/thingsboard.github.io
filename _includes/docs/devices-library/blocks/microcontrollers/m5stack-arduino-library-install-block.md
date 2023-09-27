
Install the board for Arduino IDE:
Go to **File** > **Preferences** and add the following URL to the **Additional Boards Manager URLs** field.  

```bash 
https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/arduino/package_m5stack_index.json
```
{:.copy-code}

Next, go to **Tools** > **Board** > **Board Manager** and install the ***M5Stack by M5Stack Official*** board.  

![M5Stack Arduino IDE installation](/images/devices-library/basic/microcontrollers/m5stack-arduino-ide-board-manager.png)

After the installation is complete, select the board by Board menu:  
**Tools** > **Board** > {{ arduinoBoardPath }}.    

Also, do not forget to specify the port for the device:

**Tools** > **Port** > **/dev/ttyUSB0**.

Port depends on operation system and may be different:
- for Linux it will be **/dev/ttyUSB**X
- for MacOS it will be **usb.serial**X.. or **usb.modem**X..
- for Windows - **COM**X.  
