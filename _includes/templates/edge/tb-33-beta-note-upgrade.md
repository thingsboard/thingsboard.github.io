<br>
{% capture beta_note %}
**Important note before upgrading server to ThingsBoard 3.3beta**
 - ThingsBoard Edge and ThingsBoard **3.3beta** version that supports edge functionality is currently in **beta** phase, so please upgrade only in case you are interested in evaluating the Edge functionality
 - Please make sure you have backup of your database before upgrading - especially if this ThingsBoard server instance has some critical data
 - Usage of the **beta** version in your production environment not recommended and could be used only on your own risk
{% endcapture %}
{% include templates/info-banner.md content=beta_note %}