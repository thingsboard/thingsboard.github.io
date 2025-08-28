External nodes used are used to interact with external systems.

* TOC
{:toc}

## AI request node

<table style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 4.2</em></strong></td>
     </tr>
   </thead>
</table> 

![Node example image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-ai-request.png)

Sends a request to a large language model (LLM) using configured system and user prompts, which can be dynamically populated with data from the incoming message. 
Returns AI-generated content as a payload of the outgoing message.

**Selecting AI model**

Select the specific Large Language Model (LLM) that will be used to process your request.

The <b>Model</b> dropdown lists all AI models that have been previously configured on the [AI models](/docs/{{docsPrefix}}samples/analytics/ai-models/){:target="_blank"} page.
When you select a model from this list, the node automatically applies all settings defined for that model, including provider credentials, model ID, and optional parameters.

For convenience, you can also add a new AI model directly from this interface by clicking the Create new button.
This action opens the AI model configuration form.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-ai-model-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-ai-model-pe.png)
{% endif %}

**Prompt settings**

- **System prompt** - sets the high-level context, personality, and constraints for the AI. Think of it as defining the "character" or role the AI should adopt. It's used to establish rules that influence the entire interaction, such as the desired tone, response format, or a specific area of expertise. This field is optional, but if set, it cannot be blank and has a maximum length of 10,000 characters.
> **Example**: "You are a helpful agricultural expert. Your goal is to analyze sensor data and provide farming advice. Respond only in valid JSON."

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-system-prompt.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-system-prompt.png)
{% endif %}

- **User prompt** - contains the specific, immediate task or question you want the AI to answer. This is the main input for the model, which will be processed according to the rules set in the system prompt. This field is required, cannot be blank, and also has a maximum length of 10,000 characters.
> **Example**: "Based on these readings, is the soil moisture optimal for planting corn? Readings: `$[*]`"

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-user-prompt.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-user-prompt.png)
{% endif %}

You can make both prompts dynamic (incorporate data from an incoming message) using [templatization](/docs/{{docsPrefix}}user-guide/templatization/). This is the recommended approach when you need to provide the context of a message to the AI model.
Apart from usual templates, there are following special templates that you can use:
- `$[*]` – replaced by the entire message payload as a JSON string.
 
Example: If the prompt is `Telemetry readings: $[*]` and the incoming payload is:
```json
{
    "temperature": 25.5,
    "humidity": 62
}
```
...the template will insert the full JSON object as a string into your prompt like so: `Telemetry readings: {"temperature":25.5,"humidity":62}`

- `${*}` – replaced by all message metadata as a JSON string.

Example: If the prompt is `Device context: ${*}` and the incoming metadata is:
```json
{
    "deviceName": "Sensor-T101",
    "deviceType": "Temperature Sensor"
}
```
...the template will insert the full JSON object as a string into your prompt like so: `Device context: {"deviceName":"Sensor-T101","deviceType":"Temperature Sensor"}`

**Response format**

- **Text** - most flexible format, supported by all models. In this mode, the AI can generate free-form text without any structural constraints. While the output is not guaranteed to be in any specific format, you can still guide the model to produce structured data (like JSON) through clear instructions in your prompts.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-response-format-text-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-response-format-text-pe.png)
{% endif %}

- **JSON** - instructs the model to generate a response that is always a syntactically valid JSON. The model decides on the JSON structure itself based on the context of the prompt.

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-response-format-json-ce.png)
{% else %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-response-format-json-pe.png)
{% endif %}

- **JSON Schema** - forces the model to generate a JSON that strictly conforms to a specific structure you define using a [JSON Schema](https://json-schema.org/). This is useful for ensuring reliable output.
  {% if docsPrefix == null %}
  ![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-response-format-json-schema-ce.png)
  {% else %}
  ![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-response-format-json-schema-pe.png)
  {% endif %}
  - **Schema** - JSON Schema that the model's output must adhere to. The schema parser supports a specific subset of the JSON Schema specification:
    - Types - `string`, `integer`, `number`, `boolean`, `object`, `array`, `null`.
    - General keywords: `title` (used as schema name), `description`, `enum` (must be an array of strings).
    - Object keywords: `properties`, `required`, `additionalProperties` (boolean, true if not set).
    - Array keywords: `items`. 
    - Validation keywords like `pattern`, `minLength`, `maximum`, etc., are not supported.

> **Note**: JSON and JSON Schema are not supported when using models from Amazon Bedrock, Anthropic, or GitHub Models.

**Advanced settings**

- **Timeout** - the maximum time the node will wait for a response from the AI model before the request fails. The value must be from 1 second to 10 minutes (600 seconds).
  {% if docsPrefix == null %}
  ![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-timeout.png)
  {% else %}
  ![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-timeout.png)
  {% endif %}
  > **Note**: Be careful when setting this value. Complex tasks or slower models may require more time to generate a response. A timeout that is too low for your use case might cause requests to fail unnecessarily.

- **Force acknowledgement**
  {% if docsPrefix == null %}
  ![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-force-ack.png)
  {% else %}
  ![image](/images/user-guide/rule-engine-2-0/nodes/external-ai-request-force-ack.png)
  {% endif %}
  - If enabled, the incoming message is acknowledged immediately. A new message is created to carry the AI's response and is then added to the queue for processing by the next node. This is useful for long-running AI requests to prevent message processing timeouts.
  - If disabled, the original incoming message is transformed. Its payload is replaced with the AI's response, and this message is passed to the next node.
    > **Note**: The `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable, when set to `true`, overrides this setting and forces immediate acknowledgement.

**Output connections**
* **Success:**
  * If an incoming message was successfully processed.
* **Failure:**
  * If the request to the AI model exceeds the configured **Timeout**.
  * If unexpected error occurs during message processing.

## AWS lambda node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.7.1</em></strong></td>
     </tr>
   </thead>
</table> 

![Node example image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-aws-lambda.png)

Node publishes messages to AWS Lambda, a service that lets you run code without provisioning or managing servers. 
It sends messages using a RequestResponse invocation type. The node uses a pre-configured client and specified function to run.

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/external-nodes/aws-lambda-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/external-nodes/aws-lambda-node-2-pe.png"></object>
{% endif %}

Function configuration

- **Function name**: required parameter to specify which AWS Lambda function should be invoked.
- **Qualifier**: optional parameter to specify a version or alias of the Lambda function. If the qualifier is not specified, the default qualifier **$LATEST** will be used.

> **Note**: **Function name** and **Qualifier** fields support templatization.

AWS Credentials

- **AWS Access Key ID** and **AWS Secret Access Key** are the credentials of an AWS IAM User with programmatic access.
  More information on AWS access keys can be found [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
- **AWS Region** must correspond to the one in which the Lambda function is created. Current list of AWS Regions can be found [here](https://docs.aws.amazon.com/general/latest/gr/rande.html).

Advanced settings

- **Connection timeout**: amount of time to wait (in seconds) when initially establishing a connection before giving up and timing out.
A value of 0 means infinity, and is not recommended.
- **Request timeout**: amount of time to wait (in seconds) for the request to complete before giving up and timing out.
A value of 0 means infinity, and is not recommended.
- **Tell Failure if AWS Lambda function execution raises exception**: if enabled, forces failure of message processing if AWS Lambda function execution raises exception. 
If disabled, the error information is added to the response payload, and the message will be routed via success chain.

**Output**
- **Success**: If message was processed successfully.
- **Failure**: If an error occurs during message processing or if the AWS Lambda function execution raises an exception, and the option **Tell Failure if AWS Lambda function execution raises exception** is enabled.

**Usage example: monitoring and processing water meter data with AWS Lambda**

Consider the following scenario: we have a water meter IoT device that sends periodic updates about water usage to our system.
We need to process these updates to check for anomalies and perform specific actions based on the water usage patterns.

Solution with AWS Lambda node:
1. **Receive water meter data**: Our rule chain starts with receiving water meter updates. Each update contains the water usage data.
2. **Preprocess the data**: The message passes through a Transformation Node to format the data appropriately for AWS Lambda.
3. **Invoke AWS Lambda function**: The formatted message is then sent to the AWS Lambda Node. This node is configured with the necessary AWS credentials and function details.
4. **Process data with Lambda**: The AWS Lambda function is invoked, processing the water usage data. It checks for anomalies, such as unusually high water usage, and logs the results or triggers further actions.
5. **Handle Lambda response**: Upon successful execution, the Lambda function returns a response. The AWS Lambda Node captures this response, including the requestId in the message metadata.
6. **Route based on Lambda response**: Based on the response from AWS Lambda, the message is routed through either the Success or Failure path. The Success path can continue to further processing, while the Failure path handles any errors or issues encountered.

By utilizing the AWS Lambda Node in this manner, we can efficiently process and respond to real-time water meter data, leveraging AWS Lambda's capabilities for data processing and anomaly detection.

![Rule chain example image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-aws-lambda-chain.png)

**Published payload** - node will publish message payload to the AWS Lambda. If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload to the AWS Lambda.

**Outbound message** from this node will contain response **requestId** in message metadata.
Message payload will contain result of the function execution.

<br>

## AWS SNS node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-aws-sns.png)

Node publish messages to AWS SNS (Amazon Simple Notification Service).

Configuration:
{% if docsPrefix == null %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/external-nodes/aws-sns-node-2-ce.png"></object>
{% endif %}
{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
<object width="70%" data="/images/user-guide/rule-engine-2-0/nodes/external-nodes/aws-sns-node-2-pe.png"></object>
{% endif %}

- **Topic ARN pattern** - can be set direct topic name for message publishing 
or pattern can be used, that will be resolved to the real ARN Topic name using Message metadata. 
- **AWS Access Key ID** and **AWS Secret Access Key** are the credentials of an AWS IAM User with programmatic access. More information on AWS access keys can be found [here](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). 
- **AWS Region** must correspond to the one in which the SNS Topic(s) are created. Current list of AWS Regions can be found [here](http://docs.aws.amazon.com/general/latest/gr/rande.html).

In the following example, topic name depends on Device Type and there is a Message that contains **deviceType** field in Metadata:
{% highlight javascript %}
{
    deviceType: controller
}
{% endhighlight %}

For publishing message in **controller**'s topic, we will set this pattern in **Topic ARN pattern**:

{% highlight bash %}
arn:aws:sns:us-east-1:123456789012:${deviceType}
{% endhighlight %}

In runtime, pattern will be resolved to <code>arn:aws:sns:us-east-1:123456789012:controller</code>

**Published payload** - Node will publish full Message payload to the SNS.
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload to the SNS.

**Outbound message** from this node will contain response **messageId** and **requestId**
 in Message metadata. Original Message payload, type and originator will not be changed.

<br>

## AWS SQS node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-aws-sqs.png)

Node publish messages to the AWS SQS (Amazon Simple Queue Service).

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-aws-sqs-config.png)

- **Queue Type** - SQS queue type. Can be *Standard* or *FIFO*.
- **Queue URL Pattern** - Pattern for building Queue URL. For example <code>${deviceType}</code>.
Can be set direct Queue URL for message publishing or pattern can be used, that will be resolved to the real Queue URL using Message metadata.
- **Delay** - delay in seconds, used to delay a specific message.
- **Message attributes** - optional list of message attributes to publish.
- **AWS Access Key ID** and **AWS Secret Access Key** are the credentials of an AWS IAM User with programmatic access. More information on AWS access keys can be found [here](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). 
- **AWS Region** must correspond to the one in which the SQS Queue(s) are created. Current list of AWS Regions can be found [here](http://docs.aws.amazon.com/general/latest/gr/rande.html).

In the following example, Queue URL depends on Device Type and there is a Message that contains **deviceType** field in Metadata:

{% highlight json %}
{
    deviceType: controller
}
{% endhighlight %}

For publishing message in **controller**'s Queue, we will set this pattern in **Queue URL pattern**:

{% highlight bash %}
https://sqs.us-east-1.amazonaws.com/123456789012/${deviceType}
{% endhighlight %}

In runtime, pattern will be resolved to <code>https://sqs.us-east-1.amazonaws.com/123456789012/controller</code>

**Published body** - Node will publish full Message payload to the SQS. 
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload to the SQS.

**Published attributes** - optional list of attributes can be added for publishing message in SQS. It is a collection of <NAME> - <VALUE> pairs.
Both, NAME and VALUE, could be a static values or patterns that will be resolved using Message metadata.

If **FIFO** queue is selected, then Message ID will be used as **deduplication ID** and Message originator as **group ID**.

**Outbound message** from this node will contain response **messageId**, **requestId**, **messageBodyMd5**, **messageAttributesMd5** 
and **sequenceNumber** in Message metadata. Original Message payload, type and originator will not be changed. 

## Azure IoT Hub node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.5.3</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-iot-hub.png)

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-iot-hub-config.png)

- **Topic** - for more information about IoT Hub topic use [link](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support#sending-device-to-cloud-messages).
- **Hostname** - Azure IoT Hub Hostname.
- **Device ID** - Your Device ID from Azure IoT Hub.
- **Credentials** - Azure IoT Hub connection credentials. Can be either *Shared Access Signature* or *PEM*.

Different Authentication credentials are supported for Azure IoT Hub:

- Shared Access Signature - SAS Key is used for Authentication
- PEM - PEM certificates are used for Authentication

If **Shared Access Signature** credentials type is selected, the following configuration should be provided:
- SAS Key - it is key from your device in [Azure IoT Hub](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-authenticate-downstream-device#symmetric-key-authentication)
- CA certificate file, by default used Baltimore certificate. More about certificates [here](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support#tlsssl-configuration)

If **PEM** credentials type is selected, the following configuration should be provided:

- CA certificate file, by default used Baltimore certificate. More about certificates [here](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support#tlsssl-configuration)
- Certificate file
- Private key file
- Private key password

[X.509 CA-signed authentication](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-authenticate-downstream-device#x509-ca-signed-authentication)

[CACertificates instruction](https://github.com/Azure/azure-iot-sdk-c/tree/master/tools/CACertificates)

<br>

**Published body** - Node will send full Message payload to the Azure IoT Hub device.
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload to the Azure IoT Hub.

In case of successful message publishing, original Message will be passed to the next nodes via **Success** chain,
otherwise **Failure** chain is used.

## GCP PubSub node

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/gcp-pubsub-node.png)

**Publish message to the Google Cloud PubSub.**

Will publish message payload to the Google Cloud Platform PubSub topic. Outbound message will contain response fields (`messageId` in the Message Metadata from the GCP PubSub.   
**messageld** field can be accessed with `metadata.messageId`.

## Kafka node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-kafka.png)

Kafka Node sends messages to Kafka brokers. Expects messages with any message type. Will send record via Kafka producer to Kafka server.

Configuration:

{% if docsPrefix == null %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-kafka-config-ce.png)
{% endif %}
{% if docsPrefix == "pe/" or docsPrefix == "paas/" or docsPrefix == "paas/eu/" %}
![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-kafka-config-pe.png)
{% endif %}

- **Topic pattern** - can be a static string, or pattern that is resolved using Message Metadata properties. For example <code>${deviceType}</code>
- **Key pattern** - Use <code>${metadataKey}</code> for value from metadata, <code>$[messageKey]</code> for value from message body.
- **Bootstrap servers** - list of kafka brokers separated with comma.
- **Automatically retry times** - number of attempts to resend message if connection fails.
- **Produces batch size** - batch size in bytes for grouping messages with the same partition.
- **Time to buffer locally** - max local buffering window duration in ms.
- **Client buffer max size** - max buffer size in bytes for sending messages.
- **Number of acknowledgments** - number of acknowledgments node requires to received before considering a request complete.
- **Other properties** - any other additional properties could be provided for kafka broker connection.

**Published body** - Node will send full Message payload to the Kafka topic. 
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload to the Kafka.

**Outbound message** from this node will contain response **offset**, **partition** and **topic** properties in the Message metadata. 
Original Message payload, type and originator will not be changed.

> **Note** - if you want to use [Confluent cloud](https://confluent.cloud) as a kafka broker you should add next properties:

<table>
    <tr>
        <th>Key</th>
        <th>Value</th>
    </tr>
    <tr>
        <td>ssl.endpoint.identification.algorithm</td>
        <td>https</td>
    </tr>
    <tr>
        <td>sasl.mechanism</td>
        <td>PLAIN</td>
    </tr>
    <tr>
        <td>sasl.jaas.config</td>
        <td>org.apache.kafka.common.security.plain.PlainLoginModule required username="CLUSTER_API_KEY" password="CLUSTER_API_SECRET";</td>
    </tr>
    <tr>
        <td>security.protocol</td>
        <td>SASL_SSL</td>
    </tr>
</table>
- **CLUSTER_API_KEY** - your access key from Cluster settings.
- **CLUSTER_API_SECRET** - your access secret from Cluster settings.

<br>

## MQTT node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-mqtt.png)

Publish incoming message payload to the topic of the configured MQTT broker with QoS **AT_LEAST_ONCE**. 

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-mqtt-config.png)

- **Topic pattern** - can be a static string, or pattern that is resolved using Message Metadata properties. For example <code>${deviceType}</code>.
- **Host** - MQTT broker host.
- **Port** - MQTT broker port.
- **Connection timeout** - timeout in seconds for connecting to MQTT broker.
- **Client ID** - optional client identifier used for connecting to MQTT broker. If not specified, default generated clientId will be used.
- **Add Service ID as suffix to Client ID** - optional flag. Server id will be added as a suffix to the client id when enabled. It is helpful when running in microservices mode to allow rule nodes on each node to connect to the broker without the errors.
- **Clean session** - establishes a non persistent connection with the broker when enabled.
- **SSL Enable/Disable** - enable/disable secure communication.  
- **Credentials** - MQTT connection credentials. Can be either *Anonymous*, *Basic* or *PEM*.

Different Authentication credentials are supported for external MQTT broker:

- Anonymous - no authentication
- Basic - username\password pair is used for authenticating
- PEM - PEM certificates are used for Authentication

If **PEM** credentials type is selected, the following configuration should be provided:

- CA certificate file
- Certificate file
- Private key file
- Private key password

<br>

**Published body** - Node will send full Message payload to the MQTT topic.
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload to the MQTT broker.

In case of successful message publishing, original Message will be passed to the next nodes via **Success** chain, 
otherwise **Failure** chain is used.

**MQTT retransmission mechanism**

The MQTT node uses ThingsBoard's internal MQTT client.

{% if docsPrefix contains "paas" %}
{% include docs/user-guide/mqtt-retransmission-mechanism.md show-yml-config=false %}
{% else %}
{% include docs/user-guide/mqtt-retransmission-mechanism.md show-yml-config=true %}
{% endif %}

When the message is dropped, the corresponding rule engine message is routed via **Failure** chain with the appropriate exception message.

## RabbitMQ node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-rabbitmq.png)

Publish incoming message payload to the RabbitMQ.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-rabbitmq-config.png)

- **Exchange name pattern** - the exchange to publish the message to. Can be a static string, or pattern that is resolved using Message Metadata properties. For example <code>${deviceType}</code> .
- **Routing key pattern** - the routing key. Can be a static string, or pattern that is resolved using Message Metadata properties. For example <code>${deviceType}</code> .
- **Message properties** - optional routing headers. Supported headers *BASIC*, *TEXT_PLAIN*, *MINIMAL_BASIC*, *MINIMAL_PERSISTENT_BASIC*, *PERSISTENT_BASIC*, *PERSISTENT_TEXT_PLAIN*
- **Host** - default host to use for connections
- **Port** - default port to use for connections
- **Virtual host** - the virtual host to use when connecting to the broker
- **Username** - AMQP user name to use when connecting to the broker
- **Password** - AMQP password to use when connecting to the broker
- **Automatic recovery** - enables or disables automatic connection recovery
- **Connection timeout** - connection TCP establishment timeout in milliseconds; zero for infinite
- **Handshake timeout** - the AMQP0-9-1 protocol handshake timeout, in milliseconds
- **Client properties** - additional properties that are sent to the server during connection startup 

**Published body** - Node will send full Message payload to the RabbitMQ. 
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload.

In case of successful message publishing, original Message will be passed to the next nodes via **Success** chain, 
otherwise **Failure** chain is used.

<br>

## REST API call node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-rest-api-call.png)

Invoke REST API calls to the external REST server.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-rest-api-call-config.png)

- **Endpoint URL pattern** - Can be a static string, or pattern that is resolved using Message Metadata properties. For example <code>${deviceType}</code>
- **Request method** - *GET*, *POST*, *PUT*, *DELETE*
- **Headers** - request headers, header or value can be a static string, or pattern that is resolved using Message Metadata properties.

**Endpoint URL**

URL can be a static string or a pattern. Only Message metadata is used for resolving patterns. 
So property names that are used in the patterns must exist in the Message Metadata, otherwise raw pattern will be added into URL.

For example, if Message payload contains property **deviceType** with value **container**, then this pattern: 

<code>http://localhost/api/${deviceType}/update</code> 

will be resolved to 

<code>http://localhost/api/container/update</code>   

**Headers**

Collection of header name/value can be configured. Those headers will be added into Rest request. Pattern should be used for configured both header name and header value.
For example <code>${deviceType}</code>. Only Message metadata is used for resolving patterns. 
So property names that are used in the pattern must exist in the Message Metadata, otherwise raw pattern will be added into header. 

**Request body** - Node will send full Message payload to the configured REST endpoint. 
If required, Rule Chain can be configured to use chain of Transformation Nodes for sending correct Payload.

**Outbound message** from this node will contain response **status**, **statusCode**, **statusReason** and responce **headers** in the Message metadata.
Outbound Message payload will be the same as response body. Original Message type and originator will not be changed.

<br>

To send a single file as request body, add a field **attachments** to the message **metadata** with file uuid stored in DataBase. In that case any message data will be ignored and only file content will be sent. 
To define a request content type use the header setting like

<code>Content-Type: application/json; charset=UTF-8</code>

Here an example of message **metadata** to send a single file:

{% highlight javascript %}
{
  "attachments": "e18b6950-dfca-11eb-affb-8db134b46d68"
}
{% endhighlight %}

**NOTE**: This is part of [File Storage](/docs/{{docsPrefix}}user-guide/file-storage/) feature supported by [ThingsBoard Professional Edition](/products/thingsboard-pe/).

<br>

In case of successful request, outbound message will be passed to the next nodes via **Success** chain, 
otherwise **Failure** chain is used.

<br>

## Send email Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-send-email.png)

Node sends incoming message using configured Mail Server. This Node works only with messages that where created using 
[**To Email**](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/transformation-nodes/#to-email-node) transformation Node, please connect this Node with **To Email** Node using **Success** chain.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-send-email-config.png)

- **Use system SMTP settings** - if enabled default Mail Server configured on System level will be used
- **Protocol** - Mail Server transport protocol: *SMTP* or *SMTPS*
- **SMTP host** - Mail Server host
- **SMTP port** - Mail Server port
- **Timeout ms** - read timeout in milliseconds
- **Enable TLS** - if true, enables the use of the STARTTLS command (if supported by the server)
- **Username** - username for the account at the mail host, if any
- **Password** - password for the account at the mail host, if any

This Node can work with default Mail Server configured on System level.
Please find more details about [how to configure default System SMTP Settings.](/docs/{{docsPrefix}}user-guide/ui/mail-settings/)

If specific Mail Server is required for this node - disable **Use system SMTP settings** checkbox and configure Mail Server manually.

<br>

Additionally this node can create email attachments if incoming message has prepared **attachments** metadata field with reference to files stored in DataBase.

Multiple attachments supported. Use a comma separated no whitespace references (uuids) to send many files. Here an example of message **metadata**:

{% highlight javascript %}
{
  "attachments": "e18b6950-dfca-11eb-affb-8db134b46d68,17383b4c-6000-4bb8-be04-b1cb15aa18c5"
}
{% endhighlight %}

**NOTE**: This is part of [File Storage](/docs/{{docsPrefix}}user-guide/file-storage/) feature supported by [ThingsBoard Professional Edition](/products/thingsboard-pe/).

<br>

In case of successful mail sending, original Message will be passed to the next nodes via **Success** chain, 
otherwise **Failure** chain is used.

You can see the real life example, where this node is used, in the next tutorial:

- [Send Email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/)

<br>

## Send notification node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.5</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-send-notification.png)

The node can send notification to recipients group using the template.
The template needs to be of a 'Rule node' type. You can use incoming message data and metadata in your template (see [templatization help page](/docs/{{docsPrefix}}user-guide/notifications/#rule-node) for this notification type).

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-send-notification-config.png)

- **Template** - specify a notification template;
- **Recipients** - notification recipients.

<br>

## Send SMS node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.2</em></strong></td>
     </tr>
   </thead>
</table> 

Node is able to construct SMS message based on the metadata fields from the incoming message and send it using AWS SNS or Twilio SMS providers.
We recommend enabling debug mode for the rule node.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-send-sms.png)

- **Use system SMS provider settings** - if enabled default SMS Provider Server configured on System level will be used.
{% unless docsPrefix contains "paas/" %}
See [SMS Provider](/docs/{{docsPrefix}}user-guide/ui/sms-provider-settings) settings for more details;
{% endunless %}
- **Phone Numbers To template** - Allows to configure multiple phone numbers where the SMS will be sent to. Optionally, you may reference fields from the message metadata.  
- **SMS message template** - Allows to configure body of the SMS message. Optionally, you may reference fields from the message metadata.

This Node can work with default SMS provider configured on System level. 
If SMS message will be sent to all recipients successfully, original Message will be passed to the next nodes via Success chain, otherwise Failure chain is used.

## Send to Slack node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 3.5</em></strong></td>
     </tr>
   </thead>
</table> 

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-send-to-slack.png)

The node create a message based on the incoming data and metadata, and send it via [Slack](https://slack.com/) to a public channel, private channel or direct message.
If chosen to use system Slack settings, the node will take the Slack API token from system settings. Otherwise, you need to specify the token in the node configuration.
Learn more about how to configure Slack settings in Thingsboard [here](/docs/{{docsPrefix}}user-guide/ui/slack-settings/).

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-send-to-slack-config.png)

- **Message template** - the template for a Slack message; you may optionally reference fields from incoming message data and metadata;
- **Use system slack settings** - if enabled, the node will take the Slack API token from system settings;
- **Slack API token** - token to integrate Thingsboard with Slack;
- **Slack channel type** - send message via Slack to a public channel, private channel or direct message;
- **Conversation** - public channel, private channel or user in Slack to send message to.

{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
## Twilio SMS Node

<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.0.2</em></strong></td>
     </tr>
   </thead>
</table> 

{% assign rulenode = "Twilio SMS" %}{% include templates/pe-rule-node-banner.md %}

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-twilio-sms.png)

Sends incoming message payload as SMS message via Twilio service.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/external-twilio-sms-config.png)

- **Phone Number From** - can be set direct phone number as Number From of SMS
                          or pattern can be used, that will be resolved to the real Number From using Message metadata.
- **Phone Numbers To** - comma separated recipient Phone Numbers list. Can be set direct phone numbers or pattern can be used, that will be resolved to the real phone numbers using Message metadata.
- **Twilio Account SID** - your Account Sid at twilio.com/console
- **Twilio Account Token** - your Account Token at twilio.com/console

SMS message will be sent to all recipients taken from **Phone Numbers To** list.

If SMS message will be sent to all recipients successfully, original Message will be passed to the next nodes via **Success** chain, otherwise **Failure** chain is used.

## Twilio voice node

![image](/images/user-guide/rule-engine-2-0/nodes/external-nodes/twilio-voice-node.png)

**Sends voice message via Twilio.**

Will send message payload as voice message via Twilio, using Twilio text to speech service.

{% endif %}