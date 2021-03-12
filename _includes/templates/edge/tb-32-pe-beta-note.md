<br>
{% capture pe_beta_note %}
{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
 - At the moment you can evaluate ThingsBoard Edge using ThingsBoard **Professional Edition** server **3.3beta** version
 - [ThingsBoard Cloud](https://thingsboard.cloud/signup) version that supports edge functionality will be available with **3.3 release**
{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
 - At the moment you can evaluate ThingsBoard Edge using [Live Demo](https://demo.thingsboard.io/signup) or ThingsBoard **CE** server **3.3beta** version
{% endif %}
{% endcapture %}
{% include templates/info-banner.md content=pe_beta_note %}