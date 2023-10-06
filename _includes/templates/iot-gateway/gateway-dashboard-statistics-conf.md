![](/images/gateway/dashboard/gateway-dashboard-statistics-conf.png)

Statistics - in this tab you can configure general statistics, as well as custom statistics:
- Statistics - enable/disable;
- Statistic send period - period of time for sending statistics;
- Commands - commands for collecting additional statistics (to add a new command, press the **"Add command"** button):
  - Attribute name - gateway telemetry key name;
  - Timeout - timeout for command execution;
  - Command - the result of the command will be used as the value of the client attribute (for example **"/bin/sh -c ipconfig getifaddr en0"**).