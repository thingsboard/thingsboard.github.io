TBMQ v2.1.0 introduces enhancements, including a new Integration Executor microservice and bumped versions for third-party services.

#### Add Integration Executor microservice

This release adds support for external integrations via the new [Integration Executor](/docs/{{docsPrefix}}mqtt-broker/integrations/) microservice.

To retrieve the latest configuration files, including those for Integration Executors, pull the updates from the release branch. 
Follow the steps outlined in the [run upgrade instructions](#run-upgrade) up to the execution of the upgrade script (do not execute **.sh** commands yet).

#### Update third-party services

{% include templates/mqtt-broker/upgrade/upgrade-third-parties-for-2.1.0-release-cluster.md %}
