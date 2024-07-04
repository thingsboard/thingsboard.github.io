This configuration section contains general connector settings, such as:

| **Parameter**         | **Default value** | **Description**                                                                             |
|:----------------------|:------------------|---------------------------------------------------------------------------------------------
| name                  |                   | Connector name for logs and saving to persistent devices.                                   |
| logLevel              | **INFO**          | Logging level for local and remote logs: INFO, DEBUG, …                                     |
| enableRemoteLogging   | **false**         | Mqtt port on the broker.                                                                    |
| sendDataOnlyOnChange  | **false**         | Sending only if data changed from last check, if not – data will be sent after every check. |
| ---                  

```text
{
  "logLevel": "DEBUG",
  "name": "mqtt",
  "enableRemoteLogging": false,
  "sendDataOnlyOnChange": false,
  ...
}
```
{: .copy-code}

![image](/images/gateway/mqtt-connector/general-basic-section-advanced-1-ce.png)
