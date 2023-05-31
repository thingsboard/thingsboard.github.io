
Once we have an access token we can configure the MI-8.  
All MI-8 DAQs are configured through a file in the root directory of their SD card named **config.json**.  
The MI-8 [User manual](https://fusiondaq.com/wp-content/uploads/2023/01/LTEdaq_OperatingManual-1.pdf) contains detailed information for making changes to this file, but for this example we will focus on the name and push fields.  
These are the fields which are present in configuration file.  

```json
{
   "name":"My MI-8 DAQ",
   "thermo_type":["k","k","k","k","k","k"],
   "num_thermo":3,
   "num_rtd":2,
   "ref_resistance":4000,
   "rtd_type":["pt100","pt100","pt100","pt100"],
   "rtd_connection":[4,4,4,4],
   "dig_in_mode":["pulldown","pulldown","pulldown"],
   "use_aux_header":false,
   "debug_level":255,
   "usb_mass_storage":true,
   "sleep_voltage":9.9,
   "wake_voltage":10.5,
   "display_sleep":10,
   "gnss_period":60,
   "flip_display":false,
   "network": {
      "apn":"hologram",
      "username":"",
      "password":""
   },
   "push": {
      "mode":"post",
      "path":"api/v1/YOUR_ACCESS_TOKEN/telemetry",
      "attributes_path":"api/v1/YOUR_ACCESS_TOKEN/attributes",
      "server": "{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}thingsboard.cloud{% else %}demo.thingsboard.io{% endif %}",
      "port":80,
      "username":"",
      "password":"",
      "use_ssl":false,
      "use_json":true,
      "push_attributes":true,
      "include_name":false,
      "include_imei":false,
      "include_iccid":false,
      "track_min_max":false,
      "use_headers":false
   },
   "trigger":[ {
      "name":"Default",
      "channels":"ambient,tc0,tc1,tc2,rtd0,rtd1,an0,lat,lon,alt,vbat,rssi",
      "log_period":60,
      "push_period":300,
      "start_delay":0,
      "stop_delay":0,
      "condition":"1",
	  "append_log":true
   }]
}
```
{:.copy-code}

Necessary parameters to change for connection:

| Parameter | Default value | Description |
|-|-|
| path | **api/v1/YOUR_ACCESS_TOKEN/telemetry** | Replace **YOUR_ACCESS_TOKEN** with your access token for the device on ThingsBoard. |
| attributes_path | **api/v1/YOUR_ACCESS_TOKEN/attributes** | Replace **YOUR_ACCESS_TOKEN** with your access token for the device on ThingsBoard. | 
| server | **{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}thingsboard.cloud{% else %}demo.thingsboard.io{% endif %}** | Your ThingsBoard instance address. |
| port | **80** | Your ThingsBoard instance HTTP port. You can Set **port** equal to 443 and **use_ssl** equal to true to use SSL encryption (HTTPS). Either protocol is supported, but HTTPS will consume more cellular data each time data is pushed to the server.|

Other configuration parameters:

- The name field is optional in this file. This name is displayed on the MI-8 OLED screen and is sent to ThingsBoard as a device attribute. Best practice is for the name in config.json to match the name of the device in ThingsBoard, but this doesn’t have to be the case. The name field isn’t used to associate telemetry data between the MI-8 and ThingsBoard. It is only meant as an aid for the user.  
- The push field describes the connection to the ThingsBoard servers. In this example we use HTTP POST requests (“mode”:”post”). MQTT is also supported, but POST consumes less cellular data. The HTTP request URL is built up through the server, port, use_ssl, and path/attributes_path fields.  
- The use_ssl field describes whether HTTP or HTTPS is used. The server field is everything between the double slashes ‘//’ and the colon. Next comes the port and one additional slash. Everything beyond that is the path.  
- Set push_attributes equal to true so that attributes (things such as the MI-8 IMEI number which don’t change frequently) are sent once each power up.  
- Set use_json equal to true. All data sent to ThingsBoard should be formatted as JSON.  
- Set use_headers false. HTTP headers are not required by ThingsBoard, but require additional cellular data each push.  
- You can set include_name, include_imei, and include_iccid to false. These fields cause the ICCID, IMEI, and MI-8 name to be included in the telemetry pushes which would consume additional cellular data. They do not need included here since they are already sent to ThingsBoard in a separate attributes HTTP request once per MI-8 power cycle.  

After adding or changing configuration file do the following steps:  
- Save config.json
- Disconnect the PC from the MI-8 USB port (if connected and mass-storage enabled)
- Power cycle the MI-8 so new settings take effect.