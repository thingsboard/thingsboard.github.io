{% include templates/edge/install/prerequisites.md %}

### Edge Installation and Configuration

#### Guided Installation Using ThingsBoard Server Pre-configured Instructions

{% include templates/edge/install/tb-server-pre-configured-install-instructions.md %}

#### Manual Installation and Configuration

If, for any reason, you are unable to use the prepared ThingsBoard Server Instructions above, please follow the generic installation [steps](/docs/user-guide/install/{{docsPrefix}}installation-options/){:target="_blank"}.
These steps will guide you through installing and configuring the Edge by yourself.

### Accessing User Interfaces: URLs and Credentials

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
{% capture contenttogglespec %}
Cloud<br><small>Connect Edge to https://thingsboard.cloud</small>%,%cloud%,%templates/edge/pe-cloud.md%br%
On-premise server<br><small>Connect Edge to on-premise instance</small>%,%on-premise%,%templates/edge/on-premise-cloud.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="cloudType" toggle-spec=contenttogglespec %}
{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
{% capture contenttogglespec2 %}
Live Demo<br><small>Connect Edge to https://demo.thingsboard.io</small>%,%cloud%,%templates/edge/ce-cloud.md%br%
On-premise server<br><small>Connect Edge to on-premise instance</small>%,%on-premise%,%templates/edge/on-premise-cloud.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="cloudType" toggle-spec=contenttogglespec2 %}
{% endif %}

{% include templates/edge/oauth2-not-supported.md %}

{% include templates/edge/bind-port-changed-banner.md %}
