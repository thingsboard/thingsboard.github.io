Executes user-defined function to transform an incoming message. The script can modify the message data, metadata, and type. 
Based on the script's logic, it can produce a single modified message or multiple new messages, each with a customized content.
Supports **TBEL** and **JavaScript**.

## Configuration

The node provides a choice of scripting language and a code editor to write the transformation logic.

- **Language Selector** - choose between **TBEL** (ThingsBoard Expression Language) or **JavaScript**.
- **Script Editor** - a text area where you write the body of the transformation function.

### Transformation function

The code entered into the script editor acts as the body of a transformation function. This function implicitly receives three arguments that are available as variables in your
script:

- `msg` - the data of the incoming message, typically as a JSON object.
- `metadata` - the metadata of the incoming message, as a key-value object where all values are strings.
- `msgType` - the type of the incoming message, as a string.

The function must **return** an object (for a single output message) or an array of objects (for multiple output messages). Each object must contain the following keys:

- `msg` - the data for the new outgoing message.
- `metadata` - the metadata for the new message.
- `msgType` - the type for the new message.

### JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "TbTransformMsgNodeConfiguration",
  "type": "object",
  "properties": {
    "scriptLang": {
      "type": "string",
      "enum": [
        "JS",
        "TBEL"
      ],
      "description": "The scripting language to use."
    },
    "jsScript": {
      "type": "string",
      "description": "The JavaScript transformation function body. Used when 'scriptLang' is set to 'JS'."
    },
    "tbelScript": {
      "type": "string",
      "description": "The TBEL transformation function body. Used when 'scriptLang' is set to 'TBEL'."
    }
  },
  "required": [
    "scriptLang"
  ],
  "additionalProperties": false
}
```
{: .copy-code.expandable-3 }

## Message processing algorithm

1. The node executes the user-defined script, passing the incoming message's `msg`, `metadata`, and `msgType` as arguments.
2. The script's return value determines the output:
    - If it returns a **single object**, one new message is prepared.
    - If it returns an **array of objects**, one new message is prepared for each object in the array.
3. For each new message to be created, the node constructs its content:
    - It uses the `msg`, `metadata`, and `msgType` values from the object returned by the script.
    - The message originator and other properties are preserved from the original message.
4. All newly created messages are sent out via the `Success` chain. The original message is acknowledged after all new messages have been successfully enqueued.
5. If the script encounters an error during execution (e.g., a syntax error or runtime exception), the original message is routed to the `Failure` chain.

## Output connections

- `Success`:
    - One or more transformed messages are sent through this chain.
- `Failure`:
    - If the script execution fails with an error.

## Examples

### Example 1 — Preparing multiple REST API requests

This example demonstrates how to generate multiple outgoing messages from a single trigger message. 
This is a common scenario when you need to fetch data from an external API that requires separate requests for different telemetry information.

**Scenario**: An incoming message specifies a list of metrics to be fetched from an external system. 
The script node acts as a request generator, iterating through the list and creating a separate, formatted JSON-RPC request message for each metric. 
These messages can then be individually processed by a "rest api call" node.

**Incoming message**

Data:

```json
{
  "metrics": [
    "voltage",
    "pressure",
    "signalStrength"
  ],
  "startTime": 1756289924769,
  "endTime": 1756389984769
}
```

Metadata:

```json
{
  "apiKey": "abc-123-def-456",
  "serialId": "19092601"
}
```

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "tbelScript": "// This array will hold the outgoing API request messages\nvar outgoingMessages = [];\n\n// Get the required values from the incoming message and metadata\nvar apiKey = metadata.apiKey;\nvar serialId = metadata.serialId;\nvar startTime = msg.startTime;\nvar endTime = msg.endTime;\n\n// Loop through each metric specified in the incoming message's data\nforeach(metric: msg.metrics) {\n    // For each metric, construct the body of the JSON-RPC request\n    var rpcRequestBody = {\n        jsonrpc: \"2.0\",\n        method: \"getData\",\n        version: \"v10.1\",\n        id: 1,\n        params: {\n            apiToken: apiKey,\n            serialId: serialId,\n            metric: metric, // This is the current metric from the array\n            startTime: startTime,\n            endTime: endTime\n        }\n    };\n\n    // Create the final outgoing message object\n    var outgoingMessage = {\n        // The API request body becomes the data of the new message\n        msg: rpcRequestBody,\n        // We can pass along the original metadata\n        metadata: metadata,\n        // Set a new type to indicate this is an API request\n        msgType: 'API_REQUEST'\n    };\n\n    // Add the newly created message to our list of outputs\n    outgoingMessages.push(outgoingMessage);\n}\n\n// Return the array of messages. One message will be sent for each metric\nreturn outgoingMessages;"
}
```

```javascript
// This array will hold the outgoing API request messages
var outgoingMessages = [];

// Get the required values from the incoming message and metadata
var apiKey = metadata.apiKey;
var serialId = metadata.serialId;
var startTime = msg.startTime;
var endTime = msg.endTime;

// Loop through each metric specified in the incoming message's data
foreach(metric: msg.metrics) {
    // For each metric, construct the body of the JSON-RPC request
    var rpcRequestBody = {
        jsonrpc: "2.0",
        method: "getData",
        version: "v10.1",
        id: 1,
        params: {
            apiToken: apiKey,
            serialId: serialId,
            metric: metric, // This is the current metric from the array
            startTime: startTime,
            endTime: endTime
        }
    };

    // Create the final outgoing message object
    var outgoingMessage = {
        // The API request body becomes the data of the new message
        msg: rpcRequestBody,
        // We can pass along the original metadata
        metadata: metadata,
        // Set a new type to indicate this is an API request
        msgType: 'API_REQUEST'
    };

    // Add the newly created message to our list of outputs
    outgoingMessages.push(outgoingMessage);
}

// Return the array of messages. One message will be sent for each metric
return outgoingMessages;
```

**Outgoing messages**

Three new messages are created and sent via the `Success` connection, one for each metric requested in the original message.

* Message 1: Request for `voltage`
    * Data:
      ```json
      {
        "jsonrpc": "2.0",
        "method": "getData",
        "version": "v10.1",
        "id": 1,
        "params": {
          "apiToken": "abc-123-def-456",
          "serialId": "19092601",
          "metric": "voltage",
          "startTime": 1756389924769,
          "endTime": 1756389984769
        }
      }
      ```
    * Type: `API_REQUEST`
* Message 2: Request for `pressure`
    * Data: (Identical to above, but `metric` is `pressure`)
* Message 3: Request for `signalStrength`
    * Data: (Identical to above, but `metric` is `signalStrength`)

**Explanation**: The script iterates over the metrics array from the incoming message. 
For each item in the array, it constructs a complete JSON-RPC request body, populating it with data from both the incoming message (`startTime`, `endTime`) 
and its metadata (`apiKey`, `serialId`). This results in three distinct messages, each ready to query the API for a specific metric.

### Example 2 — Parsing a REST API response

This example demonstrates how to transform a message with a custom data structure into a single, standardized telemetry message that ThingsBoard can store.
This is a common scenario when fetching data from external systems or third-party APIs.

**Scenario**: A "rest api call" node queries an external API and receives a response in a non-standard format.
The script node will parse this response, extract the relevant values, and reformat the message data into a structure that can be saved using "save time series" node.

**Incoming message**

Data:

```json
{
  "eventUuid": "68b03dde7eb1ad4ff09cadfe",
  "serialId": "19092601",
  "filters": {
    "sensorChannel": 1
  },
  "metric": "pressure",
  "unit": "kPa",
  "observations": [
    {
      "time": "2025-08-28T11:30:00Z",
      "value": 101.3
    },
    {
      "time": "2025-08-28T11:31:00Z",
      "value": 101.2
    },
    {
      "time": "2025-08-28T11:32:00Z",
      "value": 101.4
    },
    {
      "time": "2025-08-28T11:33:00Z",
      "value": 101.5
    },
    {
      "time": "2025-08-28T11:34:00Z",
      "value": 101.3
    }
  ]
}
```

**Node configuration**

```json
{
  "scriptLang": "TBEL",
  "tbelScript": "// Initialize an object to build the outgoing message\nvar output = {};\n\n// Create an array to store the formatted telemetry\nvar parsedTelemetry = [];\n\n// Loop through each observation in the incoming message\nforeach(observation: msg.observations) {\n    // Create a 'values' object for the current reading\n    var values = {};\n\n    // Set the telemetry key (e.g., \"pressure\") and its value.\n    values.put(msg.metric, observation.value);\n    // Add the formatted data point to the results array\n    parsedTelemetry.add({\n        // 'ts': Parse the time string and convert to a Unix timestamp (ms)\n        ts: new Date(observation.time).getTime(), // 'values': The telemetry key-value pair\n        values: values\n    });\n}\n\n// Set the outgoing message's data to the array of telemetry\noutput.msg = parsedTelemetry;\n\n// Copy the original metadata to the new message\noutput.metadata = metadata;\n\n// Set the message type for telemetry processing\noutput.msgType = \"POST_TELEMETRY_REQUEST\";\n\n// Return the complete outgoing message object\nreturn output;"
}
```

```javascript
// Initialize an object to build the outgoing message
var output = {};

// Create an array to store the formatted telemetry
var parsedTelemetry = [];

// Loop through each observation in the incoming message
foreach(observation: msg.observations) {
    // Create a 'values' object for the current reading
    var values = {};

    // Set the telemetry key (e.g., "pressure") and its value.
    values.put(msg.metric, observation.value);
    // Add the formatted data point to the results array
    parsedTelemetry.add({
        // 'ts': Parse the time string and convert to a Unix timestamp (ms)
        ts: new Date(observation.time).getTime(), // 'values': The telemetry key-value pair
        values: values
    });
}

// Set the outgoing message's data to the array of telemetry
output.msg = parsedTelemetry;

// Copy the original metadata to the new message
output.metadata = metadata;

// Set the message type for telemetry processing
output.msgType = "POST_TELEMETRY_REQUEST";

// Return the complete outgoing message object
return output;
```

**Outgoing messages**

Original message is transformed and sent via the `Success` chain.

Data:

```json
[{
    "ts": 1756380600000,
    "values": {
        "pressure": 101.3
    }
}, {
    "ts": 1756380660000,
    "values": {
        "pressure": 101.2
    }
}, {
    "ts": 1756380720000,
    "values": {
        "pressure": 101.4
    }
}, {
    "ts": 1756380780000,
    "values": {
        "pressure": 101.5
    }
}, {
    "ts": 1756380840000,
    "values": {
        "pressure": 101.3
    }
}]
```

Message type: `POST_TELEMETRY_REQUEST`

**Explanation**: The script processes the incoming message, which contains a batch of observations in a custom format. 
It iterates through the observations array, transforming each entry into the standard ThingsBoard timeseries format. 
It does this by converting the time string to a Unix timestamp and using the top-level metric field (`pressure`) as the dynamic telemetry key.
