### GET method

With the GET method you can read the values of Modbus slave registers.

```bash
get type=<type>;functionCode=<functionCode>;objectsCount=<objectsCount>;address=<address>;
```

Where:
- `<type>` - the type of the value to read;
- `<functionCode>` - the Modbus function code;
- `<objectsCount>` - the number of objects to read;
- `<address>` - the address of the register to read.

For example, in our case, we know that we can read 16-bit integer values from the Modbus slave with the address 1, 
which contains the outdoor temperature. To read the value of the register with the address 1, run this query:

```bash
get type=16int;functionCode=3;objectsCount=1;address=1;
```

**Response:**

```json
{"result":{"value":13}}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/modbus-get-set-rpc-1.png)
{: refdef}

### SET method

With the SET method you can write values to Modbus slave registers.

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
that contains room light level. To write the value of the register with the address 2, run the following query:

```bash
set type=16int;functionCode=6;objectsCount=1;address=2;value=80;
```

**Response:**

```json
{"result":{"value":"80"}}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/modbus-get-set-rpc-2.png)
{: refdef}

Let's check the result. To read the value of the register with the address 2, run this query:

```bash
get type=16int;functionCode=3;objectsCount=1;address=2;
```

**Response:**

```json
{"result":{"value":80}}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/modbus-get-set-rpc-3.png)
{: refdef}

As you can see, the value has been successfully written.
