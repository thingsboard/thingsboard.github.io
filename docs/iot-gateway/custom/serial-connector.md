---
layout: docwithnav-gw
title: Custom IoT Gateway serial connector

---

* TOC
{:toc}

## Custom connector implementation

Connectors are Gateway components that connect to external system or directly to devices. Gateway has many built-in connectors (e.g. MQTT, OPC-UA server, Modbus, BLE, etc).  
Once connected, connector is either poll data from those systems or subscribe for updates. Poll vs subscribe depends on the protocol capabilities.  

Main goal of the custom connector is opportunity to connect to any device with any protocol. Connectors are written in Python language.  

We will demonstrate how to create custom connector by example.  
Let's assume we want our connector to connect to serial port on your device and read the data in bytes and device can receive some commands in bytes as well.  
Connector will be able to push data to device over serial. We will call this connector **SerialConnector**.  
Please see step-by-step guide how we have added **SerialConnector** to the Gateway.  
You can create your custom connector, based on this example.  

**Note: The gateway already contains this connector, you can find it in the extensions folder**

Let's assume our serial devices push UTF-8 encoded strings like this: 

```text
48\r2430947595\n
```
where 48 is humidity, \r is delimiter between values 2430947595 is device serial number and messages are separated by \n symbol.  
And in order to parse incoming data we want to use two abilities - by bytes indexes and by delimiter (We will use both in this example).  

### Step 1. Define SerialConnector configuration

At first, we need create configuration file for our serial connector. Let's create file in the config folder (In the folder with tb_gateway.json file.)  

```bash
touch custom_serial.json
```
{: .copy-code}

After this we need add some configuration for this connector in file.  

```json
{
"name": "Custom serial connector",
"logLevel": "DEBUG",
"uplinkQueueSize": 100000,
"devices": [
{
"name": "SerialDevice1",
"type": "default",
"port": "/dev/ttyUSB0",
"baudrate": 9600,
"converter": "SerialUplinkConverter",
"downlink_converter": "SerialDownlinkConverter",
"telemetry": [
{
"type": "float",
"key": "humidity",
"untilDelimiter": "\r"
}
],
"attributes": [
{
"key": "SerialNumber",
"type": "string",
"fromByte": 4,
"toByte": -1
}
],
"attributeUpdates": [
{
"attributeOnPlatform": "attr1",
"stringToDevice": "value = ${attr1}\n"
}
],
"serverSideRpc": [
{
"method": "setValue",
"type": "int",
"withResponse": true,
"responseType": "string",
"responseUntilDelimiter": "\r",
"responseTimeoutSec": 5
},
{
"method": "getValue",
"type": "string",
"withResponse": false
}
]
}
]
}
```
{: .copy-code.expandable-10}

In this file we write the configuration that we will use in the connector code.  

Parameters in the configuration:  

1. "name" - connector name, it should be like a connector name in the tb_gateway.json file. Uses by the gateway to find correct connector for saved devices.  
2. "logLevel" - log level for the connector. (TRACE, DEBUG, INFO, WARNING, ERROR, CRITICAL)  
3. "devices" - array with devices configuration (We can provide more that one device.)  
4. "uplinkQueueSize" - size of the queue for uplink data. (Data that we will send to platform instance.)  

In the "devices" array configuration file has devices json objects with configuration parameters for this device.  

Parameters in device object:  
- "name" - name of the device on platform.
- "type" - type of the device on platform.  
- "port" - port of the device.  
- "baudrate" - port baudrate for connection to device.  
**Notate: You can also use parameters from a configuration for serial port such as parity, stop bits, etc.   
You can read more about serial port parameters [here.](https://pythonhosted.org/pyserial/pyserial_api.html#classes) or find them in code (\_\_init\_\_ method of SerialDevice class)**  
- "converter" - class name of converter that we will use for the serial connector as uplink converter for this device.  
- "downlink_converter" - class name of converter that we will use for the serial connector as downlink converter for this device.  
- "telemetry" - objects array, with a configuration for processing data from device, data processed with configuration in this section will be interpreted as device telemetries.  
- "attributes" - objects array, with a configuration for processing data from device, data processed with configuration in this section will be interpreted as device attributes.  
- "attributesUpdates" - objects array with a configuration for processing attribute update request from platform to device.  
- "serverSideRpc" - objects array with a configuration for processing RPC requests from platform to device.  


### Step 2. Locate extensions folder

Connector file should being placed in extensions folder that depends on type of installation:  

**Docker compose (default volume):**  

```bash
tb-gw-extensions
```
{: .copy-code}

**Daemon:**

```bash
/var/lib/thingsboard_gateway/extensions
```
{: .copy-code}

**Pip:** 

| **Installation command** | **Path** | **Description** |
|-|-|
| **sudo pip3 install thingsboard-gateway** | `/usr/lib/python3/site-packages/thingsboard_gateway/extensions` | Package installed on system layer, for every user. |
| **pip3 install thingsboard-gateway** | `/usr/local/lib/python3/dist-packages/thingsboard-gateway` | Package installed only for current user. |


### Step 3. Define Connector Implementation

To create a custom connector, we need to create a class that inherits from the Connector class.  
It is expected to have the file with custom connector(e.g. "**serial_connector.py**) in "**serial**" folder in the extensions folder.  
After this, we write connector class in the connector file and override some methods of parent class.  
You can find complete list of methods of Connector interface - [here](/docs/iot-gateway/custom/methods-and-datatypes/#connector-interface).  

```python

from queue import Queue
from threading import Event, Thread, Lock
from typing import List, TYPE_CHECKING

import serial.tools
import serial.tools.list_ports
from thingsboard_gateway.tb_utility.tb_utility import TBUtility
from time import monotonic, sleep

try:
    import serial
except ImportError:
    print("pyserial library not found - installing...")
    TBUtility.install_package("pyserial")
    import serial

from thingsboard_gateway.connectors.connector import Connector
from thingsboard_gateway.tb_utility.tb_loader import TBModuleLoader
from thingsboard_gateway.tb_utility.tb_logger import init_logger

if TYPE_CHECKING:
    #  necessary for type checking to avoid circular import
    from thingsboard_gateway.gateway.tb_gateway_service import TBGatewayService


class SerialDevice(Thread):
    """
    Serial device class is used to represent a device that is connected to the serial port.
    It is used to read data from the device and send it to the platform.
    """
    def __init__(self, device_config, uplink_converter, stop_event: Event, logger, uplink_queue):
        super().__init__()
        self.__log = logger
        self.uplink_queue = uplink_queue
        self.daemon = True
        self.stopped = True
        self.__connector_stopped = stop_event
        self.config = device_config
        self.name = self.config.get('deviceName', self.config.get('name', 'SerialDevice'))
        self.type = self.config.get('deviceType', self.config.get('type', 'default'))
        self.uplink_converter = uplink_converter
        self.downlink_converter = None
        self.delimiter = self.config.get('delimiter', '\n')
        self.__rpc_in_progress = Event()
        self.__previous_connect = 0

        self.port = self.config.get('port', '/dev/ttyUSB0')
        self.baudrate = self.config.get('baudrate', 9600)
        self.timeout = self.config.get('timeout', 1)
        self.bytesize = self.config.get('bytesize', serial.EIGHTBITS)
        self.stopbits = self.config.get('stopbits', serial.STOPBITS_ONE)
        self.parity = self.config.get('parity', serial.PARITY_NONE)
        self.dsrdtr = self.config.get('dsrdtr', False)
        self.rtscts = self.config.get('rtscts', False)
        self.xonxoff = self.config.get('xonxoff', False)
        self.write_timeout = self.config.get('writeTimeout', None)
        self.inter_byte_timeout = self.config.get('interByteTimeout', None)
        self.exclusive = self.config.get('exclusive', None)
        self.__serial_lock = Lock()
        self.__serial = None

    def get_serial(self):
        """
        Method to get serial connection to the device.
        If connection is not established, it tries to connect to the device.
        """
        with self.__serial_lock:
            if self.__serial is None or not self.__serial.is_open:
                try:
                    self.__serial = serial.Serial(
                        port=self.port,
                        baudrate=self.baudrate,
                        timeout=self.timeout,
                        bytesize=self.bytesize,
                        stopbits=self.stopbits,
                        parity=self.parity,
                        dsrdtr=self.dsrdtr,
                        rtscts=self.rtscts,
                        xonxoff=self.xonxoff,
                        write_timeout=self.write_timeout,
                        inter_byte_timeout=self.inter_byte_timeout,
                        exclusive=self.exclusive
                    )
                    self.__log.info("Connected to device %s", self.name)
                except Exception as e:
                    self.__log.error("Failed to connect to device %s: %s", self.name, e)
                    self.__serial = None
        return self.__serial

    def run(self):
        """
        Main method to read data from the device and send it to the platform.
        """
        self.__log.info("Device %s started", self.name)
        self.stopped = False
        self.get_serial()
        while not self.__connector_stopped.is_set() and not self.stopped:
            try:
                if not self.__rpc_in_progress.is_set():
                    data_from_device = self.__read_data_from_serial()
                    if data_from_device:
                        try:
                            converted_data = self.uplink_converter.convert(None, data_from_device)
                            self.uplink_queue.put(converted_data)
                        except Exception as e:
                            self.__log.error("Failed to convert data from device %s: %s", self.name, e)
            except Exception as e:
                self.__log.exception("Error in device %s: %s", self.name, e)
                self.stop()
        self.__log.info("Device %s stopped", self.name)

    def handle_rpc_request(self, rpc_method, params):
        """
        Method to process RPC requests from the platform.
        """
        result = {"success": True}
        processed = False
        for rpc_config in self.config.get("serverSideRpc", []):
            if rpc_method == rpc_config.get("method"):
                processed = True
                self.__rpc_in_progress.set()
                try:
                    if self.downlink_converter is not None:
                        converted_data = self.downlink_converter.convert(rpc_config, params)
                        if converted_data:
                            with_response = rpc_config.get("withResponse", False)
                            response_timeout = rpc_config.get("responseTimeoutSec", 5)
                            response = self.write(converted_data,
                                                  with_response=with_response,
                                                  response_timeout=response_timeout)
                            if with_response:
                                response_uplink_config = {}
                                if rpc_config.get("responseType"):
                                    response_uplink_config["type"] = rpc_config.get("responseType")
                                if rpc_config.get("responseFromByte"):
                                    response_uplink_config["fromByte"] = rpc_config.get("responseFromByte")
                                if rpc_config.get("responseToByte"):
                                    response_uplink_config["toByte"] = rpc_config.get("responseToByte")
                                if rpc_config.get("responseUntilDelimiter"):
                                    response_uplink_config["delimiter"] = rpc_config.get("responseUntilDelimiter")
                                if response_uplink_config and response:
                                    result = self.uplink_converter.convert(response_uplink_config, response)
                                else:
                                    result = {"error": "Cannot convert response with config: %r and response: %r" % (
                                        response_uplink_config, response), "success": False}
                        else:
                            result = {"error": "No data to send", "success": False}
                    else:
                        result = {"error": "Downlink converter not defined", "success": False}
                except Exception as e:
                    self.__log.error("Failed to process RPC with method: %r, params: %r, config: %r - Error: %s",
                                     rpc_method, params, rpc_config, e)
                    result = {"error": str(e), "success": False}
                finally:
                    self.__rpc_in_progress.clear()
        if not processed:
            result = {"error": "Method not found", "success": False}
        return result

    def write(self, data, with_response=False, response_timeout=5):
        """
        Method to write data to the device.
        If with_response is set to True, it waits for the response from the device.
        """
        try:
            serial_conn = self.get_serial()
            if serial_conn:
                with self.__serial_lock:
                    serial_conn.write(data)
                    self.__log.debug("Written to device %s: %s", self.name, data)
                if with_response:
                    return self.__read_data_from_serial(response_timeout)
        except Exception as e:
            self.__log.exception("Failed to write to device %s: %s", self.name, e)
        return None

    def __read_data_from_serial(self, timeout=1):
        """
        Method to read data from the device.
        It reads data until the delimiter is found.
        """
        data_from_device = b''
        serial_conn = None
        try:
            serial_conn = self.get_serial()
            previous_timeout = serial_conn.timeout
            if serial_conn:
                while not data_from_device.endswith(self.delimiter.encode('utf-8')):
                    serial_conn.timeout = timeout
                    chunk = serial_conn.read(1)
                    if chunk:
                        data_from_device += chunk
                    if self.__connector_stopped.is_set() or not chunk or self.stopped:
                        break
        except Exception as e:
            self.__log.exception("Failed to read from device %s: %s", self.name, e)
        finally:
            if serial_conn:
                serial_conn.timeout = previous_timeout
        return data_from_device

    def stop(self):
        self.stopped = True
        with self.__serial_lock:
            if self.__serial:
                self.__serial.close()
                self.__serial = None

    def is_connected_reconnect_if_needed(self):
        """
        Method to check if the device is connected.
        If the device is not connected, it tries to reconnect.
        """
        if self.__serial is None or not self.__serial.isOpen():
            if monotonic() - self.__previous_connect > 1:
                self.__previous_connect = monotonic()
                self.__log.info("Reconnecting to device %s", self.name)
                self.get_serial()
                return self.__serial is None or not self.__serial.isOpen()
        else:
            return True


class SerialConnector(Thread, Connector):
    """
    Serial connector class is used to represent a serial connector.
    It is used to manage devices connected to the serial ports.
    """
    def __init__(self, gateway: 'TBGatewayService', config, connector_type):
        super().__init__()
        self._connector_type = connector_type  # required to have for get connector type method
        self.__config = config  # required to have for get config method
        self.__id = self.__config["id"]  # required to have for get id method
        self.__gateway = gateway  # required to have for send data to storage method or to use other gateway methods
        self.name = self.__config["name"]  # required to have for get name method
        self.__connected = False  # required to have for is connected method
        self.__uplink_queue = Queue(self.__config.get('uplinkQueueSize', 100000))
        self._log = init_logger(self.__gateway, self.name, level=self.__config.get('logLevel'),
                                enable_remote_logging=self.__config.get('enableRemoteLogging', False),
                                is_connector_logger=True)
        self._converter_log = init_logger(self.__gateway, self.name, level=self.__config.get('logLevel'),
                                          enable_remote_logging=self.__config.get('enableRemoteLogging', False),
                                          is_converter_logger=True)
        self._log.info("Starting %s connector", self.get_name())
        self.daemon = True
        self.stopped = Event()
        self.stopped.set()
        self.__devices: List[SerialDevice] = []
        self._log.info('Connector %s initialization success.', self.get_name())

    def __start_devices(self):
        failed_to_connect_devices = len(self.__devices)
        for device in self.__devices:
            try:
                device.start()
                failed_to_connect_devices -= 1
            except Exception as e:
                self._log.exception("Failed to start device %s, error: %s", device.name, e)
        self.__connected = failed_to_connect_devices == 0

    def open(self):
        """
        Service method to start the connector.
        """
        self.stopped.clear()
        self.start()

    def get_name(self):
        return self.name

    def get_type(self):
        return self._connector_type

    def is_connected(self):
        return self.__connected

    def is_stopped(self):
        return self.stopped.is_set()

    def get_config(self):
        return self.__config

    def get_id(self):
        return self.__id

    def __load_devices(self):
        """
        Method to create devices objects using configuration file and create converters for them.
        """
        devices_config = self.__config.get('devices')
        try:
            if devices_config is not None:
                for device_config in devices_config:
                    device = None
                    uplink_converter_class_name = device_config.get('converter', device_config.get('uplink_converter'))
                    if uplink_converter_class_name is not None:
                        converter_class = TBModuleLoader.import_module(self._connector_type,
                                                                       uplink_converter_class_name)
                        uplink_converter = converter_class(device_config, self._log)
                        device = SerialDevice(device_config, uplink_converter, self.stopped,
                                              self._log, self.__uplink_queue)
                    else:
                        self._log.error('Converter configuration for the connector %s -- \
                            not found, please check your configuration file.', self.get_name())
                    if device_config.get('downlink_converter') is not None:
                        downlink_converter_class = TBModuleLoader.import_module(self._connector_type,
                                                                                device_config.get('downlink_converter'))
                        if device is not None:
                            device.downlink_converter = downlink_converter_class(device_config, self._converter_log)
                    if device is not None:
                        self.__devices.append(device)
            else:
                self._log.error('Section "devices" in the configuration not found. \
                    A connector %s has being stopped.', self.get_name())
                self.close()
        except Exception as e:
            self._log.error('Failed to load devices, error: %s', e)

    def run(self):
        """
        Main method to manage devices connected to the serial ports and process data from them.
        """
        try:
            self.__load_devices()
            self.__start_devices()
            self._log.info("Devices in configuration file found: %s ",
                           '\n'.join(device.name for device in self.__devices))
            while not self.stopped.is_set():
                try:
                    connected_devices = len(self.__devices)
                    for device in self.__devices:
                        if not device.stopped and not device.is_connected_reconnect_if_needed():
                            connected_devices -= 1
                            self._log.error("Device %s is not connected", device.name)
                            device.stop()
                            device.join()
                            device = SerialDevice(device.config, device.uplink_converter, self.stopped,
                                                  self._log, self.__uplink_queue)
                            device.start()
                    self.__connected = connected_devices == len(self.__devices)
                    if not self.__uplink_queue.empty():
                        data = self.__uplink_queue.get()
                        self.__gateway.send_to_storage(self.name, self.__id, data)
                    else:
                        sleep(0.05)
                except Exception as e:
                    self._log.error("Failed to process data from device %s, error: %s", self.name, e)
        except Exception as e:
            self._log.error("Failed to process data from device %s, error: %s", self.name, e)

    def close(self):
        """
        Service method to stop the connector and all devices connected to it.
        """
        self.stopped.set()
        for device in self.__devices:
            self.__gateway.del_device(device.name)
            device.stop()
        self._log.stop()

    def on_attributes_update(self, content):
        """
        Callback method to process attribute updates from the platform.
        """
        self._log.debug("Received attribute update: %s", content)
        device_name = content.get("device")
        if device_name is not None:
            for device in self.__devices:
                if device_name == device.name:
                    request_config = device.config.get("attributeUpdates")
                    if request_config is not None:
                        attribute_config_found = False
                        for attribute_config in request_config:
                            attribute = attribute_config.get("attributeOnPlatform")
                            if attribute is not None and attribute in content["data"]:
                                attribute_config_found = True
                                try:
                                    value = content["data"][attribute]
                                    str_to_send = str(attribute_config["stringToDevice"]
                                                      .replace("${" + attribute + "}", str(value))
                                                      .replace("${deviceName}", device_name)
                                                      .replace("${deviceType}", device.type)
                                                      ).encode("UTF-8")
                                    device.write(str_to_send)
                                except Exception as e:
                                    self._log.error("Failed to send attribute update to device %s: %s",
                                                    device_name, e)
                        if not attribute_config_found:
                            self._log.error("Attribute update configuration for key %s for device %s not found",
                                            list(content['data'].keys())[0], device_name)
                    else:
                        self._log.error("Attribute update configuration for device %s not found", device_name)
        else:
            self._log.error("Device name is not provided in the attribute update request: %s", content)

    def server_side_rpc_handler(self, content):
        """
        Callback method to process RPC requests from the platform.
        """
        self._log.debug("Received RPC request: %s", content)
        device_name = content.get("device")
        rpc_data = content.get("data", {})
        rpc_method = rpc_data.get("method")
        req_id = rpc_data.get("id")
        params = rpc_data.get("params")
        if device_name is not None:
            for device in self.__devices:
                if device_name == device.name:
                    result = device.handle_rpc_request(rpc_method, params)
                    if "error" in result:
                        self._log.error("Failed to process RPC request for device %s, error: %s",
                                        device_name, result["error"])
                    if result is not None:
                        self.__gateway.send_rpc_reply(device=device_name,
                                                      req_id=req_id,
                                                      content=result,
                                                      wait_for_publish=True,
                                                      quality_of_service=1)
        else:
            self._log.error("Device name is not provided in the RPC request: %s", content)

```
{: .copy-code.expandable-20}

### Step 4. Create uplink converter

The purpose of the uplink converter is to convert data from devices to the format that the platform expects.  
Uplink converter should locate in the same extension folder that we used in [Step 2](#step-2-locate-extensions-folder) (In our case - folder "**serial**" in "**extensions**").  
Our uplink converter file named "**uplink_serial_converter.py**". It should contain class that inherits from the Converter class, and override the convert method.  
You can find complete list of methods of Converter interface - [here](/docs/iot-gateway/custom/methods-and-datatypes/#converter-interface).

```python

from typing import Any, Tuple
from simplejson import loads

from thingsboard_gateway.connectors.converter import Converter
from thingsboard_gateway.gateway.constants import REPORT_STRATEGY_PARAMETER, TELEMETRY_PARAMETER, TIMESERIES_PARAMETER
from thingsboard_gateway.gateway.entities.converted_data import ConvertedData
from thingsboard_gateway.gateway.entities.datapoint_key import DatapointKey
from thingsboard_gateway.gateway.entities.report_strategy_config import ReportStrategyConfig
from thingsboard_gateway.gateway.entities.telemetry_entry import TelemetryEntry
from thingsboard_gateway.tb_utility.tb_utility import TBUtility


class SerialUplinkConverter(Converter):
    """
    Uplink converter is used to convert incoming data to the format that platform expects.
    Such as we create uplink converter for each configured device,
    this converter is used to convert incoming data from only one device.
    Because config, that we passed to init method, is device specific.
    If your connector can handle multiple devices, you can create one converter for all devices.
    """

    def __init__(self, config, logger):
        self._log = logger
        self.__config = config
        self.__device_report_strategy = None
        self.__device_name = self.__config.get('deviceName', self.__config.get('name', 'SerialDevice'))
        self.__device_type = self.__config.get('deviceType', self.__config.get('type', 'default'))
        try:
            self.__device_report_strategy = ReportStrategyConfig(self.__config.get(REPORT_STRATEGY_PARAMETER))
        except ValueError as e:
            self._log.trace("Report strategy config is not specified for device %s: %s", self.__device_name, e)

    def convert(self, config, data: bytes):
        """Converts incoming data to the format that platform expects. Config is specified only for RPC responses."""
        self._log.debug("Data to convert: %s", data)
        if config is not None:
            converted_data = {"result": self.__convert_value_to_type(data, config)}
            return converted_data
        else:
            converted_data = ConvertedData(self.__device_name, self.__device_type)
            for datapoint_config in self.__config.get(TIMESERIES_PARAMETER, self.__config.get(TELEMETRY_PARAMETER, [])):
                try:
                    telemetry_entry = self.__convert_telemetry_datapoint(data, datapoint_config)
                    if telemetry_entry:
                        converted_data.add_to_telemetry(telemetry_entry)
                except Exception as e:
                    self._log.error("Error converting telemetry datapoint: %s", e)
            for datapoint_config in self.__config.get('attributes', []):
                try:
                    attribute_data = self.__convert_attributes_datapoint(data, datapoint_config)
                    if attribute_data:
                        converted_data.add_to_attributes(*attribute_data)
                except Exception as e:
                    self._log.error("Error converting attribute datapoint: %s", e)
            self._log.debug("Converted data: %s", converted_data)
        return converted_data

    def __convert_telemetry_datapoint(self, data, dp_config) -> TelemetryEntry:
        key = dp_config.get('key')
        datapoint_key = self.__convert_datapoint_key(key, dp_config, self.__device_report_strategy, self._log)
        value = self.__convert_value_to_type(data, dp_config)
        if not datapoint_key or not value:
            self._log.trace("Datapoint %s - not found in incoming data: %s", key, data.hex())
            return None
        return TelemetryEntry({datapoint_key: value})

    def __convert_attributes_datapoint(self, data, dp_config) -> Tuple[DatapointKey, Any]:
        key = dp_config.get('key')
        datapoint_key = self.__convert_datapoint_key(key, dp_config, self.__device_report_strategy, self._log)
        value = self.__convert_value_to_type(data, dp_config)
        if not datapoint_key or not value:
            self._log.trace("Datapoint %s - not found in incoming data: %s", key, data.hex())
            return None
        return (datapoint_key, value)

    @staticmethod
    def __convert_value_to_type(data, dp_config):
        type_ = dp_config.get('type')
        data_for_conversion = data
        if dp_config.get("untilDelimiter") or dp_config.get("fromDelimiter"):
            fromDelimiter = dp_config.get("fromDelimiter")
            untilDelimiter = dp_config.get("untilDelimiter")
            fromDelimiterPosition = data_for_conversion.find(
                fromDelimiter.encode('UTF-8')) if fromDelimiter else 0
            untilDelimiterPosition = data_for_conversion.find(
                untilDelimiter.encode('UTF-8')) if untilDelimiter else -1
            if fromDelimiterPosition != -1 \
                    and untilDelimiterPosition != -1 \
                    and fromDelimiterPosition < untilDelimiterPosition:
                data_for_conversion = data_for_conversion[fromDelimiterPosition:untilDelimiterPosition]
            elif fromDelimiterPosition != -1 and fromDelimiterPosition < len(data_for_conversion):
                data_for_conversion = data_for_conversion[fromDelimiterPosition:]
            elif untilDelimiterPosition != -1 and untilDelimiterPosition < len(data_for_conversion):
                data_for_conversion = data_for_conversion[:untilDelimiterPosition]
        elif dp_config.get("fromByte") or dp_config.get("toByte"):
            if dp_config.get("fromByte") and dp_config.get("toByte") \
                    and dp_config["fromByte"] < dp_config["toByte"] \
                    and len(data_for_conversion) > dp_config["toByte"]:
                data_for_conversion = data_for_conversion[dp_config["toByte"]:dp_config["fromByte"]]
            else:
                if dp_config.get("fromByte") and len(data_for_conversion) > dp_config.get("fromByte", 0):
                    data_for_conversion = data_for_conversion[dp_config["fromByte"]:]
                if dp_config.get("toByte") and \
                        (len(data_for_conversion) > dp_config.get("toByte", 0) or dp_config["toByte"] == -1):
                    data_for_conversion = data_for_conversion[:dp_config["toByte"]]

        if type_ == 'string':
            value = data_for_conversion.decode('UTF-8').strip()
        elif type_ == 'json':
            value = loads(data_for_conversion.decode('UTF-8'))
        elif type_ == 'int':
            value = int(data_for_conversion)
        elif type_ == 'float' or type_ == 'double':
            value = float(data_for_conversion)
        elif type_ == 'bool':
            try:
                value = bool(int(data_for_conversion))
            except ValueError:
                return data_for_conversion.decode('UTF-8').strip().lower() == 'true'
        else:
            value = data_for_conversion.hex()
        return value

    @staticmethod
    def __convert_datapoint_key(key, dp_config, device_report_strategy, logger):
        return TBUtility.convert_key_to_datapoint_key(key, device_report_strategy, dp_config, logger)

```
{: .copy-code.expandable-20}

After processing **48\r2430947595\n**  we receive [ConvertedData](/docs/iot-gateway/custom/methods-and-datatypes/#converteddata) object with the following data:  

Device name: "SerialDevice1"  
Device type: "default"  
Telemetry: [{"humidity": 48}]  
Attributes: [{"SerialNumber": "2430947595"}]  

This will be passed to send_to_storage method of the gateway and after passing storage it will be sent to the platform.  

### Step 5. Create downlink converter

The purpose of the downlink converter is to convert data from the platform to the device format.  
Downlink converter should locate in the same extension folder that we used in [Step 2](#step-2-locate-extensions-folder) (In our case - folder "**serial**" in "**extensions**").  
Our downlink converter file named "**downlink_serial_converter.py**". It should contain class that inherits from the Converter class, and override the convert method.  
You can find complete list of methods of Converter interface - [here](/docs/iot-gateway/custom/methods-and-datatypes/#converter-interface).  

```python

from math import ceil
from struct import pack, unpack

from thingsboard_gateway.connectors.converter import Converter


class SerialDownlinkConverter(Converter):
    """
    Downlink converter is used to convert data that can be sent to device.
    Such as we create downlink converter for each configured device,
    this converter is used to convert data that can be sent to only one device.
    Because config, that we passed to init method, is device specific.
    If your connector can handle multiple devices, you can create one converter for all devices.
    """

    def __init__(self, config, logger):
        self._log = logger
        self.__config = config

    def convert(self, config, data) -> bytes:
        """Method to convert data that can be send to serial port."""
        self._log.debug("Data to convert: %s", data)
        byteorder = self.__config.get('byteorder', 'big').lower()
        if data is None:
            return None
        type_ = config.get("type")
        if type_ == "int":
            length = ceil(data.bit_length() / 8)
            return data.to_bytes(length, byteorder=byteorder)
        elif type_ == "float" or type_ == "double":
            fmt_single_precision = ('>' if byteorder == 'big' else '<') + 'f'
            single_precision_bytes = pack(fmt_single_precision, data)
            if unpack(fmt_single_precision, single_precision_bytes)[0] == data:
                return single_precision_bytes
            fmt_double_precision = ('>' if byteorder == 'big' else '<') + 'd'
            return pack(fmt_double_precision, data)
        return data.encode("UTF-8")

```
{: .copy-code.expandable-20}

### Step 5. Include Connector into main Gateway configuration file

To add the serial connector to the gateway, we need add following lines into section connectors tb_gateway.json file.  
**Note: In case of using remote configuration feature, with UI configuration part until version 3.7.0 of the gateway you should use "custom" instead of "serial" folder and type field in the configuration.**  

```json
{
  "name": "Serial Connector",
  "type": "serial",
  "configuration": "custom_serial.json",
  "class": "SerialConnector"
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
Default locations of logs folder depending on installation option:  
Docker compose - "tb-gw-logs" volume  
Daemon - "/var/log/thingsboard-gateway/"  
Python module (pip) - "./logs/"  

### Step 6. Check a result on the ThingsBoard instance

To check the result, you should connect device, and go to the ThingsBoard UI into "Devices" tab.  
If device connected correctly and has sent some data, you will see device with a name - "SerialDevice1".  
To check the data - open device and go to the telemetry tab.  
You should see the telemetry from config (humidity) with some value 48 (Value from example, your value can be different).  


## Custom connector methods reference

Required methods for custom connector, that may be called by the gateway:  
**\_\_init\_\_** -- called on creating object (In example used for loading converters, saving data from configs to object variables and creating serial ports objects).  
**open** -- called to start connector.  
**get_name** -- called to get name of connector.  
**get_type** -- called to get type of connector, in our case - *serial*.  
**is_connected** -- called to check the connection to devices.  
**is_stopped** -- called to check the state of connector.  
**get_config** -- called to get configuration of connector, expected to return dictionary with data from configuration, passed to constructor.  
**get_id** -- called to get id of connector, expected to return string with id from configuration, passed to constructor.  
**run** -- Main method of thread, must contain an infinite loop and all calls to data receiving/processing functions.  
**close** -- method, that has being called when gateway stops and should contain processing of closing connection/ports etc.  
**on_attributes_update** -- gateway call it when receives attribute updates from platform to device with this connector.  
**server_side_rpc_handler** -- gateway call it when receives RPC requests from platform to devices and connector.  

### Overridden methods of Connector class

##### \_\_init\_\_ method

**Parameters:**

```python
def __init__(self, gateway, config, connector_type):
```

*self* -- current object  
*gateway* -- gateway object (will being used for saving data)   
*config* -- dictionary with data from connector configuration file   
*connector_type* -- type of connector(Need for load converters for this connector type, from general configuration)   

**Note: Configuration contains generated id, name, and other data from configuration file.**  
In example above, we used this method to initialize data with which we will work.  

##### open method

```python
def open(self):
```

*self* -- current object  

Method is used by the core to start the connector. In example above we use this method for starting thread with main loop of connector.  

##### get_name method

```python
def get_name(self):    # Function used for logging, sending data and statistic
```

*self* -- current object  

Method to get connector name.  

##### get_type method

```python
def get_type(self):    # Function used for logging, sending data and statistic
```

*self* -- current object  

Method to get connector type.  

##### is_connected method

```python
def is_connected(self):    # Function for checking connection state
```

*self* -- current object  

Method for check current connection state.  

##### is_stopped method

```python
def is_stopped(self):    # Function for checking state of connector
```

*self* -- current object  

Method for check current state of connector.  

##### get_config method

```python
def get_config(self):    # Function for getting configuration of connector
```

*self* -- current object  

Method for getting configuration of connector.  

##### get_id method

```python
def get_id(self):    # Function for getting id of connector
```

*self* -- current object  

Method for getting id of connector. Id is generated by the gateway and passed as a part of configuration, with key "id".  

##### run method

Method from threading module, that being called after initializing of gateway. 

**Parameters:**

```python
def run(self):
```
*self* -- current object.  


In example, we use this method for connection to devices, read data from them and run converter  

##### close method

```python
def close(self):
```
*self* -- current object.

This method is used by the core to stop the connector. In example, we use this method for stopping all devices and closing all connections.    

##### on_attributes_update method

Method is being called by core when gateway receive attribute updates from platform.  

```python
def on_attributes_update_method(self, content):
```
*self* -- current object.  
*content* -- dictionary with data from the platform.  

Example of content:

```python
{"device": "SerialDevice1", "data": {"attr1": 25}}
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

Method is being called by core when gateway receive RPC request from platform.  

```python
def server_side_rpc_handler(self, content):
```
*self* -- current object.  
*content* -- dictionary with data from the platform.  

Example of content:  

```python
{"device": "SerialDevice1", "data": {"id": 1, "method": "toggle_gpio", "params": {"pin":1}}}
```

There are 2 types of rpc requests processing available - with response and without it.  

After processing request you should just use following gateway method:  
```python 
self.__gateway.send_rpc_reply(device, req_id, content, wait_for_publish, quality_of_service)
```
Where:  
*device* - String with device name.  
*req_id* - Id of RPC request from the platform.  
*content* or *success* - depends on type of rpc:  
 - If without response:
   success = True
 - If with response in content should be any dictionary with content that you want send to the platform as response.
*wait_for_publish* - (Optional) Boolean, if True, gateway will wait for MQTT message acknowledge from the platform, if quality of service >= 1.  
*quality_of_service* - (Optional) Integer, quality of service for MQTT message, that will be sent to the platform.

### Additional internal serial connector methods

##### \_\_load_devices method

Method to create devices objects using configuration file and create converters for them.  

```python
def __load_devices(self):
```

*self* -- current object.  

In example above we use this method to create SerialDevice objects and load converters for them.  
It allows us to easily manage devices, their connections and data processing.  

##### \_\_start_devices method

Method to start devices.  

```python
def __start_devices(self):
```

*self* -- current object.

In example above we use this method to start all devices, that we created in __load_devices method.  
Manages initial state of connector connection to devices.  

## Custom converter methods reference

You should implement following methods:  
**\_\_init\_\_** -- called on creating object.  
**convert** -- Method for conversion data from device format to platform format or vice versa, depends on converter type.  

##### \_\_init\_\_ method

**Parameters:**

```python
def __init__(self, config, logger):
```

*self* -- current object.  
*config* -- dictionary with data from connector configuration file.  
*logger* -- logger object, that you can use for logging, created by connector.  

In the example above, we use this method to load configuration data and create logger object for logging.  

##### convert method

This method is used for conversion data from device format to platform format or vice versa, depends on converter type.  

**Parameters:**

```python
def convert(self, config, data):
```
*self* -- current object.  
*config* -- configuration section for this device from connector configuration file.  
*data* -- data from a device or platform, that should be converted.  

###### Uplink converter
This method should convert data from device format to platform format.  
It is a good practice to return [ConvertedData](/docs/iot-gateway/custom/methods-and-datatypes/#converteddata) object that contains device name, device type, telemetry and attributes data.  

Example of data that should be returned in uplink converter:  
ConvertedData object with following data:  
Device name: "SerialDevice1"  
Device type: "default"  
Telemetry: [{"humidity": 48}]  
Attributes: {"SerialNumber": "2430947595"}  

###### Downlink converter
This method should convert data from platform format to device format.  
In current case it should return bytes object with data that should be sent to the device.  

Example of data that should be returned in downlink converter for serial connector:  
```python
b'downlink data'
```
