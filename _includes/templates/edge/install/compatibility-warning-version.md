{% capture update_server_first %}
Ensure your <b>ThingsBoard Server is up to date</b> before updating ThingsBoard Edge.

If your Server version is outdated, [upgrade it first](/docs/{{peDocsPrefix}}user-guide/install/upgrade-instructions/{{updateServerLink}}/){:target="_blank"}.

The following instructions are applicable for <b>ThingsBoard Edge {{previousVersion}}</b> version.
{% endcapture %}
{% include templates/warn-banner.md content=update_server_first %}