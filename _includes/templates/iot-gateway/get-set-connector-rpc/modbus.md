### GET method

With the GET method you can read Modbus slave registers values.

```bash
get type=<type>;functionCode=<functionCode>;objectsCount=<objectsCount>;address=<address>;
```

Where:
- `<type>` - the type of the value to read;
- `<functionCode>` - the Modbus function code;
- `<objectsCount>` - the number of objects to read;
- `<address>` - the address of the register to read.

For example, in our case, we know that we can read 16-bit integer values from the Modbus slave with the address 1 
that contain outdoor temperature. To read the value of the register with the address 1, run the query:

```bash
get type=16int;functionCode=3;objectsCount=1;address=1;
```

**Response:**

```json
{"result":  13}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/modbus-get-set-rpc-1.png)
{: refdef}

### SET method

With the SET method you can write Modbus slave registers values.

```bash
set type=<type>;functionCode=<functionCode>;objectsCount=<objectsCount>;address=<address>;value=<value>;
```

Where:
- `<type>` - the type of the value to write;
- `<functionCode>` - the Modbus function code;
- `<objectsCount>` - the number of objects to write;
- `<address>` - the address of the register to write;
- `<value>` - the value to write.

For example, in our case, we know that we can write 16-bit integer values to the Modbus slave with the address 2 
that contain room light level. To write the value of the register with the address 2, run the query:

```bash
set type=16int;functionCode=3;objectsCount=1;address=2;value=80;
```

**Response:**

```json
{"result":  {"success":true}}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/modbus-get-set-rpc-2.png)
{: refdef}

Let's check the result. To read the value of the register with the address 2, run the query:

```bash
get type=16int;functionCode=3;objectsCount=1;address=2;
```

**Response:**

```json
{"result":  80}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/modbus-get-set-rpc-3.png)
{: refdef}

As you can see, the value has been successfully written.
