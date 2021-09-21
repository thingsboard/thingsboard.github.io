##### ThingsBoard Cloud server 

To start using ThingsBoard **Edge** you need to have {{currentThingsBoardVersion}} server that supports edge functionality up and running. 

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
{% include templates/edge/obtain-pe-cloud.md %}
{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
{% include templates/edge/obtain-ce-cloud.md %}
{% endif %}