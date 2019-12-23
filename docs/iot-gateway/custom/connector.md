---
layout: docwithnav
title: Custom IoT Gateway Connector

---

* TOC
{:toc}

## Custom connector

The purpose of the connector is to connect to external system (e.g. MQTT broker or OPC-UA server) or directly to devices (e.g. Modbus or BLE).
Once connected, connector is either poll data from those systems or subscribe to updates. Poll vs subscribe depends on the protocol capabilities. 
For example of custom connector, we use Custom Serial connector, that provides connecting to serial port on your device and read data. 
Connector is also able to push updates to devices either directly or via external systems.  

Main goal of the custom connector is opportunity to connect to any device with any protocol. 
Connectors written in Python language, but if you want you can add in connector file libraries like Cython or Jython to improve speed of connection.

### Location of extensions (Custom connectors and custom converters)

Connector file should being placed in extensions folder that depends on type of installation:

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
<b>Example of custom connector file. Press to expand.</b>
</summary>

{% highlight python %}

import serial    # Import library for connection over serial port.
import time    # Import system time library for sleep function and checking read data period.
from thingsboard_gateway.connectors.custom_connector import CustomConnector, log    # Import base class for the connector and log ("connector.log" in logs directory).


class CustomSerialConnector(CustomConnector):    # Definition of class.
    def __init__(self, gateway,  config, connector_type):    # Initialization method.
        super().__init__(gateway, config, connector_type)    # Call to parent method for initialization.
        self.__config = config    # Saving a configuration to current object (Data from configuration file in a parameter "configuration" in tb_gateway.yaml).
        self.__gateway = gateway    # Saving a gateway object (We will use it later for saving data into storage).
        self.load_converters()    # Loading converters for devices from configuration(attribute "converter" in device section of connector configuration).
        for device in self.devices:    # Loop for initialization devices. 
            try:    # Start of handling errors.
                connection_start = time.time()    # Saving current timestamp to check connection timeout.
                self.devices[device]["serial"] = None    # Creating place for object that will connect to device.
                while self.devices[device]["serial"] is None or not self.devices[device]["serial"].isOpen():    # Loop for connecting to device
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
                    )    # Configuration for Serial object with default values
                    time.sleep(.1)    # sleep 100 ms for connecting.
                    if time.time() - connection_start > 10:    # If difference between start of connection and current time if it more than 10 seconds trying to connect will stop for this device.
                        log.error("Connection refused per timeout for device %s", self.devices[device]["device_config"].get("name"))    # Message to log about connection timeout.
                        break    # Stop the connection loop. 
            except Exception as e:    # Handling errors
                log.exception(e)    # Message about error to log
            else:    # If no exception add device to gateway and ThingsBoard
                self.__gateway.add_device(self.devices[device]["device_config"]["name"], {"connector": self})    # Call method of gateway to add device to ThingsBoard instance
                self.connected = True    # Set self status of connection.
    
    def run(self):    # Main loop method 
        try:    # Start of handling errors.
            while True:    # infinite loop
                for device in self.devices:    # Checking every device that in the configuration section in the connector configuration file.
                    serial = self.devices[device]["serial"]    # Initializing local variable for work.
                    ch = b''    # Buffer for char from serial port.
                    data_from_device = b''    # Byte string from device from serial port.
                    while ch != b'\n':    # Reading bytes from serial while character is not "new line".
                        ch = serial.read(1)    # Read 1 character from serial port.
                        data_from_device = data_from_device + ch    # add received character to result string.
                    try:    # Start of handling errors.
                        converted_data = self.devices[device]['converter'].convert(self.devices[device]['device_config'], data_from_device)    # Use device converter to convert received data from device.
                        self.__gateway.send_to_storage(self.get_name(), converted_data)    # Send converted data to storage.
                        time.sleep(.1)    # Delay for data processing.
                    except Exception as e:    # Handling errors.
                        log.exception(e)    # Sending error message to log.
                        self.close()    # close connector if error occured
                        raise e    # raise error to higher level error handler
        except Exception as e:    # Handling errors
            log.exception(e)    # Sending error message to log

    def close(self):    # method for closing connector (usually calls when some exeptions occured and connector can not contiue it's work)
        super().close()    # call to parent close method
        for device in self.devices:    # Loop over connector devices
            self.__gateway.del_device(self.devices[device])    # Removing devices from devices dictionary
            if self.devices[device]['serial'].isOpen():    # Check connection
                self.devices[device]['serial'].close()    # Closing connection over serial port to device

    def on_attributes_update(self, content):    # Method for processing AttributeUpdates requests from ThingsBoard instance
        log.debug(content)     # Send debug message to log with received data.
        if self.devices.get(content["device"]) is not None:    # Checking device for processing
            device_config = self.devices[content["device"]].get("device_config")    # Getting configuration for device from AttributeUpdates request
            if device_config is not None:    # Checking configuration
                log.debug(device_config)    # Sending debug message to log with configuration. 
                if device_config.get("attributeUpdates") is not None:    # Checking avaibility of attributeUpdates section in configuration
                    requests = device_config["attributeUpdates"]    # Getting configuration from configuration section attributeUpdates for device 
                    for request in requests:    # Loop for requests from configuration file
                        attribute = request.get("attributeOnThingsBoard")    # getting parameter attributeOnThingsBoard in configuration
                        log.debug(attribute)    # Sending debug message to log
                        if attribute is not None and attribute in content["data"]:    # Checking attribute and checking that it in received request or no.
                            try:    # Start handling errors
                                value = content["data"][attribute]    # Getting data from received attributeUpdates request
                                str_to_send = str(request["stringToDevice"].replace("${" + attribute + "}", str(value))).encode("UTF-8")    # Forming string that will being sended to device over serial port
                                self.devices[content["device"]]["serial"].write(str_to_send)    # Sending data to device.
                                log.debug("Attribute update request to device %s : %s", content["device"], str_to_send)    # Sending debug message to log sended data
                                time.sleep(.01)    # delay for writing to serial port
                            except Exception as e:    # Handling errors
                                log.exception(e)    # Sending error message to log

    def server_side_rpc_handler(self, content):    # Method for processing RPC requests from ThingsBoard instance
        # Structure of this method should be the same like in on_attributes_update method.
        pass


{% endhighlight %}
</details>
<br>

The custom connector should inherit from CustomConnector class.  
Connector base class inherits from threading.Thread and have methods of this class.

#### Custom connector methods

You should implement following methods:  
**\_\_init\_\_** -- called on creating object (In example used for loading converters, saving data from configs to object variables and creating serial ports objects).  
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
