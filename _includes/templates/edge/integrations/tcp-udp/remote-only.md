{% capture remote_note %}
{{integrationName}} Integration can only be started as a [Remote Integration](/docs/pe/edge/user-guide/integrations/remote-integrations){: target="_blank"}. 
It can be started on the same machine, where the TB Edge instance is running,
or you can start it on another machine that has access to the **TB Edge** instance over the network.
{% endcapture %}
{% include templates/info-banner.md content=remote_note %}