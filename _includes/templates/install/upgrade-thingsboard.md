**Keep Your Platform Secure and Up-to-Date**

When a new ThingsBoard release becomes available, we provide a streamlined update process to ensure your system benefits from the latest features and security patches without any risk to your data.

{% capture sequentiall_upgrade_note %}
**To maintain database integrity and system stability, please perform upgrades sequentially (e.g., v4.0.2 → v4.1.0 → v4.2.0).**

{% endcapture %}
{% include templates/info-banner.md content=sequentiall_upgrade_note %}

{% assign upgrade_url = "/docs/user-guide/install/upgrade-instructions/" %}

{% if docsPrefix == "pe/" %}
  {% assign upgrade_url = "/docs/pe/user-guide/install/upgrade-instructions/" %}
{% endif %}

Please refer to our official <a href="{{ upgrade_url }}">Upgrade Instructions</a> for detailed steps tailored to your current deployment environment.

