### GET method

With the GET method you can send a GET request to the external API.

```bash
get requestUrlExpression=<requestUrlExpression>;
```

Where:
- `<requestUrlExpression>` - the URL of the external API.

For example, in our case, we know that we can get the room light level from the external API with the URL
**"http://127.0.0.1:8000/light-level"**. To get the value of the room light level, run the following query:

```bash
get requestUrlExpression=light-level;
```

**Response:**

```json
{"result":"{\"light-level\":30}"}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/request-get-set-rpc-1.png)
{: refdef}

### SET method

With the SET method you can send a POST request to the external API.

```bash
get requestUrlExpression=<requestUrlExpression>;value=<value>;HTTPMethod=<HTTPMethod>;
```

Where:
- `<requestUrlExpression>` - the URL of the external API;
- `<value>` - the value to send;
- `<HTTPMethod>` - the HTTP method to use.

For example, in our case, we know that we can set the room light level to the external API with the URL
**"http://127.0.0.1:8000/light-level"**. To set the value of the room light level, run this query:

```bash
set requestUrlExpression=light-level;value=80;httpMethod=POST;
```

**Response:**

```json
{"result":"{\"status\":\"ok\"}"}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/request-get-set-rpc-2.png)
{: refdef}

Also, let's take a look at light level after setting it using GET method. To do this, simply run the GET RPC method,
described above:

```bash
get requestUrlExpression=light-level;
```

**Response:**

```json
{"result":  {"light-level":80}}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/request-get-set-rpc-3.png)
{: refdef}
