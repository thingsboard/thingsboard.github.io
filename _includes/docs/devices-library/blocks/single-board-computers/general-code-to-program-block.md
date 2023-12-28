Now you are ready to publish telemetry data on behalf of your device. We will use, as mentioned before, the 
“thingsboard-python-client-sdk” library.
Let’s setup our project:

1. Create project folder:

    ```bash
   mkdir thingsboard_example && cd thingsboard_example
   ```
   {:.copy-code}

2. Install packages:

   ```bash
   pip3 install tb-mqtt-client
   ```
   {:.copy-code}

3. Create the main script:

   ```bash
   nano main.py
   ```
   {:.copy-code}

4. Copy and paste the following code:

   ```python
   import logging.handlers
   import time
   import os
   
   from tb_gateway_mqtt import TBDeviceMqttClient
   
   ACCESS_TOKEN = "TEST_TOKEN"
   THINGSBOARD_SERVER = '{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}thingsboard.cloud{% else %}demo.thingsboard.io{% endif %}'
   THINGSBOARD_PORT = 1883

   logging.basicConfig(level=logging.DEBUG)
   
   client = None
   
   # default blinking period
   period = 1.0
   
   
   # callback function that will call when we will change value of our Shared Attribute
   def attribute_callback(result, _):
        print(result)
        # make sure that you paste YOUR shared attribute name
        period = result.get('blinkingPeriod', 1.0)

   # callback function that will call when we will send RPC
   def rpc_callback(id, request_body):
       # request body contains method and other parameters
       print(request_body)
       method = request_body.get('method')
       if method == 'getTelemetry':
           attributes, telemetry = get_data()
           client.send_attributes(attributes)
           client.send_telemetry(telemetry)
       else:
           print('Unknown method: ' + method)
   
   
   def get_data():
       cpu_usage = round(float(os.popen('''grep 'cpu ' /proc/stat | awk '{usage=($2+$4)*100/($2+$4+$5)} END {print usage }' ''').readline().replace('\n', '').replace(',', '.')), 2)
       ip_address = os.popen('''hostname -I''').readline().replace('\n', '').replace(',', '.')[:-1]
       mac_address = os.popen('''cat /sys/class/net/*/address''').readline().replace('\n', '').replace(',', '.')
       processes_count = os.popen('''ps -Al | grep -c bash''').readline().replace('\n', '').replace(',', '.')[:-1]
       swap_memory_usage = os.popen("free -m | grep Swap | awk '{print ($3/$2)*100}'").readline().replace('\n', '').replace(',', '.')[:-1]
       ram_usage = float(os.popen("free -m | grep Mem | awk '{print ($3/$2) * 100}'").readline().replace('\n', '').replace(',', '.')[:-1])
       st = os.statvfs('/')
       used = (st.f_blocks - st.f_bfree) * st.f_frsize
       boot_time = os.popen('uptime -p').read()[:-1]
       avg_load = (cpu_usage + ram_usage) / 2
   
       attributes = {
           'ip_address': ip_address,
           'macaddress': mac_address
       }
       telemetry = {
           'cpu_usage': cpu_usage,
           'processes_count': processes_count,
           'disk_usage': used,
           'RAM_usage': ram_usage,
           'swap_memory_usage': swap_memory_usage,
           'boot_time': boot_time,
           'avg_load': avg_load
       }
       print(attributes, telemetry)
       return attributes, telemetry
   
   # request attribute callback
   def sync_state(result, exception=None):
        global period
        if exception is not None:
            print("Exception: " + str(exception))
        else:
            period = result.get('shared', {'blinkingPeriod': 1.0})['blinkingPeriod']

   def main():
        global client
        client = TBDeviceMqttClient(THINGSBOARD_SERVER, THINGSBOARD_PORT, ACCESS_TOKEN)
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
   
   if __name__=='__main__':
       if ACCESS_TOKEN != "TEST_TOKEN":
           main()
       else:
           print("Please change the ACCESS_TOKEN variable to match your device access token and run script again.")
   ```
   {:.copy-code.expandable-15}

   In the code above change values for the following variables - THINGSBOARD_SERVER, ACCESS_TOKEN to your credentials.
   
   Necessary variables for connection:  
   
   | Variable name | Default value | Description | 
   |-|-|
   | ACCESS_TOKEN | **TEST_TOKEN** | Your device access token |
   | THINGSBOARD_SERVER | **{% if page.docsPrefix == "pe/" or page.docsPrefix == "paas/" %}thingsboard.cloud{% else %}demo.thingsboard.io{% endif %}** | Your ThingsBoard host or ip address. |
   | THINGSBOARD_PORT | **1883** | ThingsBoard server MQTT port. Can be default for this guide. |

5. Click **Ctrl+O** and **Ctrl+X** keys to save the file.
6. And finally, let’s start our script:

   ```bash
   python3 main.py
   ```
   {:.copy-code}

If you did everything right, you should see the following console output:
```
> INFO:tb_device_mqtt:connection SUCCESS
> 
> 
> {'ip_address': '192.168.1.198', 'macaddress': '3c:06:30:44:e0:24'} {'cpu_usage': 6.6, 'processes_count': 8, 'disk_usage': 70.0, 'RAM_usage': 73.9, 'swap_memory_usage': 69.4, 'battery': 29, 'boot_time': 1675154176.0}
> 
```

Let’s review and make an explanation for our code. In this step, we are interested in the `get_data` function.
Data packing and returning in the `get_data` function, so you can easily add new telemetry or attributes to the dictionary if you want to monitor more values:
```python
...
def get_data():
       cpu_usage = round(float(os.popen('''grep 'cpu ' /proc/stat | awk '{usage=($2+$4)*100/($2+$4+$5)} END {print usage }' ''').readline().replace('\n', '').replace(',', '.')), 2)
       ip_address = os.popen('''hostname -I''').readline().replace('\n', '').replace(',', '.')[:-1]
       mac_address = os.popen('''cat /sys/class/net/*/address''').readline().replace('\n', '').replace(',', '.')
       processes_count = os.popen('''ps -Al | grep -c bash''').readline().replace('\n', '').replace(',', '.')[:-1]
       swap_memory_usage = os.popen("free -m | grep Swap | awk '{print ($3/$2)*100}'").readline().replace('\n', '').replace(',', '.')[:-1]
       ram_usage = float(os.popen("free -m | grep Mem | awk '{print ($3/$2) * 100}'").readline().replace('\n', '').replace(',', '.')[:-1])
       st = os.statvfs('/')
       used = (st.f_blocks - st.f_bfree) * st.f_frsize
       boot_time = os.popen('uptime -p').read()[:-1]
       avg_load = (cpu_usage + ram_usage) / 2
   
       attributes = {
           'ip_address': ip_address,
           'macaddress': mac_address
       }
       telemetry = {
           'cpu_usage': cpu_usage,
           'processes_count': processes_count,
           'disk_usage': used,
           'RAM_usage': ram_usage,
           'swap_memory_usage': swap_memory_usage,
           'boot_time': boot_time,
           'avg_load': avg_load
       }
       print(attributes, telemetry)
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