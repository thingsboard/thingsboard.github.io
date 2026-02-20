{% capture tb_3_7_0_upgrade_note %}
**Important note before upgrading to ThingsBoard 3.7**

ThingsBoard backend was migrated to Java 17. Install JDK 17 and ensure that system's default Java version is set to 17.

Download and install [Adoptium OpenJDK 17](https://adoptium.net): select "Operating System" as "Windows", "Architecture" as "x64", "Version" as "17 - LTS" and download the **JDK .msi** package. Make sure you have selected "**Add to PATH**" and "**Set JAVA_HOME variable**" options during installation.

{% endcapture %}
{% include templates/warn-banner.md content=tb_3_7_0_upgrade_note %}
