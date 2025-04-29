By default, the chart installs Bitnami PostgreSQL as a sub-chart:

```yaml
# This section will bring bitnami/postgresql (https://artifacthub.io/packages/helm/bitnami/postgresql) into this chart.
#  If you want to add some extra configuration parameters, you can put them under the `postgresql` key, and they will be passed to bitnami/postgresql chart
postgresql:
  # @param enabled If enabled is set to true, externalPostgresql configuration will be ignored
  enabled: true
```  

provisioning a single-node instance with configurable storage, backups, and monitoring options.
For users with an existing PostgreSQL instance, TBMQ can be configured to connect externally.
To do this, disable the built-in PostgreSQL by set `postgresql.enabled: false` and specify connection details in the `externalPostgresql` section.

```yaml
# If you're deploying PostgreSQL externally, configure this section
externalPostgresql:
  # @param host - External PostgreSQL server host
  host: ""
  # @param port - External PostgreSQL server port
  ##
  port: 5432
  # @param password - PostgreSQL user
  ##
  username: "postgres"
  # @param password - PostgreSQL user password
  ##
  password: "postgres"
  # @param database - PostgreSQL database name for TBMQ
  ##
  database: "thingsboard_mqtt_broker"
```