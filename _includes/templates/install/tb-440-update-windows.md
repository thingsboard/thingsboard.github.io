{% capture tb_4_4_0_upgrade_note %}
**Important note before upgrading to ThingsBoard 4.4**

ThingsBoard backend was migrated to Java 25. Install JDK 25 and ensure that system's default Java version is set to 25.

Please refer to [**Step 1 of the installation guide**](/docs/user-guide/install/windows/#step-1-install-java-25-openjdk) for detailed instructions.

{% if docsPrefix == "pe/" %}
If you are running [remote integrations](/docs/pe/user-guide/integrations/remote-integrations/) on bare metal, ensure Java 25 is also installed on those servers.
{% endif %}
{% endcapture %}
{% include templates/warn-banner.md content=tb_4_4_0_upgrade_note %}
{% include templates/install/tb-440-tbel-note.md %}
