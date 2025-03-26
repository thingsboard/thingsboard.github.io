### SET method

With the SET method you can send a data to the socket.

```bash
set address=<address>;port=<port>;value=<value>;
```

Where:
- `<address>` - the address of the socket;
- `<port>` - the port of the socket;
- `<value>` - the value to send.

For example, in our case, we know that we can send the room light level to the sensor that has TCP connection and 
is listening on port 50003. To send the value of the room light level to the sensor, run the query:

```bash
set address=192.168.0.200;port=50003;value=80;
```

**Response:**

```json
{"result":  "ok"}
```

{:refdef: style="text-align: left;"}
![image](https://img.thingsboard.io/gateway/get-set-connector-rpc/socket-get-set-rpc-1.png)
{: refdef}

Also, let's see the result on the sensor's side:

{:refdef: style="text-align: left;"}
![image](https://img.thingsboard.io/gateway/get-set-connector-rpc/socket-get-set-rpc-2.jpeg)
{: refdef}
