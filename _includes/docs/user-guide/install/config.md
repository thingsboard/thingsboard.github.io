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

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/server-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/server-pe-config-table.md %}
{% endif %}

#### Application info

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/app-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/app-pe-config-table.md %}
{% endif %}

#### Zookeeper connection parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/zk-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/zk-pe-config-table.md %}
{% endif %}

#### Cluster stats parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/cluster-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/cluster-pe-config-table.md %}
{% endif %}

#### Plugins configuration parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/plugins-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/plugins-pe-config-table.md %}
{% endif %}

#### Security parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/security-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/security-pe-config-table.md %}
{% endif %}

#### Usage statistics parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/usage-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/usage-pe-config-table.md %}
{% endif %}

#### UI parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/ui-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/ui-pe-config-table.md %}
{% endif %}

#### Common database parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/database-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/database-pe-config-table.md %}
{% endif %}

#### Cassandra driver configuration parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/cassandra-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/cassandra-pe-config-table.md %}
{% endif %}

#### SQL configuration parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/sql-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/sql-pe-config-table.md %}
{% endif %}

#### Actor system parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/actors-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/actors-pe-config-table.md %}
{% endif %}

{% if docsPrefix == "pe/" %}
#### Platform integrations parameters

{% include docs/user-guide/install/integrations-pe-config-table.md %}
{% endif %}

{% if docsPrefix == "pe/" %} 
#### Reports parameters

{% include docs/user-guide/install/reports-pe-config-table.md %} 
{% endif %}

#### Cache parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/cache-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/cache-pe-config-table.md %}
{% endif %}

#### Redis parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/redis-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/redis-pe-config-table.md %}
{% endif %}

#### Check new version updates parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/updates-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/updates-pe-config-table.md %}
{% endif %}

#### Spring general configuration

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/spring-general-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/spring-general-pe-config-table.md %}
{% endif %}

#### Spring CORS configuration

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/spring-cors-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/spring-cors-pe-config-table.md %}
{% endif %}

#### SQL (Spring) DAO Configuration

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/spring-dao-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/spring-dao-pe-config-table.md %}
{% endif %}

#### Audit log parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/auditlog-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/auditlog-pe-config-table.md %}
{% endif %}

#### Device connectivity state parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/state-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/state-pe-config-table.md %}
{% endif %}

#### TBEL evaluator parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/tbel-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/tbel-pe-config-table.md %}
{% endif %}

#### JavaScript evaluator parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/js-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/js-pe-config-table.md %}
{% endif %}

#### Common transport parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/transport-common-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/transport-common-pe-config-table.md %}
{% endif %}

##### Local HTTP transport parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/transport-http-local-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/transport-http-local-pe-config-table.md %}
{% endif %}

##### Local MQTT transport parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/transport-mqtt-local-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/transport-mqtt-local-pe-config-table.md %}
{% endif %}

##### Local CoAP transport parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/transport-coap-local-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/transport-coap-local-pe-config-table.md %}
{% endif %}

##### Local LwM2M transport parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/transport-lwm2m-local-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/transport-lwm2m-local-pe-config-table.md %}
{% endif %}

##### Local SNMP transport parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/transport-snmp-local-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/transport-snmp-local-pe-config-table.md %}
{% endif %}

#### CoAP server parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-server-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-server-pe-config-table.md %}
{% endif %}

#### Edges parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/edges-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/edges-pe-config-table.md %}
{% endif %}

{% if docsPrefix == "pe/" %}
#### License parameters

{% include docs/user-guide/install/license-config-table.md %}
{% endif %}

#### Swagger parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/swagger-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/swagger-pe-config-table.md %}
{% endif %}

#### Common queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/queue-common-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/queue-common-pe-config-table.md %}
{% endif %}

##### In-memory queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/queue-in-memory-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/queue-in-memory-pe-config-table.md %}
{% endif %}

##### Kafka and Confluent Cloud queues parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/queue-kafka-confluent-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/queue-kafka-confluent-pe-config-table.md %}
{% endif %}

##### AWS SQS queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/queue-aws-sqs-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/queue-aws-sqs-pe-config-table.md %}
{% endif %}

##### Google Pub/Sub queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/queue-pubsub-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/queue-pubsub-pe-config-table.md %}
{% endif %}

##### Azure Service Bus queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/queue-servicebus-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/queue-servicebus-pe-config-table.md %}
{% endif %}

##### RabbitMQ queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/queue-rabbitmq-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/queue-rabbitmq-pe-config-table.md %}
{% endif %}

#### Queue topic parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/queue-topic-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/queue-topic-pe-config-table.md %}
{% endif %}

#### ThingsBoard event parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/event-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/event-pe-config-table.md %}
{% endif %}

#### ThingsBoard service parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/service-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/service-pe-config-table.md %}
{% endif %}

#### ThingsBoard metrics parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/metrics-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/metrics-pe-config-table.md %}
{% endif %}

#### Local Version Control parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-local-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-local-pe-config-table.md %}
{% endif %}

#### Notification System parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/notification-system-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/notification-system-pe-config-table.md %}
{% endif %}

### Web Report service parameters

#### Server parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/web-report-server-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/web-report-server-pe-config-table.md %}
{% endif %}

#### Report (browser) parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/web-report-browser-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/web-report-browser-pe-config-table.md %}
{% endif %}

#### Logger parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/web-report-logger-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/web-report-logger-pe-config-table.md %}
{% endif %}

{% if docsPrefix == null %}
### JavaScript Executor service (tb-js-executor) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### JavaScript Executor service (tb-pe-js-executor) parameters
{% endif %}

#### Common parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/js-executor-common-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/js-executor-common-pe-config-table.md %}
{% endif %}

#### JavaScript evaluator parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/js-executor-js-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/js-executor-js-pe-config-table.md %}
{% endif %}

#### Common queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/js-executor-queue-common-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/js-executor-queue-common-pe-config-table.md %}
{% endif %}

##### Kafka and Confluent Cloud queues parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/js-executor-queue-kafka-confluent-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/js-executor-queue-kafka-confluent-pe-config-table.md %}
{% endif %}

##### Google Pub/Sub queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/js-executor-queue-pubsub-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/js-executor-queue-pubsub-pe-config-table.md %}
{% endif %}

##### AWS SQS queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/js-executor-queue-aws-sqs-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/js-executor-queue-aws-sqs-pe-config-table.md %}
{% endif %}

##### RabbitMQ queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/js-executor-queue-rabbitmq-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/js-executor-queue-rabbitmq-pe-config-table.md %}
{% endif %}

##### Azure Service Bus queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/js-executor-queue-servicebus-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/js-executor-queue-servicebus-pe-config-table.md %}
{% endif %}

#### Logger parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/js-executor-logger-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/js-executor-logger-pe-config-table.md %}
{% endif %}

{% if docsPrefix == null %}
### Version Control Executor service (tb-vc-executor) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### Version Control Executor service (tb-pe-vc-executor) parameters
{% endif %}

#### Server parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-server-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-server-pe-config-table.md %}
{% endif %}

#### Zookeeper connection parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-zk-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-zk-pe-config-table.md %}
{% endif %}

#### Common queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-queue-common-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-queue-common-pe-config-table.md %}
{% endif %}

##### In-memory queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-queue-in-memory-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-queue-in-memory-pe-config-table.md %}
{% endif %}

##### Kafka and Confluent Cloud queues parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-queue-kafka-confluent-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-queue-kafka-confluent-pe-config-table.md %}
{% endif %}

##### AWS SQS queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-queue-aws-sqs-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-queue-aws-sqs-pe-config-table.md %}
{% endif %}

##### Google Pub/Sub queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-queue-pubsub-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-queue-pubsub-pe-config-table.md %}
{% endif %}

##### Azure Service Bus queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-queue-servicebus-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-queue-servicebus-pe-config-table.md %}
{% endif %}

##### RabbitMQ queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-queue-rabbitmq-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-queue-rabbitmq-pe-config-table.md %}
{% endif %}

#### Queue topic parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-queue-topic-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-queue-topic-pe-config-table.md %}
{% endif %}

#### Version Control parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-vc-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-vc-pe-config-table.md %}
{% endif %}

#### Usage statistics parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-usage-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-usage-pe-config-table.md %}
{% endif %}

#### Metrics parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-metrics-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-metrics-pe-config-table.md %}
{% endif %}

#### Service parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-service-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-service-pe-config-table.md %}
{% endif %}

#### Spring parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/vc-executor-spring-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/vc-executor-spring-pe-config-table.md %}
{% endif %}

{% if docsPrefix == null %}
### Web UI service (tb-web-ui) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### Web UI service (tb-pe-web-ui) parameters
{% endif %}

#### Server Parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/web-ui-server-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/web-ui-server-pe-config-table.md %}
{% endif %}

#### Proxy parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/web-ui-proxy-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/web-ui-proxy-pe-config-table.md %}
{% endif %}

#### Logger parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/web-ui-logger-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/web-ui-logger-pe-config-table.md %}
{% endif %}

{% if docsPrefix == null %}
### HTTP Transport service (tb-http-transport) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### HTTP Transport service (tb-pe-http-transport) parameters
{% endif %}

#### Server Parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-server-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-server-pe-config-table.md %}
{% endif %}

#### Zookeeper connection parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-zk-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-zk-pe-config-table.md %}
{% endif %}

#### Cache parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-cache-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-cache-pe-config-table.md %}
{% endif %}

#### Redis parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-redis-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-redis-pe-config-table.md %}
{% endif %}

#### Transport parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-transport-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-transport-pe-config-table.md %}
{% endif %}

#### Common queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-queue-common-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-queue-common-pe-config-table.md %}
{% endif %}

##### Kafka and Confluent Cloud queues parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-queue-kafka-confluent-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-queue-kafka-confluent-pe-config-table.md %}
{% endif %}

##### AWS SQS queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-queue-aws-sqs-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-queue-aws-sqs-pe-config-table.md %}
{% endif %}

##### Google Pub/Sub queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-queue-pubsub-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-queue-pubsub-pe-config-table.md %}
{% endif %}

##### Azure Service Bus queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-queue-servicebus-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-queue-servicebus-pe-config-table.md %}
{% endif %}

##### RabbitMQ queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-queue-rabbitmq-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-queue-rabbitmq-pe-config-table.md %}
{% endif %}

#### Queue topic parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-queue-topic-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-queue-topic-pe-config-table.md %}
{% endif %}

#### Service parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-service-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-service-pe-config-table.md %}
{% endif %}

#### Metrics parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-metrics-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-metrics-pe-config-table.md %}
{% endif %}

#### Spring parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/http-transport-spring-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/http-transport-spring-pe-config-table.md %}
{% endif %}

{% if docsPrefix == null %}
### MQTT Transport service (tb-mqtt-transport) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### MQTT Transport service (tb-pe-mqtt-transport) parameters
{% endif %}

#### Server Parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-server-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-server-pe-config-table.md %}
{% endif %}

#### Zookeeper connection parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-zk-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-zk-pe-config-table.md %}
{% endif %}

#### Cache parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-cache-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-cache-pe-config-table.md %}
{% endif %}

#### Redis parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-redis-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-redis-pe-config-table.md %}
{% endif %}

#### Transport parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-transport-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-transport-pe-config-table.md %}
{% endif %}

#### Common queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-queue-common-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-queue-common-pe-config-table.md %}
{% endif %}

##### Kafka and Confluent Cloud queues parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-queue-kafka-confluent-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-queue-kafka-confluent-pe-config-table.md %}
{% endif %}

##### AWS SQS queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-queue-aws-sqs-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-queue-aws-sqs-pe-config-table.md %}
{% endif %}

##### Google Pub/Sub queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-queue-pubsub-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-queue-pubsub-pe-config-table.md %}
{% endif %}

##### Azure Service Bus queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-queue-servicebus-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-queue-servicebus-pe-config-table.md %}
{% endif %}

##### RabbitMQ queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-queue-rabbitmq-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-queue-rabbitmq-pe-config-table.md %}
{% endif %}

#### Queue topic parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-queue-topic-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-queue-topic-pe-config-table.md %}
{% endif %}

#### Service parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-service-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-service-pe-config-table.md %}
{% endif %}

#### Metrics parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-metrics-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-metrics-pe-config-table.md %}
{% endif %}

#### Spring parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/mqtt-transport-spring-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/mqtt-transport-spring-pe-config-table.md %}
{% endif %}

{% if docsPrefix == null %}
### CoAP Transport service (tb-coap-transport) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### CoAP Transport service (tb-pe-coap-transport) parameters
{% endif %}

#### Server Parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-server-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-server-pe-config-table.md %}
{% endif %}

#### Zookeeper connection parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-zk-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-zk-pe-config-table.md %}
{% endif %}

#### Cache parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-cache-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-cache-pe-config-table.md %}
{% endif %}

#### Redis parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-redis-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-redis-pe-config-table.md %}
{% endif %}

#### Transport parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-transport-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-transport-pe-config-table.md %}
{% endif %}

#### CoAP server parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-coap-server-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-coap-server-pe-config-table.md %}
{% endif %}

#### Common queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-queue-common-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-queue-common-pe-config-table.md %}
{% endif %}

##### Kafka and Confluent Cloud queues parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-queue-kafka-confluent-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-queue-kafka-confluent-pe-config-table.md %}
{% endif %}

##### AWS SQS queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-queue-aws-sqs-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-queue-aws-sqs-pe-config-table.md %}
{% endif %}

##### Google Pub/Sub queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-queue-pubsub-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-queue-pubsub-pe-config-table.md %}
{% endif %}

##### Azure Service Bus queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-queue-servicebus-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-queue-servicebus-pe-config-table.md %}
{% endif %}

##### RabbitMQ queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-queue-rabbitmq-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-queue-rabbitmq-pe-config-table.md %}
{% endif %}

#### Queue topic parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-queue-topic-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-queue-topic-pe-config-table.md %}
{% endif %}

#### Service parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-service-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-service-pe-config-table.md %}
{% endif %}

#### Metrics parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-metrics-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-metrics-pe-config-table.md %}
{% endif %}

#### Spring parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/coap-transport-spring-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/coap-transport-spring-pe-config-table.md %}
{% endif %}

{% if docsPrefix == null %}
### LWM2M Transport service (tb-lwm2m-transport) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### LWM2M Transport service (tb-pe-lwm2m-transport) parameters
{% endif %}

#### Server Parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-server-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-server-pe-config-table.md %}
{% endif %}

#### Zookeeper connection parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-zk-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-zk-pe-config-table.md %}
{% endif %}

#### Cache parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-cache-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-cache-pe-config-table.md %}
{% endif %}

#### Redis parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-redis-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-redis-pe-config-table.md %}
{% endif %}

#### Transport parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-transport-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-transport-pe-config-table.md %}
{% endif %}

#### Common queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-queue-common-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-queue-common-pe-config-table.md %}
{% endif %}

##### Kafka and Confluent Cloud queues parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-queue-kafka-confluent-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-queue-kafka-confluent-pe-config-table.md %}
{% endif %}

##### AWS SQS queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-queue-aws-sqs-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-queue-aws-sqs-pe-config-table.md %}
{% endif %}

##### Google Pub/Sub queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-queue-pubsub-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-queue-pubsub-pe-config-table.md %}
{% endif %}

##### Azure Service Bus queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-queue-servicebus-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-queue-servicebus-pe-config-table.md %}
{% endif %}

##### RabbitMQ queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-queue-rabbitmq-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-queue-rabbitmq-pe-config-table.md %}
{% endif %}

#### Queue topic parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-queue-topic-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-queue-topic-pe-config-table.md %}
{% endif %}

#### Service parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-service-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-service-pe-config-table.md %}
{% endif %}

#### Metrics parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-metrics-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-metrics-pe-config-table.md %}
{% endif %}

#### Spring parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/lwm2m-transport-spring-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/lwm2m-transport-spring-pe-config-table.md %}
{% endif %}

{% if docsPrefix == null %}
### SNMP Transport service (tb-snmp-transport) parameters
{% endif %}

{% if docsPrefix == "pe/" %}
### SNMP Transport service (tb-pe-snmp-transport) parameters
{% endif %}

#### Server Parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-server-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-server-pe-config-table.md %}
{% endif %}

#### Zookeeper connection parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-zk-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-zk-pe-config-table.md %}
{% endif %}

#### Cache parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-cache-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-cache-pe-config-table.md %}
{% endif %}

#### Redis parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-redis-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-redis-pe-config-table.md %}
{% endif %}

#### Transport parameters
{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-transport-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-transport-pe-config-table.md %}
{% endif %}

#### Common queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-queue-common-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-queue-common-pe-config-table.md %}
{% endif %}

##### Kafka and Confluent Cloud queues parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-queue-kafka-confluent-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-queue-kafka-confluent-pe-config-table.md %}
{% endif %}

##### AWS SQS queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-queue-aws-sqs-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-queue-aws-sqs-pe-config-table.md %}
{% endif %}

##### Google Pub/Sub queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-queue-pubsub-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-queue-pubsub-pe-config-table.md %}
{% endif %}

##### Azure Service Bus queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-queue-servicebus-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-queue-servicebus-pe-config-table.md %}
{% endif %}

##### RabbitMQ queue parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-queue-rabbitmq-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-queue-rabbitmq-pe-config-table.md %}
{% endif %}

#### Queue topic parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-queue-topic-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-queue-topic-pe-config-table.md %}
{% endif %}

#### Service parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-service-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-service-pe-config-table.md %}
{% endif %}

#### Metrics parameters

{% comment %}
todo: make CE version of config
reason: there should be separate versions in case some feature will be added for PE exclusively, even if currently configs are the same
{% if docsPrefix == null %}
{% include docs/user-guide/install/snmp-transport-metrics-config-table.md %}
{% endif %}
{% endcomment %}

{% if docsPrefix == "pe/" %}
{% include docs/user-guide/install/snmp-transport-metrics-pe-config-table.md %}
{% endif %}

### logback.xml

The configuration file for logging. Allows controlling the log level, the size of log files and the total size/volume of
logs.
