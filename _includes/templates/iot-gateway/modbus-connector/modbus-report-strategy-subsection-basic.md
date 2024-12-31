![image](https://img.thingsboard.io/gateway/modbus-connector/modbus-report-strategy-subsection-basic.png)

This subsection enabling report strategy for data sending, and you can use one of 3 behavior scenarios:

- On report period - data will be collected and send every  period of time (in milliseconds).
- On value change - data will be send after change.
- On value change or report period - data will be sent either when it changes or after a report period has passed since the last time it was sent.

The table below describes the parameters required to configure report strategy:

| **Parameter** | **Default value**    | **Description**                                                                           |
|:--------------|:---------------------|-------------------------------------------------------------------------------------------
| Type          | **On report period** | Report strategy type: On report period, On value change, On value change or report period |
| Report period | **30000**            | Period in milliseconds to send data to platform                                           |
| ---