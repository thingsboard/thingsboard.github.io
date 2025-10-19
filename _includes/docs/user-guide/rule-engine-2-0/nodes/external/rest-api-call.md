Sends HTTP requests to external endpoints with configurable request methods, headers, authentication, and proxy settings. Supports GET, POST, PUT, PATCH, and DELETE operations with
multiple authentication methods including TLS/SSL encryption.

## Configuration

### Endpoint URL pattern

Specifies the endpoint URL where requests will be sent. Supports [templatization](/docs/{{docsPrefix}}user-guide/templatization/).

### Request method

The HTTP method to use for the request. Available options: **GET**, **POST**, **PUT**, **PATCH**, **DELETE**.

### Headers

Key-value pairs of HTTP headers to include in the request. Both keys and values support [templatization](/docs/{{docsPrefix}}user-guide/templatization/).

### Message settings

#### Parse to plain text

Controls how the message data is processed before sending:

- **Disabled** (default) – The message data is sent as-is
- **Enabled** – If the message data is a JSON-encoded string (wrapped in double quotes), the outer JSON encoding is removed

**Example**:

Message data: `"\"Temperature is 25.5°C\""`

- Parse to plain text **OFF**: Sends `"\"Temperature is 25.5°C\""` (with JSON encoding)
- Parse to plain text **ON**: Sends `"Temperature is 25.5°C"` (without outer quotes)

{% capture parse_note %}
**Note**: This setting only affects JSON-encoded strings (strings wrapped in double quotes). Regular JSON objects like `{"temperature":25.5}` are sent unchanged regardless of this
setting.
{% endcapture %}
{% include templates/info-banner.md content=parse_note %}

#### Without request body

- **Disabled** (default) – Request body contains the message data for POST, PUT, PATCH, and DELETE methods
- **Enabled** – No request body is sent, even for methods that typically include one

{% capture attachment_note %}
**Note**: When request body is enabled, if the message metadata contains an `attachments` field with blob entity IDs, the content of the first blob entity will be used as the
request body instead of the message data.
{% endcapture %}
{% include templates/info-banner.md content=attachment_note %}

### Connection settings

#### Read timeout (ms)

The maximum time in milliseconds to wait for a response from the server.

- **0** (default) – Infinite timeout (waits indefinitely)
- **> 0** – Timeout after the specified milliseconds

#### Max number of parallel requests

Limits the number of concurrent requests the node can make.

- **0** (default) – No limit on parallel processing
- **> 0** – Maximum number of requests that can be in-flight simultaneously

When the limit is reached, new messages wait until an in-flight request completes. If a message waits longer than the read timeout, it fails with a timeout error.

#### Max response size (in KB)

The maximum size of HTTP response body that can be buffered in memory. Responses exceeding this limit will fail with an error. Default: 256 KB

The system enforces a maximum limit through the `tb.http.maxInMemoryBufferSizeInKb` system property (default: 25000 KB). If the configured value exceeds this limit, the node fails
to initialize.

### Proxy settings

#### Enable proxy

- **Disabled** (default) – Direct connection to the endpoint
- **Enabled** – Routes requests through a proxy server

When enabled, you can choose between configuring proxy settings manually or using system proxy properties.

#### Use system proxy properties

When **Enable proxy** is enabled, this option determines the proxy configuration source:

- **Disabled** (default) – Manually configure proxy settings below
- **Enabled** – Use system proxy properties

**System properties** (at least one set must be configured):

HTTP proxy:

- `http.proxyHost` – HTTP proxy hostname
- `http.proxyPort` – HTTP proxy port

HTTPS proxy:

- `https.proxyHost` – HTTPS proxy hostname
- `https.proxyPort` – HTTPS proxy port

SOCKS proxy:

- `socksProxyHost` – SOCKS proxy hostname
- `socksProxyPort` – SOCKS proxy port
- `socksProxyVersion` – SOCKS version (4 or 5, defaults to 5)

**Authentication properties** (for all proxy types):

- `tb.proxy.user` – Proxy username
- `tb.proxy.password` – Proxy password

{% capture proxy_note %}
**Note**: If system proxy properties are enabled but not configured, the node will fail to initialize.
{% endcapture %}
{% include templates/info-banner.md content=proxy_note %}

#### Manual proxy configuration

When **Use system proxy properties** is disabled, configure the proxy manually:

- **Proxy host** – The hostname or IP address of the proxy server
- **Proxy port** – The port number of the proxy server (1-65535)
- **Proxy user** – Username for proxy authentication
- **Proxy password** – Password for proxy authentication

### Credentials

Authentication credentials for connecting to the endpoint. The available credential types are:

#### Anonymous

No authentication is provided. Use this when the endpoint allows anonymous access or when authentication is handled via headers.

#### Basic

HTTP Basic authentication with username and password.

**Configuration**:

- **Username** – The username for authentication
- **Password** – The password for authentication

The credentials are automatically encoded and sent in the `Authorization` header as `Basic <base64-encoded-credentials>`.

#### PEM Certificate

Certificate-based authentication using PEM-encoded files. This provides mutual TLS authentication.

**Configuration**:

- **Server CA certificate file** – The Certificate Authority (CA) certificate that signed the server's certificate. Used to verify the server's identity.
- **Client certificate file** – The client's public certificate. Sent to the server for client authentication.
- **Client private key file** – The client's private key corresponding to the client certificate.
- **Private key password** – Password if the private key file is encrypted.

{% capture cert_requirement_note %}
**Note**: Provide either a Server CA certificate file or a pair of Client certificate and Client private key files when using PEM credentials.
{% endcapture %}
{% include templates/info-banner.md content=cert_requirement_note %}

{% capture credentials_note %}
**Note**: Certificate and key files can be uploaded directly or referenced from [Secrets storage](/docs/pe/user-guide/secrets-storage/){:target="_blank"} for enhanced security.
{% endcapture %}
{% include templates/info-banner.md content=credentials_note %}

### Advanced settings

#### Force acknowledgement

The force acknowledgement mechanism is controlled by the `ACTORS_RULE_EXTERNAL_NODE_FORCE_ACK` environment variable. When this variable is set to `true`, it applies to all external
nodes including this REST API call node.

**Behavior when force acknowledgement is enabled**:

- The incoming message is acknowledged immediately
- The HTTP request executes
- Once the request completes, the response is placed into a new message
- The new message is added to the queue for processing by the next node
- This prevents message processing timeouts for slow endpoints

**Behavior when force acknowledgement is disabled** (default):

- The original incoming message is held until the HTTP request completes
- The original message is transformed with the response data
- The transformed message is then passed to the next node

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbRestApiCallNodeConfiguration",
  "type": "object",
  "properties": {
    "restEndpointUrlPattern": {
      "type": "string",
      "minLength": 1,
      "description": "Endpoint URL (supports templatization)."
    },
    "requestMethod": {
      "type": "string",
      "enum": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "description": "HTTP request method."
    },
    "headers": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "description": "HTTP headers as key-value pairs (supports templatization)."
    },
    "readTimeoutMs": {
      "type": "integer",
      "minimum": 0,
      "description": "Read timeout in milliseconds (0 = infinite)."
    },
    "maxParallelRequestsCount": {
      "type": "integer",
      "minimum": 0,
      "description": "Maximum concurrent requests (0 = unlimited)."
    },
    "parseToPlainText": {
      "type": "boolean",
      "description": "Whether to convert JSON message data to plain text."
    },
    "enableProxy": {
      "type": "boolean",
      "description": "Whether to use proxy server."
    },
    "useSystemProxyProperties": {
      "type": "boolean",
      "description": "Whether to use system proxy properties."
    },
    "proxyHost": {
      "type": "string",
      "description": "Proxy server hostname (when not using system properties)."
    },
    "proxyPort": {
      "type": "integer",
      "minimum": 1,
      "maximum": 65535,
      "description": "Proxy server port (when not using system properties)."
    },
    "proxyUser": {
      "type": "string",
      "description": "Proxy authentication username."
    },
    "proxyPassword": {
      "type": "string",
      "description": "Proxy authentication password."
    },
    "credentials": {
      "type": "object",
      "description": "Authentication credentials for the endpoint."
    },
    "ignoreRequestBody": {
      "type": "boolean",
      "description": "Whether to exclude request body for POST/PUT/PATCH/DELETE."
    },
    "maxInMemoryBufferSizeInKb": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum in-memory buffer size in KB."
    }
  },
  "additionalProperties": false
}
```
{: .copy-code.expandable-4 }

## Rule node initialization

When the rule node is initialized, it creates an HTTP client with the configured settings. The client uses a connection pool with a maximum number of connections that can be
configured via the `TB_RE_HTTP_CLIENT_POOL_MAX_CONNECTIONS` environment variable (defaults to a value determined by the Reactor Netty library).

Once initialization completes, the client is ready to process messages.

## Message processing

For each incoming message, the node performs the following steps:

1. If **Force acknowledgement** is enabled, the incoming message is acknowledged immediately.
2. If **Max number of parallel requests** is configured, the node waits for an available slot. If no slot becomes available within the read timeout period, the message fails with a
   timeout error.
3. The node processes the **Endpoint URL pattern**, replacing templates with values from the incoming message data and metadata to construct the final URL.
4. HTTP headers are prepared:
    - Configured headers are added with template processing
    - For Basic credentials, an `Authorization` header is added with base64-encoded credentials
5. The request body is prepared:
    - If **Without request body** is enabled, no body is sent
    - Otherwise, for POST, PUT, PATCH, and DELETE methods:
        - If the message metadata contains an `attachments` field with blob entity IDs, the content of the first blob entity is used as the request body
        - Otherwise, the message data is used as the request body
        - If **Parse to plain text** is enabled, JSON-encoded strings are unwrapped
6. The HTTP request is sent to the endpoint.
7. When the response is received:
    - On success (2xx status code): The response information is added to the message and it is forwarded via the `Success` connection
    - On failure (non-2xx status code or exception): The error information is added to the message and it is forwarded via the `Failure` connection
    - See the "Outgoing message format" section for details on how the response/error information is structured
8. If **Max number of parallel requests** is configured, the request slot is released for use by the next message.

## Outgoing message format

**On success** (2xx response):

Message metadata is enriched with the following keys:

- `status` – HTTP status name (e.g., "OK", "CREATED")
- `statusCode` – HTTP status code (e.g., "200", "201")
- `statusReason` – HTTP status reason phrase
- Response headers – Each response header is added as a metadata key-value pair
    - Single-value headers: Added as string values
    - Multi-value headers: Added as JSON array strings

Message data is replaced with the response body. If the response has no body, the data is set to `{}`.

**On failure** (non-2xx response or exception):

Message metadata is enriched with the following keys:

- `error` – Error description in format `ExceptionClass: error message`
- `status` – HTTP status name (if available)
- `statusCode` – HTTP status code (if available)
- `statusReason` – HTTP status reason phrase (if available)
- `error_body` – Response body from failed request (if available)
- Response headers – Each response header (if available)

Message data remains unchanged from the original message.

**Force acknowledgement behaviour:**

When **Force acknowledgement** is disabled, the original incoming message is transformed with the response information described above.

When **Force acknowledgement** is enabled, a new message is created with the response information described above.

## Output connections

- **Success**
    - The HTTP request completed successfully with a 2xx status code
- **Failure**
    - The HTTP request returned a non-2xx status code
    - The request failed due to network issues, timeout, or connection errors
    - An unexpected error occurred during processing
    - Timeout occurred while waiting for an available request slot

## Examples

### Example 1

A smart device needs to send a control command to an external device management system and receive the execution result. The endpoint requires Basic authentication and expects a
JSON command in the request body. Force acknowledgement is disabled.

**Incoming message**

Originator: `DEVICE` (Smart Lock)

Data:

```json
{
  "command": "unlock",
  "duration": 30,
  "reason": "owner_request"
}
```

Metadata:

```json
{
  "deviceId": "lock-bedroom-01",
  "deviceType": "smartLock"
}
```

**Node configuration**

```json
{
  "restEndpointUrlPattern": "https://api.smart-home.com/v1/devices/${deviceId}/commands",
  "requestMethod": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "readTimeoutMs": 5000,
  "maxParallelRequestsCount": 10,
  "parseToPlainText": false,
  "enableProxy": false,
  "credentials": {
    "type": "basic",
    "username": "api-client",
    "password": "secure-password"
  },
  "ignoreRequestBody": false,
  "maxInMemoryBufferSizeInKb": 256
}
```

**Outgoing message** (assuming successful response with status 200)

Data:

```json
{
  "commandId": "cmd-98765",
  "status": "executed",
  "executedAt": "2023-01-01T10:30:00Z",
  "result": {
    "success": true,
    "lockState": "unlocked",
    "autoLockIn": 30
  }
}
```

Metadata:

```json
{
  "deviceId": "lock-bedroom-01",
  "deviceType": "smartLock",
  "status": "OK",
  "statusCode": "200",
  "statusReason": "OK",
  "Content-Type": "application/json",
  "X-Request-Id": "req-789xyz"
}
```

**Result**

The node constructs the endpoint URL as `https://api.smart-home.com/v1/devices/lock-bedroom-01/commands` and prepares the following headers:

- `Content-Type: application/json`
- `Authorization: Basic YXBpLWNsaWVudDpzZWN1cmUtcGFzc3dvcmQ=`

The request body contains the command: `{"command":"unlock","duration":30,"reason":"owner_request"}` and a POST request is sent.

The command was successfully sent to the external endpoint. The response confirms command execution and provides the current lock state. The message is routed via the `Success`
connection with the execution result available for further processing by downstream nodes.
