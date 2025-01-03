{% if docsPrefix == 'pe/edge/' %}
{% assign cloudLink = "[**ThingsBoard Cloud**](https://thingsboard.cloud/signup)" %}
{% else %}
{% assign cloudLink = "[**ThingsBoard Live Demo**](https://demo.thingsboard.io/signup)" %}
{% endif %}

Once the **Edge** service is started, open the **Edge UI** at [http://localhost:8080](http://localhost:8080){: target="_blank"}.

{% include templates/edge/bind-port-changed-banner.md %}

Please use your tenant credentials from local Server instance or {{cloudLink}}{: target="_blank"} to log in to the **ThingsBoard Edge**.