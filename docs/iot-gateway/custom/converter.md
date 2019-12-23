---
layout: docwithnav
title: Custom IoT Gateway Converter

---

* TOC
{:toc}


## Custom converter

The purpose of the converter is to convert data from devices to the ThingsBoard format.
Converters written in Python language, but if you want you can add in custom converter file libraries like Cython or Jython to improve conversion speed.

### Location of extensions (Custom connectors and custom converters)

Converter file should being placed in extensions folder that depends on type of installation:

**1. If you install the gateway as pip module, extensions folder placed in python package folder for example:** 

```text 
/usr/lib/python3/site-packages/thingsboard_gateway/extensions
```
or

```text
/usr/.local/lib/python3/site-packages/thingsboard_gateway/extensions
```

**2. If you install the gateway as daemon, extensions folder located in /var/lib/thingsboard_gateway/extensions**


### Custom connector file and class

<br>
<details>
<summary>
<b>Example of custom converter file. Press to expand.</b>
</summary>

{% highlight python %}
from thingsboard_gateway.connectors.converter import Converter, log    # Import base class for the converter and log ("converter.log" in logs directory).


class CustomSerialUplinkConverter(Converter):    # Definition of class.
    def __init__(self, config):    # Initialization method
        self.__config = config    # Saving configuration to object variable
        self.result_dict = {
            'deviceName': config.get('name', 'CustomSerialDevice'),
            'deviceType': config.get('deviceType', 'default'),
            'attributes': [],
            'telemetry': []
        }    # template for a result dictionary.
    def convert(self, config, data: bytes):    # Method for conversion data from device format to ThingsBoard format.
        keys = ['attributes', 'telemetry']    # Array used for looking data for data processing.
        for key in keys:    # Data processing loop for parameters in keys array.
            self.result_dict[key] = []    # Clean old data.
            if self.__config.get(key) is not None:    # Checking the parameter from the keys in the config.
                for config_object in self.__config.get(key):    # The loop for checking whether there is data that interests us.
                    data_to_convert = data    # data for conversion.
                    if config_object.get('untilDelimiter') is not None:    # Checking some parameter from configuration file.
                        data_to_convert = data.split(config_object.get('untilDelimiter').encode('UTF-8'))[0]    # if "utilDelimiter" parameter in configuration file - get data from incoming data to delimiter position in received string.
                    if config_object.get('fromDelimiter') is not None:    # Checking some parameter from configuration file.
                        data_to_convert = data.split(config_object.get('fromDelimiter').encode('UTF-8'))[1]    # if "fromDelimiter" parameter in configuration file - get data from incoming data from delimiter position in received string.
                    if config_object.get('toByte') is not None:    # Checking some parameter from configuration file.
                        to_byte = config_object.get('toByte')    #     # if "toByte" parameter in configuration file - get data from incoming data to byte number from a parameter "toByte" in configuration file.
                        if to_byte == -1:    # Checking some parameter from configuration file.
                            to_byte = len(data) - 1    # If parameter == -1 - we will take data to the end.
                        data_to_convert = data_to_convert[:to_byte]    # saving data to variable for sending
                    if config_object.get('fromByte') is not None:    # Checking some parameter from configuration file
                        from_byte = config_object.get('fromByte')    # if "fromByte" parameter in configuration file - get data from incoming data from byte number from a parameter "fromByte" in configuration file.
                        data_to_convert = data_to_convert[from_byte:]    # saving data to variable for sending.
                    converted_data = {config_object['key']: data_to_convert.decode('UTF-8')}    # Adding data from temporary variable to result string.
                    self.result_dict[key].append(converted_data)    # Append result string to result dictionary.
        return self.result_dict    # returning result dictionary after all iterations.

{% endhighlight %}
</details>
<br>

The custom connector should inherit from CustomConnector class.  
Connector base class inherits from threading.Thread and have methods of this class.

#### Custom connector methods

You should implement following methods:  
**\_\_init\_\_** -- called on creating object.  
**convert** -- Method for conversion data from device format to ThingsBoard data format.  

##### \_\_init\_\_ method

**Parameters:**

```python
def __init__(self, config):
```

*self* -- current object.  
*config* -- dictionary with data from connector configuration file.  

In the example used to save the converter configuration and create a template for the result's dictionary with ThingsBoard data format

##### convert method

Method for conversion data from device format to ThingsBoard data format.

**Parameters:**

```python
def convert(self, config, data):
```
*self* -- current object.  
*config* -- configuration section for this device from connector configuration file.  
*data* -- data from a device.  



