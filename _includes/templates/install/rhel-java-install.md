ThingsBoard service is running on Java 25. Follow these instructions to install OpenJDK 25:

{% capture rhel8_note %}
**Note:** `java-25-openjdk` requires RHEL 9 or later. RHEL 8 users should upgrade to RHEL 9 before proceeding.
{% endcapture %}
{% include templates/info-banner.md content=rhel8_note %}

```bash
sudo dnf install java-25-openjdk-headless
```
{: .copy-code}

Please don't forget to configure your operating system to use OpenJDK 25 by default.
You can configure which version is the default using the following command:

```bash
sudo update-alternatives --config java
```
{: .copy-code}

You can check the installation using the following command:

```bash
java -version
```
{: .copy-code}

Expected command output is:

```text
openjdk version "25.x.xx"
OpenJDK Runtime Environment (...)
OpenJDK 64-Bit Server VM (build ...)
```
