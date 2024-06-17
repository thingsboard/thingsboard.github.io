{% capture tb_3_7_0_upgrade_note %}
**Important note before upgrading to ThingsBoard 3.7**

ThingsBoard backend was migrated to Java 17. Install JDK 17 and ensure that system's default Java version is set to 17.

Please refer to [**Step 1 of the installation guide**](/docs/user-guide/install/windows/#step-1-install-java-17-openjdk) for detailed instructions.

{% endcapture %}
{% include templates/warn-banner.md content=tb_3_7_0_upgrade_note %}