![](/images/gateway/dashboard/gateway-dashboard-other-conf.png)

Other - in this tab, you can configure additional gateway parameters:
- Checking device activity - enables monitoring the activity of each connected device:
  - Inactivity timeout - device inactivity time after which the gateway will disconnect the device;
  - Inactivity check period - periodicity of device activity check.
- Advanced - configure the following parameters only if you know what you are doing:
  - Min pack send delay - delay between sending packets (Decreasing this setting results in increased CPU usage);
  - QoS - quality of Service in MQTT messaging (0 - at most once, 1 - at least once);
  - Check connectors' configuration - the period of time when the configuration of the connectors will be checked for a change.