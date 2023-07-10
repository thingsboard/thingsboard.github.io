{% include templates/edge/install/prerequisites.md %}

##### Edge installation

{% include templates/edge/provision/edge-installation.md %} 

##### User Credentials and access URLs

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
{% capture contenttogglespec %}
Cloud<br/><small>Connect edge to https://thingsboard.cloud</small>%,%cloud%,%templates/edge/pe-cloud.md%br%
On-premise server<br/><small>Connect edge to on-premise instance</small>%,%on-premise%,%templates/edge/on-premise-cloud.md{% endcapture %}
{% include content-toggle.html content-toggle-id="cloudType" toggle-spec=contenttogglespec %}
{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
{% capture contenttogglespec %}
Live Demo<br/><small>Connect edge to https://demo.thingsboard.io</small>%,%cloud%,%templates/edge/ce-cloud.md%br%
On-premise server<br/><small>Connect edge to on-premise instance</small>%,%on-premise%,%templates/edge/on-premise-cloud.md{% endcapture %}
{% include content-toggle.html content-toggle-id="cloudType" toggle-spec=contenttogglespec %}
{% endif %}

{% include templates/edge/bind-port-changed-banner.md %} 

We are going to refer to this URL as **http://EDGE_URL** below in tutorial.