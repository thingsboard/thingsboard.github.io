---
layout: docwithnav-gw
title: Report Strategy
description: Report Strategy

---

* TOC
{:toc}
## Introduction

The **Report Strategy** feature allows you to configure how the gateway reports data to the platform. It uses a hierarchical configuration system, enabling you to define strategies at different levels based on your needs.

### **Configuration Hierarchy**
The report strategy is applied in the following order of precedence:

1. **Default Configuration**: The default report strategy (`ON_RECEIVED`) is applied if no other configuration is specified.
2. **General Configuration**: Defined in the `tb_gateway.json` file and applies to all connectors, devices, and datapoints unless overridden.
3. **Connector Configuration**: Defined in the connector's configuration file and applies to all devices and datapoints within the connector unless overridden.
4. **Device Configuration**: Defined in the device section of the connector configuration file and applies to all datapoints for that device unless overridden.
5. **Datapoint Configuration**: Defined in the time-series or attributes section for a specific datapoint and takes precedence over all other levels.

### **Overriding Behavior**
Configurations defined at lower levels in the hierarchy override those at higher levels. For example:
- A **datapoint-specific strategy** will override strategies defined at the device, connector, general, and default levels.
- A **device-level strategy** will override connector, general, and default configurations for all its datapoints unless a specific datapoint strategy is defined.

For more details, refer to [Hierarchical Configuration Overriding](#hierarchical-configuration-overriding).

### **Applicability**
- The report strategy is available for all built-in connectors.
- For custom connectors, the default strategy or those defined in general or connector configurations apply. To support lower-level configurations (device and datapoint), custom implementation is required.

This flexibility ensures that reporting behavior can be tailored to meet the specific requirements of different systems and devices.

### Report strategy types
The gateway supports the following types of report strategies:

---

#### On received

- **Description**: The gateway reports data to the platform instance immediately upon receiving it. This is the **default report strategy**.

- **Use Case**: Ideal for scenarios where real-time data visualization is required.

- **Configuration**: The configuration only requires specifying the `type` of the report strategy:

```json
{
  "reportStrategy": {
    "type": "ON_RECEIVED"
  }
}
```
{:.copy-code}

---

#### On change

- **Description**: The gateway reports data to the platform instance only when the data changes.

- **Use Case**: Ideal for systems with a large number of sensors to reduce the volume of transmitted data.

- **Configuration**: The configuration only requires specifying the `type` of the report strategy:

```json
{
  "reportStrategy": {
    "type": "ON_CHANGE"
  }
}
```
{:.copy-code}

---

#### On report period

- **Description**: The gateway reports data to the platform instance at a regular interval, regardless of whether the data has changed.

- **Use Case**: Useful for avoiding overly frequent updates or to maintain connection activity by reporting data at defined intervals. Even if no changes or new data are received, the last value will still be reported at the end of the interval.

- **Behavior**: If multiple values are received during the interval, only the most recent value is reported.

- **Configuration**: The configuration requires specifying the `type` of the report strategy and the `reportPeriod` in milliseconds:

```json
{
  "reportStrategy": {
    "type": "ON_REPORT_PERIOD",
    "reportPeriod": 60000
  }
}
```
{:.copy-code}

---

#### On change or report period

- **Description**: The gateway reports data to the platform instance when the data changes or at a regular interval, whichever comes first.

- **Use Case**: Ideal for scenarios where you want to minimize data transmission but still need real-time updates for significant changes.

- **Behavior**:
    - Data is sent immediately when it changes.
    - If no changes occur, the data is sent at the end of the specified interval, even if no new data has been received.

- **Configuration**: The configuration requires specifying the `type` of the report strategy and the `reportPeriod` in milliseconds:

```json
{
  "reportStrategy": {
    "type": "ON_CHANGE_OR_REPORT_PERIOD",
    "reportPeriod": 60000
  }
}
```
{:.copy-code}

---

## Usage examples

Here are some examples demonstrating how to configure the **Report Strategy** at various levels of the configuration hierarchy.

---

### Example 1: Connector-level report strategy

- **Scenario**: Use `ON_CHANGE` globally, but for the Modbus connector, report data every 60 seconds to reduce rate limit usage. Data from other connectors should use the global configuration.

- **Configuration**:
  - **General Configuration** (`tb_gateway.json`):
    ```json
    {
      "reportStrategy": {
        "type": "ON_CHANGE"
      }
    }
    ```

  - **Modbus Connector Configuration**:
    ```json
    {
      "reportStrategy": {
        "type": "ON_REPORT_PERIOD",
        "reportPeriod": 60000
      }
    }
    ```

- **Result**:
  - Data from the Modbus connector is reported every 60 seconds.
  - Data from other connectors, such as OPC-UA, is reported as soon as it changes.

---

### Example 2: Device-level report strategy

- **Scenario**: Use `ON_CHANGE` globally, but for a specific MQTT device, report data when it changes or every 60 seconds, whichever comes first.

- **Configuration**:
  - **General Configuration** (`tb_gateway.json`):
    ```json
    {
      "reportStrategy": {
        "type": "ON_CHANGE"
      }
    }
    ```

  - **MQTT Connector Device Configuration** (in `dataMapping`):
    ```json
    {
      "dataMapping": [
        {
          "topicFilter": "...",
          "deviceInfo": "...",
          "reportStrategy": {
            "type": "ON_CHANGE_OR_REPORT_PERIOD",
            "reportPeriod": 60000
          },
          "attributes": [...],
          "timeseries": [...]
        }
      ]
    }
    ```

- **Result**:
  - Data from the MQTT device is reported when it changes or every 60 seconds if no changes occur.
  - Data from other devices in the MQTT connector is reported only when it changes.

---

### Example 3: Datapoint-level report strategy

- **Scenario**: Use `ON_REPORT_PERIOD` for a Modbus device to report data every 60 seconds, but for a specific datapoint (`valveState`), report only when it changes.

- **Configuration**:
  - **Modbus Connector Configuration**:
    ```json
    {
      "reportStrategy": {
        "type": "ON_REPORT_PERIOD",
        "reportPeriod": 60000
      },
      "master": {
        "slaves": [
          {
            "unitId": 1,
            "attributes": [...],
            "timeseries": [
              {
                "tag": "valveState",
                "type": "long",
                "functionCode": 4,
                "registerCount": 1,
                "address": 3,
                "reportStrategy": {
                  "type": "ON_CHANGE"
                }
              }
            ]
          }
        ]
      }
    }
    ```

- **Result**:
  - General data from the Modbus device is reported every 60 seconds.
  - The `valveState` datapoint is reported only when its value changes.

---

### Example 4: Mixed report strategies across connectors

- **Scenario**:
  - Use `ON_RECEIVED` globally.
  - Use `ON_REPORT_PERIOD` for the Modbus connector to report data every 30 seconds.
  - Use `ON_CHANGE_OR_REPORT_PERIOD` for a specific device in the MQTT connector to report when data changes or every 15 seconds.

- **Configuration**:
  - **General Configuration**:
    ```json
    {
      "reportStrategy": {
        "type": "ON_RECEIVED"
      }
    }
    ```

- **Modbus Connector Configuration**:
  ```json
  {
    "reportStrategy": {
      "type": "ON_REPORT_PERIOD",
      "reportPeriod": 30000
    },
    "master": {
        "slaves": [
          {
            "unitId": 1,
            ...
            "attributes": [...],
            "timeseries": [...]
          }
        ]
    }
  }
  ```

  - **MQTT Connector Device Configuration**:
    ```json
    {
      "dataMapping": [
        {
          "topicFilter": "...",
          "deviceInfo": "...",
          "reportStrategy": {
            "type": "ON_CHANGE_OR_REPORT_PERIOD",
            "reportPeriod": 15000
          },
          "attributes": [...],
          "timeseries": [...]
        }
      ]
    }
    ```

- **Result**:
  - Data is reported immediately for most connectors (default `ON_RECEIVED` strategy).
  - Data from the Modbus connector is reported every 30 seconds.
  - Data from the specific MQTT device is reported when it changes or every 15 seconds.

---
## Hierarchical Configuration Overriding

The **Report Strategy** feature uses a hierarchical approach where configurations at lower levels override those defined at higher levels. This ensures that the most specific configuration is applied.

### **Key Overriding Rules**

1. **Default Configuration**:
   * The default report strategy (`ON_RECEIVED`) is used when no other strategy is specified at any level.

2. **General Configuration**:
   * The report strategy defined in the `tb_gateway.json` file applies to all connectors, devices, and datapoints unless overridden at more specific levels.
   * This strategy overrides the default configuration.

3. **Connector-Level Configuration**:
   * A report strategy set at the connector level applies to all devices and their datapoints (if no device-level or datapoint-level strategy is defined).
   * This strategy overrides configurations set in the general configuration and the default configuration.
   * **Example**: If a connector has a report strategy defined, all devices and datapoints within that connector will inherit this strategy unless overridden at lower levels.

4. **Device-Level Configuration**:
   * A report strategy set for a device applies to all its datapoints (attributes and time-series) unless a datapoint-specific strategy is defined.
   * This strategy overrides configurations set at the connector, general, and default levels.
   * **Example**: If a device has a report strategy defined, all its datapoints will use this strategy unless a specific datapoint overrides it.

5. **Datapoint-Level Configuration**:
   * A report strategy set for a specific datapoint overrides strategies configured at the device, connector, general, and default levels.
   * **Example**: If a datapoint has its own report strategy defined, this strategy will be used for that datapoint, regardless of any strategies configured at higher levels.

### **Example of Overriding**

- If the general configuration specifies `ON_CHANGE`, but a connector is set to `ON_REPORT_PERIOD`, all devices and datapoints in that connector will follow the `ON_REPORT_PERIOD` strategy.
- If a device within the connector is configured with `ON_CHANGE_OR_REPORT_PERIOD`, this strategy will apply to all its datapoints unless a specific datapoint has its own configuration.
- Finally, if a single datapoint is configured with `ON_RECEIVED`, it will override all other strategies, including the device-level configuration.

This hierarchical structure provides flexibility and control, ensuring that specific needs can be addressed at the most granular level while maintaining a fallback to broader configurations.
## Conclusion

By combining these strategies, you can optimize data reporting for real-time needs, rate limit management, and system efficiency.  