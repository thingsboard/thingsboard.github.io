---
layout: docwithnav-gw
title: Custom IoT Gateway Connector

---

* TOC
{:toc}

## Custom connector implementation

Connectors are Gateway components that connect to external system or directly to devices. Gateway has many built-in connectors (e.g. MQTT, OPC-UA server, Modbus, BLE, etc).
Once connected, connector is either poll data from those systems or subscribe to updates. Poll vs subscribe depends on the protocol capabilities.

Main goal of the custom connector is opportunity to connect to any device with any protocol. Connectors are written in Python language.

We will demonstrate how to create custom connector by example. Let's assume we want our connector to connect to serial port on your device and read the data. 
Connector will be able to push data to device over serial. We will call this connector SerialConnector.  
Please see step-by-step guide how we have added SerialConnector to the Gateway.  
You can create your custom connector, based on this example.  

**Notate: The gateway already contains this connector, you can find it in the extensions folder**

Let's assume our serial devices push UTF-8 encoded strings like this: 

```text
48\r2430947595\n
```
where 48 is humidity, \r is delimiter between values 2430947595 is device serial number and messages are separated by \n symbol.

### Step 1. Define SerialConnector configuration

At first, we need create configuration file for our serial connector. Let's create file in the config folder (In the folder with tb_gateway.json file.)

```bash
touch custom_serial.json
```
{: .copy-code}

After this we need add some configuration for this connector in file.

<br>
<details>
<summary>
Example of custom connector configuration file. Press to expand.
</summary>

{% highlight json %}
{
  "name": "Custom serial connector",
  "devices": [
    {
      "name": "CustomSerialDevice1",
      "port": "/dev/ttyUSB0",
      "baudrate": 9600,
      "converter": "CustomSerialUplinkConverter",
      "telemetry": [
        {
          "type": "byte",
          "key": "humidity",
          "untilDelimiter": "\r"
        }
      ],
      "attributes":[
        {
          "key": "SerialNumber",
          "type": "string",
          "fromByte": 4,
          "toByte": -1
        }
      ],
      "attributeUpdates": [
        {
          "attributeOnThingsBoard": "attr1",
          "stringToDevice": "value = ${attr1}\n"
        }
      ]
    }
  ]
}
{% endhighlight %}

</details>
<br>

In this file we write the configuration that we will use in the connector code.

Parameters in the configuration:

1. "name" - connector name, it should be like a connector name in the tb_gateway.json file. Uses by the gateway to find correct connector for saved devices.
2. "devices" - array with devices configuration (We can provide more that one device.)

In the "devices" array configuration file has devices json objects with configuration parameters for this device.

Parameters in device object:  
1. "name" - name of the device for ThingsBoard instance.  
2. "port" - port for the device.  
3. "baudrate" - port baudrate for connection to device.  
**Notate: You can also use parameters from a configuration for serial port such as parity, stop bits, etc.   
You can read more about serial port parameters [here.](https://pythonhosted.org/pyserial/pyserial_api.html#classes)**  
4. "converter" - class name of converter that we will use for the serial connector.
5. "telemetry" - objects array, with a configuration for processing data from device, data processed with configuration in this section will be interpreted as device telemetries.
6. "attributes" - objects array, with a configuration for processing data from device, data processed with configuration in this section will be interpreted as device attributes.
7. "attributesUpdates" - objects array with a configuration for processing attribute update request from ThingsBoard.

 

### Step 2. Locate extensions folder

Connector file should being placed in extensions folder that depends on type of installation:

**If you install the gateway as daemon:**

```bash
/var/lib/thingsboard_gateway/extensions
```
{: .copy-code}

**For installation using pip:** 

| **Installation command** | **Path** | **Description** |
|-|-|
| **sudo pip3 install thingsboard-gateway** | `/usr/lib/python3/site-packages/thingsboard_gateway/extensions` | Package installed on system layer, for every user. |
| **pip3 install thingsboard-gateway** | `/usr/local/lib/python3/dist-packages/thingsboard-gateway` | Package installed only for current user. |


### Step 3. Define Connector Implementation

We need create a folder and file for our connector class.  
We have a folder "**serial**" in extensions folder and file "**custom_serial_connector.py**".
After this, we write connector class in the connector file and override some methods of parent class. [List of methods.](#custom-connector-methods-reference) 

<br>
<details>
<summary>
<b>Example of custom connector file. Press to expand.</b>
</summary>

{% highlight python %}

"""Import libraries"""

import serial
import time
from threading import Thread
from random import choice
from string import ascii_lowercase
from thingsboard_gateway.connectors.connector import Connector, log    # Import base class for connector and logger
from thingsboard_gateway.tb_utility.tb_utility import TBUtility


class CustomSerialConnector(Thread, Connector):    # Define a connector class, it should inherit from "Connector" class.
    def __init__(self, gateway,  config, connector_type):
        super().__init__()    # Initialize parents classes
        self.statistics = {'MessagesReceived': 0,
                           'MessagesSent': 0}    # Dictionary, will save information about count received and sent messages.
        self.__config = config    # Save configuration from the configuration file.
        self.__gateway = gateway    # Save gateway object, we will use some gateway methods for adding devices and saving data from them.
        self.__connector_type = connector_type    # Saving type for connector, need for loading converter
        self.setName(self.__config.get("name",
                                       "Custom %s connector " % self.get_name() + ''.join(choice(ascii_lowercase) for _ in range(5))))    # get from the configuration or create name for logs.
        log.info("Starting Custom %s connector", self.get_name())    # Send message to logger
        self.daemon = True    # Set self thread as daemon
        self.stopped = True    # Service variable for check state
        self.connected = False    # Service variable for check connection to device
        self.devices = {}    # Dictionary with devices, will contain devices configurations, converters for devices and serial port objects
        self.load_converters()    # Call function to load converters and save it into devices dictionary
        self.__connect_to_devices()    # Call function for connect to devices
        log.info('Custom connector %s initialization success.', self.get_name())    # Message to logger
        log.info("Devices in configuration file found: %s ", '\n'.join(device for device in self.devices))    # Message to logger

    def __connect_to_devices(self):    # Function for opening connection and connecting to devices
        for device in self.devices:
            try:    # Start error handler
                connection_start = time.time()
                if self.devices[device].get("serial") is None \
                        or self.devices[device]["serial"] is None \
                        or not self.devices[device]["serial"].isOpen():    # Connect only if serial not available earlier or it is closed.
                    self.devices[device]["serial"] = None
                    while self.devices[device]["serial"] is None or not self.devices[device]["serial"].isOpen():    # Try connect
                        '''connection to serial port with parameters from configuration file or default'''
                        self.devices[device]["serial"] = serial.Serial(
                                 port=self.__config.get('port', '/dev/ttyUSB0'),
                                 baudrate=self.__config.get('baudrate', 9600),
                                 bytesize=self.__config.get('bytesize', serial.EIGHTBITS),
                                 parity=self.__config.get('parity', serial.PARITY_NONE),
                                 stopbits=self.__config.get('stopbits', serial.STOPBITS_ONE),
                                 timeout=self.__config.get('timeout', 1),
                                 xonxoff=self.__config.get('xonxoff', False),
                                 rtscts=self.__config.get('rtscts', False),
                                 write_timeout=self.__config.get('write_timeout', None),
                                 dsrdtr=self.__config.get('dsrdtr', False),
                                 inter_byte_timeout=self.__config.get('inter_byte_timeout', None),
                                 exclusive=self.__config.get('exclusive', None)
                        )
                        time.sleep(.1)
                        if time.time() - connection_start > 10:    # Break connection try if it setting up for 10 seconds
                            log.error("Connection refused per timeout for device %s", self.devices[device]["device_config"].get("name"))
                            break
            except serial.serialutil.SerialException:
                log.error("Port %s for device %s - not found", self.__config.get('port', '/dev/ttyUSB0'), device)
                time.sleep(10)
            except Exception as e:
                log.exception(e)
                time.sleep(10)
            else:    # if no exception handled - add device and change connection state
                self.__gateway.add_device(self.devices[device]["device_config"]["name"], {"connector": self})
                self.connected = True

    def open(self):    # Function called by gateway on start
        self.stopped = False
        self.start()

    def get_name(self):    # Function used for logging, sending data and statistic
        return self.name

    def is_connected(self):    # Function for checking connection state
        return self.connected

    def load_converters(self):    # Function for search a converter and save it.
        devices_config = self.__config.get('devices')
        try:
            if devices_config is not None:
                for device_config in devices_config:
                    if device_config.get('converter') is not None:
                        converter = TBUtility.check_and_import(self.__connector_type, device_config['converter'])
                        self.devices[device_config['name']] = {'converter': converter(device_config),
                                                               'device_config': device_config}
                    else:
                        log.error('Converter configuration for the custom connector %s -- not found, please check your configuration file.', self.get_name())
            else:
                log.error('Section "devices" in the configuration not found. A custom connector %s has being stopped.', self.get_name())
                self.close()
        except Exception as e:
            log.exception(e)

    def run(self):    # Main loop of thread
        try:
            while True:
                for device in self.devices:
                    serial = self.devices[device]["serial"]
                    ch = b''
                    data_from_device = b''
                    while ch != b'\n':
                        try:
                            try:
                                ch = serial.read(1)    # Reading data from serial
                            except AttributeError as e:
                                if serial is None:
                                    self.__connect_to_devices()    # if port not found - try to connect to it
                                    raise e
                            data_from_device = data_from_device + ch
                        except Exception as e:
                            log.exception(e)
                            break
                    try:
                        converted_data = self.devices[device]['converter'].convert(self.devices[device]['device_config'], data_from_device)
                        self.__gateway.send_to_storage(self.get_name(), converted_data)
                        time.sleep(.1)
                    except Exception as e:
                        log.exception(e)
                        self.close()
                        raise e
                if not self.connected:
                    break
        except Exception as e:
            log.exception(e)

    def close(self):    # Close connect function, usually used if exception handled in gateway main loop or in connector main loop
        self.stopped = True
        for device in self.devices:
            self.__gateway.del_device(self.devices[device])
            if self.devices[device]['serial'].isOpen():
                self.devices[device]['serial'].close()

    def on_attributes_update(self, content):    # Function used for processing attribute update requests from ThingsBoard
        log.debug(content)
        if self.devices.get(content["device"]) is not None:    # checking - is device in configuration?
            device_config = self.devices[content["device"]].get("device_config")
            if device_config is not None:
                log.debug(device_config)
                if device_config.get("attributeUpdates") is not None:
                    requests = device_config["attributeUpdates"]    # getting configuration for attribute requests
                    for request in requests:
                        attribute = request.get("attributeOnThingsBoard")
                        log.debug(attribute)
                        if attribute is not None and attribute in content["data"]:
                            try:
                                value = content["data"][attribute]    # get value from content
                                str_to_send = str(request["stringToDevice"].replace("${" + attribute + "}", str(value))).encode("UTF-8")    # form a string to send to device
                                self.devices[content["device"]]["serial"].write(str_to_send)    # send string to device
                                log.debug("Attribute update request to device %s : %s", content["device"], str_to_send)
                                time.sleep(.01)
                            except Exception as e:
                                log.exception(e)

    def server_side_rpc_handler(self, content):
        pass


{% endhighlight %}
</details>
<br>

### Step 4. Define Converter Implementation

The purpose of the converter is to convert data from devices to the ThingsBoard format.
Converters written in Python language.
We should create a custom converter file "custom_serial_converter.py" in the extension folder, you can find extension folder location in [Step 2](#step-2-locate-extensions-folder)

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

After processing **48\r2430947595\n**  we receive following dictionary:

```python
{
    "deviceName": "CustomSerialDevice1",
    "deviceType": "default",
    "attributes": [{"SerialNumber": "2430947595"}],
    "telemetry": [{"humidity":48}]
}
```

This dictionary will be converted into json and gateway will send it to ThingsBoard instance.

### Step 5. Include Connector into main Gateway configuration file

To add the serial connector to the gateway, we need add following lines into section connectors tb_gateway.json file.
```json
{
  "name": "Custom Serial Connector",
  "type": "serial",
  "configuration": "custom_serial.json",
  "class": "CustomSerialConnector"
}
```

where:
*name* - connector name
*type* - folder name in extensions, with connector file
*configuration* - connector configuration file in folder with tb_gateway.json file
*class* - connector class name in connector file in extensions

### Step 6. Run the IoT gateway

To run the gateway you should execute following command, it depends on type of installation:

 -  If you install the IoT gateway as daemon, you should restart it with following command to apply changes to the configuration:

```bash
sudo systemctl restart thingsboard-gateway
```
{: .copy-code}
 - If you install the IoT gateway as Python module, you should run it from the folder with tb_gateway.json (or change path to the tb_gateway.json file) with the following command to apply changes to the configuration:

```bash
sudo python3 -c 'from thingsboard_gateway.gateway.tb_gateway_service import TBGatewayService; TBGatewayService("./tb_gateway.json")'
```
{: .copy-code}

You can check a status of the IoT Gateway by watch the logs in a folder that you provide in logs.json file.  
Default location of logs folder for the daemon - "/var/log/thingsboard-gateway/"  
Default location of logs folder for Python module - "./logs/"  

### Step 6. Check a result in the ThingsBoard instance

To check the result, you should connect device, and go to the ThingsBoard UI into "Devices" tab.  
If device connected correctly and has sent some data, you will see device with a name - "CustomSerialDevice1".  
To check the data - open device and go to the telemetry tab.
You should see the telemetry from config (humidity) with some value 48 (Value from example, your value can be different).


## Custom connector methods reference

You should implement following methods:  
**\_\_init\_\_** -- called on creating object (In example used for loading converters, saving data from configs to object variables and creating serial ports objects).  
**open** -- called on start connection to device with connector.  
**get_name** -- called to recieve name of connector.  
**is_connected** -- called to check the connection to devices.  
**run** -- Main method of thread, must contain an infinite loop and all calls to data receiving/processing functions.  
**close** -- method, that has being called when gateway stops and should contain processing of closing connection/ports etc.  
**on_attributes_update** -- gateway call it when receives AttributeUpdates request from ThingsBoard server to device with this connector.  
**server_side_rpc** -- gateway call it when receives ServerRpcRequest from ThingsBoard server.  

##### \_\_init\_\_ method

**Parameters:**

```python
def __init__(self, gateway, config, connector_type):
```

*self* -- current object  
*gateway* -- gateway object (will being used for saving data)   
*config* -- dictionary with data from connector configuration file   
*connector_type* -- type of connector(Need for load converters for this connector type, from tb_gateway.yaml)   

In example above, we used this method to initialize data with which we will work.  

##### __connect_to_devices method

```python
def __connect_to_devices(self):
```

*self* -- current object

Service method, used for connection to devices.  

##### get_name method

```python
def get_name(self):    # Function used for logging, sending data and statistic
```

*self* -- current object

Method to get connector name.

##### is_connected method

```python
def is_connected(self):    # Function for checking connection state
```

*self* -- current object

Method for check current connection state.

##### load_converters method

```python
def load_converters(self):    # Function for search a converter and save it.
```

*self* -- current object

Method for loading converters for devices.

##### run method

Method from threading module, that being called after initializing of gateway. 

**Parameters:**

```python
def run(self):
```
*self* -- current object.  


In example above we use this method for connection to devices, read data from them and run converter

##### close method

Method is being called when gateway stopping or catch a fatal exception in a main loop of gateway.

```python
def close(self):
```
*self* -- current object.  

##### on_attributes_update method

Method is being called when gateway receive AttributeUpdates request from ThingsBoard.  

```python
def on_attributes_update_method(self, content):
```
*self* -- current object.  
*content* -- dictionary with data from ThingsBoard server.  

Example of content:

```python
{"device": "CustomSerialDevice1", "data": {"attr1": 25}}
```

If configuration in section attributesUpdates like following, connector will send string "value = 25\n" to device.

```json
      "attributeUpdates": [
        {
          "attributeOnThingsBoard": "attr1",
          "stringToDevice": "value = ${attr1}\n"
        }
      ]
```



##### server_side_rpc_handler

Method is being called when gateway receive AttributeUpdates request from ThingsBoard.  

```python
def server_side_rpc_handler(self, content):
```
*self* -- current object.  
*content* -- dictionary with data from ThingsBoard server.  

Example of content:

```python
{"device": "CustomSerialDevice1", "data": {"id": 1, "method": "toggle_gpio", "params": {"pin":1}}}
```

There are 2 types of rpc requests processing available - with response and without it.  

After processing request you should just use following gateway method:  
```python 
self.__gateway.send_rpc_reply(device, req_id, content)
```
Where:  
*device* - String with device name.  
*req_id* - Id of RPC request from ThingsBoard  
*content* - depends on type of rpc:  
 - If without response:
 
 ```python
content = {"success": True}
```
  
 - If with response in content should be any dictionary with content that you want send to ThingsBoard as response.


## Custom converter methods reference

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

This function should return dictionary in format like following:

```python
{
    "deviceName": "DEVICE_NAME",
    "deviceType": "DEVICE_TYPE",
    "attributes": [
                    {"SOME_ATTRIBUTE_KEY":"SOME_ATTRIBUTE_VALUE"},
                    {"SOME_ATTRIBUTE_KEY1":"SOME_ATTRIBUTE_VALUE1"}
                  ],
    "telemetry": [
                    {"SOME_TELEMETRY_KEY": "SOME_TELEMETRY_VALUE"},
                    {"SOME_TELEMETRY_KEY1": "SOME_TELEMETRY_VALUE1"},
                    {"SOME_TELEMETRY_KEY2": "SOME_TELEMETRY_VALUE2"}
                  ]
}
```

Gateway will convert this data into json and send it to the ThingsBoard instance.
