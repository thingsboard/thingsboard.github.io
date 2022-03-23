We assume you have completed the following guides and reviewed the articles listed below:

{% if docsPrefix == 'pe/edge/' %}
* [Getting Started](/docs/getting-started-guides/helloworld-pe/) guide.{% endif %}
{% if docsPrefix == 'edge/' %}
* [Getting Started](/docs/getting-started-guides/helloworld/) guide.{% endif %}
* [Rule Engine Overview](/docs/{{cloudDocsPrefix}}user-guide/rule-engine-2-0/overview/) article.
* [ThingsBoard Edge Getting Started](/docs/{{docsPrefix}}getting-started/) article.
* [Edge Rule Engine Overview](/docs/{{docsPrefix}}rule-engine/general/) guide.

Please make sure that you have **{{appPrefix}}** server up and running. Additionally, ThingsBoard **Edge** must be up, running and connected to the cloud.

If you have these prerequisites in place let's go to next steps.

In other case please visit this link to provision edge on server [Provision Edge on {{appPrefix}} server](/docs/{{docsPrefix}}provision-edge-on-server/).

Once Edge provisioned on a server, please install it and connect to server using this [guide](/docs/user-guide/install/{{docsPrefix}}installation-options/).

{% include templates/edge/ui-url-aliases-banner.md %} 
