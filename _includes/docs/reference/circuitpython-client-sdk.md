* TOC
{:toc}

### Overview

The [CircuitPython Client SDK](https://github.com/thingsboard/CircuitPython_thingsboard-client-sdk) is a software
development kit for client-side integration of your CircuitPython projects. [CircuitPython](https://circuitpython.org/) 
is a simplified version of MicroPython designed to be easy to use on microcontrollers. 
It allows you to connect your CircuitPython devices to ThingsBoard using MQTT protocol and send telemetry data, 
attributes, and receive RPC calls. It provides a clean, developer-friendly API for connecting 
to ThingsBoard and exchanging data, making it easier to integrate CircuitPython devices with the platform.

CircuitPython Client SDK supports the following features:

- Connecting to ThingsBoard using MQTT protocol.
- Sending attributes to ThingsBoard.
- Sending telemetry data to ThingsBoard.
- Receiving RPC calls from ThingsBoard.
- Request client and shared attributes from ThingsBoard.
- Subscribing to attribute updates from ThingsBoard.
- Device claiming.

### Installation

First you need to have a CircuitPython compatible device and set up your development environment. You can follow the
[CircuitPython getting started guide](https://learn.adafruit.com/welcome-to-circuitpython) to get everything ready.
To install the CircuitPython Client SDK, you can use the 
[circup](https://learn.adafruit.com/keep-your-circuitpython-libraries-on-devices-up-to-date-with-circup/overview) package manager. 
Run the following command in your terminal:

```bash
circup install thingsboard-circuitpython-client-sdk
```
{: .copy-code}

In case you are having issues with `circup install` command, you can 
try to install it using [Web-Workflow](https://adafruit-playground.com/u/tyeth/pages/using-circup-with-web-workflow):

```bash
circup --host <your_device_ip> --password <your_password> install thingsboard-circuitpython-client-sdk
```
{: .copy-code}

### Methods

#### Introduction

The CircuitPython Client SDK has a `TBDeviceMqttClient` class that provides methods for connecting to ThingsBoard and
sending data.

This class is designed to be simple to use and easy to understand for developers who are new to CircuitPython or
ThingsBoard.

#### connect

Connects to ThingsBoard using MQTT protocol. This method should be called before sending any data to ThingsBoard.
Credentials for connecting to ThingsBoard should be provided when creating an instance of the `TBDeviceMqttClient` 
class. When you call the `connect` method, `self.connected` property of the client will be set to `True`.

**Method Syntax**

`client.connect()`

**Example usage**

```python
# Default connecting
client.connect()

# Connecting and waiting for the connection result
response = client.connect()
```
{: .copy-code}

#### disconnect

Disconnects from ThingsBoard. This method can be called after connecting to ThingsBoard. It is recommended to call 
this method when you no longer need to send data to ThingsBoard or when you want to free up resources. After calling 
this method, you will need to call the [connect](/docs/reference/circuitpython-client-sdk/#connect) method again to send 
data to ThingsBoard. When you call the `disconnect` method, `self.connected` property of the client will be set 
to `False`.

**Method Syntax**

`client.disconnect()`

**Example usage**

```python
client.connect()

# some tasks with ThingsBoard

client.disconnect()
```
{: .copy-code}

#### send_attributes

Sends attributes to ThingsBoard. This method can be called after connecting to ThingsBoard. Method supports sending
attributes in key-value pairs.

**Method Syntax**

`client.send_attributes(data)`

**Arguments**

| **Arguments** | **Description**                                                 |
|:--------------|:----------------------------------------------------------------|
| data          | (Required) Data that will be sent as attributes to ThingsBoard. |
| ---           |                                                                 |

**Example usage**

```python
attributes = {"sensorModel": "DHT-22", "attribute_2": "value"}
client.send_attributes(attributes)
```
{: .copy-code}

#### send_telemetry

Sends telemetry data to ThingsBoard. This method can be called after connecting to ThingsBoard. Method supports 
sending telemetry data in different formats, key-value pairs, and lists. Also, it supports sending telemetry data 
grouped by timestamp, which is useful for sending historical data to ThingsBoard.

**Method Syntax**

`client.send_telemetry(data)`

**Arguments**

| **Arguments** | **Description**                                                  |
|:--------------|:-----------------------------------------------------------------|
| data          | (Required) Data that will be sent as a telemetry to ThingsBoard. |
| ---           |                                                                  |

**Example usage**

```python
# Sending telemetry data in dictionary format
telemetry = {"temperature": 25.5, "humidity": 60}
client.send_telemetry(telemetry)

# Sending telemetry data grouped by timestamps
from time import time
telemetry = [{"ts": 1451649600000, "values": {"temperature": 42.2, "humidity": 71}},
             {"ts": 1451649601000, "values": {"temperature": 42.3, "humidity": 72}}]
client.send_telemetry(telemetry)
```
{: .copy-code}

#### request_attributes

Requests client and shared attributes from ThingsBoard. This method can be called after connecting to ThingsBoard.
Method supports requesting both client and shared attributes. You can specify which attributes you want to request by 
providing a list of attribute keys. If requested attributes are received from ThingsBoard, the provided callback 
function will be called with the result. If requested attributes are not found on ThingsBoard, the callback function 
will be called with empty result.

**Method Syntax**

`client.request_attributes(client_keys=None, shared_keys=None, callback=None)`

**Arguments**

| **Arguments** | **Description**                                                                                                                                                                                                                                                       |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| client_keys   | (Optional) List of client attribute keys to request from ThingsBoard.                                                                                                                                                                                                 |
| shared_keys   | (Optional) List of shared attribute keys to request from ThingsBoard.                                                                                                                                                                                                 |
| callback      | (Optional) Callback function that will be called when the requested attributes are received from ThingsBoard. The callback function should accept two arguments: `result` and `exception`, which will contain the requested attributes.                               |
| ---           |                                                                                                                                                                                                                                                                       |

**Example usage**

```python
def on_attributes_change(result, exception=None):
    # Callback is called when the attributes response arrives
    if exception is not None:
        print("Exception:", exception)
    else:
        print("Attributes response:", result)


# Request client/shared attributes by keys (your SDK forms attributes/request/<id>)
client.request_attributes(client_keys=["atr1", "atr2"], callback=on_attributes_change)
```
{: .copy-code}

#### claim_device

Use this method to trigger the device claiming process. By passing a unique secret 
key, the device is automatically linked to the user’s account. This simplifies the onboarding experience, as users 
can activate their hardware without needing platform-level permissions.

More information about device claiming can be found in
the [Device claiming](/docs/user-guide/claiming-devices/) section of the documentation.

**Method Syntax**

`client.claim_device(secret_key, duration_ms=None)`

**Arguments**

| **Arguments** | **Description**                                                                                                                                                            |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| secret_key    | (Required) Secret key that will be used to claim the device on ThingsBoard.                                                                                                |
| duration_ms   | (Optional) Duration in milliseconds for which the claim code will be valid. If not provided, the claim code will be valid indefinitely until it is used to claim a device. |
| ---           |                                                                                                                                                                            |

**Example usage**

```python
# Claiming a device with a claim code that will be valid indefinitely until it is used to claim a device
client.claim_device("my_claim_code")

# Claiming a device with a claim code that will be valid for 60 seconds
client.claim_device("my_claim_code", duration_ms=60000)
```
{: .copy-code}

#### subscribe_to_attribute

Subscribes to attribute updates from ThingsBoard. You can specify which shared attribute you want to subscribe to by 
providing an attribute key. If subscribed attribute value is updated, the provided callback function will be 
called with the corresponding attribute value.

Method will return a subscription ID that can be used to unsubscribe from attribute updates using 
the [unsubscribe_from_attribute](/docs/reference/circuitpython-client-sdk/#unsubscribe_from_attribute) method.

**Method Syntax**

`client.subscribe_to_attribute(key, callback)`

**Arguments**

| **Arguments** | **Description**                                                                                                                                                                                                        |
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key           | (Required) Shared attribute key to subscribe to for updates from ThingsBoard.                                                                                                                                          |
| callback      | (Required) A user-defined function triggered whenever a subscribed attribute is updated on ThingsBoard. The callback must accept two parameters: result (the updated data dictionary) and *args (additional metadata). |
| ---           |                                                                                                                                                                                                                        |

**Example usage**

```python
def callback(result, *args):
    # Called when subscribed attribute update arrive
    print("Received data: %r", result)


sub_id = client.subscribe_to_attribute("frequency", callback)
```
{: .copy-code}

#### subscribe_to_all_attributes

Subscribes to all shared attribute updates from ThingsBoard. Whenever any shared attribute is modified on the server, 
the SDK triggers the designated callback function, passing the updated data as the result.

Method will return a subscription ID that can be used to unsubscribe from attribute updates using 
the [unsubscribe_from_attribute](/docs/reference/circuitpython-client-sdk/#unsubscribe_from_attribute) method.

**Method Syntax**

`client.subscribe_to_all_attributes(callback)`

**Arguments**

| **Arguments** | **Description**                                                                                                                                                                               |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| callback      | (Required) Triggers when any shared attribute change is pushed from the server. The callback receives a result object containing the modified key-value pairs and *args for extended context. |
| ---           |                                                                                                                                                                                               |

**Example usage**

```python
def callback(result, *args):
    print("Received data: %r", result)


sub_id = client.subscribe_to_all_attributes(callback)
```
{: .copy-code}

#### unsubscribe_from_attribute

Terminates an existing subscription for shared attribute updates. This method requires the `subscription_id` returned 
by the original call to [subscribe_to_attribute](/docs/reference/circuitpython-client-sdk/#subscribe_to_attribute) or 
[subscribe_to_all_attributes](/docs/reference/circuitpython-client-sdk/#subscribe_to_all_attributes). Once unsubscribed, 
the associated callback will no longer trigger upon server-side changes.

**Method Syntax**

`client.unsubscribe_from_attribute(subscription_id)`

**Arguments**

| **Arguments**   | **Description**                                                                                                                                                                                                                                                                                     |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| subscription_id | (Required) Subscription ID returned when subscribing to attribute updates using the [subscribe_to_attribute](/docs/reference/circuitpython-client-sdk/#subscribe_to_attribute) or [subscribe_to_all_attributes](/docs/reference/circuitpython-client-sdk/#subscribe_to_all_attributes) methods.         |
| ---             |                                                                                                                                                                                                                                                                                                     |

**Example usage**

```python
# Subscribing to attribute updates
def callback(result, *args):
    print("Received data: %r", result)


sub_id = client.subscribe_to_attribute("frequency", callback)
# Unsubscribing from attribute updates
client.unsubscribe_from_attribute(sub_id)
```
{: .copy-code}

#### set_server_side_rpc_request_handler

Configures a handler for [Remote Procedure Call](/docs/user-guide/rpc/) requests initiated from ThingsBoard. This 
method should be invoked after establishing a connection. When a request is received, the SDK executes the designated 
handler, passing the following arguments:

- `request_id` - a unique identifier for the specific RPC request, required for sending a response.
- `request_body` - a dictionary containing the command details, typically including the method name and params.

**Method Syntax**

`client.set_server_side_rpc_request_handler(handler)`

**Arguments**

| **Arguments** | **Description**                                                                                                                                                                                                         |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| handler       | Defines the logic to execute when ThingsBoard initiates a remote command. The function receives two parameters: request_id, representing the transaction ID, and request_body, containing the specific request payload. |
| ---           |                                                                                                                                                                                                                         |

**Example usage**

```python
def handler(request_id, request_body):
    print("Received RPC request with ID: %s and body: %r", request_id, request_body)


client.set_server_side_rpc_request_handler(handler)
```
{: .copy-code}

#### send_rpc_reply

Responds to an incoming RPC request from ThingsBoard. Use this method inside your RPC handler to return data to the 
server. It requires the `request_id` from the initial request and a `response` object containing the result. Failing to 
call this method may result in `request timeout` errors on the ThingsBoard dashboard.

**Method Syntax**

`client.send_rpc_reply(request_id, response)`

**Arguments**

| **Arguments** | **Description**                                                                 |
|:--------------|:--------------------------------------------------------------------------------|
| request_id    | (Required) ID of the received RPC request that will be used to send a reply to. |
| response      | (Required) Data that will be sent as a reply to the received RPC.               |
| ---           |                                                                                 |

**Example usage**

```python
def handler(request_id, request_body):
    print("Received RPC request with ID: %s and body: %r", request_id, request_body)
    client.send_rpc_reply(request_id, {"status": "success"})


client.set_server_side_rpc_request_handler(handler)
```
{: .copy-code}

#### send_rpc_reply

Responds to an incoming RPC request from ThingsBoard. Use this method inside your RPC handler to return data to the 
server. It requires the `request_id` from the initial request and a `response` object containing the result. Failing to 
call this method may result in `request timeout` errors on the ThingsBoard dashboard.

**Method Syntax**

`client.send_rpc_reply(request_id, response)`

**Arguments**

| **Arguments** | **Description**                                                                 |
|:--------------|:--------------------------------------------------------------------------------|
| request_id    | (Required) ID of the received RPC request that will be used to send a reply to. |
| response      | (Required) Data that will be sent as a reply to the received RPC.               |
| ---           |                                                                                 |

**Example usage**

```python
def handler(request_id, request_body):
    print("Received RPC request with ID: %s and body: %r", request_id, request_body)
    client.send_rpc_reply(request_id, {"status": "success"})


client.set_server_side_rpc_request_handler(handler)
```
{: .copy-code}

### Concepts

#### Introduction

In this section, we’ll cover the core concepts of the CircuitPython Client SDK:

- Connecting your device to ThingsBoard over MQTT.
- The non-blocking loop.
- Telemetry, attributes and data flow.
- Attributes requests.
- Attributes updates.
- Handling server-side RPC.

Let's review these concepts of the CircuitPython Client SDK:

#### Connecting to ThingsBoard

To connect to ThingsBoard using the CircuitPython Client SDK, instantiate the `TBDeviceMqttClient` class by providing 
your server credentials: host, port, and access token. Once the client is initialized, invoke the 
[connect()](/docs/reference/circuitpython-client-sdk/#connect) method to establish the MQTT session. After a successful 
connection, the device is ready to transmit telemetry or subscribe to updates. We recommend the following minimal code 
snippet to use:

```python
import time

import wifi  # CircuitPython Wi-Fi module

from tb_device_mqtt import TBDeviceMqttClient  # ThingsBoard MQTT client wrapper (your SDK)

# Quick sanity-check that Wi-Fi is up before using MQTT
print("WiFi connected:", wifi.radio.connected)
print("IP:", wifi.radio.ipv4_address)

# ThingsBoard connection settings
HOST = "YOUR_HOST"  # e.g. "thingsboard.cloud" or "192.168.1.10"
PORT = "YOUR_PORT"  # e.g. 1883 (use an int)
TOKEN = "YOUR_ACCESS_TOKEN"  # device access token from ThingsBoard

# Create MQTT client instance
client = TBDeviceMqttClient(host=HOST, port=PORT, access_token=TOKEN)
print("Connecting...")
client.connect()  # open MQTT connection to ThingsBoard
time.sleep(1)  # small delay to ensure connection stabilizes on some boards

while True:
# some tasks with ThingsBoard
```
{: .copy-code}

Before communicating with the ThingsBoard, make sure your device is connected to the network. The above code assumes that the Wi-Fi connection is already established.
More about how you can establish Wi-Fi connection can be found in the [Networking in CircuitPython](https://learn.adafruit.com/networking-in-circuitpython/networking-with-the-wifi-module).

- First we make sure that Wi-Fi is connected and print the device's IP address. This is important because the MQTT client needs an active network connection to communicate with ThingsBoard.
- The `TBDeviceMqttClient` is the primary class. It requires ThingsBoard host and a unique Access Token generated in the
  ThingsBoard device page.
- We create the MQTT client instance using these connection settings, so the SDK knows where to connect and how to identify the device.
- After calling client.connect(), we add a short delay to give the connection time to stabilize on some boards.

#### The Non-Blocking Loop

The most critical part of the SDK implementation is the main loop. In CircuitPython, using `time.sleep()` 
helps reduce CPU usage while waiting for events, but it also pauses your code. 
To keep the device responsive to incoming MQTT messages, you should regularly poll the client.

`client.check_for_msg()` method is the "heartbeat" of your communication:

- It checks the MQTT buffer for incoming messages.
- It processes any received messages and triggers the appropriate callbacks (for example, RPC requests or attribute updates).

#### Telemetry, Attributes and Data Flow

The SDK provides methods to send telemetry data to ThingsBoard. You can use the [send_telemetry()](/docs/reference/circuitpython-client-sdk/#send_telemetry) method to send
data in various formats, including key-value pairs and lists. The SDK also supports sending telemetry data grouped by 
timestamp, which is useful for sending historical data to ThingsBoard.

```python
# Main loop (non-blocking)
while True:
    # Non-blocking: poll for incoming MQTT packets, then continue doing other work
    client.check_for_msg()
    client.send_telemetry({"CPU": 12.0})
    client.send_attributes({"status": "ok"})
    time.sleep(0.05)  # small delay to prevent overwhelming the CPU and allow other tasks to run
```
{: .copy-code}

By placing this inside the main loop, the device continuously streams its state. Because we use a non-blocking approach,
the device can simultaneously send telemetry and receive RPC commands without one interrupting the other.

#### Attributes requests

The SDK provides methods to work with device attributes in ThingsBoard. You can use the 
[request_attributes()](/docs/reference/circuitpython-client-sdk/#request_attributes) method to request client and/or shared attributes by key. 
When ThingsBoard responds, the SDK calls your callback function with the received data (or an error).

```python
TIMEOUT = 20  # how long we keep pumping MQTT loop (seconds)


def on_attributes_change(result, exception=None):
    # Callback is called when the attributes response arrives
    if exception is not None:
        print("Exception:", exception)
    else:
        print("Attributes response:", result)


# Request client/shared attributes by keys (your SDK forms attributes/request/<id>)
client.request_attributes(client_keys=["atr1", "atr2"], callback=on_attributes_change)

# IMPORTANT: CircuitPython needs a loop to receive/process MQTT packets
deadline = time.monotonic() + TIMEOUT
while time.monotonic() < deadline:
    client.check_for_msg()  # wraps MiniMQTT.loop() -> triggers callbacks
    time.sleep(0.05)  # small sleep to reduce CPU usagesks to run
```
{: .copy-code}

By placing this polling logic inside your main loop, the device remains responsive: it can request/receive attributes 
and still handle other MQTT events (such as RPC calls) without blocking the whole application.

- We define a callback (`on_attributes_change`) that will be triggered when the attributes response arrives.
- We send an attributes request for specific keys ("atr1", "atr2"). The SDK publishes a request message and waits for the response from ThingsBoard.
- The loop runs only for a limited time (`TIMEOUT`) using `time.monotonic(`), so the device does not wait forever if no response is received.

#### Attributes updates

The SDK provides methods to subscribe to attribute updates. You can use the 
[subscribe_to_attribute()](/docs/reference/circuitpython-client-sdk/#subscribe_to_attribute) method to 
subscribe to updates of a client and/or shared attribute by key.
When ThingsBoard publishes an update for that attribute, the SDK calls your callback function with the received data (or an error).

```python
TIMEOUT = 20  # how long we keep pumping MQTT loop (seconds)


def callback(result, *args):  # noqa: F841
    # Called when subscribed attribute update arrives
    # (extra args may contain metadata depending on your SDK design)
    print("Received data:", result)


# Subscribe to updates of a single attribute key (e.g. shared attribute "frequency")
sub_id = client.subscribe_to_attribute("frequency", callback)  # returns subscription id (optional)

# IMPORTANT: keep looping so incoming MQTT messages are processed
deadline = time.monotonic() + TIMEOUT
while time.monotonic() < deadline:
    client.check_for_msg()  # wraps MiniMQTT.loop() -> triggers callbacks
    time.sleep(0.05)  # small sleep to reduce CPU usage
```
{: .copy-code}

By placing this polling logic inside your main loop, the device remains responsive: it can request/receive attributes 
and still handle other MQTT events (such as RPC calls) without blocking the whole application.

- We define a callback (`callback`) that will be triggered each time a subscribed attribute update arrives.
- We subscribe to updates for a single attribute key (for example, a shared attribute "frequency"). The method may return a subscription id that can be used later to manage the subscription.
- The loop runs only for a limited time (`TIMEOUT`) using `time.monotonic()`, so the example does not run forever.

#### Handling Server-Side RPC

[Remote Procedure Calls](/docs/user-guide/rpc/) allow ThingsBoard to send commands to your device 
(e.g., "Turn on the LED" or "Reset"). To handle these commands, you need to set a handler function using
the [set_server_side_rpc_request_handler](/docs/reference/circuitpython-client-sdk/#set_server_side_rpc_request_handler)
method. This handler will be called whenever a server-side RPC request is received from ThingsBoard. The handler
function should accept two arguments: `request_id` and `request_body`, which will contain the ID of the received RPC
request and the data of the received RPC request, respectively.

```python
# This callback will be called when an RPC request is received from ThingsBoard.
def on_server_side_rpc_request(request_id, request_body):
    # request_id: numeric id from the MQTT topic
    # request_body: decoded JSON dict, typically {"method": "...", "params": ...}
    print("[RPC] id:", request_id, "body:", request_body)

    client.send_rpc_reply(request_id, "ok")


client.set_server_side_rpc_request_handler(on_server_side_rpc_request)

while True:
    # Non-blocking: poll for incoming MQTT packets
    client.check_for_msg()
    time.sleep(0.1)  # small delay to avoid busy-waiting (adjust as need)
```
{: .copy-code}

In the SDK, we don't "wait" for a command, instead we provide a callback function (`on_server_side_rpc_request`):

- Tells the client which function to run when a RPC arrives using [set_server_side_rpc_request_handler()](/docs/reference/circuitpython-client-sdk/#set_server_side_rpc_request_handler).
- When a RPC arrives, the SDK automatically passes the `request_id` (used for the reply) and the `request_body` to your function.
- The [send_rpc_reply()](/docs/reference/circuitpython-client-sdk/#send_rpc_reply) informs the server that the RPC was received and processed
  successfully.

### Examples

You can find more examples of using the CircuitPython Client SDK in
the [examples](https://github.com/thingsboard/CircuitPython_thingsboard-client-sdk/tree/main/examples) directory of the
[thingsboard-circuitpython-client-sdk](https://github.com/thingsboard/CircuitPython_thingsboard-client-sdk) repository on
GitHub.

### Troubleshooting

- **Low memory, unstable SDK behavior**

  This usually happens when the board has limited RAM for CircuitPython, or when your application (and its dependencies)
  uses too much memory.
  Try reducing memory usage in your code (for example, avoid large allocations and keep imports minimal). We also
  recommend reading this guide:
  [CircuitPython memory saving](https://github.com/kmatch98/CircuitPython_memory_saving).

- **Errors with circup installation**

  On some boards, `circup install` may fail when using a USB/serial workflow. In this case, you can install
  libraries using [Web-Workflow](https://adafruit-playground.com/u/tyeth/pages/using-circup-with-web-workflow) instead.
  This method lets you target the device directly over the network by specifying the device IP (host) and Web Workflow
  password, which often resolves upload/permission issues.

  ```bash
  circup --host <your_device_ip> --password <your_password> install thingsboard-circuitpython-client-sdk
  ```
  {: .copy-code}
  