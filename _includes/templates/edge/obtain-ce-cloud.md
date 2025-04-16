
{% capture contenttogglespec %}
Live Demo%,%cloud%,%templates/edge/install/prerequisites-ce-cloud.md%br%
Local Server%,%on-premise%,%templates/edge/install/prerequisites-on-premise.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="cloudType" toggle-spec=contenttogglespec %}