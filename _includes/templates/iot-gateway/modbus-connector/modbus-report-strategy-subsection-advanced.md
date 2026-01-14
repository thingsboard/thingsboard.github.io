![image](https://img.thingsboard.io/gateway/modbus-connector/modbus-report-strategy-subsection-advanced.png)

This subsection enabling report strategy for data sending, and you can use one of 3 behavior scenarios:

- ON_REPORT_PERIOD - data will be collected and send every  period of time (in milliseconds).
- ON_CHANGE - data will be send after change.
- ON_CHANGE_OR_REPORT_PERIOD - data will be sent either when it changes or after a report period has passed since the last time it was sent.

The table below describes the parameters required to configure report strategy:

| **Parameter** | **Default value**    | **Description**                                                                           |
|:--------------|:---------------------|-------------------------------------------------------------------------------------------
| type          | **ON_REPORT_PERIOD** | Report strategy type: ON_REPORT_PERIOD, ON_CHANGE_OR_REPORT_PERIOD, ON_CHANGE|
| reportPeriod | **30000**            | Period in milliseconds to send data to platform                                 |
| ---                                 

Configuration example:

```text
reportStrategy: {
    "type": "ON_REPORT_PERIOD",
    "reportPeriod": 30000
}
```