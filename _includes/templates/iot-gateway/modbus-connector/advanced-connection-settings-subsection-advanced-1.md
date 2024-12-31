You can configure additional settings like: TLS connection, polling time, byte order and word order, and other. The table below describes the parameters for this purpose:

| **Parameter**             | **Default value**  | **Description**                                                               |
|:--------------------------|:-------------------|-------------------------------------------------------------------------------
| timeout                   | **35**             | Timeout in seconds for connecting to Modbus server                            |
| byteOrder                 | **LITTLE**         | Order of bytes to read                                                        |
| wordOrder                 | **LITTLE**         | The order of words when reading several registers                             |
| retries                   | **true**           | Retrying sending data to the master. The values can be either: true or false  |
| retriesOnEmpty            | **true**           | Retrying sending data to the master if it is empty                            |
| retriesOnInvalid          | **true**           | Retrying sending data to the master if it is failed                           |
| pollPeriod                | **5000**           | Period in milliseconds to check the attributes and the telemetry on the slave |
| connectAttemptTimeMs      | **5000**           | A waiting period in milliseconds before connecting to the master              |
| connectAttemptCount       | **5**              | The number of connection attempts made through the ThingsBoard gateway        |
| waitAfterFailedAttemptsMs | **300000**         | A waiting period in milliseconds before trying to send data to the master     |
| ---                       

![image](https://img.thingsboard.io/gateway/modbus-connector/advanced-connection-settings-advanced-1-ce.png)

<br>
Example:

```json
"master": {
  "slaves": [
    {
      "timeout": 35,
      "byteOrder": "LITTLE",
      "wordOrder": "LITTLE",
      "retries": true,
      "retryOnEmpty": true,
      "retryOnInvalid": true,
      "pollPeriod": 5000,
      "sendDataOnlyOnChange": true,
      "connectAttemptTimeMs": 5000,
      "connectAttemptCount": 5,
      "waitAfterFailedAttemptsMs": 300000,
    }
  ]
}
```