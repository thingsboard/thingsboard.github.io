{% if currentGuide != "GettingStartedGuide" %}
- [**Getting started guide**](/docs/{{docsPrefix}}mqtt-broker/getting-started/) - This guide provide quick overview of TBMQ.
{% endif %}
{% if currentGuide != "InstallationGuides" %}
- [**Installation guides**](/docs/{{docsPrefix}}mqtt-broker/install/installation-options/) - Learn how to set up TBMQ using Docker or deploy it in K8S environments on AWS, GCP, and Azure.
{% endif %}
{% if currentGuide != "SecurityGuide" %}
- [**Security guide**](/docs/{{docsPrefix}}mqtt-broker/security/overview/) - Learn how to enable authentication and authorization for MQTT clients.
{% endif %}
{% if currentGuide != "ConfigurationGuide" %}
- [**Configuration guide**](/docs/{{docsPrefix}}mqtt-broker/install/config/) - Learn about TBMQ configuration files and parameters.
{% endif %}
{% if currentGuide != "MQTTClientTypeGuide" %}
- [**MQTT client type guide**](/docs/{{docsPrefix}}mqtt-broker/user-guide/mqtt-client-type/) - Learn about TBMQ client types.
{% endif %}
{% if currentGuide != "TBIntegrationGuide" %}
- [**Integration with ThingsBoard**](/docs/{{docsPrefix}}mqtt-broker/user-guide/integrations/how-to-connect-thingsboard-to-tbmq/) - Learn about how to integrate TBMQ with ThingsBoard.
{% endif %}
