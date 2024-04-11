A custom converter is converter written for some device:



|**Parameter**|**Default value**| **Description**                                                                                                                                                         |
|:-|:-|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| type                        | **custom**                      | Provides information to connector that a custom converter will be used for converting data from the topic.                                                              |
| extension                   | **CustomMqttUplinkConverter**   | Name of custom converter class.                                                                                                                                         |
| extension-config            |                                 | This subsection is a configuration for the custom converter. In default example it contains the number of bytes and keys for telemetry.                                 |
| temperatureBytes            | **2**                           | In the default example, first 2 bytes from received message will be interpreted as **temperature** key of telemetry (Substring "Bytes" will remove if exists).          |
| humidityBytes               | **2**                           | In the default example, the second and third byte from received message will be interpreted as **humidity** key of telemetry (Substring "Bytes" will remove if exists). |
| batteryLevelBytes           | **1**                           | In the default example, the fifth byte from received message will be interpreted as **batteryLevel** key of telemetry (Substring "Bytes" will removed if exists).       |
|--- 

{% capture difference %}
**All parameters from this subsection and topic will be transferred as dictionary during initialization to the converter object.**  
{% endcapture %}
{% include templates/info-banner.md content=difference %}


Converter subsection in the configuration will look like:
```json
      "converter": {
        "type": "custom",
        "extension": "CustomMqttUplinkConverter",
        "extension-config": {
            "temperatureBytes" : 2,
            "humidityBytes" :  2,
            "batteryLevelBytes" : 1
        }
      }
```
