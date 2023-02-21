Now you are ready to publish telemetry data on behalf of your device. We will use, as mentioned before, the 
“thingsboard-python-client-sdk” library.
Let’s setup our project:

1. Create project folder:

    ```bash
   mkdir orangepi_thingsboard
   ```
   {:.copy-code}

2. Create a python virtual environment:

    ```bash
   python3 -m venv venv
   ```
   {:.copy-code}

3. Activate python virtual environment:

   ```bash
   source venv/bin/activate
   ```
   {:.copy-code}

4. Install packages:

   ```bash
   pip install tb-mqtt-client board digitalio
   ```
   {:.copy-code}

5. Create the main script:

   ```bash
   touch main.py
   ```
   {:.copy-code}

6. Write the following code:

   ```python
   import logging.handlers
   import time
   
   from tb_gateway_mqtt import TBDeviceMqttClient
   import psutil
   logging.basicConfig(level=logging.DEBUG)
   
   client = None
   
   # default blinking period
   period = 1.0
   
   
   # callback function that will call when we will change value of our Shared Attribute
   def attribute_callback(client, result):
        print(client, result)
        # make sure that you paste YOUR shared attribute name
        period = result['blinkingPeriod']
   
   # callback function that will call when we will send RPC
   def rpc_callback(id, request_body):
       # request body contains method and other parameters
       print(request_body)
       method = request_body["method"]
       if method == 'getTelemetry':
           attributes, telemetry = get_data()
           client.send_attributes(attributes)
           client.send_telemetry(telemetry)
       else:
           print('Unknown method: ' + method)
   
   
   def get_data():
       attributes = {
           'ip_address': psutil.net_if_addrs()['en0'][0][1],
           'macaddress': psutil.net_if_addrs()['en0'][1][1]
       }
       telemetry = {
           'cpu_usage': psutil.cpu_percent(),
           'processes_count': psutil.cpu_count(),
           'disk_usage': psutil.disk_usage('/')[-1],
           'RAM_usage': psutil.virtual_memory()[2],
           'swap_memory_usage': psutil.swap_memory()[3],
           'battery': psutil.sensors_battery()[0],
           'boot_time': psutil.boot_time()
       }
       return attributes, telemetry
   
   # request attribute callback
   def sync_state(result, exception=None):
        global period
        if exception is not None:
            print("Exception: " + str(exception))
        else:
            period = result['shared']['blinkingPeriod']
   
   def main():
        global client
        client = TBDeviceMqttClient("thingsboard.cloud", 1883, "TEST_TOKEN")
        client.connect()
        client.request_attributes(shared_keys=['blinkingPeriod'], callback=sync_state)
        
        # now attribute_callback will process shared attribute request from server
        sub_id_1 = client.subscribe_to_attribute("blinkingPeriod", attribute_callback)
        sub_id_2 = client.subscribe_to_all_attributes(attribute_callback)
   
        # now rpc_callback will process rpc requests from server
        client.set_server_side_rpc_request_handler(rpc_callback)
   
        while not client.stopped:
            attributes, telemetry = get_data()
            client.send_attributes(attributes)
            client.send_telemetry(telemetry)
            time.sleep(60)
   ```

7. And finally, let’s start our script:

   ```bash
   python main.py
   ```
   {:.copy-code}

If you did everything right, you should see the following console output:

> INFO:tb_device_mqtt:connection SUCCESS
> 
> 
> {'ip_address': '192.168.1.198', 'macaddress': '3c:06:30:44:e0:24'} {'cpu_usage': 6.6, 'processes_count': 8, 'disk_usage': 70.0, 'RAM_usage': 73.9, 'swap_memory_usage': 69.4, 'battery': 29, 'boot_time': 1675154176.0}
> 

Let’s review and make an explanation for our code. In this step, we are interested in the `main` and `get_data` functions.

In case to connect to ThingsBoard we need to provide a device access token and connect our device, this functionality is provided by this piece of code:

```python
...
def main():
    global client
    client = TBDeviceMqttClient("thingsboard.cloud", 1883, "TEST_TOKEN")
    client.connect()
    ...
```

Data packing and returning in the `get_data` function, so you can easily add new telemetry or attributes to the dictionary if you want to monitor more values:
```python
...
def get_data():
    attributes = {
        'ip_address': psutil.net_if_addrs()['en0'][0][1],
        'macaddress': psutil.net_if_addrs()['en0'][1][1]
    }
    telemetry = {
        'cpu_usage': psutil.cpu_percent(),
        'processes_count': psutil.cpu_count(),
        'disk_usage': psutil.disk_usage('/')[-1],
        'RAM_usage': psutil.virtual_memory()[2],
        'swap_memory_usage': psutil.swap_memory()[3],
        'battery': psutil.sensors_battery()[0],
        'boot_time': psutil.boot_time()
    }
    return attributes, telemetry
...
```

Send data part, as you can see below, we send our attributes and telemetry data every 60 seconds (feel free to change it if you want more frequent data updating):
```python
...		
    while not client.stopped:
        attributes, telemetry = get_data()
        client.send_attributes(attributes)
        client.send_telemetry(telemetry)
        time.sleep(60)
...
```