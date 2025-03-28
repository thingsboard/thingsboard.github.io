### GET method

With the GET method you can read some data from the FTP device.

```bash
get objectType=<objectType>;objectId=<objectId>;propertyId=<propertyId>;
```

Where:
- `<objectType>` - the type of the object to read;
- `<objectId>` - the ID of the object to read;
- `<propertyId>` - the ID of the property to read.

For example, in our case, we know that we can read the value of the room light level from the BACnet device.
To read the value of the room light level, run this query:

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

# SET method

With the SET method you can write data to the BACnet device.

```bash
get objectType=<objectType>;objectId=<objectId>;propertyId=<propertyId>;value=<value>;
```

Where:
- `<objectType>` - the type of the object to read;
- `<objectId>` - the ID of the object to read;
- `<propertyId>` - the ID of the property to read;
- `<value>` - the value to write.

For example, in our case, we know that we can set the value of the room light level to the BACnet device.
To set the value of the room light level, run the following query:

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

Also, let's check the value of the room light level after setting it using the GET method. To do this, simply
run the GET RPC method, described above:

```bash
get objectType=analogValue;objectId=1;propertyId=presentValue;
```

**Response:**

```json
{"result": "30.9"}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/bacnet-get-set-rpc-3.png)
{: refdef}
