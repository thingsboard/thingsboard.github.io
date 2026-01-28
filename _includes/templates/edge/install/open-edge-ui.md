{% if docsPrefix == 'pe/edge/' %}
{% assign cloudLink = " or [**ThingsBoard Cloud**](https://thingsboard.cloud/signup){: target="_blank"}" %}
{% else %}
{% assign cloudLink = "" %}
{% endif %}

Once the **Edge** service is started, open the **Edge UI** at [http://localhost:8080](http://localhost:8080){: target="_blank"}.

{% include templates/edge/bind-port-changed-banner.md %}

Please use your tenant credentials from **ThingsBoard Server** {{cloudLink}}to log in to the **ThingsBoard Edge**.