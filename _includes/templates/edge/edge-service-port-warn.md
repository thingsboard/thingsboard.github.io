{% capture edge_service_port_warn %}
**NOTE**: This port must be accessible by edge to be able to communicate. Please update your firewall settings or docker configuration if required.

{% endcapture %}
{% include templates/warn-banner.md content=edge_service_port_warn %}