We assume you have completed the following guides and reviewed the articles listed below:

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
* [Getting Started](/docs/edge/getting-started/getting-started-pe) guide.{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
* [Getting Started](/docs/edge/getting-started/getting-started-ce) guide.{% endif %}
* [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/) article.
* [ThingsBoard Edge Getting Started](/docs/edge/getting-started/) article.
* [Edge Rule Engine Overview](/docs/edge/rule-engine/general/) guide.

Please make sure that you have **{{currentThingsBoardVersion}}** server up and running. Additionally, ThingsBoard **Edge** must be up, running and connected to the cloud.

If you have these prerequisites in place let's go to next steps.

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
In other case please review how to [Provision Edge on {{currentThingsBoardVersion}} server](/docs/edge/provision-edge-on-server-pe/) and once it's provisioned please install and connect edge to cloud using this [guide](/docs/edge/install/installation-options/).
{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
In other case please review how to [Provision Edge on {{currentThingsBoardVersion}} server](/docs/edge/provision-edge-on-server-ce/) and once it's provisioned please install and connect edge to cloud using this [guide](/docs/edge/install/installation-options/).
{% endif %}

