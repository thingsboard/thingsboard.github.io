{% if docsPrefix == "pe/" %}
{% capture paas_only %}
At the moment, the Solution Templates are only available in [ThingsBoard Cloud](/products/paas/). Supporting solution templates in [ThingsBoard PE](/products/thingsboard-pe/) is scheduled for version 3.3.
{% endcapture %}
{% include templates/info-banner.md content=paas_only %}
{% endif %}