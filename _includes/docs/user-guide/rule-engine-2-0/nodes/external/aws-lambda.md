Invokes AWS Lambda functions, sending the incoming message data as the request payload. The node uses the RequestResponse invocation type to execute functions synchronously and
returns the Lambda function's response as the data of the outgoing message. Function names and qualifiers can be dynamically populated with data from the incoming message.

## Configuration

### Function configuration

Define the target Lambda function and how to invoke it. Both the function name and qualifier support [templatization](/docs/{{docsPrefix}}user-guide/templatization/) to dynamically
incorporate data from incoming messages.

#### Function name

The name or Amazon Resource Name (ARN) of the Lambda function to invoke. This field is required and cannot be blank.

You can specify the function name in several formats:

- **Function name**: `my-function`
- **Partial ARN**: `123456789012:function:my-function`
- **Full ARN**: `arn:aws:lambda:us-west-2:123456789012:function:my-function`

#### Qualifier

Specifies a version or alias of the Lambda function to invoke. This field is optional and defaults to `$LATEST` if not specified.

Common qualifier values:

- `$LATEST` – Invokes the latest unpublished version
- Version number (e.g., `1`, `2`) – Invokes a specific published version
- Alias name (e.g., `PROD`, `DEV`) – Invokes the version associated with an alias

### AWS Credentials

Provide authentication credentials to access your AWS Lambda service.

#### AWS Access Key ID

The access key ID for your AWS account. This credential is used to sign requests to AWS Lambda. This field is required and cannot be blank.

#### AWS Secret Access Key

The secret access key corresponding to your access key ID. This field is required and cannot be blank.

{% capture credentials_note %}
**Note**: If you use Professional Edition, we highly recommend using [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} to securely store your secret key.
{% endcapture %}
{% include templates/info-banner.md content=credentials_note %}

#### AWS Region

The AWS region where your Lambda function is deployed. This field is required and cannot be blank. The region must match the location of your Lambda function.

**Example values**:

- `us-east-1` (US East, N. Virginia)
- `eu-west-1` (Europe, Ireland)
- `ap-southeast-1` (Asia Pacific, Singapore)

### Advanced settings

#### Connection timeout

The maximum time (in seconds) to wait for establishing a connection to AWS Lambda before the request fails. Default: 10 seconds.

This timeout applies only to the connection phase, not the entire request.

#### Request timeout

The maximum time (in seconds) to wait for the Lambda function to process the request and return a response before the request fails. Default: 5 seconds.

This timeout applies to the entire request-response cycle after the connection is established.

{% capture timeout_warning %}
**Important**: Lambda functions have a maximum execution time limit (up to 15 minutes depending on configuration). Ensure your request timeout is appropriate for your function's
expected execution time. For long-running functions, increase this value accordingly.
{% endcapture %}
{% include templates/warn-banner.md content=timeout_warning %}

#### Tell Failure if AWS Lambda function execution raises exception

Controls how the node handles Lambda function errors.

- **Enabled** – If the Lambda function execution results in an error (indicated by a non-null `FunctionError` field in the response), the message is routed to the `Failure`
  connection. The function's error response is included in the failure message.
- **Disabled** (Default) – The node routes the message to the `Success` connection regardless of whether the Lambda function encountered an error. The response (including any error
  information) is passed through as the message data.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbAwsLambdaNodeConfiguration",
  "type": "object",
  "properties": {
    "accessKey": {
      "type": "string",
      "minLength": 1,
      "description": "AWS Access Key ID for authentication."
    },
    "secretKey": {
      "type": "string",
      "minLength": 1,
      "description": "AWS Secret Access Key for authentication."
    },
    "region": {
      "type": "string",
      "minLength": 1,
      "description": "AWS region where the Lambda function is deployed."
    },
    "functionName": {
      "type": "string",
      "minLength": 1,
      "description": "Name or ARN of the Lambda function to invoke (supports templatization)."
    },
    "qualifier": {
      "type": "string",
      "description": "Optional version or alias qualifier (defaults to $LATEST if not specified)."
    },
    "connectionTimeout": {
      "type": "integer",
      "minimum": 0,
      "description": "Maximum time in seconds to wait for connection establishment."
    },
    "requestTimeout": {
      "type": "integer",
      "minimum": 0,
      "description": "Maximum time in seconds to wait for Lambda function response."
    },
    "tellFailureIfFuncThrowsExc": {
      "type": "boolean",
      "description": "Whether to route to Failure connection if Lambda function execution results in an error."
    }
  },
  "required": [
    "accessKey",
    "secretKey",
    "region",
    "functionName"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node constructs a Lambda invocation request:
    - The **function name** and **qualifier** (if specified) are processed, replacing templates with values from the incoming message data and metadata.
    - An `InvokeRequest` is created with the message data as the payload and the RequestResponse invocation type.
2. The invocation request is sent asynchronously to AWS Lambda with the configured timeouts:
    - **Connection timeout** applies to establishing the connection to AWS Lambda.
    - **Request timeout** applies to waiting for the Lambda function to complete and return a response.
3. When Lambda responds:
    - If **Tell Failure if AWS Lambda function execution raises exception** is enabled and the response contains a function error (non-null `FunctionError` field), the message is
      routed to the `Failure` connection with the error details.
    - Otherwise, the Lambda function's response payload is extracted and replaces the incoming message data.
    - The request ID from AWS is added to the message metadata.
    - The originator and message type from the incoming message remain unchanged.
4. The resulting message is forwarded via the `Success` connection (or `Failure` if an error was detected and the setting is enabled).

## Output connections

- **Success**
    - The Lambda function was invoked successfully and returned a response within the configured timeout.
    - This connection is used regardless of whether the Lambda function itself encountered an error, unless **Tell Failure if AWS Lambda function execution raises exception** is
      enabled.
- **Failure**
    - Failed to establish a connection to AWS Lambda within the configured **Connection timeout**.
    - The Lambda function did not respond within the configured **Request timeout**.
    - Invalid AWS credentials or insufficient permissions to invoke the Lambda function.
    - The specified Lambda function does not exist or is not accessible in the specified region.
    - The Lambda function execution resulted in an error and **Tell Failure if AWS Lambda function execution raises exception** is enabled.
    - An unexpected error occurred during processing.

## Examples

### Example 1 — Basic invocation

Invoke a Lambda function that processes incoming message data and returns a transformed result.

**Incoming message**

Data:

```json
{
  "value": 100,
  "multiplier": 3
}
```

**Node configuration**

```json
{
  "accessKey": "AKIAIOSFODNN7EXAMPLE",
  "secretKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "region": "us-east-1",
  "functionName": "calculate",
  "qualifier": "$LATEST",
  "connectionTimeout": 10,
  "requestTimeout": 5,
  "tellFailureIfFuncThrowsExc": false
}
```

**Lambda function response**

```json
{
  "result": 300,
  "operation": "multiplication"
}
```

**Outgoing message**

Metadata (with added `requestId`):

```json
{
  "requestId": "1234abcd-56ef-78gh-90ij-klmnopqrstuv"
}
```

Data:

```json
{
  "result": 300,
  "operation": "multiplication"
}
```

Routed via the `Success` connection.

**Result**

The Lambda function received the incoming message data, performed a calculation, and returned the result. The original message data was replaced with the Lambda function's
response, and the AWS request ID was added to the metadata.

### Example 2 — Error handling

Invoke a Lambda function that validates input data. When the function detects invalid input and raises an exception, the node routes the message to the Failure connection.

**Incoming message**

Data:

```json
{
  "value": -50
}
```

**Node configuration**

```json
{
  "accessKey": "AKIAIOSFODNN7EXAMPLE",
  "secretKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "region": "us-east-1",
  "functionName": "validate",
  "qualifier": "$LATEST",
  "connectionTimeout": 10,
  "requestTimeout": 5,
  "tellFailureIfFuncThrowsExc": true
}
```

**Lambda function behavior**

The Lambda function detects that the value is negative and throws an exception:

```
Validation error: Value must be positive
```

**Outgoing message**

Data (original message data preserved):

```json
{
  "value": -50
}
```

Metadata:

```json
{
  "error": "class java.lang.RuntimeException: Validation error: Value must be positive",
  "requestId": "5678wxyz-12ab-34cd-56ef-ghijklmnopqr"
}
```

Routed via the `Failure` connection.

**Result**

The Lambda function raised an exception. Because **Tell Failure if AWS Lambda function execution raises exception** is enabled, the node captured this error and routed the message
to the `Failure` connection with error details in the metadata.
