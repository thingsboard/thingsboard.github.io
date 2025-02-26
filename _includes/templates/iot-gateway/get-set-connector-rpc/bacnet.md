```bash
get objectType=analogValue;objectId=1;propertyId=presentValue;
```

**Response:**

```json
{"result": "30.5"}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/bacnet-get-set-rpc-1.png)
{: refdef}

# Set method

```bash
set objectType=analogValue;objectId=1;propertyId=presentValue;value=30.9;
```

**Response:**

```json
{"result": "{\"status\":\"ok\"}"}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/bacnet-get-set-rpc-2.png)
{: refdef}

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/bacnet-get-set-rpc-3.png)
{: refdef}
