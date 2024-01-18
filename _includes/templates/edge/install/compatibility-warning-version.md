{% capture update_server_first %}
**Please make sure that ThingsBoard Server version is {{serverVersion}} or above before updating ThingsBoard Edge to this version**.

If ThingsBoard Server version is below {{serverVersion}}, please follow upgrade ThingsBoard server [upgrade instructions](/docs/user-guide/install/{{docsPrefix}}upgrade-instructions/{{updateServerLink}}){:target="_blank"} first.
{% endcapture %}
{% include templates/warn-banner.md content=update_server_first %}