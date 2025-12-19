Other - in this tab, you can configure additional gateway parameters:
- Checking device activity - enables monitoring the activity of each connected device:
  - Inactivity timeout (in seconds) - device inactivity time after which the gateway will disconnect the device.
  - Inactivity check period (in seconds) - periodicity of device activity check.
- Advanced - additional gateway settings:
  - Min pack send delay (in milliseconds) - delay between sending packets (Decreasing this setting results in increased CPU usage).
  - QoS - quality of Service in MQTT messaging (0 - at most once, 1 - at least once).
  - Check connectors' configuration (in seconds) - the period of time when the configuration of the connectors will be checked for a change.
  - Max payload size in bytes-defines the largest message the gateway can process at once, ensuring stable performance and preventing oversized data from causing errors.
  - Min packet size to send-defines the smallest message size the gateway will transmit, preventing the sending of packets that are too small or incomplete.

![](/images/gateway/dashboard/gateway-dashboard-other-conf.png)
