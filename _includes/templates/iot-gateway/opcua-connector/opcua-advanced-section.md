| **Parameter**          | **Default value**                    | **Description**                                                                                                                                                       |
|:-----------------------|:-------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| url                    | **localhost:4840/freeopcua/server/** | Hostname or ip address of OPC-UA server.                                                                                                                              |
| timeoutInMillis        | **5000**                             | Timeout in seconds for connecting to OPC-UA server.                                                                                                                   |
| scanPeriodInMillis     | **3600000**                          | Period in milliseconds to rescan the server.                                                                                                                          |
| pollPeriodInMillis     | **5000**                             | Period in milliseconds to poll the server.                                                                                                                            |
| enableSubscriptions    | **false**                            | If true - the gateway will subscribe to interesting nodes and wait for data update and if false - the gateway will rescan OPC-UA server every **scanPeriodInMillis**. |
| subCheckPeriodInMillis | **100**                              | Period to check the subscriptions in the OPC-UA server.                                                                                                               |
| showMap                | **true**                             | Show nodes on scanning **true** or **false**.                                                                                                                         |
| security               | **Basic128Rsa15**                    | Security policy (**Basic128Rsa15**, **Basic256**, **Basic256Sha256**).                                                                                                |
| ---                    |                                      |                                                                                                                                                                       |

<br>
**Let's look at an example.**
<br>
This example uses the Prosys OPC-UA Simulation Server to demonstrate how to configure the OPC-UA connector.
<br>

{:refdef: style="text-align: left;"}
![image](/images/gateway/opc-ua-simulation-server-1.png)
{: refdef}

On the main **"Status"** tab, copy connection address (UA TCP).

To connect your OPC-UA server to ThingsBoard, open the OPC-UA Connector configuration file (opcua.json) and replace the "url" value with the copied connection address.

Our **server** section would look like this:

```json
"server": {
    "name": "OPC-UA Default Server",
    "url": "localhost:53530/OPCUA/SimulationServer",
    "timeoutInMillis": 5000,
    "scanPeriodInMillis": 5000,
    "disableSubscriptions": false,
    "subCheckPeriodInMillis": 100,
    "showMap": false,
    "security": "Basic128Rsa15",
    ...
},
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/opc-ua-connector/opc-ua-section-application-advanced-anonymous-1-ce.png)
{: refdef}