Every telemetry and attribute parameter has **GET** and **SET** RPC methods out of the box, so you don't need to configure
them manually.
For example, if you have a telemetry parameter:
```json
"timeseries": [
  {
    "key": "temperature",
    "path": "${ns=3;i=1001}"
  }
]
```

To get the current value of temperature telemetry, run the query:

```bash
get ns=3;i=1001;
```
{: .copy-code}

Response:
```json
{"result":  25.34}
```

To set temperature telemetry value, run the query:

```bash
set ns=3;i=1001; 23
```
{: .copy-code}

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-opc-ua-rpc-1.png)
{: refdef}
<br>
To set new value (T3000) for **"model"** attribute, run this query:

```bash
set ns=3;i=1008; T3000;
```
{: .copy-code}

Response:
```json
{"success":"true","code": 200}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/gateway-opc-ua-rpc-2.png)
{: refdef}
