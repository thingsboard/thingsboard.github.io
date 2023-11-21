![](/images/gateway/dashboard/gateway-dashboard-logs-conf.png)

Logs - a tab for setting local and [remote logs](/docs/iot-gateway/guides/how-to-enable-remote-logging/), which consists of 3 main sections:
- General log settings - the usual settings for the Python [logging](https://docs.python.org/3.8/library/logging.config.html) module are used here:
  - Date format - date format of log message;
  - Log format - log message format.
- Remote logging - to configure remote logs:
  - Remote logs - enables remote logging and logs reading from the gateway;
  - Log level.
- Local logging - for configuring local loggers (Service, Connector, Converter, TB Connection, Storage, Extension):
  - Log level;
  - File path;
  - Log saving period;
  - Backup count - if **Backup count** is > 0, when a rollover is done, no more than **Backup count** files are kept - the oldest ones are deleted.
