{% capture peFeatureContent %}
Only [**Professional Edition**](/products/thingsboard-pe/) supports **{{ feature }}** feature.<br>
Use [**ThingsBoard Cloud**](https://thingsboard.cloud/signup) or [**install**](/docs/user-guide/install/pe/installation-options/) your own platform instance.
{% endcapture %}
{% include templates/info-banner.md title="ThingsBoard PE Feature" content=peFeatureContent %}
