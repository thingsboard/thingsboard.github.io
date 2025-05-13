{% capture peFeatureContent %}
Only [**Professional Edition**](/products/thingsboard-pe/){:target="_blank"} supports **{{ feature }}** feature.<br>
Use [**ThingsBoard Cloud**](https://{{hostName}}/signup){:target="_blank"} or [**install**](/docs/user-guide/install/pe/installation-options/){:target="_blank"} your own platform instance.
{% endcapture %}
{% include templates/info-banner.md title="ThingsBoard PE Feature" content=peFeatureContent %}
