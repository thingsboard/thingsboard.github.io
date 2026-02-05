{% capture products_compatibility %}
**Compatibility check before upgrading**

If you are using Edge PE or Trendz Analytics together with ThingsBoard, verify that your target ThingsBoard version is compatible with the currently installed versions of these components. Upgrade them if required to ensure compatibility.

- **Edge PE:** [Releases table](/docs/pe/edge/releases/releases-table/)  
- **Trendz Analytics:** [Upgrade instructions](/docs/trendz/install/trndz-upgrade-instructions/)

{% endcapture %}
{% include templates/warn-banner.md content=products_compatibility %}