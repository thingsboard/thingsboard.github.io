{% capture tb_3_5_0_upgrade_note %}
**Important note before upgrading to ThingsBoard 3.5**

ThingsBoard UI was migrated to Angular 15. You need to re-build your custom widgets and rule nodes (which use UI) on Angular 15.

We suggest consulting [**this guide**](https://v15.material.angular.io/guide/mdc-migration).

{% endcapture %}
{% include templates/warn-banner.md content=tb_3_5_0_upgrade_note %}