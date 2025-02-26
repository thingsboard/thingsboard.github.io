
{% capture contenttogglespec %}
ThingsBoard Cloud%,%cloud%,%templates/edge/install/prerequisites-pe-cloud.md%br%
Local Server%,%on-premise%,%templates/edge/install/prerequisites-on-premise.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="cloudType" toggle-spec=contenttogglespec %}
