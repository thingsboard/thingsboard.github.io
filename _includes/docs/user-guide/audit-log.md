ThingsBoard provides the ability to track user actions in order to keep audit log. 
It is possible to log user actions related to main entities: assets, devices, dashboard, rules, etc. 

### User Interface

Tenant Administrator is able to review audit logs that belong to corresponding tenant account. The administrator is able to setup date range and executes a full-text search for fetched entities.

![image](https://img.thingsboard.io/user-guide/ui/audit-log.png)

The "details" button allows reviewing low-level details of the logged action.

![image](https://img.thingsboard.io/user-guide/ui/audit-log-details.png)

### REST API

It is possible to fetch audit logs via [REST API](https://demo.thingsboard.io/swagger-ui.html#/audit-log-controller). 
There are several API calls that allow to fetch entities related to particular user, entity, customer or fetch all records using page links.  

{% unless docsPrefix == "paas/" %}
### General configuration

System administrator is able to configure audit log levels using [thingsboard.yml](/docs/user-guide/install/{{docsPrefix}}config/). You can find sample configuration below:

```yaml
# Audit log parameters
audit_log:
  # Enable/disable audit log functionality.
  enabled: "${AUDIT_LOG_ENABLED:true}"
  # Specify partitioning size for audit log by tenant id storage. Example MINUTES, HOURS, DAYS, MONTHS
  by_tenant_partitioning: "${AUDIT_LOG_BY_TENANT_PARTITIONING:MONTHS}"
  # Number of days as history period if startTime and endTime are not specified
  default_query_period: "${AUDIT_LOG_DEFAULT_QUERY_PERIOD:30}"
  # Logging levels per each entity type.
  # Allowed values: OFF (disable), W (log write operations), RW (log read and write operations)
  logging_level:
    mask:
      "device": "${AUDIT_LOG_MASK_DEVICE:W}"
      "asset": "${AUDIT_LOG_MASK_ASSET:W}"
      "dashboard": "${AUDIT_LOG_MASK_DASHBOARD:OFF}"
      "customer": "${AUDIT_LOG_MASK_CUSTOMER:W}"
      "user": "${AUDIT_LOG_MASK_USER:RW}"
      "rule": "${AUDIT_LOG_MASK_RULE:RW}"
      "plugin": "${AUDIT_LOG_MASK_PLUGIN:RW}"
```

This configuration sample disables the logging of any actions related to dashboards and logs read operations for users and rules. 
For all other entities, ThingsBoard will log only write level operations.

We recommend to modify "by_tenant_partitioning" parameter based on the number of devices and user actions that will be logged. 
The more actions you plan to log, the more precise partitioning is required. 
The approximate amount of records per partition should not exceed 500 000 records.

### External log sink configuration

System administrator is able to configure connection to external system. This connection will be used to push audit logs.
The configuration parameters are well documented inline.

```yaml
  sink:
    # Type of external sink. possible options: none, elasticsearch
    type: "${AUDIT_LOG_SINK_TYPE:none}"
    # Name of the index where audit logs stored
    # Index name could contain next placeholders (not mandatory):
    # @{TENANT} - substituted by tenant ID
    # @{DATE} - substituted by current date in format provided in audit_log.sink.date_format
    index_pattern: "${AUDIT_LOG_SINK_INDEX_PATTERN:@{TENANT}_AUDIT_LOG_@{DATE}}"
    # Date format. Details of the pattern could be found here:
    # https://docs.oracle.com/javase/8/docs/{{docsPrefix}}api/java/time/format/DateTimeFormatter.html
    date_format: "${AUDIT_LOG_SINK_DATE_FORMAT:YYYY.MM.DD}"
    scheme_name: "${AUDIT_LOG_SINK_SCHEME_NAME:http}" # http or https
    host: "${AUDIT_LOG_SINK_HOST:localhost}"
    port: "${AUDIT_LOG_SINK_POST:9200}"
    user_name: "${AUDIT_LOG_SINK_USER_NAME:}"
    password: "${AUDIT_LOG_SINK_PASSWORD:}"
```
{% endunless %}

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}
