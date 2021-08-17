{% include templates/edge/prerequisites.md %}

##### Provisioning edge on cloud and installation

Additionally, you will need to have ThingsBoard **Edge** up and running and connected to the {{currentThingsBoardVersion}} server.

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
To provision ThingsBoard **Edge** on {{currentThingsBoardVersion}} server please visit this guide [Provision ThingsBoard Edge on {{currentThingsBoardVersion}} server](/docs/edge/provision-edge-on-server-pe/).
{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
To provision ThingsBoard **Edge** on {{currentThingsBoardVersion}} server please visit this guide [Provision ThingsBoard Edge on {{currentThingsBoardVersion}} server](/docs/edge/provision-edge-on-server-ce/).
{% endif %}

Once ThingsBoard **Edge** provisioned on {{currentThingsBoardVersion}} server please follow [Installation Guide](/docs/edge/install/installation-options/) - this guide will help you to install ThingsBoard **Edge** and connect it to {{currentThingsBoardVersion}} server.

If you are running {{currentThingsBoardVersion}} locally then server UI will be available using the URL: [http://localhost:8080](http://localhost:8080).
You may use username **tenant@thingsboard.org** and password **tenant**.
 
{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
In case you are using [Live Demo](https://demo.thingsboard.io/signup) server please use your tenant credentials.
{% endif %}

ThingsBoard **Edge** UI will be available using the URL: [http://localhost:8080](http://localhost:8080).
You may use your tenant credentials to log in (username **tenant@thingsboard.org** and password **tenant** in case local server deployment).

{% include templates/edge/bind-port-changed-banner.md %}