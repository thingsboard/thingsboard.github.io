* TOC
{:toc}

This guide will help you to get familiar with ThingsBoard configuration files and parameters. We **recommend** to
configure ThingsBoard using environment variables. This way you do not need to merge the configuration files when new
platform release arrives. List of available configuration parameters and corresponding environment variables is
located [here](#configuration-parameters).

## How to change configuration parameters?

#### Monolithic deployment on Linux

If ThingsBoard is installed on **Linux** as a **monolithic application**, you may specify the environment variables in
the thingsboard.conf file:

```bash
sudo nano /usr/share/thingsboard/conf/thingsboard.conf
```

Use simple example below to add new environment variable 'HTTP_BIND_PORT' with value '8081'.

```bash
...
export HTTP_BIND_PORT=8081
```

#### Monolithic deployment on Windows

If ThingsBoard is installed on **Windows** as a **monolithic application**, you may specify the environment variables in
the thingsboard.yml file located in the following directory:

```bash
YOUR_INSTALL_DIR/conf
```

The configuration file is written in YAML.

All configuration parameters have corresponding environment variable name and default value. In order to change
configuration parameter you can simply change it's default value. For example:

```bash
server:
  address: "${HTTP_BIND_ADDRESS:0.0.0.0}"
```

In this case, *'HTTP_BIND_ADDRESS'* is environment variable name and *'0.0.0.0'* is a default value.

#### Docker based deployment

If ThingsBoard is installed in a docker compose environment, you may edit the scripts and add environment variables for
the corresponding containers.
See [docker documentation](https://docs.docker.com/compose/environment-variables/#/the-envfile-configuration-option) for
more details.

#### K8S based deployment

If ThingsBoard is installed in a K8S environment, you may edit the scripts and add environment variables for the
corresponding deployments/stateful sets.
See [K8S documentation](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/)
for more details.

## Configuration parameters

The parameters are grouped by system components. The list contains the name (address in thingsboard.yml file),
environment variable, default value and description.

### ThingsBoard Core/Rule Engine Parameters

#### HTTP server parameters

{% include docs/user-guide/install/server-config-table.md %}

#### Application info

{% include docs/user-guide/install/app-config-table.md %}

#### Zookeeper connection parameters

{% include docs/user-guide/install/zk-config-table.md %}

#### Cluster stats parameters

{% include docs/user-guide/install/cluster-config-table.md %}

#### Plugins configuration parameters

{% include docs/user-guide/install/plugins-config-table.md %}

#### Security parameters

{% include docs/user-guide/install/security-config-table.md %}

#### Usage statistics parameters

{% include docs/user-guide/install/usage-config-table.md %}

#### UI parameters

{% include docs/user-guide/install/ui-config-table.md %}

#### Common database parameters

{% include docs/user-guide/install/database-config-table.md %}

#### Cassandra driver configuration parameters

{% include docs/user-guide/install/cassandra-config-table.md %}

#### SQL configuration parameters

{% include docs/user-guide/install/sql-config-table.md %}

#### Actor system parameters

{% include docs/user-guide/install/actors-config-table.md %}

{% if docsPrefix == "pe/" %}
#### Platform integrations parameters

{% include docs/user-guide/install/integrations-config-table.md %}
{% endif %}

{% if docsPrefix == "pe/" %} 
#### Reports parameters

{% include docs/user-guide/install/reports-config-table.md %} 
{% endif %}

#### Cache parameters

{% include docs/user-guide/install/cache-config-table.md %}

#### Redis parameters

{% include docs/user-guide/install/redis-config-table.md %}

#### Check new version updates parameters

{% include docs/user-guide/install/updates-config-table.md %}

#### Spring general configuration

{% include docs/user-guide/install/spring-general-config-table.md %}

#### Spring CORS configuration

{% include docs/user-guide/install/spring-cors-config-table.md %}

#### SQL (Spring) DAO Configuration

{% include docs/user-guide/install/spring-dao-config-table.md %}

#### Audit log parameters

{% include docs/user-guide/install/auditlog-config-table.md %}

#### Device connectivity state parameters

{% include docs/user-guide/install/state-config-table.md %}

#### Check device connectivity parameters

{% include docs/user-guide/install/device-connectivity_params.md %}

#### TBEL evaluator parameters

{% include docs/user-guide/install/tbel-config-table.md %}

#### JavaScript evaluator parameters

{% include docs/user-guide/install/js-config-table.md %}

#### Common transport parameters

{% include docs/user-guide/install/transport-common-config-table.md %}

##### Local HTTP transport parameters

{% include docs/user-guide/install/transport-http-local-config-table.md %}

##### Local MQTT transport parameters

{% include docs/user-guide/install/transport-mqtt-local-config-table.md %}

##### Local CoAP transport parameters

{% include docs/user-guide/install/transport-coap-local-config-table.md %}

##### Local LwM2M transport parameters

{% include docs/user-guide/install/transport-lwm2m-local-config-table.md %}

##### Local SNMP transport parameters

{% include docs/user-guide/install/transport-snmp-local-config-table.md %}

#### CoAP server parameters

{% include docs/user-guide/install/coap-server-config-table.md %}

#### Edges parameters

{% include docs/user-guide/install/edges-config-table.md %}

{% if docsPrefix == "pe/" %}
#### License parameters

{% include docs/user-guide/install/license-config-table.md %}
{% endif %}

#### Swagger parameters

{% include docs/user-guide/install/swagger-config-table.md %}

#### Common queue parameters

{% include docs/user-guide/install/queue-common-config-table.md %}

##### In-memory queue parameters

{% include docs/user-guide/install/queue-in-memory-config-table.md %}

##### Kafka and Confluent Cloud queues parameters

{% include docs/user-guide/install/queue-kafka-confluent-config-table.md %}

##### AWS SQS queue parameters

{% include docs/user-guide/install/queue-aws-sqs-config-table.md %}

##### Google Pub/Sub queue parameters

{% include docs/user-guide/install/queue-pubsub-config-table.md %}

##### Azure Service Bus queue parameters

{% include docs/user-guide/install/queue-servicebus-config-table.md %}

##### RabbitMQ queue parameters

{% include docs/user-guide/install/queue-rabbitmq-config-table.md %}

#### Queue topic parameters

{% include docs/user-guide/install/queue-topic-config-table.md %}

#### ThingsBoard event parameters

{% include docs/user-guide/install/event-config-table.md %}

#### ThingsBoard service parameters

{% include docs/user-guide/install/service-config-table.md %}

#### ThingsBoard metrics parameters

{% include docs/user-guide/install/metrics-config-table.md %}

#### Local Version Control parameters

{% include docs/user-guide/install/vc-local-config-table.md %}

#### Notification System parameters

{% include docs/user-guide/install/notification-system-config-table.md %}

### Web Report service parameters

#### Server parameters

{% include docs/user-guide/install/web-report-server-config-table.md %}

#### Report (browser) parameters

{% include docs/user-guide/install/web-report-browser-config-table.md %}

#### Logger parameters

{% include docs/user-guide/install/web-report-logger-config-table.md %}

{% if docsPrefix == null %}
### JavaScript Executor service (tb-js-executor) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### JavaScript Executor service (tb-pe-js-executor) parameters
{% endif %}

#### Common parameters

{% include docs/user-guide/install/js-executor-common-config-table.md %}

#### JavaScript evaluator parameters

{% include docs/user-guide/install/js-executor-js-config-table.md %}

#### Common queue parameters

{% include docs/user-guide/install/js-executor-queue-common-config-table.md %}

##### Kafka and Confluent Cloud queues parameters

{% include docs/user-guide/install/js-executor-queue-kafka-confluent-config-table.md %}

##### Google Pub/Sub queue parameters

{% include docs/user-guide/install/js-executor-queue-pubsub-config-table.md %}

##### AWS SQS queue parameters

{% include docs/user-guide/install/js-executor-queue-aws-sqs-config-table.md %}

##### RabbitMQ queue parameters

{% include docs/user-guide/install/js-executor-queue-rabbitmq-config-table.md %}

##### Azure Service Bus queue parameters

{% include docs/user-guide/install/js-executor-queue-servicebus-config-table.md %}

#### Logger parameters

{% include docs/user-guide/install/js-executor-logger-config-table.md %}

{% if docsPrefix == null %}
### Version Control Executor service (tb-vc-executor) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### Version Control Executor service (tb-pe-vc-executor) parameters
{% endif %}

#### Server parameters

{% include docs/user-guide/install/vc-executor-server-config-table.md %}

#### Zookeeper connection parameters

{% include docs/user-guide/install/vc-executor-zk-config-table.md %}

#### Common queue parameters

{% include docs/user-guide/install/vc-executor-queue-common-config-table.md %}

##### In-memory queue parameters

{% include docs/user-guide/install/vc-executor-queue-in-memory-config-table.md %}

##### Kafka and Confluent Cloud queues parameters

{% include docs/user-guide/install/vc-executor-queue-kafka-confluent-config-table.md %}

##### AWS SQS queue parameters

{% include docs/user-guide/install/vc-executor-queue-aws-sqs-config-table.md %}

##### Google Pub/Sub queue parameters

{% include docs/user-guide/install/vc-executor-queue-pubsub-config-table.md %}

##### Azure Service Bus queue parameters

{% include docs/user-guide/install/vc-executor-queue-servicebus-config-table.md %}

##### RabbitMQ queue parameters

{% include docs/user-guide/install/vc-executor-queue-rabbitmq-config-table.md %}

#### Queue topic parameters

{% include docs/user-guide/install/vc-executor-queue-topic-config-table.md %}

#### Version Control parameters

{% include docs/user-guide/install/vc-executor-vc-config-table.md %}

#### Usage statistics parameters

{% include docs/user-guide/install/vc-executor-usage-config-table.md %}

#### Metrics parameters

{% include docs/user-guide/install/vc-executor-metrics-config-table.md %}

#### Service parameters

{% include docs/user-guide/install/vc-executor-service-config-table.md %}

#### Spring parameters

{% include docs/user-guide/install/vc-executor-spring-config-table.md %}

{% if docsPrefix == null %}
### Web UI service (tb-web-ui) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### Web UI service (tb-pe-web-ui) parameters
{% endif %}

#### Server Parameters

{% include docs/user-guide/install/web-ui-server-config-table.md %}

#### Proxy parameters

{% include docs/user-guide/install/web-ui-proxy-config-table.md %}

#### Logger parameters

{% include docs/user-guide/install/web-ui-logger-config-table.md %}

{% if docsPrefix == null %}
### HTTP Transport service (tb-http-transport) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### HTTP Transport service (tb-pe-http-transport) parameters
{% endif %}

#### Server Parameters

{% include docs/user-guide/install/http-transport-server-config-table.md %}

#### Zookeeper connection parameters

{% include docs/user-guide/install/http-transport-zk-config-table.md %}

#### Cache parameters

{% include docs/user-guide/install/http-transport-cache-config-table.md %}

#### Redis parameters

{% include docs/user-guide/install/http-transport-redis-config-table.md %}

#### Transport parameters

{% include docs/user-guide/install/http-transport-transport-config-table.md %}

#### Common queue parameters

{% include docs/user-guide/install/http-transport-queue-common-config-table.md %}

##### Kafka and Confluent Cloud queues parameters

{% include docs/user-guide/install/http-transport-queue-kafka-confluent-config-table.md %}

##### AWS SQS queue parameters

{% include docs/user-guide/install/http-transport-queue-aws-sqs-config-table.md %}

##### Google Pub/Sub queue parameters

{% include docs/user-guide/install/http-transport-queue-pubsub-config-table.md %}

##### Azure Service Bus queue parameters

{% include docs/user-guide/install/http-transport-queue-servicebus-config-table.md %}

##### RabbitMQ queue parameters

{% include docs/user-guide/install/http-transport-queue-rabbitmq-config-table.md %}

#### Queue topic parameters

{% include docs/user-guide/install/http-transport-queue-topic-config-table.md %}

#### Service parameters

{% include docs/user-guide/install/http-transport-service-config-table.md %}

#### Metrics parameters

{% include docs/user-guide/install/http-transport-metrics-config-table.md %}

#### Spring parameters

{% include docs/user-guide/install/http-transport-spring-config-table.md %}

{% if docsPrefix == null %}
### MQTT Transport service (tb-mqtt-transport) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### MQTT Transport service (tb-pe-mqtt-transport) parameters
{% endif %}

#### Server Parameters

{% include docs/user-guide/install/mqtt-transport-server-config-table.md %}

#### Zookeeper connection parameters

{% include docs/user-guide/install/mqtt-transport-zk-config-table.md %}

#### Cache parameters

{% if docsPrefix == null %}
{% include docs/user-guide/install/cache-config-table.md %}
{% endif %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/cache-config-table-pe.md %}
{% endif %}

#### Redis parameters

{% include docs/user-guide/install/mqtt-transport-redis-config-table.md %}

#### Transport parameters

{% include docs/user-guide/install/mqtt-transport-transport-config-table.md %}

#### Common queue parameters

{% include docs/user-guide/install/mqtt-transport-queue-common-config-table.md %}

##### Kafka and Confluent Cloud queues parameters

{% include docs/user-guide/install/mqtt-transport-queue-kafka-confluent-config-table.md %}

##### AWS SQS queue parameters

{% include docs/user-guide/install/mqtt-transport-queue-aws-sqs-config-table.md %}

##### Google Pub/Sub queue parameters

{% include docs/user-guide/install/mqtt-transport-queue-pubsub-config-table.md %}

##### Azure Service Bus queue parameters

{% include docs/user-guide/install/mqtt-transport-queue-servicebus-config-table.md %}

##### RabbitMQ queue parameters

{% include docs/user-guide/install/mqtt-transport-queue-rabbitmq-config-table.md %}

#### Queue topic parameters

{% include docs/user-guide/install/mqtt-transport-queue-topic-config-table.md %}

#### Service parameters

{% include docs/user-guide/install/mqtt-transport-service-config-table.md %}

#### Metrics parameters

{% include docs/user-guide/install/mqtt-transport-metrics-config-table.md %}

#### Spring parameters

{% include docs/user-guide/install/mqtt-transport-spring-config-table.md %}

{% if docsPrefix == null %}
### CoAP Transport service (tb-coap-transport) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### CoAP Transport service (tb-pe-coap-transport) parameters
{% endif %}

#### Server Parameters

{% include docs/user-guide/install/coap-transport-server-config-table.md %}

#### Zookeeper connection parameters

{% include docs/user-guide/install/coap-transport-zk-config-table.md %}

#### Cache parameters

{% include docs/user-guide/install/coap-transport-cache-config-table.md %}

#### Redis parameters

{% include docs/user-guide/install/coap-transport-redis-config-table.md %}

#### Transport parameters

{% include docs/user-guide/install/coap-transport-transport-config-table.md %}

#### CoAP server parameters

{% include docs/user-guide/install/coap-transport-coap-server-config-table.md %}

#### Common queue parameters

{% include docs/user-guide/install/coap-transport-queue-common-config-table.md %}

##### Kafka and Confluent Cloud queues parameters

{% include docs/user-guide/install/coap-transport-queue-kafka-confluent-config-table.md %}

##### AWS SQS queue parameters

{% include docs/user-guide/install/coap-transport-queue-aws-sqs-config-table.md %}

##### Google Pub/Sub queue parameters

{% include docs/user-guide/install/coap-transport-queue-pubsub-config-table.md %}

##### Azure Service Bus queue parameters

{% include docs/user-guide/install/coap-transport-queue-servicebus-config-table.md %}

##### RabbitMQ queue parameters

{% include docs/user-guide/install/coap-transport-queue-rabbitmq-config-table.md %}

#### Queue topic parameters

{% include docs/user-guide/install/coap-transport-queue-topic-config-table.md %}

#### Service parameters

{% include docs/user-guide/install/coap-transport-service-config-table.md %}

#### Metrics parameters

{% include docs/user-guide/install/coap-transport-metrics-config-table.md %}

#### Spring parameters

{% include docs/user-guide/install/coap-transport-spring-config-table.md %}

{% if docsPrefix == null %}
### LWM2M Transport service (tb-lwm2m-transport) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### LWM2M Transport service (tb-pe-lwm2m-transport) parameters
{% endif %}

#### Server Parameters

{% include docs/user-guide/install/lwm2m-transport-server-config-table.md %}

#### Zookeeper connection parameters

{% include docs/user-guide/install/lwm2m-transport-zk-config-table.md %}

#### Cache parameters

{% include docs/user-guide/install/lwm2m-transport-cache-config-table.md %}

#### Redis parameters

{% include docs/user-guide/install/lwm2m-transport-redis-config-table.md %}

#### Transport parameters

{% include docs/user-guide/install/lwm2m-transport-transport-config-table.md %}

#### Common queue parameters

{% include docs/user-guide/install/lwm2m-transport-queue-common-config-table.md %}

##### Kafka and Confluent Cloud queues parameters

{% include docs/user-guide/install/lwm2m-transport-queue-kafka-confluent-config-table.md %}

##### AWS SQS queue parameters

{% include docs/user-guide/install/lwm2m-transport-queue-aws-sqs-config-table.md %}

##### Google Pub/Sub queue parameters

{% include docs/user-guide/install/lwm2m-transport-queue-pubsub-config-table.md %}

##### Azure Service Bus queue parameters

{% include docs/user-guide/install/lwm2m-transport-queue-servicebus-config-table.md %}

##### RabbitMQ queue parameters

{% include docs/user-guide/install/lwm2m-transport-queue-rabbitmq-config-table.md %}

#### Queue topic parameters

{% include docs/user-guide/install/lwm2m-transport-queue-topic-config-table.md %}

#### Service parameters

{% include docs/user-guide/install/lwm2m-transport-service-config-table.md %}

#### Metrics parameters

{% include docs/user-guide/install/lwm2m-transport-metrics-config-table.md %}

#### Spring parameters

{% include docs/user-guide/install/lwm2m-transport-spring-config-table.md %}

{% if docsPrefix == null %}
### SNMP Transport service (tb-snmp-transport) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### SNMP Transport service (tb-pe-snmp-transport) parameters
{% endif %}

#### Server Parameters

{% include docs/user-guide/install/snmp-transport-server-config-table.md %}

#### Zookeeper connection parameters

{% include docs/user-guide/install/snmp-transport-zk-config-table.md %}

#### Cache parameters

{% include docs/user-guide/install/snmp-transport-cache-config-table.md %}

#### Redis parameters

{% include docs/user-guide/install/snmp-transport-redis-config-table.md %}

#### Transport parameters

{% include docs/user-guide/install/snmp-transport-transport-config-table.md %}

#### Common queue parameters

{% include docs/user-guide/install/snmp-transport-queue-common-config-table.md %}

##### Kafka and Confluent Cloud queues parameters

{% include docs/user-guide/install/snmp-transport-queue-kafka-confluent-config-table.md %}

##### AWS SQS queue parameters

{% include docs/user-guide/install/snmp-transport-queue-aws-sqs-config-table.md %}

##### Google Pub/Sub queue parameters

{% include docs/user-guide/install/snmp-transport-queue-pubsub-config-table.md %}

##### Azure Service Bus queue parameters

{% include docs/user-guide/install/snmp-transport-queue-servicebus-config-table.md %}

##### RabbitMQ queue parameters

{% include docs/user-guide/install/snmp-transport-queue-rabbitmq-config-table.md %}

#### Queue topic parameters

{% include docs/user-guide/install/snmp-transport-queue-topic-config-table.md %}

#### Service parameters

{% include docs/user-guide/install/snmp-transport-service-config-table.md %}

#### Metrics parameters

{% include docs/user-guide/install/snmp-transport-metrics-config-table.md %}

### logback.xml

The configuration file for logging. Allows controlling the log level, the size of log files and the total size/volume of
logs.
