{% if docsPrefix == 'pe/edge/' %}
{% assign cloudLink = "[**ThingsBoard Cloud**](https://thingsboard.cloud/signup)" %}
{% else %}
{% assign cloudLink = "[**ThingsBoard Live Demo**](https://demo.thingsboard.io/signup)" %}
{% endif %}

Once started, you will be able to open **ThingsBoard Edge UI** using the following link `http://localhost:8080`.

{% include templates/edge/bind-port-changed-banner.md %}

Please use your tenant credentials from local Server instance or {{cloudLink}} to log in to the ThingsBoard Edge.