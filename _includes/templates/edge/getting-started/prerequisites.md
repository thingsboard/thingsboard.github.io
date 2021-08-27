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

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
{% capture contenttogglespec %}
Cloud<br/><small>Connect edge to https://thingsboard.cloud</small>%,%ce%,%templates/edge/pe-cloud.md%br%
On-premise server<br/><small>Connect edge to on-premise instance</small>%,%pe%,%templates/edge/on-premise-cloud.md{% endcapture %}
{% include content-toggle.html content-toggle-id="cloudType" toggle-spec=contenttogglespec %}
{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
{% capture contenttogglespec %}
Live Demo<br/><small>Connect edge to https://demo.thingsboard.io</small>%,%ce%,%templates/edge/ce-cloud.md%br%
On-premise server<br/><small>Connect edge to on-premise instance</small>%,%pe%,%templates/edge/on-premise-cloud.md{% endcapture %}
{% include content-toggle.html content-toggle-id="cloudType" toggle-spec=contenttogglespec %}
{% endif %}

{% include templates/edge/bind-port-changed-banner.md %} 

We are going to refer to this URL as **http://EDGE_URL** below in tutorial.