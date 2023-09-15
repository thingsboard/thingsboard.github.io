ThingsBoard allows you to send [Remote Procedure Calls (RPC)](/docs/{{page.docsPrefix}}user-guide/rpc/#server-side-rpc) from server-side applications to devices and vice versa. 
Basically, this feature will enable you to send commands to/from devices and receive the results of command execution.

In this guide, we will configure the RPC command to get OrangePI telemetry data immediately. If you are 
using the imported dashboard, you don't need to configure anything as in your dashboard you can see the following widget:

![](https://img.thingsboard.io/devices-library/basic/single-board-computers/one-way-rpc-widget.png)

<aside>
💡 If you create a new dashboard, you can use the “RPC Button” widget for one-way RPC  which is located in the “Control widgets” bundle.

</aside>

For now, we are ready to write our code. Firstly we need to create an `rpc_callback` function which will call when we 
will get RPC from the server. And as in the example with shared attributes, we need to bind our rpc callback function 
with the subscriber in the `main` function.

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

Finally, let’s try to push our button and force getting OrangePI data:
![](https://img.thingsboard.io/devices-library/basic/single-board-computers/timeseries-rpc-widget.png)

Also, if you did everything right, you should see the following console output:

`{'method': 'getTelemetry', 'params': {}}`
