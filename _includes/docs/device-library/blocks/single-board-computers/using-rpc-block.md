{% if page.docsPrefix == "pe/edge/" or page.docsPrefix == "edge/" %}
**ThingsBoard Edge** allows you to send [Remote Procedure Calls (RPCs)](/docs/{{peDocsPrefix}}user-guide/rpc/#server-side-rpc){: target="_blank"}
{% else %} 
**ThingsBoard** allows you to send [Remote Procedure Calls (RPCs)](/docs/{{page.docsPrefix}}user-guide/rpc/#server-side-rpc){: target="_blank"}
{% endif %} from server-side applications to devices and vice versa. 
This feature enables you to send commands to/from devices and receive the results of command execution.

In this guide, we will configure an RPC command to get telemetry data from OrangePI immediately. If you are 
using the imported dashboard, there's no need for additional configuration, as the dashboard already includes the following widget:

![one-way-rpc-widget](/images/devices-library/basic/single-board-computers/one-way-rpc-widget.png)


💡 If you're creating a new dashboard, you can use the **“RPC Button”** widget for one-way RPC communication, which is located in the **“Control widgets”** bundle.

Now, we are ready to write the code. First, create an `rpc_callback` function that will be 
triggered when the device receives an RPC request from the server. As in the example with shared attributes, we also need to bind our RPC callback function 
to the subscriber within the `main` function.

```python
client = None

...

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

...

def main():
    ...

    # now rpc_request_response will process rpc requests from server
    client.set_server_side_rpc_request_handler(rpc_callback)

    ...
```

When you click the **RPC button**, the device will immediately send telemetry (CPU %, Processes number, etc.). 
You can see this reflected in your dashboard, as shown in the chart below.

![timeseries-rpc-widget](/images/devices-library/basic/single-board-computers/timeseries-rpc-widget.png)

Also, if you did everything right, you should see the following console output:

```python
{'method': 'getTelemetry', 'params': {}}
```