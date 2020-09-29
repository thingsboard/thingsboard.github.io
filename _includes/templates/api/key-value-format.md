## Key-value format

By default, ThingsBoard supports key-value content in JSON. Key is always a string, while value can be either string, boolean, double, long or JSON.
Using custom binary format or some serialization framework is also possible. See [protocol customization](#protocol-customization) for more details.
For example:

```json
{
 "stringKey":"value1", 
 "booleanKey":true, 
 "doubleKey":42.0, 
 "longKey":73, 
 "jsonKey": {
    "someNumber": 42,
    "someArray": [1,2,3],
    "someNestedObject": {"key": "value"}
 }
}
```