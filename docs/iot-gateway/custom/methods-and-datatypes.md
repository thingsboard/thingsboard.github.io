---
layout: docwithnav-gw
title: IoT Gateway service methods and data types

---


* TOC
{:toc}

## Methods

### Core methods (TBGatewayService)

Useful methods, that may be helpful for custom connector implementation, from the gateway service class.  
*/thingsboard_gateway/gateway/tb_gateway_service.py*

#### send_to_storage

This method allows you to send data to the ThingsBoard instance.

|Argument|Description|
|-|-|
| **connector_name** | Name of the connector from which the data is sent. |
| **connector_id** | UUID of the connector from which the data is sent. |
| **data** | ConvertedData object with data from the device. |

Returns True if data was sent successfully, otherwise False.

#### send_rpc_reply

This method allows you to send a response to the RPC request from the ThingsBoard instance.

| Argument | Default value | Description |  
|-|---------------|-|  
| **device** | -             | Name of the device from which the RPC request was received. |  
| **req_id** | -             | Integer identifier of the RPC request. |  
| **content** | -             | Dictionary with data that will be sent as a response to the RPC request. |  
| **success_sent** | -             | Boolean value that indicates whether the response was sent successfully. |  
| **wait_for_publish** | -             | Boolean value that indicates should the gateways for response publish message acknowledge or can process next messages. |  
| **quality_of_service** | 0             | Quality of service for the response message. |  
| **to_connector_rpc** | False         | Boolean value that indicates whether the original request was processed by connector itself or send to device. |  

No return value.

#### add_device

This method allows you to add a device to the gateway, and it sends "CONNECT" to the ThingsBoard instance.

| Argument | Default value | Description |
|-|-|-|
| **device_name** | - | Name of the device. |
| **content** | - | Dictionary, that should contains key "connector" and connector instance, as a value. Will be used to set connectorName and connectorType parameters for created device. |
| **device_type** | "default" | Type of the device. |

Returns True if the device was added successfully, otherwise False.

#### del_device

This method allows you to delete a device from the gateway, and it sends "DISCONNECT" to the ThingsBoard instance.

| Argument | Default value | Description |
|-|-|-|
| **device_name** | - | Name of the device. |

No return value.

### Utility methods (TBUtility)

Useful methods, that may be helpful for custom connector implementation, from the utility class.
*/thingsboard_gateway/tb_utility/tb_utility.py*

#### install_package

This method allows you to install a package from the PyPi repository in runtime and load it into current context.

| Argument | Default value | Description                                                                        |
|-|-|-|
| **package** | - | Name of the package. |
| **version** | upgrade | Version of the package. "upgrade" - the latest available version will be installed. |
| **force_install** | False | Boolean value that indicates should the package be installed if it is already installed. |

Returns result of calling check_call method from subprocess module.

Usage example:

```python
from thingsboard_gateway.tb_utility.tb_utility import TBUtility
try:
    from pyserial import serial
except ImportError:
    TBUtility.install_package("pyserial")
    from pyserial import serial
```

#### convert_key_to_datapoint_key

This method allows you to convert string key, report strategy config for device, configuration for key to DatapointKey.  
It is required to use DatapointKey object to create ConvertedData object.

| Argument | Description |
|-|-|
| **key** | Final string represantation of key. |
| **device_report_strategy** | ReportStrategyConfig object for device. |
| **key_config** | Configuration for this key, may contain report strategy config for key. |
| **logger** | Optional, in case when there is no report strategy configuration found for key - trace log will be displayed. |

You can find more information about [ReportStrategyConfig](#reportstrategyconfig) object or [ConvertedData](#converteddata) object in data types description section.

## Data types

This section contains explanation for objects, used in the gateway.

### ConvertedData

This object is used to save converted data to storage, using [send_to_storage](#send_to_storage) method.  
Usually creates in convert method of converter.

| Field | Description                                        |
|-|----------------------------------------------------|
| **device_name** | Name for device.                                   |
| **device_type** | Device profile name for device.                    |
| **telemetry** | List of [TelemetryEntry](#telemetryentry) objects. |
| **attributes** | [Attributes](#attributes) object.                  |

ConvertedData also contains service fields, like metadata - that allows us to use latency debug mode and ts_index that act like a cache for telemetry entries with ts.

ConvertedData constructor:

| Argument | Default value | Description |
|-|-|-|
| **device_name** | - | Name for device. |
| **device_type** | *default* | Device profile name for device. |

ConvertedData object creation example:

```python
converted_data = ConvertedData("CustomSerialDevice", "CustomSerialDeviceType")
```

#### ConvertedData methods:

##### add_to_telemetry
This method allows you to add telemetry entry or telemetry entry list to the telemetry list in the ConvertedData object.  
This method will analyze incoming telemetry and group it by timestamp in telemetry list.

There are several possible ways to add telemetry to the ConvertedData object:
1. Using created [TelemetryEntry](#telemetryentry) with [DatapointKey](#datapointkey) object via [TBUtility.convert_key_to_datapoint_key(...) method](#convert_key_to_datapoint_key) for telemetry key.   
   **Highly recommended, to have ability to use hierarchical report strategies for keys.**

   | Argument         | Description                                  |
       |------------------|----------------------------------------------|
   | **key_or_entry** | [DatapointKey](#datapointkey) for telemetry. |
   | **value**        | Value for telemetry.                         |

   Example of usage:

    ```python
    device_report_strategy = ReportStrategyConfig({"reportStrategy": {"type":"ON_RECEIVED"}})   # Create ReportStrategyConfig object for device, for demonstration.
    key_config = {"key": "$[:8]", "type": "string", "fromByte": 8, "toByte": -1, "reportStrategy": {"type": "ON_CHANGE_OR_REPORT_PERIOD", "reportPeriod": "60000"}}   # Configuration for key for demonstration.

    received_key = "humidity"   # Received key for telemetry. (Such as key in config may be some kind of expression, we will use string key, like it was already formatted.)
    received_value = 48   # Received value for telemetry.

    humidity_datapoint_key = TBUtility.convert_key_to_datapoint_key(received_key, device_report_strategy, key_config)   # Convert key to DatapointKey object.
    humidity_telemetry_entry = TelemetryEntry({humidity_datapoint_key: received_value}, ts=123456789000)   # Create TelemetryEntry object with values and timestamp. For demonstration we use unreal timestamp in milliseconds.
    converted_data.add_to_telemetry(humidity_datapoint_key, received_value)   # Add telemetry to the telemetry list.
    ```

2. Using [DatapointKey](#datapointkey) object for telemetry key.

   | Argument | Description |
   |-|-|
   | **telemetry_entry** | [TelemetryEntry](#telemetryentry) object or list of [TelemetryEntry](#telemetryentry) objects. |

   Usage example:

    ```python
    humidity_datapoint_key = DatapointKey("humidity")   # Create DatapointKey object for telemetry key, without report strategy configuration.
    telemetry_entry_with_humidity = TelemetryEntry({humidity_datapoint_key: 48})   # Create TelemetryEntry object with values, timestamp will be set to current timestamp internally.
    converted_data.add_to_telemetry(telemetry_entry_with_humidity)   # Add telemetry entry to the telemetry list.
    ```

##### add_to_attributes
This method allows you to add attribute to Attributes object in the ConvertedData object.

There are several possible ways to add attributes to the ConvertedData object:
1. Using created DatapointKey object via [TBUtility.convert_key_to_datapoint_key(...) method](#convert_key_to_datapoint_key) for attribute key.  
   **Highly recommended, to have ability to use hierarchical report strategies for keys.**

   | Argument         | Description                                  |
       |------------------|----------------------------------------------|
   | **key_or_entry** | [DatapointKey](#datapointkey) for attribute. |
   | **value**        | Value for attribute.                         |

   Example of usage:

    ```python
    device_report_strategy = ReportStrategyConfig({"reportStrategy": {"type":"ON_RECEIVED"}})   # Create ReportStrategyConfig object for device, for demonstration.
    key_config = {"key": "$[:12]", "type": "string", "fromByte": 12, "toByte": -1, "reportStrategy": {"type": "ON_CHANGE_OR_REPORT_PERIOD", "reportPeriod": "60000"}}   # Configuration for key for demonstration.

    received_key = "SerialNumber"   # Received key for attribute. (Such as key in config may be some kind of expression, we will use string key, like it was already formatted.)
    received_value = "24BC94AA95"   # Received value for attribute.

    serial_number_datapoint_key = TBUtility.convert_key_to_datapoint_key(received_key, device_report_strategy, key_config)   # Convert key to DatapointKey object.
    converted_data.add_to_attributes(serial_number_datapoint_key, received_value)   # Add attribute to the attributes list.
    ```
2. Using [DatapointKey](#datapointkey) object for attribute key.

   | Argument         | Description                                  |
       |------------------|----------------------------------------------|
   | **key_or_entry** | [DatapointKey](#datapointkey) for attribute. |
   | **value**        | Value for attribute.                         |

   Example of usage:

    ```python
    serial_number_datapoint_key = DatapointKey("SerialNumber")   # Create DatapointKey object for attribute key, without report strategy configuration.
    converted_data.add_to_attributes(serial_number_datapoint_key, "24BC94AA95")   # Add attribute to the attributes list.
    ```   

3. Using dictionary with key/value pair for attribute.

   | Argument         | Description                              |
       |------------------|------------------------------------------|
   | **key_or_entry** | Dictionary with key/value pair for attributes. |

   Example of usage:

    ```python
    attributes = {"SerialNumber": "24BC94AA95"}   # Create dictionary with key/value pair for attribute.
    converted_data.add_to_attributes(attributes)   # Add attribute to the attributes list.
    ```

4. Using list of dictionaries with key/value pair for attributes.

   | Argument         | Description                              |
       |------------------|------------------------------------------|
   | **key_or_entry** | List of dictionaries with key/value pair for attributes. |

   Example of usage:

    ```python
    attributes = [{"SerialNumber": "24BC94AA95"}, {"FirmwareVersion": "1.0.0"}]   # Create list of dictionaries with key/value pair for attributes.
    converted_data.add_to_attributes(attributes)   # Add attributes to the attributes list.
    ```

5. Using string key and value for attribute.

   | Argument         | Description                              |
       |------------------|------------------------------------------|
   | **key_or_entry** | String key for attribute.                |
   | **value**        | Value for attribute.                     |

   Example of usage:

    ```python
    converted_data.add_to_attributes("SerialNumber", "24BC94AA95")   # Add attribute to the attributes list.
    ```

#### ConvertedData example:

In the example below, we will demonstrate how to create ConvertedData object and add telemetry and attribute to it.  
We will use [TBUtility.convert_key_to_datapoint_key(...) method](#convert_key_to_datapoint_key) for telemetry and attribute keys.  
Main report strategy for device will be "ON_RECEIVED", but we will use different report strategies for each telemetry and attribute keys.

```python
# Preparations for demonstration.
connector_name = "CustomSerialConnector"
connector_id = UUID("10101010-1010-1010-1010-101010101010")
# ...
device_report_strategy = ReportStrategyConfig({"reportStrategy": {"type":"ON_RECEIVED"}})

# Configuration for keys for demonstration.
telemetry_key_config = {"key": "$[:8]", "type": "string", "fromByte": 8, "toByte": 18, "reportStrategy": {"type": "ON_CHANGE_OR_REPORT_PERIOD", "reportPeriod": "60000"}}
attr_key_config = {"key": "$[18:30]", "type": "string", "fromByte": 30, "toByte": -1, "reportStrategy": {"type": "ON_CHANGE"}}

# Received data for demonstration.
device_name = "CustomSerialDevice"
device_type = "CustomSerialDeviceType"
received_telemetry_key = "humidity"
received_telemetry_value = 48
received_key_attr = "SerialNumber"
received_value_attr = "24BC94AA95"

converted_data = ConvertedData(device_name, device_type)   # Create ConvertedData object with device name and device type.

# Convert keys to DatapointKey objects.
telemetry_datapoint_key = TBUtility.convert_key_to_datapoint_key(received_telemetry_key, device_report_strategy, telemetry_key_config)
attribute_datapoint_key = TBUtility.convert_key_to_datapoint_key(received_key_attr, device_report_strategy, attr_key_config)

# Add telemetry to the telemetry list.
converted_data.add_to_telemetry(telemetry_datapoint_key, received_telemetry_value)

# Add attribute to the attributes.
converted_data.add_to_attributes(attribute_datapoint_key, received_value_attr)

# ...

# Send data to the ThingsBoard instance. (gateway is an instance of TBGatewayService, provided to connector on initialization)
gateway.send_to_storage(connector_name, connector_id, converted_data)

```

The result of the example above will be ConvertedData object with telemetry and attribute.  
Data, collected in telemetry and attribute, will be sent to the ThingsBoard instance due to the report strategy configuration.  
In the example, telemetry will be sent to the ThingsBoard instance on change or every 60 seconds, and attribute will be sent only on change.

### Attributes

This is internal object for ConvertedData object, that contains attributes for device.
It is not necessary to create Attributes object directly, it will be created automatically when you add attribute to the ConvertedData object.

| Field | Description |
|-|-|
| **values** | Dictionary with [DatapointKey](#datapointkey)/value pairs for attributes. |


### TelemetryEntry

This object is used to collect telemetry data for device, with timestamps and related keys/values.

| Field | Description                                                                                                   |
|-|---------------------------------------------------------------------------------------------------------------|
| **values** | Dictionary with key/value pairs for telemetry entry.                                                          |
| **ts** | ***Optional***, timestamp for telemetry entry. If **ts** is not provided, it will be set to current timestamp |

Examples of TelemetryEntry object creation:
1. Using DatapointKey object created via [TBUtility.convert_key_to_datapoint_key(...) method](#convert_key_to_datapoint_key) for telemetry key.
   **Highly recommended, to have ability to use hierarchical report strategies for keys.**

    ```python
    device_report_strategy = ReportStrategyConfig({"reportStrategy": {"type":"ON_RECEIVED"}})   # Create ReportStrategyConfig object for device, for demonstration.
    key_config = {"key": "$[:8]", "type": "string", "fromByte": 8, "toByte": -1, "reportStrategy": {"type": "ON_CHANGE_OR_REPORT_PERIOD", "reportPeriod": "60000"}}   # Configuration for key for demonstration.

    received_key = "humidity"   # Received key for telemetry. (Such as key in config may be some kind of expression, we will use string key, like it was already formatted.)
    received_value = 48   # Received value for telemetry.

    humidity_datapoint_key = TBUtility.convert_key_to_datapoint_key(received_key, device_report_strategy, key_config)   # Convert key to DatapointKey object.
    humidity_telemetry_entry = TelemetryEntry({humidity_datapoint_key: received_value}, ts=123456789000)   # Create TelemetryEntry object with values and timestamp. For demonstration we use unreal timestamp in milliseconds.
    ```

2. Using DatapointKey object for telemetry key.

    ```python
    humidity_datapoint_key = DatapointKey("humidity")   # Create DatapointKey object for telemetry key without report strategy configuration.
    humidity_telemetry_entry = TelemetryEntry({humidity_datapoint_key: 48}, ts=123456789000)   # Create TelemetryEntry object with values and timestamp. For demonstration we use unreal timestamp in milliseconds.
    ```

3. Using string key and value for telemetry key.

    ```python
    humidity_telemetry_entry = TelemetryEntry({"humidity": 48})   # Create TelemetryEntry object with values and current timestamp.
    ```

### DatapointKey

This object is used to represent a key for telemetry or attribute with report strategy configuration.

| Field | Description                                                   |
|-|---------------------------------------------------------------|
| **key** | Key for telemetry or attribute.                               |
| **report_strategy** | [ReportStrategyConfig](#reportstrategyconfig) object for key. |

Examples of DatapointKey object creation:
1. Using TBUtility.convert_key_to_datapoint_key(...) method for telemetry key. It will use report configuration from key_config or device_report_strategy.
   **Highly recommended, to have ability to use hierarchical report strategies for keys.**

    ```python
    device_report_strategy = ReportStrategyConfig({"reportStrategy": {"type":"ON_RECEIVED"}})   # Create ReportStrategyConfig object for device, for demonstration.
    key_config = {"key": "$[:8]", "type": "string", "fromByte": 8, "toByte": -1, "reportStrategy": {"type": "ON_CHANGE_OR_REPORT_PERIOD", "reportPeriod": "60000"}}   # Configuration for key for demonstration.

    received_key = "humidity"   # Received key for telemetry. (Such as key in config may be some kind of expression, we will use string key, like it was already formatted.)

    humidity_datapoint_key = TBUtility.convert_key_to_datapoint_key(received_key, device_report_strategy, key_config)   # Convert key to DatapointKey object.
    ```

2. Using ReportStrategyConfig object for telemetry key.

    ```python
    key_report_strategy = ReportStrategyConfig({"reportStrategy": {"type":"ON_RECEIVED"}})   # Create ReportStrategyConfig object for key, for demonstration.
    humidity_datapoint_key = DatapointKey("humidity", key_report_strategy)   # Create DatapointKey object for telemetry key with report strategy configuration.
    ```

3. Using string key for telemetry key without report strategy.

    ```python
    humidity_datapoint_key = DatapointKey("humidity")   # Create DatapointKey object for telemetry key without report strategy configuration.
    ```


### ReportStrategyConfig

This object is a representation of the report strategy configuration.  
It is used to set the report strategy for telemetry or attribute keys on different levels.  
There are next levels for report strategy configuration:
1. **Gateway level** - report strategy for all devices in the gateway. (Set in general configuration)
2. **Connector level** - report strategy for all devices in the connector. (Set in connector configuration)
3. **Device level** - report strategy for all keys in the device. (Set in device configuration)
4. **Key level** - report strategy for the key. (Set in key configuration)

Key level overrides device level, device level overrides connector level, connector level overrides gateway level.

| Field | Description                                                                             |
|-|-----------------------------------------------------------------------------------------|
| **config** | Configuration object that may contain report strategy configuration. (*reportStrategy*) |
| **default_report_strategy_config** | ***Optional***, dictionary with default report strategy configuration. |

If *reportStrategy* is not set in the configuration, the default report strategy will be used.

Examples of ReportStrategyConfig object creation:
1. Using dictionary with report strategy configuration.

    ```python
    report_strategy_config = ReportStrategyConfig({"reportStrategy": {"type":"ON_RECEIVED"}})
    ```
2. Using dictionary with report strategy configuration and default report strategy configuration.

    ```python
    default_report_strategy_config = {"reportStrategy": {"type":"ON_CHANGE"}}
    report_strategy_config = ReportStrategyConfig({"reportStrategy": {"type":"ON_RECEIVED"}}, default_report_strategy_config)
    ```

### Connector interface

This object is used to represent the interface for the connector.  
This object should be inherited by the custom connector class.  
*/thingsboard_gateway/connectors/connector.py*

| Method | Description |
|-|-------------|
| **\_\_init\_\_** | Constructor for the connector. Gateway pass the following arguments: **gateway**, **config**, **connector_type** |
| **open** | Method that will be called to start the connector. |
| **close** | Method to stop the connector. |
| **get_id** | Method to get the connector ID. Conector id stored in config, passed to constructor, with key - **id** |
| **get_name** | Method to get the connector name. Conector name stored in config, passed to constructor, with key - **name** |
| **get_type** | Method to get the connector type. Expected to get connector type, passed to contructor. |
| **get_config** | Method to get the connector configuration. Expected to return connector configuration, passed to constructor. |
| **is_connected** | Method to check if the connector is connected. Expected to return boolean value. |
| **is_stopped** | Method to check if the connector is stopped. Expected to return boolean value. |
| **on_attributes_update** | Method to handle attributes update from the platform instance. |
| **server_side_rpc_handler** | Method to handle RPC requests from the platform instance. |

### Converter interface

This object is used to represent the interface for the converter.
This object should be inherited by the custom converter class.
*/thingsboard_gateway/connectors/converter.py*

| Method | Description                                                                                                     |
|-|-----------------------------------------------------------------------------------------------------------------|
| **\_\_init\_\_** | Constructor for the converter. Depends on realization of connector, but we usually pass: **config**, **logger** |
| **convert** | Method to convert data from or to the device format.                                                            |

#### Converter interface methods
Realization of converter methods depends on it's type - **Uplink** or **Downlink**.

##### Uplink converter convert method

This method is used to convert data from the device to the ThingsBoard instance.  
It is good to return [**ConvertedData**](#converteddata) object(Depends on realization, but send_to_storage method from gateway service expects [**ConvertedData**](#converteddata) object).  

##### Downlink converter convert method

This method is used to convert data from the ThingsBoard instance to the device.  
Incoming data is a dictionary with key/value pairs that represent the data that should be sent to the device.  
This type of converter usually used for converting RPC or attribute updates from the platform instance to the device.  
Returned value may depend on realization of the converter.  
