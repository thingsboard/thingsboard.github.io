Statistics - in this tab you can configure general statistics, as well as custom statistics:
- General statistics - enable/disable gateway statistics (machine, storage, connectors).
- Custom statistics - enable/disable collecting statistics using custom commands.
- Statistic send period (in seconds) - period of time for sending statistics.
- Custom send period (in seconds) - period of time for sending custom statistics.
- Commands - commands for collecting additional statistics (to add a new command, press the **"Add command"** button):
  - Timeseries name - gateway telemetry key name.
  - Timeout (in seconds) - timeout for command execution.
  - Command - the result of the command will be used as the value of the client attribute (for example **"/bin/sh -c ipconfig getifaddr en0"**).
  - Advanced settings:
    - Install command - command for installing required packages (for example **"apt-get install -y curl"**).

![](/images/gateway/dashboard/gateway-dashboard-statistics-conf.png)
