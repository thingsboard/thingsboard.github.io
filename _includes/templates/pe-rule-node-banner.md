{% capture peRuleNodeContent %}
Only [**Professional Edition**](/products/thingsboard-pe/) supports **{{ rulenode }}** Rule Node.<br>
Use [**ThingsBoard Cloud**](https://thingsboard.cloud/signup) or [**install**](/docs/user-guide/install/pe/installation-options/) your own platform instance.
{% endcapture %}
{% include templates/info-banner.md title="Professional Rule Node" content=peRuleNodeContent %}
