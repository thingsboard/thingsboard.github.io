{% capture patch_restrictions %}
If you are upgrading from **{{minorVersion}}**, you **MUST** run the script below. However, if you are upgrading from version **{{mainteneceVersion}}**,
**DO NOT** run the upgrade script; proceed directly to starting the Edge service.
{% endcapture -%}

{% include templates/warn-banner.md content=patch_restrictions %}

{% if page.url contains 'centos' or page.url contains 'ubuntu' %}

Upgrade the **ThingsBoard Edge** service:
```bash
sudo /usr/share/tb-edge/bin/install/upgrade.sh 
```
{: .copy-code}

{% elsif page.url contains 'windows' %}
Upgrade the **ThingsBoard Edge** service:
```bash
C:\tb-edge>upgrade.bat 
```
{: .copy-code}
**Note:** The upgrade script must be run with Administrator privileges.

{% elsif docsPrefix == "pe/edge/" and page.url contains 'docker' %}
Upgrade the **ThingsBoard Edge** service:
```bash
docker compose run mytbedge upgrade-tb-edge-pe.sh
```
{: .copy-code}

{% elsif docsPrefix == "edge/" and page.url contains 'docker' %}
Upgrade the **ThingsBoard Edge** service:
```bash
docker compose run mytbedge upgrade-tb-edge.sh
```
{: .copy-code}
{% endif %}