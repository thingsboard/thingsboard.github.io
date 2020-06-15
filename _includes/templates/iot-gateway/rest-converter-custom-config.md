A custom converter is converter written for some device:



|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| type                        | **custom**                      | Provides information to connector that custom converter will be uses for converting data from request.                            |
| deviceNameExpression        | **SuperAnonDevice**             | Device name.                                                                                                                      |
| deviceTypeExpression        | **default**                     | Devcie type.                                                                                                                      |
| extension                   | **CustomRESTUplinkConverter**   | Name of custom converter class.                                                                                                   |
| extension-config            |                                 | Configuration, for custom converter (You can put anything, there. It will be passed to the converter object on initialization).   |
|   key                       | **Totaliser**                   |                                                                                                                                   |
|   datatype                  | **float**                       |                                                                                                                                   |
|   fromByte                  | **0**                           |                                                                                                                                   |
|   toByte                    | **4**                           |                                                                                                                                   |
|   byteorder                 | **big**                         |                                                                                                                                   |
|   signed                    | **true**                        |                                                                                                                                   |
|   multiplier                | **1**                           |                                                                                                                                   | 
|--- 

{% capture difference %}
<br>
  
**Custom converter usually needed if you want to collect data from some device with not regular structure in response or when the data needs some processing before sending it to the ThingsBoard.**  
{% endcapture %}  
{% include templates/info-banner.md content=difference %}  

**Notate: Everything, you placed in the "converter" section will be passed to the custom converter as a configuration.**  

Mapping subsection in the configuration looks like:  

```json
      "converter": {
        "type": "custom",
        "deviceNameExpression": "SuperAnonDevice",
        "deviceTypeExpression": "default",
        "extension": "CustomRestUplinkConverter",
        "extension-config": [
          {
          "key": "Totaliser",
          "datatype": "float",
          "fromByte": 0,
          "toByte": 4,
          "byteorder": "big",
          "signed": true,
          "multiplier": 1
          }]
      }
```
