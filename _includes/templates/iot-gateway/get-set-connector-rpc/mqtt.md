### GET method

With the GET method you can subscribe to MQTT topic and receive message from it.

```bash
get requestTopicExpression=<requestTopicExpression>;responseTopicExpression=<responseTopicExpression>;value=<value>;
```

Where:
- `<requestTopicExpression>` - the topic to publish the request;
- `<responseTopicExpression>` - the topic to subscribe to response;
- `<value>` - the value to send.

For example, in our case, we know that we can read the value of the room light level from the MQTT topic 
**"data/light_level"**. Also, we need to subscribe to the **"data/response"** topic to receive the response.
To read the value of the room light level, run this query:

```bash
get requestTopicExpression=data/get_light_level;responseTopicExpression=data/response;value=${params};
```

**Response:**

```json
{"result":  {"success":true}}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/mqtt-get-set-rpc-1.png)
{: refdef}

Also, let's take a look at the data received from the MQTT topic **"data/response"**:

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/mqtt-get-set-rpc-3.jpeg)
{: refdef}

### SET method

With the SET method you can publish a message to MQTT topic.

```bash
set requestTopicExpression=data/get_light_level;value=${params};
```

Where:
- `<requestTopicExpression>` - the topic to publish request;
- `<value>` - the value to send.

For example, in our case, we know that we can set the value of the room light level to the MQTT topic
**"data/light_level"**. To set the value of the room light level, run the following query:

```bash
set requestTopicExpression=data/set_light_level;value=80;
```

**Response:**

```json
{"result":  {"success":true}}
```

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/mqtt-get-set-rpc-2.png)
{: refdef}

Also, let's take a look at the result in the **"data/light_level"** MQTT topic:

{:refdef: style="text-align: left;"}
![image](/images/gateway/get-set-connector-rpc/mqtt-get-set-rpc-4.jpeg)
{: refdef}
