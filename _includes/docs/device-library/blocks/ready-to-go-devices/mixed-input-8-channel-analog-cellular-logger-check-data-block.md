
At this point the MI-8 should be configured and ready to communicate with ThingsBoard.  
To check the incoming data you can do the following steps:  

- Open ThingsBoard and then navigate to Device Groups and then <b>All</b>.  
- Click on the device that was just associated with the MI-8 and then navigate to the <b>Latest Telemetry</b> tab.  

![](https://img.thingsboard.io/devices-library/ready-to-go-devices/mixed-input-8-channel-analog-cellular-logger/open-device-timeseries.png)

- Also you can check attributes, received from device. 
    To do this, navigate to the **Attributes** tab.  
    Attributes are additional data sent from the MI-8 to ThingsBoard that are more or less fixed and do not change such as the modem IMEI, the SIM ID (ICCID), and the MI-8 firmware version. 

![](https://img.thingsboard.io/devices-library/ready-to-go-devices/mixed-input-8-channel-analog-cellular-logger/check-attributes.png)

All sensor values configured in the active MI-8 trigger should be present once the MI-8 powers up and is able to establish a cellular connection.  
Note that GPS values are only transmitted after the first GPS fix, which could take several minutes depending on how long it has been and how far the MI-8 has moved since the last fix.  
GPS values (lat, lon and alt) will only appear in the telemetry window after they have been transmitted at least once.  
  

