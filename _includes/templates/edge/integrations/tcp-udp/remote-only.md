{% capture remote_note %}
{{integrationName}} Integration can be started only as [Remote Integration](/docs/pe/edge/user-guide/integrations/remote-integrations). It could be started on the same machine, where TB Edge instance is running, or you can start in on another machine, that has access over the network to the TB Edge instance.
{% endcapture %}
{% include templates/info-banner.md content=remote_note %}