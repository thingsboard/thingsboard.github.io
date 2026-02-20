{% capture tb_3_7_0_upgrade_note %}
**Important note before upgrading to ThingsBoard 3.7**

ThingsBoard backend was migrated to Java 17. Install JDK 17 and ensure that system's default Java version is set to 17.

**Ubuntu/Debian:**

```bash
sudo apt update && sudo apt install openjdk-17-jdk-headless
sudo update-alternatives --config java
```

**CentOS/RHEL:**

```bash
sudo dnf install java-17-openjdk-headless
sudo update-alternatives --config java
```

{% endcapture %}
{% include templates/warn-banner.md content=tb_3_7_0_upgrade_note %}
