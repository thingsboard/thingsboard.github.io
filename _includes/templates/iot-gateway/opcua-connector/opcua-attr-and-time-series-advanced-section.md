| **Parameter** | **Default value**                                                                    | **Description**                                                                                                 |
|:--------------|:-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| key           | **temperature °C**                                                                   | Tag, that will be interpreted as telemetry for ThingsBoard platform instance.                                   |
| type          | **path**                                                                             | Source of the value (can be [path](#path-types), [identifier](#identifier-types) or constant).                  |
| value         | **${Root\\\\.Objects\\\\.Device1\\\\.TemperatureAndHumiditySensor\\\\.Temperature}** | Name of the variable in the OPC-UA object is used for looking up the value within a specific variable. ** \* ** |
| ---           |                                                                                      |                                                                                                                 |

{% capture difference %}
All rules below apply in the same way to attributes configuration.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

** \* ** You can input some expressions for search here, like:
1. Full path to node - **${Root\\\\.Objects\\\\.Device1\\\\.TemperatureAndHumiditySensor\\\\.Temperature}**
2. Relative path from device object - **${TemperatureAndHumiditySensor\\.Temperature}** 
3. Some regular expressions to search for - **${Root\\\\.Objects\\\\.Device\\\\d\*\\\\.TemperatureAndHumiditySensor\\\\.Temperature}**
4. Namespace identifier and node identifier - **${ns=2;i=5}**

This part of the configuration will look like this:  

```json
        "timeseries": [
          {
            "key": "temperature °C",
            "path": "${Root\\.Objects\\.Device1\\.TemperatureAndHumiditySensor\\.Temperature}"
          }
        ],
```

<br>
**Let's look at an example.**

Replace the "path" value with the "NodeId" value. This is a relative path from device object or Display Name identifier taken from our test server.
<br>

{:refdef: style="text-align: left;"}
![image](https://img.thingsboard.io/gateway/opc-ua-simulation-server-4.png)
{: refdef}

In this example, the **timeseries** section would look like this:

```json
        "timeseries": [
          {
            "key": "humidity",
            "path": "${Counter}"
          },
          {
            "key": "pressure",
            "path": "${Root\\.Objects\\.Simulation\\.Triangle}"
          },
          {
            "key": "temperature °C",
            "path": "${ns=3;i=1002}"
          }
        ],
```

{:refdef: style="text-align: left;"}
![image](https://img.thingsboard.io/gateway/opc-ua-connector/opc-ua-subsection-time-series-advanced-1-ce.png)
{: refdef}

You should be able to see the telemetry you have sent to ThingsBoard in the **Latest telemetry** section of your device:

{:refdef: style="text-align: left;"}
![image](https://img.thingsboard.io/gateway/gateway-opc-ua-attributes-3.png)
{: refdef}
