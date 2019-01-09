{
  "name": "Sensor Downlink Converter",
  "type": "DOWNLINK",
  "debugMode": true,
  "configuration": {
    "encoder": "// Encode downlink data from incoming Rule Engine message\n\n// msg - JSON message payload downlink message json\n// msgType - type of message, for ex. 'ATTRIBUTES_UPDATED', 'POST_TELEMETRY_REQUEST', etc.\n// metadata - list of key-value pairs with additional data about the message\n// integrationMetadata - list of key-value pairs with additional data defined in Integration executing this converter\n\n/** Encoder **/\n\nvar data = {};\n\n// Process data from incoming message and metadata\n\ndata = msg.params.replace(/\\\"/g, \"\");\n\n// Result object with encoded downlink payload\nvar result = {\n\n    // downlink data content type: JSON, TEXT or BINARY (base64 format)\n    contentType: \"JSON\",\n\n    // downlink data\n    data: JSON.parse(data),\n\n    // Optional metadata object presented in key/value format\n    metadata: {\n        topic: 'devices/' + msg.deviceName + '/temperature/settings'\n    }\n\n};\n\nreturn result;"
  },
  "additionalInfo": null
}