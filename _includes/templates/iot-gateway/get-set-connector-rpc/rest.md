### GET method

With the GET method you can send a GET request to the REST API.

```bash
get requestUrlExpression=<requestUrlExpression>;value=<value>;
```

Where:
- `<requestUrlExpression>` - the URL of the REST API;
- `<value>` - the value to send.

For example, in our case, we know that we can get the room light level from the REST API with the URL
**"http://127.0.0.1:8000/light-level"**. To get the value of the room light level, run the query:

```bash
get requestUrlExpression=http://127.0.0.1:8000/light-level;value=${params};
```

**Response:**

```json
{"result":  {"light-level":30}}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/rest-get-set-rpc-1.png)
{: refdef}

### SET method

With the SET method you can send a POST request to the REST API.

```bash
set requestUrlExpression=<requestUrlExpression>;value=<value>;HTTPMethod=<HTTPMethod>;
```

Where:
- `<requestUrlExpression>` - the URL of the REST API;
- `<value>` - the value to send.
- `<HTTPMethod>` - the HTTP method to use.

For example, in our case, we know that we can set the room light level to the REST API with the URL
**"http://127.0.0.1:8000/light-level"**. To set the value of the room light level, run the following query:

```bash
set requestUrlExpression=http://127.0.0.1:8000/light-level;value=80;HTTPMethod=POST;
```

**Response:**

```json
{"result":  {"status":"ok"}}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/rest-get-set-rpc-2.png)
{: refdef}

Also, let's take a look at light level after setting it using GET method. To do this, simply run the GET RPC method, 
described above:

```bash
get requestUrlExpression=http://127.0.0.1:8000/light-level;value=${params};
```

**Response:**

```json
{"result":  {"light-level":80}}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/rest-get-set-rpc-3.png)
{: refdef}
