---
layout: docwithnav
title: ESP32 OTA using ThingsBoard
description: ThingsBoard IoT Platform sample for ESP32 OTA update using ThingsBoard
hidetoc: "true"
---

* TOC
{:toc}

## Introduction
{% include templates/what-is-thingsboard.md %}
[ESP32](https://www.espressif.com/en/products/hardware/esp32/overview) is a series of low-cost, low-power SOC microcontrollers with integrated self-contained Wi-Fi and dual-mode Bluetooth.
This sample application allow you to deliver a new firmware images to EPS32 with using ThingsBoard and OTA.

## Video tutorial

See video tutorial below for this sample with additional detailed demonstration how to install and configure [ESP-IDF](https://github.com/espressif/esp-idf) for Windows.

<br>
<div id="video">
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/nx44dS_Syqk" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## What you need
- Installed and configured [ESP-IDF](https://github.com/espressif/esp-idf), the official development framework for ESP32 chip.
  Refer to [ESP-IDF Get Started](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/) document to set up the software environment.
  Before continuing, please make sure that you can successfully build and flash some example from ESP-IDF, for instance [Hello World](https://github.com/espressif/esp-idf/tree/master/examples/get-started/hello_world).
  For the sample ESP-IDF version ***v3.3-beta1-328-gabea9e4c0*** was used.
  In case of any build errors see [ESP-IDF Versions](https://docs.espressif.com/projects/esp-idf/en/latest/versions.html#esp-idf-versions) document to update the version of the installed EPS-IDF.
- Any development board with ESP32-PICO-D4 chip.
  For this sample we were using [ESP32-PICO-KIT mini development board](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/get-started-pico-kit.html#overview)
    <img src="/images/samples/esp32/ota/esp32_board.png" width="400" alt="esp32 board">
- Account in ThingsBoard application. You can use your own instance or [ThingsBoard Cloud](https://thingsboard.cloud)
  We need to say that this sample works well with both CE and PE, but we use PE cloud since it has more features and in the next sample we will show how to do mass firmware updates for multiple devices simultaneously.

## ThingsBoard configuration
1. Create a new device, name it as *ESP32* and set it's type as *ESP32_OTA*.
The specified device type will be used later in the rule chains and in the dashboard.

    <img src="/images/samples/esp32/ota/tb_create_device.png" width="600" alt="create device">

2. Add the new rule chain that will update the device's server attribute *fwStateIsSynced*.
The attribute type is boolean and it will be used to show on the dashboard is firmware synced or not.
Download, import [Check is ESP32 firmware synced](/docs/samples/esp32/resources/check_is_esp32_firmware_synced.json) rule chain into ThingsBoard and save it:

    <img data-gifffer="/images/samples/esp32/ota/import_rule_chain.gif" width="1000" alt="import rule chain">

    The rule chain has 3 nodes:
    - *Add attributes to metadata* - adds client attribute *currentFwVer* and server attribute *lastTargetFwVer* to metadata
    - *Update server attribute 'fwStateIsSynced'* - compares for the equality attributes *currentFwVer* and *lastTargetFwVer* and assign the comparison result to *fwStateIsSynced* attribute
    - *Save 'fwStateIsSynced' attribute* - saves the updated attribute *fwStateIsSynced*

3. Add the imported rule chain *Check is ESP32 firmware synced* to *Root Rule Chain*. Open *Root Rule Chain*, drag and drop from nodes list *rule chain* node and select *Check is ESP32 firmware synced* from dropdown list.
To the added node should be connected two links:
    - From *Message Type Switch* with link type *Attributes Updated*
    - From *Save Attributes* with link type *Success*

    <img data-gifffer="/images/samples/esp32/ota/tb_extend_root_rule_chain.gif" width="1000" alt="extend root rule chain">

    Such rule configuration allows to compare received firmware version after it was updated in the next cases:
    - After flashing ESP32 by a new firmware through OTA.
    The new value of firmware version is sent by ESP32 after restarting (as client attribute *currentFwVer*) and pass through *Post attributes* link in the rule chain.
    - After the user save the new OTA configuration in the widget.
    The new value of firmware version passes through *Attributes Updated* link in the rule chain as server attribute *lastTargetFwVer*.

4. Download and import [OTA widgets (ThingsBoard v3.x)](/docs/samples/esp32/resources/ota_widgets_v2.json) or [OTA widgets (ThingsBoard v2.x)](/docs/samples/esp32/resources/ota_widgets.json) widgets group to Widgets Library to allow specifying of firmware URL and version and send OTA configuration to ESP32.
5. Download and import [OTA for ESP32 (ThingsBoard v3.x)](/docs/samples/esp32/resources/ota_for_esp32_v2.json) or [OTA for ESP32 (ThingsBoard v2.x)](/docs/samples/esp32/resources/ota_for_esp32.json) dashboard to Dashboards Group. The dashboard has the alias *ESP32_OTA_alias* for the devices with type *ESP32_OTA*.
It allows to show on the dashboard a list of ESP32 with OTA support and the current firmware state (synced or not synced) for every device in the list.
User can change and update OTA config of any ESP32 form the list by clicking 'Select OTA configuration' control in the last column.

    <img src="/images/samples/esp32/ota/tb_dashboard_main_state.png" width="600" alt="dashboard main state">

    Because of only one device with type *EPS32_OTA* was created, the table contain only one row. If a new device with type *ESP32_OTA* is added, then it will appear in the dashboard's entity table automatically.

## Configure and flash firmware for ESP32 factory partition
1. Clone the sample's sources from [ESP32 OTA](https://github.com/thingsboard/esp32-ota) ThingsBoard repository.
2. Go to the directory with the cloned project and configure MQTT broker address, Wi-Fi credentials, etc.
Open the terminal and execute next command:
    ```bash
    make menuconfig
    ```
    In the opened menu select *ThingsBoard OTA configuration* sub-menu and enter the valid parameters to the fields:
    -  *WiFi SSID* - login of your WiFi access point
    -  *WiFi Password* - password of your WiFi access point
    -  *MQTT broker URL* - ThingsBoard MQTT endpoint
    -  *MQTT broker port* - ThingsBoard MQTT port
    -  *MQTT access token* - device's access token in ThingsBoard

    <img src="/images/samples/esp32/ota/framework_config.png" width="600" alt="framework config">

    Save the configuration and select *Exit* to return to the main menu.
3. Select *Serial flasher config* sub-menu and change *Default serial port*, *Default baud rate* and *Flash Size* parameters:
    - *Default serial port* - serial port name according to your OS (COM-type for Windows, /dev/cu/ for MacOS or /dev/tty/ for Linux)
    - *Default baud rate* - 921600 baud (by default *111500 baud*)
    - *Flash Size* - 4 MB (by default *1 MB*)

    <img src="/images/samples/esp32/ota/serial_flasher_config.png" width="600" alt="serial flasher config">

    Save the configuration and select *Exit* to return to the main menu.
4. Select *Partition table* sub-menu and change *Partition table* parameter:
    - *Partition table* - Factory app, two OTA definitions (by default *Single factory app, no OTA*)

    <img src="/images/samples/esp32/ota/partition_table.png" width="600" alt="partition table">

    Save the configuration and select *Exit* twice to exit from *menuconfig* utility.
5. Any web server that supports HTTPS and returns the image files can be used for OTA. For this sample we will use the GitHub repository to download the images by ESP32 for OTA update. *[ca_cert.pem](https://raw.githubusercontent.com/thingsboard/esp32-ota/master/server_certs/ca_cert.pem)* file contains GitHub public certificate already.

    **OPTIONAL**
    If you are going to use some another server for the firmware images delivering, then content of *[ca_cert.pem](https://raw.githubusercontent.com/thingsboard/esp32-ota/master/server_certs/ca_cert.pem)* file should be replaced.
    To get public SSL certificate of a server, execute the next command (preliminary replace *raw.githubusercontent.com* by the desired server address)
    ```bash
    openssl s_client -showcerts -connect raw.githubusercontent.com:443
    ```
    Copy a certificate content from the output to *[ca_cert.pem](https://raw.githubusercontent.com/thingsboard/esp32-ota/master/server_certs/ca_cert.pem)* and save the file.
6. Now the project is configured and ready for compilation and flashing. Before the first flashing it is necessary to erase ESP32 flash memory.
Go to the [root sample directory](https://github.com/thingsboard/esp32-ota) and execute the next command
    ```bash
    make erase_flash
    ```
    Execute the next command to build sources, flash ESP32 and get the firmware output:
    ```bash
    make flash monitor
    ```
    If compilation and flashing were successful and ESP32 connected to ThingsBoard, the next log messages are printed:

    <img src="/images/samples/esp32/ota/monitor_output_after_flashing.png" width="600" alt="monitor output after flashing">

    Let's look at a log message format, for example *I (5219) tb_ota: Connected to WI-FI, IP address: 192.168.2.45*
    - *I* - info log type, can be W (warning), E (error) or D (debug)
    - *(5219)* - time in milliseconds after the scheduler on APP CPU started
    - *tb_ota:* - tag to identify a component that produced the log message
    - *Connected to ...* - the log message itself

    The application's flow is the next:
    1. The firmware is flashing to the *factory* partition. In the future, the images received during OTA process will be written to partition *ota_0* or *ota_1* alternately.
    See more details in [Over The Air Updates (OTA)](https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/system/ota.html) ESP32 API reference.
    2. The application checks does the flash memory contain the Wi-Fi credentials.
    Because the compiled image was flashed to the *factory* partition and the flash memory was erased, the Wi-Fi credential entered in *menuconfig* are persisted to the flash memory and will be used further.
    3. The application is trying to connect to the provided Wi-Fi access point.
    4. After the connection to Wi-Fi access point was established, the application checks does the flash memory contain MQTT URL, port and ThingsBoard access token.
    Because the application was flashed to the *factory* partition and the flash memory was erased, MQTT client parameters (URL, port and access token) entered in *menuconfig* are persisted to the flash memory and will be used further.
    5. The application is trying to connect to ThingsBoard over MQTT.
    6. After the connection was established, the application fetching shared attributes *targetFwUrl* and *targetFwVer* from ThingsBoard.
    It allows to cover the case when EPS32 was powered off or lose the connection with ThingsBoard but the shared attributes were update that time.
    OTA started only if the shared attributes values aren't empty and *targetFwVer* isn't equal to the hardcoded application's firmware version.
    Because any shared attributes were not created in ThingsBoard yet (they will be created through the widget later), for now OTA procedure is skipped.
    7. The application started to execute a custom task (for example send some telemetry or attributes data to ThingsBoard) and waits for the update of the shared attributes *targetFwUrl* and *targetFwVer* to perform OTA.

## Performing OTA from ThingsBoard
Go to the *OTA for ESP32* dashboard and press *Select OTA configuration* for the device. In opened dashboard enter the next parameters in *OTA control* widget:
  - *Target firmware version* - expected firmware version which is hardcoded in the new firmware image, *v1.2*
  - *Firmware server URL* - link to the new firmware image, *https://raw.githubusercontent.com/thingsboard/esp32-ota/master/firmware/example-v1.2.bin*

Press *Start OTA* button to create and send the chared attributes to EPS32.

<img data-gifffer="/images/samples/esp32/ota/tb_successful_ota_from_dashboard.gif" width="1000" alt="successful ota from dashboard">

The sample's [firmware](https://github.com/thingsboard/esp32-ota/tree/master/firmware/) directory contains two images with the next differences:
  - [example-v1.1.bin](https://raw.githubusercontent.com/thingsboard/esp32-ota/master/firmware/example-v1.1.bin) - value of *FIRMWARE_VERSION* in [main.h](https://github.com/thingsboard/esp32-ota/blob/master/main/main.h) equals to *v1.1*.
  *counter* variable in [main_application_task](https://github.com/thingsboard/esp32-ota/blob/master/main/main.c) has value *1*.
  - [example-v1.2.bin](https://raw.githubusercontent.com/thingsboard/esp32-ota/master/firmware/example-v1.2.bin) - value of *FIRMWARE_VERSION* in [main.h](https://github.com/thingsboard/esp32-ota/blob/master/main/main.h) equals to *v1.2*.
  *counter* variable in [main_application_task](https://github.com/thingsboard/esp32-ota/blob/master/main/main.c) has value *2*.

After the firmware version and URL were updated on the *OTA control* widget, ThingsBoard sends a MQTT message with the shared attributes to *v1/devices/me/attributes* MQTT topic.
Because of the ESP32 is subscribed to this MQTT topic, as soon as the update message is received it is parsed and the firmware versions are compared.
If the value of *FIRMWARE_VERSION* defined in [main.h](https://github.com/thingsboard/esp32-ota/blob/master/main/main.h) isn't equal to the firmware version received from ThingsBoard, OTA update process will started and *monitor* utility outputs the next logs:

  <img src="/images/samples/esp32/ota/shared_attributes_updated.png" width="600" alt="shared attributes updated">

The application's flow is the next:
  - shows the received URL and firmware version
  - shows the warning that firmware versions are different and the difference between them
  - if a server's certificate is valid and an image was downloaded successfully from the provided URL then OTA process starts (*Starting OTA...* message is printed)
  - during OTA process all other tasks could be executed with some delays.
    For example, the application sends a telemetry data (in this sample it is the current value of *counter* variable) to ThingsBoard with not determined period.
    If OTA process was finished successfully, ESP32 will be rebooted and after the start the next logs will be shown:

  <img src="/images/samples/esp32/ota/ota_finished_successfully.png" width="600" alt="ota finished successfully">

Let's review the logs differences in comparison when the firmware was flashed to *factory* partition:
  - running partition now is *ota_0*, not *factory*
  - Wi-Fi credentials were loaded from the flash memory, the credentials entered in *menuconfig* utility weren't used
  - MQTT access token for ThingsBoard also was loaded from the flash memory
  - after the shared attributes were fetched, the new OTA process isn't started because firmware versions are equal
  - the application is waiting for the next update of the shared attributes and a new downloaded image will be written to *ota_1* partition this time.

Now, just for testing, you can update *OTA control* widget with next values:
  - *Target firmware version* - v1.1
  - *Firmware server URL* - https://raw.githubusercontent.com/thingsboard/esp32-ota/master/firmware/example-v1.1.bin

After this OTA update *counter* periodically changes its value to 0 or to 1, in the same manner as and after flashing the image to *factory* partition. But the difference this time is that the image was flashed to *ota_1* partition.

## See also

Browse other [samples](/docs/samples) or explore guides related to main ThingsBoard features:

 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.
 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.

Don't hesitate to star ThingsBoard on **[github](https://github.com/thingsboard/thingsboard)** to help us spread the word.
If you have any questions about this sample - post it on the **[issues](https://github.com/thingsboard/esp32-ota/issues)**.

{% include socials.html %}

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}
