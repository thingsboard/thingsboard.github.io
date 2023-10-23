## Summary

Templatization is the process of using predefined templates to dynamically insert or substitute values into text.
These templates serve as placeholders for variables that can be filled in later with actual data. 

In the context of rule engine, it allows for dynamic configuration of rule nodes by replacing static values in the configuration fields with real-time values from the incoming message or its metadata. 
This enables more flexible and automated handling of data, making it easier to perform conditional operations based on varying inputs.

## Syntax

Templates start with a dollar sign (`$`), followed by brackets. 
Square brackets (`[]`) are used for message keys, while curly brackets (`{}`) are used for message metadata keys. Inside the brackets, specify the key name you're interested in. 
For example, `$[messageKey]` - message template, `${metadataKey}` - metadata template. `messageKey` and `metadataKey` represent any key name that may exist within the message or its metadata.
Also, templates can be combined with regular text. For example: "Fuel tanks are filled to `$[fuelLevel]`%".

## Example

Let's review an example. First JSON is message, second is message metadata:

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

Assume, we detected an unusually high wind speed and want to send this telemetry reading to some external REST API. Every reading needs to be associated with specific device and location - this information is available only in real-time. We can use templates extract necessary data and to construct URL for sending data:

`example-base-url.com/report-reading?location=$[location]&deviceName=${deviceName}` 

This template will resolve to: 

`example-base-url.com/report-reading?location=riverside&deviceName=weather1`

Templates are ideal for scenarios where the specific values aren't known at the time of configuration but will become available at runtime.

## Notes

There are a few caveats when using templates:
- Not all JSON data types can be extracted: templates with arrays and objects will not be replaced with a value.
- If a specified key is missing, the template will not be replaced with a value.
- Template nesting (templates inside other templates) are not supported and will not be replaced with a value.

You can access nested keys in JSON object using dot notation: `$[object.key]`.

To illustrate written above let's review an example. Here's content of a message:
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
Here's a table with comparison between templates and extracted values:

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

> **Note**: Values in message metadata are always stored as strings.