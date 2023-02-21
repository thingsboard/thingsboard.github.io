
Now it’s time to program the board to connect to ThingsBoard.  
To do this, you can use the code below. It contains all required functionality for this guide.    


```cpp
```
{:.copy-code}

In the code, replace placeholders with your WiFi network SSID, password, ThingsBoard device access token.  

Necessary variables for connection:  

| Variable name | Default value | Description | 
|-|-|-|
| WIFI_SSID | **YOUR_WIFI_SSID** | Your WiFi network name. | 
| WIFI_PASSWORD | **YOUR_WIFI_PASSWORD** | Your WiFi network password. |
| TOKEN | **YOUR_DEVICE_ACCESS_TOKEN** | Access token from device. Obtaining process described in #connect-device-to-thingsboard | 
| THINGSBOARD_SERVER | **{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}thingsboard.cloud{% else %}demo.thingsboard.io{% endif %}** | Your ThingsBoard host or ip address. |
| THINGSBOARD_PORT | **1883U** | ThingsBoard server MQTT port. Can be default for this guide. |
| MAX_MESSAGE_SIZE | **256U** | Maximal size of MQTT messages. Can be default for this guide. |
| SERIAL_DEBUG_BAUD | **1883U** | Baud rate for serial port. Can be default for this guide. |  

```cpp
...

constexpr char WIFI_SSID[] = "YOUR_WIFI_SSID";
constexpr char WIFI_PASSWORD[] = "YOUR_WIFI_PASSWORD";

constexpr char TOKEN[] = "YOUR_ACCESS_TOKEN";

constexpr char THINGSBOARD_SERVER[] = "{% if docsPrefix == "pe/" or docsPrefix == "paas/" %}thingsboard.cloud{% else %}demo.thingsboard.io{% endif %}";
constexpr uint16_t THINGSBOARD_PORT = 1883U;

constexpr uint32_t MAX_MESSAGE_SIZE = 256U;
constexpr uint32_t SERIAL_DEBUG_BAUD = 115200U;

...
```

Send data part (By default the example sends random value for **temperature** key and some WiFi information):  
```cpp
...
    tb.sendTelemetryInt("temperature", random(10, 20));
    tb.sendAttributeInt("rssi", WiFi.RSSI());
    tb.sendAttributeString("bssid", WiFi.BSSIDstr().c_str());
    tb.sendAttributeString("localIp", WiFi.localIP().toString().c_str());
    tb.sendAttributeString("ssid", WiFi.SSID().c_str());
    tb.sendAttributeInt("channel", WiFi.channel());
...
```

Then upload the code to the device by pressing Upload button or keyboard combination Ctrl+U.  
{% assign codeByUploadButton='
    ===
        image: /images/devices-library/basic/arduino-ide/upload.png
' 
%}
{% include images-gallery.liquid imageCollection=codeByUploadButton %}

