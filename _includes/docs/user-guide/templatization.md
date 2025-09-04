* TOC
{:toc}

Templatization is the process of using predefined templates to dynamically insert or substitute values into text.
These templates serve as placeholders for variables that can be filled in later with actual data. 

In the context of rule engine, templates are used to extract data from incoming messages during runtime. 
This is particularly helpful in the rule node configuration, where templatization allows for dynamic configuration by replacing static values in the configuration fields with real-time values from the incoming messages. 
This enables more flexible and automated handling of data, making it easier to perform conditional operations based on varying inputs.

## Syntax

Templates start with a dollar sign (`$`), followed by brackets with a key name inside.
Square brackets (`[]`) are used for message payload keys, while curly brackets (`{}`) are used for message metadata keys.
For example: 
- `$[messageKey]` - will extract value of `messageKey` from incoming message payload.
- `${metadataKey}` - will extract value of `metadataKey` from incoming message metadata.

In the example above, `messageKey` and `metadataKey` represent any key name that may exist within the message payload or message metadata.

## Example

Let's review an example. The first JSON is the message payload, and the second is the message metadata:

```json
{
  "temperature": 26.5,
  "humidity": 75.2,
  "soilMoisture": 28.9,
  "windSpeed": 26.2,
  "location": "riverside"
}
```
```json
{
  "deviceType": "weather_sensor",
  "deviceName": "weather1",
  "ts": "1685379440000"
}
```

Assume we detected an unusually high wind speed and want to send this telemetry reading to some external REST API. 
Every reading needs to be associated with a specific device and location - this information is available only in real-time. 
We can use templates to extract the necessary data and to construct the URL for sending data:

`example-base-url.com/report-reading?location=$[location]&deviceName=${deviceName}` 

This template will be resolved to: 

`example-base-url.com/report-reading?location=riverside&deviceName=weather1`

Templates are ideal for scenarios where the specific values aren't known at the time of configuration but will become available at runtime.

## Notes

- Templates can be combined with regular text. For example: "Fuel tanks are filled to `$[fuelLevel]`%".
- You can access nested keys in JSON object using dot notation: `$[object.key]`.
- If a specified key is missing, or the value associated with that key is an object or an array, the template string will be returned unchanged.
- There are two special templates that serialize the entire message payload or message metadata into a JSON string:
  - `$[*]` – this template is replaced by the full message payload as a JSON string. For instance, if a template is "Raw data received: `$[*]`" and the incoming message payload is `{"mode": "eco", "targetTemp": 21, "active": true}`, the result is "Raw data received: {"mode":"eco","targetTemp":21,"active":true}".
  - `${*}` – similarly, this template is replaced by the full message metadata as a JSON string. For example, if a template is "Enriching data with context: `${*}`" and the metadata is `{"vehicleId": "TRUCK-042", "region": "EU-Central", "customer": "LogisticsCorp"}`, the result is "Enriching data with context: {"vehicleId":"TRUCK-042","region":"EU-Central","customer":"LogisticsCorp"}".

To illustrate the behavior with different data types, let's review an example. Here's the payload of a message:
```json
{
    "number": 123.45,
    "string": "text",
    "boolean": true,
    "array": [1, 2, 3],
    "object": {
        "property": "propertyValue"
    },
    "null": null
}
```
Here's a table with a comparison between templates and their extracted value

| **Template**       | **Extracted value** |
|--------------------|---------------------|
| $[number]          | 123.45              |
| $[string]          | text                |
| $[boolean]         | true                |
| $[array]           | $[array]            |
| $[object]          | $[object]           |
| $[object.property] | propertyValue       |
| $[null]            | null                |
| $[doesNotExist]    | $[doesNotExist]     |
