### GET method

With the GET method you can read some data from the FTP server.

```bash
get filePath=<filePath>;
```

Where:
- `<filePath>` - the path to the file on the FTP server.

For example, in our case, we know that **light_level.txt** file stores the room light level on the FTP server. 
To read the value of the room light level, run the following query:

```bash
get filePath=./light_level.txt;
```

**Response:**

```json
{"result":  30}
```

{:refdef: style="text-align: left;"}
![image](https://img.thingsboard.io/gateway/get-set-connector-rpc/ftp-get-set-rpc-1.png)
{: refdef}

### SET method

With the SET method you can write data to the FTP server.

```bash
set filePath=<filePath>;value=<value>;
```

Where:
- `<filePath>` - the path to the file on the FTP server;
- `<value>` - the value to write.

For example, in our case, we know that **light_level.txt** file stores the room light level on the FTP server.
To write the value of the room light level, run the following query:

```bash
set filePath=./light_level.txt;value=80;
```

**Response:**

```json
{"result":  "{\"success\": true}"}
```

{:refdef: style="text-align: left;"}
![image](https://img.thingsboard.io/gateway/get-set-connector-rpc/ftp-get-set-rpc-2.png)
{: refdef}

Also, let's check the value of the room light level after setting it using the GET method. To do this, simply 
run the GET RPC method, described above:

```bash
get filePath=./light_level.txt;
```

**Response:**

```json
{"result":  80}
```

{:refdef: style="text-align: left;"}
![image](https://img.thingsboard.io/gateway/get-set-connector-rpc/ftp-get-set-rpc-3.png)
{: refdef}
